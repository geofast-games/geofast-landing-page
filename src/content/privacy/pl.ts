import type { PrivacyContent } from "./types";

// Polish. Informal "ty" with the customary capitalised Ty/Twoj/Ci, as in the
// game's Polish translation ("Twoje nagrody") and in the Polish privacy
// notices of large consumer platforms. Legal vocabulary follows the official
// Polish text of the GDPR (RODO): "administrator", "inspektor ochrony
// danych", "podstawa prawna", "prawnie uzasadniony interes", "wykonanie
// umowy", "organ nadzorczy", "standardowe klauzule umowne", "sprostowanie",
// "usuniecie", "ograniczenie przetwarzania", "przenoszenie danych",
// "sprzeciw". Game terms follow the game: "bitwa", "narod", "czat", "monety",
// "tablice wynikow", "sklep", "sezon", "powtorzenie" for replay; the game
// translates Battle Pass as "Przepustka Bitewna", so the policy does too.
// Mutes are "wyciszenia", bans "blokady". Polish quotation marks.
export const pl: PrivacyContent = {
  lang: "pl",
  label: "Polski",
  pageTitle: "Polityka prywatności | Geofast: Battle of Nations",
  metaDescription:
    "Jakie dane zbiera Geofast: Battle of Nations, jak są wykorzystywane, komu są udostępniane i jak zażądać ich usunięcia.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Polityka prywatności",
  lastUpdated: "Ostatnia aktualizacja: 25 września 2026 r.",
  sectionsLabel: "Sekcje",
  languageLabel: "Język",
  legalBasisLabel: "Podstawa prawna:",
  contact: {
    line: "Masz pytania? Zadaj je na Discordzie. Wnioski dotyczące Twoich danych: napisz do nas e-mail.",
    discord: "Zapytaj na Discordzie",
    back: "Wróć do Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Kim jesteśmy",
      blocks: [
        {
          type: "p",
          text: "Geofast Games to niezależne studio gier z siedzibą w Belgii. Tworzymy grę *Geofast: Battle of Nations* i prowadzimy tę stronę internetową. Jesteśmy administratorem danych osobowych opisanych w tej polityce: to my decydujemy, co jest zbierane i w jakim celu.",
        },
        {
          type: "p",
          text: "Możesz się z nami skontaktować pod adresem [contact@geofastgames.com](mailto:contact@geofastgames.com). Jesteśmy studiem dwuosobowym i nie wyznaczyliśmy inspektora ochrony danych; pod tym samym adresem odpowiadają osoby odpowiedzialne za Twoje dane.",
        },
        {
          type: "p",
          text: "Ta polityka dotyczy gry na iOS i Androidzie oraz strony geofastgames.com. Nie dotyczy Discorda, App Store, Google Play ani innych usług, z których korzystasz obok gry; mają one własne polityki, do których linkujemy tam, gdzie są wspomniane.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "W skrócie",
      blocks: [
        {
          type: "table",
          head: ["Co", "Dlaczego", "Jak długo"],
          rows: [
            [
              "Konto: identyfikator urządzenia, Twoja nazwa użytkownika oraz, jeśli tak zdecydujesz, adres e-mail z hasłem albo logowanie przez Google lub Apple",
              "Aby prowadzić Twoje konto i umożliwić Ci grę online",
              "Do usunięcia konta przez Ciebie; nie usuwamy nieaktywnych kont",
            ],
            [
              "Rozgrywka: mecze, rankingi, przedmioty, potwierdzenia zakupów",
              "Aby obsługiwać grę, tablice wyników i Twój ekwipunek",
              "Do usunięcia konta przez Ciebie; powtórzenia bitew 7 dni, następnie archiwizowane",
            ],
            [
              "Wiadomości na czacie",
              "Aby je dostarczać i moderować nadużycia",
              "Czat bitewny 15 dni, następnie usuwany; pozostały czat 90 dni, następnie archiwizowany",
            ],
            [
              "Adres IP, identyfikator urządzenia, model telefonu",
              "Aby wykrywać oszustwa i zmowy oraz egzekwować blokady",
              "Zapisy meczów 30 dni, a zapis pierwszego uruchomienia 90 dni, następnie archiwizowane; identyfikator urządzenia pozostaje przy Twoim koncie; wpis o blokadzie pozostaje do czasu jej zdjęcia przez nas",
            ],
            [
              "Token powiadomień push",
              "Aby wysyłać powiadomienia, które możesz wyłączyć",
              "Do czasu, gdy token przestanie działać (np. po odinstalowaniu gry) lub gdy usuniesz konto",
            ],
            [
              "Zdarzenia analityczne o tym, jak grasz",
              "Aby rozumieć sposób gry i naprawiać problemy",
              "400 dni, następnie archiwizowane",
            ],
            [
              "Identyfikator reklamowy, odczytywany przez oprogramowanie Google AdMob",
              "Aby ładować i wyświetlać reklamy z nagrodą, które możesz obejrzeć, jeśli chcesz",
              "Wysyłany do Google przy uruchomieniu gry i przy ładowaniu reklamy; nie przechowujemy go; obowiązuje polityka AdMob",
            ],
          ],
        },
        { type: "lead", text: "Cztery rzeczy, które warto wiedzieć, zanim przeczytasz dalej" },
        {
          type: "ul",
          items: [
            "Czat nie jest prywatny. Wiadomości są przechowywane do 15 dni (czat bitewny) lub 90 dni (pozostały czat), aby moderatorzy mogli rozpatrywać zgłoszenia; każda wiadomość przechodzi przez automatyczny filtr, a gdy włączymy tę funkcję, wiadomości będą dodatkowo klasyfikowane przez usługę Gemini firmy Google.",
            "Gdy grasz, zapisujemy Twój adres IP i identyfikator urządzenia, aby wykrywać oszustwa i skutecznie egzekwować blokady.",
            "Nasze serwery znajdują się we Frankfurcie w Niemczech. Kilku dostawców, z których korzystamy (Google, Apple), przetwarza dane poza Unią Europejską.",
            "Wpisy, które wygasają w naszej bazie produkcyjnej (czat inny niż bitewny, zapisy meczów, dane analityczne i inne), są archiwizowane we Frankfurcie, a nie niszczone. Zobacz „Jak długo przechowujemy dane”.",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Twoje konto",
      blocks: [
        {
          type: "p",
          text: "Gdy po raz pierwszy grasz online, tworzymy dla Ciebie konto i łączymy je z identyfikatorem wygenerowanym na Twoim urządzeniu. Do gry nie trzeba nic więcej i nigdy nie musisz podawać nam swojego imienia ani nazwiska.",
        },
        {
          type: "p",
          text: "Wybierasz nazwę użytkownika, którą widzą inni gracze. Poza tym przechowujemy to, czego gra potrzebuje, aby działać dla Ciebie: Twoje postępy, ustawienia i znajomych oraz wersję gry, z której korzystasz.",
        },
        {
          type: "p",
          text: "Jeśli chcesz zachować postępy na różnych urządzeniach, możesz dodać adres e-mail z hasłem albo zalogować się przez Google lub Apple. Hasła są przechowywane w postaci skrótu (hash), co oznacza, że nie możemy ich odczytać. Od Google lub Apple otrzymujemy tylko to, co jest potrzebne do połączenia konta, a Twojego adresu e-mail używamy wyłącznie do zabezpieczenia konta i resetowania hasła.",
        },
        {
          type: "p",
          text: "Identyfikator urządzenia jest wymagany do gry online. Wszystko inne jest opcjonalne.",
        },
        { type: "basis", text: "wykonanie umowy zawartej z Tobą (udostępnianie gry)." },
      ],
    },
    {
      id: "gameplay",
      title: "Rozgrywka, postępy i zakupy",
      blocks: [
        {
          type: "p",
          text: "Aby obsługiwać bitwy online, tablice wyników i Twój ekwipunek, przechowujemy Twoje postępy w grze: wyniki meczów, pozycje w rankingu, posiadane przedmioty i waluty oraz postępy w wydarzeniach i sezonach. Twoje ostatnie bitwy są przechowywane jako historia; powtórzenia bitew opuszczają bazę produkcyjną po 7 dniach i są archiwizowane.",
        },
        {
          type: "p",
          text: "Płatności są w całości obsługiwane przez Google Play lub App Store. Nigdy nie widzimy danych Twojej karty ani rachunku bankowego. Sklep informuje nas, co kupiłeś, a my przechowujemy to potwierdzenie oraz, w przypadku Przepustki Bitewnej, status subskrypcji, aby dostarczać przedmioty, przywracać zakupy i pomagać w ramach wsparcia.",
        },
        {
          type: "basis",
          text: "wykonanie umowy zawartej z Tobą. Dokumenty zakupu, które musimy przechowywać na potrzeby księgowości, przechowujemy w ramach naszych obowiązków prawnych.",
        },
      ],
    },
    {
      id: "chat",
      title: "Czat i moderacja",
      blocks: [
        {
          type: "p",
          text: "Gra ma czat między graczami. Wiadomości są dostarczane pozostałym graczom na danym czacie i przechowywane na naszych serwerach: czat w trakcie bitwy przez 15 dni, po czym jest usuwany; cały pozostały czat przez 90 dni, po czym jest archiwizowany (zobacz „Jak długo przechowujemy dane”). Przechowujemy je, aby moderatorzy mogli badać zgłoszenia nadużyć lub oszustw. Każde sprawdzenie przez moderatora jest rejestrowane.",
        },
        {
          type: "p",
          text: "Moderacja działa w trzech krokach. Po pierwsze, każda wiadomość przed dostarczeniem przechodzi przez automatyczny filtr na naszych serwerach (limity częstotliwości, lista słów i wzorce mowy nienawiści); zablokowana wiadomość nigdy nie jest wysyłana. Po drugie, gdy włączymy tę funkcję, dostarczone wiadomości będą dodatkowo klasyfikowane przez usługę Gemini firmy Google, która otrzymuje wiadomość oraz Twoje ostatnie wiadomości na tym czacie jako kontekst. Nazwy użytkowników są sprawdzane przez Gemini, gdy je ustawiasz lub zmieniasz. Wiadomość, którą Gemini zaklasyfikuje jako obraźliwą, jest usuwana, a naruszenie zostaje odnotowane. Po trzecie, ludzcy moderatorzy rozpatrują zgłoszenia.",
        },
        {
          type: "p",
          text: "Naruszenia skutkują ostrzeżeniami i tymczasowymi wyciszeniami na czacie, zgodnie z naszym [Regulaminem](/termsofservice). Zapis Twoich naruszeń i wyciszeń pozostaje przy Twoim koncie, aby można było rozpoznać powtarzające się zachowania. Te automatyczne kroki wpływają wyłącznie na Twoją możliwość korzystania z czatu. Jeśli uważasz, że decyzja była błędna, napisz do nas e-mail lub zapytaj na Discordzie, a sprawą zajmie się człowiek.",
        },
        {
          type: "p",
          text: "Nie podawaj na czacie danych osobowych. Inni gracze widzą, co piszesz.",
        },
        {
          type: "basis",
          text: "nasz prawnie uzasadniony interes polegający na utrzymaniu gry bezpiecznej i uczciwej dla wszystkich, którzy w nią grają.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Uczciwa gra i bezpieczeństwo",
      blocks: [
        {
          type: "p",
          text: "Oszustwa w grze rywalizacyjnej psują ją wszystkim, dlatego przechowujemy niewielką ilość danych technicznych, aby je wykrywać i skutecznie egzekwować blokady:",
        },
        {
          type: "ul",
          items: [
            "Przy pierwszym uruchomieniu gry zapisujemy identyfikator Twojego urządzenia, model telefonu, platformę i adres IP wraz z ukończonymi przez Ciebie krokami samouczka. Ten wpis opuszcza bazę produkcyjną po 90 dniach i jest archiwizowany.",
            "Dla każdego meczu online zapisujemy, które konta w nim uczestniczyły, wraz z ich identyfikatorem urządzenia i adresem IP. Automatyczna kontrola regularnie przegląda ostatnie wpisy w poszukiwaniu par graczy, którzy trafiają do tych samych meczów znacznie częściej, niż pozwalałby na to przypadek. Zapisy meczów opuszczają bazę produkcyjną po 30 dniach i są archiwizowane.",
            "Wykryte oszustwa skutkują karami, aż do blokady, zgodnie z naszym [Regulaminem](/termsofservice). Historia kar pozostaje przy Twoim koncie, a każdą karę możesz poddać weryfikacji przez człowieka.",
            "Blokada urządzenia blokuje również nowe konta zakładane z tego urządzenia. Wpisy o blokadach nie mają daty końcowej; usuwamy je, gdy weryfikacja wykaże, że blokada była błędna.",
          ],
        },
        {
          type: "p",
          text: "Same działania w bitwie są weryfikowane na naszych serwerach w czasie rzeczywistym, co nie wymaga żadnych danych poza samym meczem. Nie używamy Twojego adresu IP do ustalania Twojej lokalizacji. Gdy dołączasz po raz pierwszy, gra proponuje Ci naród na podstawie ustawień języka i regionu Twojego urządzenia; ten odczyt odbywa się na urządzeniu, a Ty możesz zamiast tego wybrać dowolny naród.",
        },
        {
          type: "basis",
          text: "nasz prawnie uzasadniony interes polegający na zapobieganiu oszustwom, wyłudzeniom i nadużyciom oraz na utrzymaniu bezpieczeństwa usługi.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Powiadomienia push",
      blocks: [
        {
          type: "p",
          text: "Jeśli zezwolisz na powiadomienia, Twoje urządzenie przekaże nam token push, który przechowujemy i wykorzystujemy, aby informować Cię o wydarzeniach w grze: o tym, co dzieje się z Twoim kontem, znajomymi i narodem, o nowych wydarzeniach i sezonach oraz aby przypomnieć o grze, jeśli dłużej Cię nie było.",
        },
        {
          type: "p",
          text: "Powiadomienia są dostarczane przez Firebase Cloud Messaging (Google) na Androidzie i Apple Push Notification service na iOS. Możesz je w każdej chwili wyłączyć w ustawieniach urządzenia, co powoduje, że nie są wyświetlane; sam token pozostaje do czasu, gdy stanie się nieważny (np. gdy odinstalujesz grę) lub gdy usuniesz konto. Dostarczone powiadomienia przechowujemy po naszej stronie przez 30 dni, następnie są archiwizowane.",
        },
        {
          type: "basis",
          text: "nasz prawnie uzasadniony interes polegający na informowaniu Cię o Twoim koncie i grze, w którą grasz, z możliwością rezygnacji jednym dotknięciem.",
        },
      ],
    },
    {
      id: "ads",
      title: "Opcjonalne reklamy z nagrodą",
      blocks: [
        {
          type: "p",
          text: "Gra nie ma wymuszonych reklam: nic nie przerywa bitwy ani menu. Sklep oferuje reklamy z nagrodą, które odtwarzają się tylko wtedy, gdy ich dotkniesz, w zamian za walutę w grze.",
        },
        {
          type: "p",
          text: "Reklamy dostarcza Google AdMob. Jego oprogramowanie jest częścią gry, uruchamia się razem z nią i w tle ładuje reklamę, aby była gotowa, gdy jej dotkniesz. W tym momencie, niezależnie od tego, czy kiedykolwiek obejrzysz reklamę, AdMob otrzymuje Twój identyfikator reklamowy i przybliżoną lokalizację wyprowadzoną z Twojego adresu IP; jeśli obejrzysz reklamę, także informacje o tym, jak z nią interagowałeś. Na iOS system prosi Cię o zgodę przy pierwszym uruchomieniu, zanim identyfikator reklamowy zostanie użyty do śledzenia; na Androidzie możesz zresetować lub usunąć identyfikator reklamowy w ustawieniach urządzenia. Google opisuje, co robi z tymi danymi, w swojej [polityce prywatności](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "Twoja zgoda, wyrażona poprzez uprawnienia i ustawienia reklam Twojego urządzenia, którą możesz tam w każdej chwili wycofać.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analityka",
      blocks: [
        {
          type: "p",
          text: "Aby rozumieć, jak gra jest używana, i znajdować problemy, gra wysyła zdarzenia na nasze własne serwery: początek i koniec sesji, rozegrane i ukończone bitwy, postępy w samouczku, zakupy w sklepie, otwarte powiadomienia, błędy oraz, na Androidzie, źródło ze sklepu, z którego trafiłeś do gry. Każde zdarzenie zawiera identyfikator Twojego konta, identyfikator urządzenia, platformę, model telefonu i wersję gry. Nie korzystamy z Google Analytics, Firebase Analytics ani żadnej innej zewnętrznej usługi analitycznej. Raporty o awariach docierają do nas przez Google Play i App Store na podstawie ich własnych polityk.",
        },
        {
          type: "p",
          text: "Zdarzenia analityczne przechowujemy przez 400 dni. Statystyki z nich wyprowadzone nie zawierają danych osobowych i są przechowywane bezterminowo.",
        },
        {
          type: "basis",
          text: "nasz prawnie uzasadniony interes polegający na ulepszaniu gry i utrzymaniu jej sprawnego działania.",
        },
      ],
    },
    {
      id: "support",
      title: "Wsparcie i społeczność",
      blocks: [
        {
          type: "p",
          text: "Jeśli napiszesz do nas e-mail, przechowujemy korespondencję tak długo, jak wymaga tego jej obsługa.",
        },
        {
          type: "p",
          text: "Nasz serwer Discord działa na platformie Discord zgodnie z [polityką prywatności Discorda](https://discord.com/privacy). Tamtejsi moderatorzy mogą przeglądać historię czatu w grze, aby rozpatrywać zgłoszenia, jak opisano w sekcji „Czat i moderacja”.",
        },
        {
          type: "basis",
          text: "wykonanie umowy zawartej z Tobą (wsparcie) oraz nasz prawnie uzasadniony interes polegający na prowadzeniu społeczności wokół gry.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Komu udostępniamy dane",
      blocks: [
        {
          type: "p",
          text: "Nie sprzedajemy danych osobowych i nie udostępniamy ich brokerom danych. Poniższe firmy przetwarzają dane w naszym imieniu lub otrzymują je ze względu na sposób działania gry:",
        },
        {
          type: "table",
          head: ["Dostawca", "W jakim celu", "Gdzie"],
          rows: [
            ["DigitalOcean", "Hosting naszych serwerów gry i bazy danych", "Frankfurt, Niemcy"],
            [
              "Gcore",
              "Sieć dostarczania treści, która przenosi część ruchu gry do naszych serwerów; widzi Twój adres IP podczas przesyłania",
              "Serwery brzegowe na całym świecie; firma ma siedzibę w Luksemburgu",
            ],
            [
              "Google Cloud Storage",
              "Archiwum wygasłych wpisów (zobacz „Jak długo przechowujemy dane”)",
              "Frankfurt, Niemcy",
            ],
            [
              "Google (Gemini API)",
              "Klasyfikacja nazw użytkowników oraz, gdy funkcja jest włączona, wiadomości na czacie",
              "Cały świat: Google nie zobowiązuje się do żadnego regionu dla tego API",
            ],
            ["Google AdMob", "Reklamy z nagrodą, które decydujesz się obejrzeć", "Stany Zjednoczone"],
            ["Google Firebase Cloud Messaging", "Dostarczanie powiadomień push na Androidzie", "Stany Zjednoczone"],
            ["Apple Push Notification service", "Dostarczanie powiadomień push na iOS", "Stany Zjednoczone"],
            ["Zoho Mail", "Nasza poczta e-mail, w tym wiadomości do resetowania hasła", "Unia Europejska"],
            [
              "Google Play i App Store",
              "Logowanie, płatności, subskrypcje i raporty o awariach",
              "Na podstawie ich własnych polityk",
            ],
          ],
        },
        {
          type: "p",
          text: "Każdy z tych dostawców jest umownie zobowiązany chronić Twoje dane co najmniej tak dobrze, jak opisuje to ta polityka, i wykorzystywać je wyłącznie w podanym celu. Inni gracze widzą Twoją nazwę użytkownika, Twój profil w grze i to, co piszesz na czacie. Dane organom władzy ujawniamy tylko wtedy, gdy wymaga tego prawo.",
        },
      ],
    },
    {
      id: "storage",
      title: "Gdzie przechowywane są Twoje dane",
      blocks: [
        {
          type: "p",
          text: "Nasze serwery, baza danych i kopie zapasowe są hostowane we Frankfurcie w Niemczech, a nasze archiwum wygasłych wpisów znajduje się w zasobniku Google Cloud Storage w tym samym mieście. Twoje dane pozostają w Unii Europejskiej, z wyjątkiem przypadków, gdy wymieniony powyżej dostawca przetwarza je w Stanach Zjednoczonych lub, w przypadku Gemini API, tam, gdzie Google je uruchamia. Przy tych przekazaniach opieramy się na standardowych klauzulach umownych Komisji Europejskiej oraz, gdy dostawca posiada certyfikację, na ramach ochrony danych UE-USA (Data Privacy Framework).",
        },
      ],
    },
    {
      id: "retention",
      title: "Jak długo przechowujemy dane",
      blocks: [
        {
          type: "table",
          head: ["Dane", "Przechowywane"],
          rows: [
            ["Konto, postępy, ekwipunek, znajomi, potwierdzenia zakupów", "Do usunięcia konta przez Ciebie"],
            [
              "Historia naruszeń i wyciszeń na czacie, historia kar za zmowy",
              "Przez cały okres istnienia konta (same wyciszenia są tymczasowe)",
            ],
            ["Blokady urządzeń", "Do ich zdjęcia przez nas"],
            ["Zdarzenia analityczne", "400 dni, następnie archiwizowane"],
            ["Czat inny niż bitewny, w tym wiadomości prywatne", "90 dni, następnie archiwizowany"],
            [
              "Historia transakcji monet i XP",
              "90 dni (historia XP: 90 dni od Twojej ostatniej aktywności), następnie archiwizowana",
            ],
            ["Zapis pierwszego uruchomienia z adresem IP i modelem telefonu", "90 dni, następnie archiwizowany"],
            [
              "Zapisy uczestników poszczególnych meczów z adresem IP i identyfikatorem urządzenia",
              "30 dni, następnie archiwizowane",
            ],
            ["Dostarczone powiadomienia, postępy dzienne", "30 dni, następnie archiwizowane"],
            ["Czat bitewny", "15 dni, następnie usuwany"],
            ["Powtórzenia bitew", "7 dni, następnie archiwizowane"],
            ["Zdarzenia przeglądania sklepu", "3 dni, następnie usuwane"],
          ],
        },
        {
          type: "p",
          text: "Wiersze oznaczone „następnie archiwizowane” są kopiowane do archiwum we Frankfurcie, zanim opuszczą bazę produkcyjną. Archiwum wykorzystujemy do statystyk i do badania dawnych nadużyć; dostęp do niego mają wyłącznie dwaj deweloperzy, a nic z jego zawartości nie jest dostępne z poziomu gry. Zarchiwizowane wpisy przechowujemy tak długo, jak są potrzebne do tych celów, i usuwamy je, gdy przestają być potrzebne.",
        },
        {
          type: "p",
          text: "Gdy usuwasz konto, usuwamy Twoje dane osobowe z systemów produkcyjnych w ciągu 30 dni. Zachowujemy dokumenty, które musimy przechowywać z mocy prawa, takie jak dokumenty zakupu na potrzeby księgowości, oraz statystyki, które już Cię nie identyfikują.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Nasze podstawy prawne w jednym miejscu",
      blocks: [
        {
          type: "p",
          text: "Zgodnie z RODO potrzebujemy podstawy prawnej dla każdej czynności, którą wykonujemy na Twoich danych. Nasze podstawy to:",
        },
        {
          type: "ul",
          items: [
            "**Umowa**: prowadzenie Twojego konta, gry, Twoich zakupów i wsparcia. Bez tych danych nie ma gry, w którą można grać.",
            "**Prawnie uzasadniony interes**: zapobieganie oszustwom i nadużyciom, moderacja czatu, utrzymanie bezpieczeństwa usługi, rozumienie, jak gra jest używana, oraz informowanie Cię o Twoim koncie. Naszym interesem jest uczciwa, bezpieczna i działająca gra; ograniczamy dane do minimum i przechowujemy je krótko, a Ty możesz w każdej chwili wnieść sprzeciw.",
            "**Zgoda**: spersonalizowane reklamy w reklamach z nagrodą, wyrażona poprzez ustawienia Twojego urządzenia i możliwa do wycofania w tym samym miejscu.",
            "**Obowiązek prawny**: przechowywanie dokumentów księgowych i odpowiadanie na zgodne z prawem żądania organów władzy.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Twoje prawa",
      blocks: [
        { type: "p", text: "Masz prawo do:" },
        {
          type: "ul",
          items: [
            "**dostępu** do danych osobowych, które przechowujemy na Twój temat, i otrzymania ich kopii;",
            "**sprostowania** danych, które są nieprawidłowe;",
            "**usunięcia** Twojego konta i danych;",
            "**otrzymania** Twoich danych w przenośnym formacie nadającym się do odczytu maszynowego;",
            "**sprzeciwu** wobec przetwarzania opartego na naszych prawnie uzasadnionych interesach oraz **ograniczenia** przetwarzania na czas rozpatrywania sprawy;",
            "**wycofania zgody** na reklamy w każdej chwili w ustawieniach urządzenia oraz wyłączenia powiadomień w ten sam sposób.",
          ],
        },
        {
          type: "p",
          text: "Aby skorzystać z prawa, napisz na adres [contact@geofastgames.com](mailto:contact@geofastgames.com) z adresu powiązanego z Twoim kontem albo, jeśli Twoje konto nie ma adresu e-mail, podaj nam swoją nazwę użytkownika, a my zweryfikujemy Cię w grze. Wnioski o usunięcie danych możesz też rozpocząć na naszej [stronie usuwania danych](/datadeletion). Odpowiadamy w ciągu miesiąca.",
        },
        {
          type: "p",
          text: "Jeśli uważasz, że przetwarzamy Twoje dane niezgodnie z prawem, możesz złożyć skargę do belgijskiego Urzędu Ochrony Danych (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Bruksela, [dataprotectionauthority.be](https://www.dataprotectionauthority.be), lub do organu nadzorczego w kraju, w którym mieszkasz.",
        },
      ],
    },
    {
      id: "children",
      title: "Dzieci",
      blocks: [
        {
          type: "p",
          text: "Gra *Geofast: Battle of Nations* nie jest skierowana do dzieci poniżej 13 lat i nie zbieramy świadomie ich danych osobowych. W Belgii 13 lat to wiek, od którego można samodzielnie wyrazić zgodę na usługi online. Gra ma w każdym sklepie klasyfikację wiekową odzwierciedlającą czat online i opcjonalne zakupy; rodzice mogą korzystać z kontroli rodzicielskiej Google Play i App Store, aby ograniczyć zakupy oraz aplikacje, które dziecko może instalować.",
        },
        {
          type: "p",
          text: "Jeśli uważasz, że konto ma dziecko poniżej 13 lat, napisz do nas e-mail, a my je usuniemy.",
        },
      ],
    },
    {
      id: "security",
      title: "Bezpieczeństwo",
      blocks: [
        {
          type: "p",
          text: "Cały ruch między grą, tą stroną i naszymi serwerami jest szyfrowany (TLS). Hasła są przechowywane w postaci skrótu. Baza danych nie jest dostępna z internetu. Dostęp do serwerów i danych mają wyłącznie dwaj deweloperzy; moderatorzy widzą historię czatu tylko przez narzędzie, które rejestruje każde sprawdzenie. Żaden system nie jest doskonale bezpieczny; jeśli kiedykolwiek dowiemy się o naruszeniu dotyczącym Twoich danych, poinformujemy Ciebie i organ nadzorczy zgodnie z wymogami prawa.",
        },
      ],
    },
    {
      id: "website",
      title: "Ta strona internetowa",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com nie ustawia plików cookie i nie używa skryptów śledzących ani analitycznych. Podczas wizyty z Twojej przeglądarki wychodzą trzy rzeczy: czcionka strony jest ładowana z Google Fonts, więc Google widzi Twój adres IP; liczba członków serwera Discord jest pobierana z publicznego API Discorda; a statystyki na żywo pochodzą z naszego własnego serwera. Linki do sklepów z aplikacjami zawierają znacznik kampanii, dzięki któremu widzimy, że pobranie pochodzi z tej strony; identyfikuje on stronę, nie Ciebie.",
        },
      ],
    },
    {
      id: "changes",
      title: "Zmiany w tej polityce",
      blocks: [
        {
          type: "p",
          text: "Gdy zmieniamy sposób, w jaki postępujemy z danymi, aktualizujemy tę stronę i jej datę, a o istotnych zmianach informujemy Cię w grze.",
        },
      ],
    },
  ],
};
