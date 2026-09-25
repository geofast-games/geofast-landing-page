import type { PrivacyContent } from "./types";

// German. Formal "Sie" throughout, as is standard for legal texts in German.
// Game terms follow the game's own German translation: "Schlacht" for battle,
// "Nation" for nation; "Battle Pass" stays untranslated, as in the game.
export const de: PrivacyContent = {
  lang: "de",
  label: "Deutsch",
  pageTitle: "Datenschutzerklärung | Geofast: Battle of Nations",
  metaDescription:
    "Welche Daten Geofast: Battle of Nations erhebt, wie sie verwendet werden, mit wem sie geteilt werden und wie Sie ihre Löschung beantragen.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Datenschutzerklärung",
  lastUpdated: "Zuletzt aktualisiert: 25. September 2026",
  sectionsLabel: "Abschnitte",
  languageLabel: "Sprache",
  legalBasisLabel: "Rechtsgrundlage:",
  contact: {
    line: "Fragen? Fragen Sie auf Discord. Anliegen zu Ihren Daten: schreiben Sie uns eine E-Mail.",
    discord: "Auf Discord fragen",
    back: "Zurück zu Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Wer wir sind",
      blocks: [
        {
          type: "p",
          text: "Geofast Games ist ein unabhängiges Spielestudio mit Sitz in Belgien. Wir entwickeln *Geofast: Battle of Nations* und betreiben diese Website. Wir sind der Verantwortliche für die in dieser Erklärung beschriebenen personenbezogenen Daten: Wir entscheiden, was erhoben wird und wozu.",
        },
        {
          type: "p",
          text: "Sie erreichen uns unter [contact@geofastgames.com](mailto:contact@geofastgames.com). Wir sind ein Zwei-Personen-Studio und haben keinen Datenschutzbeauftragten benannt; unter derselben Adresse erreichen Sie die Personen, die für Ihre Daten verantwortlich sind.",
        },
        {
          type: "p",
          text: "Diese Erklärung gilt für das Spiel auf iOS und Android sowie für die Website geofastgames.com. Sie gilt nicht für Discord, den App Store, Google Play oder andere Dienste, die Sie neben dem Spiel nutzen; diese haben eigene Datenschutzerklärungen, die wir dort verlinken, wo sie vorkommen.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "Auf einen Blick",
      blocks: [
        {
          type: "table",
          head: ["Was", "Wozu", "Wie lange"],
          rows: [
            [
              "Konto: eine Gerätekennung, Ihr Benutzername und, wenn Sie möchten, eine E-Mail-Adresse mit Passwort oder eine Anmeldung über Google oder Apple",
              "Um Ihr Konto zu führen und Ihnen das Online-Spielen zu ermöglichen",
              "Bis Sie Ihr Konto löschen; inaktive Konten löschen wir nicht",
            ],
            [
              "Spielverlauf: Partien, Ranglisten, Gegenstände, Kaufbestätigungen",
              "Um das Spiel, die Ranglisten und Ihr Inventar zu betreiben",
              "Bis Sie Ihr Konto löschen; Wiederholungen von Schlachten 7 Tage, danach archiviert",
            ],
            [
              "Chatnachrichten",
              "Um sie zuzustellen und Missbrauch zu moderieren",
              "Schlacht-Chat 15 Tage, danach gelöscht; übriger Chat 90 Tage, danach archiviert",
            ],
            [
              "IP-Adresse, Gerätekennung, Telefonmodell",
              "Um Betrug und Absprachen zu erkennen und Sperren durchzusetzen",
              "Partiedaten 30 Tage und Erststart-Eintrag 90 Tage, danach archiviert; die Gerätekennung bleibt bei Ihrem Konto; ein Sperreintrag bleibt, bis wir die Sperre aufheben",
            ],
            [
              "Push-Token",
              "Um Benachrichtigungen zu senden, die Sie abschalten können",
              "Bis das Token ungültig wird (zum Beispiel nach dem Deinstallieren) oder Sie Ihr Konto löschen",
            ],
            [
              "Analyse-Ereignisse darüber, wie Sie spielen",
              "Um Spielmuster zu verstehen und Probleme zu beheben",
              "400 Tage, danach archiviert",
            ],
            [
              "Werbe-ID, ausgelesen von der Software von Google AdMob",
              "Um Belohnungsanzeigen zu laden und zu zeigen, die Sie ansehen können, wenn Sie möchten",
              "Wird beim Start des Spiels und beim Laden einer Anzeige an Google gesendet; wir speichern sie nicht; es gilt die Datenschutzerklärung von AdMob",
            ],
          ],
        },
        { type: "lead", text: "Vier Dinge, die Sie wissen sollten, bevor Sie weiterlesen" },
        {
          type: "ul",
          items: [
            "Der Chat ist nicht privat. Nachrichten werden bis zu 15 Tage (Schlacht-Chat) bzw. 90 Tage (übriger Chat) aufbewahrt, damit Moderatoren Meldungen prüfen können; jede Nachricht durchläuft einen automatischen Filter, und wenn wir die Funktion einschalten, werden Nachrichten zusätzlich vom Gemini-Dienst von Google eingestuft.",
            "Wir erfassen Ihre IP-Adresse und eine Gerätekennung, wenn Sie spielen, um Betrug zu erkennen und Sperren durchzusetzen.",
            "Unsere Server stehen in Frankfurt am Main. Einige Anbieter, die wir nutzen (Google, Apple), verarbeiten Daten außerhalb der Europäischen Union.",
            "Einträge, die aus unserer Live-Datenbank ablaufen (Chat außer Schlacht-Chat, Partiedaten, Analysedaten und mehr), werden in Frankfurt archiviert statt vernichtet. Siehe „Wie lange wir Daten aufbewahren“.",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Ihr Konto",
      blocks: [
        {
          type: "p",
          text: "Wenn Sie zum ersten Mal online spielen, legen wir ein Konto für Sie an und verknüpfen es mit einer Kennung, die auf Ihrem Gerät erzeugt wird. Mehr ist zum Spielen nicht nötig, und Sie müssen uns nie Ihren Namen nennen.",
        },
        {
          type: "p",
          text: "Sie wählen einen Benutzernamen, den andere Spieler sehen können. Darüber hinaus speichern wir, was das Spiel für Sie braucht: Ihren Fortschritt, Ihre Einstellungen und Freunde sowie die Version des Spiels, die Sie verwenden.",
        },
        {
          type: "p",
          text: "Wenn Sie Ihren Fortschritt geräteübergreifend behalten möchten, können Sie eine E-Mail-Adresse mit Passwort hinzufügen oder sich mit Google oder Apple anmelden. Passwörter werden gehasht gespeichert, das heißt, wir können sie nicht lesen. Von Google oder Apple erhalten wir nur, was zum Verknüpfen des Kontos nötig ist, und Ihre E-Mail-Adresse verwenden wir nur, um das Konto zu sichern und das Passwort zurückzusetzen.",
        },
        {
          type: "p",
          text: "Die Gerätekennung ist zum Online-Spielen erforderlich. Alles andere ist freiwillig.",
        },
        { type: "basis", text: "Erfüllung unseres Vertrags mit Ihnen (Bereitstellung des Spiels)." },
      ],
    },
    {
      id: "gameplay",
      title: "Spielverlauf, Fortschritt und Käufe",
      blocks: [
        {
          type: "p",
          text: "Um Online-Schlachten, Ranglisten und Ihr Inventar zu betreiben, speichern wir Ihren Spielfortschritt: Partieergebnisse, Ranglistenplätze, die Gegenstände und Währungen, die Sie besitzen, und Ihren Fortschritt in Events und Saisons. Ihre letzten Schlachten werden als Verlauf aufbewahrt; Wiederholungen von Schlachten verlassen die Live-Datenbank nach 7 Tagen und werden archiviert.",
        },
        {
          type: "p",
          text: "Zahlungen werden vollständig über Google Play oder den App Store abgewickelt. Wir sehen Ihre Karten- oder Bankdaten nie. Der Store teilt uns mit, was Sie gekauft haben, und wir speichern diese Bestätigung sowie beim Battle Pass den Status des Abonnements, damit wir Gegenstände liefern, Käufe wiederherstellen und beim Support helfen können.",
        },
        {
          type: "basis",
          text: "Erfüllung unseres Vertrags mit Ihnen. Kaufbelege, die wir für die Buchhaltung aufbewahren müssen, bewahren wir aufgrund unserer gesetzlichen Pflichten auf.",
        },
      ],
    },
    {
      id: "chat",
      title: "Chat und Moderation",
      blocks: [
        {
          type: "p",
          text: "Das Spiel hat einen Chat zwischen Spielern. Nachrichten werden an die anderen Spieler in diesem Chat zugestellt und auf unseren Servern gespeichert: Chat innerhalb einer Schlacht 15 Tage, danach wird er gelöscht; jeder andere Chat 90 Tage, danach wird er archiviert (siehe „Wie lange wir Daten aufbewahren“). Wir bewahren sie auf, damit Moderatoren Meldungen über Missbrauch oder Betrug untersuchen können. Jeder Zugriff eines Moderators wird protokolliert.",
        },
        {
          type: "p",
          text: "Die Moderation läuft in drei Schritten. Erstens durchläuft jede Nachricht vor der Zustellung einen automatischen Filter auf unseren Servern (Ratenbegrenzung, eine Wortliste und Muster für Hassrede); eine blockierte Nachricht wird nie gesendet. Zweitens werden zugestellte Nachrichten, wenn wir die Funktion einschalten, zusätzlich vom Gemini-Dienst von Google eingestuft, der die Nachricht und Ihre letzten Nachrichten in diesem Chat als Kontext erhält. Benutzernamen werden von Gemini geprüft, wenn Sie sie festlegen oder ändern. Eine Nachricht, die Gemini als missbräuchlich einstuft, wird gelöscht, und ein Verstoß wird vermerkt. Drittens bearbeiten menschliche Moderatoren Meldungen.",
        },
        {
          type: "p",
          text: "Verstöße führen zu Verwarnungen und vorübergehenden Chat-Sperren, wie in unseren [Nutzungsbedingungen](/termsofservice) beschrieben. Der Vermerk Ihrer Verstöße und Sperren bleibt bei Ihrem Konto, damit wiederholtes Verhalten erkannt werden kann. Diese automatischen Schritte betreffen nur Ihre Möglichkeit zu chatten. Wenn Sie eine Entscheidung für falsch halten, schreiben Sie uns eine E-Mail oder fragen Sie auf Discord; dann sieht sich ein Mensch den Fall an.",
        },
        {
          type: "p",
          text: "Teilen Sie im Chat keine persönlichen Angaben. Andere Spieler können sehen, was Sie schreiben.",
        },
        {
          type: "basis",
          text: "unser berechtigtes Interesse, das Spiel für alle sicher und fair zu halten.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Fairplay und Sicherheit",
      blocks: [
        {
          type: "p",
          text: "Betrug ruiniert ein Wettkampfspiel für alle. Deshalb bewahren wir eine kleine Menge technischer Daten auf, um ihn zu erkennen und Sperren durchzusetzen:",
        },
        {
          type: "ul",
          items: [
            "Beim ersten Start des Spiels erfassen wir Ihre Gerätekennung, Ihr Telefonmodell, die Plattform und Ihre IP-Adresse sowie die Schritte des Tutorials, die Sie abschließen. Dieser Eintrag verlässt die Live-Datenbank nach 90 Tagen und wird archiviert.",
            "Für jede Online-Partie erfassen wir, welche Konten teilgenommen haben, mit ihrer Gerätekennung und IP-Adresse. Eine automatische Prüfung durchsucht regelmäßig die jüngsten Einträge nach Spielerpaaren, die weit häufiger in denselben Partien landen, als der Zufall erlaubt. Partiedaten verlassen die Live-Datenbank nach 30 Tagen und werden archiviert.",
            "Erkannter Betrug führt zu Strafen bis hin zu einer Sperre, wie in unseren [Nutzungsbedingungen](/termsofservice) beschrieben. Der Strafverlauf bleibt bei Ihrem Konto, und Sie können jede Strafe von einem Menschen überprüfen lassen.",
            "Eine Gerätesperre blockiert auch neue Konten von diesem Gerät. Sperreinträge haben kein Enddatum; wir entfernen sie, wenn eine Überprüfung zeigt, dass die Sperre falsch war.",
          ],
        },
        {
          type: "p",
          text: "Spielzüge selbst werden auf unseren Servern geprüft, während sie geschehen; dafür sind keine Daten über die Partie hinaus nötig. Wir verwenden Ihre IP-Adresse nicht, um Ihren Standort zu bestimmen. Beim ersten Beitritt schlägt das Spiel eine Nation anhand der Sprach- und Regionseinstellung Ihres Geräts vor; dieses Auslesen geschieht auf dem Gerät, und Sie können stattdessen jede beliebige Nation wählen.",
        },
        {
          type: "basis",
          text: "unser berechtigtes Interesse, Betrug und Missbrauch zu verhindern und den Dienst sicher zu halten.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Push-Benachrichtigungen",
      blocks: [
        {
          type: "p",
          text: "Wenn Sie Benachrichtigungen erlauben, übermittelt uns Ihr Gerät ein Push-Token, das wir speichern und nutzen, um Sie über Ereignisse im Spiel zu informieren: Dinge, die Ihr Konto, Ihre Freunde und Ihre Nation betreffen, neue Events und Saisons sowie eine Erinnerung, wenn Sie eine Weile nicht gespielt haben.",
        },
        {
          type: "p",
          text: "Benachrichtigungen werden über Firebase Cloud Messaging (Google) auf Android und den Apple Push Notification Service auf iOS zugestellt. Sie können sie jederzeit in den Einstellungen Ihres Geräts abschalten; dann werden sie nicht mehr angezeigt. Das Token selbst bleibt gespeichert, bis es ungültig wird (zum Beispiel wenn Sie das Spiel deinstallieren) oder Sie Ihr Konto löschen. Zugestellte Benachrichtigungen bewahren wir 30 Tage auf, danach werden sie archiviert.",
        },
        {
          type: "basis",
          text: "unser berechtigtes Interesse, Sie über Ihr Konto und das Spiel, das Sie spielen, auf dem Laufenden zu halten, mit einer Abmeldung, die nur einen Fingertipp kostet.",
        },
      ],
    },
    {
      id: "ads",
      title: "Optionale Belohnungsanzeigen",
      blocks: [
        {
          type: "p",
          text: "Das Spiel enthält keine erzwungene Werbung: Nichts unterbricht eine Schlacht oder ein Menü. Der Shop bietet Belohnungsanzeigen an, die nur abgespielt werden, wenn Sie darauf tippen, im Tausch gegen Spielwährung.",
        },
        {
          type: "p",
          text: "Die Anzeigen liefert Google AdMob. Dessen Software ist Teil des Spiels, startet mit ihm und lädt im Hintergrund eine Anzeige, damit eine bereitsteht, falls Sie tippen. In diesem Moment erhält AdMob, ob Sie je eine Anzeige ansehen oder nicht, Ihre Werbe-ID und einen groben, aus Ihrer IP-Adresse abgeleiteten Standort; wenn Sie eine Anzeige ansehen, zusätzlich, wie Sie damit interagiert haben. Auf iOS fragt das System beim ersten Start um Ihre Erlaubnis, bevor die Werbe-ID zum Tracking verwendet wird; auf Android können Sie die Werbe-ID in den Geräteeinstellungen zurücksetzen oder löschen. Was Google mit diesen Daten macht, beschreibt seine [Datenschutzerklärung](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "Ihre Einwilligung, erteilt über die Berechtigungs- und Werbeeinstellungen Ihres Geräts, die Sie dort jederzeit widerrufen können.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analyse",
      blocks: [
        {
          type: "p",
          text: "Um zu verstehen, wie das Spiel gespielt wird, und um Probleme zu finden, sendet das Spiel Ereignisse an unsere eigenen Server: Beginn und Ende einer Sitzung, gespielte und beendete Schlachten, Tutorial-Fortschritt, Käufe im Shop, geöffnete Benachrichtigungen, Fehler und auf Android die Store-Verweisquelle, über die Sie zum Spiel gekommen sind. Jedes Ereignis enthält Ihre Kontokennung, Gerätekennung, Plattform, Ihr Telefonmodell und die Spielversion. Wir nutzen weder Google Analytics noch Firebase Analytics noch einen anderen Analysedienst Dritter. Absturzberichte erreichen uns über Google Play und den App Store nach deren eigenen Richtlinien.",
        },
        {
          type: "p",
          text: "Analyse-Ereignisse werden 400 Tage aufbewahrt. Daraus abgeleitete Statistiken enthalten keine personenbezogenen Daten und werden unbegrenzt aufbewahrt.",
        },
        {
          type: "basis",
          text: "unser berechtigtes Interesse, das Spiel zu verbessern und störungsfrei zu betreiben.",
        },
      ],
    },
    {
      id: "support",
      title: "Support und Community",
      blocks: [
        {
          type: "p",
          text: "Wenn Sie uns eine E-Mail schreiben, bewahren wir den Schriftwechsel so lange auf, wie die Bearbeitung dauert.",
        },
        {
          type: "p",
          text: "Unser Discord-Server läuft auf Discord gemäß der [Datenschutzerklärung von Discord](https://discord.com/privacy). Moderatoren dort können den Chatverlauf im Spiel einsehen, um Meldungen zu bearbeiten, wie unter „Chat und Moderation“ beschrieben.",
        },
        {
          type: "basis",
          text: "Erfüllung unseres Vertrags mit Ihnen (Support) und unser berechtigtes Interesse, eine Community rund um das Spiel zu betreiben.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Mit wem wir Daten teilen",
      blocks: [
        {
          type: "p",
          text: "Wir verkaufen keine personenbezogenen Daten und geben sie nicht an Datenhändler weiter. Die folgenden Unternehmen verarbeiten Daten in unserem Auftrag oder erhalten sie, weil das Spiel so funktioniert:",
        },
        {
          type: "table",
          head: ["Anbieter", "Wofür", "Wo"],
          rows: [
            ["DigitalOcean", "Hosting unserer Spielserver und Datenbank", "Frankfurt am Main, Deutschland"],
            [
              "Gcore",
              "Content Delivery Network, das einen Teil des Spielverkehrs zu unseren Servern leitet; es sieht Ihre IP-Adresse bei der Übertragung",
              "Edge-Server weltweit; das Unternehmen hat seinen Sitz in Luxemburg",
            ],
            [
              "Google Cloud Storage",
              "Archiv abgelaufener Einträge (siehe „Wie lange wir Daten aufbewahren“)",
              "Frankfurt am Main, Deutschland",
            ],
            [
              "Google (Gemini API)",
              "Einstufung von Benutzernamen und, wenn eingeschaltet, von Chatnachrichten",
              "Weltweit: Google legt sich für diese API auf keine Region fest",
            ],
            ["Google AdMob", "Belohnungsanzeigen, die Sie ansehen können, wenn Sie möchten", "Vereinigte Staaten"],
            ["Google Firebase Cloud Messaging", "Zustellung von Push-Benachrichtigungen auf Android", "Vereinigte Staaten"],
            ["Apple Push Notification Service", "Zustellung von Push-Benachrichtigungen auf iOS", "Vereinigte Staaten"],
            ["Zoho Mail", "Unsere E-Mail, einschließlich E-Mails zum Zurücksetzen des Passworts", "Europäische Union"],
            [
              "Google Play und App Store",
              "Anmeldung, Zahlungen, Abonnements und Absturzberichte",
              "Nach deren eigenen Richtlinien",
            ],
          ],
        },
        {
          type: "p",
          text: "Jeder dieser Anbieter ist vertraglich verpflichtet, Ihre Daten mindestens so gut zu schützen, wie diese Erklärung es beschreibt, und sie nur für den genannten Zweck zu verwenden. Andere Spieler sehen Ihren Benutzernamen, Ihr Profil im Spiel und was Sie im Chat schreiben. An Behörden geben wir Daten nur weiter, wenn das Gesetz es verlangt.",
        },
      ],
    },
    {
      id: "storage",
      title: "Wo Ihre Daten gespeichert werden",
      blocks: [
        {
          type: "p",
          text: "Unsere Server, unsere Datenbank und unsere Sicherungen werden in Frankfurt am Main gehostet, und unser Archiv abgelaufener Einträge liegt in einem Google-Cloud-Storage-Bucket in derselben Stadt. Ihre Daten bleiben in der Europäischen Union, außer wo ein oben genannter Anbieter sie in den Vereinigten Staaten verarbeitet oder, bei der Gemini API, wo immer Google sie betreibt. Für diese Übermittlungen stützen wir uns auf die Standardvertragsklauseln der Europäischen Kommission und, wo der Anbieter zertifiziert ist, auf den EU-US-Datenschutzrahmen (Data Privacy Framework).",
        },
      ],
    },
    {
      id: "retention",
      title: "Wie lange wir Daten aufbewahren",
      blocks: [
        {
          type: "table",
          head: ["Daten", "Aufbewahrt"],
          rows: [
            ["Konto, Fortschritt, Inventar, Freunde, Kaufbestätigungen", "Bis Sie Ihr Konto löschen"],
            [
              "Verlauf von Chat-Verstößen und Chat-Sperren, Verlauf von Strafen wegen Absprachen",
              "Lebensdauer des Kontos (die Sperren selbst sind vorübergehend)",
            ],
            ["Gerätesperren", "Bis wir sie aufheben"],
            ["Analyse-Ereignisse", "400 Tage, danach archiviert"],
            ["Chat außer Schlacht-Chat, einschließlich Direktnachrichten", "90 Tage, danach archiviert"],
            [
              "Verlauf von Münz- und XP-Transaktionen",
              "90 Tage (XP-Verlauf: 90 Tage nach Ihrer letzten Aktivität), danach archiviert",
            ],
            ["Erststart-Eintrag mit IP-Adresse und Telefonmodell", "90 Tage, danach archiviert"],
            [
              "Teilnehmereinträge je Partie mit IP-Adresse und Gerätekennung",
              "30 Tage, danach archiviert",
            ],
            ["Zugestellte Benachrichtigungen, Tagesfortschritt", "30 Tage, danach archiviert"],
            ["Schlacht-Chat", "15 Tage, danach gelöscht"],
            ["Wiederholungen von Schlachten", "7 Tage, danach archiviert"],
            ["Ereignisse beim Stöbern im Shop", "3 Tage, danach gelöscht"],
          ],
        },
        {
          type: "p",
          text: "Zeilen mit dem Vermerk „danach archiviert“ werden in ein Archiv in Frankfurt kopiert, bevor sie die Live-Datenbank verlassen. Wir nutzen das Archiv für Statistiken und zur Untersuchung früheren Missbrauchs; der Zugriff ist auf die beiden Entwickler beschränkt, und nichts darin ist aus dem Spiel heraus erreichbar. Wir bewahren archivierte Einträge so lange auf, wie sie für diese Zwecke gebraucht werden, und löschen sie, wenn das nicht mehr der Fall ist.",
        },
        {
          type: "p",
          text: "Wenn Sie Ihr Konto löschen, löschen wir Ihre personenbezogenen Daten innerhalb von 30 Tagen aus den Live-Systemen. Wir behalten Unterlagen, die wir gesetzlich aufbewahren müssen, etwa Kaufbelege für die Buchhaltung, sowie Statistiken, die Sie nicht mehr identifizieren.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Unsere Rechtsgrundlagen im Überblick",
      blocks: [
        {
          type: "p",
          text: "Nach der DSGVO brauchen wir für alles, was wir mit Ihren Daten tun, eine Rechtsgrundlage. Unsere sind:",
        },
        {
          type: "ul",
          items: [
            "**Vertrag**: Führung Ihres Kontos, Betrieb des Spiels, Ihre Käufe und der Support. Ohne diese Daten gibt es kein Spiel.",
            "**Berechtigtes Interesse**: Verhinderung von Betrug und Missbrauch, Moderation des Chats, Sicherheit des Dienstes, Verständnis dafür, wie das Spiel gespielt wird, und Informationen über Ihr Konto. Unser Interesse ist ein faires, sicheres, funktionierendes Spiel; wir halten die Daten knapp und kurzlebig, und Sie können jederzeit widersprechen.",
            "**Einwilligung**: personalisierte Werbung in Belohnungsanzeigen, erteilt über die Einstellungen Ihres Geräts und dort widerrufbar.",
            "**Gesetzliche Pflicht**: Aufbewahrung von Buchhaltungsunterlagen und Beantwortung rechtmäßiger Anfragen von Behörden.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Ihre Rechte",
      blocks: [
        { type: "p", text: "Sie haben das Recht:" },
        {
          type: "ul",
          items: [
            "auf **Auskunft** über die personenbezogenen Daten, die wir über Sie gespeichert haben, und auf eine Kopie davon;",
            "auf **Berichtigung** falscher Daten;",
            "auf **Löschung** Ihres Kontos und Ihrer Daten;",
            "auf **Erhalt** Ihrer Daten in einem übertragbaren, maschinenlesbaren Format;",
            "auf **Widerspruch** gegen eine Verarbeitung auf Grundlage unserer berechtigten Interessen und auf **Einschränkung** der Verarbeitung, während wir den Fall prüfen;",
            "auf **Widerruf Ihrer Einwilligung** in die Werbung, jederzeit in den Einstellungen Ihres Geräts, sowie darauf, Benachrichtigungen auf demselben Weg abzuschalten.",
          ],
        },
        {
          type: "p",
          text: "Um ein Recht auszuüben, schreiben Sie an [contact@geofastgames.com](mailto:contact@geofastgames.com) von der mit Ihrem Konto verknüpften Adresse, oder nennen Sie uns, falls Ihr Konto keine E-Mail-Adresse hat, Ihren Benutzernamen; wir bestätigen dann über das Spiel, dass es Sie sind. Löschanfragen können Sie auch über unsere [Seite zur Datenlöschung](/datadeletion) beginnen. Wir antworten innerhalb eines Monats.",
        },
        {
          type: "p",
          text: "Wenn Sie meinen, dass wir Ihre Daten rechtswidrig verarbeiten, können Sie sich bei der belgischen Datenschutzbehörde (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Brüssel, [dataprotectionauthority.be](https://www.dataprotectionauthority.be), oder bei der Behörde des Landes beschweren, in dem Sie leben.",
        },
      ],
    },
    {
      id: "children",
      title: "Kinder",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* richtet sich nicht an Kinder unter 13 Jahren, und wir erheben wissentlich keine personenbezogenen Daten von ihnen. In Belgien ist 13 das Alter, ab dem man selbst in Online-Dienste einwilligen kann. Das Spiel trägt in jedem Store eine Altersfreigabe, die seinen Online-Chat und die optionalen Käufe widerspiegelt; Eltern können über die Jugendschutzeinstellungen von Google Play und dem App Store Käufe einschränken und festlegen, welche Apps ein Kind installieren darf.",
        },
        {
          type: "p",
          text: "Wenn Sie glauben, dass ein Kind unter 13 Jahren ein Konto hat, schreiben Sie uns eine E-Mail, und wir löschen es.",
        },
      ],
    },
    {
      id: "security",
      title: "Sicherheit",
      blocks: [
        {
          type: "p",
          text: "Der gesamte Datenverkehr zwischen dem Spiel, dieser Website und unseren Servern ist verschlüsselt (TLS). Passwörter werden gehasht. Die Datenbank ist aus dem Internet nicht erreichbar. Der Zugriff auf Server und Daten ist auf die beiden Entwickler beschränkt; Moderatoren sehen den Chatverlauf nur über ein Werkzeug, das jeden Zugriff protokolliert. Kein System ist vollkommen sicher; sollten wir je von einer Verletzung erfahren, die Ihre Daten betrifft, informieren wir Sie und die Behörde, wie das Gesetz es verlangt.",
        },
      ],
    },
    {
      id: "website",
      title: "Diese Website",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com setzt keine Cookies und verwendet keine Tracking- oder Analyseskripte. Drei Dinge verlassen Ihren Browser bei einem Besuch: Die Schrift der Seite wird von Google Fonts geladen, sodass Google Ihre IP-Adresse sieht; die Mitgliederzahl unseres Discord-Servers wird über die öffentliche API von Discord abgerufen; und die Live-Statistiken kommen von unserem eigenen Server. Links zu den App Stores tragen eine Kampagnenkennung, damit wir sehen, dass ein Download von dieser Website kam; sie identifiziert die Website, nicht Sie.",
        },
        {
          type: "p",
          text: "Wenn Sie uns über ein Formular auf dieser Website einen Vorschlag, einen Fehlerbericht, einen Hinweis zu einer Übersetzung oder eine Meldung über einen Spieler schicken, speichern wir Ihre Eingaben, die von Ihnen angehängten Screenshots, den Zeitpunkt, die Sprache Ihres Browsers und eine gehashte Form Ihrer IP-Adresse auf unserem eigenen Server in der EU. Wir verwenden diese Daten, um Ihre Nachricht zu lesen und zu bearbeiten und um Missbrauch der Formulare zu begrenzen. Ihr Benutzername und Ihre E-Mail-Adresse sind freiwillig; geben Sie sie nur an, wenn Sie möchten, dass wir Ihnen antworten können. Formulareinsendungen werden nach zwölf Monaten gelöscht.",
        },
      ],
    },
    {
      id: "changes",
      title: "Änderungen dieser Erklärung",
      blocks: [
        {
          type: "p",
          text: "Wenn wir ändern, wie wir mit Daten umgehen, aktualisieren wir diese Seite und ihr Datum, und über wesentliche Änderungen informieren wir Sie im Spiel.",
        },
      ],
    },
  ],
};
