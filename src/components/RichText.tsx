import { Fragment } from "react";
import { Link } from "react-router-dom";

// Minimal inline markup for policy text, so translations stay plain strings:
//   [label](href)   link: internal when href starts with "/", else external
//   **text**        strong
//   *text*          emphasis
// Order matters in the pattern: a link first, then bold, then emphasis, so
// the "**" of a bold span is never read as two empty emphasis markers.
const TOKEN = /(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/;
const LINK_CLASS = "text-primary hover:underline";

export const RichText = ({ text }: { text: string }) => (
  <>
    {text.split(TOKEN).map((part, i) => {
      if (!part) return null;
      const link = part.match(LINK);
      if (link) {
        const [, label, href] = link;
        if (href.startsWith("/")) {
          return (
            <Link key={i} to={href} className={LINK_CLASS}>
              {label}
            </Link>
          );
        }
        const external = href.startsWith("http");
        return (
          <a
            key={i}
            href={href}
            className={LINK_CLASS}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {label}
          </a>
        );
      }
      if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
      if (part.startsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
      return <Fragment key={i}>{part}</Fragment>;
    })}
  </>
);
