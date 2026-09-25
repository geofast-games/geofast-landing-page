import type { TermsContent, TermsLang } from "./types";
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

export type { Block, PolicySection, TermsContent, TermsLang } from "./types";

// Insertion order is the language menu's order, the same as the privacy
// policy's: English first, then the Latin-script languages alphabetically by
// their native name, then Russian and Arabic, then Korean, Japanese,
// Simplified and Traditional Chinese.
export const termsContent: Record<TermsLang, TermsContent> = {
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

export const termsLangs = Object.keys(termsContent) as TermsLang[];

export const isTermsLang = (value: string | undefined): value is TermsLang =>
  value !== undefined && value in termsContent;

// English is the store-linked URL and stays at /termsofservice; the others
// live one level down so GitHub Pages serves them from de/termsofservice.html
// and friends, next to the privacy policy of the same language.
export const termsPath = (lang: TermsLang): string =>
  lang === "en" ? "/termsofservice" : `/${lang}/termsofservice`;

// What goes into <html lang> and hreflang: the BCP-47 tag when the URL key is
// not one (zh-hans -> zh-Hans, pt -> pt-BR), otherwise the key itself.
export const termsHtmlLang = (lang: TermsLang): string =>
  termsContent[lang].htmlLang ?? lang;
