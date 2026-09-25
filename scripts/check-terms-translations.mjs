#!/usr/bin/env node
// Check every Terms of Service translation against the English source.
//
// The Terms are data (src/content/terms/<lang>.ts): the same numbered
// sections, blocks, lists and links in every language, with other strings. A
// translation that drops a list item, loses a link, renumbers a section or
// leaves a "**" open still type-checks, so this compares the shape of each
// language with `en` and fails the build when they differ. Runs before
// `vite build`; the privacy policy has the same check.

import { buildSync } from "esbuild";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ENTRY = join(ROOT, "src", "content", "terms", "index.ts");

// The content files are TypeScript; esbuild turns the module graph into one
// CommonJS script that plain Node can evaluate, without a build step.
const { outputFiles } = buildSync({
  entryPoints: [ENTRY],
  bundle: true,
  format: "cjs",
  platform: "node",
  write: false,
  logLevel: "silent",
});
const module = { exports: {} };
new Function("module", "exports", "require", outputFiles[0].text)(
  module,
  module.exports,
  createRequire(import.meta.url),
);
const { termsContent } = module.exports;

const HREF = /\]\(([^)]+)\)/g;
const CONTROL = /[\u0000-\u0008\u000B-\u001F]/;
// "3. Your account" -> "3". Every title starts with its section number, in
// every language, so the cross-references ("section 9") keep pointing right.
const NUMBER = /^(\d+)\./;

// Every string a block carries, in order, so the same checks run on
// paragraphs, list items and table cells alike.
const blockStrings = (block) => {
  switch (block.type) {
    case "ul":
      return block.items;
    case "table":
      return [...block.head, ...block.rows.flat()];
    default:
      return [block.text];
  }
};

const sortedHrefs = (strings) =>
  strings.flatMap((s) => [...s.matchAll(HREF)].map((m) => m[1])).sort();

const shapeOf = (block) => {
  switch (block.type) {
    case "ul":
      return `ul[${block.items.length}]`;
    case "table":
      return `table[head ${block.head.length}; rows ${block.rows.map((r) => r.length).join(",")}]`;
    default:
      return block.type;
  }
};

const checkLanguage = (lang, content, source) => {
  const errors = [];
  const fail = (msg) => errors.push(msg);

  if (content.lang !== lang) fail(`lang field is "${content.lang}", expected "${lang}"`);
  for (const key of ["label", "pageTitle", "metaDescription", "docName", "lastUpdated", "sectionsLabel", "languageLabel"]) {
    if (typeof content[key] !== "string" || !content[key].trim()) fail(`${key} is empty`);
  }
  for (const key of ["line", "discord", "back"]) {
    if (typeof content.contact?.[key] !== "string" || !content.contact[key].trim()) {
      fail(`contact.${key} is empty`);
    }
  }

  const ids = content.sections.map((s) => s.id);
  const sourceIds = source.sections.map((s) => s.id);
  if (ids.join(" ") !== sourceIds.join(" ")) {
    fail(`section ids differ: [${ids.join(", ")}] vs en [${sourceIds.join(", ")}]`);
    return errors; // nothing below lines up without matching sections
  }

  content.sections.forEach((section, i) => {
    const ref = source.sections[i];
    const where = `#${section.id}`;
    if (!section.title.trim()) fail(`${where}: empty title`);

    const number = section.title.match(NUMBER)?.[1];
    const refNumber = ref.title.match(NUMBER)?.[1];
    if (number !== refNumber) {
      fail(`${where}: title "${section.title.slice(0, 40)}" does not start with "${refNumber}."`);
    }

    const shape = section.blocks.map(shapeOf).join(" ");
    const refShape = ref.blocks.map(shapeOf).join(" ");
    if (shape !== refShape) fail(`${where}: blocks are [${shape}], en has [${refShape}]`);

    const strings = [section.title, ...section.blocks.flatMap(blockStrings)];
    const refStrings = [ref.title, ...ref.blocks.flatMap(blockStrings)];

    const hrefs = sortedHrefs(strings).join(" ");
    const refHrefs = sortedHrefs(refStrings).join(" ");
    if (hrefs !== refHrefs) fail(`${where}: links are [${hrefs}], en has [${refHrefs}]`);

    for (const s of strings) {
      if (!s.trim()) fail(`${where}: empty string`);
      if ((s.match(/\*\*/g) ?? []).length % 2) fail(`${where}: unbalanced ** in "${s.slice(0, 60)}"`);
      if (CONTROL.test(s)) fail(`${where}: control character in "${s.slice(0, 60)}"`);
    }
  });

  return errors;
};

const source = termsContent.en;
if (!source) {
  console.error("check-terms-translations: no English source in termsContent");
  process.exit(1);
}

let failed = 0;
for (const [lang, content] of Object.entries(termsContent)) {
  const errors = checkLanguage(lang, content, source);
  const sections = content.sections?.length ?? 0;
  if (errors.length === 0) {
    console.log(`   ok    ${lang.padEnd(8)} ${content.label} (${sections} sections)`);
  } else {
    failed++;
    console.log(`   FAIL  ${lang.padEnd(8)} ${content.label ?? "?"}`);
    for (const e of errors) console.log(`           - ${e}`);
  }
}

const total = Object.keys(termsContent).length;
if (failed) {
  console.error(`\nTerms translations: ${failed} of ${total} languages differ from en.\n`);
  process.exit(1);
}
console.log(`Terms translations: ${total} languages match en.\n`);
