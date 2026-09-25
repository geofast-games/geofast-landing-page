import type { Block, PolicySection } from "../privacy/types";

// The Terms share the privacy policy's block model (see privacy/types.ts and
// components/RichText.tsx), so both documents render through the same code
// and translate the same way: one file per language, identical structure.
export type { Block, PolicySection };

// URL segment and lookup key, always lowercase: /zh-hans/termsofservice. The
// html lang attribute is a proper BCP-47 tag (zh-Hans, pt-BR), see htmlLang.
export type TermsLang =
  | "en"
  | "de"
  | "nl"
  | "fr"
  | "id"
  | "es"
  | "it"
  | "pl"
  | "pt"
  | "fi"
  | "sv"
  | "tr"
  | "ru"
  | "ar"
  | "ko"
  | "ja"
  | "zh-hans"
  | "zh-hant";

export interface TermsContent {
  lang: TermsLang;
  /**
   * BCP-47 tag for the html lang attribute and hreflang, when it differs
   * from the URL key: "zh-Hans", "zh-Hant", "pt-BR". Defaults to lang.
   */
  htmlLang?: string;
  /** Text direction; only Arabic sets it. Rendered on the page and on html. */
  dir?: "rtl";
  /** Native language name, shown in the language menu. */
  label: string;
  pageTitle: string;
  metaDescription: string;
  gameName: string;
  docName: string;
  lastUpdated: string;
  sectionsLabel: string;
  /** Accessible name of the language menu, in the page's own language. */
  languageLabel: string;
  contact: { line: string; discord: string; back: string };
  sections: PolicySection[];
}
