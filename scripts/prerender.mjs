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
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SSR_OUT = join(ROOT, "dist-ssr");
const SITE = "https://geofastgames.com";

// One entry per prerendered route. `expect` is text the rendered page must
// contain, so an empty or wrong render fails the build instead of shipping.
const PAGES = [
  // The privacy policy exists in eighteen languages. `group` ties the
  // variants together for hreflang links; `lang` is the BCP-47 tag that goes
  // into the html lang attribute and hreflang (zh-Hans, pt-BR), which is why
  // it can differ from the URL segment; `dir` marks the right-to-left page.
  {
    path: "/privacy",
    file: "privacy.html",
    lang: "en",
    group: "privacy",
    title: "Privacy Policy | Geofast: Battle of Nations",
    description:
      "What data Geofast: Battle of Nations collects, how it is used, who it is shared with, and how to request deletion.",
    expect: "Privacy Policy",
  },
  {
    path: "/de/privacy",
    file: "de/privacy.html",
    lang: "de",
    group: "privacy",
    title: "Datenschutzerklärung | Geofast: Battle of Nations",
    description:
      "Welche Daten Geofast: Battle of Nations erhebt, wie sie verwendet werden, mit wem sie geteilt werden und wie Sie ihre Löschung beantragen.",
    expect: "Datenschutzerklärung",
  },
  {
    path: "/nl/privacy",
    file: "nl/privacy.html",
    lang: "nl",
    group: "privacy",
    title: "Privacyverklaring | Geofast: Battle of Nations",
    description:
      "Welke gegevens Geofast: Battle of Nations verzamelt, hoe ze worden gebruikt, met wie ze worden gedeeld en hoe je verwijdering aanvraagt.",
    expect: "Privacyverklaring",
  },
  {
    path: "/fr/privacy",
    file: "fr/privacy.html",
    lang: "fr",
    group: "privacy",
    title: "Politique de confidentialité | Geofast: Battle of Nations",
    description:
      "Quelles données Geofast: Battle of Nations collecte, comment elles sont utilisées, avec qui elles sont partagées et comment en demander la suppression.",
    expect: "Politique de confidentialité",
  },
  {
    path: "/id/privacy",
    file: "id/privacy.html",
    lang: "id",
    group: "privacy",
    title: "Kebijakan Privasi | Geofast: Battle of Nations",
    description:
      "Data apa yang dikumpulkan Geofast: Battle of Nations, bagaimana data itu digunakan, dengan siapa dibagikan, dan cara meminta penghapusan.",
    expect: "Kebijakan Privasi",
  },
  {
    path: "/es/privacy",
    file: "es/privacy.html",
    lang: "es",
    group: "privacy",
    title: "Política de privacidad | Geofast: Battle of Nations",
    description:
      "Qué datos recoge Geofast: Battle of Nations, cómo se usan, con quién se comparten y cómo solicitar su supresión.",
    expect: "Política de privacidad",
  },
  {
    path: "/it/privacy",
    file: "it/privacy.html",
    lang: "it",
    group: "privacy",
    title: "Informativa sulla privacy | Geofast: Battle of Nations",
    description:
      "Quali dati raccoglie Geofast: Battle of Nations, come vengono usati, con chi vengono condivisi e come chiederne la cancellazione.",
    expect: "Informativa sulla privacy",
  },
  {
    path: "/pl/privacy",
    file: "pl/privacy.html",
    lang: "pl",
    group: "privacy",
    title: "Polityka prywatności | Geofast: Battle of Nations",
    description:
      "Jakie dane zbiera Geofast: Battle of Nations, jak są wykorzystywane, komu są udostępniane i jak zażądać ich usunięcia.",
    expect: "Polityka prywatności",
  },
  {
    path: "/pt/privacy",
    file: "pt/privacy.html",
    lang: "pt-BR",
    group: "privacy",
    title: "Política de Privacidade | Geofast: Battle of Nations",
    description:
      "Quais dados o Geofast: Battle of Nations coleta, como são usados, com quem são compartilhados e como solicitar a exclusão.",
    expect: "Política de Privacidade",
  },
  {
    path: "/fi/privacy",
    file: "fi/privacy.html",
    lang: "fi",
    group: "privacy",
    title: "Tietosuojakäytäntö | Geofast: Battle of Nations",
    description:
      "Mitä tietoja Geofast: Battle of Nations kerää, miten niitä käytetään, kenelle niitä luovutetaan ja miten pyydät niiden poistamista.",
    expect: "Tietosuojakäytäntö",
  },
  {
    path: "/sv/privacy",
    file: "sv/privacy.html",
    lang: "sv",
    group: "privacy",
    title: "Integritetspolicy | Geofast: Battle of Nations",
    description:
      "Vilka uppgifter Geofast: Battle of Nations samlar in, hur de används, vem de delas med och hur du begär radering.",
    expect: "Integritetspolicy",
  },
  {
    path: "/tr/privacy",
    file: "tr/privacy.html",
    lang: "tr",
    group: "privacy",
    title: "Gizlilik Politikası | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nations hangi verileri toplar, bunları nasıl kullanır, kimlerle paylaşır ve silinmelerini nasıl talep edebilirsiniz.",
    expect: "Gizlilik Politikası",
  },
  {
    path: "/ru/privacy",
    file: "ru/privacy.html",
    lang: "ru",
    group: "privacy",
    title: "Политика конфиденциальности | Geofast: Battle of Nations",
    description:
      "Какие данные собирает Geofast: Battle of Nations, как они используются, кому передаются и как запросить их удаление.",
    expect: "Политика конфиденциальности",
  },
  {
    path: "/ar/privacy",
    file: "ar/privacy.html",
    lang: "ar",
    dir: "rtl",
    group: "privacy",
    title: "سياسة الخصوصية | Geofast: Battle of Nations",
    description:
      "ما البيانات التي تجمعها Geofast: Battle of Nations، وكيف تُستخدم، ومع من تُشارك، وكيف تطلب حذفها.",
    expect: "سياسة الخصوصية",
  },
  {
    path: "/ko/privacy",
    file: "ko/privacy.html",
    lang: "ko",
    group: "privacy",
    title: "개인정보 처리방침 | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nations가 수집하는 데이터, 그 이용 방법, 공유 대상, 삭제 요청 방법을 안내합니다.",
    expect: "개인정보 처리방침",
  },
  {
    path: "/ja/privacy",
    file: "ja/privacy.html",
    lang: "ja",
    group: "privacy",
    title: "プライバシーポリシー | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nationsが収集するデータ、その利用方法、共有先、削除の請求方法について説明します。",
    expect: "プライバシーポリシー",
  },
  {
    path: "/zh-hans/privacy",
    file: "zh-hans/privacy.html",
    lang: "zh-Hans",
    group: "privacy",
    title: "隐私政策 | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nations 收集哪些数据、如何使用、与谁共享，以及如何申请删除。",
    expect: "隐私政策",
  },
  {
    path: "/zh-hant/privacy",
    file: "zh-hant/privacy.html",
    lang: "zh-Hant",
    group: "privacy",
    title: "隱私政策 | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nations 收集哪些資料、如何使用、與誰分享，以及如何申請刪除。",
    expect: "隱私政策",
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
const set = (html, re, value, escape = true) => {
  if (!re.test(html)) die(`index.html lost the tag matched by ${re}`);
  return html.replace(re, `$1${escape ? esc(value) : value}$3`);
};

const withMeta = (html, page) => {
  const url = `${SITE}${page.path}`;
  // <html lang="en"> becomes <html lang="ar" dir="rtl"> for a right-to-left
  // page; the browser lays the whole document out from the right then.
  html = set(html, /(<html lang=")([^"]*)(">)/, page.lang ?? "en");
  if (page.dir) html = set(html, /(<html lang="[^"]*")()(>)/, ` dir="${page.dir}"`, false);
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
  // Language variants point at each other, so a search engine shows the right
  // one; x-default is the English page the stores link to.
  if (page.group) {
    const variants = PAGES.filter((p) => p.group === page.group);
    const fallback = variants.find((p) => p.lang === "en") ?? variants[0];
    const links = [
      ...variants.map((p) => `<link rel="alternate" hreflang="${p.lang}" href="${SITE}${p.path}" />`),
      `<link rel="alternate" hreflang="x-default" href="${SITE}${fallback.path}" />`,
    ];
    if (!html.includes("</head>")) die("index.html has no </head> to add hreflang links to");
    html = html.replace("</head>", `    ${links.join("\n    ")}\n  </head>`);
  }
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

  const out = join(DIST, page.file);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`   ${page.file}  ${(html.length / 1024).toFixed(1)} kB`);
}

rmSync(SSR_OUT, { recursive: true, force: true });
console.log(`\x1b[32mPrerendered\x1b[0m ${PAGES.length} pages into dist/\n`);
