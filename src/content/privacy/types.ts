export type PrivacyLang = "en" | "de" | "nl" | "fr";

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
