import type { Block, PolicySection } from "../privacy/types";

// Same block model as the privacy policy and the Terms, so the page renders
// through LegalBlocks and translates the same way.
export type { Block, PolicySection };

// URL segment and lookup key, always lowercase: /zh-hans/datadeletion. The
// html lang attribute is a proper BCP-47 tag (zh-Hans, pt-BR), see htmlLang.
export type DataDeletionLang =
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

export interface DataDeletionContent {
  lang: DataDeletionLang;
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
  /** The "request now" card: a mailto with a prefilled subject and body. */
  request: {
    title: string;
    text: string;
    button: string;
    emailSubject: string;
    emailBody: string;
  };
}
