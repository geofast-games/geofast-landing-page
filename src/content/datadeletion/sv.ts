import type { DataDeletionContent } from "./types";

// Swedish. "Du" throughout, as in the Swedish privacy policy and the Swedish
// Terms. The page is the "Begaran om radering av uppgifter"; both other
// documents link to it as the "sida for radering av uppgifter". Terminology
// follows them: "konto", "enhet", "anvandarnamn", "framsteg", "virtuella
// valutor och foremal", "den aktiva databasen" and "de aktiva systemen",
// "arkiv", "prenumeration", "butik" for the store; "Battle Pass" stays
// untranslated, as in the game. The privacy policy is the
// "integritetspolicy", the Terms are the "anvandarvillkor", as they name
// themselves.
export const sv: DataDeletionContent = {
  lang: "sv",
  label: "Svenska",
  pageTitle: "Begäran om radering av uppgifter | Geofast: Battle of Nations",
  metaDescription:
    "Hur du raderar ditt konto och dina personuppgifter i Geofast: Battle of Nations, i spelet eller via e-post, vad som raderas, vad som sparas och hur lång tid det tar.",
  gameName: "Geofast: Battle of Nations",
  docName: "Begäran om radering av uppgifter",
  lastUpdated: "Senast uppdaterad: 25 september 2026",
  sectionsLabel: "Avsnitt",
  languageLabel: "Språk",
  contact: {
    line: "Frågor? Fråga på Discord. Begäranden om dina uppgifter: skicka e-post till oss.",
    discord: "Fråga på Discord",
    back: "Tillbaka till Geofast Games",
  },
  request: {
    title: "Begär radering via e-post",
    text: "För när du inte längre kan öppna spelet. Knappen öppnar ett e-postmeddelande till oss där begäran redan är skriven; fyll i dina kontouppgifter och skicka det. Om du inte har någon e-postapp på den här enheten, skriv till contact@geofastgames.com med samma uppgifter.",
    button: "Skicka begäran om radering",
    emailSubject: "Begäran om radering av uppgifter - Geofast: Battle of Nations",
    emailBody: `Hej Geofast Games,

Jag vill att mitt konto i Geofast: Battle of Nations och mina personuppgifter raderas.

Mitt konto:
- Användarnamn i spelet: [fyll i]
- E-postadress kopplad till kontot, om någon: [fyll i]
- Nation jag spelar för: [fyll i]
- Enhet jag spelar på: [fyll i]

Jag förstår att raderingen är permanent, att mina framsteg, valutor och föremål går förlorade och att en Battle Pass-prenumeration måste sägas upp separat i min appbutik.

Tack.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Din rätt att radera dina uppgifter",
      blocks: [
        {
          type: "p",
          text: "Du kan när som helst få ditt konto i *Geofast: Battle of Nations* och de personuppgifter som är kopplade till det raderade, oavsett var du bor och utan att ange något skäl. Det finns två sätt: i spelet, vilket sker omedelbart, eller via e-post om du inte längre kan öppna spelet.",
        },
        {
          type: "p",
          text: "Att radera ditt konto är den enda form av radering vi erbjuder: vi raderar inte delar av ett konto och behåller resten.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Innan du raderar",
      blocks: [
        {
          type: "ul",
          items: [
            "**Säg upp din Battle Pass först.** En prenumeration är ett avtal med din appbutik, och att radera ditt konto säger inte upp den. Säg upp den i prenumerationsinställningarna i Google Play eller App Store, annars fortsätter den att förnyas.",
            "**Ingenting återbetalas.** Virtuella valutor, föremål och outnyttjad prenumerationstid upphör med kontot, enligt våra [användarvillkor](/termsofservice).",
            "**Det kan inte ångras.** Det finns ingen ångerfrist och ingen säkerhetskopia att återställa från.",
            "**Det gäller alla enheter.** Kontot försvinner från alla enheter det var kopplat till, inte bara den du raderar från.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Radera ditt konto i spelet",
      blocks: [
        {
          type: "p",
          text: "Öppna din profil, tryck på **Ta bort mitt konto** och skriv ditt användarnamn för att bekräfta. Kontot raderas direkt. Nästa gång spelet startar på den enheten skapar det ett nytt, tomt konto.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Eller be oss via e-post",
      blocks: [
        {
          type: "p",
          text: "Om du har avinstallerat spelet eller förlorat enheten, skicka e-post till [contact@geofastgames.com](mailto:contact@geofastgames.com), eller använd knappen nedan, med ditt användarnamn i spelet och, om du har en, den e-postadress som är kopplad till ditt konto. Skriv från den adressen: det är så vi vet att begäran kommer från kontots ägare. Om ditt konto inte har någon e-postadress, uppge ditt användarnamn och den nation du spelar för, så bekräftar vi via spelet att kontot är ditt innan vi raderar något.",
        },
        {
          type: "p",
          text: "Vi bekräftar att vi har tagit emot din begäran, raderar inom 30 dagar och bekräftar igen när det är gjort. Om vi inte kan matcha dina uppgifter mot ett konto ber vi dig om mer innan vi agerar; vi raderar aldrig ett konto på en overifierad begäran.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "Vad som raderas",
      blocks: [
        {
          type: "p",
          text: "Att radera ditt konto tar bort det och allt som lagras under det:",
        },
        {
          type: "ul",
          items: [
            "ditt konto, ditt användarnamn och de enhets-, e-post-, Google- eller Apple-kopplingar som hör till det;",
            "dina framsteg: placeringar, föremål, virtuella valutor, uppgraderingar, prestationer, säsongsframsteg och stridshistorik;",
            "din vänlista och din rekommendationskod;",
            "din token för pushnotiser.",
          ],
        },
        {
          type: "p",
          text: "Tekniska poster som var knutna till kontot, som analyshändelser, chattmeddelanden som fortfarande finns i vår aktiva databas och de matchposter och den post från första starten som beskrivs i integritetspolicyn, tas bort från våra aktiva system inom 30 dagar.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "Vad vi behåller, och varför",
      blocks: [
        {
          type: "ul",
          items: [
            "Köpunderlag som bokföringslagen kräver att vi sparar, under den tid lagen anger.",
            "Statistik som inte längre identifierar dig, till exempel antalet strider som spelats en viss dag.",
            "Poster som redan hade lämnat den aktiva databasen för vårt arkiv före raderingen, som beskrivs under [hur länge vi sparar uppgifter](/privacy#retention) i integritetspolicyn.",
            "Uppgifter som appbutikerna, Google AdMob eller Discord har enligt sina egna policyer. Dem kontrollerar vi inte; kontakta dem för att få dem borttagna.",
          ],
        },
        {
          type: "p",
          text: "Lokala filer på din enhet är dina: att avinstallera spelet tar bort dem.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Andra begäranden om dina uppgifter",
      blocks: [
        {
          type: "p",
          text: "Du kan också begära en kopia av dina uppgifter, få felaktiga uppgifter rättade eller invända mot hur vi använder dem. Samma e-postadress hanterar alla dessa, och [integritetspolicyn](/privacy#rights) beskriver varje rättighet. Vi svarar inom en månad.",
        },
      ],
    },
  ],
};
