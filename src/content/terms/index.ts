import type { TermsContent, TermsLang } from "./types";
import { en } from "./en";

export type { Block, PolicySection, TermsContent, TermsLang } from "./types";

export const termsContent: Record<TermsLang, TermsContent> = { en };
