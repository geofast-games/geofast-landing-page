import type { PrivacyContent, PrivacyLang } from "./types";
import { en } from "./en";
import { id } from "./id";
import { de } from "./de";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nl } from "./nl";
import { pl } from "./pl";
import { pt } from "./pt";
import { fi } from "./fi";
import { sv } from "./sv";
import { tr } from "./tr";
import { ru } from "./ru";
import { ar } from "./ar";
import { ko } from "./ko";
import { ja } from "./ja";
import { zhHans } from "./zh-hans";
import { zhHant } from "./zh-hant";

export type { Block, PolicySection, PrivacyContent, PrivacyLang } from "./types";

// Insertion order is the language menu's order: English first, then the
// Latin-script languages alphabetically by their native name, then Russian
// and Arabic, then Korean, Japanese, Simplified and Traditional Chinese.
export const privacyContent: Record<PrivacyLang, PrivacyContent> = {
  en,
  id,
  de,
  es,
  fr,
  it,
  nl,
  pl,
  pt,
  fi,
  sv,
  tr,
  ru,
  ar,
  ko,
  ja,
  "zh-hans": zhHans,
  "zh-hant": zhHant,
};

export const privacyLangs = Object.keys(privacyContent) as PrivacyLang[];

export const isPrivacyLang = (value: string | undefined): value is PrivacyLang =>
  value !== undefined && value in privacyContent;

// English is the store-linked URL and stays at /privacy; the others live one
// level down so GitHub Pages serves them from de/privacy.html and friends.
export const privacyPath = (lang: PrivacyLang): string =>
  lang === "en" ? "/privacy" : `/${lang}/privacy`;

// What goes into <html lang> and hreflang: the BCP-47 tag when the URL key is
// not one (zh-hans -> zh-Hans, pt -> pt-BR), otherwise the key itself.
export const privacyHtmlLang = (lang: PrivacyLang): string =>
  privacyContent[lang].htmlLang ?? lang;
