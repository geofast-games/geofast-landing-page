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
    lang: "en",
    group: "datadeletion",
    title: "Data Deletion Request | Geofast: Battle of Nations",
    description:
      "How to request deletion of your Geofast: Battle of Nations account and data.",
    expect: "Data Deletion",
  },
  // The form pages are opened from inside the game (Settings > feedback links)
  // and shared in Discord, so they get real pages too. The forms post to our
  // own inbox; the empty form is what gets prerendered.
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
    expect: "Make a suggestion",
  },
  {
    path: "/reportBug",
    file: "reportBug.html",
    title: "Report a Bug | Geofast: Battle of Nations",
    description: "Report a bug in Geofast: Battle of Nations.",
    expect: "Report a bug",
  },
  {
    path: "/reportTranslationError",
    file: "reportTranslationError.html",
    title: "Report a Translation Error | Geofast: Battle of Nations",
    description: "Report a wrong or missing translation in Geofast: Battle of Nations.",
    expect: "Report a translation error",
  },
  {
    path: "/report",
    file: "report.html",
    title: "Report a Player | Geofast: Battle of Nations",
    description: "Report a player for insults, harassment, an offensive username, cheating or match-fixing in Geofast: Battle of Nations.",
    expect: "Report a player",
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

  // The data deletion page in the same seventeen languages, at
  // /<lang>/datadeletion. `group: "datadeletion"` ties them together for
  // hreflang, separately from the privacy and terms pages; `lang` is the
  // BCP-47 tag; `expect` is the translated document name.
  {
    path: "/id/datadeletion",
    file: "id/datadeletion.html",
    lang: "id",
    group: "datadeletion",
    title: "Permintaan Penghapusan Data | Geofast: Battle of Nations",
    description:
      "Cara menghapus akun dan data pribadi Anda di Geofast: Battle of Nations, di dalam gim atau melalui email, apa yang dihapus, apa yang disimpan, dan berapa lama prosesnya.",
    expect: "Permintaan Penghapusan Data",
  },
  {
    path: "/de/datadeletion",
    file: "de/datadeletion.html",
    lang: "de",
    group: "datadeletion",
    title: "Antrag auf Datenlöschung | Geofast: Battle of Nations",
    description:
      "Wie Sie Ihr Konto und Ihre personenbezogenen Daten bei Geofast: Battle of Nations löschen, im Spiel oder per E-Mail, was gelöscht wird, was bleibt und wie lange es dauert.",
    expect: "Antrag auf Datenlöschung",
  },
  {
    path: "/es/datadeletion",
    file: "es/datadeletion.html",
    lang: "es",
    group: "datadeletion",
    title: "Solicitud de eliminación de datos | Geofast: Battle of Nations",
    description:
      "Cómo eliminar tu cuenta y tus datos personales de Geofast: Battle of Nations, en el juego o por correo electrónico, qué se elimina, qué se conserva y cuánto tarda.",
    expect: "Solicitud de eliminación de datos",
  },
  {
    path: "/fr/datadeletion",
    file: "fr/datadeletion.html",
    lang: "fr",
    group: "datadeletion",
    title: "Demande de suppression des données | Geofast: Battle of Nations",
    description:
      "Comment supprimer votre compte Geofast: Battle of Nations et vos données personnelles, dans le jeu ou par e-mail, ce qui est supprimé, ce qui est conservé et combien de temps cela prend.",
    expect: "Demande de suppression des données",
  },
  {
    path: "/it/datadeletion",
    file: "it/datadeletion.html",
    lang: "it",
    group: "datadeletion",
    title: "Richiesta di cancellazione dei dati | Geofast: Battle of Nations",
    description:
      "Come eliminare il tuo account e i tuoi dati personali di Geofast: Battle of Nations, nel gioco o via e-mail, cosa viene eliminato, cosa viene conservato e quanto tempo occorre.",
    expect: "Richiesta di cancellazione dei dati",
  },
  {
    path: "/nl/datadeletion",
    file: "nl/datadeletion.html",
    lang: "nl",
    group: "datadeletion",
    title: "Verzoek tot gegevensverwijdering | Geofast: Battle of Nations",
    description:
      "Hoe je je account en persoonsgegevens bij Geofast: Battle of Nations verwijdert, in de game of per e-mail, wat er wordt verwijderd, wat we bewaren en hoe lang het duurt.",
    expect: "Verzoek tot gegevensverwijdering",
  },
  {
    path: "/pl/datadeletion",
    file: "pl/datadeletion.html",
    lang: "pl",
    group: "datadeletion",
    title: "Wniosek o usunięcie danych | Geofast: Battle of Nations",
    description:
      "Jak usunąć konto i dane osobowe w Geofast: Battle of Nations, w grze lub przez e-mail, co jest usuwane, co zachowujemy i jak długo to trwa.",
    expect: "Wniosek o usunięcie danych",
  },
  {
    path: "/pt/datadeletion",
    file: "pt/datadeletion.html",
    lang: "pt-BR",
    group: "datadeletion",
    title: "Solicitação de exclusão de dados | Geofast: Battle of Nations",
    description:
      "Como excluir sua conta e seus dados pessoais no Geofast: Battle of Nations, no jogo ou por e-mail, o que é excluído, o que é mantido e quanto tempo leva.",
    expect: "Solicitação de exclusão de dados",
  },
  {
    path: "/fi/datadeletion",
    file: "fi/datadeletion.html",
    lang: "fi",
    group: "datadeletion",
    title: "Tietojen poistopyyntö | Geofast: Battle of Nations",
    description:
      "Miten poistat Geofast: Battle of Nations -tilisi ja henkilötietosi pelissä tai sähköpostilla, mitä poistetaan, mitä säilytetään ja kuinka kauan se kestää.",
    expect: "Tietojen poistopyyntö",
  },
  {
    path: "/sv/datadeletion",
    file: "sv/datadeletion.html",
    lang: "sv",
    group: "datadeletion",
    title: "Begäran om radering av uppgifter | Geofast: Battle of Nations",
    description:
      "Hur du raderar ditt konto och dina personuppgifter i Geofast: Battle of Nations, i spelet eller via e-post, vad som raderas, vad som sparas och hur lång tid det tar.",
    expect: "Begäran om radering av uppgifter",
  },
  {
    path: "/tr/datadeletion",
    file: "tr/datadeletion.html",
    lang: "tr",
    group: "datadeletion",
    title: "Veri Silme Talebi | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nations hesabınızı ve kişisel verilerinizi oyun içinden veya e-postayla nasıl silersiniz, neler silinir, neler saklanır ve ne kadar sürer.",
    expect: "Veri Silme Talebi",
  },
  {
    path: "/ru/datadeletion",
    file: "ru/datadeletion.html",
    lang: "ru",
    group: "datadeletion",
    title: "Запрос на удаление данных | Geofast: Battle of Nations",
    description:
      "Как удалить аккаунт и персональные данные в Geofast: Battle of Nations — в игре или по электронной почте, что удаляется, что сохраняется и сколько это занимает.",
    expect: "Запрос на удаление данных",
  },
  {
    path: "/ar/datadeletion",
    file: "ar/datadeletion.html",
    lang: "ar",
    dir: "rtl",
    group: "datadeletion",
    title: "طلب حذف البيانات | Geofast: Battle of Nations",
    description:
      "كيف تحذف حسابك وبياناتك الشخصية في Geofast: Battle of Nations، داخل اللعبة أو عبر البريد الإلكتروني، وما يُحذف، وما يُحتفظ به، وكم يستغرق ذلك.",
    expect: "طلب حذف البيانات",
  },
  {
    path: "/ko/datadeletion",
    file: "ko/datadeletion.html",
    lang: "ko",
    group: "datadeletion",
    title: "데이터 삭제 요청 | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nations 계정과 개인정보를 게임 내에서 또는 이메일로 삭제하는 방법, 삭제되는 항목, 유지되는 항목, 소요 기간을 안내합니다.",
    expect: "데이터 삭제 요청",
  },
  {
    path: "/ja/datadeletion",
    file: "ja/datadeletion.html",
    lang: "ja",
    group: "datadeletion",
    title: "データ削除の請求 | Geofast: Battle of Nations",
    description:
      "Geofast: Battle of Nationsのアカウントと個人データをゲーム内またはメールで削除する方法、削除されるもの、保持されるもの、所要期間について説明します。",
    expect: "データ削除の請求",
  },
  {
    path: "/zh-hans/datadeletion",
    file: "zh-hans/datadeletion.html",
    lang: "zh-Hans",
    group: "datadeletion",
    title: "数据删除请求 | Geofast: Battle of Nations",
    description:
      "如何在游戏内或通过电子邮件删除您的 Geofast: Battle of Nations 账户和个人数据，哪些内容会被删除，哪些会被保留，以及需要多长时间。",
    expect: "数据删除请求",
  },
  {
    path: "/zh-hant/datadeletion",
    file: "zh-hant/datadeletion.html",
    lang: "zh-Hant",
    group: "datadeletion",
    title: "資料刪除請求 | Geofast: Battle of Nations",
    description:
      "如何在遊戲內或透過電子郵件刪除您的 Geofast: Battle of Nations 帳戶和個人資料，哪些內容會被刪除，哪些會被保留，以及需要多長時間。",
    expect: "資料刪除請求",
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
