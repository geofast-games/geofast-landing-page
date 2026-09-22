import { useState } from "react";
import { Reveal } from "./Reveal";
import { usePublicStats, type StatsDay } from "@/lib/usePublicStats";

const DISPLAY_DAYS = 30;

// The axis always starts at ZERO (Val's call): the filled area then states
// the true magnitude rather than an exaggerated wiggle. The top is the peak
// plus a little headroom, and gridlines sit at round steps that only appear
// once the data reaches them.
const AXIS_HEADROOM = 1.06;

const axisFromZero = (max: number) => {
  const hi = max * AXIS_HEADROOM;
  const k = Math.floor(Math.log10(Math.max(hi, 1)));
  const step =
    [
      Math.pow(10, k),
      5 * Math.pow(10, k - 1),
      2.5 * Math.pow(10, k - 1),
      2 * Math.pow(10, k - 1),
    ].find((s) => Math.floor(hi / s) >= 2) ?? Math.pow(10, k - 1);
  const lines: number[] = [];
  for (let v = step; v <= hi; v += step) lines.push(v);
  return { lo: 0, hi, lines };
};

const formatAxis = (v: number): string =>
  v >= 1000 ? `${Number((v / 1000).toFixed(1))}K` : v.toLocaleString("en-US");

const formatDay = (iso: string): string => {
  const date = new Date(`${iso}T00:00:00Z`);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
};

const ChartFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-8 rounded-xl border border-border bg-card p-6 sm:p-8">
    {children}
  </div>
);

// Module scope, NOT nested in LiveStats: a component defined inside another
// gets a fresh identity on every render, so React remounts it — which
// replayed the Reveal fade on every hover of a new day.
const Header = () => (
  <Reveal>
    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
      Live stats
    </p>
    <h2 className="text-3xl font-bold md:text-4xl">
      <span className="text-primary">Battles</span> played per day
    </h2>
    <p className="pt-4 text-xl text-muted-foreground">
      A live look at the last 30 days of online multiplayer battles in{" "}
      <em>Geofast: Battle of Nations</em>.
    </p>
  </Reveal>
);

export const LiveStats = () => {
  const stats = usePublicStats();
  const [hovered, setHovered] = useState<number | null>(null);

  // Same-height placeholder while loading: a late height change shifts
  // everything below and breaks the browser's scroll restoration.
  if (stats === undefined) {
    return (
      <section id="livestats" className="container py-24 sm:py-32">
        <Header />
        <ChartFrame>
          <div className="h-16" />
          <div className="ml-12 h-56 animate-pulse rounded-md bg-muted/60 sm:h-64" />
          <div className="h-7" />
        </ChartFrame>
      </section>
    );
  }
  if (!stats) return null;

  const days: StatsDay[] = stats.battles_daily.slice(-DISPLAY_DAYS);
  if (days.every((d) => d.value === 0)) return null;

  const values = days.map((d) => d.value);
  const { lo, hi, lines } = axisFromZero(Math.max(...values));
  const total = values.reduce((sum, v) => sum + v, 0);
  const average = Math.round(total / values.length);

  // Points sit at column centres so the hover targets line up exactly.
  const x = (i: number) => ((i + 0.5) / days.length) * 100;
  const y = (v: number) => 100 - ((v - lo) / (hi - lo)) * 100;
  const linePath = days
    .map((d, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(2)},${y(d.value).toFixed(2)}`)
    .join(" ");
  const areaPath = `${linePath} L${x(days.length - 1).toFixed(2)},100 L${x(0).toFixed(2)},100 Z`;

  return (
    <section id="livestats" className="container py-24 sm:py-32">
      <Header />

      <Reveal delay={120}>
        <ChartFrame>
          {/* Headline numbers: the chart shows the shape, these give scale */}
          <div className="mb-8 flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <div>
              <p className="text-3xl font-bold leading-none">
                {average.toLocaleString("en-US")}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                battles per day on average
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold leading-none">
                {total.toLocaleString("en-US")}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                battles in the last 30 days
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Gridlines at round steps, labels outside the plot */}
            {lines.map((v) => (
              <div
                key={v}
                className="absolute inset-x-0 flex items-center gap-2"
                style={{ bottom: `${((v - lo) / (hi - lo)) * 100}%` }}
              >
                <span className="w-10 shrink-0 text-right text-xs text-muted-foreground">
                  {formatAxis(v)}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
            ))}

            {/* Plot */}
            <div className="relative ml-12 h-56 sm:h-64">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full overflow-visible"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="battlesFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#battlesFill)" />
                <path
                  d={linePath}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Hover layer: one column per day */}
              <div className="absolute inset-0 flex">
                {days.map(({ day, value }, index) => (
                  <div
                    key={day}
                    className="relative h-full flex-1"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {hovered === index && (
                      <>
                        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border" />
                        <div
                          className="pointer-events-none absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-card bg-primary"
                          style={{ bottom: `${((value - lo) / (hi - lo)) * 100}%` }}
                        />
                        <div
                          className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2 -translate-y-3 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background shadow-md"
                          style={{ bottom: `${((value - lo) / (hi - lo)) * 100}%` }}
                        >
                          {formatDay(day)} · {value.toLocaleString("en-US")} battles
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Baseline */}
            <div className="ml-12 h-px bg-border" />

            {/* X labels: sparse, muted */}
            <div className="ml-12 flex pt-2">
              {days.map(({ day }, index) => (
                <div
                  key={day}
                  className="flex-1 text-center text-xs text-muted-foreground"
                >
                  {index % 5 === 2 ? formatDay(day) : ""}
                </div>
              ))}
            </div>
          </div>

          {/* Screen-reader table view of the same data */}
          <table className="sr-only">
            <caption>Battles played per day, last 30 days</caption>
            <thead>
              <tr>
                <th>Day</th>
                <th>Battles</th>
              </tr>
            </thead>
            <tbody>
              {days.map(({ day, value }) => (
                <tr key={day}>
                  <td>{formatDay(day)}</td>
                  <td>{value.toLocaleString("en-US")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ChartFrame>
      </Reveal>
    </section>
  );
};
