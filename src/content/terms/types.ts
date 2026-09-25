import type { Block, PolicySection } from "../privacy/types";

// The Terms share the privacy policy's block model (see privacy/types.ts and
// components/RichText.tsx), so both documents render through the same code
// and translate the same way: one file per language, identical structure.
export type { Block, PolicySection };

export type TermsLang = "en";

export interface TermsContent {
  lang: TermsLang;
  label: string;
  pageTitle: string;
  metaDescription: string;
  gameName: string;
  docName: string;
  lastUpdated: string;
  sectionsLabel: string;
  contact: { line: string; discord: string; back: string };
  sections: PolicySection[];
}
