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
import { RichText } from "./RichText";
import {
  privacyContent,
  privacyLangs,
  privacyPath,
  type Block,
  type PrivacyLang,
} from "@/content/privacy";

// The text lives in src/content/privacy/<lang>.ts, one file per language with
// the same structure; this component only lays it out. English is the source.

const BlockView = ({ block, basisLabel }: { block: Block; basisLabel: string }) => {
  switch (block.type) {
    case "p":
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case "lead":
      return (
        <p className="font-semibold text-foreground">
          <RichText text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-1 pl-6">
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-base">
            <thead>
              <tr className="border-b border-border">
                {block.head.map((h) => (
                  <th key={h} className="py-2 pr-4 font-semibold text-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((cells, i) => (
                <tr key={i} className="border-b border-border align-top">
                  {cells.map((cell, j) => (
                    <td key={j} className="py-2 pr-4">
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "basis":
      return (
        <p className="text-base">
          <strong>{basisLabel}</strong> <RichText text={block.text} />
        </p>
      );
  }
};

export const PrivacyPolicy = ({ lang = "en" }: { lang?: PrivacyLang }) => {
  const content = privacyContent[lang];
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

  // The prerendered page already carries the right lang attribute; this keeps
  // it right after switching language in the browser.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <section id="privacy-policy" className="container py-24 sm:py-32">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
        <h1 className="text-3xl font-bold md:text-4xl">
          {content.gameName}
          <span className="text-primary"> {content.policyName}</span>
        </h1>
        {/* Radix renders the selected item's text only after mount, so the
            label is passed explicitly: the prerendered page shows it too. */}
        <Select value={lang} onValueChange={(next) => navigate(privacyPath(next as PrivacyLang))}>
          <SelectTrigger
            className="w-[11rem] focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={content.languageLabel}
            onPointerDown={() => (openedByPointer.current = true)}
            onKeyDown={() => (openedByPointer.current = false)}
          >
            <Globe className="mr-2 h-4 w-4 shrink-0 opacity-70" aria-hidden="true" />
            <SelectValue>{content.label}</SelectValue>
          </SelectTrigger>
          <SelectContent
            onCloseAutoFocus={(event) => {
              if (openedByPointer.current) event.preventDefault();
            }}
          >
            {privacyLangs.map((l) => (
              <SelectItem key={l} value={l}>
                {privacyContent[l].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="mb-8 text-xl text-muted-foreground">{content.lastUpdated}</p>

      {/* Layered notice: the list lets a reader jump to the one aspect they
          care about instead of reading top to bottom. */}
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
                  <BlockView key={i} block={block} basisLabel={content.legalBasisLabel} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <PageContact subject={content.policyName} text={content.contact} />
    </section>
  );
};

export default PrivacyPolicy;
