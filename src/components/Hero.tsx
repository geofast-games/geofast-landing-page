import { ChevronRight, Star } from "lucide-react";
import playstoreBadge from "../assets/playstore_badge.svg";
import appstoreBadge from "../assets/appstore_badge.svg";
import screenshot1 from "../assets/screenshot_1.webp";
import { SocialLinks } from "./SocialIcons";
import { Reveal } from "./Reveal";
import { usePublicStats } from "@/lib/usePublicStats";

// Tiny non-clickable proof line under each store badge: live rating and
// exact count. Fixed height so it never shifts the hero while loading.
const StoreRatingLine = ({ store }: { store: "apple" | "play" }) => {
  const stats = usePublicStats();
  const r = stats?.store_ratings?.[store];
  return (
    <span className="flex h-4 items-center gap-1 text-xs text-muted-foreground">
      {r && (
        <>
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          {r.rating.toFixed(1)} · {r.count.toLocaleString("en-US")} ratings
        </>
      )}
    </span>
  );
};

// Zernio-style live badge: rolling last-7-days battle count, linking to the
// stats section. Hidden until the stats load (or if they never do).
const LiveBattlesBadge = () => {
  const stats = usePublicStats();
  // Reserve the badge's height while loading so the hero doesn't shift
  // down when it pops in; collapse only on genuine failure.
  if (stats === undefined) return <div className="h-9" />;
  if (!stats) return null;
  const weekBattles = stats.battles_daily
    .slice(-7)
    .reduce((sum, d) => sum + d.value, 0);
  if (weekBattles === 0) return null;
  return (
    <a
      href="/#livestats"
      className="group inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
    >
      {weekBattles.toLocaleString("en-US")} battles played this week
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
};

// Selling points + genre tags, shown as quiet pills between the pitch and
// the download buttons. One array — reorder/trim freely.
// One row of claims, nothing else: the player count carries "global
// community" better with a number in it, and the genre line moved to the
// screenshots below — the hero was stacking four separate small-text rows.
const sellingPoints = ["No Ads", "Free to Play", "600K+ Players"];

export const Hero = () => {
  return (
    <section
      id="battleofnations"
      className="container grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2"
    >
      <Reveal className="space-y-8 text-start">
        <LiveBattlesBadge />

        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Pick your nation.
          <br />
          Conquer the world.
        </h1>

        <p className="max-w-xl text-lg text-muted-foreground">
          <em>Geofast: Battle of Nations</em> throws you into quick, strategic
          battles against real players worldwide. Unlock powerful weapons,
          climb the leaderboards, and expand your nation across the world map.
        </p>

        {/* What the game promises */}
        <div className="flex max-w-xl flex-wrap gap-2">
          {sellingPoints.map((s) => (
            <span
              key={s}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Download CTA */}
        <div className="space-y-3">
          <div className="flex flex-col justify-start gap-4 sm:flex-row">
            <div className="flex flex-col items-center gap-1.5">
              <a
                href="https://apps.apple.com/app/geofast-battle-of-nations/id6740595527?ct=website-hero"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src={appstoreBadge}
                  alt="Download on the App Store"
                  className="h-14 w-auto object-contain"
                />
              </a>
              <StoreRatingLine store="apple" />
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <a
                href="https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations&utm_source=website&utm_medium=organic&utm_campaign=hero"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src={playstoreBadge}
                  alt="Get it on Google Play"
                  className="h-14 w-auto object-contain"
                />
              </a>
              <StoreRatingLine store="play" />
            </div>
          </div>
        </div>

        {/* Social media */}
        <div className="pt-2">
          <SocialLinks iconClassName="h-7 w-7" />
        </div>
      </Reveal>

      {/* Phone-frame mockup */}
      <Reveal delay={150} className="mx-auto hidden lg:block">
        <div className="relative rotate-2 rounded-[3rem] border border-ink-border bg-ink p-3 shadow-2xl">
          {/* Punch-hole camera */}
          <div className="absolute left-1/2 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-ink" />
          <img
            src={screenshot1}
            alt="Battle of Nations gameplay"
            className="aspect-[9/16] w-80 rounded-[2.25rem]"
          />
        </div>
      </Reveal>
    </section>
  );
};
