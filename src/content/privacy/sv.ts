import type { PrivacyContent } from "./types";

// Swedish. "Du" throughout, as in the game and in all Swedish consumer-facing
// legal text. Legal vocabulary follows the official Swedish text of the GDPR:
// "personuppgiftsansvarig", "dataskyddsombud", "rattslig grund", "berattigat
// intresse", "fullgorande av avtal", "tillsynsmyndighet",
// "standardavtalsklausuler", "rattelse", "radering", "begransning av
// behandling", "dataportabilitet", "invandning". The document is called
// "Integritetspolicy", the usual Swedish name, rather than the game menu's
// "Sekretesspolicy". Game terms follow the game: "strid", "nation", "chatt",
// "mynt", "butik", "sasong", "stridsrepris" for replay; "Battle Pass" stays
// untranslated, as in the game. The game leaves "Leaderboard" in English;
// this text uses the ordinary Swedish "topplistor" instead. Mutes are
// "chattsparrar", bans "avstangningar".
export const sv: PrivacyContent = {
  lang: "sv",
  label: "Svenska",
  pageTitle: "Integritetspolicy | Geofast: Battle of Nations",
  metaDescription:
    "Vilka uppgifter Geofast: Battle of Nations samlar in, hur de används, vem de delas med och hur du begär radering.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Integritetspolicy",
  lastUpdated: "Senast uppdaterad: 25 september 2026",
  sectionsLabel: "Avsnitt",
  languageLabel: "Språk",
  legalBasisLabel: "Rättslig grund:",
  contact: {
    line: "Frågor? Fråga på Discord. Begäranden om dina uppgifter: skicka e-post till oss.",
    discord: "Fråga på Discord",
    back: "Tillbaka till Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Vem vi är",
      blocks: [
        {
          type: "p",
          text: "Geofast Games är en oberoende spelstudio med säte i Belgien. Vi gör *Geofast: Battle of Nations* och driver den här webbplatsen. Vi är personuppgiftsansvariga för de personuppgifter som beskrivs i denna policy: vi bestämmer vad som samlas in och varför.",
        },
        {
          type: "p",
          text: "Du når oss på [contact@geofastgames.com](mailto:contact@geofastgames.com). Vi är en studio med två personer och har inte utsett något dataskyddsombud; på samma adress når du de personer som ansvarar för dina uppgifter.",
        },
        {
          type: "p",
          text: "Denna policy omfattar spelet på iOS och Android samt webbplatsen geofastgames.com. Den omfattar inte Discord, App Store, Google Play eller andra tjänster du använder vid sidan av spelet; de har sina egna policyer, som vi länkar till där de nämns.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "I korthet",
      blocks: [
        {
          type: "table",
          head: ["Vad", "Varför", "Hur länge"],
          rows: [
            [
              "Konto: en enhetsidentifierare, ditt användarnamn och, om du väljer det, en e-postadress med lösenord eller en inloggning med Google eller Apple",
              "För att driva ditt konto och låta dig spela online",
              "Tills du raderar ditt konto; vi raderar inte inaktiva konton",
            ],
            [
              "Spelande: matcher, placeringar, föremål, köpbekräftelser",
              "För att driva spelet, topplistorna och ditt förråd",
              "Tills du raderar ditt konto; stridsrepriser 7 dagar, därefter arkiverade",
            ],
            [
              "Chattmeddelanden",
              "För att leverera dem och moderera missbruk",
              "Stridschatt 15 dagar, därefter raderad; övrig chatt 90 dagar, därefter arkiverad",
            ],
            [
              "IP-adress, enhetsidentifierare, telefonmodell",
              "För att upptäcka fusk och maskopi och för att upprätthålla avstängningar",
              "Matchposter 30 dagar och posten från första starten 90 dagar, därefter arkiverade; enhetsidentifieraren stannar hos ditt konto; en avstängningspost stannar tills vi häver avstängningen",
            ],
            [
              "Token för pushnotiser",
              "För att skicka notiser som du kan stänga av",
              "Tills token slutar fungera (till exempel efter att du avinstallerat) eller du raderar ditt konto",
            ],
            [
              "Analyshändelser om hur du spelar",
              "För att förstå spelmönster och åtgärda problem",
              "400 dagar, därefter arkiverade",
            ],
            [
              "Annons-ID, som läses av Google AdMobs programvara",
              "För att läsa in och visa belöningsannonser som du kan välja att titta på",
              "Skickas till Google när spelet startar och när en annons läses in; lagras inte av oss; AdMobs policy gäller",
            ],
          ],
        },
        { type: "lead", text: "Fyra saker som är bra att veta innan du läser vidare" },
        {
          type: "ul",
          items: [
            "Chatten är inte privat. Meddelanden sparas i upp till 15 dagar (stridschatt) eller 90 dagar (övrig chatt) så att moderatorer kan granska anmälningar; varje meddelande passerar ett automatiskt filter, och när vi slår på funktionen klassificeras meddelanden även av Googles tjänst Gemini.",
            "Vi registrerar din IP-adress och en enhetsidentifierare när du spelar, för att upptäcka fusk och få avstängningar att hålla.",
            "Våra servrar står i Frankfurt, Tyskland. Några leverantörer vi använder (Google, Apple) behandlar uppgifter utanför Europeiska unionen.",
            "Poster som löper ut ur vår aktiva databas (annan chatt än stridschatt, matchposter, analysdata med mera) arkiveras i Frankfurt i stället för att förstöras. Se ”Hur länge vi sparar uppgifter”.",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Ditt konto",
      blocks: [
        {
          type: "p",
          text: "När du spelar online första gången skapar vi ett konto åt dig och kopplar det till en identifierare som genereras på din enhet. Inget mer behövs för att spela, och du behöver aldrig uppge ditt namn för oss.",
        },
        {
          type: "p",
          text: "Du väljer ett användarnamn, som andra spelare kan se. Utöver det lagrar vi det spelet behöver för att fungera för dig: dina framsteg, dina inställningar och vänner samt vilken version av spelet du använder.",
        },
        {
          type: "p",
          text: "Om du vill behålla dina framsteg mellan enheter kan du lägga till en e-postadress med lösenord eller logga in med Google eller Apple. Lösenord lagras hashade, vilket innebär att vi inte kan läsa dem. Från Google eller Apple får vi bara det som behövs för att koppla kontot, och vi använder din e-postadress enbart för att skydda kontot och återställa lösenordet.",
        },
        {
          type: "p",
          text: "Enhetsidentifieraren krävs för att spela online. Allt annat är frivilligt.",
        },
        { type: "basis", text: "fullgörande av vårt avtal med dig (tillhandahållande av spelet)." },
      ],
    },
    {
      id: "gameplay",
      title: "Spelande, framsteg och köp",
      blocks: [
        {
          type: "p",
          text: "För att driva onlinestrider, topplistor och ditt förråd lagrar vi dina spelframsteg: matchresultat, placeringar, de föremål och valutor du äger samt dina framsteg i evenemang och säsonger. Dina senaste strider sparas som historik; stridsrepriser lämnar den aktiva databasen efter 7 dagar och arkiveras.",
        },
        {
          type: "p",
          text: "Betalningar hanteras helt av Google Play eller App Store. Vi ser aldrig dina kort- eller bankuppgifter. Butiken meddelar oss vad du har köpt, och vi lagrar den bekräftelsen och, för Battle Pass, prenumerationens status, så att vi kan leverera föremål, återställa köp och hjälpa till med support.",
        },
        {
          type: "basis",
          text: "fullgörande av vårt avtal med dig. Köpunderlag som vi måste spara för bokföringen sparas enligt våra rättsliga förpliktelser.",
        },
      ],
    },
    {
      id: "chat",
      title: "Chatt och moderering",
      blocks: [
        {
          type: "p",
          text: "Spelet har chatt mellan spelare. Meddelanden levereras till de andra spelarna i den chatten och lagras på våra servrar: chatt inne i en strid i 15 dagar, varefter den raderas; all annan chatt i 90 dagar, varefter den arkiveras (se ”Hur länge vi sparar uppgifter”). Vi sparar dem så att moderatorer kan utreda anmälningar om missbruk eller fusk. Varje uppslag som en moderator gör loggas.",
        },
        {
          type: "p",
          text: "Modereringen sker i tre steg. Först passerar varje meddelande ett automatiskt filter på våra servrar (frekvensbegränsningar, en ordlista och mönster för hatpropaganda) innan det levereras; ett blockerat meddelande skickas aldrig. Sedan, när vi slår på funktionen, klassificeras levererade meddelanden även av Googles tjänst Gemini, som tar emot meddelandet och dina senaste meddelanden i den chatten som sammanhang. Användarnamn kontrolleras av Gemini när du anger eller ändrar dem. Ett meddelande som Gemini klassificerar som kränkande raderas, och en överträdelse registreras. Till sist agerar mänskliga moderatorer på anmälningar.",
        },
        {
          type: "p",
          text: "Överträdelser leder till varningar och tillfälliga chattspärrar, enligt våra [användarvillkor](/termsofservice). Registret över dina överträdelser och chattspärrar stannar hos ditt konto så att upprepat beteende kan kännas igen. Dessa automatiska steg påverkar bara din möjlighet att chatta. Om du tycker att ett beslut var fel, skicka e-post till oss eller fråga på Discord, så tittar en människa på det.",
        },
        {
          type: "p",
          text: "Dela inte personliga uppgifter i chatten. Andra spelare kan se vad du skriver.",
        },
        {
          type: "basis",
          text: "vårt berättigade intresse av att hålla spelet säkert och rättvist för alla som spelar det.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Rent spel och säkerhet",
      blocks: [
        {
          type: "p",
          text: "Fusk i ett tävlingsspel förstör det för alla, så vi sparar en liten mängd tekniska uppgifter för att upptäcka det och få avstängningar att hålla:",
        },
        {
          type: "ul",
          items: [
            "När du startar spelet första gången registrerar vi din enhetsidentifierare, telefonmodell, plattform och IP-adress, tillsammans med de steg i tutorialen som du slutför. Denna post lämnar den aktiva databasen efter 90 dagar och arkiveras.",
            "För varje onlinematch registrerar vi vilka konton som deltog, med deras enhetsidentifierare och IP-adress. En automatisk kontroll går regelbundet igenom de senaste posterna efter par av spelare som hamnar i samma matcher betydligt oftare än slumpen tillåter. Matchposter lämnar den aktiva databasen efter 30 dagar och arkiveras.",
            "Upptäckt fusk leder till påföljder, upp till avstängning, enligt våra [användarvillkor](/termsofservice). Påföljdshistoriken stannar hos ditt konto, och du kan begära att en människa granskar varje påföljd.",
            "En avstängning av en enhet blockerar även nya konton från den enheten. Avstängningsposter har inget slutdatum; vi tar bort dem när en granskning visar att avstängningen var fel.",
          ],
        },
        {
          type: "p",
          text: "Själva stridshandlingarna valideras på våra servrar medan de sker, vilket inte kräver några uppgifter utöver matchen i sig. Vi använder inte din IP-adress för att avgöra var du befinner dig. När du går med första gången föreslår spelet en nation utifrån enhetens språk- och regioninställning; den avläsningen sker på enheten, och du kan välja vilken nation du vill i stället.",
        },
        {
          type: "basis",
          text: "vårt berättigade intresse av att förebygga fusk, bedrägeri och missbruk och av att hålla tjänsten säker.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Pushnotiser",
      blocks: [
        {
          type: "p",
          text: "Om du tillåter notiser ger din enhet oss en push-token, som vi lagrar och använder för att berätta om händelser i spelet: sådant som rör ditt konto, dina vänner och din nation, nya evenemang och säsonger, och en påminnelse om du har varit borta ett tag.",
        },
        {
          type: "p",
          text: "Notiser levereras via Firebase Cloud Messaging (Google) på Android och Apple Push Notification service på iOS. Du kan stänga av dem när som helst i enhetens inställningar, vilket hindrar att de visas; själva token finns kvar tills den blir ogiltig (till exempel när du avinstallerar spelet) eller du raderar ditt konto. Levererade notiser sparas hos oss i 30 dagar, därefter arkiveras de.",
        },
        {
          type: "basis",
          text: "vårt berättigade intresse av att hålla dig informerad om ditt konto och det spel du spelar, med en avanmälan som bara kräver ett tryck.",
        },
      ],
    },
    {
      id: "ads",
      title: "Valfria belöningsannonser",
      blocks: [
        {
          type: "p",
          text: "Spelet har inga påtvingade annonser: ingenting avbryter en strid eller en meny. Butiken erbjuder belöningsannonser som bara spelas när du trycker på dem, i utbyte mot spelvaluta.",
        },
        {
          type: "p",
          text: "Annonserna levereras av Google AdMob. Dess programvara är en del av spelet, startar med det och läser in en annons i bakgrunden så att en är redo om du trycker. I det ögonblicket, oavsett om du någonsin tittar på en annons, tar AdMob emot ditt annons-ID och en grov plats härledd från din IP-adress; om du tittar på en, även hur du interagerade med den. På iOS ber systemet om ditt tillstånd vid första starten innan annons-ID:t används för spårning; på Android kan du återställa eller ta bort annons-ID:t i enhetens inställningar. Google beskriver vad det gör med dessa uppgifter i sin [integritetspolicy](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "ditt samtycke, som du ger via enhetens behörighets- och annonsinställningar och kan återkalla där när som helst.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analys",
      blocks: [
        {
          type: "p",
          text: "För att förstå hur spelet spelas och hitta problem skickar spelet händelser till våra egna servrar: sessionens start och slut, spelade och avslutade strider, framsteg i tutorialen, köp i butiken, öppnade notiser, fel och, på Android, den butiksreferens som ledde dig till spelet. Varje händelse innehåller din kontoidentifierare, enhetsidentifierare, plattform, telefonmodell och spelversion. Vi använder inte Google Analytics, Firebase Analytics eller någon annan analystjänst från tredje part. Kraschrapporter når oss via Google Play och App Store enligt deras egna policyer.",
        },
        {
          type: "p",
          text: "Analyshändelser sparas i 400 dagar. Statistik som härleds ur dem innehåller inga personuppgifter och sparas utan tidsgräns.",
        },
        {
          type: "basis",
          text: "vårt berättigade intresse av att förbättra spelet och hålla det fungerande.",
        },
      ],
    },
    {
      id: "support",
      title: "Support och community",
      blocks: [
        {
          type: "p",
          text: "Om du skickar e-post till oss sparar vi utbytet så länge det tar att hantera det.",
        },
        {
          type: "p",
          text: "Vår Discord-server drivs på Discord enligt [Discords integritetspolicy](https://discord.com/privacy). Moderatorer där kan slå upp chatthistorik från spelet för att hantera anmälningar, som beskrivs under ”Chatt och moderering”.",
        },
        {
          type: "basis",
          text: "fullgörande av vårt avtal med dig (support) och vårt berättigade intresse av att driva en community kring spelet.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Vem vi delar uppgifter med",
      blocks: [
        {
          type: "p",
          text: "Vi säljer inte personuppgifter och delar dem inte med datamäklare. Företagen nedan behandlar uppgifter för vår räkning eller tar emot dem på grund av hur spelet fungerar:",
        },
        {
          type: "table",
          head: ["Leverantör", "Vad för", "Var"],
          rows: [
            ["DigitalOcean", "Drift av våra spelservrar och vår databas", "Frankfurt, Tyskland"],
            [
              "Gcore",
              "Innehållsleveransnätverk som för en del av spelets trafik till våra servrar; det ser din IP-adress under överföringen",
              "Edge-servrar över hela världen; företaget har säte i Luxemburg",
            ],
            [
              "Google Cloud Storage",
              "Arkiv över utgångna poster (se ”Hur länge vi sparar uppgifter”)",
              "Frankfurt, Tyskland",
            ],
            [
              "Google (Gemini API)",
              "Klassificering av användarnamn och, när funktionen är påslagen, chattmeddelanden",
              "Hela världen: Google förbinder sig inte till någon region för detta API",
            ],
            ["Google AdMob", "Belöningsannonser som du väljer att titta på", "USA"],
            ["Google Firebase Cloud Messaging", "Leverans av pushnotiser på Android", "USA"],
            ["Apple Push Notification service", "Leverans av pushnotiser på iOS", "USA"],
            ["Zoho Mail", "Vår e-post, inklusive e-post för återställning av lösenord", "Europeiska unionen"],
            [
              "Google Play och App Store",
              "Inloggning, betalningar, prenumerationer och kraschrapporter",
              "Enligt deras egna policyer",
            ],
          ],
        },
        {
          type: "p",
          text: "Var och en av dessa leverantörer är avtalsmässigt skyldig att skydda dina uppgifter minst lika väl som denna policy beskriver och att använda dem enbart för det angivna ändamålet. Andra spelare ser ditt användarnamn, din profil i spelet och vad du skriver i chatten. Vi lämnar ut uppgifter till myndigheter endast när lagen kräver det.",
        },
      ],
    },
    {
      id: "storage",
      title: "Var dina uppgifter lagras",
      blocks: [
        {
          type: "p",
          text: "Våra servrar, vår databas och våra säkerhetskopior finns i Frankfurt, Tyskland, och vårt arkiv över utgångna poster ligger i en Google Cloud Storage-bucket i samma stad. Dina uppgifter stannar i Europeiska unionen utom där en leverantör ovan behandlar dem i USA eller, för Gemini API, där Google än kör det. För dessa överföringar stödjer vi oss på Europeiska kommissionens standardavtalsklausuler och, där leverantören är certifierad, på dataskyddsramen mellan EU och USA (Data Privacy Framework).",
        },
      ],
    },
    {
      id: "retention",
      title: "Hur länge vi sparar uppgifter",
      blocks: [
        {
          type: "table",
          head: ["Uppgifter", "Sparas"],
          rows: [
            ["Konto, framsteg, förråd, vänner, köpbekräftelser", "Tills du raderar ditt konto"],
            [
              "Historik över chattöverträdelser och chattspärrar, historik över påföljder för maskopi",
              "Kontots hela livstid (chattspärrarna i sig är tillfälliga)",
            ],
            ["Avstängningar av enheter", "Tills vi häver dem"],
            ["Analyshändelser", "400 dagar, därefter arkiverade"],
            ["Annan chatt än stridschatt, inklusive direktmeddelanden", "90 dagar, därefter arkiverad"],
            [
              "Transaktionshistorik för mynt och XP",
              "90 dagar (XP-historik: 90 dagar efter din senaste aktivitet), därefter arkiverad",
            ],
            ["Posten från första starten med IP-adress och telefonmodell", "90 dagar, därefter arkiverad"],
            [
              "Deltagarposter per match med IP-adress och enhetsidentifierare",
              "30 dagar, därefter arkiverade",
            ],
            ["Levererade notiser, dagliga framsteg", "30 dagar, därefter arkiverade"],
            ["Stridschatt", "15 dagar, därefter raderad"],
            ["Stridsrepriser", "7 dagar, därefter arkiverade"],
            ["Händelser när du bläddrar i butiken", "3 dagar, därefter raderade"],
          ],
        },
        {
          type: "p",
          text: "Rader markerade ”därefter arkiverade” kopieras till ett arkiv i Frankfurt innan de lämnar den aktiva databasen. Vi använder arkivet för statistik och för att utreda tidigare missbruk; åtkomsten är begränsad till de två utvecklarna, och ingenting i det kan nås från spelet. Vi behåller arkiverade poster så länge de behövs för dessa ändamål och raderar dem när de inte längre behövs.",
        },
        {
          type: "p",
          text: "När du raderar ditt konto raderar vi dina personuppgifter från de aktiva systemen inom 30 dagar. Vi behåller uppgifter som vi enligt lag måste spara, till exempel köpunderlag för bokföringen, och statistik som inte längre identifierar dig.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Våra rättsliga grunder på ett ställe",
      blocks: [
        {
          type: "p",
          text: "Enligt dataskyddsförordningen (GDPR) behöver vi en rättslig grund för allt vi gör med dina uppgifter. Våra är:",
        },
        {
          type: "ul",
          items: [
            "**Avtal**: att driva ditt konto, spelet, dina köp och supporten. Utan dessa uppgifter finns det inget spel att spela.",
            "**Berättigat intresse**: att förebygga fusk och missbruk, moderera chatten, hålla tjänsten säker, förstå hur spelet spelas och informera dig om ditt konto. Vårt intresse är ett rättvist, säkert och fungerande spel; vi håller uppgifterna minimala och kortlivade, och du kan invända när som helst.",
            "**Samtycke**: personanpassad reklam i belöningsannonser, som ges via enhetens inställningar och kan återkallas där.",
            "**Rättslig förpliktelse**: att spara bokföringsunderlag och svara på lagliga begäranden från myndigheter.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Dina rättigheter",
      blocks: [
        { type: "p", text: "Du har rätt att:" },
        {
          type: "ul",
          items: [
            "få **tillgång** till de personuppgifter vi har om dig och få en kopia;",
            "få felaktiga uppgifter **rättade**;",
            "få ditt konto och dina uppgifter **raderade**;",
            "**få ut** dina uppgifter i ett portabelt, maskinläsbart format;",
            "**invända** mot behandling som grundar sig på våra berättigade intressen, och få behandlingen **begränsad** medan vi utreder saken;",
            "**återkalla samtycket** till reklam när som helst i enhetens inställningar, och stänga av notiser på samma sätt.",
          ],
        },
        {
          type: "p",
          text: "För att utöva en rättighet skickar du e-post till [contact@geofastgames.com](mailto:contact@geofastgames.com) från den adress som är kopplad till ditt konto, eller, om ditt konto inte har någon e-postadress, uppger ditt användarnamn så verifierar vi dig inifrån spelet. En begäran om radering kan också börja på vår [sida för radering av uppgifter](/datadeletion). Vi svarar inom en månad.",
        },
        {
          type: "p",
          text: "Om du anser att vi behandlar dina uppgifter olagligt kan du klaga hos den belgiska dataskyddsmyndigheten (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Bryssel, [dataprotectionauthority.be](https://www.dataprotectionauthority.be), eller hos tillsynsmyndigheten i det land där du bor.",
        },
      ],
    },
    {
      id: "children",
      title: "Barn",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* riktar sig inte till barn under 13 år, och vi samlar inte medvetet in personuppgifter från dem. I Belgien är 13 den ålder från vilken du själv kan samtycka till onlinetjänster. Spelet har i varje butik en åldersmärkning som speglar dess onlinechatt och valfria köp; föräldrar kan använda föräldrakontrollerna i Google Play och App Store för att begränsa köp och vilka appar ett barn får installera.",
        },
        {
          type: "p",
          text: "Om du tror att ett barn under 13 år har ett konto, skicka e-post till oss så raderar vi det.",
        },
      ],
    },
    {
      id: "security",
      title: "Säkerhet",
      blocks: [
        {
          type: "p",
          text: "All trafik mellan spelet, den här webbplatsen och våra servrar är krypterad (TLS). Lösenord hashas. Databasen kan inte nås från internet. Åtkomst till servrar och uppgifter är begränsad till de två utvecklarna; moderatorer ser chatthistorik enbart genom ett verktyg som loggar varje uppslag. Inget system är helt säkert; om vi någonsin får kännedom om en incident som rör dina uppgifter informerar vi dig och myndigheten så som lagen kräver.",
        },
      ],
    },
    {
      id: "website",
      title: "Den här webbplatsen",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com sätter inga kakor och använder inga spårnings- eller analysskript. Tre saker lämnar din webbläsare när du besöker sidan: sidans typsnitt läses in från Google Fonts, så Google ser din IP-adress; antalet Discord-medlemmar hämtas från Discords publika API; och livestatistiken kommer från vår egen server. Länkarna till appbutikerna bär en kampanjtagg så att vi kan se att en nedladdning kom från den här webbplatsen; den identifierar webbplatsen, inte dig.",
        },
        {
          type: "p",
          text: "När du skickar oss ett förslag, en buggrapport, en rapport om en översättning eller en anmälan av en spelare via ett formulär på den här webbplatsen lagrar vi det du skrev in, de skärmbilder du bifogade, tidpunkten, din webbläsares språk och en hashad form av din IP-adress på vår egen server i EU. Vi använder det för att läsa och följa upp ditt meddelande och för att begränsa missbruk av formulären. Ditt användarnamn och din e-postadress är frivilliga; ange dem bara om du vill att vi ska kunna svara. Det som skickas in via formulären raderas efter tolv månader.",
        },
      ],
    },
    {
      id: "changes",
      title: "Ändringar i denna policy",
      blocks: [
        {
          type: "p",
          text: "När vi ändrar hur vi hanterar uppgifter uppdaterar vi den här sidan och dess datum, och vid väsentliga ändringar berättar vi det för dig i spelet.",
        },
      ],
    },
  ],
};
