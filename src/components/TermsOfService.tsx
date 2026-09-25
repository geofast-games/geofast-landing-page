import { useLayoutEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContact } from "./PageContact";
import { BlockView } from "./LegalBlocks";
import { termsContent } from "@/content/terms";

// The text lives in src/content/terms/<lang>.ts, same block model as the
// privacy policy; this component only lays it out. English only for now; the
// structure is ready for the same per-language pages the policy has.

const TermsOfService = () => {
  const content = termsContent.en;

  // Start at the top on arrival, unless the URL names a section: then the
  // browser (direct load) or InternalLinksHandler (in-app) scrolls there.
  useLayoutEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  return (
    <section id="terms-of-service" className="container py-24 sm:py-32">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        {content.gameName}
        <span className="text-primary"> {content.docName}</span>
      </h1>

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
