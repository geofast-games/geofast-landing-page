#!/usr/bin/env node
// Prerender the legal pages to static HTML, after `vite build`.
//
// GitHub Pages serves dist/privacy.html at /privacy, which is the URL both app
// stores link to. Without a file there the request falls into 404.html's SPA
// bounce: HTTP 404 and an empty body until JavaScript runs, which store
// reviewers and crawlers do not do. Hand-written copies in public/ fixed that
// once and then drifted from the React pages. Now the React pages are the only
// source and these files are build output.
//
// How: build the app once more as a server bundle (src/entry-prerender.tsx),
// render each route to HTML, and paste it into the built index.html, which
// already links the hashed CSS and JS. In the browser, main.tsx sees the
// filled root and hydrates instead of re-rendering.

// React picks its production build from this at import time; without it the
// server render runs in development mode and logs hydration-only warnings.
process.env.NODE_ENV ??= "production";

import { build } from "vite";
import { existsSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SSR_OUT = join(ROOT, "dist-ssr");
const SITE = "https://geofastgames.com";

// One entry per prerendered route. `expect` is text the rendered page must
// contain, so an empty or wrong render fails the build instead of shipping.
const PAGES = [
  {
    path: "/privacy",
    file: "privacy.html",
    title: "Privacy Policy | Geofast: Battle of Nations",
    description:
      "What data Geofast: Battle of Nations collects, how it is used, who it is shared with, and how to request deletion.",
    expect: "Privacy Policy",
  },
  {
    path: "/termsofservice",
    file: "termsofservice.html",
    title: "Terms of Service | Geofast: Battle of Nations",
    description:
      "The terms that apply when you play Geofast: Battle of Nations.",
    expect: "Terms of Service",
  },
  {
    path: "/datadeletion",
    file: "datadeletion.html",
    title: "Data Deletion Request | Geofast: Battle of Nations",
    description:
      "How to request deletion of your Geofast: Battle of Nations account and data.",
    expect: "Data Deletion",
  },
  // The form pages are opened from inside the game (Settings > feedback links)
  // and shared in Discord, so they get real pages too. Their content is a
  // Google Form embed; the page around it is what gets prerendered.
  {
    path: "/feedback",
    file: "feedback.html",
    title: "Feedback | Geofast: Battle of Nations",
    description:
      "Report a bug, report a translation error, or make a suggestion for Geofast: Battle of Nations.",
    expect: "Feedback Center",
  },
  {
    path: "/suggestions",
    file: "suggestions.html",
    title: "Suggestions | Geofast: Battle of Nations",
    description: "Suggest a feature or improvement for Geofast: Battle of Nations.",
    expect: "Suggestion Form",
  },
  {
    path: "/reportBug",
    file: "reportBug.html",
    title: "Report a Bug | Geofast: Battle of Nations",
    description: "Report a bug in Geofast: Battle of Nations.",
    expect: "Bug Report Form",
  },
  {
    path: "/reportTranslationError",
    file: "reportTranslationError.html",
    title: "Report a Translation Error | Geofast: Battle of Nations",
    description: "Report a wrong or missing translation in Geofast: Battle of Nations.",
    expect: "Translation Error Report Form",
  },
  // Not /reset-password: its render depends on the ?token in the URL, which a
  // build cannot know, so a static copy would show the wrong state first.
];

const step = (msg) => console.log(`\x1b[36m==>\x1b[0m ${msg}`);
const die = (msg) => {
  console.error(`\n\x1b[31mPrerender failed:\x1b[0m ${msg}\n`);
  process.exit(1);
};

if (!existsSync(join(DIST, "index.html"))) {
  die("no dist/index.html - run `vite build` first.");
}

// --- server bundle ----------------------------------------------------------
step("Building the server bundle");
await build({
  root: ROOT,
  configFile: join(ROOT, "vite.config.ts"),
  logLevel: "warn",
  build: {
    ssr: "src/entry-prerender.tsx",
    outDir: SSR_OUT,
    emptyOutDir: true,
    copyPublicDir: false,
  },
});
const entry = join(SSR_OUT, "entry-prerender.js");
if (!existsSync(entry)) die(`server build produced no ${entry}`);
const { render } = await import(pathToFileURL(entry).href);

// --- render -------------------------------------------------------------------
const template = readFileSync(join(DIST, "index.html"), "utf8");
const ROOT_DIV = '<div id="root"></div>';
if (!template.includes(ROOT_DIV)) die("dist/index.html has no empty #root to fill");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Replace the middle group of a three-group pattern, refusing to continue if
// the template no longer has the tag: a silent miss would ship the home page's
// title on a legal page.
const set = (html, re, value) => {
  if (!re.test(html)) die(`index.html lost the tag matched by ${re}`);
  return html.replace(re, `$1${esc(value)}$3`);
};

const withMeta = (html, page) => {
  const url = `${SITE}${page.path}`;
  html = set(html, /(<title>)([^<]*)(<\/title>)/, page.title);
  html = set(html, /(<meta\s+name="title"\s+content=")([^"]*)(")/, page.title);
  html = set(html, /(<meta\s+name="description"\s+content=")([^"]*)(")/, page.description);
  html = set(html, /(<link rel="canonical" href=")([^"]*)(")/, url);
  html = set(html, /(<meta property="og:url" content=")([^"]*)(")/, url);
  html = set(html, /(<meta\s+property="og:title"\s+content=")([^"]*)(")/, page.title);
  html = set(html, /(<meta\s+property="og:description"\s+content=")([^"]*)(")/, page.description);
  html = set(html, /(<meta name="twitter:url" content=")([^"]*)(")/, url);
  html = set(html, /(<meta\s+name="twitter:title"\s+content=")([^"]*)(")/, page.title);
  html = set(html, /(<meta\s+name="twitter:description"\s+content=")([^"]*)(")/, page.description);
  return html;
};

step("Rendering");
for (const page of PAGES) {
  const body = render(page.path);
  if (!body.includes(page.expect)) {
    die(`${page.path} rendered without "${page.expect}" - the route did not match or the page is empty.`);
  }
  const html = withMeta(template.replace(ROOT_DIV, `<div id="root">${body}</div>`), page);

  // Every asset the page references must exist in this build. The server
  // bundle computes the same content hashes as the client bundle, so a miss
  // here means the two builds diverged.
  for (const [, asset] of html.matchAll(/["'](\/assets\/[^"']+)["']/g)) {
    if (!existsSync(join(DIST, asset))) die(`${page.file} references missing ${asset}`);
  }

  writeFileSync(join(DIST, page.file), html);
  console.log(`   ${page.file}  ${(html.length / 1024).toFixed(1)} kB`);
}

rmSync(SSR_OUT, { recursive: true, force: true });
console.log(`\x1b[32mPrerendered\x1b[0m ${PAGES.length} pages into dist/\n`);
