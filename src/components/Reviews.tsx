import { Star, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SocialIcon, appleIconPath, googlePlayIconPath } from "./SocialIcons";
import { usePublicStats, type StoreRating } from "@/lib/usePublicStats";
import { livePillClass } from "@/lib/ui";

type Store = "appstore" | "playstore";

interface ReviewProps {
  store: Store;
  name: string;
  date: string;
  rating: number;
  comment: string;
  country?: string;
  translated?: boolean; // quote shown in English translation
}

// Real reviews, curated 2026-09-22 from the App Store RSS feeds (32
// storefronts) and the review bot's Google Play log. Non-English quotes are
// shown translated (original language noted). Stores deliberately mixed,
// not sorted. The two marquee rows split this list in half: first half top
// row, second half bottom row.
const reviews: ReviewProps[] = [
  { store: "appstore", name: "j0nasGHG", country: "Switzerland", date: "Feb 25, 2026", rating: 5, comment: "By far the best battle game I ever played. No ads, fast matchmaking. 10/10" },
  { store: "playstore", name: "Carlos Gonzalez Vidal", date: "Sep 12, 2026", rating: 5, comment: "Incredible game, a hidden gem of the internet.", translated: true },
  { store: "appstore", name: "SilentLychee", country: "Turkey", date: "May 21, 2026", rating: 5, comment: "It might feel slow at first until you level up, but after a week it really pulls you in. I recommend it to everyone.", translated: true },
  { store: "playstore", name: "Arman Moharrami", date: "Sep 21, 2026", rating: 5, comment: "Awesome, very cool, very heartwarming, I'm addicted to it.", translated: true },
  { store: "appstore", name: "Andregojira", country: "Italy", date: "Mar 22, 2026", rating: 5, comment: "Beautiful game, easy to play!", translated: true },
  { store: "playstore", name: "Reda Talaa", date: "Sep 16, 2026", rating: 5, comment: "The game was already legendary, and since it went online it's gotten so much better ❤️😍", translated: true },
  { store: "appstore", name: "EXB dual", country: "United Kingdom", date: "Oct 13, 2025", rating: 5, comment: "Great game! Maybe downgrade shields a bit, they can be unfair at times." },
  { store: "playstore", name: "carl johnson", date: "Aug 25, 2026", rating: 5, comment: "dope game 🎮 & good 👍 job Devs" },
  { store: "appstore", name: "Bodie!353", country: "Australia", date: "Mar 9, 2025", rating: 5, comment: "I love it, the person that made it listens to suggestions. I love this game" },
  { store: "playstore", name: "Jadranka Kajfes", date: "Sep 1, 2026", rating: 5, comment: "It's great and fun, I recommend it to everyone", translated: true },
  { store: "playstore", name: "Robert Marin", date: "Sep 10, 2026", rating: 5, comment: "I love this game it's so much fun" },
  { store: "appstore", name: "Frocour", country: "Belgium", date: "Aug 25, 2025", rating: 5, comment: "Incredible game with great potential", translated: true },
  { store: "playstore", name: "Duy Huỳnh", date: "Aug 29, 2026", rating: 5, comment: "The gameplay is great and the weapons in the game are pretty cool.", translated: true },
  { store: "appstore", name: "The content creator guy", country: "Saudi Arabia", date: "Mar 31, 2026", rating: 5, comment: "It's cool and very interesting" },
  { store: "playstore", name: "Egor Zaharov", date: "Aug 28, 2026", rating: 5, comment: "I've been playing for 6 days now and I like everything.", translated: true },
  { store: "appstore", name: "Heisemberg21", country: "Italy", date: "May 4, 2025", rating: 5, comment: "The idea of the game is beautiful and they also added the online version which makes it even more fun" },
  { store: "playstore", name: "DAYYAN", date: "Sep 8, 2026", rating: 5, comment: "Dear creator, thank you for the best game in the world ❤ THANK YOU 🌹", translated: true },
  { store: "appstore", name: "Yena anek", country: "Australia", date: "Apr 8, 2025", rating: 5, comment: "Great game, has a good plot twist and you need a heck of a brain to figure out this game" },
  { store: "playstore", name: "زهراء حميد", date: "Sep 12, 2026", rating: 5, comment: "Very beautiful, very enjoyable, and real players", translated: true },
];

