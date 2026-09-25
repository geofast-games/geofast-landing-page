import type { PrivacyContent, PrivacyLang } from "./types";
import { en } from "./en";
import { de } from "./de";
import { nl } from "./nl";
import { fr } from "./fr";

export type { Block, PolicySection, PrivacyContent, PrivacyLang } from "./types";

export const privacyContent: Record<PrivacyLang, PrivacyContent> = { en, de, nl, fr };

export const privacyLangs = Object.keys(privacyContent) as PrivacyLang[];

export const isPrivacyLang = (value: string | undefined): value is PrivacyLang =>
  value !== undefined && value in privacyContent;

// English is the store-linked URL and stays at /privacy; the others live one
// level down so GitHub Pages serves them from de/privacy.html and friends.
export const privacyPath = (lang: PrivacyLang): string =>
  lang === "en" ? "/privacy" : `/${lang}/privacy`;
