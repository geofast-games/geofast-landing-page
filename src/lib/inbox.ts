// Client for the feedback inbox on the dev server (geofast-workspace,
// tools/feedback_inbox). One POST per form, multipart, answered with the
// reference the player keeps. The URL is the Caddy route on staging; override
// with VITE_INBOX_URL in .env.development.local to test against a local run.
import type { FormKind } from "@/content/forms";

export const INBOX_URL = (import.meta.env.VITE_INBOX_URL || "https://staging.geofastgames.com/inbox").replace(/\/$/, "");

export type SubmitResult =
  | { ok: true; reference: string }
  | { ok: false; kind: "invalid"; errors: string[] }
  | { ok: false; kind: "rate_limited" }
  | { ok: false; kind: "unavailable" };

export async function submitToInbox(kind: FormKind, form: FormData): Promise<SubmitResult> {
  form.set("kind", kind);
  form.set("site_lang", typeof navigator !== "undefined" ? navigator.language : "");
  let response: Response;
  try {
    response = await fetch(`${INBOX_URL}/api/submit`, { method: "POST", body: form });
  } catch {
    return { ok: false, kind: "unavailable" };
  }
  if (response.ok) {
    const data = (await response.json()) as { reference: string };
    return { ok: true, reference: data.reference };
  }
  if (response.status === 429) return { ok: false, kind: "rate_limited" };
  if (response.status === 400) {
    try {
      const data = (await response.json()) as { detail?: { errors?: string[] } | string };
      const errors = typeof data.detail === "object" && data.detail?.errors ? data.detail.errors : [];
      return { ok: false, kind: "invalid", errors };
    } catch {
      return { ok: false, kind: "invalid", errors: [] };
    }
  }
  return { ok: false, kind: "unavailable" };
}
