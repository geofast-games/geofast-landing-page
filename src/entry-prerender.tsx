import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppShell } from "./App";

// Build-time entry (see scripts/prerender.mjs). Renders the same tree the
// browser hydrates, for one URL, to an HTML string. Never shipped to clients.
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  );
}
