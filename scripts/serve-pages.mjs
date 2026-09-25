#!/usr/bin/env node
// Local stand-in for GitHub Pages: serves dist/ with the same URL rules.
//
//   /foo            -> foo.html when it exists (the rule the store links rely on)
//   /dir/           -> dir/index.html
//   /dir            -> 301 to /dir/
//   anything else   -> 404.html with a real 404 status (the SPA bounce)
//
// `vite preview` cannot stand in here: it answers every unknown path with
// index.html and status 200, which hides exactly the behaviour under test.
//
// Usage:  npm run build && npm run preview:pages      (PORT=... to change port)

import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const PORT = Number(process.env.PORT) || 4173;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json",
};

if (!existsSync(join(DIST, "index.html"))) {
  console.error("No dist/index.html - run `npm run build` first.");
  process.exit(1);
}

const isFile = (p) => existsSync(p) && statSync(p).isFile();
const isDir = (p) => existsSync(p) && statSync(p).isDirectory();

createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const target = normalize(join(DIST, pathname));
  if (!target.startsWith(DIST)) {
    res.writeHead(403).end();
    return;
  }

  let status = 200;
  let file;
  if (pathname.endsWith("/") && isFile(join(target, "index.html"))) {
    file = join(target, "index.html");
  } else if (isFile(target)) {
    file = target;
  } else if (isFile(`${target}.html`)) {
    file = `${target}.html`;
  } else if (isDir(target)) {
    res.writeHead(301, { Location: `${pathname}/` }).end();
    console.log(`301 ${pathname} -> ${pathname}/`);
    return;
  } else {
    status = 404;
    file = join(DIST, "404.html");
  }

  res.writeHead(status, { "Content-Type": TYPES[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
  const served = file.slice(DIST.length + 1).replaceAll(sep, "/");
  console.log(`${status} ${pathname}${served !== pathname.slice(1) ? `  -> ${served}` : ""}`);
}).listen(PORT, () => {
  console.log(`Serving dist/ like GitHub Pages at http://localhost:${PORT}/`);
  for (const p of ["/privacy", "/termsofservice", "/datadeletion", "/feedback"]) {
    console.log(`  http://localhost:${PORT}${p}`);
  }
});
