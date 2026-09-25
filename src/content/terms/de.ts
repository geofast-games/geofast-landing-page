import type { TermsContent } from "./types";

// German. Formal "Sie" throughout, as in the German privacy policy and as is
// standard for legal texts in German. The document is called
// "Nutzungsbedingungen", the term the privacy policy links to; the privacy
// policy is "Datenschutzerklärung", as it names itself. Legal vocabulary
// follows the German text of the Consumer Rights Directive and the Digital
// Content Directive: "Widerrufsrecht", "vertragsgemäß", "zwingendes
// Verbraucherschutzrecht", "grobe Fahrlässigkeit", "Haftung", "Gerichtsstand".
// Game terms follow the game's German translation: "Schlacht" for battle,
// "Nation", "Chat", "Münzen", "Diamanten", "Sterne", "Saison", "Ranglisten",
// "Waffen", "Skins", "Empfehlungscode"; "Battle Pass" stays untranslated, as
// in the game. As in the privacy policy, cheating is "Betrug", collusion
// "Absprachen", a mute a "Chat-Sperre", a ban a "Sperre".
export const de: TermsContent = {
  lang: "de",
  label: "Deutsch",
  pageTitle: "Nutzungsbedingungen | Geofast: Battle of Nations",
  metaDescription:
    "Die Regeln für das Spielen von Geofast: Battle of Nations: Konto, Verhalten, Moderation und Einspruch, Käufe und Battle Pass, Änderungen und Ihre Rechte.",
  gameName: "Geofast: Battle of Nations",
  docName: "Nutzungsbedingungen",
  lastUpdated: "Zuletzt aktualisiert: 25. September 2026",
  sectionsLabel: "Abschnitte",
  languageLabel: "Sprache",
  contact: {
    line: "Fragen? Fragen Sie auf Discord. Anliegen zu Ihren Daten: schreiben Sie uns eine E-Mail.",
    discord: "Auf Discord fragen",
    back: "Zurück zu Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Wer wir sind und was diese Nutzungsbedingungen regeln",
      blocks: [
        {
          type: "p",
          text: "Diese Nutzungsbedingungen sind der Vertrag zwischen Ihnen und Geofast Games, einem unabhängigen Spielestudio mit Sitz in Belgien, für *Geofast: Battle of Nations* (das Spiel) und die Website geofastgames.com. Sie erreichen uns unter [contact@geofastgames.com](mailto:contact@geofastgames.com).",
        },
        {
          type: "p",
          text: "Indem Sie ein Konto anlegen oder spielen, nehmen Sie diese Nutzungsbedingungen an. Wenn Sie nicht mit ihnen einverstanden sind, spielen Sie nicht. Unsere [Datenschutzerklärung](/privacy) erklärt, was wir mit Ihren Daten tun; sie ist ein eigenes Dokument und gilt neben diesen Nutzungsbedingungen.",
        },
        {
          type: "p",
          text: "Auf iOS wird Ihnen die App unter dem Standard-Endnutzer-Lizenzvertrag von Apple lizenziert, der Ihre Nutzung der App selbst regelt. Diese Nutzungsbedingungen regeln den Spieldienst, Ihr Konto und wie Sie mit anderen spielen. Wo sich beide überschneiden, gilt der Vertrag von Apple für die App-Lizenz und diese Nutzungsbedingungen für alles Übrige.",
        },
        {
          type: "p",
          text: "Diese Nutzungsbedingungen sind auf Englisch verfasst. Übersetzungen dienen der Verständlichkeit; weicht eine Übersetzung vom englischen Text ab, gilt der englische Text.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Wer spielen darf",
      blocks: [
        {
          type: "p",
          text: "Sie müssen mindestens 13 Jahre alt sein, um zu spielen. Wenn Sie unter 18 sind, brauchen Sie die Erlaubnis eines Elternteils oder Erziehungsberechtigten, um zu spielen und um Käufe zu tätigen, und indem Sie spielen, bestätigen Sie, dass Sie sie haben. Eltern und Erziehungsberechtigte sind dafür verantwortlich, was Minderjährige in ihrer Obhut im Spiel tun, und für Käufe über ihr Store-Konto. Die Jugendschutzeinstellungen von Google Play und dem App Store können Käufe und Downloads einschränken.",
        },
        {
          type: "p",
          text: "Die Altersfreigaben des Spiels in den Stores berücksichtigen, dass es einen Chat zwischen Spielern und optionale Käufe enthält.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Ihr Konto",
      blocks: [
        {
          type: "p",
          text: "Wenn Sie zum ersten Mal online spielen, legt das Spiel ein Konto an, das mit Ihrem Gerät verknüpft ist. Sie können eine E-Mail-Adresse mit Passwort oder eine Anmeldung über Google oder Apple verknüpfen, um Ihren Fortschritt geräteübergreifend zu behalten. Geben Sie Ihre Zugangsdaten nicht weiter: Für alles, was über Ihr Konto geschieht, sind Sie verantwortlich, und Sie sollten uns sofort informieren, wenn Sie glauben, dass jemand anderes es nutzt.",
        },
        {
          type: "p",
          text: "Mit einem Konto kann nur ein Gerät gleichzeitig verbunden sein. Die Verbindung von einem neuen Gerät trennt das vorherige.",
        },
        {
          type: "p",
          text: "Wenn Sie Ihr Gerät verlieren oder zurücksetzen, ohne eine E-Mail-Adresse oder eine Anmeldung über Google oder Apple verknüpft zu haben, können wir nicht bestätigen, dass das Konto Ihnen gehört, und es kann nicht wiederhergestellt werden. Verknüpfen Sie Ihr Konto, wenn Ihnen Ihr Fortschritt wichtig ist.",
        },
        {
          type: "p",
          text: "Ein Konto mit einer anderen Person zu teilen ist nicht erlaubt, weil es in Ranglisten und Wertungen einen unfairen Vorteil verschafft. Mehr als ein Konto zu haben ist erlaubt, solange keines davon genutzt wird, um sich einen unfairen Vorteil zu verschaffen, Partien zu manipulieren oder eine Sanktion gegen ein anderes Konto zu umgehen. Konten und ihr Inhalt können nicht verkauft, gekauft, getauscht oder verschenkt werden.",
        },
        {
          type: "p",
          text: "Ihr Benutzername ist für alle sichtbar. Er darf nicht anstößig oder irreführend sein und niemanden nachahmen, auch nicht unsere Mitarbeiter. Sie können ihn einmal im Spiel ändern, gegen die dort angezeigte Gebühr. Einen Benutzernamen, der gegen diese Regeln verstößt, können wir ändern.",
        },
        {
          type: "p",
          text: "Wir löschen inaktive Konten nicht. Sie können Ihr Konto jederzeit im Spiel über Ihr Profil oder über unsere [Seite zur Datenlöschung](/datadeletion) löschen. Die Löschung ist endgültig und umfasst Ihren Fortschritt, Ihre virtuellen Währungen und Gegenstände.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. Ihre Lizenz zum Spielen",
      blocks: [
        {
          type: "p",
          text: "Wir gewähren Ihnen eine persönliche, nicht ausschließliche, nicht übertragbare Lizenz, das Spiel auf Geräten, die Ihnen gehören oder die Sie kontrollieren, zu Ihrer eigenen Unterhaltung zu installieren und zu spielen. Das Spiel, seine Grafiken, Töne, Texte, sein Code und sein Design gehören Geofast Games oder unseren Lizenzgebern und sind durch das Recht des geistigen Eigentums geschützt. Sie dürfen keinen Teil des Spiels kopieren, verändern, verbreiten, verkaufen oder vermieten und es nicht zurückentwickeln, außer wo das Gesetz es ausdrücklich erlaubt.",
        },
        {
          type: "p",
          text: "Das Spiel läuft auf den in den Stores angegebenen Android- und iOS-Versionen. Online zu spielen erfordert eine einigermaßen aktuelle Version des Spiels: Wir veröffentlichen Updates über die Stores, und eine veraltete Version kann den Zugang zu Online-Funktionen verlieren, bis sie aktualisiert wird.",
        },
        {
          type: "p",
          text: "Sie dürfen Videos und Screenshots Ihres Spiels aufnehmen, streamen und veröffentlichen, auch auf Plattformen, auf denen Sie mit Werbung oder Mitgliedschaften Geld verdienen. Stellen Sie Ihre Inhalte nicht als von uns erstellt oder unterstützt dar, verkaufen Sie keine Fanartikel mit unseren Grafiken und zeigen Sie keine Cheats oder Exploits. Wir können Sie auffordern, Inhalte zu entfernen, die gegen diese Regeln oder das Gesetz verstoßen.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Verhaltensregeln",
      blocks: [
        { type: "p", text: "Spielen Sie fair und behandeln Sie andere Spieler anständig. Sie dürfen nicht:" },
        {
          type: "ul",
          items: [
            "Cheats, Exploits, Bots, Automatisierung, veränderte Clients oder andere Werkzeuge verwenden, die in das Spiel oder seine Server eingreifen;",
            "Fehler ausnutzen, um sich einen Vorteil zu verschaffen, statt sie zu melden;",
            "sich mit anderen Spielern absprechen, Partien manipulieren, Siege tauschen oder auf andere Weise Wertungen, Ranglisten oder Belohnungen beeinflussen, auch mit zusätzlichen Konten;",
            "Konten teilen, verkaufen, kaufen oder übertragen oder virtuelle Gegenstände außerhalb des Spiels handeln;",
            "andere Spieler belästigen, bedrohen, beleidigen oder schikanieren oder hasserfüllte, sexuelle, gewalttätige oder anderweitig missbräuchliche Inhalte veröffentlichen;",
            "sich als andere Spieler, als unsere Mitarbeiter oder als irgendeine Person oder Organisation ausgeben;",
            "spammen, werben oder Links zu schädlichen Inhalten teilen;",
            "persönliche Daten oder Zugangsdaten anderer Spieler erfragen oder sammeln oder Ihre eigenen oder die anderer im Chat teilen;",
            "wissentlich falsche Meldungen über andere Spieler machen oder das Einspruchsverfahren missbrauchen;",
            "Wetten oder Glücksspiel auf Partien oder auf irgendetwas anderes im Spiel organisieren oder daran teilnehmen;",
            "unsere Server angreifen, ausspähen oder überlasten oder die Verbindungen anderer Spieler stören;",
            "anderen Spielern absichtlich das Spiel verderben;",
            "das Spiel für etwas Illegales verwenden.",
          ],
        },
        {
          type: "p",
          text: "Rivalität, Sticheleien und Kriegsrhetorik zwischen Nationen gehören zum Spiel. Beleidigungen echter Menschen, Hass gegen Gruppen, Drohungen und sexuelle Inhalte nicht.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Chat, Benutzernamen und von Ihnen erstellte Inhalte",
      blocks: [
        {
          type: "p",
          text: "Das Spiel hat einen Chat zwischen Spielern. Was Sie schreiben, wird an die anderen Spieler in diesem Chat zugestellt und für die in der Datenschutzerklärung genannten Zeiträume auf unseren Servern gespeichert, damit Moderatoren Meldungen prüfen können. Der Chat ist nicht privat: Andere Spieler sehen ihn, und Moderatoren können ihn lesen, wenn sie eine Meldung bearbeiten. Teilen Sie im Chat keine persönlichen Angaben.",
        },
        {
          type: "p",
          text: "Die Rechte an dem, was Sie schreiben, behalten Sie. Sie erlauben uns, es zu speichern, anzuzeigen, zu moderieren und, wo nötig, zu entfernen, um das Spiel zu betreiben. Für das, was Sie veröffentlichen, sind Sie verantwortlich. Wir entfernen Inhalte, die gegen diese Nutzungsbedingungen oder das Gesetz verstoßen.",
        },
        {
          type: "p",
          text: "Wenn Sie uns Vorschläge oder Ideen schicken, über das Spiel, unsere Website oder Discord, können wir sie frei verwenden, ohne Vergütung oder irgendeine Verpflichtung Ihnen gegenüber und ohne Sie zu nennen.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. Wie wir moderieren",
      blocks: [
        { type: "p", text: "Die Moderation verbindet automatische Werkzeuge und Menschen:" },
        {
          type: "ul",
          items: [
            "Bevor eine Nachricht zugestellt wird, prüft ein automatischer Filter auf unseren Servern sie gegen Ratenbegrenzungen, eine Wortliste und Muster für Hassrede. Eine blockierte Nachricht wird nie gesendet.",
            "Wenn wir die Funktion eingeschaltet haben, werden zugestellte Nachrichten zusätzlich von einem automatischen Dienst (Gemini von Google) eingestuft, der die Nachricht und Ihre letzten Nachrichten in diesem Chat als Kontext erhält. Benutzernamen werden auf dieselbe Weise geprüft, wenn Sie sie festlegen oder ändern. Eine als missbräuchlich eingestufte Nachricht wird gelöscht, und ein Verstoß wird in Ihrem Konto vermerkt.",
            "Menschliche Moderatoren prüfen Meldungen von Spielern und handeln nach dem, was sie finden. Ihr Zugriff auf den Chatverlauf wird protokolliert.",
          ],
        },
        {
          type: "p",
          text: "Die Folgen von Chat-Verstößen sind Verwarnungen und vorübergehende Chat-Sperren. Automatisch erkannte Verstöße führen zuerst zu einer Verwarnung und bei schneller Wiederholung zu einer kurzen Chat-Sperre. Von Moderatoren verhängte Chat-Sperren sind vorübergehend und werden mit jeder Chat-Sperre, die Sie bereits erhalten haben, länger, von Stunden bis zu Monaten. Der Vermerk Ihrer Verstöße und Chat-Sperren bleibt bei Ihrem Konto, damit wiederholtes Verhalten erkannt werden kann.",
        },
        {
          type: "p",
          text: "Wann immer wir Sie im Chat sperren, Ihre Inhalte entfernen oder Ihr Konto bestrafen, teilen wir Ihnen im Spiel mit, was getan wurde und warum, und Sie können dagegen Einspruch erheben, wie in Abschnitt 9 beschrieben.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Durchsetzung von Fairplay",
      blocks: [
        {
          type: "p",
          text: "Spielzüge in Schlachten werden auf unseren Servern geprüft, während sie geschehen, sodass ein veränderter Client den Ausgang einer Partie nicht ändern kann. Eine automatische Prüfung durchsucht regelmäßig die jüngsten Partiedaten nach Spielern, die weit häufiger in denselben Partien landen, als der Zufall erlaubt; so werden Spielmanipulation und Absprachen erkannt.",
        },
        {
          type: "p",
          text: "Betrug und Absprachen werden stufenweise bestraft. Ein Spieler wird zuerst verwarnt, einmal. Strafen werden nur verschärft, wenn es nach der Verwarnung neue Beweise gibt, und mit zeitlichem Abstand zwischen den Stufen: Zurücksetzen von Wertungen und Währungen, dann ein vollständiges Zurücksetzen des Fortschritts und schließlich eine dauerhafte Sperre des Geräts, die auch neue, von ihm erstellte Konten blockiert. Konten, die an schwerem oder wiederholtem Betrug beteiligt sind, können geschlossen werden. Bevor wir ein Zurücksetzen anwenden, speichern wir eine Momentaufnahme des Kontos, damit eine Strafe, die sich als falsch herausstellt, rückgängig gemacht werden kann. Der Vermerk der Strafen bleibt bei Ihrem Konto.",
        },
        {
          type: "p",
          text: "Jede Strafe wird von einer Mitteilung im Spiel begleitet, die angibt, was getan wurde und warum, und Sie können dagegen Einspruch erheben, wie in Abschnitt 9 beschrieben.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Meldungen und Einsprüche",
      blocks: [
        {
          type: "p",
          text: "Um einen Spieler oder Inhalte zu melden, die gegen diese Nutzungsbedingungen oder das Gesetz verstoßen, nutzen Sie die Schaltfläche „Melden“ im Spiel, das Meldeformular auf unserer [Feedback-Seite](/feedback) oder schreiben Sie an [contact@geofastgames.com](mailto:contact@geofastgames.com). Sagen Sie uns, wer, was und wo. Wir bestätigen den Eingang Ihrer Meldung und teilen Ihnen ohne unangemessene Verzögerung mit, was wir entschieden haben. Meldungen werden von Menschen bearbeitet, mit Hilfe der oben beschriebenen Werkzeuge, nach Treu und Glauben und ohne Willkür.",
        },
        {
          type: "p",
          text: "Wenn Sie eine Chat-Sperre, Strafe, Sperre oder Entfernung von Inhalten für falsch halten, erheben Sie innerhalb eines Monats per E-Mail oder auf Discord Einspruch. Eine Person, die an der ursprünglichen Entscheidung nicht beteiligt war, prüft sie, und wir antworten innerhalb von 14 Tagen. War die Entscheidung falsch, heben wir sie auf und stellen, wo möglich, wieder her, was verloren ging. Nichts hier beschränkt Ihr Recht, die Sache vor ein Gericht oder eine Verbraucherstelle zu bringen.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Virtuelle Währungen, Gegenstände und Käufe",
      blocks: [
        {
          type: "p",
          text: "Das Spiel hat virtuelle Währungen (Diamanten, Münzen und Sterne) und virtuelle Gegenstände wie Waffen, Skins, Verbesserungen und Battle-Pass-Belohnungen. Diamanten können mit echtem Geld über Google Play oder den App Store gekauft werden; Münzen und Sterne werden durch Spielen verdient oder im Spiel getauscht. Preise werden vor dem Kauf im Store und im Spiel in Ihrer Landeswährung angezeigt.",
        },
        {
          type: "p",
          text: "Virtuelle Währungen und Gegenstände werden Ihnen zur Nutzung im Spiel lizenziert. Sie sind nicht Ihr Eigentum, haben außerhalb des Spiels keinen Wert, können nicht gegen echtes Geld, Waren oder Dienstleistungen eingetauscht und nicht auf ein anderes Konto oder eine andere Person übertragen werden.",
        },
        {
          type: "p",
          text: "Käufe werden sofort geliefert. Mit dem Kauf verlangen Sie von uns die sofortige Lieferung und erkennen an, dass das gesetzliche 14-tägige Widerrufsrecht erlischt, sobald die Lieferung begonnen hat. Im Übrigen sind Käufe endgültig, außer wo das Gesetz Ihnen ein Recht auf Rückerstattung gibt. Rückerstattungsanfragen richten Sie an den Store, in dem Sie gekauft haben und der die Zahlung abwickelt; wir sehen Ihre Zahlungsdaten nie.",
        },
        {
          type: "p",
          text: "Wir können virtuelle Währungen und Gegenstände aus berechtigten Gründen ändern, neu ausbalancieren, hinzufügen oder abschaffen: um das Spiel ausgewogen und unterhaltsam zu halten, um Fehler zu beheben, aus Sicherheitsgründen oder wegen rechtlicher Anforderungen. Wo eine Änderung etwas, wofür Sie kürzlich bezahlt haben, erheblich beeinträchtigen würde, informieren wir Sie vorab, und wo das Gesetz Ihnen wegen einer solchen Änderung ein Recht gibt, den Vertrag zu beenden und eine Rückerstattung zu erhalten, respektieren wir es. Ihre gesetzlichen Rechte als Verbraucher, einschließlich des Rechts auf ein Spiel, das wie beschrieben funktioniert, bleiben unberührt.",
        },
        {
          type: "p",
          text: "Das Spiel enthält keine erzwungene Werbung. Wo das Spiel optionale Belohnungsanzeigen anbietet, ist es Ihre Entscheidung, eine anzusehen, und wir können dieses Angebot ändern oder entfernen.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. Der Battle Pass",
      blocks: [
        {
          type: "p",
          text: "Der Battle Pass ist ein Abonnement, das über Google Play oder den App Store gekauft wird. Es verlängert sich automatisch jeden Monat zum im Store angezeigten Preis, bis Sie kündigen. Sie können jederzeit in den Abonnementeinstellungen Ihres Stores kündigen; der Pass bleibt dann bis zum Ende des bezahlten Zeitraums aktiv, und Sie behalten die Belohnungen, die Sie eingelöst haben. Preisänderungen gelten ab der nächsten Verlängerung, und der Store informiert Sie, bevor sie wirksam werden.",
        },
        {
          type: "p",
          text: "Battle-Pass-Belohnungen werden durch Spielen während der Saison freigeschaltet; ein Pass allein gewährt nicht jede Belohnung. Rückerstattungen für Abonnements bearbeitet der Store nach seinen Regeln und dem Gesetz.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Empfehlungsbelohnungen und das Content-Creator-Programm",
      blocks: [
        {
          type: "p",
          text: "Das Spiel belohnt Sie, wenn ein neuer Spieler mit Ihrem Empfehlungscode beitritt, und belohnt ihn ebenfalls. Empfehlungsbelohnungen sind für echte neue Spieler. Sich selbst, Ihre eigenen weiteren Konten oder Konten zu empfehlen, die nur angelegt wurden, um die Belohnung abzuholen, ist nicht erlaubt, und so erlangte Belohnungen werden entfernt.",
        },
        {
          type: "p",
          text: "Unser Content-Creator-Programm belohnt Spieler, die Videos über das Spiel veröffentlichen, sobald ihre Inhalte bestimmte Aufrufzahlen erreichen. Die Schwellen, Belohnungen und Teilnahmebedingungen werden im Spiel veröffentlicht und können sich ändern. Belohnungen werden von uns von Hand geprüft und gewährt, und im Zweifel entscheiden wir. Belohnungen, die mit gefälschten Aufrufen oder mit Inhalten beansprucht werden, die gegen diese Nutzungsbedingungen verstoßen, werden verweigert oder entfernt.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Dienste Dritter",
      blocks: [
        {
          type: "p",
          text: "Das Spiel nutzt Google Play und den App Store für Downloads, Zahlungen und Abonnements; Google und Apple für die optionale Anmeldung; Google AdMob für optionale Belohnungsanzeigen; und Discord für unseren Community-Server. Ihre Nutzung dieser Dienste unterliegt deren eigenen Bedingungen und Datenschutzerklärungen, auf die wir keinen Einfluss haben.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Verfügbarkeit und Änderungen am Spiel",
      blocks: [
        {
          type: "p",
          text: "Wir arbeiten daran, das Spiel verfügbar zu halten, können aber nicht versprechen, dass es nie unterbrochen wird. Online-Funktionen können während Wartungsarbeiten, wegen technischer Probleme oder aus Gründen außerhalb unserer Kontrolle nicht verfügbar sein. Offline-Modi funktionieren auch ohne Verbindung weiter.",
        },
        {
          type: "p",
          text: "Das Spiel ist ein Live-Dienst und verändert sich mit der Zeit: Wir fügen Funktionen, Waffen, Nationen, Saisons und Events hinzu, passen sie an und entfernen sie, um das Spiel ausgewogen und frisch zu halten, um Probleme zu beheben, aus Sicherheitsgründen und um rechtliche Anforderungen zu erfüllen. Änderungen, die erheblich beeinflussen, wie Sie spielen können, werden im Spiel vorab angekündigt. Ihre gesetzlichen Rechte bleiben unberührt.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Beendigung des Vertrags",
      blocks: [
        {
          type: "p",
          text: "Sie können jederzeit aufhören zu spielen, indem Sie das Spiel deinstallieren, und Sie können Ihr Konto im Spiel über Ihr Profil oder über unsere [Seite zur Datenlöschung](/datadeletion) löschen. Das Löschen Ihres Kontos entfernt Ihren Fortschritt, Ihre virtuellen Währungen und Gegenstände endgültig; dafür wird nichts erstattet.",
        },
        {
          type: "p",
          text: "Wir können Ihr Konto sperren oder schließen, wenn Sie schwer oder wiederholt gegen diese Nutzungsbedingungen verstoßen oder wenn das Gesetz es verlangt. Außer in schweren Fällen, etwa bei Betrug, Missbrauch oder einer rechtlichen Verpflichtung, verwarnen wir Sie zuerst und geben Ihnen die Möglichkeit, sich zu äußern. Wir nennen Ihnen den Grund und den Weg zum Einspruch (Abschnitt 9). Die Schließung eines Kontos beendet Ihre Lizenz und Ihren Zugang zu seinen virtuellen Währungen und Gegenständen.",
        },
        {
          type: "p",
          text: "Sollten wir das Spiel je einstellen müssen, kündigen wir dies mindestens 30 Tage vorher im Spiel und auf unserer Website an. Virtuelle Währungen und Gegenstände enden mit dem Spiel. Ihre gesetzlichen Rechte in Bezug auf kürzliche Käufe bleiben unberührt.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. Unsere Haftung",
      blocks: [
        {
          type: "p",
          text: "Wir haften Ihnen gegenüber, wie es das Gesetz vorsieht. Wir schließen unsere Haftung nicht aus und beschränken sie nicht für Tod oder Körperverletzung infolge unserer Fahrlässigkeit, für Arglist, für vorsätzliches oder grob fahrlässiges Verhalten oder für irgendetwas anderes, das nach dem Recht, das Sie als Verbraucher schützt, nicht ausgeschlossen werden kann, einschließlich Ihres Rechts auf ein Spiel, das dem Versprochenen entspricht.",
        },
        {
          type: "p",
          text: "Darüber hinaus haften wir nur für Schäden, die bei Ihrer Annahme dieser Nutzungsbedingungen vorhersehbar waren und die aus unserem Verstoß gegen sie entstehen. Das Spiel ist kostenlos spielbar und wird als Live-Dienst bereitgestellt; wir haften nicht für Verluste durch Unterbrechungen, durch das Verhalten anderer Spieler oder durch Ereignisse außerhalb unserer zumutbaren Kontrolle, außer wo das Gesetz etwas anderes bestimmt.",
        },
        {
          type: "p",
          text: "Sie haften für Schäden, die Sie uns durch einen Verstoß gegen diese Nutzungsbedingungen zufügen, soweit das Gesetz es erlaubt.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Datenschutz",
      blocks: [
        {
          type: "p",
          text: "Wie wir Ihre Daten erheben und verwenden, beschreibt unsere [Datenschutzerklärung](/privacy). Sie ist nicht Teil dieser Nutzungsbedingungen und hängt nicht von Ihrer Zustimmung zu ihnen ab: Sie informiert Sie darüber, was wir tun und welche Rechte Sie haben.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Änderungen dieser Nutzungsbedingungen",
      blocks: [
        {
          type: "p",
          text: "Wir ändern diese Nutzungsbedingungen, wenn sich das Spiel, das Gesetz oder unsere Dienste ändern, oder um sie klarer zu machen. Bei Änderungen, die Ihre Rechte oder Ihr Spielen betreffen, kündigen wir sie mindestens 30 Tage vor ihrem Inkrafttreten im Spiel an, und Sie können bis dahin aufhören zu spielen und Ihr Konto löschen, wenn Sie nicht einverstanden sind. Klarstellungen und Korrekturen, die Sie nicht betreffen, treten mit der Veröffentlichung in Kraft. Das Datum oben zeigt Ihnen, wann die aktuelle Fassung in Kraft getreten ist.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Recht, Streitigkeiten und Beschwerden",
      blocks: [
        {
          type: "p",
          text: "Diese Nutzungsbedingungen unterliegen belgischem Recht. Wenn Sie in einem anderen Land leben, behalten Sie den Schutz des zwingenden Verbraucherrechts dieses Landes, und Sie können eine Klage vor den Gerichten Ihres Wohnorts erheben. Wir können eine Klage gegen Sie nur dort erheben.",
        },
        {
          type: "p",
          text: "Wenn Sie eine Beschwerde haben, wenden Sie sich zuerst an [contact@geofastgames.com](mailto:contact@geofastgames.com) oder an uns auf Discord; das meiste lässt sich direkt klären. Sie können sich auch an eine Verbraucherschlichtungsstelle in Ihrem Land wenden; in Belgien ist das der Verbraucherschlichtungsdienst (Consumentenombudsdienst / Service de Médiation pour le Consommateur). Diese Nutzungsbedingungen enthalten keine Schiedsklausel und keinen Verzicht auf Sammelklagen.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Schlussbestimmungen",
      blocks: [
        {
          type: "p",
          text: "Wir kontaktieren Sie über Mitteilungen im Spiel, auf unserer Website und, wenn Sie eine E-Mail-Adresse verknüpft haben, per E-Mail. Sie erreichen uns unter [contact@geofastgames.com](mailto:contact@geofastgames.com); das ist auch unsere Adresse für rechtliche Mitteilungen und unsere Kontaktstelle für Behörden.",
        },
        {
          type: "p",
          text: "Sollte ein Teil dieser Nutzungsbedingungen unwirksam sein, bleibt der Rest in Kraft. Wenn wir eine Regel einmal nicht durchsetzen, können wir sie später trotzdem durchsetzen. Wir dürfen diesen Vertrag auf ein Unternehmen übertragen, das das Spiel übernimmt, sofern Ihre Rechte dadurch nicht eingeschränkt werden; Sie dürfen Ihr Konto oder diesen Vertrag nicht übertragen. Diese Nutzungsbedingungen und die Datenschutzerklärung sind die gesamte Vereinbarung zwischen Ihnen und uns über das Spiel.",
        },
      ],
    },
  ],
};
