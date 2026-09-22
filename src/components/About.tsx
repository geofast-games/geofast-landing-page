import { Linkedin, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { usePublicStats, formatDownloads } from "@/lib/usePublicStats";
import valentijnPhoto from "../assets/valentijn.jpg";
import utkarshPhoto from "../assets/utkarsh.jpg";

const openRoles = [
  "Game Developer",
  "Gameplay Writer",
  "Game Artist",
  "Marketing Specialist",
  "Community Manager",
];

const roleMailto = (role: string) =>
  `mailto:contact@geofastgames.com?subject=${encodeURIComponent(
    `Geofast Games Application for ${role}`
  )}`;

const team = [
  {
    imageUrl: valentijnPhoto,
    name: "Valentijn Hoornaert",
    position: "CEO",
    linkedin: "https://www.linkedin.com/in/valentijn-hoornaert-a6a511343",
  },
  {
    imageUrl: utkarshPhoto,
    name: "Utkarsh Trivedi",
    position: "CTO",
    linkedin: "https://www.linkedin.com/in/utkarshtrivedi/",
  },
];

export const About = () => {
  // Same live figure as the hero pill, from the daily store sweep.
  const downloadsTotal = usePublicStats()?.store_ratings?.downloads_total;
  return (
    <section id="studio" className="container py-24 sm:py-32">
      {/* Legacy anchor: the pre-redesign site linked here as /#about */}
      <span id="about" />
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          The studio
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          The <span className="text-primary">team</span> behind Battle of Nations
        </h2>
        <p className="mt-4 max-w-3xl text-xl text-muted-foreground">
          Geofast Games is an independent game studio from Belgium, founded in
          2024. Our goal is to develop games accessible to everyone, regardless
          of experience or language. <em>Battle of Nations</em> went viral on
          social media before it even launched, and has since passed{" "}
          {downloadsTotal ? formatDownloads(downloadsTotal) : "600K+"} downloads
          worldwide.
        </p>
      </Reveal>

      {/* The people */}
      <div id="team" className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
        {team.map(({ imageUrl, name, position, linkedin }, index) => (
          <Reveal
            key={name}
            delay={index * 100}
            className="flex items-center gap-5 rounded-xl border border-border bg-card p-6"
          >
            <img
              src={imageUrl}
              alt={name}
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold leading-tight">{name}</p>
              <p className="mt-0.5 text-sm font-medium text-primary">
                {position}
              </p>
            </div>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="text-charcoal-muted transition-colors hover:text-primary"
            >
              <Linkedin size={20} />
            </a>
          </Reveal>
        ))}
      </div>

      {/* Open roles, folded in from the old Careers section */}
      <Reveal delay={120} className="mt-6 max-w-3xl rounded-xl border border-border bg-card p-6">
        <span id="careers" />
        <p className="font-semibold">Join the team</p>
        <p className="mt-1 text-sm text-muted-foreground">
          There's a lot still to build.
        </p>
        <div className="mt-3 divide-y divide-border">
          {openRoles.map((role) => (
            <a
              key={role}
              href={roleMailto(role)}
              className="group flex items-center justify-between py-2.5"
            >
              <span className="text-sm font-medium transition-colors group-hover:text-primary">
                {role}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-charcoal-muted transition-colors group-hover:text-primary">
                Apply
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
