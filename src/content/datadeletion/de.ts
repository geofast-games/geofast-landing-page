import type { DataDeletionContent } from "./types";

// German. Formal "Sie" throughout, as in the German privacy policy and the
// German Terms. The page is the "Antrag auf Datenlöschung"; both other
// documents link to it as the "Seite zur Datenlöschung". Terminology follows
// them: "Konto", "Gerät", "Benutzername", "Fortschritt", "virtuelle
// Währungen und Gegenstände", "Live-Datenbank" and "Live-Systeme", "Archiv",
// "Abonnement", "Store" for the app store; "Battle Pass" stays untranslated,
// as in the game. The privacy policy is the "Datenschutzerklärung", the
// Terms are the "Nutzungsbedingungen", both as they name themselves.
export const de: DataDeletionContent = {
  lang: "de",
  label: "Deutsch",
  pageTitle: "Antrag auf Datenlöschung | Geofast: Battle of Nations",
  metaDescription:
    "Wie Sie Ihr Konto und Ihre personenbezogenen Daten bei Geofast: Battle of Nations löschen, im Spiel oder per E-Mail, was gelöscht wird, was bleibt und wie lange es dauert.",
  gameName: "Geofast: Battle of Nations",
  docName: "Antrag auf Datenlöschung",
  lastUpdated: "Zuletzt aktualisiert: 25. September 2026",
  sectionsLabel: "Abschnitte",
  languageLabel: "Sprache",
  contact: {
    line: "Fragen? Fragen Sie auf Discord. Anliegen zu Ihren Daten: schreiben Sie uns eine E-Mail.",
    discord: "Auf Discord fragen",
    back: "Zurück zu Geofast Games",
  },
  request: {
    title: "Löschung per E-Mail beantragen",
    text: "Für den Fall, dass Sie das Spiel nicht mehr öffnen können. Die Schaltfläche öffnet eine E-Mail an uns, in der der Antrag bereits formuliert ist; tragen Sie Ihre Kontodaten ein und senden Sie sie ab. Wenn Sie auf diesem Gerät keine E-Mail-App haben, schreiben Sie mit denselben Angaben an contact@geofastgames.com.",
    button: "Löschantrag senden",
    emailSubject: "Antrag auf Datenlöschung - Geofast: Battle of Nations",
    emailBody: `Hallo Geofast Games,

ich möchte, dass mein Konto bei Geofast: Battle of Nations und meine personenbezogenen Daten gelöscht werden.

Mein Konto:
- Benutzername im Spiel: [bitte ausfüllen]
- Mit dem Konto verknüpfte E-Mail-Adresse, falls vorhanden: [bitte ausfüllen]
- Nation, für die ich spiele: [bitte ausfüllen]
- Zum Spielen verwendetes Gerät: [bitte ausfüllen]

Mir ist bewusst, dass die Löschung endgültig ist, dass mein Fortschritt, meine Währungen und Gegenstände verloren gehen und dass ein Battle-Pass-Abonnement separat in meinem App-Store gekündigt werden muss.

Vielen Dank.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Ihr Recht auf Löschung Ihrer Daten",
      blocks: [
        {
          type: "p",
          text: "Sie können Ihr Konto bei *Geofast: Battle of Nations* und die damit verknüpften personenbezogenen Daten jederzeit löschen lassen, wo immer Sie leben, ohne einen Grund anzugeben. Es gibt zwei Wege: im Spiel, was sofort geschieht, oder per E-Mail, wenn Sie das Spiel nicht mehr öffnen können.",
        },
        {
          type: "p",
          text: "Die Löschung Ihres Kontos ist die einzige Form der Löschung, die wir anbieten: Wir löschen keine Teile eines Kontos und behalten den Rest.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Bevor Sie löschen",
      blocks: [
        {
          type: "ul",
          items: [
            "**Kündigen Sie zuerst Ihren Battle Pass.** Ein Abonnement ist ein Vertrag mit Ihrem App-Store, und das Löschen Ihres Kontos kündigt es nicht. Kündigen Sie es in den Abonnementeinstellungen von Google Play oder dem App Store, sonst verlängert es sich weiter.",
            "**Nichts wird erstattet.** Virtuelle Währungen, Gegenstände und ungenutzte Abonnementzeit enden mit dem Konto, wie in unseren [Nutzungsbedingungen](/termsofservice) festgelegt.",
            "**Es kann nicht rückgängig gemacht werden.** Es gibt keine Karenzzeit und keine Sicherung, aus der wiederhergestellt werden könnte.",
            "**Es gilt für jedes Gerät.** Das Konto verschwindet von jedem Gerät, mit dem es verknüpft war, nicht nur von dem, von dem aus Sie löschen.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Ihr Konto im Spiel löschen",
      blocks: [
        {
          type: "p",
          text: "Öffnen Sie Ihr Profil, tippen Sie auf **Mein Konto löschen** und geben Sie zur Bestätigung Ihren Benutzernamen ein. Das Konto wird sofort gelöscht. Beim nächsten Start des Spiels auf diesem Gerät wird ein neues, leeres Konto angelegt.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Oder bitten Sie uns per E-Mail",
      blocks: [
        {
          type: "p",
          text: "Wenn Sie das Spiel deinstalliert oder das Gerät verloren haben, schreiben Sie an [contact@geofastgames.com](mailto:contact@geofastgames.com) oder nutzen Sie die Schaltfläche unten, mit Ihrem Benutzernamen im Spiel und, falls vorhanden, der mit Ihrem Konto verknüpften E-Mail-Adresse. Schreiben Sie von dieser Adresse: Daran erkennen wir, dass der Antrag vom Inhaber des Kontos kommt. Wenn Ihr Konto keine E-Mail-Adresse hat, nennen Sie uns Ihren Benutzernamen und die Nation, für die Sie spielen; wir bestätigen dann über das Spiel, dass das Konto Ihnen gehört, bevor wir etwas löschen.",
        },
        {
          type: "p",
          text: "Wir bestätigen den Eingang Ihres Antrags, löschen innerhalb von 30 Tagen und bestätigen erneut, wenn es erledigt ist. Wenn wir Ihre Angaben keinem Konto zuordnen können, fragen wir bei Ihnen nach, bevor wir handeln; wir löschen nie ein Konto aufgrund eines nicht verifizierten Antrags.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "Was gelöscht wird",
      blocks: [
        {
          type: "p",
          text: "Das Löschen Ihres Kontos entfernt es und alles, was darunter gespeichert ist:",
        },
        {
          type: "ul",
          items: [
            "Ihr Konto, Ihren Benutzernamen und die damit verknüpften Geräte-, E-Mail-, Google- oder Apple-Verknüpfungen;",
            "Ihren Fortschritt: Ranglistenplätze, Gegenstände, virtuelle Währungen, Verbesserungen, Erfolge, Saison-Fortschritt und Schlachtverlauf;",
            "Ihre Freundesliste und Ihren Empfehlungscode;",
            "Ihr Push-Token.",
          ],
        },
        {
          type: "p",
          text: "Technische Einträge, die mit dem Konto verbunden waren, etwa Analyse-Ereignisse, Chatnachrichten, die noch in unserer Live-Datenbank liegen, sowie die in der Datenschutzerklärung beschriebenen Partiedaten und der Erststart-Eintrag, werden innerhalb von 30 Tagen aus unseren Live-Systemen entfernt.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "Was wir behalten und warum",
      blocks: [
        {
          type: "ul",
          items: [
            "Kaufbelege, die wir nach dem Buchhaltungsrecht aufbewahren müssen, für die dort festgelegte Dauer.",
            "Statistiken, die Sie nicht mehr identifizieren, etwa die Zahl der an einem bestimmten Tag gespielten Schlachten.",
            "Einträge, die vor der Löschung bereits aus der Live-Datenbank in unser Archiv gewandert waren, wie unter [Wie lange wir Daten aufbewahren](/privacy#retention) in der Datenschutzerklärung beschrieben.",
            "Daten, die die App-Stores, Google AdMob oder Discord nach ihren eigenen Richtlinien halten. Darauf haben wir keinen Einfluss; um sie entfernen zu lassen, wenden Sie sich an diese Anbieter.",
          ],
        },
        {
          type: "p",
          text: "Lokale Dateien auf Ihrem Gerät gehören Ihnen: Das Deinstallieren des Spiels entfernt sie.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Weitere Anliegen zu Ihren Daten",
      blocks: [
        {
          type: "p",
          text: "Sie können auch eine Kopie Ihrer Daten anfordern, falsche Daten berichtigen lassen oder der Verwendung Ihrer Daten widersprechen. Dieselbe E-Mail-Adresse ist für all das zuständig, und die [Datenschutzerklärung](/privacy#rights) beschreibt jedes dieser Rechte. Wir antworten innerhalb eines Monats.",
        },
      ],
    },
  ],
};
