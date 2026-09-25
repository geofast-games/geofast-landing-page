import type { DataDeletionContent } from "./types";

// Dutch (Belgium). Informal "je" throughout, as in the Dutch privacy policy
// and the Dutch Terms. The page is the "Verzoek tot gegevensverwijdering";
// both other documents link to it as the "pagina voor gegevensverwijdering".
// Terminology follows them: "account", "apparaat", "gebruikersnaam",
// "voortgang", "virtuele valuta en items", "live database" and "live
// systemen", "archief", "abonnement", "store" for the app store; "Battle
// Pass" stays untranslated, as in the game. The privacy policy is the
// "privacyverklaring", the Terms are the "gebruiksvoorwaarden", as those
// documents name themselves.
export const nl: DataDeletionContent = {
  lang: "nl",
  label: "Nederlands",
  pageTitle: "Verzoek tot gegevensverwijdering | Geofast: Battle of Nations",
  metaDescription:
    "Hoe je je account en persoonsgegevens bij Geofast: Battle of Nations verwijdert, in de game of per e-mail, wat er wordt verwijderd, wat we bewaren en hoe lang het duurt.",
  gameName: "Geofast: Battle of Nations",
  docName: "Verzoek tot gegevensverwijdering",
  lastUpdated: "Laatst bijgewerkt: 25 september 2026",
  sectionsLabel: "Onderdelen",
  languageLabel: "Taal",
  contact: {
    line: "Vragen? Stel ze op Discord. Verzoeken over je gegevens: mail ons.",
    discord: "Vraag het op Discord",
    back: "Terug naar Geofast Games",
  },
  request: {
    title: "Verwijdering aanvragen per e-mail",
    text: "Voor wanneer je de game niet meer kunt openen. De knop opent een e-mail aan ons waarin het verzoek al is geschreven; vul je accountgegevens in en verstuur hem. Heb je geen e-mailapp op dit apparaat, mail dan met dezelfde gegevens naar contact@geofastgames.com.",
    button: "Verwijderverzoek versturen",
    emailSubject: "Verzoek tot gegevensverwijdering - Geofast: Battle of Nations",
    emailBody: `Hallo Geofast Games,

Ik wil dat mijn account bij Geofast: Battle of Nations en mijn persoonsgegevens worden verwijderd.

Mijn account:
- Gebruikersnaam in de game: [invullen]
- E-mailadres gekoppeld aan het account, indien van toepassing: [invullen]
- Natie waarvoor ik speel: [invullen]
- Apparaat waarop ik speel: [invullen]

Ik begrijp dat verwijdering definitief is, dat mijn voortgang, valuta en items verloren gaan, en dat een Battle Pass-abonnement apart moet worden opgezegd in mijn app store.

Bedankt.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Je recht om je gegevens te laten verwijderen",
      blocks: [
        {
          type: "p",
          text: "Je kunt je account bij *Geofast: Battle of Nations* en de persoonsgegevens die eraan gekoppeld zijn op elk moment laten verwijderen, waar je ook woont, zonder een reden op te geven. Er zijn twee manieren: in de game, wat onmiddellijk gebeurt, of per e-mail als je de game niet meer kunt openen.",
        },
        {
          type: "p",
          text: "Het verwijderen van je account is de enige vorm van verwijdering die we aanbieden: we verwijderen geen delen van een account terwijl we de rest bewaren.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Voordat je verwijdert",
      blocks: [
        {
          type: "ul",
          items: [
            "**Zeg eerst je Battle Pass op.** Een abonnement is een overeenkomst met je app store, en het verwijderen van je account zegt het niet op. Zeg het op in de abonnementsinstellingen van Google Play of de App Store, anders blijft het verlengen.",
            "**Er wordt niets terugbetaald.** Virtuele valuta, items en ongebruikte abonnementstijd eindigen samen met het account, zoals vastgelegd in onze [gebruiksvoorwaarden](/termsofservice).",
            "**Het kan niet ongedaan worden gemaakt.** Er is geen bedenktijd en geen back-up om uit te herstellen.",
            "**Het geldt voor elk apparaat.** Het account verdwijnt van elk apparaat waaraan het was gekoppeld, niet alleen van het apparaat waarop je het verwijdert.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Je account verwijderen in de game",
      blocks: [
        {
          type: "p",
          text: "Open je profiel, tik op **Verwijder mijn account** en typ je gebruikersnaam ter bevestiging. Het account wordt meteen verwijderd. De volgende keer dat de game op dat apparaat start, maakt hij een nieuw, leeg account aan.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Of vraag het ons per e-mail",
      blocks: [
        {
          type: "p",
          text: "Heb je de game van je apparaat verwijderd of het apparaat verloren, mail dan naar [contact@geofastgames.com](mailto:contact@geofastgames.com), of gebruik de knop hieronder, met je gebruikersnaam in de game en, als je die hebt, het e-mailadres dat aan je account is gekoppeld. Schrijf vanaf dat adres: zo weten we dat het verzoek van de eigenaar van het account komt. Heeft je account geen e-mailadres, geef ons dan je gebruikersnaam en de natie waarvoor je speelt, en bevestigen we via de game dat het account van jou is voordat we iets verwijderen.",
        },
        {
          type: "p",
          text: "We bevestigen dat we je verzoek hebben ontvangen, verwijderen binnen 30 dagen en bevestigen opnieuw wanneer het is gebeurd. Kunnen we je gegevens niet aan een account koppelen, dan vragen we je om meer voordat we iets doen; we verwijderen nooit een account op een niet-geverifieerd verzoek.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "Wat er wordt verwijderd",
      blocks: [
        {
          type: "p",
          text: "Het verwijderen van je account wist het account en alles wat eronder is opgeslagen:",
        },
        {
          type: "ul",
          items: [
            "je account, je gebruikersnaam en de apparaat-, e-mail-, Google- of Apple-koppelingen die eraan vastzitten;",
            "je voortgang: ranglijstposities, items, virtuele valuta, upgrades, prestaties, seizoensvoortgang en gevechtsgeschiedenis;",
            "je vriendenlijst en je verwijzingscode;",
            "je pushmeldingstoken.",
          ],
        },
        {
          type: "p",
          text: "Technische records die aan het account waren gekoppeld, zoals analysegebeurtenissen, chatberichten die nog in onze live database staan en de gevechtsrecords en het record van de eerste start die in de privacyverklaring worden beschreven, worden binnen 30 dagen uit onze live systemen verwijderd.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "Wat we bewaren, en waarom",
      blocks: [
        {
          type: "ul",
          items: [
            "Aankoopgegevens die we volgens de boekhoudwetgeving moeten bewaren, voor de termijn die die wet bepaalt.",
            "Statistieken die jou niet meer identificeren, zoals het aantal gevechten dat op een bepaalde dag is gespeeld.",
            "Records die vóór de verwijdering al uit de live database naar ons archief waren gegaan, zoals beschreven onder [hoe lang we gegevens bewaren](/privacy#retention) in de privacyverklaring.",
            "Gegevens die de app stores, Google AdMob of Discord onder hun eigen beleid bewaren. Daarover hebben wij geen zeggenschap; neem contact met hen op om ze te laten verwijderen.",
          ],
        },
        {
          type: "p",
          text: "Lokale bestanden op je apparaat zijn van jou: als je de game van je apparaat verwijdert, zijn ze weg.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Andere verzoeken over je gegevens",
      blocks: [
        {
          type: "p",
          text: "Je kunt ook een kopie van je gegevens vragen, onjuiste gegevens laten corrigeren of bezwaar maken tegen hoe we ze gebruiken. Hetzelfde e-mailadres behandelt al deze verzoeken, en de [privacyverklaring](/privacy#rights) beschrijft elk recht. We antwoorden binnen een maand.",
        },
      ],
    },
  ],
};
