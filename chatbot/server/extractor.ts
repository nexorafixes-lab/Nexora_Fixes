import { generateText, Output } from "ai";
import { chatbotConfig } from "../config";
import { extractionModelOrder, getGroqClient, groqModelOptions, providerErrorSummary } from "./groq";
import { leadExtractionOutputSchema, normalizeAnswer } from "./schemas";
import type { ChatMessage, LeadAnswers, LeadExtractionResponse } from "../types";

function extractionPrompt(answers: LeadAnswers) {
  const fields = chatbotConfig.questions.map((question) => ({
    questionId: question.id,
    label: question.label,
    description: question.description,
    type: question.type,
    choices: "choices" in question ? question.choices : undefined,
  }));

  return `Extract lead facts from the visitor's latest message using the configured fields.

Configured fields: ${JSON.stringify(fields)}
Existing validated answers: ${JSON.stringify(answers)}

Rules:
- Fields may be provided in any order, and one message may contain several fields.
- Return an update only when the visitor explicitly and unambiguously provides a value.
- For every update, evidence must be an exact quote copied from the visitor's latest message that proves the value.
- Never treat a refusal, joke, placeholder, question, or unrelated phrase as a value.
- Exception for choice fields: when "Not sure" is a configured choice and the visitor clearly says they do not know or do not want to choose which option applies, return "Not sure" as the update. This is a valid needs-review value, not a refusal.
- Examples that are NOT names: "I don't want to tell you", "prefer not to say", "why do you need it?", "none of your business".
- Put a field in refusedQuestionIds when the latest visitor message explicitly refuses that field. A refusal is not an update and does not complete the field.
- For a correction such as "actually my name is Ahmad", return only the corrected field. Preserve every other existing answer.
- Put a field in clearQuestionIds only when the visitor explicitly asks to remove or clear that field without replacing it.
- Never infer an email, phone number, or name.
- Map service intent to the closest configured choice only when the intent is clear.
- Do not repeat unchanged existing answers in updates.
- Output data only through the required schema.`;
}

