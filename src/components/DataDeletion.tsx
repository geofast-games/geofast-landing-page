import { useLayoutEffect } from "react";
import { Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageContact } from "./PageContact";
import { BlockView } from "./LegalBlocks";
import { dataDeletionContent } from "@/content/datadeletion";

// The account-deletion page both app stores link to. Text lives in
// src/content/datadeletion/<lang>.ts, same block model as the privacy policy
// and the Terms; this component lays it out and adds the request card.

const CONTACT_EMAIL = "contact@geofastgames.com";

const DataDeletion = () => {
  const content = dataDeletionContent.en;
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    content.request.emailSubject
  )}&body=${encodeURIComponent(content.request.emailBody)}`;

  // Start at the top on arrival, unless the URL names a section: then the
  // browser (direct load) or InternalLinksHandler (in-app) scrolls there.
  useLayoutEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  return (
    <section id="data-deletion" className="container py-24 sm:py-32">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        {content.gameName}
        <span className="text-primary"> {content.docName}</span>
      </h1>

      <p className="mb-8 text-xl text-muted-foreground">{content.lastUpdated}</p>

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

        {/* The one action on the page, set apart with the accent border. */}
        <Card id="request" className="scroll-mt-20 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">{content.request.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-lg text-muted-foreground">{content.request.text}</p>
            <Button asChild size="lg" className="gap-2 rounded-full">
              <a href={mailto}>
                <Mail className="h-5 w-5" aria-hidden="true" />
                {content.request.button}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <PageContact subject={content.docName} text={content.contact} />
    </section>
  );
};

export default DataDeletion;
