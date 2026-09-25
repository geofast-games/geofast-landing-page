import { useEffect, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageContact } from "./PageContact";
import { BlockView } from "./LegalBlocks";
import { livePillClass } from "@/lib/ui";
import { termsContent, termsLangs, termsPath, type TermsLang } from "@/content/terms";

// The text lives in src/content/terms/<lang>.ts, one file per language with
// the same structure as the privacy policy; this component only lays it out.
// English is the source; a translation that differs from it is caught by
// scripts/check-terms-translations.mjs before the build.

const TermsOfService = ({ lang = "en" }: { lang?: TermsLang }) => {
  const content = termsContent[lang];
  const navigate = useNavigate();

  // Radix returns focus to the trigger when the menu closes, and the browser
  // then paints the keyboard focus ring even though the user clicked. Same
  // remedy as DownloadMenu: pointer opens close without handing focus back,
  // keyboard opens still do so keyboard users keep their place.
  const openedByPointer = useRef(false);

  // Start at the top on arrival, unless the URL names a section: then the
  // browser (direct load) or InternalLinksHandler (in-app) scrolls there.
  useLayoutEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  // The prerendered page already carries the right lang and dir attributes;
  // this keeps them right after switching language in the browser. dir is
  // removed on the way out, so leaving the Arabic page does not leave the
  // rest of the site right-to-left.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = content.htmlLang ?? lang;
    if (content.dir) root.setAttribute("dir", content.dir);
    else root.removeAttribute("dir");
    return () => root.removeAttribute("dir");
  }, [lang, content.htmlLang, content.dir]);

  return (
    <section id="terms-of-service" dir={content.dir} className="container py-24 sm:py-32">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
        <h1 className="text-3xl font-bold md:text-4xl">
          {content.gameName}
          <span className="text-primary"> {content.docName}</span>
        </h1>
        {/* Radix renders the selected item's text only after mount, so the
            label is passed explicitly: the prerendered page shows it too. */}
        <Select value={lang} onValueChange={(next) => navigate(termsPath(next as TermsLang))}>
          {/* Styled as the site's live pills (the store rating chips in the
              reviews section): soft green tint that deepens on hover and on
              press. Plus a small globe motion and the chevron (the trigger's
              last svg) flipping while the menu is open. */}
          <SelectTrigger
            className={`${livePillClass} h-10 w-[11rem] justify-between border-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&>svg:last-child]:opacity-100 [&>svg:last-child]:transition-transform [&[data-state=open]>svg:last-child]:rotate-180`}
            aria-label={content.languageLabel}
            onPointerDown={() => (openedByPointer.current = true)}
            onKeyDown={() => (openedByPointer.current = false)}
          >
            <Globe
              className="mr-1 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-[20deg]"
              aria-hidden="true"
            />
            <SelectValue>{content.label}</SelectValue>
          </SelectTrigger>
          <SelectContent
            onCloseAutoFocus={(event) => {
              if (openedByPointer.current) event.preventDefault();
            }}
          >
            {termsLangs.map((l) => (
              <SelectItem key={l} value={l}>
                {termsContent[l].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="mb-8 text-xl text-muted-foreground">{content.lastUpdated}</p>

      {/* Layered document: the list lets a reader jump to the one section
          they care about instead of reading top to bottom. */}
      <nav aria-label={content.sectionsLabel} className="mb-8 flex flex-wrap gap-2">
        {content.sections.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {title}
          </a>
        ))}
      </nav>

      <div className="space-y-6">
        {content.sections.map(({ id, title, blocks }) => (
          <Card key={id} id={id} className="scroll-mt-20">
            <CardHeader>
              <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-lg text-muted-foreground">
                {blocks.map((block, i) => (
                  <BlockView key={i} block={block} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <PageContact subject={content.docName} text={content.contact} />
    </section>
  );
};

export default TermsOfService;
