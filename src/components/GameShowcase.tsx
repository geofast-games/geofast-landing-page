import { Reveal } from "./Reveal";

import screenshot1 from "../assets/screenshot_1.webp";
import screenshot2 from "../assets/screenshot_2.webp";
import screenshot3 from "../assets/screenshot_3.webp";
import screenshot4 from "../assets/screenshot_4.webp";
import screenshot5 from "../assets/screenshot_5.webp";
import screenshot6 from "../assets/screenshot_6.webp";

const screenshots = [
  { src: screenshot1, alt: "Fight For Your Country" },
  { src: screenshot2, alt: "Conquer The World Map" },
  { src: screenshot3, alt: "Unlock Powerful Weapons" },
  { src: screenshot4, alt: "Lead Your Nation To Victory" },
  { src: screenshot5, alt: "Battle Players Worldwide" },
  { src: screenshot6, alt: "Collect Exclusive Skins" },
];

const genreTags = ["Online Multiplayer", "Battle Royale", "Strategy", "Mobile"];

// Screenshots plus the genre line (moved down from the hero, which was
// stacking too many small-text rows): the hero already names the game,
// pitches it and carries the store buttons.
export const GameShowcase = () => {
  return (
    <section className="container py-12 sm:py-16">
      <Reveal>
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {genreTags.map((g) => (
            <span
              key={g}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground"
            >
              {g}
            </span>
          ))}
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {screenshots.map(({ src, alt }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="aspect-[9/16] snap-center w-[220px] flex-shrink-0 rounded-2xl border border-border object-cover shadow-sm md:w-full"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
};
