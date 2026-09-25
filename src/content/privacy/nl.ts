import type { PrivacyContent } from "./types";

// Dutch (Belgium). Informal "je", matching the conversational register of the
// English source and common practice in Dutch-language consumer apps and games.
// Game terms follow the game's own Dutch translation: "gevecht" for battle,
// "natie" for nation; "Battle Pass" stays untranslated, as in the game.
export const nl: PrivacyContent = {
  lang: "nl",
  label: "Nederlands",
  pageTitle: "Privacyverklaring | Geofast: Battle of Nations",
  metaDescription:
    "Welke gegevens Geofast: Battle of Nations verzamelt, hoe ze worden gebruikt, met wie ze worden gedeeld en hoe je verwijdering aanvraagt.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Privacyverklaring",
  lastUpdated: "Laatst bijgewerkt: 25 september 2026",
  sectionsLabel: "Onderdelen",
  languageLabel: "Taal",
  legalBasisLabel: "Rechtsgrond:",
  contact: {
    line: "Vragen? Stel ze op Discord. Verzoeken over je gegevens: mail ons.",
    discord: "Vraag het op Discord",
    back: "Terug naar Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Wie we zijn",
      blocks: [
        {
          type: "p",
          text: "Geofast Games is een onafhankelijke gamestudio gevestigd in België. Wij maken *Geofast: Battle of Nations* en beheren deze website. Wij zijn de verwerkingsverantwoordelijke voor de persoonsgegevens die in deze verklaring worden beschreven: wij bepalen wat er wordt verzameld en waarom.",
        },
        {
          type: "p",
          text: "Je bereikt ons via [contact@geofastgames.com](mailto:contact@geofastgames.com). We zijn een studio van twee personen en hebben geen functionaris voor gegevensbescherming aangesteld; via hetzelfde adres bereik je de mensen die verantwoordelijk zijn voor je gegevens.",
        },
        {
          type: "p",
          text: "Deze verklaring geldt voor de game op iOS en Android en voor de website geofastgames.com. Ze geldt niet voor Discord, de App Store, Google Play of andere diensten die je naast de game gebruikt; die hebben hun eigen beleid, waarnaar we linken waar het ter sprake komt.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "In een oogopslag",
      blocks: [
        {
          type: "table",
          head: ["Wat", "Waarom", "Hoe lang"],
          rows: [
            [
              "Account: een apparaat-ID, je gebruikersnaam en, als je dat kiest, een e-mailadres met wachtwoord of een aanmelding via Google of Apple",
              "Om je account te beheren en je online te laten spelen",
              "Tot je je account verwijdert; inactieve accounts verwijderen we niet",
            ],
            [
              "Spel: gevechten, ranglijsten, items, aankoopbevestigingen",
              "Om de game, de ranglijsten en je inventaris te laten werken",
              "Tot je je account verwijdert; herhalingen van gevechten 7 dagen, daarna gearchiveerd",
            ],
            [
              "Chatberichten",
              "Om ze te bezorgen en misbruik te modereren",
              "Gevechtschat 15 dagen, daarna verwijderd; andere chat 90 dagen, daarna gearchiveerd",
            ],
            [
              "IP-adres, apparaat-ID, telefoonmodel",
              "Om valsspelen en samenspel op te sporen en bans af te dwingen",
              "Gevechtsrecords 30 dagen en record van de eerste start 90 dagen, daarna gearchiveerd; de apparaat-ID blijft bij je account; een banrecord blijft tot we de ban opheffen",
            ],
            [
              "Pushmeldingstoken",
              "Om meldingen te sturen die je kunt uitschakelen",
              "Tot het token niet meer werkt (bijvoorbeeld na het verwijderen van de app) of je je account verwijdert",
            ],
            [
              "Analysegebeurtenissen over hoe je speelt",
              "Om speelpatronen te begrijpen en problemen op te lossen",
              "400 dagen, daarna gearchiveerd",
            ],
            [
              "Advertentie-ID, uitgelezen door de software van Google AdMob",
              "Om beloningsadvertenties te laden en te tonen die je kunt kiezen te bekijken",
              "Naar Google gestuurd bij het starten van de game en bij het laden van een advertentie; wij slaan ze niet op; het beleid van AdMob geldt",
            ],
          ],
        },
        { type: "lead", text: "Vier dingen die je moet weten voordat je verder leest" },
        {
          type: "ul",
          items: [
            "Chat is niet privé. Berichten worden tot 15 dagen (gevechtschat) of 90 dagen (andere chat) bewaard zodat moderators meldingen kunnen bekijken; elk bericht gaat door een automatisch filter, en wanneer we die functie inschakelen, worden berichten ook geclassificeerd door de Gemini-dienst van Google.",
            "We registreren je IP-adres en een apparaat-ID wanneer je speelt, om valsspelen op te sporen en bans te laten standhouden.",
            "Onze servers staan in Frankfurt, Duitsland. Enkele leveranciers die we gebruiken (Google, Apple) verwerken gegevens buiten de Europese Unie.",
            "Records die uit onze live database verlopen (chat behalve gevechtschat, gevechtsrecords, analysegegevens en meer) worden in Frankfurt gearchiveerd in plaats van vernietigd. Zie 'Hoe lang we gegevens bewaren'.",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Je account",
      blocks: [
        {
          type: "p",
          text: "Wanneer je voor het eerst online speelt, maken we een account voor je aan en koppelen we het aan een ID die op je apparaat wordt aangemaakt. Meer is er niet nodig om te spelen, en je hoeft ons nooit je naam te geven.",
        },
        {
          type: "p",
          text: "Je kiest een gebruikersnaam, die andere spelers kunnen zien. Daarnaast slaan we op wat de game nodig heeft om voor jou te werken: je voortgang, je instellingen en vrienden, en de versie van de game die je gebruikt.",
        },
        {
          type: "p",
          text: "Wil je je voortgang op meerdere apparaten behouden, dan kun je een e-mailadres met wachtwoord toevoegen of je aanmelden met Google of Apple. Wachtwoorden worden gehasht opgeslagen, wat betekent dat wij ze niet kunnen lezen. Van Google of Apple ontvangen we alleen wat nodig is om het account te koppelen, en je e-mailadres gebruiken we alleen om het account te beveiligen en het wachtwoord te resetten.",
        },
        {
          type: "p",
          text: "De apparaat-ID is vereist om online te spelen. Alles daarbuiten is optioneel.",
        },
        { type: "basis", text: "uitvoering van onze overeenkomst met jou (het aanbieden van de game)." },
      ],
    },
    {
      id: "gameplay",
      title: "Spel, voortgang en aankopen",
      blocks: [
        {
          type: "p",
          text: "Om onlinegevechten, ranglijsten en je inventaris te laten werken, slaan we je spelvoortgang op: gevechtsresultaten, ranglijstposities, de items en valuta die je bezit, en je voortgang in events en seizoenen. Je recente gevechten worden bewaard als geschiedenis; herhalingen van gevechten verlaten de live database na 7 dagen en worden gearchiveerd.",
        },
        {
          type: "p",
          text: "Betalingen worden volledig afgehandeld door Google Play of de App Store. Wij zien je kaart- of bankgegevens nooit. De store laat ons weten wat je hebt gekocht, en we slaan die bevestiging op en, voor de Battle Pass, de status van het abonnement, zodat we items kunnen leveren, aankopen kunnen herstellen en je kunnen helpen bij vragen.",
        },
        {
          type: "basis",
          text: "uitvoering van onze overeenkomst met jou. Aankoopgegevens die we voor de boekhouding moeten bewaren, bewaren we op grond van onze wettelijke verplichtingen.",
        },
      ],
    },
    {
      id: "chat",
      title: "Chat en moderatie",
      blocks: [
        {
          type: "p",
          text: "De game heeft chat tussen spelers. Berichten worden bezorgd bij de andere spelers in die chat en opgeslagen op onze servers: chat binnen een gevecht 15 dagen, waarna hij wordt verwijderd; alle andere chat 90 dagen, waarna hij wordt gearchiveerd (zie 'Hoe lang we gegevens bewaren'). We bewaren ze zodat moderators meldingen van misbruik of valsspelen kunnen onderzoeken. Elke raadpleging door een moderator wordt gelogd.",
        },
        {
          type: "p",
          text: "Moderatie werkt in drie stappen. Ten eerste gaat elk bericht vóór bezorging door een automatisch filter op onze servers (snelheidslimieten, een woordenlijst en patronen van haatspraak); een geblokkeerd bericht wordt nooit verstuurd. Ten tweede worden bezorgde berichten, wanneer we die functie inschakelen, ook geclassificeerd door de Gemini-dienst van Google, die het bericht en je recente berichten in die chat als context ontvangt. Gebruikersnamen worden door Gemini gecontroleerd wanneer je ze instelt of wijzigt. Een bericht dat Gemini als beledigend classificeert, wordt verwijderd en er wordt een overtreding geregistreerd. Ten derde handelen menselijke moderators meldingen af.",
        },
        {
          type: "p",
          text: "Overtredingen leiden tot waarschuwingen en tijdelijke chatblokkeringen, zoals beschreven in onze [gebruiksvoorwaarden](/termsofservice). Het record van je overtredingen en blokkeringen blijft bij je account zodat herhaald gedrag herkend kan worden. Deze automatische stappen raken alleen je mogelijkheid om te chatten. Vind je dat een beslissing onterecht was, mail ons dan of vraag het op Discord; een mens bekijkt het dan.",
        },
        {
          type: "p",
          text: "Deel geen persoonlijke gegevens in de chat. Andere spelers kunnen zien wat je schrijft.",
        },
        {
          type: "basis",
          text: "ons gerechtvaardigd belang om de game veilig en eerlijk te houden voor iedereen die hem speelt.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Fair play en beveiliging",
      blocks: [
        {
          type: "p",
          text: "Valsspelen verpest een competitieve game voor iedereen. Daarom bewaren we een kleine hoeveelheid technische gegevens om het op te sporen en bans te laten standhouden:",
        },
        {
          type: "ul",
          items: [
            "Bij de eerste start van de game registreren we je apparaat-ID, telefoonmodel, platform en IP-adres, samen met de stappen van de tutorial die je voltooit. Dit record verlaat de live database na 90 dagen en wordt gearchiveerd.",
            "Van elk onlinegevecht registreren we welke accounts meededen, met hun apparaat-ID en IP-adres. Een automatische controle doorzoekt regelmatig recente records op paren spelers die veel vaker in dezelfde gevechten terechtkomen dan het toeval toelaat. Gevechtsrecords verlaten de live database na 30 dagen en worden gearchiveerd.",
            "Vastgesteld valsspelen leidt tot straffen, tot en met een ban, zoals beschreven in onze [gebruiksvoorwaarden](/termsofservice). De strafgeschiedenis blijft bij je account, en je kunt elke straf door een mens laten beoordelen.",
            "Een apparaatban blokkeert ook nieuwe accounts vanaf dat apparaat. Banrecords hebben geen einddatum; we verwijderen ze wanneer een beoordeling aantoont dat de ban onterecht was.",
          ],
        },
        {
          type: "p",
          text: "Acties in een gevecht worden op onze servers gecontroleerd terwijl ze gebeuren; daar zijn geen gegevens buiten het gevecht zelf voor nodig. We gebruiken je IP-adres niet om je locatie te bepalen. Wanneer je voor het eerst deelneemt, stelt de game een natie voor op basis van de taal- en regio-instelling van je apparaat; dat uitlezen gebeurt op het apparaat, en je kunt in plaats daarvan elke natie kiezen.",
        },
        {
          type: "basis",
          text: "ons gerechtvaardigd belang om valsspelen, fraude en misbruik te voorkomen en de dienst veilig te houden.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Pushmeldingen",
      blocks: [
        {
          type: "p",
          text: "Als je meldingen toestaat, geeft je apparaat ons een pushtoken, dat we opslaan en gebruiken om je te informeren over gebeurtenissen in de game: dingen die je account, je vrienden en je natie aangaan, nieuwe events en seizoenen, en een herinnering als je een tijdje niet hebt gespeeld.",
        },
        {
          type: "p",
          text: "Meldingen worden bezorgd via Firebase Cloud Messaging (Google) op Android en de Apple Push Notification service op iOS. Je kunt ze op elk moment uitschakelen in de instellingen van je apparaat; dan worden ze niet meer getoond. Het token zelf blijft bewaard tot het ongeldig wordt (bijvoorbeeld wanneer je de game verwijdert) of je je account verwijdert. Bezorgde meldingen bewaren we 30 dagen, daarna worden ze gearchiveerd.",
        },
        {
          type: "basis",
          text: "ons gerechtvaardigd belang om je op de hoogte te houden van je account en de game die je speelt, met een afmelding die één tik kost.",
        },
      ],
    },
    {
      id: "ads",
      title: "Optionele beloningsadvertenties",
      blocks: [
        {
          type: "p",
          text: "De game heeft geen gedwongen advertenties: niets onderbreekt een gevecht of een menu. De shop biedt beloningsadvertenties aan die alleen afspelen wanneer je erop tikt, in ruil voor spelvaluta.",
        },
        {
          type: "p",
          text: "Advertenties worden geleverd door Google AdMob. De software daarvan maakt deel uit van de game, start ermee op en laadt op de achtergrond een advertentie zodat er een klaarstaat als je tikt. Op dat moment ontvangt AdMob, of je ooit een advertentie bekijkt of niet, je advertentie-ID en een globale locatie afgeleid van je IP-adres; bekijk je er een, dan ook hoe je ermee omging. Op iOS vraagt het systeem bij de eerste start je toestemming voordat de advertentie-ID voor tracking wordt gebruikt; op Android kun je de advertentie-ID resetten of verwijderen in de instellingen van je apparaat. Wat Google met deze gegevens doet, staat in zijn [privacybeleid](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "je toestemming, gegeven via de toestemmings- en advertentie-instellingen van je apparaat, die je daar op elk moment kunt intrekken.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analyse",
      blocks: [
        {
          type: "p",
          text: "Om te begrijpen hoe de game wordt gespeeld en om problemen te vinden, stuurt de game gebeurtenissen naar onze eigen servers: begin en einde van een sessie, gespeelde en afgeronde gevechten, voortgang in de tutorial, aankopen in de shop, geopende meldingen, fouten en, op Android, de store-verwijzing waarmee je bij de game kwam. Elke gebeurtenis bevat je account-ID, apparaat-ID, platform, telefoonmodel en gameversie. We gebruiken geen Google Analytics, Firebase Analytics of een andere analysedienst van derden. Crashrapporten bereiken ons via Google Play en de App Store onder hun eigen beleid.",
        },
        {
          type: "p",
          text: "Analysegebeurtenissen worden 400 dagen bewaard. Statistieken die eruit zijn afgeleid, bevatten geen persoonsgegevens en worden onbeperkt bewaard.",
        },
        {
          type: "basis",
          text: "ons gerechtvaardigd belang om de game te verbeteren en goed te laten draaien.",
        },
      ],
    },
    {
      id: "support",
      title: "Support en community",
      blocks: [
        {
          type: "p",
          text: "Als je ons mailt, bewaren we de correspondentie zolang de afhandeling duurt.",
        },
        {
          type: "p",
          text: "Onze Discord-server draait op Discord onder het [privacybeleid van Discord](https://discord.com/privacy). Moderators daar kunnen de chatgeschiedenis in de game raadplegen om meldingen af te handelen, zoals beschreven onder 'Chat en moderatie'.",
        },
        {
          type: "basis",
          text: "uitvoering van onze overeenkomst met jou (support) en ons gerechtvaardigd belang om een community rond de game te onderhouden.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Met wie we gegevens delen",
      blocks: [
        {
          type: "p",
          text: "We verkopen geen persoonsgegevens en delen ze niet met datahandelaren. De onderstaande bedrijven verwerken gegevens in onze opdracht of ontvangen ze omdat de game zo werkt:",
        },
        {
          type: "table",
          head: ["Leverancier", "Waarvoor", "Waar"],
          rows: [
            ["DigitalOcean", "Hosting van onze gameservers en database", "Frankfurt, Duitsland"],
            [
              "Gcore",
              "Content delivery network dat een deel van het gameverkeer naar onze servers leidt; het ziet je IP-adres onderweg",
              "Edge-servers wereldwijd; het bedrijf is gevestigd in Luxemburg",
            ],
            [
              "Google Cloud Storage",
              "Archief van verlopen records (zie 'Hoe lang we gegevens bewaren')",
              "Frankfurt, Duitsland",
            ],
            [
              "Google (Gemini API)",
              "Classificatie van gebruikersnamen en, wanneer ingeschakeld, chatberichten",
              "Wereldwijd: Google legt zich voor deze API niet vast op een regio",
            ],
            ["Google AdMob", "Beloningsadvertenties die je kunt kiezen te bekijken", "Verenigde Staten"],
            ["Google Firebase Cloud Messaging", "Bezorging van pushmeldingen op Android", "Verenigde Staten"],
            ["Apple Push Notification service", "Bezorging van pushmeldingen op iOS", "Verenigde Staten"],
            ["Zoho Mail", "Onze e-mail, inclusief e-mails om je wachtwoord te resetten", "Europese Unie"],
            [
              "Google Play en de App Store",
              "Aanmelden, betalingen, abonnementen en crashrapporten",
              "Onder hun eigen beleid",
            ],
          ],
        },
        {
          type: "p",
          text: "Elk van deze leveranciers is contractueel verplicht je gegevens minstens zo goed te beschermen als deze verklaring beschrijft en ze alleen te gebruiken voor het genoemde doel. Andere spelers zien je gebruikersnaam, je profiel in de game en wat je in de chat schrijft. Aan overheden geven we gegevens alleen wanneer de wet dat vereist.",
        },
      ],
    },
    {
      id: "storage",
      title: "Waar je gegevens worden opgeslagen",
      blocks: [
        {
          type: "p",
          text: "Onze servers, database en back-ups worden gehost in Frankfurt, Duitsland, en ons archief van verlopen records staat in een Google Cloud Storage-bucket in dezelfde stad. Je gegevens blijven in de Europese Unie, behalve waar een hierboven genoemde leverancier ze in de Verenigde Staten verwerkt of, voor de Gemini API, waar Google die ook draait. Voor die doorgiften steunen we op de standaardcontractbepalingen van de Europese Commissie en, waar de leverancier gecertificeerd is, op het EU-VS-kader voor gegevensbescherming (Data Privacy Framework).",
        },
      ],
    },
    {
      id: "retention",
      title: "Hoe lang we gegevens bewaren",
      blocks: [
        {
          type: "table",
          head: ["Gegevens", "Bewaard"],
          rows: [
            ["Account, voortgang, inventaris, vrienden, aankoopbevestigingen", "Tot je je account verwijdert"],
            [
              "Geschiedenis van chatovertredingen en chatblokkeringen, geschiedenis van straffen voor samenspel",
              "Levensduur van het account (de blokkeringen zelf zijn tijdelijk)",
            ],
            ["Apparaatbans", "Tot we ze opheffen"],
            ["Analysegebeurtenissen", "400 dagen, daarna gearchiveerd"],
            ["Chat behalve gevechtschat, inclusief privéberichten", "90 dagen, daarna gearchiveerd"],
            [
              "Transactiegeschiedenis van munten en XP",
              "90 dagen (XP-geschiedenis: 90 dagen na je laatste activiteit), daarna gearchiveerd",
            ],
            ["Record van de eerste start met IP-adres en telefoonmodel", "90 dagen, daarna gearchiveerd"],
            [
              "Deelnemersrecords per gevecht met IP-adres en apparaat-ID",
              "30 dagen, daarna gearchiveerd",
            ],
            ["Bezorgde meldingen, dagelijkse voortgang", "30 dagen, daarna gearchiveerd"],
            ["Gevechtschat", "15 dagen, daarna verwijderd"],
            ["Herhalingen van gevechten", "7 dagen, daarna gearchiveerd"],
            ["Gebeurtenissen bij het bladeren in de shop", "3 dagen, daarna verwijderd"],
          ],
        },
        {
          type: "p",
          text: "Rijen met 'daarna gearchiveerd' worden gekopieerd naar een archief in Frankfurt voordat ze de live database verlaten. We gebruiken het archief voor statistieken en om misbruik uit het verleden te onderzoeken; de toegang is beperkt tot de twee ontwikkelaars, en niets erin is bereikbaar vanuit de game. We bewaren gearchiveerde records zolang ze voor die doelen nodig zijn en verwijderen ze wanneer dat niet meer zo is.",
        },
        {
          type: "p",
          text: "Wanneer je je account verwijdert, verwijderen we je persoonsgegevens binnen 30 dagen uit de live systemen. We behouden gegevens die we wettelijk moeten bewaren, zoals aankoopgegevens voor de boekhouding, en statistieken die jou niet meer identificeren.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Onze rechtsgronden op een rij",
      blocks: [
        {
          type: "p",
          text: "Onder de AVG hebben we voor alles wat we met je gegevens doen een rechtsgrond nodig. De onze zijn:",
        },
        {
          type: "ul",
          items: [
            "**Overeenkomst**: het beheren van je account, de game, je aankopen en support. Zonder deze gegevens is er geen game om te spelen.",
            "**Gerechtvaardigd belang**: het voorkomen van valsspelen en misbruik, het modereren van chat, het beveiligen van de dienst, begrijpen hoe de game wordt gespeeld en je informeren over je account. Ons belang is een eerlijke, veilige, werkende game; we houden de gegevens minimaal en kortlevend, en je kunt op elk moment bezwaar maken.",
            "**Toestemming**: gepersonaliseerde advertenties in beloningsadvertenties, gegeven via de instellingen van je apparaat en daar in te trekken.",
            "**Wettelijke verplichting**: het bewaren van boekhoudkundige gegevens en het beantwoorden van rechtmatige verzoeken van overheden.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Je rechten",
      blocks: [
        { type: "p", text: "Je hebt het recht om:" },
        {
          type: "ul",
          items: [
            "**inzage** te krijgen in de persoonsgegevens die we over je hebben en er een kopie van te ontvangen;",
            "onjuiste gegevens te laten **corrigeren**;",
            "je account en gegevens te laten **verwijderen**;",
            "je gegevens te **ontvangen** in een overdraagbaar, machineleesbaar formaat;",
            "**bezwaar** te maken tegen verwerking op basis van onze gerechtvaardigde belangen en de verwerking te laten **beperken** terwijl we het onderzoeken;",
            "je **toestemming in te trekken** voor advertenties, op elk moment in de instellingen van je apparaat, en meldingen op dezelfde manier uit te schakelen.",
          ],
        },
        {
          type: "p",
          text: "Om een recht uit te oefenen, mail je naar [contact@geofastgames.com](mailto:contact@geofastgames.com) vanaf het adres dat aan je account is gekoppeld, of, als je account geen e-mailadres heeft, geef je ons je gebruikersnaam en bevestigen we via de game dat het om jou gaat. Verwijderverzoeken kun je ook starten via onze [pagina voor gegevensverwijdering](/datadeletion). We antwoorden binnen een maand.",
        },
        {
          type: "p",
          text: "Vind je dat we onrechtmatig met je gegevens omgaan, dan kun je een klacht indienen bij de Belgische Gegevensbeschermingsautoriteit (Autorité de protection des données), Drukpersstraat 35, 1000 Brussel, [gegevensbeschermingsautoriteit.be](https://www.gegevensbeschermingsautoriteit.be), of bij de autoriteit van het land waar je woont.",
        },
      ],
    },
    {
      id: "children",
      title: "Kinderen",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* is niet gericht op kinderen onder de 13, en we verzamelen niet bewust persoonsgegevens van hen. In België is 13 de leeftijd waarop je zelf toestemming kunt geven voor onlinediensten. De game draagt in elke store een leeftijdsclassificatie die de onlinechat en de optionele aankopen weerspiegelt; ouders kunnen via het ouderlijk toezicht van Google Play en de App Store aankopen beperken en bepalen welke apps een kind mag installeren.",
        },
        {
          type: "p",
          text: "Denk je dat een kind onder de 13 een account heeft, mail ons dan en we verwijderen het.",
        },
      ],
    },
    {
      id: "security",
      title: "Beveiliging",
      blocks: [
        {
          type: "p",
          text: "Al het verkeer tussen de game, deze website en onze servers is versleuteld (TLS). Wachtwoorden worden gehasht. De database is niet bereikbaar vanaf het internet. Toegang tot servers en gegevens is beperkt tot de twee ontwikkelaars; moderators zien de chatgeschiedenis alleen via een tool die elke raadpleging logt. Geen enkel systeem is perfect veilig; als we ooit kennis krijgen van een inbreuk die je gegevens raakt, laten we het jou en de autoriteit weten zoals de wet vereist.",
        },
      ],
    },
    {
      id: "website",
      title: "Deze website",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com plaatst geen cookies en gebruikt geen tracking- of analysescripts. Drie dingen verlaten je browser bij een bezoek: het lettertype van de pagina wordt geladen van Google Fonts, waardoor Google je IP-adres ziet; het ledenaantal van onze Discord wordt opgehaald via de openbare API van Discord; en de livestatistieken komen van onze eigen server. Links naar de app stores dragen een campagnetag zodat we zien dat een download van deze site kwam; die identificeert de site, niet jou.",
        },
      ],
    },
    {
      id: "changes",
      title: "Wijzigingen van deze verklaring",
      blocks: [
        {
          type: "p",
          text: "Wanneer we veranderen hoe we met gegevens omgaan, werken we deze pagina en de datum bij, en bij belangrijke wijzigingen laten we het je weten in de game.",
        },
      ],
    },
  ],
};
