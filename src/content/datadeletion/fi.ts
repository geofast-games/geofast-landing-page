import type { DataDeletionContent } from "./types";

// Finnish. Informal "sina" (sinuttelu) throughout, as in the Finnish privacy
// policy and the Finnish Terms. The page is the "Tietojen poistopyynto";
// both other documents link to it as the "tietojen poistosivu" (there with
// a possessive suffix and in the ablative, "tietojen poistosivultamme").
// Terminology follows them: "tili", "laite", "kayttajanimi", "edistyminen",
// "virtuaalivaluutat ja esineet", "aktiivinen tietokanta" and "aktiiviset
// jarjestelmat" for the live database and live systems, "arkisto", "tilaus",
// "kauppa" for the store; the game translates Battle Pass as
// "Taistelupassi", so this text does too. The privacy policy is the
// "Tietosuojakaytanto", the Terms are the "Kayttoehdot", as they name
// themselves.
export const fi: DataDeletionContent = {
  lang: "fi",
  label: "Suomi",
  pageTitle: "Tietojen poistopyyntö | Geofast: Battle of Nations",
  metaDescription:
    "Miten poistat Geofast: Battle of Nations -tilisi ja henkilötietosi pelissä tai sähköpostilla, mitä poistetaan, mitä säilytetään ja kuinka kauan se kestää.",
  gameName: "Geofast: Battle of Nations",
  docName: "Tietojen poistopyyntö",
  lastUpdated: "Päivitetty viimeksi: 25. syyskuuta 2026",
  sectionsLabel: "Osiot",
  languageLabel: "Kieli",
  contact: {
    line: "Kysyttävää? Kysy Discordissa. Tietojasi koskevat pyynnöt: lähetä meille sähköpostia.",
    discord: "Kysy Discordissa",
    back: "Takaisin Geofast Gamesiin",
  },
  request: {
    title: "Pyydä poistoa sähköpostilla",
    text: "Silloin, kun et enää voi avata peliä. Painike avaa meille osoitetun sähköpostin, jossa pyyntö on jo valmiiksi kirjoitettu; täytä tilisi tiedot ja lähetä se. Jos tällä laitteella ei ole sähköpostisovellusta, kirjoita samat tiedot osoitteeseen contact@geofastgames.com.",
    button: "Lähetä poistopyyntö",
    emailSubject: "Tietojen poistopyyntö - Geofast: Battle of Nations",
    emailBody: `Hei Geofast Games,

Haluan, että Geofast: Battle of Nations -tilini ja henkilötietoni poistetaan.

Tilini:
- Käyttäjänimi pelissä: [täytä]
- Tiliin liitetty sähköpostiosoite, jos sellainen on: [täytä]
- Kansakunta, jonka puolesta pelaan: [täytä]
- Pelaamiseen käytetty laite: [täytä]

Ymmärrän, että poisto on pysyvä, että edistymiseni, valuuttani ja esineeni menetetään ja että Taistelupassi-tilaus on peruttava erikseen sovelluskaupassani.

Kiitos.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Oikeutesi poistaa tietosi",
      blocks: [
        {
          type: "p",
          text: "Voit milloin tahansa pyytää *Geofast: Battle of Nations* -tilisi ja siihen liitettyjen henkilötietojen poistamista, asuinpaikastasi riippumatta ja syytä ilmoittamatta. Tapoja on kaksi: pelissä, jolloin poisto tapahtuu välittömästi, tai sähköpostilla, jos et enää voi avata peliä.",
        },
        {
          type: "p",
          text: "Tilin poistaminen on ainoa tarjoamamme poiston muoto: emme poista tilistä osia ja säilytä loppua.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Ennen kuin poistat",
      blocks: [
        {
          type: "ul",
          items: [
            "**Peru ensin Taistelupassisi.** Tilaus on sopimus sovelluskauppasi kanssa, eikä tilin poistaminen peru sitä. Peru se Google Playn tai App Storen tilausasetuksista, muuten se uusiutuu edelleen.",
            "**Mitään ei hyvitetä.** Virtuaalivaluutat, esineet ja käyttämätön tilausaika päättyvät tilin mukana, kuten [käyttöehdoissamme](/termsofservice) todetaan.",
            "**Sitä ei voi perua.** Varoaikaa ei ole, eikä varmuuskopiota, josta tiedot voisi palauttaa.",
            "**Se koskee jokaista laitetta.** Tili katoaa jokaiselta laitteelta, johon se oli liitetty, ei vain siltä, jolta poistat sen.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Poista tilisi pelissä",
      blocks: [
        {
          type: "p",
          text: "Avaa profiilisi, napauta **Poista tilini** ja kirjoita käyttäjänimesi vahvistukseksi. Tili poistetaan heti. Kun peli seuraavan kerran käynnistyy kyseisellä laitteella, se luo uuden, tyhjän tilin.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Tai pyydä meiltä sähköpostilla",
      blocks: [
        {
          type: "p",
          text: "Jos olet poistanut pelin laitteeltasi tai kadottanut laitteen, lähetä sähköpostia osoitteeseen [contact@geofastgames.com](mailto:contact@geofastgames.com) tai käytä alla olevaa painiketta ja kerro käyttäjänimesi pelissä sekä, jos sellainen on, tiliisi liitetty sähköpostiosoite. Kirjoita siitä osoitteesta: siitä tiedämme, että pyyntö tulee tilin omistajalta. Jos tililläsi ei ole sähköpostiosoitetta, kerro meille käyttäjänimesi ja kansakunta, jonka puolesta pelaat, niin varmistamme pelin kautta, että tili on sinun, ennen kuin poistamme mitään.",
        },
        {
          type: "p",
          text: "Vahvistamme, että olemme saaneet pyyntösi, poistamme tiedot 30 päivän kuluessa ja vahvistamme uudelleen, kun se on tehty. Jos emme pysty yhdistämään tietojasi mihinkään tiliin, kysymme sinulta lisätietoja ennen kuin toimimme; emme koskaan poista tiliä varmentamattoman pyynnön perusteella.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "Mitä poistetaan",
      blocks: [
        {
          type: "p",
          text: "Tilin poistaminen poistaa tilin ja kaiken sen alle tallennetun:",
        },
        {
          type: "ul",
          items: [
            "tilisi, käyttäjänimesi ja siihen liitetyt laite-, sähköposti-, Google- tai Apple-kytkennät;",
            "edistymisesi: sijoitukset, esineet, virtuaalivaluutat, päivitykset, saavutukset, kausiedistymisen ja taisteluhistorian;",
            "kaverilistasi ja suosittelukoodisi;",
            "push-ilmoitusten tunnisteesi.",
          ],
        },
        {
          type: "p",
          text: "Tiliin sidotut tekniset tietueet, kuten analytiikkatapahtumat, aktiivisessa tietokannassamme vielä olevat chat-viestit sekä tietosuojakäytännössä kuvatut ottelutietueet ja ensikäynnistyksen tietue, poistetaan aktiivisista järjestelmistämme 30 päivän kuluessa.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "Mitä säilytämme ja miksi",
      blocks: [
        {
          type: "ul",
          items: [
            "Ostotositteet, jotka kirjanpitolaki velvoittaa meidät säilyttämään, laissa säädetyn ajan.",
            "Tilastot, joista sinua ei enää voi tunnistaa, kuten tiettynä päivänä pelattujen taistelujen määrä.",
            "Tietueet, jotka olivat jo ennen poistoa siirtyneet aktiivisesta tietokannasta arkistoomme, kuten tietosuojakäytännön kohdassa [Kuinka pitkään säilytämme tietoja](/privacy#retention) kuvataan.",
            "Tiedot, joita sovelluskaupat, Google AdMob tai Discord säilyttävät omien käytäntöjensä mukaan. Emme hallitse niitä; pyydä niiden poistamista suoraan kyseisiltä palveluilta.",
          ],
        },
        {
          type: "p",
          text: "Laitteellasi olevat paikalliset tiedostot ovat sinun: pelin poistaminen laitteelta poistaa ne.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Muut tietojasi koskevat pyynnöt",
      blocks: [
        {
          type: "p",
          text: "Voit myös pyytää kopion tiedoistasi, pyytää virheellisten tietojen oikaisua tai vastustaa tapaa, jolla käytämme niitä. Sama sähköpostiosoite hoitaa kaikki nämä pyynnöt, ja [tietosuojakäytäntö](/privacy#rights) kuvaa jokaisen oikeuden. Vastaamme kuukauden kuluessa.",
        },
      ],
    },
  ],
};
