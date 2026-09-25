import type { TermsContent } from "./types";

// Swedish. "Du" throughout, as in the Swedish privacy policy, the game and
// all Swedish consumer-facing legal text. Swedish quotation marks. The
// document is called "Anvandarvillkor", the term the privacy policy links
// to; the privacy policy is "Integritetspolicy", as it names itself. Legal
// vocabulary follows the official Swedish text of the Consumer Rights
// Directive and the Digital Content Directive: "angerratt", "avtalsenlighet",
// "tvingande konsumentskyddslagstiftning", "grov vardsloshet", "ansvar",
// "domstolen dar du bor". Game terms follow the game: "strid", "nation",
// "chatt", "mynt", "diamanter", "stjarnor", "sasong", "vapen", "skins",
// "rekommendationskod"; "Battle Pass" stays untranslated, as in the game.
// The game leaves "Leaderboard" in English; like the privacy policy, this
// text uses the ordinary Swedish "topplistor". As there, cheating is "fusk",
// a mute a "chattsparr", a ban an "avstangning", a report an "anmalan".
export const sv: TermsContent = {
  lang: "sv",
  label: "Svenska",
  pageTitle: "Användarvillkor | Geofast: Battle of Nations",
  metaDescription:
    "Reglerna för att spela Geofast: Battle of Nations: konton, uppförande, moderering och överklaganden, köp och Battle Pass, ändringar och dina rättigheter.",
  gameName: "Geofast: Battle of Nations",
  docName: "Användarvillkor",
  lastUpdated: "Senast uppdaterad: 25 september 2026",
  sectionsLabel: "Avsnitt",
  languageLabel: "Språk",
  contact: {
    line: "Frågor? Fråga på Discord. Begäranden om dina uppgifter: skicka e-post till oss.",
    discord: "Fråga på Discord",
    back: "Tillbaka till Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Vem vi är och vad dessa villkor omfattar",
      blocks: [
        {
          type: "p",
          text: "Dessa användarvillkor är avtalet mellan dig och Geofast Games, en oberoende spelstudio med säte i Belgien, för *Geofast: Battle of Nations* (spelet) och webbplatsen geofastgames.com. Du når oss på [contact@geofastgames.com](mailto:contact@geofastgames.com).",
        },
        {
          type: "p",
          text: "Genom att skapa ett konto eller spela godtar du dessa villkor. Om du inte godtar dem ska du inte spela. Vår [integritetspolicy](/privacy) förklarar vad vi gör med dina uppgifter; den är ett separat dokument och gäller vid sidan av dessa villkor.",
        },
        {
          type: "p",
          text: "På iOS licensieras appen till dig enligt Apples standardlicensavtal för slutanvändare, som reglerar din användning av själva appen. Dessa villkor reglerar speltjänsten, ditt konto och hur du spelar med andra. Där de två överlappar gäller Apples avtal för applicensen och dessa villkor för allt annat.",
        },
        {
          type: "p",
          text: "Dessa villkor är skrivna på engelska. Översättningar tillhandahålls för din bekvämlighet; om en översättning avviker från den engelska texten gäller den engelska texten.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Vem som får spela",
      blocks: [
        {
          type: "p",
          text: "Du måste vara minst 13 år för att spela. Om du är under 18 behöver du tillåtelse från en förälder eller vårdnadshavare för att spela och för att göra köp, och genom att spela bekräftar du att du har den. Föräldrar och vårdnadshavare ansvarar för vad minderåriga i deras vård gör i spelet och för köp som görs via deras butikskonto. Föräldrakontrollerna i Google Play och App Store kan begränsa köp och nedladdningar.",
        },
        {
          type: "p",
          text: "Spelets åldersmärkningar i butikerna speglar att det har chatt mellan spelare och valfria köp.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Ditt konto",
      blocks: [
        {
          type: "p",
          text: "När du spelar online första gången skapar spelet ett konto som är kopplat till din enhet. Du kan koppla en e-postadress och ett lösenord, eller en inloggning med Google eller Apple, för att behålla dina framsteg mellan enheter. Håll dina inloggningsuppgifter för dig själv: allt som görs via ditt konto är ditt ansvar, och du bör berätta för oss omedelbart om du tror att någon annan använder det.",
        },
        {
          type: "p",
          text: "Bara en enhet kan vara ansluten till ett konto åt gången. Att ansluta från en ny enhet kopplar bort den föregående.",
        },
        {
          type: "p",
          text: "Om du förlorar eller återställer din enhet utan att ha kopplat en e-postadress eller en inloggning med Google eller Apple har vi inget sätt att bekräfta att kontot är ditt, och det kan inte återställas. Koppla ditt konto om dina framsteg är viktiga för dig.",
        },
        {
          type: "p",
          text: "Att dela ett konto med en annan person är inte tillåtet, eftersom det ger en orättvis fördel i topplistor och rankningar. Att ha fler än ett konto är tillåtet, så länge inget av dem används för att få en orättvis fördel, för att göra upp matcher i förväg eller för att kringgå en påföljd på ett annat konto. Konton och det de innehåller får inte säljas, köpas, bytas eller ges bort.",
        },
        {
          type: "p",
          text: "Ditt användarnamn är synligt för alla. Det får inte vara kränkande eller missvisande, och det får inte utge sig för att vara någon annan, inklusive vår personal. Du kan ändra det en gång i spelet, mot den avgift som visas där. Vi kan ändra ett användarnamn som bryter mot dessa regler.",
        },
        {
          type: "p",
          text: "Vi raderar inte inaktiva konton. Du kan radera ditt konto när som helst i spelet, via din profil, eller via vår [sida för radering av uppgifter](/datadeletion). Raderingen är permanent och omfattar dina framsteg, virtuella valutor och föremål.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. Din licens att spela",
      blocks: [
        {
          type: "p",
          text: "Vi ger dig en personlig, icke-exklusiv och icke överlåtbar licens att installera och spela spelet på enheter som du äger eller kontrollerar, för din egen underhållning. Spelet, dess grafik, ljud, texter, kod och design tillhör Geofast Games eller våra licensgivare och skyddas av immaterialrätten. Du får inte kopiera, ändra, distribuera, sälja eller hyra ut någon del av spelet, eller bakåtkompilera det, utom där lagen uttryckligen tillåter det.",
        },
        {
          type: "p",
          text: "Spelet körs på de Android- och iOS-versioner som anges i butikerna. Att spela online kräver en någorlunda aktuell version av spelet: vi släpper uppdateringar via butikerna, och en föråldrad version kan förlora tillgången till onlinefunktioner tills den uppdateras.",
        },
        {
          type: "p",
          text: "Du får spela in, strömma och publicera videor och skärmbilder av ditt spelande, även på plattformar där du tjänar pengar på annonser eller medlemskap. Framställ inte ditt innehåll som skapat eller godkänt av oss, sälj inte varor med vår grafik och visa inte fusk eller exploits. Vi kan be dig ta bort innehåll som bryter mot dessa regler eller lagen.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Uppföranderegler",
      blocks: [
        { type: "p", text: "Spela rent och behandla andra spelare anständigt. Du får inte:" },
        {
          type: "ul",
          items: [
            "använda fusk, exploits, bottar, automatisering, modifierade klienter eller något verktyg som stör spelet eller dess servrar;",
            "utnyttja buggar för att få en fördel i stället för att rapportera dem;",
            "samarbeta i maskopi med andra spelare, göra upp matcher i förväg, byta vinster eller på annat sätt manipulera rankningar, topplistor eller belöningar, inklusive med extra konton;",
            "dela, sälja, köpa eller överlåta konton, eller handla med virtuella föremål utanför spelet;",
            "trakassera, hota, förolämpa eller mobba andra spelare, eller publicera hatiskt, sexuellt, våldsamt eller på annat sätt kränkande innehåll;",
            "utge dig för att vara andra spelare, vår personal eller någon annan person eller organisation;",
            "spamma, annonsera eller dela länkar till skadligt innehåll;",
            "be om eller samla in andra spelares personuppgifter eller inloggningsuppgifter, eller dela dina egna eller någon annans i chatten;",
            "medvetet göra falska anmälningar om andra spelare, eller missbruka överklagandeprocessen;",
            "organisera eller delta i vadslagning eller spel om pengar på matcher eller på något annat i spelet;",
            "attackera, sondera eller överbelasta våra servrar, eller störa andra spelares anslutningar;",
            "avsiktligt förstöra spelet för andra spelare;",
            "använda spelet för något olagligt.",
          ],
        },
        {
          type: "p",
          text: "Rivalitet, retsamheter och krigsretorik mellan nationer är en del av spelet. Kränkningar av verkliga personer, hat riktat mot grupper, hot och sexuellt innehåll är det inte.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Chatt, användarnamn och innehåll du skapar",
      blocks: [
        {
          type: "p",
          text: "Spelet har chatt mellan spelare. Det du skriver levereras till de andra spelarna i den chatten och lagras på våra servrar under de perioder som anges i integritetspolicyn, så att moderatorer kan granska anmälningar. Chatten är inte privat: andra spelare ser den, och moderatorer kan läsa den när de hanterar en anmälan. Dela inte personliga uppgifter i chatten.",
        },
        {
          type: "p",
          text: "Du behåller rättigheterna till det du skriver. Du ger oss tillstånd att lagra, visa, moderera och vid behov ta bort det för att driva spelet. Du ansvarar för det du publicerar. Vi tar bort innehåll som bryter mot dessa villkor eller lagen.",
        },
        {
          type: "p",
          text: "Om du skickar oss förslag eller idéer, via spelet, vår webbplats eller Discord, får vi använda dem fritt, utan betalning eller någon skyldighet gentemot dig, och utan att namnge dig.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. Hur vi modererar",
      blocks: [
        { type: "p", text: "Modereringen kombinerar automatiska verktyg och människor:" },
        {
          type: "ul",
          items: [
            "Innan ett meddelande levereras kontrollerar ett automatiskt filter på våra servrar det mot frekvensbegränsningar, en ordlista och mönster för hatpropaganda. Ett blockerat meddelande skickas aldrig.",
            "När vi har slagit på funktionen klassificeras levererade meddelanden även av en automatisk tjänst (Googles Gemini), som tar emot meddelandet och dina senaste meddelanden i den chatten som sammanhang. Användarnamn kontrolleras på samma sätt när du anger eller ändrar dem. Ett meddelande som klassificeras som kränkande raderas, och en överträdelse registreras på ditt konto.",
            "Mänskliga moderatorer granskar anmälningar från spelare och agerar på vad de finner. Deras åtkomst till chatthistoriken loggas.",
          ],
        },
        {
          type: "p",
          text: "Konsekvenserna av chattöverträdelser är varningar och tillfälliga chattspärrar. Automatiskt upptäckta överträdelser leder först till en varning, och till en kort chattspärr om du snabbt upprepar dig. Chattspärrar som moderatorer tillämpar är tillfälliga och trappas upp för varje chattspärr du redan har fått, från timmar till månader. Registret över dina överträdelser och chattspärrar stannar hos ditt konto så att upprepat beteende kan kännas igen.",
        },
        {
          type: "p",
          text: "När vi spärrar dig från chatten, tar bort ditt innehåll eller bestraffar ditt konto talar vi om i spelet vad som gjordes och varför, och du kan bestrida det som beskrivs i avsnitt 9.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Upprätthållande av rent spel",
      blocks: [
        {
          type: "p",
          text: "Stridshandlingar valideras på våra servrar medan de sker, så att en modifierad klient inte kan ändra utfallet av en match. En automatisk kontroll granskar regelbundet de senaste matchposterna efter spelare som hamnar i samma matcher betydligt oftare än slumpen tillåter; så upptäcks uppgjorda matcher och maskopi.",
        },
        {
          type: "p",
          text: "Fusk och maskopi bestraffas stegvis. En spelare varnas först, en gång. Påföljderna trappas upp bara när det finns nya bevis efter varningen och med tid mellan stegen: återställning av rankningar och valutor, sedan en fullständig återställning av framstegen, och slutligen en permanent avstängning av enheten, som också blockerar nya konton som skapas från den. Konton som är inblandade i allvarligt eller upprepat fusk kan stängas. Innan vi tillämpar en återställning sparar vi en ögonblicksbild av kontot, så att en påföljd som visar sig vara fel kan återkallas. Registret över påföljder stannar hos ditt konto.",
        },
        {
          type: "p",
          text: "Varje påföljd följs av ett meddelande i spelet som anger vad som gjordes och varför, och du kan bestrida den som beskrivs i avsnitt 9.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Anmälningar och överklaganden",
      blocks: [
        {
          type: "p",
          text: "För att anmäla en spelare eller innehåll som bryter mot dessa villkor eller lagen använder du knappen ”Rapportera” i spelet, anmälningsformuläret på vår [feedbacksida](/feedback) eller skickar e-post till [contact@geofastgames.com](mailto:contact@geofastgames.com). Berätta vem, vad och var. Vi bekräftar att vi har tagit emot din anmälan och meddelar dig vad vi beslutat, utan onödigt dröjsmål. Anmälningar hanteras av människor, med hjälp av verktygen som beskrivs ovan, i god tro och utan godtycke.",
        },
        {
          type: "p",
          text: "Om du anser att en chattspärr, påföljd, avstängning eller borttagning av innehåll var fel, överklaga via e-post eller på Discord inom en månad. En person som inte var inblandad i det ursprungliga beslutet granskar det, och vi svarar inom 14 dagar. Om beslutet var fel upphäver vi det och återställer, där det är möjligt, det som förlorats. Ingenting här begränsar din rätt att ta ärendet till en domstol eller ett konsumentorgan.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Virtuella valutor, föremål och köp",
      blocks: [
        {
          type: "p",
          text: "Spelet har virtuella valutor (diamanter, mynt och stjärnor) och virtuella föremål som vapen, skins, uppgraderingar och Battle Pass-belöningar. Diamanter kan köpas för riktiga pengar via Google Play eller App Store; mynt och stjärnor tjänas genom att spela eller växlas inne i spelet. Priser visas i din lokala valuta i butiken och i spelet innan du köper.",
        },
        {
          type: "p",
          text: "Virtuella valutor och föremål licensieras till dig för användning i spelet. De är inte din egendom, har inget värde utanför spelet, kan inte växlas mot riktiga pengar, varor eller tjänster, och kan inte överföras till ett annat konto eller en annan person.",
        },
        {
          type: "p",
          text: "Köp levereras omedelbart. Genom att köpa ber du oss att leverera direkt och bekräftar att den lagstadgade ångerrätten på 14 dagar inte längre gäller när leveransen har påbörjats. I övrigt är köp slutgiltiga, utom där lagen ger dig rätt till återbetalning. Begäranden om återbetalning går till den butik du köpte från, som hanterar betalningen; vi ser aldrig dina betalningsuppgifter.",
        },
        {
          type: "p",
          text: "Vi kan ändra, balansera om, lägga till eller avveckla virtuella valutor och föremål av giltiga skäl: för att hålla spelet balanserat och roligt, rätta buggar, för säkerhet eller på grund av rättsliga krav. Där en ändring väsentligt skulle påverka något du nyligen har betalat för meddelar vi dig i förväg, och där lagen ger dig rätt att avsluta avtalet och få återbetalning på grund av en sådan ändring respekterar vi det. Dina lagstadgade rättigheter som konsument, inklusive rätten till ett spel som fungerar som beskrivet, påverkas inte.",
        },
        {
          type: "p",
          text: "Spelet har ingen påtvingad reklam. Där spelet erbjuder valfria belöningsannonser är det ditt val att titta på en, och vi kan ändra eller ta bort det erbjudandet.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. Battle Pass",
      blocks: [
        {
          type: "p",
          text: "Battle Pass är en prenumeration som köps via Google Play eller App Store. Den förnyas automatiskt varje månad till det pris som visas i butiken tills du säger upp den. Du kan säga upp när som helst i din butiks prenumerationsinställningar; passet är då aktivt till slutet av den period du har betalat för, och du behåller de belöningar du har hämtat. Prisändringar gäller från nästa förnyelse, och butiken meddelar dig innan de börjar gälla.",
        },
        {
          type: "p",
          text: "Battle Pass-belöningar låses upp genom att spela under säsongen; ett pass ger inte i sig varje belöning. Återbetalningar för prenumerationer hanteras av butiken enligt dess regler och lagen.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Rekommendationsbelöningar och programmet för innehållsskapare",
      blocks: [
        {
          type: "p",
          text: "Spelet belönar dig när en ny spelare går med via din rekommendationskod, och belönar även den spelaren. Rekommendationsbelöningar är avsedda för verkliga nya spelare. Att rekommendera dig själv, dina egna andra konton eller konton som skapats enbart för att hämta belöningen är inte tillåtet, och belöningar som erhållits på det sättet tas bort.",
        },
        {
          type: "p",
          text: "Vårt program för innehållsskapare belönar spelare som publicerar videor om spelet när deras innehåll når vissa visningsmilstolpar. Milstolparna, belöningarna och behörighetsreglerna publiceras i spelet och kan ändras. Belöningar verifieras och beviljas av oss manuellt, och vid tveksamhet avgör vi. Belöningar som begärs med förfalskade visningar, eller med innehåll som bryter mot dessa villkor, nekas eller tas bort.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Tredjepartstjänster",
      blocks: [
        {
          type: "p",
          text: "Spelet använder Google Play och App Store för nedladdningar, betalningar och prenumerationer; Google och Apple för valfri inloggning; Google AdMob för valfria belöningsannonser; och Discord för vår communityserver. Din användning av dessa tjänster regleras av deras egna villkor och integritetspolicyer, som vi inte kontrollerar.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Tillgänglighet och ändringar i spelet",
      blocks: [
        {
          type: "p",
          text: "Vi arbetar för att hålla spelet tillgängligt, men vi kan inte lova att det aldrig avbryts. Onlinefunktioner kan vara otillgängliga under underhåll, på grund av tekniska problem eller av skäl utanför vår kontroll. Offlinelägen fortsätter fungera utan anslutning.",
        },
        {
          type: "p",
          text: "Spelet är en levande tjänst och förändras över tid: vi lägger till, justerar och tar bort funktioner, vapen, nationer, säsonger och evenemang för att hålla det balanserat och fräscht, för att rätta problem, för säkerhet och för att uppfylla rättsliga krav. Ändringar som väsentligt påverkar hur du kan spela meddelas i spelet i förväg. Dina lagstadgade rättigheter påverkas inte.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Avtalets upphörande",
      blocks: [
        {
          type: "p",
          text: "Du kan sluta spela när som helst genom att avinstallera spelet, och du kan radera ditt konto i spelet, via din profil, eller via vår [sida för radering av uppgifter](/datadeletion). Att radera ditt konto tar permanent bort dina framsteg, virtuella valutor och föremål; ingenting återbetalas för dem.",
        },
        {
          type: "p",
          text: "Vi kan stänga av eller avsluta ditt konto om du allvarligt eller upprepat bryter mot dessa villkor, eller om lagen kräver det. Utom i allvarliga fall, som fusk, missbruk eller en rättslig skyldighet, varnar vi dig först och ger dig en chans att svara. Vi talar om skälet och hur du överklagar (avsnitt 9). Att ett konto avslutas innebär att din licens och din tillgång till dess virtuella valutor och föremål upphör.",
        },
        {
          type: "p",
          text: "Om vi någon gång måste stänga ner spelet meddelar vi det minst 30 dagar i förväg i spelet och på vår webbplats. Virtuella valutor och föremål upphör med spelet. Dina lagstadgade rättigheter avseende nyligen gjorda köp påverkas inte.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. Vårt ansvar",
      blocks: [
        {
          type: "p",
          text: "Vi ansvarar gentemot dig i den utsträckning lagen föreskriver. Vi utesluter eller begränsar inte vårt ansvar för dödsfall eller personskada orsakad av vår vårdslöshet, för bedrägeri, för uppsåtligt eller grovt vårdslöst handlande, eller för något annat som inte kan uteslutas enligt den lagstiftning som skyddar dig som konsument, inklusive din rätt till ett spel som stämmer med vad som utlovats.",
        },
        {
          type: "p",
          text: "Utöver det ansvarar vi bara för skada som var förutsebar när du godtog dessa villkor och som följer av att vi bryter mot dem. Spelet är gratis att spela och tillhandahålls som en levande tjänst; vi ansvarar inte för förluster orsakade av avbrott, av andra spelares beteende eller av händelser utanför vår rimliga kontroll, utom där lagen säger något annat.",
        },
        {
          type: "p",
          text: "Du ansvarar för skada som du orsakar oss genom att bryta mot dessa villkor, i den utsträckning lagen tillåter.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Integritet",
      blocks: [
        {
          type: "p",
          text: "Hur vi samlar in och använder dina uppgifter beskrivs i vår [integritetspolicy](/privacy). Den är inte en del av dessa villkor och är inte beroende av att du godtar dem: den berättar vad vi gör och vilka rättigheter du har.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Ändringar av dessa villkor",
      blocks: [
        {
          type: "p",
          text: "Vi ändrar dessa villkor när spelet, lagen eller våra tjänster förändras, eller för att göra dem tydligare. För ändringar som påverkar dina rättigheter eller hur du spelar meddelar vi minst 30 dagar i förväg i spelet innan de börjar gälla, och du kan sluta spela och radera ditt konto före dess om du inte godtar dem. Förtydliganden och rättelser som inte påverkar dig börjar gälla när de publiceras. Datumet högst upp visar när den nuvarande versionen började gälla.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Lag, tvister och klagomål",
      blocks: [
        {
          type: "p",
          text: "Dessa villkor regleras av belgisk lag. Om du bor i ett annat land behåller du skyddet enligt det landets tvingande konsumentskyddslagstiftning, och du kan väcka talan vid domstolarna där du bor. Vi kan väcka talan mot dig bara där.",
        },
        {
          type: "p",
          text: "Om du har ett klagomål, kontakta oss först på [contact@geofastgames.com](mailto:contact@geofastgames.com) eller på Discord; det mesta kan lösas direkt. Du kan också vända dig till ett organ för konsumenttvister i ditt land; i Belgien är det Konsumentmedlingstjänsten (Consumentenombudsdienst / Service de Médiation pour le Consommateur). Dessa villkor innehåller ingen skiljeklausul och inget avstående från grupptalan.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Slutbestämmelser",
      blocks: [
        {
          type: "p",
          text: "Vi kontaktar dig genom meddelanden i spelet, på vår webbplats och, om du har kopplat en e-postadress, via e-post. Du kontaktar oss på [contact@geofastgames.com](mailto:contact@geofastgames.com); det är också vår adress för rättsliga meddelanden och vår kontaktpunkt för myndigheter.",
        },
        {
          type: "p",
          text: "Om en del av dessa villkor visar sig vara ogiltig fortsätter resten att gälla. Om vi inte upprätthåller en regel vid något tillfälle kan vi ändå upprätthålla den senare. Vi får överlåta detta avtal till ett företag som tar över spelet, förutsatt att dina rättigheter inte minskas; du får inte överlåta ditt konto eller detta avtal. Dessa villkor och integritetspolicyn utgör hela avtalet mellan dig och oss om spelet.",
        },
      ],
    },
  ],
};
