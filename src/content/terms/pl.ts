import type { TermsContent } from "./types";

// Polish. Informal "ty" with the customary capitalised Ty/Twoj/Ci, as in the
// Polish privacy policy and the game's Polish translation. Polish quotation
// marks. The document is called "Regulamin", the term the privacy policy
// links to (there in the instrumental, "Regulaminem"); the privacy policy is
// "Polityka prywatnosci", as it names itself. Legal vocabulary follows the
// official Polish text of the Consumer Rights Directive and the Digital
// Content Directive: "prawo odstapienia od umowy", "zgodnosc z umowa",
// "bezwzglednie obowiazujace przepisy o ochronie konsumentow", "razace
// niedbalstwo", "odpowiedzialnosc", "sad miejsca zamieszkania". Game terms
// follow the game: "bitwa", "narod", "czat", "monety", "diamenty", "gwiazdy",
// "sezon", "tablice wynikow", "bron", "skorki", "kod polecajacy"; the game
// translates Battle Pass as "Przepustka Bitewna", so this text does too, as
// the privacy policy does. As there, cheating is "oszustwa", a mute a
// "wyciszenie", a ban a "blokada", a report a "zgloszenie".
export const pl: TermsContent = {
  lang: "pl",
  label: "Polski",
  pageTitle: "Regulamin | Geofast: Battle of Nations",
  metaDescription:
    "Zasady gry w Geofast: Battle of Nations: konta, zasady zachowania, moderacja i odwołania, zakupy i Przepustka Bitewna, zmiany oraz Twoje prawa.",
  gameName: "Geofast: Battle of Nations",
  docName: "Regulamin",
  lastUpdated: "Ostatnia aktualizacja: 25 września 2026 r.",
  sectionsLabel: "Sekcje",
  languageLabel: "Język",
  contact: {
    line: "Masz pytania? Zadaj je na Discordzie. Wnioski dotyczące Twoich danych: napisz do nas e-mail.",
    discord: "Zapytaj na Discordzie",
    back: "Wróć do Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Kim jesteśmy i czego dotyczy Regulamin",
      blocks: [
        {
          type: "p",
          text: "Niniejszy Regulamin to umowa między Tobą a Geofast Games, niezależnym studiem gier z siedzibą w Belgii, dotycząca gry *Geofast: Battle of Nations* (gra) oraz strony internetowej geofastgames.com. Możesz się z nami skontaktować pod adresem [contact@geofastgames.com](mailto:contact@geofastgames.com).",
        },
        {
          type: "p",
          text: "Tworząc konto lub grając, akceptujesz Regulamin. Jeśli się z nim nie zgadzasz, nie graj. Nasza [Polityka prywatności](/privacy) wyjaśnia, co robimy z Twoimi danymi; to osobny dokument, który obowiązuje obok Regulaminu.",
        },
        {
          type: "p",
          text: "Na iOS aplikacja jest Ci licencjonowana na podstawie standardowej umowy licencyjnej użytkownika końcowego Apple, która reguluje korzystanie z samej aplikacji. Regulamin reguluje usługę gry, Twoje konto i sposób, w jaki grasz z innymi. Tam, gdzie oba dokumenty się pokrywają, umowa Apple dotyczy licencji na aplikację, a Regulamin wszystkiego pozostałego.",
        },
        {
          type: "p",
          text: "Regulamin został napisany w języku angielskim. Tłumaczenia udostępniamy dla wygody; jeśli tłumaczenie różni się od tekstu angielskiego, obowiązuje tekst angielski.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Kto może grać",
      blocks: [
        {
          type: "p",
          text: "Aby grać, musisz mieć co najmniej 13 lat. Jeśli masz mniej niż 18 lat, potrzebujesz zgody rodzica lub opiekuna na grę i na dokonywanie zakupów, a grając potwierdzasz, że ją masz. Rodzice i opiekunowie odpowiadają za to, co osoby niepełnoletnie pod ich opieką robią w grze, oraz za zakupy dokonane przez ich konto w sklepie. Kontrola rodzicielska w Google Play i App Store pozwala ograniczyć zakupy i pobieranie.",
        },
        {
          type: "p",
          text: "Klasyfikacje wiekowe gry w sklepach odzwierciedlają to, że zawiera ona czat między graczami i opcjonalne zakupy.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Twoje konto",
      blocks: [
        {
          type: "p",
          text: "Gdy po raz pierwszy grasz online, gra tworzy konto powiązane z Twoim urządzeniem. Możesz powiązać z nim adres e-mail i hasło albo logowanie przez Google lub Apple, aby zachować postępy na różnych urządzeniach. Nie udostępniaj nikomu swoich danych logowania: za wszystko, co dzieje się przez Twoje konto, odpowiadasz Ty, a jeśli podejrzewasz, że ktoś inny z niego korzysta, powiadom nas natychmiast.",
        },
        {
          type: "p",
          text: "Z kontem może być połączone tylko jedno urządzenie naraz. Połączenie z nowego urządzenia odłącza poprzednie.",
        },
        {
          type: "p",
          text: "Jeśli zgubisz lub zresetujesz urządzenie, nie powiązawszy wcześniej adresu e-mail ani logowania przez Google lub Apple, nie mamy jak potwierdzić, że konto należy do Ciebie, i nie można go przywrócić. Powiąż swoje konto, jeśli Twoje postępy są dla Ciebie ważne.",
        },
        {
          type: "p",
          text: "Współdzielenie konta z inną osobą jest niedozwolone, ponieważ daje nieuczciwą przewagę w tablicach wyników i rankingach. Posiadanie więcej niż jednego konta jest dozwolone, o ile żadne z nich nie służy do zdobycia nieuczciwej przewagi, ustawiania meczów ani obchodzenia sankcji nałożonej na inne konto. Kont ani ich zawartości nie można sprzedawać, kupować, wymieniać ani oddawać.",
        },
        {
          type: "p",
          text: "Twoja nazwa użytkownika jest widoczna dla wszystkich. Nie może być obraźliwa, myląca ani podszywać się pod kogokolwiek, w tym pod nasz zespół. Możesz ją zmienić raz w grze, za opłatą tam wskazaną. Nazwę użytkownika, która łamie te zasady, możemy zmienić.",
        },
        {
          type: "p",
          text: "Nie usuwamy nieaktywnych kont. Możesz usunąć swoje konto w dowolnym momencie w grze, w swoim profilu, albo na naszej [stronie usuwania danych](/datadeletion). Usunięcie jest nieodwracalne i obejmuje Twoje postępy, waluty wirtualne i przedmioty.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. Twoja licencja na grę",
      blocks: [
        {
          type: "p",
          text: "Udzielamy Ci osobistej, niewyłącznej i nieprzenoszalnej licencji na instalowanie gry i granie w nią na urządzeniach, które posiadasz lub kontrolujesz, dla własnej rozrywki. Gra, jej grafika, dźwięki, teksty, kod i projekt należą do Geofast Games lub naszych licencjodawców i są chronione prawem własności intelektualnej. Nie możesz kopiować, modyfikować, rozpowszechniać, sprzedawać ani wynajmować żadnej części gry ani dokonywać jej inżynierii wstecznej, chyba że prawo wyraźnie na to zezwala.",
        },
        {
          type: "p",
          text: "Gra działa na wersjach Androida i iOS wymienionych w sklepach. Gra online wymaga w miarę aktualnej wersji gry: aktualizacje publikujemy w sklepach, a przestarzała wersja może utracić dostęp do funkcji online do czasu aktualizacji.",
        },
        {
          type: "p",
          text: "Możesz nagrywać, streamować i publikować filmy oraz zrzuty ekranu ze swojej gry, także na platformach, na których zarabiasz na reklamach lub subskrypcjach. Nie przedstawiaj swoich treści jako stworzonych lub popieranych przez nas, nie sprzedawaj gadżetów z naszą grafiką i nie pokazuj cheatów ani exploitów. Możemy poprosić Cię o usunięcie treści, które łamią te zasady lub prawo.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Zasady zachowania",
      blocks: [
        { type: "p", text: "Graj uczciwie i traktuj innych graczy przyzwoicie. Nie możesz:" },
        {
          type: "ul",
          items: [
            "używać cheatów, exploitów, botów, automatyzacji, zmodyfikowanych klientów ani żadnych narzędzi ingerujących w grę lub jej serwery;",
            "wykorzystywać błędów dla uzyskania przewagi zamiast je zgłaszać;",
            "wchodzić w zmowę z innymi graczami, ustawiać mecze, wymieniać się zwycięstwami ani w inny sposób manipulować rankingami, tablicami wyników lub nagrodami, także za pomocą dodatkowych kont;",
            "udostępniać, sprzedawać, kupować ani przekazywać kont, ani handlować przedmiotami wirtualnymi poza grą;",
            "nękać, zastraszać, obrażać ani prześladować innych graczy, ani publikować treści nienawistnych, seksualnych, przemocowych lub w inny sposób obelżywych;",
            "podszywać się pod innych graczy, nasz zespół ani żadną osobę lub organizację;",
            "spamować, reklamować ani udostępniać linków do szkodliwych treści;",
            "prosić o dane osobowe lub dane logowania innych graczy ani ich zbierać, ani udostępniać na czacie własnych lub czyichkolwiek danych;",
            "świadomie składać fałszywych zgłoszeń na innych graczy ani nadużywać procedury odwoławczej;",
            "organizować zakładów ani hazardu dotyczących meczów lub czegokolwiek innego w grze, ani brać w nich udziału;",
            "atakować, sondować ani przeciążać naszych serwerów, ani zakłócać połączeń innych graczy;",
            "celowo psuć gry innym graczom;",
            "używać gry do czegokolwiek niezgodnego z prawem.",
          ],
        },
        {
          type: "p",
          text: "Rywalizacja, przechwałki i wojenna retoryka między narodami są częścią gry. Obrażanie prawdziwych osób, nienawiść wobec grup, groźby i treści seksualne nią nie są.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Czat, nazwy użytkowników i treści, które tworzysz",
      blocks: [
        {
          type: "p",
          text: "Gra ma czat między graczami. To, co piszesz, jest dostarczane pozostałym graczom na danym czacie i przechowywane na naszych serwerach przez okresy określone w Polityce prywatności, aby moderatorzy mogli rozpatrywać zgłoszenia. Czat nie jest prywatny: widzą go inni gracze, a moderatorzy mogą go czytać podczas rozpatrywania zgłoszenia. Nie podawaj na czacie danych osobowych.",
        },
        {
          type: "p",
          text: "Zachowujesz prawa do tego, co piszesz. Udzielasz nam zgody na przechowywanie, wyświetlanie, moderowanie i, w razie potrzeby, usuwanie tych treści w celu prowadzenia gry. Odpowiadasz za to, co publikujesz. Usuwamy treści, które łamią Regulamin lub prawo.",
        },
        {
          type: "p",
          text: "Jeśli przesyłasz nam sugestie lub pomysły, przez grę, naszą stronę internetową lub Discord, możemy z nich swobodnie korzystać, bez wynagrodzenia ani żadnych zobowiązań wobec Ciebie i bez podawania Twojego nazwiska.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. Jak moderujemy",
      blocks: [
        { type: "p", text: "Moderacja łączy narzędzia automatyczne i ludzi:" },
        {
          type: "ul",
          items: [
            "Zanim wiadomość zostanie dostarczona, automatyczny filtr na naszych serwerach sprawdza ją pod kątem limitów częstotliwości, listy słów i wzorców mowy nienawiści. Zablokowana wiadomość nigdy nie jest wysyłana.",
            "Gdy mamy włączoną tę funkcję, dostarczone wiadomości są dodatkowo klasyfikowane przez automatyczną usługę (Gemini firmy Google), która otrzymuje wiadomość oraz Twoje ostatnie wiadomości na tym czacie jako kontekst. Nazwy użytkowników są sprawdzane w ten sam sposób, gdy je ustawiasz lub zmieniasz. Wiadomość zaklasyfikowana jako obraźliwa jest usuwana, a na Twoim koncie odnotowywane jest naruszenie.",
            "Ludzcy moderatorzy rozpatrują zgłoszenia graczy i działają zgodnie z tym, co ustalą. Ich dostęp do historii czatu jest rejestrowany.",
          ],
        },
        {
          type: "p",
          text: "Konsekwencjami naruszeń na czacie są ostrzeżenia i tymczasowe wyciszenia. Naruszenia wykryte automatycznie skutkują najpierw ostrzeżeniem, a przy szybkim powtórzeniu krótkim wyciszeniem. Wyciszenia nakładane przez moderatorów są tymczasowe i wydłużają się z każdym wyciszeniem, które już otrzymałeś, od godzin do miesięcy. Zapis Twoich naruszeń i wyciszeń pozostaje przy Twoim koncie, aby można było rozpoznać powtarzające się zachowania.",
        },
        {
          type: "p",
          text: "Za każdym razem, gdy Cię wyciszamy, usuwamy Twoje treści lub karzemy Twoje konto, informujemy Cię w grze, co zostało zrobione i dlaczego, a Ty możesz to zakwestionować w sposób opisany w sekcji 9.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Egzekwowanie zasad fair play",
      blocks: [
        {
          type: "p",
          text: "Działania w bitwie są weryfikowane na naszych serwerach w czasie rzeczywistym, więc zmodyfikowany klient nie może zmienić wyniku meczu. Automatyczna kontrola regularnie przegląda ostatnie zapisy meczów w poszukiwaniu graczy, którzy trafiają do tych samych meczów znacznie częściej, niż pozwalałby na to przypadek; tak wykrywane są ustawianie meczów i zmowa.",
        },
        {
          type: "p",
          text: "Oszustwa i zmowa są karane stopniowo. Gracz najpierw otrzymuje ostrzeżenie, jedno. Kary zaostrzają się tylko wtedy, gdy po ostrzeżeniu pojawią się nowe dowody, i z odstępem czasu między kolejnymi krokami: reset rankingów i walut, potem pełny reset postępów, a na końcu trwała blokada urządzenia, która blokuje także nowe konta tworzone z tego urządzenia. Konta uczestniczące w poważnych lub powtarzających się oszustwach mogą zostać zamknięte. Przed zastosowaniem resetu zapisujemy migawkę konta, aby karę, która okaże się błędna, można było cofnąć. Zapis kar pozostaje przy Twoim koncie.",
        },
        {
          type: "p",
          text: "Każdej karze towarzyszy powiadomienie w grze wskazujące, co zostało zrobione i dlaczego, a Ty możesz ją zakwestionować w sposób opisany w sekcji 9.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Zgłoszenia i odwołania",
      blocks: [
        {
          type: "p",
          text: "Aby zgłosić gracza lub treści łamiące Regulamin lub prawo, użyj przycisku „Zgłoś” w grze, formularza zgłoszeniowego na naszej [stronie opinii](/feedback) albo napisz na [contact@geofastgames.com](mailto:contact@geofastgames.com). Powiedz nam kto, co i gdzie. Potwierdzamy otrzymanie zgłoszenia i bez zbędnej zwłoki informujemy Cię, co postanowiliśmy. Zgłoszenia rozpatrują ludzie, z pomocą opisanych wyżej narzędzi, w dobrej wierze i bez arbitralności.",
        },
        {
          type: "p",
          text: "Jeśli uważasz, że wyciszenie, kara, blokada lub usunięcie treści były błędne, odwołaj się e-mailem lub na Discordzie w ciągu miesiąca. Sprawę rozpatruje osoba, która nie brała udziału w pierwotnej decyzji, a my odpowiadamy w ciągu 14 dni. Jeśli decyzja była błędna, cofamy ją i, o ile to możliwe, przywracamy to, co zostało utracone. Nic tutaj nie ogranicza Twojego prawa do skierowania sprawy do sądu lub organu ochrony konsumentów.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Waluty wirtualne, przedmioty i zakupy",
      blocks: [
        {
          type: "p",
          text: "Gra ma waluty wirtualne (diamenty, monety i gwiazdy) oraz przedmioty wirtualne, takie jak broń, skórki, ulepszenia i nagrody z Przepustki Bitewnej. Diamenty można kupić za prawdziwe pieniądze przez Google Play lub App Store; monety i gwiazdy zdobywa się grając lub wymienia w grze. Ceny są pokazywane w Twojej lokalnej walucie w sklepie i w grze przed zakupem.",
        },
        {
          type: "p",
          text: "Waluty i przedmioty wirtualne są Ci licencjonowane do użytku w grze. Nie są Twoją własnością, nie mają wartości poza grą, nie można ich wymienić na prawdziwe pieniądze, towary ani usługi, ani przenieść na inne konto lub inną osobę.",
        },
        {
          type: "p",
          text: "Zakupy są dostarczane natychmiast. Kupując, prosisz nas o natychmiastowe dostarczenie i przyjmujesz do wiadomości, że po rozpoczęciu dostarczania ustawowe 14-dniowe prawo odstąpienia od umowy przestaje obowiązywać. Poza tym zakupy są ostateczne, chyba że prawo daje Ci prawo do zwrotu pieniędzy. Wnioski o zwrot kieruje się do sklepu, w którym dokonano zakupu i który obsługuje płatność; my nigdy nie widzimy Twoich danych płatniczych.",
        },
        {
          type: "p",
          text: "Możemy zmieniać, równoważyć, dodawać lub wycofywać waluty i przedmioty wirtualne z uzasadnionych powodów: aby utrzymać grę zbalansowaną i przyjemną, naprawić błędy, ze względów bezpieczeństwa lub z powodu wymogów prawnych. Jeśli zmiana istotnie wpłynęłaby na coś, za co niedawno zapłaciłeś, informujemy Cię z wyprzedzeniem, a jeśli prawo daje Ci z powodu takiej zmiany prawo do rozwiązania umowy i zwrotu pieniędzy, respektujemy je. Twoje ustawowe prawa konsumenta, w tym prawo do gry działającej zgodnie z opisem, pozostają nienaruszone.",
        },
        {
          type: "p",
          text: "Gra nie ma wymuszonych reklam. Tam, gdzie gra oferuje opcjonalne reklamy z nagrodą, ich obejrzenie jest Twoim wyborem, a my możemy tę ofertę zmienić lub usunąć.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. Przepustka Bitewna",
      blocks: [
        {
          type: "p",
          text: "Przepustka Bitewna to subskrypcja kupowana przez Google Play lub App Store. Odnawia się automatycznie co miesiąc po cenie pokazanej w sklepie, dopóki jej nie anulujesz. Możesz ją anulować w dowolnym momencie w ustawieniach subskrypcji swojego sklepu; przepustka pozostaje wtedy aktywna do końca opłaconego okresu, a Ty zachowujesz odebrane nagrody. Zmiany cen obowiązują od następnego odnowienia, a sklep informuje Cię o nich, zanim wejdą w życie.",
        },
        {
          type: "p",
          text: "Nagrody z Przepustki Bitewnej odblokowuje się grając w trakcie sezonu; sama przepustka nie daje każdej nagrody. Zwroty za subskrypcje obsługuje sklep zgodnie ze swoimi zasadami i prawem.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Nagrody za polecenia i program twórców",
      blocks: [
        {
          type: "p",
          text: "Gra nagradza Cię, gdy nowy gracz dołączy z Twoim kodem polecającym, i nagradza również jego. Nagrody za polecenia są przeznaczone dla prawdziwych nowych graczy. Polecanie samego siebie, własnych dodatkowych kont lub kont założonych tylko po to, by zgarnąć nagrodę, jest niedozwolone, a tak zdobyte nagrody są odbierane.",
        },
        {
          type: "p",
          text: "Nasz program twórców nagradza graczy publikujących filmy o grze, gdy ich treści osiągną określone progi wyświetleń. Progi, nagrody i warunki uczestnictwa są publikowane w grze i mogą się zmieniać. Nagrody weryfikujemy i przyznajemy ręcznie, a w razie wątpliwości decydujemy my. Nagrody, o które ubiegano się przy użyciu sfałszowanych wyświetleń lub treści łamiących Regulamin, są odmawiane lub odbierane.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Usługi podmiotów trzecich",
      blocks: [
        {
          type: "p",
          text: "Gra korzysta z Google Play i App Store do pobierania, płatności i subskrypcji; z Google i Apple do opcjonalnego logowania; z Google AdMob do opcjonalnych reklam z nagrodą; oraz z Discorda do naszego serwera społeczności. Korzystanie z tych usług podlega ich własnym regulaminom i politykom prywatności, nad którymi nie mamy kontroli.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Dostępność i zmiany w grze",
      blocks: [
        {
          type: "p",
          text: "Staramy się utrzymywać dostępność gry, ale nie możemy obiecać, że nigdy nie dojdzie do przerw. Funkcje online mogą być niedostępne podczas prac konserwacyjnych, z powodu problemów technicznych lub z przyczyn od nas niezależnych. Tryby offline działają dalej bez połączenia.",
        },
        {
          type: "p",
          text: "Gra jest usługą rozwijaną na żywo i zmienia się z czasem: dodajemy, dostosowujemy i usuwamy funkcje, broń, narody, sezony i wydarzenia, aby utrzymać ją zbalansowaną i świeżą, naprawiać problemy, ze względów bezpieczeństwa i aby spełnić wymogi prawne. Zmiany, które istotnie wpływają na to, jak możesz grać, są zapowiadane w grze z wyprzedzeniem. Twoje ustawowe prawa pozostają nienaruszone.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Zakończenie umowy",
      blocks: [
        {
          type: "p",
          text: "Możesz przestać grać w dowolnym momencie, odinstalowując grę, i możesz usunąć swoje konto w grze, w swoim profilu, albo na naszej [stronie usuwania danych](/datadeletion). Usunięcie konta nieodwracalnie usuwa Twoje postępy, waluty wirtualne i przedmioty; nic nie jest za nie zwracane.",
        },
        {
          type: "p",
          text: "Możemy zawiesić lub zamknąć Twoje konto, jeśli poważnie lub wielokrotnie łamiesz Regulamin albo jeśli wymaga tego prawo. Z wyjątkiem poważnych przypadków, takich jak oszustwa, nadużycia lub obowiązek prawny, najpierw Cię ostrzegamy i dajemy możliwość odpowiedzi. Podajemy Ci powód i sposób odwołania (sekcja 9). Zamknięcie konta kończy Twoją licencję i dostęp do jego walut i przedmiotów wirtualnych.",
        },
        {
          type: "p",
          text: "Jeśli kiedykolwiek będziemy musieli zamknąć grę, poinformujemy o tym z co najmniej 30-dniowym wyprzedzeniem w grze i na naszej stronie internetowej. Waluty i przedmioty wirtualne kończą się wraz z grą. Twoje ustawowe prawa dotyczące niedawnych zakupów pozostają nienaruszone.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. Nasza odpowiedzialność",
      blocks: [
        {
          type: "p",
          text: "Odpowiadamy wobec Ciebie zgodnie z prawem. Nie wyłączamy ani nie ograniczamy naszej odpowiedzialności za śmierć lub uszkodzenie ciała spowodowane naszym niedbalstwem, za oszustwo, za działanie umyślne lub rażące niedbalstwo ani za cokolwiek innego, czego nie można wyłączyć na podstawie przepisów chroniących Cię jako konsumenta, w tym Twojego prawa do gry zgodnej z tym, co obiecano.",
        },
        {
          type: "p",
          text: "Poza tym odpowiadamy tylko za szkody, które były przewidywalne w chwili akceptacji Regulaminu i które wynikają z naruszenia go przez nas. Gra jest darmowa i udostępniana jako usługa rozwijana na żywo; nie odpowiadamy za straty spowodowane przerwami, zachowaniem innych graczy ani zdarzeniami poza naszą rozsądną kontrolą, chyba że prawo stanowi inaczej.",
        },
        {
          type: "p",
          text: "Ty odpowiadasz za szkody, które wyrządzisz nam, łamiąc Regulamin, w zakresie dozwolonym przez prawo.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Prywatność",
      blocks: [
        {
          type: "p",
          text: "To, jak zbieramy i wykorzystujemy Twoje dane, opisuje nasza [Polityka prywatności](/privacy). Nie jest ona częścią Regulaminu i nie zależy od Twojej zgody na niego: informuje Cię, co robimy i jakie masz prawa.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Zmiany Regulaminu",
      blocks: [
        {
          type: "p",
          text: "Zmieniamy Regulamin, gdy zmienia się gra, prawo lub nasze usługi, albo aby uczynić go jaśniejszym. O zmianach, które wpływają na Twoje prawa lub sposób gry, informujemy w grze z co najmniej 30-dniowym wyprzedzeniem, zanim wejdą w życie, a jeśli się nie zgadzasz, możesz do tego czasu przestać grać i usunąć konto. Wyjaśnienia i poprawki, które Cię nie dotyczą, wchodzą w życie z chwilą publikacji. Data na górze mówi Ci, kiedy weszła w życie obecna wersja.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Prawo, spory i reklamacje",
      blocks: [
        {
          type: "p",
          text: "Regulamin podlega prawu belgijskiemu. Jeśli mieszkasz w innym kraju, zachowujesz ochronę wynikającą z bezwzględnie obowiązujących przepisów konsumenckich tego kraju i możesz wnieść powództwo przed sądy swojego miejsca zamieszkania. My możemy wnieść powództwo przeciwko Tobie tylko tam.",
        },
        {
          type: "p",
          text: "Jeśli masz reklamację, skontaktuj się z nami najpierw pod adresem [contact@geofastgames.com](mailto:contact@geofastgames.com) lub na Discordzie; większość spraw da się załatwić bezpośrednio. Możesz też zwrócić się do organu pozasądowego rozstrzygania sporów konsumenckich w swoim kraju; w Belgii jest to Służba Mediacji Konsumenckiej (Consumentenombudsdienst / Service de Médiation pour le Consommateur). Regulamin nie zawiera klauzuli arbitrażowej ani zrzeczenia się prawa do powództw grupowych.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Postanowienia końcowe",
      blocks: [
        {
          type: "p",
          text: "Kontaktujemy się z Tobą przez powiadomienia w grze, na naszej stronie internetowej oraz, jeśli powiązałeś adres e-mail, e-mailem. Ty kontaktujesz się z nami pod adresem [contact@geofastgames.com](mailto:contact@geofastgames.com); to również nasz adres do doręczeń prawnych i punkt kontaktowy dla organów władzy.",
        },
        {
          type: "p",
          text: "Jeśli część Regulaminu okaże się nieważna, reszta pozostaje w mocy. Jeśli w danym momencie nie egzekwujemy jakiejś zasady, nadal możemy ją egzekwować później. Możemy przenieść tę umowę na spółkę, która przejmie grę, pod warunkiem że Twoje prawa nie zostaną ograniczone; Ty nie możesz przenieść swojego konta ani tej umowy. Regulamin i Polityka prywatności stanowią całość umowy między Tobą a nami dotyczącej gry.",
        },
      ],
    },
  ],
};
