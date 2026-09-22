import { Headset, Handshake, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const contactCards = [
  {
    icon: Headset,
    title: "Support",
    text: "Have a question or need assistance? The team is here to help.",
    mailto: "mailto:contact@geofastgames.com?subject=Support Request",
  },
  {
    icon: Handshake,
    title: "Business Opportunities",
    text: "Geofast Games is actively looking for investors and business partners to help the studio grow.",
    mailto: "mailto:contact@geofastgames.com?subject=Business Inquiry",
  },
];

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container py-24 sm:py-32">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Get in <span className="text-primary">touch</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {contactCards.map(({ icon: Icon, title, text, mailto }, index) => (
            <Reveal
              key={title}
              delay={index * 100}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
              <a
                href={mailto}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Reach out
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Or write directly:{" "}
            <a
              href="mailto:contact@geofastgames.com"
              className="font-medium text-primary hover:underline"
            >
              contact@geofastgames.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
};
