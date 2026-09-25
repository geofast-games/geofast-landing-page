import type { PrivacyContent } from "./types";

// Finnish. Informal "sina" (sinuttelu) throughout, as in the game's Finnish
// translation and as is normal in Finnish consumer-facing legal text. Legal
// vocabulary follows the official Finnish text of the GDPR: "rekisterinpitaja",
// "tietosuojavastaava", "oikeusperuste", "oikeutettu etu", "sopimuksen
// tayttaminen", "valvontaviranomainen", "vakiosopimuslausekkeet", "oikaisu",
// "poistaminen", "kasittelyn rajoittaminen", "siirto jarjestelmasta toiseen",
// "vastustaminen". The document is called "Tietosuojakaytanto", the standard
// name, rather than the game menu's "Yksityisyydensuoja". Game terms follow
// the game: "taistelu", "kansakunta", "chat", "kolikot", "tulostaulukot",
// "kauppa", "kausi", "taistelutoisto" for replay; the game translates Battle
// Pass as "Taistelupassi", so the policy does too. Mutes are "mykistykset",
// bans "porttikiellot". Finnish quotation marks (closing marks on both sides).
export const fi: PrivacyContent = {
  lang: "fi",
  label: "Suomi",
  pageTitle: "Tietosuojakäytäntö | Geofast: Battle of Nations",
  metaDescription:
    "Mitä tietoja Geofast: Battle of Nations kerää, miten niitä käytetään, kenelle niitä luovutetaan ja miten pyydät niiden poistamista.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Tietosuojakäytäntö",
  lastUpdated: "Päivitetty viimeksi: 25. syyskuuta 2026",
  sectionsLabel: "Osiot",
  languageLabel: "Kieli",
  legalBasisLabel: "Oikeusperuste:",
  contact: {
    line: "Kysyttävää? Kysy Discordissa. Tietojasi koskevat pyynnöt: lähetä meille sähköpostia.",
    discord: "Kysy Discordissa",
    back: "Takaisin Geofast Gamesiin",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Keitä olemme",
      blocks: [
        {
          type: "p",
          text: "Geofast Games on Belgiassa toimiva itsenäinen pelistudio. Teemme *Geofast: Battle of Nations* -peliä ja ylläpidämme tätä verkkosivustoa. Olemme tässä käytännössä kuvattujen henkilötietojen rekisterinpitäjä: me päätämme, mitä kerätään ja miksi.",
        },
        {
          type: "p",
          text: "Tavoitat meidät osoitteesta [contact@geofastgames.com](mailto:contact@geofastgames.com). Olemme kahden hengen studio emmekä ole nimittäneet tietosuojavastaavaa; samasta osoitteesta tavoitat tiedoistasi vastaavat henkilöt.",
        },
        {
          type: "p",
          text: "Tämä käytäntö koskee peliä iOS:llä ja Androidilla sekä verkkosivustoa geofastgames.com. Se ei koske Discordia, App Storea, Google Playta tai muita palveluja, joita käytät pelin ohella; niillä on omat käytäntönsä, joihin linkitämme siellä, missä ne tulevat esiin.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "Lyhyesti",
      blocks: [
        {
          type: "table",
          head: ["Mitä", "Miksi", "Kuinka pitkään"],
          rows: [
            [
              "Tili: laitetunniste, käyttäjänimesi sekä halutessasi sähköpostiosoite ja salasana tai Google- tai Apple-kirjautuminen",
              "Tilisi ylläpitämiseen ja verkkopelaamisen mahdollistamiseen",
              "Kunnes poistat tilisi; emme poista passiivisia tilejä",
            ],
            [
              "Pelaaminen: ottelut, sijoitukset, esineet, ostovahvistukset",
              "Pelin, tulostaulukoiden ja varastosi ylläpitämiseen",
              "Kunnes poistat tilisi; taistelutoistot 7 päivää, sen jälkeen arkistoidaan",
            ],
            [
              "Chat-viestit",
              "Viestien välittämiseen ja väärinkäytösten moderointiin",
              "Taistelu-chat 15 päivää, sen jälkeen poistetaan; muu chat 90 päivää, sen jälkeen arkistoidaan",
            ],
            [
              "IP-osoite, laitetunniste, puhelimen malli",
              "Huijaamisen ja salaisen yhteistyön havaitsemiseen ja porttikieltojen toimeenpanoon",
              "Ottelutietueet 30 päivää ja ensikäynnistyksen tietue 90 päivää, sen jälkeen arkistoidaan; laitetunniste säilyy tililläsi; porttikieltomerkintä säilyy, kunnes poistamme porttikiellon",
            ],
            [
              "Push-ilmoitusten tunniste (token)",
              "Ilmoitusten lähettämiseen, jotka voit kytkeä pois",
              "Kunnes tunniste lakkaa toimimasta (esimerkiksi pelin poistamisen jälkeen) tai poistat tilisi",
            ],
            [
              "Analytiikkatapahtumat siitä, miten pelaat",
              "Pelitapojen ymmärtämiseen ja ongelmien korjaamiseen",
              "400 päivää, sen jälkeen arkistoidaan",
            ],
            [
              "Mainostunniste, jonka Google AdMobin ohjelmisto lukee",
              "Palkintomainosten lataamiseen ja näyttämiseen, joita voit halutessasi katsoa",
              "Lähetetään Googlelle pelin käynnistyessä ja mainoksen latautuessa; emme tallenna sitä; AdMobin käytäntö pätee",
            ],
          ],
        },
        { type: "lead", text: "Neljä asiaa, jotka kannattaa tietää ennen kuin jatkat" },
        {
          type: "ul",
          items: [
            "Chat ei ole yksityinen. Viestit säilytetään enintään 15 päivää (taistelu-chat) tai 90 päivää (muu chat), jotta moderaattorit voivat käsitellä ilmoituksia; jokainen viesti kulkee automaattisen suodattimen läpi, ja kun otamme toiminnon käyttöön, viestit luokittelee lisäksi Googlen Gemini-palvelu.",
            "Tallennamme IP-osoitteesi ja laitetunnisteen, kun pelaat, huijaamisen havaitsemiseksi ja porttikieltojen pitämiseksi voimassa.",
            "Palvelimemme sijaitsevat Frankfurtissa, Saksassa. Muutama käyttämämme palveluntarjoaja (Google, Apple) käsittelee tietoja Euroopan unionin ulkopuolella.",
            "Tietueet, jotka vanhenevat aktiivisesta tietokannastamme (muu chat kuin taistelu-chat, ottelutietueet, analytiikka ja muut), arkistoidaan Frankfurtissa sen sijaan, että ne tuhottaisiin. Katso ”Kuinka pitkään säilytämme tietoja”.",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Tilisi",
      blocks: [
        {
          type: "p",
          text: "Kun pelaat verkossa ensimmäisen kerran, luomme sinulle tilin ja liitämme sen laitteellasi luotuun tunnisteeseen. Pelaamiseen ei tarvita mitään muuta, eikä sinun tarvitse koskaan kertoa meille nimeäsi.",
        },
        {
          type: "p",
          text: "Valitset käyttäjänimen, jonka muut pelaajat näkevät. Sen lisäksi tallennamme sen, mitä peli tarvitsee toimiakseen: edistymisesi, asetuksesi ja kaverisi sekä käyttämäsi pelin version.",
        },
        {
          type: "p",
          text: "Jos haluat säilyttää edistymisesi laitteesta toiseen, voit lisätä sähköpostiosoitteen ja salasanan tai kirjautua Google- tai Apple-tilillä. Salasanat tallennetaan tiivisteinä (hash), mikä tarkoittaa, että emme voi lukea niitä. Googlelta tai Applelta saamme vain sen, mitä tilin liittämiseen tarvitaan, ja käytämme sähköpostiosoitettasi vain tilin suojaamiseen ja salasanan nollaamiseen.",
        },
        {
          type: "p",
          text: "Laitetunniste on pakollinen verkossa pelaamiseen. Kaikki muu on vapaaehtoista.",
        },
        { type: "basis", text: "kanssasi tehdyn sopimuksen täyttäminen (pelin tarjoaminen)." },
      ],
    },
    {
      id: "gameplay",
      title: "Pelaaminen, edistyminen ja ostokset",
      blocks: [
        {
          type: "p",
          text: "Verkkotaistelujen, tulostaulukoiden ja varastosi ylläpitämiseksi tallennamme peliedistymisesi: ottelutulokset, sijoitukset, omistamasi esineet ja valuutat sekä edistymisesi tapahtumissa ja kausissa. Viimeaikaiset taistelusi säilytetään historiana; taistelutoistot poistuvat aktiivisesta tietokannasta 7 päivän jälkeen ja arkistoidaan.",
        },
        {
          type: "p",
          text: "Maksut hoitaa kokonaan Google Play tai App Store. Emme koskaan näe kortti- tai pankkitietojasi. Kauppa kertoo meille, mitä ostit, ja tallennamme tämän vahvistuksen sekä Taistelupassin osalta tilauksen tilan, jotta voimme toimittaa esineet, palauttaa ostokset ja auttaa tukiasioissa.",
        },
        {
          type: "basis",
          text: "kanssasi tehdyn sopimuksen täyttäminen. Ostotositteet, jotka meidän on säilytettävä kirjanpitoa varten, säilytämme lakisääteisten velvoitteidemme perusteella.",
        },
      ],
    },
    {
      id: "chat",
      title: "Chat ja moderointi",
      blocks: [
        {
          type: "p",
          text: "Pelissä on pelaajien välinen chat. Viestit välitetään kyseisen chatin muille pelaajille ja tallennetaan palvelimillemme: taistelun sisäinen chat 15 päiväksi, minkä jälkeen se poistetaan; kaikki muu chat 90 päiväksi, minkä jälkeen se arkistoidaan (katso ”Kuinka pitkään säilytämme tietoja”). Säilytämme ne, jotta moderaattorit voivat tutkia ilmoituksia väärinkäytöksistä tai huijaamisesta. Jokainen moderaattorin haku kirjataan lokiin.",
        },
        {
          type: "p",
          text: "Moderointi toimii kolmessa vaiheessa. Ensin jokainen viesti kulkee ennen välittämistä palvelimillamme automaattisen suodattimen läpi (nopeusrajoitukset, sanalista ja vihapuheen kaavat); estettyä viestiä ei lähetetä koskaan. Toiseksi, kun otamme toiminnon käyttöön, välitetyt viestit luokittelee lisäksi Googlen Gemini-palvelu, joka saa viestin ja viimeaikaiset viestisi kyseisessä chatissa kontekstiksi. Gemini tarkistaa käyttäjänimet, kun asetat tai muutat niitä. Viesti, jonka Gemini luokittelee loukkaavaksi, poistetaan, ja rikkomus kirjataan. Kolmanneksi ihmismoderaattorit käsittelevät ilmoitukset.",
        },
        {
          type: "p",
          text: "Rikkomukset johtavat varoituksiin ja tilapäisiin chat-mykistyksiin [käyttöehtojemme](/termsofservice) mukaisesti. Merkintä rikkomuksistasi ja mykistyksistäsi säilyy tililläsi, jotta toistuva käytös voidaan tunnistaa. Nämä automaattiset vaiheet vaikuttavat vain mahdollisuuteesi käyttää chatia. Jos pidät päätöstä virheellisenä, lähetä meille sähköpostia tai kysy Discordissa, niin ihminen tarkastelee asiaa.",
        },
        {
          type: "p",
          text: "Älä jaa henkilökohtaisia tietoja chatissa. Muut pelaajat näkevät, mitä kirjoitat.",
        },
        {
          type: "basis",
          text: "oikeutettu etumme pitää peli turvallisena ja reiluna kaikille sen pelaajille.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Reilu peli ja turvallisuus",
      blocks: [
        {
          type: "p",
          text: "Huijaaminen pilaa kilpailullisen pelin kaikilta, joten säilytämme pienen määrän teknisiä tietoja sen havaitsemiseksi ja porttikieltojen pitämiseksi voimassa:",
        },
        {
          type: "ul",
          items: [
            "Kun käynnistät pelin ensimmäisen kerran, tallennamme laitetunnisteesi, puhelimen mallin, alustan ja IP-osoitteesi sekä suorittamasi opastuksen vaiheet. Tämä tietue poistuu aktiivisesta tietokannasta 90 päivän jälkeen ja arkistoidaan.",
            "Jokaisesta verkko-ottelusta tallennamme, mitkä tilit osallistuivat siihen, laitetunnisteineen ja IP-osoitteineen. Automaattinen tarkistus käy säännöllisesti läpi viimeaikaiset tietueet etsien pelaajapareja, jotka päätyvät samoihin otteluihin selvästi useammin kuin sattuma sallisi. Ottelutietueet poistuvat aktiivisesta tietokannasta 30 päivän jälkeen ja arkistoidaan.",
            "Havaittu huijaaminen johtaa rangaistuksiin, porttikieltoon asti, [käyttöehtojemme](/termsofservice) mukaisesti. Rangaistushistoria säilyy tililläsi, ja voit pyytää ihmistä tarkastelemaan mitä tahansa rangaistusta.",
            "Laitteen porttikielto estää myös uudet tilit kyseiseltä laitteelta. Porttikieltomerkinnöillä ei ole päättymispäivää; poistamme ne, kun tarkastelu osoittaa porttikiellon olleen virheellinen.",
          ],
        },
        {
          type: "p",
          text: "Itse taistelutoiminnot vahvistetaan palvelimillamme sitä mukaa kuin ne tapahtuvat, mikä ei vaadi mitään tietoja itse ottelun lisäksi. Emme käytä IP-osoitettasi sijaintisi määrittämiseen. Kun liityt ensimmäisen kerran, peli ehdottaa kansakuntaa laitteesi kieli- ja alueasetuksen perusteella; tämä luetaan laitteella, ja voit valita sen sijaan minkä tahansa kansakunnan.",
        },
        {
          type: "basis",
          text: "oikeutettu etumme ehkäistä huijaamista, petoksia ja väärinkäytöksiä sekä pitää palvelu turvallisena.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Push-ilmoitukset",
      blocks: [
        {
          type: "p",
          text: "Jos sallit ilmoitukset, laitteesi antaa meille push-tunnisteen, jonka tallennamme ja jota käytämme kertoaksemme sinulle pelin tapahtumista: tiliisi, kavereihisi ja kansakuntaasi liittyvistä asioista, uusista tapahtumista ja kausista sekä muistutuksena, jos olet ollut jonkin aikaa poissa.",
        },
        {
          type: "p",
          text: "Ilmoitukset välitetään Androidilla Firebase Cloud Messaging -palvelun (Google) ja iOS:llä Apple Push Notification service -palvelun kautta. Voit kytkeä ne pois milloin tahansa laitteesi asetuksista, jolloin niitä ei enää näytetä; tunniste itsessään säilyy, kunnes se lakkaa olemasta voimassa (esimerkiksi kun poistat pelin) tai poistat tilisi. Välitetyt ilmoitukset säilytetään puolellamme 30 päivää, sen jälkeen ne arkistoidaan.",
        },
        {
          type: "basis",
          text: "oikeutettu etumme pitää sinut ajan tasalla tilistäsi ja pelaamastasi pelistä, ja voit kieltäytyä yhdellä napautuksella.",
        },
      ],
    },
    {
      id: "ads",
      title: "Vapaaehtoiset palkintomainokset",
      blocks: [
        {
          type: "p",
          text: "Pelissä ei ole pakotettuja mainoksia: mikään ei keskeytä taistelua tai valikkoa. Kauppa tarjoaa palkintomainoksia, jotka toistetaan vain, kun napautat niitä, pelin sisäistä valuuttaa vastaan.",
        },
        {
          type: "p",
          text: "Mainokset toimittaa Google AdMob. Sen ohjelmisto on osa peliä, käynnistyy sen mukana ja lataa mainoksen taustalla, jotta sellainen on valmiina, jos napautat. Tuolloin, katsotpa mainoksia koskaan tai et, AdMob saa mainostunnisteesi ja IP-osoitteestasi johdetun karkean sijainnin; jos katsot mainoksen, myös sen, miten toimit sen kanssa. iOS:llä järjestelmä pyytää lupaasi ensimmäisen käynnistyksen yhteydessä, ennen kuin mainostunnistetta käytetään seurantaan; Androidilla voit nollata tai poistaa mainostunnisteen laitteesi asetuksista. Google kuvaa, mitä se tekee näillä tiedoilla, [tietosuojakäytännössään](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "suostumuksesi, jonka annat laitteesi käyttöoikeus- ja mainosasetuksissa ja jonka voit peruuttaa siellä milloin tahansa.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analytiikka",
      blocks: [
        {
          type: "p",
          text: "Ymmärtääksemme, miten peliä pelataan, ja löytääksemme ongelmia peli lähettää tapahtumia omille palvelimillemme: istunnon alku ja loppu, pelatut ja päättyneet taistelut, opastuksen edistyminen, ostokset kaupassa, avatut ilmoitukset, virheet sekä Androidilla kaupan viittaustieto, jonka kautta tulit peliin. Jokainen tapahtuma sisältää tilitunnisteesi, laitetunnisteen, alustan, puhelimen mallin ja pelin version. Emme käytä Google Analyticsia, Firebase Analyticsia tai muita kolmansien osapuolten analytiikkapalveluja. Kaatumisraportit saamme Google Playn ja App Storen kautta niiden omien käytäntöjen mukaisesti.",
        },
        {
          type: "p",
          text: "Analytiikkatapahtumia säilytetään 400 päivää. Niistä johdetut tilastot eivät sisällä henkilötietoja, ja niitä säilytetään toistaiseksi.",
        },
        {
          type: "basis",
          text: "oikeutettu etumme parantaa peliä ja pitää se hyvin toimivana.",
        },
      ],
    },
    {
      id: "support",
      title: "Tuki ja yhteisö",
      blocks: [
        {
          type: "p",
          text: "Jos lähetät meille sähköpostia, säilytämme viestinvaihdon niin pitkään kuin sen käsittely kestää.",
        },
        {
          type: "p",
          text: "Discord-palvelimemme toimii Discordissa [Discordin tietosuojakäytännön](https://discord.com/privacy) mukaisesti. Sen moderaattorit voivat hakea pelin sisäistä chat-historiaa ilmoitusten käsittelyä varten, kuten kohdassa ”Chat ja moderointi” kuvataan.",
        },
        {
          type: "basis",
          text: "kanssasi tehdyn sopimuksen täyttäminen (tuki) ja oikeutettu etumme ylläpitää yhteisöä pelin ympärillä.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Kenelle luovutamme tietoja",
      blocks: [
        {
          type: "p",
          text: "Emme myy henkilötietoja emmekä jaa niitä tietojen välittäjille. Alla olevat yritykset käsittelevät tietoja puolestamme tai saavat niitä pelin toimintatavan vuoksi:",
        },
        {
          type: "table",
          head: ["Palveluntarjoaja", "Mihin", "Missä"],
          rows: [
            ["DigitalOcean", "Pelipalvelimiemme ja tietokantamme ylläpito", "Frankfurt, Saksa"],
            [
              "Gcore",
              "Sisällönjakeluverkko, joka kuljettaa osan pelin liikenteestä palvelimillemme; se näkee IP-osoitteesi siirron aikana",
              "Reunapalvelimia eri puolilla maailmaa; yrityksen kotipaikka on Luxemburg",
            ],
            [
              "Google Cloud Storage",
              "Vanhentuneiden tietueiden arkisto (katso ”Kuinka pitkään säilytämme tietoja”)",
              "Frankfurt, Saksa",
            ],
            [
              "Google (Gemini API)",
              "Käyttäjänimien ja, kun toiminto on käytössä, chat-viestien luokittelu",
              "Maailmanlaajuisesti: Google ei sitoudu tämän API:n osalta mihinkään alueeseen",
            ],
            ["Google AdMob", "Palkintomainokset, jotka päätät katsoa", "Yhdysvallat"],
            ["Google Firebase Cloud Messaging", "Push-ilmoitusten välitys Androidilla", "Yhdysvallat"],
            ["Apple Push Notification service", "Push-ilmoitusten välitys iOS:llä", "Yhdysvallat"],
            ["Zoho Mail", "Sähköpostimme, mukaan lukien salasanan nollausviestit", "Euroopan unioni"],
            [
              "Google Play ja App Store",
              "Kirjautuminen, maksut, tilaukset ja kaatumisraportit",
              "Niiden omien käytäntöjen mukaisesti",
            ],
          ],
        },
        {
          type: "p",
          text: "Jokainen näistä palveluntarjoajista on sopimuksella velvoitettu suojaamaan tietosi vähintään yhtä hyvin kuin tässä käytännössä kuvataan ja käyttämään niitä vain mainittuun tarkoitukseen. Muut pelaajat näkevät käyttäjänimesi, pelin sisäisen profiilisi ja sen, mitä kirjoitat chatissa. Viranomaisille luovutamme tietoja vain lain niin vaatiessa.",
        },
      ],
    },
    {
      id: "storage",
      title: "Missä tietojasi säilytetään",
      blocks: [
        {
          type: "p",
          text: "Palvelimemme, tietokantamme ja varmuuskopiomme sijaitsevat Frankfurtissa, Saksassa, ja vanhentuneiden tietueiden arkistomme on Google Cloud Storage -säilössä samassa kaupungissa. Tietosi pysyvät Euroopan unionissa, paitsi silloin, kun edellä mainittu palveluntarjoaja käsittelee niitä Yhdysvalloissa tai, Gemini API:n osalta, missä tahansa Google sitä ajaa. Näissä siirroissa nojaamme Euroopan komission vakiosopimuslausekkeisiin ja, kun palveluntarjoaja on sertifioitu, EU:n ja Yhdysvaltojen väliseen tietosuojakehykseen (Data Privacy Framework).",
        },
      ],
    },
    {
      id: "retention",
      title: "Kuinka pitkään säilytämme tietoja",
      blocks: [
        {
          type: "table",
          head: ["Tiedot", "Säilytysaika"],
          rows: [
            ["Tili, edistyminen, varasto, kaverit, ostovahvistukset", "Kunnes poistat tilisi"],
            [
              "Chat-rikkomusten ja mykistysten historia, salaisesta yhteistyöstä annettujen rangaistusten historia",
              "Tilin koko elinkaari (mykistykset itsessään ovat tilapäisiä)",
            ],
            ["Laitteiden porttikiellot", "Kunnes poistamme ne"],
            ["Analytiikkatapahtumat", "400 päivää, sen jälkeen arkistoidaan"],
            ["Muu chat kuin taistelu-chat, mukaan lukien yksityisviestit", "90 päivää, sen jälkeen arkistoidaan"],
            [
              "Kolikko- ja XP-tapahtumien historia",
              "90 päivää (XP-historia: 90 päivää viimeisestä toiminnastasi), sen jälkeen arkistoidaan",
            ],
            ["Ensikäynnistyksen tietue IP-osoitteella ja puhelimen mallilla", "90 päivää, sen jälkeen arkistoidaan"],
            [
              "Ottelukohtaiset osallistujatietueet IP-osoitteella ja laitetunnisteella",
              "30 päivää, sen jälkeen arkistoidaan",
            ],
            ["Välitetyt ilmoitukset, päivittäinen edistyminen", "30 päivää, sen jälkeen arkistoidaan"],
            ["Taistelu-chat", "15 päivää, sen jälkeen poistetaan"],
            ["Taistelutoistot", "7 päivää, sen jälkeen arkistoidaan"],
            ["Kaupan selaustapahtumat", "3 päivää, sen jälkeen poistetaan"],
          ],
        },
        {
          type: "p",
          text: "Rivit, joissa on merkintä ”sen jälkeen arkistoidaan”, kopioidaan Frankfurtissa sijaitsevaan arkistoon ennen kuin ne poistuvat aktiivisesta tietokannasta. Käytämme arkistoa tilastoihin ja aiempien väärinkäytösten tutkimiseen; pääsy siihen on rajattu kahdelle kehittäjälle, eikä mihinkään sen sisällöstä pääse pelistä. Säilytämme arkistoituja tietueita niin pitkään kuin niitä tarvitaan näihin tarkoituksiin ja poistamme ne, kun niitä ei enää tarvita.",
        },
        {
          type: "p",
          text: "Kun poistat tilisi, poistamme henkilötietosi aktiivisista järjestelmistä 30 päivän kuluessa. Säilytämme tiedot, jotka meidän on lain mukaan säilytettävä, kuten ostotositteet kirjanpitoa varten, sekä tilastot, joista sinua ei enää voi tunnistaa.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Oikeusperusteemme yhdessä paikassa",
      blocks: [
        {
          type: "p",
          text: "Yleisen tietosuoja-asetuksen mukaan tarvitsemme oikeusperusteen kaikelle, mitä teemme tiedoillasi. Perusteemme ovat:",
        },
        {
          type: "ul",
          items: [
            "**Sopimus**: tilisi, pelin, ostostesi ja tuen ylläpito. Ilman näitä tietoja ei ole peliä, jota pelata.",
            "**Oikeutettu etu**: huijaamisen ja väärinkäytösten ehkäisy, chatin moderointi, palvelun turvallisuus, pelitapojen ymmärtäminen ja tiedottaminen tilistäsi. Etumme on reilu, turvallinen ja toimiva peli; pidämme tiedot vähäisinä ja lyhytikäisinä, ja voit vastustaa käsittelyä milloin tahansa.",
            "**Suostumus**: kohdennettu mainonta palkintomainoksissa, annettu laitteesi asetuksissa ja peruutettavissa siellä.",
            "**Lakisääteinen velvoite**: kirjanpitoaineiston säilyttäminen ja viranomaisten lainmukaisiin pyyntöihin vastaaminen.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Oikeutesi",
      blocks: [
        { type: "p", text: "Sinulla on oikeus:" },
        {
          type: "ul",
          items: [
            "**saada pääsy** sinusta tallentamiimme henkilötietoihin ja saada niistä kopio;",
            "**oikaista** virheelliset tiedot;",
            "**poistaa** tilisi ja tietosi;",
            "**saada** tietosi siirrettävässä, koneellisesti luettavassa muodossa;",
            "**vastustaa** oikeutettuihin etuihimme perustuvaa käsittelyä ja **rajoittaa** käsittelyä sillä aikaa, kun selvitämme asiaa;",
            "**peruuttaa suostumuksesi** mainontaan milloin tahansa laitteesi asetuksista ja kytkeä ilmoitukset pois samalla tavalla.",
          ],
        },
        {
          type: "p",
          text: "Käyttääksesi oikeuttasi lähetä sähköpostia osoitteeseen [contact@geofastgames.com](mailto:contact@geofastgames.com) tiliisi liitetystä osoitteesta tai, jos tililläsi ei ole sähköpostiosoitetta, kerro meille käyttäjänimesi, niin varmennamme sinut pelin sisällä. Poistopyynnön voit aloittaa myös [tietojen poistosivultamme](/datadeletion). Vastaamme kuukauden kuluessa.",
        },
        {
          type: "p",
          text: "Jos katsot, että käsittelemme tietojasi lainvastaisesti, voit tehdä valituksen Belgian tietosuojaviranomaiselle (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Bryssel, [dataprotectionauthority.be](https://www.dataprotectionauthority.be), tai asuinmaasi valvontaviranomaiselle.",
        },
      ],
    },
    {
      id: "children",
      title: "Lapset",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* ei ole suunnattu alle 13-vuotiaille lapsille, emmekä tietoisesti kerää heiltä henkilötietoja. Belgiassa 13 vuotta on ikä, josta alkaen voit itse antaa suostumuksen verkkopalveluihin. Pelillä on kussakin kaupassa ikäluokitus, joka kuvaa sen verkkochatia ja vapaaehtoisia ostoksia; vanhemmat voivat rajoittaa ostoksia ja lapsen asennettavia sovelluksia Google Playn ja App Storen lapsilukolla.",
        },
        {
          type: "p",
          text: "Jos uskot, että alle 13-vuotiaalla lapsella on tili, lähetä meille sähköpostia, niin poistamme sen.",
        },
      ],
    },
    {
      id: "security",
      title: "Turvallisuus",
      blocks: [
        {
          type: "p",
          text: "Kaikki liikenne pelin, tämän verkkosivuston ja palvelimiemme välillä on salattu (TLS). Salasanat tallennetaan tiivisteinä. Tietokantaan ei pääse internetistä. Pääsy palvelimiin ja tietoihin on rajattu kahdelle kehittäjälle; moderaattorit näkevät chat-historian vain työkalun kautta, joka kirjaa jokaisen haun lokiin. Mikään järjestelmä ei ole täysin turvallinen; jos saamme joskus tiedon tietojasi koskevasta tietoturvaloukkauksesta, ilmoitamme siitä sinulle ja viranomaiselle lain edellyttämällä tavalla.",
        },
      ],
    },
    {
      id: "website",
      title: "Tämä verkkosivusto",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com ei aseta evästeitä eikä käytä seuranta- tai analytiikkaskriptejä. Vierailusi aikana selaimestasi lähtee kolme asiaa: sivun fontti ladataan Google Fontsista, joten Google näkee IP-osoitteesi; Discord-jäsenmäärä haetaan Discordin julkisesta API:sta; ja live-tilastot tulevat omalta palvelimeltamme. Sovelluskauppoihin johtavissa linkeissä on kampanjatunniste, jotta näemme, että lataus tuli tältä sivustolta; se tunnistaa sivuston, ei sinua.",
        },
        {
          type: "p",
          text: "Kun lähetät meille ehdotuksen, virheilmoituksen, käännöstä koskevan ilmoituksen tai ilmoituksen pelaajasta tällä sivustolla olevan lomakkeen kautta, tallennamme syöttämäsi tiedot, liittämäsi kuvakaappaukset, ajankohdan, selaimesi kielen ja IP-osoitteesi tiivisteenä omalle palvelimellemme EU:ssa. Käytämme niitä viestisi lukemiseen ja käsittelyyn sekä lomakkeiden väärinkäytön rajoittamiseen. Käyttäjänimesi ja sähköpostiosoitteesi ovat vapaaehtoisia; anna ne vain, jos haluat, että voimme vastata sinulle. Lomakkeilla lähetetyt tiedot poistetaan kahdentoista kuukauden kuluttua.",
        },
      ],
    },
    {
      id: "changes",
      title: "Muutokset tähän käytäntöön",
      blocks: [
        {
          type: "p",
          text: "Kun muutamme tapaamme käsitellä tietoja, päivitämme tämän sivun ja sen päiväyksen, ja merkittävistä muutoksista kerromme sinulle pelissä.",
        },
      ],
    },
  ],
};
