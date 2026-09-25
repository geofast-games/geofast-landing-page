import type { Block, PolicySection } from "../privacy/types";

// Same block model as the privacy policy and the Terms, so the page renders
// through LegalBlocks and translates the same way.
export type { Block, PolicySection };

export type DataDeletionLang = "en";

export interface DataDeletionContent {
  lang: DataDeletionLang;
  label: string;
  pageTitle: string;
  metaDescription: string;
  gameName: string;
  docName: string;
  lastUpdated: string;
  sectionsLabel: string;
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
