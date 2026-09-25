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
  // The privacy policy exists in four languages. `group` ties the variants
  // together for hreflang links; `lang` sets the page's html lang attribute.
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
    path: "/termsofservice",
    file: "termsofservice.html",
    lang: "en",
    group: "terms",
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

  // The Terms of Service in the same seventeen languages as the privacy
  // policy, at /<lang>/termsofservice. `group: "terms"` ties them together
  // for hreflang, separately from the privacy pages; `lang` is the BCP-47
  // tag; `expect` is the translated document name (no apostrophes: the
  // rendered HTML escapes them).
  {
    path: "/id/termsofservice",
    file: "id/termsofservice.html",
    lang: "id",
    group: "terms",
    title: "Ketentuan Layanan | Geofast: Battle of Nations",
    description:
      "Aturan bermain Geofast: Battle of Nations: akun, perilaku, moderasi dan banding, pembelian dan Battle Pass, perubahan, serta hak Anda.",
    expect: "Ketentuan Layanan",
  },
  {
    path: "/de/termsofservice",
    file: "de/termsofservice.html",
    lang: "de",
    group: "terms",
    title: "Nutzungsbedingungen | Geofast: Battle of Nations",
    description:
      "Die Regeln für das Spielen von Geofast: Battle of Nations: Konto, Verhalten, Moderation und Einspruch, Käufe und Battle Pass, Änderungen und Ihre Rechte.",
    expect: "Nutzungsbedingungen",
  },
  {
    path: "/es/termsofservice",
    file: "es/termsofservice.html",
    lang: "es",
    group: "terms",
    title: "Condiciones del servicio | Geofast: Battle of Nations",
    description:
      "Las reglas para jugar a Geofast: Battle of Nations: cuentas, conducta, moderación y reclamaciones, compras y Pase de Batalla, cambios y tus derechos.",
    expect: "Condiciones del servicio",
  },
  {
    path: "/fr/termsofservice",
    file: "fr/termsofservice.html",
    lang: "fr",
    group: "terms",
    title: "Conditions d'utilisation | Geofast: Battle of Nations",
    description:
      "Les règles du jeu Geofast: Battle of Nations : comptes, conduite, modération et recours, achats et Battle Pass, modifications et vos droits.",
    expect: "Conditions d&#x27;utilisation",
  },
  {
    path: "/it/termsofservice",
    file: "it/termsofservice.html",
    lang: "it",
    group: "terms",
    title: "Termini di servizio | Geofast: Battle of Nations",
    description:
      "Le regole per giocare a Geofast: Battle of Nations: account, condotta, moderazione e reclami, acquisti e Battle Pass, modifiche e i tuoi diritti.",
    expect: "Termini di servizio",
  },
  {
    path: "/nl/termsofservice",
    file: "nl/termsofservice.html",
    lang: "nl",
    group: "terms",
    title: "Gebruiksvoorwaarden | Geofast: Battle of Nations",
    description:
      "De regels voor het spelen van Geofast: Battle of Nations: accounts, gedrag, moderatie en bezwaar, aankopen en de Battle Pass, wijzigingen en je rechten.",
    expect: "Gebruiksvoorwaarden",
  },
  {
    path: "/pl/termsofservice",
    file: "pl/termsofservice.html",
    lang: "pl",
    group: "terms",
    title: "Regulamin | Geofast: Battle of Nations",
    description:
      "Zasady gry w Geofast: Battle of Nations: konta, zasady zachowania, moderacja i odwołania, zakupy i Przepustka Bitewna, zmiany oraz Twoje prawa.",
    expect: "Regulamin",
  },
  {
    path: "/pt/termsofservice",
    file: "pt/termsofservice.html",
    lang: "pt-BR",
    group: "terms",
    title: "Termos de Serviço | Geofast: Battle of Nations",
    description:
      "As regras para jogar Geofast: Battle of Nations: contas, conduta, moderação e recursos, compras e Passe de Batalha, alterações e seus direitos.",
    expect: "Termos de Serviço",
  },
  {
    path: "/fi/termsofservice",
    file: "fi/termsofservice.html",
    lang: "fi",
    group: "terms",
    title: "Käyttöehdot | Geofast: Battle of Nations",
    description:
      "Säännöt Geofast: Battle of Nations -pelin pelaamiseen: tilit, käytös, moderointi ja valitukset, ostokset ja Taistelupassi, muutokset ja oikeutesi.",
    expect: "Käyttöehdot",
  },
  {
    path: "/sv/termsofservice",
    file: "sv/termsofservice.html",
    lang: "sv",
    group: "terms",
    title: "Användarvillkor | Geofast: Battle of Nations",
    description:
      "Reglerna för att spela Geofast: Battle of Nations: konton, uppförande, moderering och överklaganden, köp och Battle Pass, ändringar och dina rättigheter.",
    expect: "Användarvillkor",
  },
  {
    path: "/tr/termsofservice",
    file: "tr/termsofservice.html",
    lang: "tr",
    group: "terms",
    title: "Hizmet Şartları | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nations oynama kuralları: hesaplar, davranış, moderasyon ve itiraz, satın almalar ve Savaş Bileti, değişiklikler ve haklarınız.",
    expect: "Hizmet Şartları",
  },
  {
    path: "/ru/termsofservice",
    file: "ru/termsofservice.html",
    lang: "ru",
    group: "terms",
    title: "Условия использования | Geofast: Battle of Nations",
    description:
      "Правила игры в Geofast: Battle of Nations: аккаунты, поведение, модерация и обжалование, покупки и Боевой пропуск, изменения и ваши права.",
    expect: "Условия использования",
  },
  {
    path: "/ar/termsofservice",
    file: "ar/termsofservice.html",
    lang: "ar",
    dir: "rtl",
    group: "terms",
    title: "شروط الخدمة | Geofast: Battle of Nations",
    description:
      "قواعد اللعب في Geofast: Battle of Nations: الحسابات، والسلوك، والإشراف والطعون، والمشتريات وتذكرة المعركة، والتغييرات، وحقوقك.",
    expect: "شروط الخدمة",
  },
  {
    path: "/ko/termsofservice",
    file: "ko/termsofservice.html",
    lang: "ko",
    group: "terms",
    title: "서비스 이용약관 | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nations 이용 규칙: 계정, 행동 규범, 운영 관리와 이의 제기, 구매와 배틀 패스, 변경 사항, 그리고 귀하의 권리를 안내합니다.",
    expect: "서비스 이용약관",
  },
  {
    path: "/ja/termsofservice",
    file: "ja/termsofservice.html",
    lang: "ja",
    group: "terms",
    title: "利用規約 | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nationsをプレイするためのルール：アカウント、行動規範、モデレーションと異議申し立て、購入とバトルパス、変更、お客様の権利について説明します。",
    expect: "利用規約",
  },
  {
    path: "/zh-hans/termsofservice",
    file: "zh-hans/termsofservice.html",
    lang: "zh-Hans",
    group: "terms",
    title: "服务条款 | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nations 的游戏规则：账户、行为规范、管理与申诉、购买与战斗通行证、条款变更以及您的权利。",
    expect: "服务条款",
  },
  {
    path: "/zh-hant/termsofservice",
    file: "zh-hant/termsofservice.html",
    lang: "zh-Hant",
    group: "terms",
    title: "服務條款 | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nations 的遊戲規則：帳戶、行為規範、管理與申訴、購買與戰鬥通行證、條款變更以及您的權利。",
    expect: "服務條款",
  },
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
