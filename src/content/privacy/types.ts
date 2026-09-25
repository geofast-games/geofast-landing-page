// URL segment and lookup key, always lowercase: /zh-hans/privacy. The html
// lang attribute is a proper BCP-47 tag (zh-Hans, pt-BR), see htmlLang below.
export type PrivacyLang =
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

// Policy text is plain strings with a minimal inline markup (see
// components/RichText.tsx): [label](href) for links, **strong**, *emphasis*.
// Keeping it as data means a translation is the same structure with other
// strings, so links, tables and lists cannot drift between languages.
export type Block =
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "basis"; text: string };

export interface PolicySection {
  // Language-independent anchor, so /privacy#chat and /nl/privacy#chat match.
  id: string;
  title: string;
  blocks: Block[];
}

export interface PrivacyContent {
  lang: PrivacyLang;
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
  policyName: string;
  lastUpdated: string;
  sectionsLabel: string;
  languageLabel: string;
  legalBasisLabel: string;
  contact: { line: string; discord: string; back: string };
  sections: PolicySection[];
}
