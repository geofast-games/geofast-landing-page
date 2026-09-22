import {
  MessagesSquare,
  Lightbulb,
  Sparkles,
  Gift,
  Bug,
  ChevronRight,
} from "lucide-react";
import { SocialIcon, socialLinks } from "./SocialIcons";
import { Reveal } from "./Reveal";
import { useDiscordStats } from "@/lib/useDiscordStats";

const DISCORD_URL = "https://discord.gg/czV5cM8rux";
const discordIconPath = socialLinks.find((s) => s.name === "Discord")!.path;

const perks = [
  {
    icon: MessagesSquare,
    title: "Talk with players worldwide",
    text: "Ask for advice, share what works, and meet the players you keep running into on the battlefield.",
  },
  {
    icon: Lightbulb,
    title: "Shape the game",
    text: "Suggest new features and additions, then debate them with the community and the team. Player input changes what gets built.",
  },
  {
    icon: Sparkles,
    title: "Sneak peeks",
    text: "Features in the making get shown in the server long before they reach the game.",
  },
  {
    icon: Gift,
    title: "Giveaways and events",
    text: "Prizes and community events run from time to time, announced in the server first.",
  },
  {
    icon: Bug,
    title: "Direct line to the devs",
    text: "Report bugs straight to the people who fix them, and hear back when they do.",
  },
];

// Live server counts under the heading. Fixed height so the cards below
// never shift when the numbers arrive; hidden entirely if Discord is
// unreachable.
const ServerCounts = () => {
  const stats = useDiscordStats();
  return (
    <div className="flex h-7 items-center justify-center gap-3 text-sm">
      {stats && (
        <>
          <span className="rounded-full bg-ink-surface px-3 py-1 text-cream">
            {stats.members.toLocaleString("en-US")} members
          </span>
          {stats.online > 0 && (
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-surface px-3 py-1 text-cream">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              {stats.online.toLocaleString("en-US")} online now
            </span>
          )}
        </>
      )}
    </div>
  );
};

export const DiscordCommunity = () => {
  return (
    <section id="discord" className="bg-ink text-cream">
      <div className="container py-24 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-brand">
            Community
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Players and developers meet on{" "}
            <span className="text-brand">Discord</span>
          </h2>
          <p className="pt-4 text-xl text-ink-muted">
            Hang out with other players, suggest features, and talk to the
            people building the game.
          </p>
        </Reveal>

        {/* Flex, not grid: with an odd number of cards the last one centres
            on its own row instead of being stranded in a column. */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-6">
          {perks.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              key={title}
              delay={(index % 2) * 100}
              className="w-full rounded-xl border border-ink-border bg-ink-surface p-6 sm:w-[calc(50%-0.75rem)]"
            >
              <div className="flex items-center gap-2.5">
                <Icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <h3 className="font-semibold text-cream">{title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={150}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-3.5 font-semibold text-ink transition-all hover:scale-105 hover:brightness-105 active:scale-100 active:brightness-90"
          >
            <SocialIcon path={discordIconPath} className="h-5 w-5" />
            Join the Discord
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <ServerCounts />
        </Reveal>
      </div>
    </section>
  );
};
