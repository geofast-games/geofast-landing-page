import { publisher } from "@/content/publisher";

// The publisher's legal identity, in English on every language's page (see
// content/publisher.ts), under the title and again after the last section.
// lang and dir keep it a left-to-right English block on the Arabic page too.
export const PublisherIdentity = ({
  label,
  className = "mb-6",
}: {
  label: "Publisher" | "Data controller";
  className?: string;
}) => (
  <address
    lang="en"
    dir="ltr"
    className={`${className} rounded-lg border border-border bg-card px-4 py-3 text-base not-italic text-muted-foreground`}
  >
    <span className="font-semibold text-foreground">{label}:</span> {publisher.name}
    <br />
    {publisher.address}
    <br />
    {publisher.enterpriseNumber}
    <br />
    Contact:{" "}
    <a href={`mailto:${publisher.email}`} className="text-primary hover:underline">
      {publisher.email}
    </a>
  </address>
);
