import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages serves privacy.html at both /privacy and /privacy.html. The
// router only knows the extensionless form, so normalise before it reads the
// URL; /index.html is the home page.
const { pathname, search, hash } = window.location;
if (pathname.endsWith(".html")) {
  const clean = pathname === "/index.html" ? "/" : pathname.slice(0, -5);
  window.history.replaceState(null, "", clean + search + hash);
}

const container = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The legal pages arrive prerendered (scripts/prerender.mjs): the root already
// holds the page, so attach to it instead of drawing it again. Every other
// page starts from an empty root and renders as before.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
