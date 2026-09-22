import { MessagesSquare, Lightbulb, Sparkles, Bug } from "lucide-react";
import { SocialIcon, socialLinks } from "./SocialIcons";
import { Reveal } from "./Reveal";

const DISCORD_URL = "https://discord.gg/czV5cM8rux";
const discordIconPath = socialLinks.find((s) => s.name === "Discord")!.path;

const perks = [
  {
    icon: MessagesSquare,
    title: "Talk with players worldwide",
    text: "Trade tactics, find rivals, and argue about the best nation with players from all over the world.",
  },
  {
    icon: Lightbulb,
    title: "Shape the game",
    text: "Suggest new features, weapons, and additions — and debate them with the community and the team.",
  },
  {
    icon: Sparkles,
    title: "Developer sneak peeks",
    text: "See what the developers are building before anyone else. New weapons, skins, and seasons drop in Discord first.",
  },
  {
    icon: Bug,
    title: "Direct line to the devs",
    text: "Report bugs and issues straight to the people who fix them — and watch them get fixed.",
  },
];

export const DiscordCommunity = () => {
  return (
    <section id="discord" className="bg-ink text-cream">
      <div className="container py-24 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-brand">
            Community
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            The battle continues on <span className="text-brand">Discord</span>
          </h2>
          <p className="pt-4 text-xl text-ink-muted">
            The Geofast Discord is where the community lives — strategy talk,
            game suggestions, sneak peeks, and the developers themselves, every
            day.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {perks.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              key={title}
              delay={(index % 2) * 100}
              className="rounded-xl border border-ink-border bg-ink-surface p-6"
            >
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="mt-3 font-semibold text-cream">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-12 flex justify-center">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-3.5 font-semibold text-ink transition-transform hover:scale-105"
          >
            <SocialIcon path={discordIconPath} className="h-5 w-5" />
            Join the Discord
          </a>
        </Reveal>
      </div>
    </section>
  );
};
