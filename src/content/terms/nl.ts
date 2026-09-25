import type { TermsContent } from "./types";

// Dutch (Belgium). Informal "je" throughout, matching the Dutch privacy policy
// and common practice in Dutch-language consumer apps and games. The document
// is called "Gebruiksvoorwaarden", the term the privacy policy links to; the
// privacy policy is "Privacyverklaring", as it names itself. Legal vocabulary
// follows the Dutch text of the Consumer Rights Directive and the Digital
// Content Directive: "herroepingsrecht", "conformiteit", "dwingend
// consumentenrecht", "grove schuld", "aansprakelijkheid", "bevoegde
// rechter". Game terms follow the game's Dutch translation: "gevecht" for
// battle, "natie", "chat", "munten", "diamanten", "sterren", "seizoen",
// "wapens", "skins", "verwijzingscode"; "Battle Pass" stays untranslated, as
// in the game; "ranglijsten" as in the privacy policy. As there, cheating is
// "valsspelen", collusion "samenspel", a mute a "chatblokkering", a ban a
// "ban".
export const nl: TermsContent = {
  lang: "nl",
  label: "Nederlands",
  pageTitle: "Gebruiksvoorwaarden | Geofast: Battle of Nations",
  metaDescription:
    "De regels voor het spelen van Geofast: Battle of Nations: accounts, gedrag, moderatie en bezwaar, aankopen en de Battle Pass, wijzigingen en je rechten.",
  gameName: "Geofast: Battle of Nations",
  docName: "Gebruiksvoorwaarden",
  lastUpdated: "Laatst bijgewerkt: 25 september 2026",
  sectionsLabel: "Onderdelen",
  languageLabel: "Taal",
  contact: {
    line: "Vragen? Stel ze op Discord. Verzoeken over je gegevens: mail ons.",
    discord: "Vraag het op Discord",
    back: "Terug naar Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Wie we zijn en waarop deze voorwaarden van toepassing zijn",
      blocks: [
        {
          type: "p",
          text: "Deze gebruiksvoorwaarden zijn de overeenkomst tussen jou en Geofast Games, een onafhankelijke gamestudio gevestigd in België, voor *Geofast: Battle of Nations* (de game) en de website geofastgames.com. Je bereikt ons via [contact@geofastgames.com](mailto:contact@geofastgames.com).",
        },
        {
          type: "p",
          text: "Door een account aan te maken of te spelen, aanvaard je deze voorwaarden. Ga je er niet mee akkoord, speel dan niet. Onze [privacyverklaring](/privacy) legt uit wat we met je gegevens doen; het is een afzonderlijk document dat naast deze voorwaarden geldt.",
        },
        {
          type: "p",
          text: "Op iOS wordt de app aan je in licentie gegeven onder de standaardlicentieovereenkomst voor eindgebruikers van Apple, die je gebruik van de app zelf regelt. Deze voorwaarden regelen de gamedienst, je account en hoe je met anderen speelt. Waar de twee elkaar overlappen, geldt de overeenkomst van Apple voor de licentie op de app en gelden deze voorwaarden voor al het overige.",
        },
        {
          type: "p",
          text: "Deze voorwaarden zijn in het Engels opgesteld. Vertalingen zijn er voor het gemak; als een vertaling afwijkt van de Engelse tekst, geldt de Engelse tekst.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Wie mag spelen",
      blocks: [
        {
          type: "p",
          text: "Je moet minstens 13 jaar oud zijn om te spelen. Ben je jonger dan 18, dan heb je de toestemming van een ouder of voogd nodig om te spelen en om aankopen te doen, en door te spelen bevestig je dat je die hebt. Ouders en voogden zijn verantwoordelijk voor wat minderjarigen onder hun hoede in de game doen en voor aankopen via hun store-account. Met het ouderlijk toezicht van Google Play en de App Store kunnen aankopen en downloads worden beperkt.",
        },
        {
          type: "p",
          text: "De leeftijdsclassificaties van de game in de stores weerspiegelen dat er chat tussen spelers en optionele aankopen in zitten.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Je account",
      blocks: [
        {
          type: "p",
          text: "Wanneer je voor het eerst online speelt, maakt de game een account aan dat aan je apparaat is gekoppeld. Je kunt een e-mailadres met wachtwoord of een aanmelding via Google of Apple koppelen om je voortgang op meerdere apparaten te behouden. Houd je inloggegevens voor jezelf: alles wat via je account gebeurt, is jouw verantwoordelijkheid, en je moet het ons meteen laten weten als je denkt dat iemand anders het gebruikt.",
        },
        {
          type: "p",
          text: "Er kan maar één apparaat tegelijk met een account verbonden zijn. Verbinden vanaf een nieuw apparaat verbreekt de verbinding met het vorige.",
        },
        {
          type: "p",
          text: "Verlies of reset je je apparaat zonder een e-mailadres of een aanmelding via Google of Apple te hebben gekoppeld, dan kunnen we niet bevestigen dat het account van jou is, en kan het niet worden hersteld. Koppel je account als je voortgang belangrijk voor je is.",
        },
        {
          type: "p",
          text: "Een account delen met iemand anders is niet toegestaan, omdat het een oneerlijk voordeel oplevert in ranglijsten en klassementen. Meer dan één account hebben is toegestaan, zolang geen ervan wordt gebruikt om een oneerlijk voordeel te behalen, gevechten te manipuleren of een sanctie op een ander account te omzeilen. Accounts en wat erin zit kunnen niet worden verkocht, gekocht, verhandeld of weggegeven.",
        },
        {
          type: "p",
          text: "Je gebruikersnaam is voor iedereen zichtbaar. Hij mag niet beledigend of misleidend zijn en mag zich niet voordoen als iemand anders, ook niet als onze medewerkers. Je kunt hem één keer in de game wijzigen, tegen het daar getoonde tarief. Wij kunnen een gebruikersnaam die deze regels overtreedt, wijzigen.",
        },
        {
          type: "p",
          text: "We verwijderen inactieve accounts niet. Je kunt je account op elk moment verwijderen in de game, via je profiel, of via onze [pagina voor gegevensverwijdering](/datadeletion). Verwijdering is definitief en omvat je voortgang, virtuele valuta en items.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. Je licentie om te spelen",
      blocks: [
        {
          type: "p",
          text: "We verlenen je een persoonlijke, niet-exclusieve, niet-overdraagbare licentie om de game te installeren en te spelen op apparaten die je bezit of beheert, voor je eigen vermaak. De game, zijn illustraties, geluiden, teksten, code en ontwerp behoren toe aan Geofast Games of onze licentiegevers en worden beschermd door het intellectuele-eigendomsrecht. Je mag geen enkel deel van de game kopiëren, wijzigen, verspreiden, verkopen of verhuren, of het aan reverse engineering onderwerpen, behalve waar de wet dat uitdrukkelijk toestaat.",
        },
        {
          type: "p",
          text: "De game draait op de Android- en iOS-versies die in de stores staan vermeld. Online spelen vereist een redelijk recente versie van de game: we brengen updates uit via de stores, en een verouderde versie kan de toegang tot onlinefuncties verliezen tot ze is bijgewerkt.",
        },
        {
          type: "p",
          text: "Je mag video's en screenshots van je spel opnemen, streamen en publiceren, ook op platforms waar je geld verdient met advertenties of lidmaatschappen. Doe je content niet voor als gemaakt of goedgekeurd door ons, verkoop geen merchandise met onze illustraties en toon geen cheats of exploits. We kunnen je vragen content te verwijderen die deze regels of de wet overtreedt.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Gedragsregels",
      blocks: [
        { type: "p", text: "Speel eerlijk en behandel andere spelers fatsoenlijk. Je mag niet:" },
        {
          type: "ul",
          items: [
            "cheats, exploits, bots, automatisering, aangepaste clients of andere tools gebruiken die de game of zijn servers verstoren;",
            "bugs uitbuiten om een voordeel te behalen in plaats van ze te melden;",
            "samenspelen met andere spelers, gevechten manipuleren, overwinningen ruilen of op een andere manier klassementen, ranglijsten of beloningen beïnvloeden, ook niet met extra accounts;",
            "accounts delen, verkopen, kopen of overdragen, of virtuele items buiten de game verhandelen;",
            "andere spelers lastigvallen, bedreigen, beledigen of pesten, of haatdragende, seksuele, gewelddadige of anderszins kwetsende content plaatsen;",
            "je voordoen als andere spelers, onze medewerkers of eender welke persoon of organisatie;",
            "spammen, adverteren of links naar schadelijke content delen;",
            "persoonlijke gegevens of inloggegevens van andere spelers vragen of verzamelen, of je eigen gegevens of die van iemand anders in de chat delen;",
            "bewust valse meldingen doen over andere spelers, of de bezwaarprocedure misbruiken;",
            "wedden of gokken op gevechten of op wat dan ook in de game organiseren of eraan deelnemen;",
            "onze servers aanvallen, aftasten of overbelasten, of de verbindingen van andere spelers verstoren;",
            "opzettelijk de game verpesten voor andere spelers;",
            "de game gebruiken voor iets illegaals.",
          ],
        },
        {
          type: "p",
          text: "Rivaliteit, plagen en oorlogstaal tussen naties horen bij de game. Het beledigen van echte mensen, haat tegen groepen, bedreigingen en seksuele content niet.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Chat, gebruikersnamen en content die je maakt",
      blocks: [
        {
          type: "p",
          text: "De game heeft chat tussen spelers. Wat je schrijft, wordt bezorgd bij de andere spelers in die chat en opgeslagen op onze servers voor de termijnen die in de privacyverklaring staan, zodat moderators meldingen kunnen bekijken. Chat is niet privé: andere spelers zien hem, en moderators kunnen hem lezen bij het afhandelen van een melding. Deel geen persoonlijke gegevens in de chat.",
        },
        {
          type: "p",
          text: "Je behoudt de rechten op wat je schrijft. Je geeft ons toestemming om het op te slaan, te tonen, te modereren en waar nodig te verwijderen om de game te laten werken. Je bent verantwoordelijk voor wat je plaatst. We verwijderen content die deze voorwaarden of de wet overtreedt.",
        },
        {
          type: "p",
          text: "Stuur je ons suggesties of ideeën, via de game, onze website of Discord, dan mogen we die vrij gebruiken, zonder betaling of enige verplichting tegenover jou, en zonder je te noemen.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. Hoe we modereren",
      blocks: [
        { type: "p", text: "Moderatie combineert automatische tools en mensen:" },
        {
          type: "ul",
          items: [
            "Voordat een bericht wordt bezorgd, controleert een automatisch filter op onze servers het aan de hand van snelheidslimieten, een woordenlijst en patronen van haatspraak. Een geblokkeerd bericht wordt nooit verstuurd.",
            "Wanneer we die functie hebben ingeschakeld, worden bezorgde berichten ook geclassificeerd door een automatische dienst (Gemini van Google), die het bericht en je recente berichten in die chat als context ontvangt. Gebruikersnamen worden op dezelfde manier gecontroleerd wanneer je ze instelt of wijzigt. Een bericht dat als beledigend wordt geclassificeerd, wordt verwijderd en er wordt een overtreding op je account geregistreerd.",
            "Menselijke moderators bekijken meldingen van spelers en handelen naar wat ze vinden. Hun toegang tot de chatgeschiedenis wordt gelogd.",
          ],
        },
        {
          type: "p",
          text: "De gevolgen van chatovertredingen zijn waarschuwingen en tijdelijke chatblokkeringen. Automatisch vastgestelde overtredingen leiden eerst tot een waarschuwing, en tot een korte chatblokkering als je het snel herhaalt. Chatblokkeringen die door moderators worden opgelegd, zijn tijdelijk en worden langer met elke chatblokkering die je al hebt gekregen, van uren tot maanden. Het record van je overtredingen en chatblokkeringen blijft bij je account zodat herhaald gedrag herkend kan worden.",
        },
        {
          type: "p",
          text: "Telkens wanneer we je chat blokkeren, je content verwijderen of je account bestraffen, laten we je in de game weten wat er is gedaan en waarom, en kun je daartegen bezwaar maken zoals beschreven in onderdeel 9.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Handhaving van fair play",
      blocks: [
        {
          type: "p",
          text: "Acties in een gevecht worden op onze servers gecontroleerd terwijl ze gebeuren, zodat een aangepaste client de uitkomst van een gevecht niet kan veranderen. Een automatische controle bekijkt regelmatig recente gevechtsrecords op spelers die veel vaker in dezelfde gevechten terechtkomen dan het toeval toelaat; zo worden gevechtsmanipulatie en samenspel opgespoord.",
        },
        {
          type: "p",
          text: "Valsspelen en samenspel worden in stappen bestraft. Een speler wordt eerst gewaarschuwd, één keer. Straffen worden alleen zwaarder als er na de waarschuwing nieuw bewijs is en met tijd tussen de stappen: het resetten van klassementen en valuta, dan een volledige reset van de voortgang, en ten slotte een permanente ban van het apparaat, die ook nieuwe accounts blokkeert die ervan worden aangemaakt. Accounts die betrokken zijn bij ernstig of herhaald valsspelen kunnen worden gesloten. Voordat we een reset toepassen, bewaren we een momentopname van het account, zodat een straf die onterecht blijkt, kan worden teruggedraaid. Het record van straffen blijft bij je account.",
        },
        {
          type: "p",
          text: "Elke straf gaat gepaard met een melding in de game waarin staat wat er is gedaan en waarom, en je kunt daartegen bezwaar maken zoals beschreven in onderdeel 9.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Melden en bezwaar maken",
      blocks: [
        {
          type: "p",
          text: "Om een speler of content te melden die deze voorwaarden of de wet overtreedt, gebruik je de knop 'Rapporteren' in de game, het [meldformulier op onze website](/report), of mail je naar [contact@geofastgames.com](mailto:contact@geofastgames.com). Vertel ons wie, wat en waar. We bevestigen dat we je melding hebben ontvangen en laten je zonder onnodige vertraging weten wat we hebben beslist. Meldingen worden afgehandeld door mensen, met behulp van de hierboven beschreven tools, in goed vertrouwen en zonder willekeur.",
        },
        {
          type: "p",
          text: "Vind je dat een chatblokkering, straf, ban of contentverwijdering onterecht was, maak dan binnen een maand bezwaar per e-mail of op Discord. Iemand die niet bij de oorspronkelijke beslissing betrokken was, bekijkt ze opnieuw, en we antwoorden binnen 14 dagen. Was de beslissing onterecht, dan trekken we ze in en herstellen we waar mogelijk wat verloren is gegaan. Niets hier beperkt je recht om de zaak voor te leggen aan een rechtbank of een consumenteninstantie.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Virtuele valuta, items en aankopen",
      blocks: [
        {
          type: "p",
          text: "De game heeft virtuele valuta (diamanten, munten en sterren) en virtuele items zoals wapens, skins, upgrades en Battle Pass-beloningen. Diamanten kunnen met echt geld worden gekocht via Google Play of de App Store; munten en sterren verdien je door te spelen of wissel je in de game om. Prijzen worden vóór je aankoop in je lokale valuta getoond in de store en in de game.",
        },
        {
          type: "p",
          text: "Virtuele valuta en items worden aan je in licentie gegeven voor gebruik in de game. Ze zijn niet je eigendom, hebben geen waarde buiten de game, kunnen niet worden ingewisseld voor echt geld, goederen of diensten, en kunnen niet worden overgedragen aan een ander account of een andere persoon.",
        },
        {
          type: "p",
          text: "Aankopen worden onmiddellijk geleverd. Door te kopen vraag je ons om meteen te leveren en erken je dat het wettelijke herroepingsrecht van 14 dagen niet langer geldt zodra de levering is begonnen. Verder zijn aankopen definitief, behalve waar de wet je een recht op terugbetaling geeft. Verzoeken om terugbetaling richt je aan de store waar je hebt gekocht en die de betaling afhandelt; wij zien je betaalgegevens nooit.",
        },
        {
          type: "p",
          text: "We kunnen virtuele valuta en items om geldige redenen wijzigen, herbalanceren, toevoegen of afschaffen: om de game evenwichtig en leuk te houden, om bugs op te lossen, voor de beveiliging of vanwege wettelijke vereisten. Waar een wijziging iets waarvoor je onlangs hebt betaald aanzienlijk zou beïnvloeden, laten we het je vooraf weten, en waar de wet je door zo'n wijziging het recht geeft om de overeenkomst te beëindigen en terugbetaald te worden, respecteren we dat. Je wettelijke rechten als consument, waaronder het recht op een game die werkt zoals beschreven, blijven onaangetast.",
        },
        {
          type: "p",
          text: "De game heeft geen gedwongen advertenties. Waar de game optionele beloningsadvertenties aanbiedt, is het jouw keuze om er een te bekijken, en we kunnen dat aanbod wijzigen of verwijderen.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. De Battle Pass",
      blocks: [
        {
          type: "p",
          text: "De Battle Pass is een abonnement dat je koopt via Google Play of de App Store. Het wordt elke maand automatisch verlengd tegen de prijs die in de store staat, tot je opzegt. Je kunt op elk moment opzeggen in de abonnementsinstellingen van je store; de pass blijft dan actief tot het einde van de periode die je hebt betaald, en je behoudt de beloningen die je hebt opgehaald. Prijswijzigingen gelden vanaf de volgende verlenging, en de store laat het je weten voordat ze ingaan.",
        },
        {
          type: "p",
          text: "Battle Pass-beloningen worden ontgrendeld door tijdens het seizoen te spelen; een pass geeft op zichzelf niet elke beloning. Terugbetalingen voor abonnementen worden afgehandeld door de store volgens zijn regels en de wet.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Verwijzingsbeloningen en het programma voor contentmakers",
      blocks: [
        {
          type: "p",
          text: "De game beloont je wanneer een nieuwe speler zich aansluit met je verwijzingscode, en beloont die speler ook. Verwijzingsbeloningen zijn bedoeld voor echte nieuwe spelers. Jezelf, je eigen andere accounts of accounts die alleen zijn aangemaakt om de beloning op te strijken doorverwijzen, is niet toegestaan, en beloningen die zo zijn verkregen, worden verwijderd.",
        },
        {
          type: "p",
          text: "Ons programma voor contentmakers beloont spelers die video's over de game publiceren zodra hun content bepaalde kijkcijfers bereikt. De drempels, beloningen en deelnamevoorwaarden worden in de game gepubliceerd en kunnen veranderen. Beloningen worden door ons handmatig gecontroleerd en toegekend, en bij twijfel beslissen wij. Beloningen die worden geclaimd met vervalste weergaven, of met content die deze voorwaarden overtreedt, worden geweigerd of verwijderd.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Diensten van derden",
      blocks: [
        {
          type: "p",
          text: "De game gebruikt Google Play en de App Store voor downloads, betalingen en abonnementen; Google en Apple voor optioneel aanmelden; Google AdMob voor optionele beloningsadvertenties; en Discord voor onze communityserver. Je gebruik van die diensten valt onder hun eigen voorwaarden en privacybeleid, waarover wij geen zeggenschap hebben.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Beschikbaarheid en wijzigingen aan de game",
      blocks: [
        {
          type: "p",
          text: "We werken eraan om de game beschikbaar te houden, maar we kunnen niet beloven dat hij nooit onderbroken wordt. Onlinefuncties kunnen onbeschikbaar zijn tijdens onderhoud, door technische problemen of om redenen buiten onze controle. Offlinemodi blijven werken zonder verbinding.",
        },
        {
          type: "p",
          text: "De game is een live dienst en verandert in de loop van de tijd: we voegen functies, wapens, naties, seizoenen en events toe, passen ze aan en verwijderen ze om de game evenwichtig en fris te houden, om problemen op te lossen, voor de beveiliging en om aan wettelijke vereisten te voldoen. Wijzigingen die aanzienlijk beïnvloeden hoe je kunt spelen, worden vooraf in de game aangekondigd. Je wettelijke rechten blijven onaangetast.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Beëindiging van de overeenkomst",
      blocks: [
        {
          type: "p",
          text: "Je kunt op elk moment stoppen met spelen door de game te verwijderen, en je kunt je account verwijderen in de game, via je profiel, of via onze [pagina voor gegevensverwijdering](/datadeletion). Het verwijderen van je account wist je voortgang, virtuele valuta en items definitief; daarvoor wordt niets terugbetaald.",
        },
        {
          type: "p",
          text: "We kunnen je account schorsen of sluiten als je deze voorwaarden ernstig of herhaaldelijk overtreedt, of als de wet dat vereist. Behalve in ernstige gevallen, zoals valsspelen, misbruik of een wettelijke verplichting, waarschuwen we je eerst en geven we je de kans om te reageren. We laten je de reden weten en hoe je bezwaar kunt maken (onderdeel 9). Het sluiten van een account beëindigt je licentie en je toegang tot de virtuele valuta en items ervan.",
        },
        {
          type: "p",
          text: "Als we de game ooit moeten stopzetten, kondigen we dat minstens 30 dagen vooraf aan in de game en op onze website. Virtuele valuta en items eindigen samen met de game. Je wettelijke rechten met betrekking tot recente aankopen blijven onaangetast.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. Onze aansprakelijkheid",
      blocks: [
        {
          type: "p",
          text: "We zijn tegenover jou aansprakelijk zoals de wet dat bepaalt. We sluiten onze aansprakelijkheid niet uit en beperken ze niet voor overlijden of lichamelijk letsel veroorzaakt door onze nalatigheid, voor bedrog, voor opzet of grove schuld, of voor iets anders dat niet kan worden uitgesloten onder het recht dat jou als consument beschermt, waaronder je recht op een game die overeenstemt met wat is beloofd.",
        },
        {
          type: "p",
          text: "Daarbuiten zijn we alleen aansprakelijk voor schade die voorzienbaar was toen je deze voorwaarden aanvaardde en die voortvloeit uit onze schending ervan. De game is gratis te spelen en wordt aangeboden als live dienst; we zijn niet aansprakelijk voor verliezen door onderbrekingen, door het gedrag van andere spelers of door gebeurtenissen buiten onze redelijke controle, behalve waar de wet anders bepaalt.",
        },
        {
          type: "p",
          text: "Jij bent aansprakelijk voor schade die je ons toebrengt door deze voorwaarden te overtreden, voor zover de wet dat toestaat.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Privacy",
      blocks: [
        {
          type: "p",
          text: "Hoe we je gegevens verzamelen en gebruiken, staat in onze [privacyverklaring](/privacy). Ze maakt geen deel uit van deze voorwaarden en hangt niet af van je instemming ermee: ze vertelt je wat we doen en wat je rechten zijn.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Wijzigingen van deze voorwaarden",
      blocks: [
        {
          type: "p",
          text: "We wijzigen deze voorwaarden wanneer de game, de wet of onze diensten veranderen, of om ze duidelijker te maken. Bij wijzigingen die je rechten of je manier van spelen raken, kondigen we ze minstens 30 dagen voordat ze ingaan aan in de game, en kun je tot dan stoppen met spelen en je account verwijderen als je niet akkoord gaat. Verduidelijkingen en correcties die geen gevolgen voor je hebben, gaan in bij publicatie. De datum bovenaan vertelt je wanneer de huidige versie is ingegaan.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Recht, geschillen en klachten",
      blocks: [
        {
          type: "p",
          text: "Op deze voorwaarden is het Belgische recht van toepassing. Woon je in een ander land, dan behoud je de bescherming van het dwingende consumentenrecht van dat land, en kun je een vordering instellen bij de rechtbanken van de plaats waar je woont. Wij kunnen alleen daar een vordering tegen jou instellen.",
        },
        {
          type: "p",
          text: "Heb je een klacht, neem dan eerst contact met ons op via [contact@geofastgames.com](mailto:contact@geofastgames.com) of op Discord; de meeste dingen kunnen rechtstreeks worden opgelost. Je kunt ook terecht bij een instantie voor consumentengeschillen in je land; in België is dat de Consumentenombudsdienst (Service de Médiation pour le Consommateur). Deze voorwaarden bevatten geen arbitragebeding en geen afstand van collectieve vorderingen.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Slotbepalingen",
      blocks: [
        {
          type: "p",
          text: "We nemen contact met je op via meldingen in de game, op onze website en, als je een e-mailadres hebt gekoppeld, per e-mail. Jij bereikt ons via [contact@geofastgames.com](mailto:contact@geofastgames.com); dat is ook ons adres voor juridische kennisgevingen en ons contactpunt voor overheden.",
        },
        {
          type: "p",
          text: "Blijkt een deel van deze voorwaarden ongeldig, dan blijft de rest van kracht. Als we een regel op een bepaald moment niet handhaven, kunnen we dat later nog steeds doen. We mogen deze overeenkomst overdragen aan een onderneming die de game overneemt, op voorwaarde dat je rechten niet worden verminderd; jij mag je account of deze overeenkomst niet overdragen. Deze voorwaarden en de privacyverklaring vormen de volledige overeenkomst tussen jou en ons over de game.",
        },
      ],
    },
  ],
};
