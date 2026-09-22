import { useEffect, useState } from "react";
import statsFallback from "@/data/publicStatsFallback.json";

// Stats are deliberately served by the DEV server, not prod: its database is
// a full nightly restore of production (03:30 UTC, daily_prod_sync.sh), and
// public_stats excludes the current day — so the numbers are identical to
// prod's while the workload stays on the auxiliary box. This endpoint is
// separate from VITE_NAKAMA_SERVER_URL on purpose: ResetPassword must keep
// talking to prod (reset tokens live in prod's database). The default key is
// the client-shipped http_key (public by design, it's in every APK).
const STATS_SERVER_URL =
  import.meta.env.VITE_STATS_SERVER_URL || "https://staging.geofastgames.com";
const STATS_SERVER_KEY =
  import.meta.env.VITE_STATS_SERVER_KEY || "GeofastHttpKey2026SecureAccess";

export interface StatsDay {
  day: string; // YYYY-MM-DD (UTC)
  value: number;
}

export interface StoreRating {
  rating: number;
  count: number;
}

export interface StoreRatings {
  play?: StoreRating;
  apple?: StoreRating;
  updated_at: string; // RFC3339 UTC
}

// The RPC returns up to 90 days of several series; consumers display the
// slice they want. Unknown fields are ignored, so backend and frontend can
// ship independently.
export interface PublicStats {
  battles_daily: StatsDay[];
  dau_daily?: StatsDay[];
  registrations_daily?: StatsDay[];
  store_ratings?: StoreRatings;
  generated_at: string;
}

// One fetch per page load, shared by every component that shows stats.
let statsPromise: Promise<PublicStats | null> | null = null;

const fetchStats = async (): Promise<PublicStats | null> => {
  try {
    const response = await fetch(
      `${STATS_SERVER_URL}/v2/rpc/public_stats?http_key=${encodeURIComponent(STATS_SERVER_KEY)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(""), // RPC payloads are stringified JSON
      }
    );
    if (!response.ok) return fallbackStats();
    const data = await response.json();
    const stats: PublicStats =
      typeof data.payload === "string" ? JSON.parse(data.payload) : data.payload;
    if (!stats?.battles_daily?.length) return fallbackStats();
    return stats;
  } catch {
    return fallbackStats();
  }
};

// Baked-in snapshot (src/data/publicStatsFallback.json) served when the
// backend can't: most importantly the production server until public_stats
// ships there. Real-but-aging numbers beat an empty page; the chart's date
// labels and the ratings' "Updated …" note stay honest about the age.
// Refresh the snapshot (see the JSON's generated_at) before releasing the
// site if it has grown stale.
const fallbackStats = (): PublicStats | null => {
  const stats = statsFallback as PublicStats;
  return stats?.battles_daily?.length ? stats : null;
};

// Three states so consumers can reserve layout space while loading:
// undefined = still loading, null = failed/unavailable, object = loaded.
export const usePublicStats = (): PublicStats | null | undefined => {
  const [stats, setStats] = useState<PublicStats | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    statsPromise ??= fetchStats();
    statsPromise.then((s) => {
      if (!cancelled) setStats(s);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return stats;
};
