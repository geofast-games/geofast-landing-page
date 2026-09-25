import type { DataDeletionContent } from "./types";

// Polish. Informal "ty" with the customary capitalised Ty/Twoj/Ci, as in the
// Polish privacy policy and the Polish Terms. Polish quotation marks. The
// page is the "Wniosek o usuniecie danych"; both other documents link to it
// as the "strona usuwania danych" (there in the locative). Terminology
// follows them: "konto", "urzadzenie", "nazwa uzytkownika", "postepy",
// "waluty wirtualne i przedmioty", "baza produkcyjna" and "systemy
// produkcyjne" for the live database and live systems, "archiwum",
// "subskrypcja", "sklep" for the store; the game translates Battle Pass as
// "Przepustka Bitewna", so this text does too. The privacy policy is the
// "Polityka prywatnosci", the Terms are the "Regulamin", as they name
// themselves.
export const pl: DataDeletionContent = {
  lang: "pl",
  label: "Polski",
  pageTitle: "Wniosek o usunięcie danych | Geofast: Battle of Nations",
  metaDescription:
    "Jak usunąć konto i dane osobowe w Geofast: Battle of Nations, w grze lub przez e-mail, co jest usuwane, co zachowujemy i jak długo to trwa.",
  gameName: "Geofast: Battle of Nations",
  docName: "Wniosek o usunięcie danych",
  lastUpdated: "Ostatnia aktualizacja: 25 września 2026 r.",
  sectionsLabel: "Sekcje",
  languageLabel: "Język",
  contact: {
    line: "Masz pytania? Zadaj je na Discordzie. Wnioski dotyczące Twoich danych: napisz do nas e-mail.",
    discord: "Zapytaj na Discordzie",
    back: "Wróć do Geofast Games",
  },
  request: {
    title: "Złóż wniosek o usunięcie przez e-mail",
    text: "Na wypadek, gdy nie możesz już otworzyć gry. Przycisk otwiera e-mail do nas z gotową treścią wniosku; uzupełnij dane swojego konta i wyślij go. Jeśli na tym urządzeniu nie masz aplikacji pocztowej, napisz na adres contact@geofastgames.com, podając te same dane.",
    button: "Wyślij wniosek o usunięcie",
    emailSubject: "Wniosek o usunięcie danych - Geofast: Battle of Nations",
    emailBody: `Dzień dobry, Geofast Games,

Chcę, aby moje konto w Geofast: Battle of Nations i moje dane osobowe zostały usunięte.

Moje konto:
- Nazwa użytkownika w grze: [uzupełnij]
- Adres e-mail powiązany z kontem, jeśli jest: [uzupełnij]
- Naród, dla którego gram: [uzupełnij]
- Urządzenie, na którym gram: [uzupełnij]

Rozumiem, że usunięcie jest nieodwracalne, że moje postępy, waluty i przedmioty przepadają oraz że subskrypcję Przepustki Bitewnej trzeba anulować osobno w moim sklepie z aplikacjami.

Dziękuję.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Twoje prawo do usunięcia danych",
      blocks: [
        {
          type: "p",
          text: "Możesz w dowolnym momencie zażądać usunięcia swojego konta w *Geofast: Battle of Nations* oraz powiązanych z nim danych osobowych, niezależnie od tego, gdzie mieszkasz, bez podawania powodu. Są dwie drogi: w grze, ze skutkiem natychmiastowym, albo przez e-mail, jeśli nie możesz już otworzyć gry.",
        },
        {
          type: "p",
          text: "Usunięcie konta to jedyna forma usunięcia, jaką oferujemy: nie usuwamy części konta, zachowując resztę.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Zanim usuniesz",
      blocks: [
        {
          type: "ul",
          items: [
            "**Najpierw anuluj Przepustkę Bitewną.** Subskrypcja to umowa z Twoim sklepem z aplikacjami, a usunięcie konta jej nie anuluje. Anuluj ją w ustawieniach subskrypcji Google Play lub App Store, inaczej będzie się dalej odnawiać.",
            "**Nic nie jest zwracane.** Waluty wirtualne, przedmioty i niewykorzystany czas subskrypcji kończą się wraz z kontem, zgodnie z naszym [Regulaminem](/termsofservice).",
            "**Tego nie da się cofnąć.** Nie ma okresu karencji ani kopii zapasowej, z której można by przywrócić dane.",
            "**Dotyczy każdego urządzenia.** Konto znika z każdego urządzenia, z którym było powiązane, nie tylko z tego, na którym je usuwasz.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Usuń konto w grze",
      blocks: [
        {
          type: "p",
          text: "Otwórz swój profil, dotknij **Usuń moje konto** i wpisz swoją nazwę użytkownika, aby potwierdzić. Konto jest usuwane natychmiast. Przy następnym uruchomieniu gry na tym urządzeniu tworzone jest nowe, puste konto.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Albo poproś nas przez e-mail",
      blocks: [
        {
          type: "p",
          text: "Jeśli odinstalowałeś grę lub straciłeś urządzenie, napisz na adres [contact@geofastgames.com](mailto:contact@geofastgames.com) albo użyj przycisku poniżej, podając swoją nazwę użytkownika w grze oraz, jeśli go masz, adres e-mail powiązany z kontem. Napisz z tego adresu: po tym poznajemy, że wniosek pochodzi od właściciela konta. Jeśli Twoje konto nie ma adresu e-mail, podaj nam nazwę użytkownika i naród, dla którego grasz, a my potwierdzimy w grze, że konto należy do Ciebie, zanim cokolwiek usuniemy.",
        },
        {
          type: "p",
          text: "Potwierdzamy otrzymanie wniosku, usuwamy dane w ciągu 30 dni i potwierdzamy ponownie, gdy to zrobimy. Jeśli nie możemy dopasować Twoich danych do żadnego konta, prosimy o więcej informacji, zanim podejmiemy działanie; nigdy nie usuwamy konta na podstawie niezweryfikowanego wniosku.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "Co jest usuwane",
      blocks: [
        {
          type: "p",
          text: "Usunięcie konta usuwa je wraz ze wszystkim, co jest w nim zapisane:",
        },
        {
          type: "ul",
          items: [
            "Twoje konto, nazwę użytkownika oraz powiązane z nim połączenia z urządzeniem, adresem e-mail, Google lub Apple;",
            "Twoje postępy: pozycje w rankingu, przedmioty, waluty wirtualne, ulepszenia, osiągnięcia, postępy w sezonie i historię bitew;",
            "Twoją listę znajomych i kod polecający;",
            "Twój token powiadomień push.",
          ],
        },
        {
          type: "p",
          text: "Wpisy techniczne powiązane z kontem, takie jak zdarzenia analityczne, wiadomości na czacie znajdujące się jeszcze w naszej bazie produkcyjnej oraz opisane w Polityce prywatności zapisy meczów i zapis pierwszego uruchomienia, są usuwane z naszych systemów produkcyjnych w ciągu 30 dni.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "Co zachowujemy i dlaczego",
      blocks: [
        {
          type: "ul",
          items: [
            "Dokumenty zakupu, które musimy przechowywać na mocy przepisów o rachunkowości, przez okres określony w tych przepisach.",
            "Statystyki, które już Cię nie identyfikują, takie jak liczba bitew rozegranych w danym dniu.",
            "Wpisy, które przed usunięciem opuściły już bazę produkcyjną i trafiły do naszego archiwum, jak opisano w sekcji [Jak długo przechowujemy dane](/privacy#retention) Polityki prywatności.",
            "Dane przechowywane przez sklepy z aplikacjami, Google AdMob lub Discord na podstawie ich własnych polityk. Nie mamy nad nimi kontroli; aby je usunąć, skontaktuj się z tymi podmiotami.",
          ],
        },
        {
          type: "p",
          text: "Lokalne pliki na Twoim urządzeniu należą do Ciebie: odinstalowanie gry je usuwa.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Inne wnioski dotyczące Twoich danych",
      blocks: [
        {
          type: "p",
          text: "Możesz też poprosić o kopię swoich danych, o sprostowanie nieprawidłowych danych albo wnieść sprzeciw wobec sposobu, w jaki je wykorzystujemy. Wszystkie te wnioski obsługuje ten sam adres e-mail, a [Polityka prywatności](/privacy#rights) opisuje każde z tych praw. Odpowiadamy w ciągu miesiąca.",
        },
      ],
    },
  ],
};
