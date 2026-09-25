// The four website forms: what each asks and how the inbox service expects it.
// Mirrors tools/feedback_inbox/kinds.py in geofast-workspace: field names and
// the platform options must match; labels, help texts and the option lists the
// server does not check (report "where", game languages) live only here.
import { gameLanguages } from "./gameLanguages";

export type FormKind = "suggestion" | "bug" | "translation" | "report";

export interface FormField {
  name: string;
  label: string;
  help?: string;
  required?: boolean;
  maxLength: number;
  widget: "text" | "textarea" | "select" | "checkbox";
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export interface FormSpec {
  kind: FormKind;
  title: string;
  description: string;
  fields: FormField[];
  /** How many screenshots may be attached (0 = no attachment control). */
  maxAttachments: number;
  /** Shown under the reference after a successful send. */
  thanks: string;
}

const PLATFORMS = ["Android", "iOS", "Both"].map((p) => ({ value: p, label: p }));

export const forms: Record<FormKind, FormSpec> = {
  suggestion: {
    kind: "suggestion",
    title: "Make a suggestion",
    description: "An idea for the game, big or small. We read every one.",
    maxAttachments: 0,
    thanks: "Thanks for the idea. Suggestions that many players ask for move up our list.",
    fields: [
      { name: "suggestion", label: "What do you suggest?", required: true, maxLength: 5000, widget: "textarea" },
      { name: "why", label: "Why would it help?", maxLength: 3000, widget: "textarea", help: "Optional. What problem it solves or what it would make more fun." },
    ],
  },
  bug: {
    kind: "bug",
    title: "Report a bug",
    description: "Something broken, stuck or wrong. Screenshots help a lot.",
    maxAttachments: 3,
    thanks: "Thanks. If we need more details we will reply to the email you gave.",
    fields: [
      { name: "what", label: "What happened?", required: true, maxLength: 5000, widget: "textarea", help: "What you expected and what happened instead." },
      { name: "steps", label: "Steps to reproduce", maxLength: 3000, widget: "textarea", placeholder: "1. Open the shop\n2. Tap …" },
      { name: "device", label: "Device model", maxLength: 80, widget: "text", placeholder: "Pixel 8, iPhone 15 …" },
      { name: "os_version", label: "OS version", maxLength: 40, widget: "text", placeholder: "Android 15, iOS 18.1 …" },
      { name: "game_version", label: "Game version", maxLength: 40, widget: "text", help: "Shown on the credits screen in the game." },
      { name: "platform", label: "Platform", maxLength: 20, widget: "select", options: PLATFORMS },
    ],
  },
  translation: {
    kind: "translation",
    title: "Report a translation error",
    description: "A wrong, awkward or missing translation. Native speakers make the game better for everyone.",
    maxAttachments: 1,
    thanks: "Thanks. Translation fixes ship with the next game update.",
    fields: [
      {
        name: "language",
        label: "Language",
        required: true,
        maxLength: 60,
        widget: "select",
        // The stored value carries the game's language code too, so a report
        // maps straight to its .po file (e.g. "Español (España) [es-ES]").
        options: gameLanguages.map((l) => ({ value: `${l.name} [${l.code}]`, label: l.name })),
      },
      { name: "where", label: "Where in the game", required: true, maxLength: 200, widget: "text", placeholder: "Shop, Battle Pass card …" },
      { name: "current_text", label: "The text as it is now", required: true, maxLength: 2000, widget: "textarea" },
      { name: "suggested_text", label: "Your suggested text", maxLength: 2000, widget: "textarea" },
    ],
  },
  report: {
    kind: "report",
    // The /report page carries the "Report a player" heading and the
    // explanation above this card, so the card itself stays short.
    title: "Your report",
    description: "As precise as you can. Screenshots of the message or the profile help most.",
    maxAttachments: 3,
    thanks: "Thanks for the report. A person reads it; the player you reported does not learn who reported them.",
    fields: [
      { name: "reported_username", label: "Username of the player you are reporting", required: true, maxLength: 64, widget: "text" },
      { name: "what", label: "What happened?", required: true, maxLength: 5000, widget: "textarea", help: "Quote what was said or describe what was done, as precisely as you can." },
      {
        name: "where",
        label: "Where did it happen?",
        maxLength: 60,
        widget: "select",
        options: [
          { value: "In chat", label: "In chat" },
          { value: "Username or profile", label: "Username or profile" },
          { value: "In a battle (cheating, collusion)", label: "In a battle (cheating, collusion)" },
          { value: "Other", label: "Other" },
        ],
      },
      { name: "when", label: "When, approximately", maxLength: 80, widget: "text", placeholder: "Today around 14:00, my time" },
      { name: "confirm", label: "This report is accurate and made in good faith", required: true, maxLength: 10, widget: "checkbox" },
    ],
  },
};

/** Optional identity fields shared by every form. */
export const commonFields = {
  username: { label: "Your in-game username", help: "Optional. Lets us look at the right account.", maxLength: 64 },
  email: { label: "Your email", help: "Optional. Only if you want a reply.", maxLength: 254 },
};

export const ATTACHMENT_MAX_BYTES = 5 * 1024 * 1024;
export const ATTACHMENT_TYPES = ["image/png", "image/jpeg", "image/gif", "image/webp"];