function getUncertainServiceUpdate(messages: Pick<ChatMessage, "role" | "content">[]) {
  const serviceQuestion = chatbotConfig.questions.find((question) => question.id === chatbotConfig.fieldIds.service);
  if (!serviceQuestion || serviceQuestion.type !== "choice") return null;
  const notSureChoice = serviceQuestion.choices?.find((choice) => choice.toLowerCase() === "not sure");
  if (!notSureChoice) return null;

  const latestUserIndex = messages.findLastIndex((message) => message.role === "user");
  if (latestUserIndex < 0) return null;
  const latest = messages[latestUserIndex].content.trim();
  const previousAssistant = messages.slice(0, latestUserIndex).findLast((message) => message.role === "assistant")?.content || "";
  const explicitlyUnsureAboutService = /\b(?:not sure|unsure|do not know|don't know|dont know|no idea)\b.{0,60}\b(?:service|option|package|solution|which one)\b|\b(?:service|option|package|solution|which one)\b.{0,60}\b(?:not sure|unsure|do not know|don't know|dont know|no idea)\b|\b(?:decide|choose)\b.{0,40}\b(?:after|during)\b.{0,30}\b(?:call|consultation)\b/i.test(latest);
  const explicitlyDeclinesService = /\b(?:do not|don't|dont|won't|would rather not)\b.{0,40}\b(?:choose|select|share|say|tell)\b.{0,50}\b(?:service|option|package)\b|\b(?:service|option|package)\b.{0,50}\b(?:do not|don't|dont|won't|would rather not)\b.{0,40}\b(?:choose|select|share|say|tell)\b/i.test(latest);
  const genericUncertainty = /^(?:i(?:'m| am)?\s*)?(?:do not know|don't know|dont know|not sure|unsure|no idea)(?:\s+(?:exactly|yet|right now))?[.!]?$/i.test(latest);
  const genericDecline = /^(?:i\s+)?(?:do not|don't|dont)\s+(?:(?:want|wish)\s+to|wanna)\s+(?:choose|select|share|say|tell)(?:\s+(?:you|it))?[.!]?$/i.test(latest);
  const assistantWasAskingForService = /\b(?:service|digital marketing|paid ads|seo|social media|website|e-?commerce|automation|branding|software|consultancy)\b/i.test(previousAssistant);

  return explicitlyUnsureAboutService || explicitlyDeclinesService || ((genericUncertainty || genericDecline) && assistantWasAskingForService)
    ? { questionId: serviceQuestion.id, value: notSureChoice }
    : null;
}

export async function extractLeadAnswers({ messages, answers }: { messages: Pick<ChatMessage, "role" | "content">[]; answers: LeadAnswers }): Promise<LeadExtractionResponse> {
  const groq = getGroqClient();
  let finalError: unknown = new Error("Every extraction model failed.");
  const uncertainServiceUpdate = getUncertainServiceUpdate(messages);

  for (const modelId of extractionModelOrder) {
    try {
      const result = await generateText({
        model: groq(modelId),
        system: extractionPrompt(answers),
        messages: messages.slice(-6),
        output: Output.object({
          name: "LeadFieldUpdates",
          description: "Only explicit lead-field updates and explicit field removals from the visitor.",
          schema: leadExtractionOutputSchema,
        }),
        temperature: 0,
        maxOutputTokens: chatbotConfig.modelLimits.extractionOutputTokens,
        maxRetries: 0,
        timeout: chatbotConfig.modelLimits.extractionTimeoutMs,
        providerOptions: { groq: groqModelOptions(modelId, true) },
      });

      const next = { ...answers };
      const clearedQuestionIds: string[] = [];
      const updatedQuestionIds: string[] = [];
      const latestUserMessage = [...messages].reverse().find((message) => message.role === "user")?.content || "";
      const normalizedLatest = latestUserMessage.normalize("NFKC").toLocaleLowerCase();
      const refusedQuestionIds = result.output.refusedQuestionIds.filter((questionId) =>
        chatbotConfig.questions.some((question) => question.id === questionId),
      );

      for (const questionId of result.output.clearQuestionIds) {
        if (!chatbotConfig.questions.some((question) => question.id === questionId)) continue;
        if (questionId in next) {
          delete next[questionId];
          clearedQuestionIds.push(questionId);
        }
      }

      for (const update of result.output.updates) {
        const question = chatbotConfig.questions.find((candidate) => candidate.id === update.questionId);
        if (!question) continue;
        const evidence = update.evidence.trim();
        if (!evidence || !normalizedLatest.includes(evidence.normalize("NFKC").toLocaleLowerCase())) continue;
        const normalized = normalizeAnswer(question, update.value);
        if (!normalized || next[question.id] === normalized) continue;
        if (question.id === chatbotConfig.fieldIds.name) {
          const escapedName = normalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const directName = new RegExp(`^(?:${escapedName})[.!]?$`, "iu").test(latestUserMessage.trim());
          const introducedName = new RegExp(`\\b(?:my name is|i am|i'm|this is|call me|you can call me)\\s+${escapedName}\\b`, "iu").test(latestUserMessage);
          const leadingName = new RegExp(`^${escapedName}(?:\\s+here)?[,!.]`, "iu").test(latestUserMessage.trim());
          if (!directName && !introducedName && !leadingName) continue;
        }
        next[question.id] = normalized;
        updatedQuestionIds.push(question.id);
      }

      if (uncertainServiceUpdate) {
        if (next[uncertainServiceUpdate.questionId] !== uncertainServiceUpdate.value) {
          next[uncertainServiceUpdate.questionId] = uncertainServiceUpdate.value;
          if (!updatedQuestionIds.includes(uncertainServiceUpdate.questionId)) updatedQuestionIds.push(uncertainServiceUpdate.questionId);
        }
        const refusedServiceIndex = refusedQuestionIds.indexOf(uncertainServiceUpdate.questionId);
        if (refusedServiceIndex >= 0) refusedQuestionIds.splice(refusedServiceIndex, 1);
      }

      return { answers: next, updatedQuestionIds, clearedQuestionIds, refusedQuestionIds };
    } catch (error) {
      finalError = error;
      console.error("Chatbot extraction model failed", { model: modelId, error: providerErrorSummary(error) });
    }
  }

  if (uncertainServiceUpdate) {
    return {
      answers: { ...answers, [uncertainServiceUpdate.questionId]: uncertainServiceUpdate.value },
      updatedQuestionIds: answers[uncertainServiceUpdate.questionId] === uncertainServiceUpdate.value ? [] : [uncertainServiceUpdate.questionId],
      clearedQuestionIds: [],
      refusedQuestionIds: [],
    };
  }

  throw finalError;
}
