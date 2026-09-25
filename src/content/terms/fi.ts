import type { TermsContent } from "./types";

// Finnish. Informal "sina" (sinuttelu) throughout, as in the Finnish privacy
// policy, the game's Finnish translation and Finnish consumer-facing legal
// text. Finnish quotation marks (closing marks on both sides). The document
// is called "Kayttoehdot", the term the privacy policy links to (there in the
// genitive with a possessive suffix, "kayttoehtojemme"); the privacy policy
// is "Tietosuojakaytanto", as it names itself. Legal vocabulary follows the
// official Finnish text of the Consumer Rights Directive and the Digital
// Content Directive: "peruuttamisoikeus", "sopimuksenmukaisuus", "pakottava
// kuluttajansuojalainsaadanto", "torkea huolimattomuus", "vastuu",
// "asuinpaikkasi tuomioistuin". Game terms follow the game: "taistelu",
// "kansakunta", "chat", "kolikot", "timantit", "tahdet", "kausi",
// "tulostaulukot", "aseet", "skinit", "suosittelukoodi"; the game translates
// Battle Pass as "Taistelupassi", so this text does too, as the privacy
// policy does. As there, cheating is "huijaaminen", a mute "mykistys", a ban
// "porttikielto", a report "ilmoitus".
export const fi: TermsContent = {
  lang: "fi",
  label: "Suomi",
  pageTitle: "Käyttöehdot | Geofast: Battle of Nations",
  metaDescription:
    "Säännöt Geofast: Battle of Nations -pelin pelaamiseen: tilit, käytös, moderointi ja valitukset, ostokset ja Taistelupassi, muutokset ja oikeutesi.",
  gameName: "Geofast: Battle of Nations",
  docName: "Käyttöehdot",
  lastUpdated: "Päivitetty viimeksi: 25. syyskuuta 2026",
  sectionsLabel: "Osiot",
  languageLabel: "Kieli",
  contact: {
    line: "Kysyttävää? Kysy Discordissa. Tietojasi koskevat pyynnöt: lähetä meille sähköpostia.",
    discord: "Kysy Discordissa",
    back: "Takaisin Geofast Gamesiin",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Keitä olemme ja mitä nämä ehdot koskevat",
      blocks: [
        {
          type: "p",
          text: "Nämä käyttöehdot ovat sopimus sinun ja Geofast Gamesin, Belgiassa toimivan itsenäisen pelistudion, välillä *Geofast: Battle of Nations* -pelistä (peli) ja verkkosivustosta geofastgames.com. Tavoitat meidät osoitteesta [contact@geofastgames.com](mailto:contact@geofastgames.com).",
        },
        {
          type: "p",
          text: "Luomalla tilin tai pelaamalla hyväksyt nämä ehdot. Jos et hyväksy niitä, älä pelaa. [Tietosuojakäytäntömme](/privacy) kertoo, mitä teemme tiedoillasi; se on erillinen asiakirja, jota sovelletaan näiden ehtojen rinnalla.",
        },
        {
          type: "p",
          text: "iOS:llä sovellus lisensoidaan sinulle Applen vakiomuotoisen loppukäyttäjän lisenssisopimuksen mukaisesti, joka säätelee itse sovelluksen käyttöä. Nämä ehdot säätelevät pelipalvelua, tiliäsi ja sitä, miten pelaat muiden kanssa. Kun nämä kaksi päällekkäistyvät, Applen sopimusta sovelletaan sovelluksen lisenssiin ja näitä ehtoja kaikkeen muuhun.",
        },
        {
          type: "p",
          text: "Nämä ehdot on kirjoitettu englanniksi. Käännökset tarjotaan lukemisen helpottamiseksi; jos käännös poikkeaa englanninkielisestä tekstistä, englanninkielinen teksti pätee.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Kuka saa pelata",
      blocks: [
        {
          type: "p",
          text: "Sinun on oltava vähintään 13-vuotias pelataksesi. Jos olet alle 18-vuotias, tarvitset vanhemman tai huoltajan luvan pelaamiseen ja kaikkiin ostoksiin, ja pelaamalla vahvistat, että sinulla on se. Vanhemmat ja huoltajat vastaavat siitä, mitä heidän huollettavansa tekevät pelissä, sekä heidän kauppatilinsä kautta tehdyistä ostoksista. Google Playn ja App Storen lapsilukolla voi rajoittaa ostoksia ja latauksia.",
        },
        {
          type: "p",
          text: "Pelin ikäluokitukset kaupoissa kuvaavat sitä, että pelissä on pelaajien välinen chat ja vapaaehtoisia ostoksia.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Tilisi",
      blocks: [
        {
          type: "p",
          text: "Kun pelaat verkossa ensimmäisen kerran, peli luo laitteeseesi liitetyn tilin. Voit liittää tiliin sähköpostiosoitteen ja salasanan tai Google- tai Apple-kirjautumisen, jotta edistymisesi säilyy laitteesta toiseen. Pidä tunnuksesi omana tietonasi: kaikki tilisi kautta tehty on sinun vastuullasi, ja sinun tulee kertoa meille heti, jos epäilet jonkun muun käyttävän sitä.",
        },
        {
          type: "p",
          text: "Tiliin voi olla yhdistettynä vain yksi laite kerrallaan. Yhdistäminen uudesta laitteesta katkaisee edellisen yhteyden.",
        },
        {
          type: "p",
          text: "Jos kadotat laitteesi tai palautat sen tehdasasetuksiin liittämättä sähköpostiosoitetta tai Google- tai Apple-kirjautumista, meillä ei ole keinoa varmistaa, että tili on sinun, eikä sitä voi palauttaa. Liitä tilisi, jos edistymisesi on sinulle tärkeää.",
        },
        {
          type: "p",
          text: "Tilin jakaminen toisen henkilön kanssa ei ole sallittua, koska se antaa epäreilun edun tulostaulukoissa ja sijoituksissa. Useamman kuin yhden tilin pitäminen on sallittua, kunhan mitään niistä ei käytetä epäreilun edun hankkimiseen, otteluiden sopimiseen tai toiselle tilille määrätyn seuraamuksen kiertämiseen. Tilejä ja niiden sisältöä ei voi myydä, ostaa, vaihtaa eikä antaa pois.",
        },
        {
          type: "p",
          text: "Käyttäjänimesi näkyy kaikille. Se ei saa olla loukkaava tai harhaanjohtava eikä esiintyä kenään muuna, henkilökuntamme mukaan lukien. Voit vaihtaa sen kerran pelissä siellä näytettyä maksua vastaan. Voimme muuttaa käyttäjänimen, joka rikkoo näitä sääntöjä.",
        },
        {
          type: "p",
          text: "Emme poista passiivisia tilejä. Voit poistaa tilisi milloin tahansa pelissä profiilisi kautta tai [tietojen poistosivultamme](/datadeletion). Poisto on pysyvä ja kattaa edistymisesi, virtuaalivaluuttasi ja esineesi.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. Lisenssisi pelata",
      blocks: [
        {
          type: "p",
          text: "Myönnämme sinulle henkilökohtaisen, ei-yksinomaisen ja siirtokelvottoman lisenssin asentaa peli ja pelata sitä omistamillasi tai hallinnassasi olevilla laitteilla omaksi viihteeksesi. Peli, sen grafiikka, äänet, tekstit, koodi ja muotoilu kuuluvat Geofast Gamesille tai lisenssinantajillemme, ja niitä suojaa immateriaalioikeuslainsäädäntö. Et saa kopioida, muokata, levittää, myydä tai vuokrata mitään pelin osaa etkä takaisinmallintaa sitä, paitsi jos laki sen nimenomaisesti sallii.",
        },
        {
          type: "p",
          text: "Peli toimii kaupoissa mainituilla Android- ja iOS-versioilla. Verkossa pelaaminen edellyttää kohtuullisen tuoretta pelin versiota: julkaisemme päivitykset kauppojen kautta, ja vanhentunut versio voi menettää pääsyn verkko-ominaisuuksiin, kunnes se päivitetään.",
        },
        {
          type: "p",
          text: "Saat tallentaa, striimata ja julkaista videoita ja kuvakaappauksia pelaamisestasi, myös alustoilla, joilla ansaitset rahaa mainoksista tai jäsenyyksistä. Älä esitä sisältöäsi meidän tekemänämme tai hyväksymänämme, älä myy oheistuotteita, joissa käytetään grafiikkaamme, äläkä esittele huijauksia tai hyväksikäytettäviä virheitä. Voimme pyytää sinua poistamaan sisältöä, joka rikkoo näitä sääntöjä tai lakia.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Käyttäytymissäännöt",
      blocks: [
        { type: "p", text: "Pelaa reilusti ja kohtele muita pelaajia asiallisesti. Et saa:" },
        {
          type: "ul",
          items: [
            "käyttää huijauksia, hyväksikäytettäviä virheitä, botteja, automaatiota, muokattuja asiakasohjelmia tai mitään työkalua, joka häiritsee peliä tai sen palvelimia;",
            "hyödyntää virheitä edun saamiseksi sen sijaan, että ilmoittaisit niistä;",
            "tehdä salaista yhteistyötä muiden pelaajien kanssa, sopia otteluita, vaihtaa voittoja tai muutoin manipuloida sijoituksia, tulostaulukoita tai palkintoja, myös lisätilien avulla;",
            "jakaa, myydä, ostaa tai siirtää tilejä tai käydä kauppaa virtuaaliesineillä pelin ulkopuolella;",
            "häiritä, uhkailla, loukata tai kiusata muita pelaajia tai julkaista vihamielistä, seksuaalista, väkivaltaista tai muutoin hyväksikäyttävää sisältöä;",
            "esiintyä muina pelaajina, henkilökuntanamme tai minään henkilönä tai organisaationa;",
            "roskapostittaa, mainostaa tai jakaa linkkejä haitalliseen sisältöön;",
            "pyytää tai kerätä muiden pelaajien henkilötietoja tai kirjautumistietoja tai jakaa omiasi tai kenenkään muun tietoja chatissa;",
            "tehdä tietoisesti vääriä ilmoituksia muista pelaajista tai käyttää valitusmenettelyä väärin;",
            "järjestää vedonlyöntiä tai rahapelejä otteluista tai mistään muusta pelissä tai osallistua niihin;",
            "hyökätä palvelimiimme, tutkia niitä tai ylikuormittaa niitä tai häiritä muiden pelaajien yhteyksiä;",
            "pilata peliä tahallaan muilta pelaajilta;",
            "käyttää peliä mihinkään laittomaan.",
          ],
        },
        {
          type: "p",
          text: "Kilvoittelu, härnääminen ja sotaisa puhe kansakuntien välillä kuuluvat peliin. Oikeiden ihmisten solvaaminen, ryhmiin kohdistuva viha, uhkailu ja seksuaalinen sisältö eivät kuulu.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Chat, käyttäjänimet ja luomasi sisältö",
      blocks: [
        {
          type: "p",
          text: "Pelissä on pelaajien välinen chat. Kirjoittamasi välitetään kyseisen chatin muille pelaajille ja tallennetaan palvelimillemme tietosuojakäytännössä mainituiksi ajoiksi, jotta moderaattorit voivat tarkastella ilmoituksia. Chat ei ole yksityinen: muut pelaajat näkevät sen, ja moderaattorit voivat lukea sitä ilmoitusta käsitellessään. Älä jaa henkilökohtaisia tietoja chatissa.",
        },
        {
          type: "p",
          text: "Säilytät oikeudet siihen, mitä kirjoitat. Annat meille luvan tallentaa, näyttää, moderoida ja tarvittaessa poistaa sen pelin pyörittämiseksi. Vastaat siitä, mitä julkaiset. Poistamme sisällön, joka rikkoo näitä ehtoja tai lakia.",
        },
        {
          type: "p",
          text: "Jos lähetät meille ehdotuksia tai ideoita pelin, verkkosivustomme tai Discordin kautta, voimme käyttää niitä vapaasti ilman korvausta tai mitään velvoitetta sinua kohtaan ja nimeäsi mainitsematta.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. Miten moderoimme",
      blocks: [
        { type: "p", text: "Moderointi yhdistää automaattiset työkalut ja ihmiset:" },
        {
          type: "ul",
          items: [
            "Ennen viestin välittämistä palvelimillamme oleva automaattinen suodatin tarkistaa sen nopeusrajoitusten, sanalistan ja vihapuheen kaavojen perusteella. Estettyä viestiä ei lähetetä koskaan.",
            "Kun olemme ottaneet toiminnon käyttöön, välitetyt viestit luokittelee lisäksi automaattinen palvelu (Googlen Gemini), joka saa viestin ja viimeaikaiset viestisi kyseisessä chatissa kontekstiksi. Käyttäjänimet tarkistetaan samalla tavalla, kun asetat tai muutat niitä. Loukkaavaksi luokiteltu viesti poistetaan, ja tilillesi kirjataan rikkomus.",
            "Ihmismoderaattorit tarkastelevat pelaajien ilmoituksia ja toimivat havaintojensa mukaan. Heidän pääsynsä chat-historiaan kirjataan lokiin.",
          ],
        },
        {
          type: "p",
          text: "Chat-rikkomusten seurauksia ovat varoitukset ja tilapäiset mykistykset. Automaattisesti havaitut rikkomukset johtavat ensin varoitukseen ja lyhyeen mykistykseen, jos toistat teon nopeasti. Moderaattorien määräämät mykistykset ovat tilapäisiä ja pitenevät jokaisen aiemmin saamasi mykistyksen myötä tunneista kuukausiin. Merkintä rikkomuksistasi ja mykistyksistäsi säilyy tililläsi, jotta toistuva käytös voidaan tunnistaa.",
        },
        {
          type: "p",
          text: "Aina kun mykistämme sinut, poistamme sisältösi tai rankaisemme tiliäsi, kerromme sinulle pelissä, mitä tehtiin ja miksi, ja voit riitauttaa sen osiossa 9 kuvatulla tavalla.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Reilun pelin valvonta",
      blocks: [
        {
          type: "p",
          text: "Taistelutoiminnot vahvistetaan palvelimillamme sitä mukaa kuin ne tapahtuvat, joten muokattu asiakasohjelma ei voi muuttaa ottelun lopputulosta. Automaattinen tarkistus käy säännöllisesti läpi viimeaikaiset ottelutietueet etsien pelaajia, jotka päätyvät samoihin otteluihin selvästi useammin kuin sattuma sallisi; näin sopupelit ja salainen yhteistyö havaitaan.",
        },
        {
          type: "p",
          text: "Huijaamisesta ja salaisesta yhteistyöstä rangaistaan portaittain. Pelaajaa varoitetaan ensin, kerran. Rangaistukset kovenevat vain, kun varoituksen jälkeen ilmenee uutta näyttöä, ja portaiden välillä on aikaa: sijoitusten ja valuuttojen nollaus, sitten edistymisen täydellinen nollaus ja lopuksi laitteen pysyvä porttikielto, joka estää myös siitä luodut uudet tilit. Vakavaan tai toistuvaan huijaamiseen osallistuneet tilit voidaan sulkea. Ennen nollauksen tekemistä tallennamme tilistä tilannekuvan, jotta vääräksi osoittautuva rangaistus voidaan perua. Merkintä rangaistuksista säilyy tililläsi.",
        },
        {
          type: "p",
          text: "Jokaiseen rangaistukseen liittyy pelissä näytettävä ilmoitus siitä, mitä tehtiin ja miksi, ja voit riitauttaa sen osiossa 9 kuvatulla tavalla.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Ilmoitukset ja valitukset",
      blocks: [
        {
          type: "p",
          text: "Ilmoittaaksesi pelaajasta tai sisällöstä, joka rikkoo näitä ehtoja tai lakia, käytä pelin ”Raportoi”-painiketta, [palautesivumme](/feedback) ilmoituslomaketta tai lähetä sähköpostia osoitteeseen [contact@geofastgames.com](mailto:contact@geofastgames.com). Kerro meille kuka, mitä ja missä. Vahvistamme, että olemme vastaanottaneet ilmoituksesi, ja kerromme päätöksemme ilman aiheetonta viivytystä. Ilmoitukset käsittelevät ihmiset edellä kuvattujen työkalujen avulla, hyvässä uskossa ja mielivaltaa välttäen.",
        },
        {
          type: "p",
          text: "Jos pidät mykistystä, rangaistusta, porttikieltoa tai sisällön poistoa virheellisenä, valita sähköpostilla tai Discordissa kuukauden kuluessa. Henkilö, joka ei osallistunut alkuperäiseen päätökseen, tarkastelee sen, ja vastaamme 14 päivän kuluessa. Jos päätös oli virheellinen, kumoamme sen ja palautamme mahdollisuuksien mukaan menetetyn. Mikään tässä ei rajoita oikeuttasi viedä asia tuomioistuimeen tai kuluttajaviranomaiselle.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Virtuaalivaluutat, esineet ja ostokset",
      blocks: [
        {
          type: "p",
          text: "Pelissä on virtuaalivaluuttoja (timantit, kolikot ja tähdet) ja virtuaaliesineitä, kuten aseita, skinejä, päivityksiä ja Taistelupassin palkintoja. Timantteja voi ostaa oikealla rahalla Google Playn tai App Storen kautta; kolikoita ja tähtiä ansaitaan pelaamalla tai vaihdetaan pelin sisällä. Hinnat näytetään paikallisessa valuutassasi kaupassa ja pelissä ennen ostoa.",
        },
        {
          type: "p",
          text: "Virtuaalivaluutat ja -esineet lisensoidaan sinulle käytettäväksi pelissä. Ne eivät ole omaisuuttasi, niillä ei ole arvoa pelin ulkopuolella, niitä ei voi vaihtaa oikeaan rahaan, tavaroihin tai palveluihin eikä niitä voi siirtää toiselle tilille tai henkilölle.",
        },
        {
          type: "p",
          text: "Ostokset toimitetaan välittömästi. Ostamalla pyydät meitä toimittamaan heti ja hyväksyt, että toimituksen alettua lakisääteinen 14 päivän peruuttamisoikeus ei enää päde. Muutoin ostokset ovat lopullisia, paitsi jos laki antaa sinulle oikeuden hyvitykseen. Hyvityspyynnöt osoitetaan kaupalle, josta ostit ja joka käsittelee maksun; emme koskaan näe maksutietojasi.",
        },
        {
          type: "p",
          text: "Voimme muuttaa, tasapainottaa uudelleen, lisätä tai poistaa virtuaalivaluuttoja ja -esineitä pätevistä syistä: pelin tasapainon ja hauskuuden säilyttämiseksi, virheiden korjaamiseksi, turvallisuuden vuoksi tai lain vaatimusten takia. Jos muutos vaikuttaisi merkittävästi johonkin, josta olet äskettäin maksanut, kerromme siitä etukäteen, ja jos laki antaa sinulle tällaisen muutoksen vuoksi oikeuden päättää sopimus ja saada hyvitys, kunnioitamme sitä. Lakisääteiset oikeutesi kuluttajana, mukaan lukien oikeus peliin, joka toimii kuvatulla tavalla, eivät muutu.",
        },
        {
          type: "p",
          text: "Pelissä ei ole pakotettua mainontaa. Kun peli tarjoaa vapaaehtoisia palkintomainoksia, niiden katsominen on oma valintasi, ja voimme muuttaa tai poistaa tarjouksen.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. Taistelupassi",
      blocks: [
        {
          type: "p",
          text: "Taistelupassi on Google Playn tai App Storen kautta ostettava tilaus. Se uusiutuu automaattisesti joka kuukausi kaupassa näytettyyn hintaan, kunnes perut sen. Voit perua sen milloin tahansa kauppasi tilausasetuksista; passi pysyy silloin voimassa maksamasi jakson loppuun, ja pidät lunastamasi palkinnot. Hinnanmuutokset tulevat voimaan seuraavasta uusimisesta alkaen, ja kauppa ilmoittaa niistä sinulle etukäteen.",
        },
        {
          type: "p",
          text: "Taistelupassin palkinnot avataan pelaamalla kauden aikana; passi ei itsessään anna jokaista palkintoa. Tilausten hyvitykset käsittelee kauppa omien sääntöjensä ja lain mukaan.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Suosittelupalkinnot ja sisällöntuottajaohjelma",
      blocks: [
        {
          type: "p",
          text: "Peli palkitsee sinut, kun uusi pelaaja liittyy suosittelukoodillasi, ja palkitsee myös hänet. Suosittelupalkinnot on tarkoitettu aidoille uusille pelaajille. Itsesi, omien lisätiliesi tai vain palkinnon keräämiseksi luotujen tilien suositteleminen ei ole sallittua, ja näin saadut palkinnot poistetaan.",
        },
        {
          type: "p",
          text: "Sisällöntuottajaohjelmamme palkitsee pelaajia, jotka julkaisevat videoita pelistä, kun heidän sisältönsä saavuttaa katselukertojen rajapyykkejä. Rajapyykit, palkinnot ja osallistumisehdot julkaistaan pelissä, ja ne voivat muuttua. Palkinnot tarkistamme ja myönnämme käsin, ja epäselvissä tapauksissa päätämme me. Palkinnot, joita haetaan väärennetyillä katselukerroilla tai näitä ehtoja rikkovalla sisällöllä, evätään tai poistetaan.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Kolmansien osapuolten palvelut",
      blocks: [
        {
          type: "p",
          text: "Peli käyttää Google Playta ja App Storea latauksiin, maksuihin ja tilauksiin; Googlea ja Applea vapaaehtoiseen kirjautumiseen; Google AdMobia vapaaehtoisiin palkintomainoksiin; ja Discordia yhteisöpalvelimeemme. Näiden palvelujen käyttöösi sovelletaan niiden omia ehtoja ja tietosuojakäytäntöjä, joihin emme voi vaikuttaa.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Saatavuus ja muutokset peliin",
      blocks: [
        {
          type: "p",
          text: "Pyrimme pitämään pelin saatavilla, mutta emme voi luvata, että se ei koskaan keskeydy. Verkko-ominaisuudet voivat olla poissa käytöstä huollon aikana, teknisten ongelmien vuoksi tai meistä riippumattomista syistä. Offline-tilat toimivat edelleen ilman yhteyttä.",
        },
        {
          type: "p",
          text: "Peli on jatkuvasti kehittyvä palvelu ja muuttuu ajan myötä: lisäämme, säädämme ja poistamme ominaisuuksia, aseita, kansakuntia, kausia ja tapahtumia pitääksemme pelin tasapainoisena ja tuoreena, korjataksemme ongelmia, turvallisuuden vuoksi ja lain vaatimusten täyttämiseksi. Muutokset, jotka vaikuttavat merkittävästi siihen, miten voit pelata, ilmoitetaan pelissä etukäteen. Lakisääteiset oikeutesi eivät muutu.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Sopimuksen päättyminen",
      blocks: [
        {
          type: "p",
          text: "Voit lopettaa pelaamisen milloin tahansa poistamalla pelin laitteeltasi, ja voit poistaa tilisi pelissä profiilisi kautta tai [tietojen poistosivultamme](/datadeletion). Tilin poistaminen poistaa pysyvästi edistymisesi, virtuaalivaluuttasi ja esineesi; niistä ei hyvitetä mitään.",
        },
        {
          type: "p",
          text: "Voimme jäädyttää tai sulkea tilisi, jos rikot näitä ehtoja vakavasti tai toistuvasti tai jos laki sitä vaatii. Vakavia tapauksia, kuten huijaamista, väärinkäytöksiä tai lakisääteistä velvoitetta, lukuun ottamatta varoitamme sinua ensin ja annamme sinulle mahdollisuuden vastata. Kerromme sinulle syyn ja sen, miten voit valittaa (osio 9). Tilin sulkeminen päättää lisenssisi ja pääsysi sen virtuaalivaluuttoihin ja -esineisiin.",
        },
        {
          type: "p",
          text: "Jos meidän joskus on lopetettava peli, ilmoitamme siitä vähintään 30 päivää etukäteen pelissä ja verkkosivustollamme. Virtuaalivaluutat ja -esineet päättyvät pelin mukana. Lakisääteiset oikeutesi äskettäisten ostosten osalta eivät muutu.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. Vastuumme",
      blocks: [
        {
          type: "p",
          text: "Vastaamme sinulle lain mukaan. Emme sulje pois tai rajoita vastuutamme huolimattomuutemme aiheuttamasta kuolemasta tai henkilövahingosta, petoksesta, tahallisesta tai törkeän huolimattomasta menettelystä tai mistään muusta, jota ei voida sulkea pois sinua kuluttajana suojaavan lain nojalla, mukaan lukien oikeutesi peliin, joka vastaa luvattua.",
        },
        {
          type: "p",
          text: "Muutoin vastaamme vain vahingoista, jotka olivat ennakoitavia, kun hyväksyit nämä ehdot, ja jotka johtuvat siitä, että olemme rikkoneet niitä. Peli on ilmainen pelata ja tarjotaan jatkuvasti kehittyvänä palveluna; emme vastaa menetyksistä, jotka johtuvat keskeytyksistä, muiden pelaajien käytöksestä tai kohtuullisen vaikutusvaltamme ulkopuolisista tapahtumista, paitsi jos laki toisin määrää.",
        },
        {
          type: "p",
          text: "Vastaat vahingosta, jonka aiheutat meille rikkomalla näitä ehtoja, lain sallimissa rajoissa.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Tietosuoja",
      blocks: [
        {
          type: "p",
          text: "Se, miten keräämme ja käytämme tietojasi, kuvataan [tietosuojakäytännössämme](/privacy). Se ei ole osa näitä ehtoja eikä riipu siitä, hyväksytkö ne: se kertoo, mitä teemme ja mitkä ovat oikeutesi.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Muutokset näihin ehtoihin",
      blocks: [
        {
          type: "p",
          text: "Muutamme näitä ehtoja, kun peli, laki tai palvelumme muuttuvat, tai tehdäksemme ne selkeämmiksi. Muutoksista, jotka vaikuttavat oikeuksiisi tai pelaamiseesi, ilmoitamme pelissä vähintään 30 päivää ennen niiden voimaantuloa, ja voit lopettaa pelaamisen ja poistaa tilisi sitä ennen, jos et hyväksy niitä. Selvennykset ja korjaukset, jotka eivät vaikuta sinuun, tulevat voimaan julkaistaessa. Yläreunan päivämäärä kertoo, milloin nykyinen versio tuli voimaan.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Laki, riidat ja reklamaatiot",
      blocks: [
        {
          type: "p",
          text: "Näihin ehtoihin sovelletaan Belgian lakia. Jos asut toisessa maassa, säilytät kyseisen maan pakottavan kuluttajansuojalainsäädännön suojan, ja voit nostaa kanteen asuinpaikkasi tuomioistuimissa. Me voimme nostaa kanteen sinua vastaan vain siellä.",
        },
        {
          type: "p",
          text: "Jos sinulla on reklamaatio, ota ensin yhteyttä osoitteeseen [contact@geofastgames.com](mailto:contact@geofastgames.com) tai Discordissa; useimmat asiat voidaan selvittää suoraan. Voit myös kääntyä maasi kuluttajariitoja käsittelevän elimen puoleen; Belgiassa se on kuluttajasovittelupalvelu (Consumentenombudsdienst / Service de Médiation pour le Consommateur). Näissä ehdoissa ei ole välimiesmenettelylauseketta eikä ryhmäkanteista luopumista.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Loppumääräykset",
      blocks: [
        {
          type: "p",
          text: "Otamme sinuun yhteyttä pelin ilmoituksilla, verkkosivustollamme ja, jos olet liittänyt sähköpostiosoitteen, sähköpostilla. Sinä otat meihin yhteyttä osoitteeseen [contact@geofastgames.com](mailto:contact@geofastgames.com); se on myös osoitteemme oikeudellisille ilmoituksille ja yhteyspisteemme viranomaisille.",
        },
        {
          type: "p",
          text: "Jos jokin näiden ehtojen osa osoittautuu pätemättömäksi, loput pysyvät voimassa. Jos emme jossain vaiheessa pane jotakin sääntöä täytäntöön, voimme silti tehdä sen myöhemmin. Voimme siirtää tämän sopimuksen yritykselle, joka ottaa pelin haltuunsa, edellyttäen, että oikeutesi eivät heikkene; et saa siirtää tiliäsi tai tätä sopimusta. Nämä ehdot ja tietosuojakäytäntö muodostavat koko sopimuksen sinun ja meidän välillämme pelistä.",
        },
      ],
    },
  ],
};
