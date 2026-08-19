# Reusable lead-qualification chatbot

This directory is the complete chatbot feature module. Client components, shared qualification logic, provider orchestration, persistence, Airtable, and email integrations live together. Internal imports are relative, so moving this directory does not require aliases inside the module.

Next.js API route files must remain under `app/api` because Next.js discovers endpoints from that directory. Those files are intentionally thin adapters importing from `@/chatbot/server`.

## Minimal setup in another Next.js website

1. Copy the entire `chatbot` directory into the new project's root.
2. Copy these three thin route adapters without changing their route locations:
   - `app/api/chat/route.ts`
   - `app/api/chat/extract/route.ts`
   - `app/api/leads/route.ts`
3. Run both files from `chatbot/database/migrations` in Neon in numeric order.
4. Install the required packages:

   ```bash
   npm install ai @ai-sdk/groq @neondatabase/serverless lucide-react zod
   ```

5. Render the widget once, normally in the root layout or page:

   ```tsx
   import { ChatbotWidget } from "@/chatbot";

   export default function Layout({ children }: { children: React.ReactNode }) {
     return <>{children}<ChatbotWidget /></>;
   }
   ```

6. Add the environment variables documented in `.env.example`.

The `@/` alias is part of this project's normal Next.js TypeScript setup. If a target project does not use it, only the three route-adapter imports and the one widget import need changing; imports inside `chatbot` remain untouched.

## The only regular customization file

Edit `chatbot/config.ts`. It centralizes:

- brand and assistant names;
- greetings, success, duplicate, lock, and scope messages;
- required and optional qualification questions;
- service choices and Airtable field mapping;
- semantic name/email/phone/service field IDs;
- approved business knowledge;
- starter prompts and maximum reply length;
- local-storage duration and message limits;
- API paths;
- Groq model priority, timeouts, and token limits;
- Airtable defaults and email branding.

Each question has:

```ts
{
  id: "location",
  label: "Location",
  prompt: "Where is your business located?",
  description: "The city or service area for the visitor's business.",
  type: "text",
  required: true,
  airtableField: "Location"
}
```

The UI progress, extraction prompt, missing-field behavior, confirmation summary, local answer state, and Airtable payload adapt automatically to configured questions.

## Four semantic fields

The system supports any number and order of questions, but final delivery needs four semantic roles for contact and duplicate detection:

```ts
fieldIds: {
  name: "name",
  email: "email",
  phone: "phone",
  service: "service",
}
```

The values are question IDs, not labels. You may rename a question ID as long as this mapping is updated. All four mapped questions must remain required. Additional questions can be required or optional.

If a new industry does not use a "service" concept, map `service` to its equivalent qualification field, such as `treatment`, `caseType`, or `propertyType`. The existing Neon migration retains columns named `name`, `email`, `phone`, and `service` as normalized reporting columns while the complete configurable answer object is stored as JSON.

## Styling

The UI uses Tailwind CSS and the website's existing color variables:

- `--color-primary-1`
- `--color-primary-2`
- `--color-secondary`
- `--color-bordercol`
- `--color-foreground`

Define equivalent variables in the target site's global CSS, or replace them in the component classes. No chatbot behavior depends on those colors.

## Environment variables

```env
GROQ_API_KEY=
DATABASE_URL=
AIRTABLE_PERSONAL_ACCESS_TOKEN=
AIRTABLE_BASE_ID=
AIRTABLE_TABLE_NAME=Leads
RESEND_API_KEY=
CHATBOT_EMAIL_FROM=Brand <leads@notifications.example.com>
CHATBOT_TEAM_EMAIL=team@example.com
CHATBOT_FINGERPRINT_SECRET=
```

Do not prefix server credentials with `NEXT_PUBLIC_`.

## Files by responsibility

```text
chatbot/
  config.ts                 central customization
  index.ts                  public client exports
  types.ts                  shared state contracts
  components/               widget UI and local storage
  core/                     provider-independent qualification logic
  server/
    index.ts                public server exports for API adapters
    extractor.ts            structured lead-field extraction
    prompt.ts               scoped conversational system prompt
    providers.ts            streaming and model fallback
    database.ts             final-only Neon persistence and deduplication
    integrations/           Airtable and Resend delivery
```

Never import `chatbot/server` from a client component. Use `@/chatbot` for UI and `@/chatbot/server` only in server routes.
