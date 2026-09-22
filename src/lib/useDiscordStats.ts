import { useEffect, useState } from "react";

// Discord's public invite endpoint returns the server's member and online
// counts with no auth, no bot and no server-settings change. Fetched in the
// browser rather than cached server-side, because "online right now" is only
// worth showing if it is actually now. CORS is open to the site's origin.
const INVITE_CODE = "czV5cM8rux";
const INVITE_API = `https://discord.com/api/v10/invites/${INVITE_CODE}?with_counts=true`;

export interface DiscordStats {
  members: number;
  online: number;
}

let statsPromise: Promise<DiscordStats | null> | null = null;

const fetchDiscordStats = async (): Promise<DiscordStats | null> => {
  try {
    // Timed out rather than left hanging, so the counts resolve to "hidden"
    // instead of holding an empty slot forever.
    const response = await fetch(INVITE_API, {
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    const data = await response.json();
    const members = Number(data?.approximate_member_count);
    const online = Number(data?.approximate_presence_count);
    if (!Number.isFinite(members) || members <= 0) return null;
    return { members, online: Number.isFinite(online) ? online : 0 };
  } catch {
    // Counts are a bonus: any failure just hides them.
    return null;
  }
};

export const useDiscordStats = (): DiscordStats | null | undefined => {
  const [stats, setStats] = useState<DiscordStats | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    statsPromise ??= fetchDiscordStats();
    statsPromise.then((s) => {
      if (!cancelled) setStats(s);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return stats;
};
