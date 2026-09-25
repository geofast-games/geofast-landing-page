import type { DataDeletionContent } from "./types";

// Italian. Informal "tu" throughout, as in the Italian privacy policy and
// Terms. The page is the "Richiesta di cancellazione dei dati"; both other
// documents link to it as the "pagina per la cancellazione dei dati".
// Terminology follows them: "account", "dispositivo", "nome utente",
// "progressi", "valute virtuali e oggetti", "database attivo" and "sistemi
// attivi", "archivio", "abbonamento", "store" for the app store; "Battle
// Pass" stays untranslated, as in the game. The privacy policy is the
// "Informativa sulla privacy", the Terms are the "Termini di servizio", as
// they name themselves.
export const it: DataDeletionContent = {
  lang: "it",
  label: "Italiano",
  pageTitle: "Richiesta di cancellazione dei dati | Geofast: Battle of Nations",
  metaDescription:
    "Come eliminare il tuo account e i tuoi dati personali di Geofast: Battle of Nations, nel gioco o via e-mail, cosa viene eliminato, cosa viene conservato e quanto tempo occorre.",
  gameName: "Geofast: Battle of Nations",
  docName: "Richiesta di cancellazione dei dati",
  lastUpdated: "Ultimo aggiornamento: 25 settembre 2026",
  sectionsLabel: "Sezioni",
  languageLabel: "Lingua",
  contact: {
    line: "Domande? Chiedi su Discord. Richieste sui tuoi dati: scrivici un'e-mail.",
    discord: "Chiedi su Discord",
    back: "Torna a Geofast Games",
  },
  request: {
    title: "Richiedi la cancellazione via e-mail",
    text: "Per quando non riesci più ad aprire il gioco. Il pulsante apre un'e-mail indirizzata a noi con la richiesta già scritta; inserisci i dati del tuo account e inviala. Se su questo dispositivo non hai un'app di posta, scrivi a contact@geofastgames.com con gli stessi dati.",
    button: "Invia richiesta di cancellazione",
    emailSubject: "Richiesta di cancellazione dei dati - Geofast: Battle of Nations",
    emailBody: `Salve Geofast Games,

Desidero che il mio account Geofast: Battle of Nations e i miei dati personali vengano cancellati.

Il mio account:
- Nome utente nel gioco: [da compilare]
- E-mail collegata all'account, se presente: [da compilare]
- Nazione per cui gioco: [da compilare]
- Dispositivo usato per giocare: [da compilare]

Sono consapevole che la cancellazione è definitiva, che i miei progressi, le mie valute e i miei oggetti andranno perduti e che un abbonamento Battle Pass deve essere annullato separatamente nel mio store di applicazioni.

Grazie.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Il tuo diritto di cancellare i tuoi dati",
      blocks: [
        {
          type: "p",
          text: "Puoi far eliminare il tuo account *Geofast: Battle of Nations* e i dati personali a esso collegati in qualsiasi momento, ovunque tu viva, senza indicare un motivo. Ci sono due modi: nel gioco, con effetto immediato, oppure via e-mail se non riesci più ad aprire il gioco.",
        },
        {
          type: "p",
          text: "L'eliminazione dell'account è l'unica forma di cancellazione che offriamo: non eliminiamo parti di un account conservando il resto.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Prima di eliminare",
      blocks: [
        {
          type: "ul",
          items: [
            "**Annulla prima il tuo Battle Pass.** Un abbonamento è un contratto con il tuo store di applicazioni, ed eliminare il tuo account non lo annulla. Annullalo nelle impostazioni degli abbonamenti di Google Play o dell'App Store, altrimenti continuerà a rinnovarsi.",
            "**Non viene rimborsato nulla.** Valute virtuali, oggetti e tempo di abbonamento non utilizzato terminano con l'account, come stabilito nei nostri [Termini di servizio](/termsofservice).",
            "**Non si può annullare.** Non c'è alcun periodo di tolleranza né un backup da cui ripristinare.",
            "**Vale per ogni dispositivo.** L'account scompare da ogni dispositivo a cui era collegato, non solo da quello da cui lo elimini.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Elimina il tuo account nel gioco",
      blocks: [
        {
          type: "p",
          text: "Apri il tuo profilo, tocca **Elimina il mio account** e digita il tuo nome utente per confermare. L'account viene eliminato subito. Al successivo avvio del gioco su quel dispositivo, viene creato un nuovo account vuoto.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Oppure chiedilo a noi via e-mail",
      blocks: [
        {
          type: "p",
          text: "Se hai disinstallato il gioco o perso il dispositivo, scrivi a [contact@geofastgames.com](mailto:contact@geofastgames.com), oppure usa il pulsante qui sotto, indicando il tuo nome utente nel gioco e, se ne hai uno, l'indirizzo e-mail collegato al tuo account. Scrivi da quell'indirizzo: è così che sappiamo che la richiesta arriva dal titolare dell'account. Se il tuo account non ha un indirizzo e-mail, comunicaci il tuo nome utente e la nazione per cui giochi, e confermeremo tramite il gioco che l'account è tuo prima di eliminare qualcosa.",
        },
        {
          type: "p",
          text: "Confermiamo di aver ricevuto la tua richiesta, eliminiamo entro 30 giorni e confermiamo di nuovo quando è fatto. Se non riusciamo ad associare i tuoi dati a un account, ti chiediamo altre informazioni prima di agire; non eliminiamo mai un account su una richiesta non verificata.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "Cosa viene eliminato",
      blocks: [
        {
          type: "p",
          text: "L'eliminazione del tuo account rimuove l'account e tutto ciò che vi è memorizzato:",
        },
        {
          type: "ul",
          items: [
            "il tuo account, il nome utente e i collegamenti a dispositivo, e-mail, Google o Apple a esso associati;",
            "i tuoi progressi: posizioni in classifica, oggetti, valute virtuali, potenziamenti, obiettivi, progressi della stagione e cronologia delle battaglie;",
            "la tua lista amici e il tuo codice di riferimento;",
            "il tuo token per le notifiche push.",
          ],
        },
        {
          type: "p",
          text: "I record tecnici che erano collegati all'account, come gli eventi di analisi, i messaggi della chat ancora presenti nel nostro database attivo e i registri delle partite e del primo avvio descritti nell'Informativa sulla privacy, vengono rimossi dai nostri sistemi attivi entro 30 giorni.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "Cosa conserviamo, e perché",
      blocks: [
        {
          type: "ul",
          items: [
            "I documenti di acquisto che la normativa contabile ci impone di conservare, per il periodo stabilito da tale normativa.",
            "Le statistiche che non ti identificano più, come il numero di battaglie giocate in un determinato giorno.",
            "I record che avevano già lasciato il database attivo per il nostro archivio prima dell'eliminazione, come descritto in [per quanto tempo conserviamo i dati](/privacy#retention) nell'Informativa sulla privacy.",
            "I dati detenuti dagli store di applicazioni, da Google AdMob o da Discord in base alle loro informative. Non li controlliamo; per farli rimuovere, contattali.",
          ],
        },
        {
          type: "p",
          text: "I file locali sul tuo dispositivo sono tuoi: disinstallare il gioco li rimuove.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Altre richieste sui tuoi dati",
      blocks: [
        {
          type: "p",
          text: "Puoi anche chiedere una copia dei tuoi dati, far rettificare i dati inesatti oppure opporti al modo in cui li usiamo. Lo stesso indirizzo e-mail gestisce tutte queste richieste, e l'[Informativa sulla privacy](/privacy#rights) descrive ciascuno di questi diritti. Rispondiamo entro un mese.",
        },
      ],
    },
  ],
};
