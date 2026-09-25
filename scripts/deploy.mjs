#!/usr/bin/env node
// One-command deploy: build, sync into the _ghpages worktree, push to gh-pages.
//
// The site is published by pushing a built copy to the gh-pages branch by hand,
// because Actions is disabled org-wide. Doing that in steps is how a stale dist
// or a half-synced folder reaches production, so this script does the whole
// sequence or none of it.
//
// Usage:  npm run deploy            (message taken from the last source commit)
//         npm run deploy -- "text"  (explicit message)

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync, cpSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const PAGES = resolve(ROOT, "..", "_ghpages");
const BRANCH = "clean_pages";           // local branch in the _ghpages worktree
const REMOTE_BRANCH = "gh-pages";       // what GitHub Pages serves
const KEEP = new Set([".git", ".nojekyll"]);

const git = (args, cwd) =>
  execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
const step = (msg) => console.log(`\n[36m==>[0m ${msg}`);
const die = (msg) => { console.error(`\n[31mAborted:[0m ${msg}\n`); process.exit(1); };

// --- preflight -------------------------------------------------------------
if (!existsSync(join(PAGES, ".git"))) {
  die(`no deploy worktree at ${PAGES}\nExpected a git checkout of ${REMOTE_BRANCH} there.`);
}
const onBranch = git(["rev-parse", "--abbrev-ref", "HEAD"], PAGES);
if (onBranch !== BRANCH) die(`${PAGES} is on '${onBranch}', expected '${BRANCH}'.`);

// Never overwrite a newer published version: if gh-pages moved ahead (another
// machine, or Actions coming back to life), stop and let a human reconcile.
step(`Checking ${REMOTE_BRANCH} is not ahead`);
git(["fetch", "origin", REMOTE_BRANCH], PAGES);
const local = git(["rev-parse", "HEAD"], PAGES);
const remote = git(["rev-parse", "FETCH_HEAD"], PAGES);
if (local !== remote) {
  let ancestor = false;
  try {
    execFileSync("git", ["merge-base", "--is-ancestor", remote, local], { cwd: PAGES });
    ancestor = true;
  } catch { /* remote is not contained in local */ }
  if (!ancestor) {
    die(`${REMOTE_BRANCH} has commits you do not have (${remote.slice(0, 7)}).\n` +
        `Someone else deployed. Reconcile first:\n` +
        `  git -C "${PAGES}" reset --hard FETCH_HEAD`);
  }
}
console.log("   ok");

// --- build -----------------------------------------------------------------
step("Building");
// Run the same two steps as `npm run build`, but invoke their JS entrypoints
// with node directly: Node on Windows refuses to spawn npm.cmd without a shell,
// and going through a shell buys nothing here.
const run = (script, args) =>
  execFileSync(process.execPath, [join(ROOT, "node_modules", script), ...args], {
    cwd: ROOT, stdio: "inherit",
  });
run("typescript/bin/tsc", []);
<<<<<<< HEAD
// Every privacy translation must have the same sections, tables, lists and
// links as the English source (scripts/check-privacy-translations.mjs).
execFileSync(process.execPath, [join(ROOT, "scripts", "check-privacy-translations.mjs")], {
=======
// Every Terms of Service translation must have the same numbered sections,
// lists and links as the English source (scripts/check-terms-translations.mjs).
execFileSync(process.execPath, [join(ROOT, "scripts", "check-terms-translations.mjs")], {
>>>>>>> terms-i18n
  cwd: ROOT, stdio: "inherit",
});
run("vite/bin/vite.js", ["build"]);
// Then the legal pages as static files (scripts/prerender.mjs): the store links
// point at /privacy and friends, which GitHub Pages serves from these.
execFileSync(process.execPath, [join(ROOT, "scripts", "prerender.mjs")], {
  cwd: ROOT, stdio: "inherit",
});

for (const f of ["index.html", "privacy.html", "termsofservice.html", "datadeletion.html"]) {
  if (!existsSync(join(DIST, f))) die(`build produced no dist/${f}`);
}

// Guard against the regression this project has already shipped once: a local
// env override baking a plain-http endpoint into the bundle, which the browser
// then blocks on an https page.
step("Checking the bundle for insecure endpoints");
// Namespace URIs are identifiers, never fetched, so http:// is correct there.
// Anything else on plain http is a real request the browser will block.
const NON_ENDPOINTS = new Set([
  "www.w3.org", "w3.org", "schema.org", "www.schema.org",
  "purl.org", "ns.adobe.com", "localhost", "127.0.0.1",
]);
const assets = join(DIST, "assets");
const offenders = new Set();
for (const file of readdirSync(assets).filter((f) => f.endsWith(".js"))) {
  const src = readFileSync(join(assets, file), "utf8");
  for (const [match, host] of src.matchAll(/http:\/\/([A-Za-z0-9.\-_]+)(?::\d+)?/g)) {
    if (!NON_ENDPOINTS.has(host.toLowerCase())) offenders.add(`${match}  (${file})`);
  }
}
if (offenders.size) {
  die(`plain-http endpoint baked into the bundle:\n` +
      [...offenders].map((o) => `  ${o}`).join("\n") +
      `\n\nA browser blocks these on an https page. A dev override probably\n` +
      `leaked in: local overrides belong in .env.development.local, which is\n` +
      `not loaded for production builds.`);
}
console.log("   clean");

// --- sync ------------------------------------------------------------------
step(`Syncing dist -> ${PAGES}`);
for (const entry of readdirSync(PAGES)) {
  if (!KEEP.has(entry)) rmSync(join(PAGES, entry), { recursive: true, force: true });
}
for (const entry of readdirSync(DIST)) {
  cpSync(join(DIST, entry), join(PAGES, entry), { recursive: true });
}
if (!existsSync(join(PAGES, ".nojekyll"))) writeFileSync(join(PAGES, ".nojekyll"), "");
if (!existsSync(join(PAGES, "CNAME"))) die("no CNAME in the build output - the custom domain would drop");

// --- commit and push -------------------------------------------------------
git(["add", "-A"], PAGES);
const pending = git(["status", "--porcelain"], PAGES);
if (!pending) {
  console.log("\n[32mAlready up to date[0m - the live site matches this build. Nothing pushed.\n");
  process.exit(0);
}
console.log(pending.split("\n").map((l) => `   ${l}`).join("\n"));

const subject = process.argv[2] || `deploy: ${git(["log", "-1", "--pretty=%s"], ROOT)}`;
step("Committing and pushing");
git(["commit", "-m", subject], PAGES);
git(["push", "origin", `${BRANCH}:${REMOTE_BRANCH}`], PAGES);

const bundle = readdirSync(assets).find((f) => f.endsWith(".js"));
console.log(`\n[32mDeployed[0m ${git(["rev-parse", "--short", "HEAD"], PAGES)} - ${subject}`);
console.log(`   bundle: ${bundle}`);
console.log(`   live in ~1 min: https://geofastgames.com/\n`);