const storeMeta: Record<Store, { icon: string; label: string; listingUrl: string }> = {
  appstore: {
    icon: appleIconPath,
    label: "App Store",
    listingUrl:
      "https://apps.apple.com/app/geofast-battle-of-nations/id6740595527?ct=website-rating_chip",
  },
  playstore: {
    icon: googlePlayIconPath,
    label: "Google Play",
    listingUrl:
      "https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations&utm_source=website&utm_medium=organic&utm_campaign=rating_chip",
  },
};

// Live authority chips: each store's average rating and EXACT rating count,
// refreshed server-side once a day (see backend storeRatings.go). Clickable
// through to the store listing: verifiable proof beats a static claim.
const RatingChip = ({ store, data }: { store: Store; data: StoreRating }) => (
  <a
    href={storeMeta[store].listingUrl}
    target="_blank"
    rel="noreferrer"
    className={livePillClass}
  >
    {/* Store mark and score in ink, not green: brand logos read wrong
        tinted, and the dark pair anchors the left of the pill. */}
    <SocialIcon path={storeMeta[store].icon} className="h-4 w-4 text-charcoal" />
    <span className="font-semibold text-charcoal">{data.rating.toFixed(1)}</span>
    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    <span>
      {data.count.toLocaleString("en-US")} ratings on {storeMeta[store].label}
    </span>
    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
  </a>
);

const updatedNote = (iso: string): string => {
  const updated = new Date(iso);
  const now = new Date();
  const sameDay =
    updated.getUTCFullYear() === now.getUTCFullYear() &&
    updated.getUTCMonth() === now.getUTCMonth() &&
    updated.getUTCDate() === now.getUTCDate();
  if (sameDay) return "Updated today";
  return `Updated ${updated.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" })}`;
};

const LiveRatings = () => {
  const stats = usePublicStats();
  // Reserve the chip row's height while loading so the marquee below
  // doesn't shift when the chips appear; collapse only on genuine absence.
  if (stats === undefined) return <div className="mt-6 h-10" />;
  const ratings = stats?.store_ratings;
  if (!ratings || (!ratings.apple && !ratings.play)) return null;
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {ratings.apple && <RatingChip store="appstore" data={ratings.apple} />}
      {ratings.play && <RatingChip store="playstore" data={ratings.play} />}
      <span className="text-xs text-muted-foreground">
        {updatedNote(ratings.updated_at)}
      </span>
    </div>
  );
};

const ReviewCard = ({ store, name, date, rating, comment, country, translated }: ReviewProps) => (
  <div className="mx-3 flex w-[320px] shrink-0 flex-col rounded-xl border border-border bg-card p-5 sm:w-[360px]">
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        {/* Store the review comes from */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-charcoal"
          title={storeMeta[store].label}
          aria-label={storeMeta[store].label}
        >
          <SocialIcon path={storeMeta[store].icon} className="h-5 w-5" />
        </div>
        <div>
          <p className="font-semibold leading-tight">{name}</p>
          {country && (
            <p className="text-sm text-muted-foreground">{country}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-0.5 pt-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
    <p className="mt-3 text-xs text-muted-foreground">
      {date} · {storeMeta[store].label}
      {translated && <span className="opacity-60"> · Translated</span>}
    </p>
    <p className="mt-3 text-sm leading-relaxed">{comment}</p>
  </div>
);

// One endless row: content duplicated so translateX(-50%) loops seamlessly
// (the Zernio marquee pattern). Pauses on hover so reviews stay readable;
// motion-safe keeps it static under prefers-reduced-motion.
const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: ReviewProps[];
  reverse?: boolean;
}) => (
  <div
    className={`flex w-max items-stretch py-1 hover:[animation-play-state:paused] ${
      reverse ? "motion-safe:animate-marquee-reverse" : "motion-safe:animate-marquee"
    }`}
  >
    {items.map((t, index) => (
      <ReviewCard key={index} {...t} />
    ))}
    <div aria-hidden="true" className="flex items-stretch">
      {items.map((t, index) => (
        <ReviewCard key={`dup-${index}`} {...t} />
      ))}
    </div>
  </div>
);

export const Reviews = () => {
  const half = Math.ceil(reviews.length / 2);
  const rowOne = reviews.slice(0, half);
  const rowTwo = reviews.slice(half);

  return (
    <section id="reviews" className="py-24 sm:py-32">
      <Reveal className="container">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          Reviews
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          What <span className="text-primary">players</span> are saying
        </h2>
        <LiveRatings />
      </Reveal>

      {/* Full-bleed marquee rows with faded edges */}
      <Reveal delay={120}>
        <div className="relative mt-10 overflow-hidden">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
          {/* Edge fades into the page background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />
        </div>
      </Reveal>
    </section>
  );
};
