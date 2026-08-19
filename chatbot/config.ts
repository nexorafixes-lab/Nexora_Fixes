export type ChatQuestionType = "text" | "email" | "phone" | "choice";
export type ChatQuestion = {
  id: string;
  label: string;
  prompt: string;
  description: string;
  type: ChatQuestionType;
  required: boolean;
  choices?: readonly string[];
  airtableField: string;
};

export const chatbotConfig = {
  // Identity and visible UI copy
  brandName: "Nexora Fixes",
  assistantName: "Nova",
  headerSubtitle: "Digital growth, clearly explained",

  // Map semantic lead roles to question IDs. The database, duplicate check,
  // and email delivery use these mappings instead of hard-coded answer keys.
  fieldIds: {
    name: "name",
    email: "email",
    phone: "phone",
    service: "service",
  },
  welcomeMessage: "Hey! Welcome to Nexora Fixes - I'm Nova. What can I help you grow today?",
  submittedMessage: "Perfect - your inquiry is with the Nexora Fixes team. We'll review it and get back to you within 12 hours.",
  duplicateMessage: "We already have an inquiry with this email and phone. The Nexora Fixes team has your details and will get back to you soon.",
  newInquiryLockedMessage: "We can’t process another request in this chat yet. You can start a new inquiry two hours after your previous submission.",

  // Conversation memory and endpoint locations
  maxReplyWords: 100,
  recentMessagesForModel: 10,
  messagesStoredLocally: 30,
  localStorageTtlMs: 2 * 60 * 60 * 1000,
  localStorageKey: "nexora-fixes-chat-v1",
  legacyLocalStorageKeys: [],
  apiPaths: {
    chat: "/api/chat",
    extract: "/api/chat/extract",
    leads: "/api/leads",
  },

  // Provider failover and token/latency limits
  models: {
    conversation: ["openai/gpt-oss-120b", "openai/gpt-oss-20b", "qwen/qwen3.6-27b"],
    extraction: ["openai/gpt-oss-20b", "qwen/qwen3.6-27b", "openai/gpt-oss-120b"],
  },
  modelLimits: {
    conversationTimeoutMs: 8_000,
    extractionTimeoutMs: 7_000,
    conversationOutputTokens: 220,
    extractionOutputTokens: 260,
  },
  integrations: {
    airtableTableName: "Leads",
    unqualifiedServiceValues: ["Other", "Not sure"],
  },

  // Email branding and business scope
  email: {
    websiteUrl: "https://www.nexorafixes.com",
    clientSubject: "We received your Nexora Fixes inquiry",
    brandInitial: "N",
  },
  scope: {
    description: "Nexora Fixes, digital marketing, paid ads, social media, websites, ecommerce, SEO, branding, content, software, apps, business automation, virtual assistance, accounts and finance support, consultancy, and the visitor's current Nexora Fixes inquiry",
    outOfScopeReply: "I'm here specifically to help with Nexora Fixes services and your digital growth inquiry. I can't help with unrelated requests, but I'd be happy to discuss your marketing, website, SEO, automation, branding, software, or business-support needs.",
  },
  starterPrompts: ["I need more leads", "I need a website", "I want automation"],

  // Add, remove, reorder, or make questions optional here. Keep the four
  // fieldIds above mapped to required questions for deduplication and email.
  questions: [
    { id: "name", label: "Name", prompt: "What name should I use?", description: "The visitor's full name.", type: "text", required: true, airtableField: "Name" },
    { id: "service", label: "Service", prompt: "Which Nexora Fixes service best matches what you need?", description: "The closest matching Nexora Fixes service or service category.", type: "choice", required: true, choices: ["Digital Marketing & Paid Ads", "Social Media Management", "Website & E-Commerce", "SEO & Organic Growth", "Graphic Design & Branding", "Software & App Development", "AI & Business Automation", "Virtual Assistance & Operations", "Accounts & Finance", "Consultancy Services", "Other", "Not sure"], airtableField: "Service" },
    { id: "email", label: "Email", prompt: "What is the best email address for the follow-up?", description: "A valid contact email address.", type: "email", required: true, airtableField: "Email" },
    { id: "phone", label: "Phone", prompt: "What phone or WhatsApp number can we reach you on?", description: "A phone number including country code when possible.", type: "phone", required: true, airtableField: "Phone" },
  ] satisfies readonly ChatQuestion[],
  knowledge: [
    "Nexora Fixes is a digital growth agency that connects strategy, creative, advertising, websites, ecommerce, software, and operational support to help businesses turn attention into measurable revenue.",
    "Digital marketing services include Meta Ads, Facebook and Instagram Ads, TikTok Ads, and Google Ads, with offer planning, audience targeting, creative direction, retargeting, budget optimization, and performance reporting.",
    "Website and ecommerce services include conversion-focused websites, landing pages, Shopify, WooCommerce, WordPress, Magento, and Wix builds designed for performance, usability, trust, and conversion.",
    "SEO services include search-intent and keyword planning, on-page optimization, technical SEO, content direction, metadata, and organic growth tracking.",
    "Social media management includes monthly content planning, polished visuals, captions, scheduling, brand-voice consistency, engagement-focused content themes, and performance review.",
    "Graphic design and branding services include logos, identity systems, campaign graphics, social creatives, presentations, and consistent visual direction for web, advertising, and social channels.",
    "Software and app development includes dashboards, portals, CRMs, booking flows, internal tools, and mobile or web apps built around real business workflows, usability, performance, and maintainable foundations.",
    "Nexora Fixes provides AI and business automation solutions. Exact platforms, integrations, workflows, and scope are confirmed after understanding the client's current process and desired outcome.",
    "Accounts and finance support includes bookkeeping assistance, account organization, reporting structures, cash-flow and expense visibility, and cleaner finance operations for better decisions.",
    "Nexora Fixes also provides virtual assistance, content solutions, strategic consultancy, and sales-growth support; clients may choose one service, combine services, or request a custom package.",
    "Nexora Fixes works with local and international clients across industries and supports websites, stores, apps, automations, and campaigns after launch.",
    "Campaign and growth performance may be measured through Google Analytics, Shopify reports, advertising dashboards, sales data, ROI, and regular performance reporting.",
    "New projects can usually begin within a few days after requirements, goals, scope, and timeline are agreed. Do not promise a start date before the team confirms it.",
    "Nexora Fixes follows privacy-conscious workflows with limited access and careful handling of client information.",
    "Nexora Fixes has offices in London, United Kingdom and Lahore, Pakistan. The published UK address is 158 Eton Road, IG1 2UJ, London, United Kingdom.",
    "Nexora Fixes has more than five years of experience and the website states that it is trusted by more than 220 clients.",
    "Pricing is not published and depends on requirements. Offer a free quote or consultation instead of inventing prices, packages, timelines, or guaranteed results.",
    "The team aims to respond to qualified inquiries within 12 hours.",
  ],
} as const;

export type ChatQuestionId = (typeof chatbotConfig.questions)[number]["id"];
export const requiredQuestions = chatbotConfig.questions.filter((question) => question.required);

function validateConfiguration() {
  const ids = chatbotConfig.questions.map((question) => question.id);
  if (new Set(ids).size !== ids.length) throw new Error("Chatbot question IDs must be unique.");

  for (const [role, questionId] of Object.entries(chatbotConfig.fieldIds)) {
    const question = chatbotConfig.questions.find((candidate) => candidate.id === questionId);
    if (!question) throw new Error(`Chatbot fieldIds.${role} points to missing question '${questionId}'.`);
    if (!question.required) throw new Error(`Chatbot fieldIds.${role} must point to a required question.`);
  }
}

validateConfiguration();
