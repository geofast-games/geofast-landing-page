import { ChevronRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialIcon, socialLinks } from "./SocialIcons";

const CONTACT_EMAIL = "contact@geofastgames.com";
const discord = socialLinks.find((s) => s.name === "Discord")!;

// Closing block shared by every standalone page (the legal texts and the form
// pages): one place for the Discord button, the email and the way back.
// Discord is for questions; anything about a person's data goes by email,
// because such a request has to come from a channel we can tie to an account.
// Same pill as the home page's Discord button, in the cream-surface colours
// the Download button uses, since the logo green is reserved for ink sections.
export interface PageContactText {
  line: string;
  discord: string;
  back: string;
}

const englishText: PageContactText = {
  line: "Questions? Ask on Discord. Requests about your data: email us.",
  discord: "Ask on Discord",
  back: "Back to Geofast Games",
};

export const PageContact = ({
  subject,
  text = englishText,
}: {
  subject: string;
  /** Translated strings; the privacy policy passes its own language's. */
  text?: PageContactText;
}) => (
  <div className="mt-12 flex flex-col items-center gap-5 text-center">
    <p className="text-muted-foreground">{text.line}</p>
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={discord.href}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-md active:scale-100"
      >
        <SocialIcon path={discord.path} className="h-5 w-5" />
        {text.discord}
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`}
        className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
      >
        <Mail className="h-5 w-5" aria-hidden="true" />
        {CONTACT_EMAIL}
      </a>
    </div>
    <Link to="/" className="text-sm font-medium text-primary hover:underline">
      {text.back}
    </Link>
  </div>
);
