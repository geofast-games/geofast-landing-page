import { Reveal } from "./Reveal";

import appIcon from "../assets/app_icon.webp";
import battleStrike from "../assets/shots/battle_strike.webp";
import battleResults from "../assets/shots/battle_results.webp";
import loadout from "../assets/shots/loadout.webp";
import weaponSlots from "../assets/shots/weapon_slots.webp";
import weaponUnlock from "../assets/shots/weapon_unlock.webp";
import rankingPlayers from "../assets/shots/ranking_players.webp";
import rankingNations from "../assets/shots/ranking_nations.webp";
import territoryMap from "../assets/shots/territory_map.webp";
import territorySeize from "../assets/shots/territory_seize.webp";
import territoryRanking from "../assets/shots/territory_ranking.webp";
import dailyChallenges from "../assets/shots/daily_challenges.webp";
import battlePass from "../assets/shots/battle_pass.webp";

const genreTags = ["Online Multiplayer", "Battle Royale", "Strategy", "Mobile"];

// Grouped so the scroller reads as a tour of the game. Captions stay short
// because the group label already says what section you are looking at.
const groups = [
  {
    title: "Battle",
    shots: [
      { src: loadout, caption: "Pick your nation, then play" },
      { src: battleStrike, caption: "Fire on rival nations" },
      { src: battleResults, caption: "Medals, coins and XP" },
    ],
  },
  {
    title: "Weapons",
    shots: [
      { src: weaponSlots, caption: "Three slots per battle" },
      { src: weaponUnlock, caption: "Unlock and upgrade" },
    ],
  },
  {
    title: "Leaderboards",
    shots: [
      { src: rankingPlayers, caption: "Top players worldwide" },
      { src: rankingNations, caption: "Nations by medals" },
    ],
  },
  {
    title: "Territory Wars",
    shots: [
      { src: territoryMap, caption: "The world in hex tiles" },
      { src: territorySeize, caption: "Seize and defend tiles" },
      { src: territoryRanking, caption: "Nations by tiles held" },
    ],
  },
  {
    title: "Season challenges and rewards",
    shots: [
      { src: dailyChallenges, caption: "Daily challenges" },
      { src: battlePass, caption: "Season rewards and skins" },
    ],
  },
];

// Screenshots only: the hero already names the game, pitches it and carries
// the store buttons.
export const GameShowcase = () => {
  return (
    <section id="gallery" className="py-12 sm:py-16">
      <Reveal className="container">
        <img
          src={appIcon}
          alt="Geofast: Battle of Nations app icon"
          className="mx-auto mb-6 h-24 w-24 rounded-[1.4rem] shadow-sm sm:h-28 sm:w-28"
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {genreTags.map((g) => (
            <span
              key={g}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground"
            >
              {g}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Full-bleed scroller: the screenshots ARE the pitch, so they get the
          whole width and scroll horizontally rather than shrinking into a
          grid. Edges fade into the page like the reviews marquee. */}
      <Reveal delay={100} className="relative">
        <div className="flex snap-x snap-mandatory items-start gap-10 overflow-x-auto px-6 pb-4 sm:gap-14 sm:px-10">
          {groups.map(({ title, shots }) => (
            <div key={title} className="shrink-0">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                {title}
              </p>
              <div className="flex gap-4">
                {shots.map(({ src, caption }) => (
                  <img
                    key={caption}
                    src={src}
                    // The caption lives on as alt text: screen readers and
                    // search engines still get it, the page stays quiet.
                    alt={`${title}: ${caption}`}
                    loading="lazy"
                    className="aspect-[9/20] w-[200px] shrink-0 snap-center rounded-2xl border border-border object-cover shadow-sm sm:w-[230px]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent sm:w-20" />
      </Reveal>
    </section>
  );
};
