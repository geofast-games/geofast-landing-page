import type { PrivacyContent } from "./types";

// Italian. Informal "tu" throughout, matching the game's Italian translation
// and the register of the Italian privacy notices of large consumer
// platforms. Legal vocabulary follows the official Italian text of the GDPR:
// "titolare del trattamento", "base giuridica", "legittimo interesse",
// "cancellazione", "limitazione del trattamento", "autorita di controllo",
// "clausole contrattuali tipo". The document is called "Informativa sulla
// privacy", the usual name for an article 13 notice, rather than the game
// menu's "Politica sulla privacy". Game terms follow the game: "battaglia",
// "nazione", "chat", "monete", "classifiche", "negozio", "stagione",
// "replay"; "Battle Pass" stays untranslated, as in the game. Bans are
// "blocchi".
export const it: PrivacyContent = {
  lang: "it",
  label: "Italiano",
  pageTitle: "Informativa sulla privacy | Geofast: Battle of Nations",
  metaDescription:
    "Quali dati raccoglie Geofast: Battle of Nations, come vengono usati, con chi vengono condivisi e come chiederne la cancellazione.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Informativa sulla privacy",
  lastUpdated: "Ultimo aggiornamento: 25 settembre 2026",
  sectionsLabel: "Sezioni",
  languageLabel: "Lingua",
  legalBasisLabel: "Base giuridica:",
  contact: {
    line: "Domande? Chiedi su Discord. Richieste sui tuoi dati: scrivici un'e-mail.",
    discord: "Chiedi su Discord",
    back: "Torna a Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Chi siamo",
      blocks: [
        {
          type: "p",
          text: "Geofast Games è uno studio di videogiochi indipendente con sede in Belgio. Sviluppiamo *Geofast: Battle of Nations* e gestiamo questo sito web. Siamo il titolare del trattamento dei dati personali descritti in questa informativa: decidiamo noi cosa viene raccolto e perché.",
        },
        {
          type: "p",
          text: "Puoi contattarci all'indirizzo [contact@geofastgames.com](mailto:contact@geofastgames.com). Siamo uno studio di due persone e non abbiamo nominato un responsabile della protezione dei dati; allo stesso indirizzo rispondono le persone responsabili dei tuoi dati.",
        },
        {
          type: "p",
          text: "Questa informativa riguarda il gioco su iOS e Android e il sito web geofastgames.com. Non riguarda Discord, l'App Store, Google Play o altri servizi che usi insieme al gioco; questi hanno le proprie informative, collegate dove vengono menzionati.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "In breve",
      blocks: [
        {
          type: "table",
          head: ["Cosa", "Perché", "Per quanto tempo"],
          rows: [
            [
              "Account: un identificativo del dispositivo, il tuo nome utente e, se lo scegli, un indirizzo e-mail con password oppure un accesso con Google o Apple",
              "Per gestire il tuo account e permetterti di giocare online",
              "Finché non elimini il tuo account; non eliminiamo gli account inattivi",
            ],
            [
              "Gioco: partite, classifiche, oggetti, conferme di acquisto",
              "Per far funzionare il gioco, le classifiche e il tuo inventario",
              "Finché non elimini il tuo account; replay delle battaglie 7 giorni, poi archiviati",
            ],
            [
              "Messaggi della chat",
              "Per recapitarli e moderare gli abusi",
              "Chat di battaglia 15 giorni, poi eliminata; altre chat 90 giorni, poi archiviate",
            ],
            [
              "Indirizzo IP, identificativo del dispositivo, modello di telefono",
              "Per individuare imbrogli e collusioni e far rispettare i blocchi",
              "Registri delle partite 30 giorni e registro del primo avvio 90 giorni, poi archiviati; l'identificativo del dispositivo resta legato al tuo account; un registro di blocco resta finché non revochiamo il blocco",
            ],
            [
              "Token per le notifiche push",
              "Per inviarti notifiche che puoi disattivare",
              "Finché il token non smette di funzionare (per esempio dopo la disinstallazione) o non elimini il tuo account",
            ],
            [
              "Eventi di analisi su come giochi",
              "Per capire come si gioca e correggere i problemi",
              "400 giorni, poi archiviati",
            ],
            [
              "Identificativo pubblicitario, letto dal software di Google AdMob",
              "Per caricare e mostrare annunci con ricompensa che puoi scegliere di guardare",
              "Inviato a Google all'avvio del gioco e al caricamento di un annuncio; non lo conserviamo; si applica l'informativa di AdMob",
            ],
          ],
        },
        { type: "lead", text: "Quattro cose da sapere prima di continuare a leggere" },
        {
          type: "ul",
          items: [
            "La chat non è privata. I messaggi sono conservati fino a 15 giorni (chat di battaglia) o 90 giorni (altre chat) affinché i moderatori possano esaminare le segnalazioni; ogni messaggio passa attraverso un filtro automatico e, quando attiveremo questa funzione, i messaggi saranno classificati anche dal servizio Gemini di Google.",
            "Registriamo il tuo indirizzo IP e un identificativo del dispositivo quando giochi, per individuare gli imbrogli e rendere efficaci i blocchi.",
            "I nostri server si trovano a Francoforte, in Germania. Alcuni fornitori che usiamo (Google, Apple) trattano dati al di fuori dell'Unione europea.",
            "I record che scadono dal nostro database attivo (chat diverse dalla chat di battaglia, registri delle partite, dati di analisi e altro) vengono archiviati a Francoforte invece di essere distrutti. Vedi «Per quanto tempo conserviamo i dati».",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Il tuo account",
      blocks: [
        {
          type: "p",
          text: "Quando giochi online per la prima volta, creiamo un account per te e lo colleghiamo a un identificativo generato sul tuo dispositivo. Non serve nient'altro per giocare, e non devi mai comunicarci il tuo nome.",
        },
        {
          type: "p",
          text: "Scegli un nome utente, visibile agli altri giocatori. Oltre a questo conserviamo ciò di cui il gioco ha bisogno per funzionare: i tuoi progressi, le tue impostazioni e i tuoi amici, e la versione del gioco che usi.",
        },
        {
          type: "p",
          text: "Se vuoi conservare i tuoi progressi su più dispositivi, puoi aggiungere un indirizzo e-mail con password oppure accedere con Google o Apple. Le password sono conservate in forma di hash, il che significa che non possiamo leggerle. Da Google o Apple riceviamo solo quanto serve per collegare l'account, e usiamo il tuo indirizzo e-mail soltanto per proteggere l'account e reimpostare la password.",
        },
        {
          type: "p",
          text: "L'identificativo del dispositivo è necessario per giocare online. Tutto il resto è facoltativo.",
        },
        { type: "basis", text: "l'esecuzione del nostro contratto con te (la fornitura del gioco)." },
      ],
    },
    {
      id: "gameplay",
      title: "Gioco, progressi e acquisti",
      blocks: [
        {
          type: "p",
          text: "Per far funzionare le battaglie online, le classifiche e il tuo inventario conserviamo i tuoi progressi di gioco: risultati delle partite, posizioni in classifica, gli oggetti e le valute che possiedi e i tuoi progressi negli eventi e nelle stagioni. Le tue battaglie recenti sono conservate come cronologia; i replay delle battaglie lasciano il database attivo dopo 7 giorni e vengono archiviati.",
        },
        {
          type: "p",
          text: "I pagamenti sono gestiti interamente da Google Play o dall'App Store. Non vediamo mai i dati della tua carta o del tuo conto. Lo store ci comunica cosa hai acquistato, e noi conserviamo quella conferma e, per il Battle Pass, lo stato dell'abbonamento, per poter consegnare gli oggetti, ripristinare gli acquisti e aiutarti con l'assistenza.",
        },
        {
          type: "basis",
          text: "l'esecuzione del nostro contratto con te. I documenti di acquisto che dobbiamo conservare a fini contabili sono conservati in base ai nostri obblighi legali.",
        },
      ],
    },
    {
      id: "chat",
      title: "Chat e moderazione",
      blocks: [
        {
          type: "p",
          text: "Il gioco ha una chat tra giocatori. I messaggi vengono recapitati agli altri giocatori di quella chat e conservati sui nostri server: la chat all'interno di una battaglia per 15 giorni, dopo i quali viene eliminata; tutte le altre chat per 90 giorni, dopo i quali vengono archiviate (vedi «Per quanto tempo conserviamo i dati»). Li conserviamo affinché i moderatori possano indagare sulle segnalazioni di abusi o imbrogli. Ogni consultazione da parte di un moderatore viene registrata.",
        },
        {
          type: "p",
          text: "La moderazione funziona in tre passaggi. Primo, ogni messaggio passa attraverso un filtro automatico sui nostri server (limiti di frequenza, una lista di parole e schemi di incitamento all'odio) prima di essere recapitato; un messaggio bloccato non viene mai inviato. Secondo, quando attiveremo questa funzione, i messaggi recapitati saranno classificati anche dal servizio Gemini di Google, che riceve il messaggio e i tuoi messaggi recenti in quella chat come contesto. I nomi utente vengono controllati da Gemini quando li imposti o li modifichi. Un messaggio che Gemini classifica come abusivo viene eliminato e viene registrata una violazione. Terzo, i moderatori umani intervengono sulle segnalazioni.",
        },
        {
          type: "p",
          text: "Le violazioni comportano avvertimenti e silenziamenti temporanei della chat, come previsto dai nostri [Termini di servizio](/termsofservice). Il registro delle tue violazioni e dei tuoi silenziamenti resta sul tuo account affinché i comportamenti ripetuti possano essere riconosciuti. Questi passaggi automatici riguardano solo la tua possibilità di chattare. Se ritieni che una decisione sia stata sbagliata, scrivici un'e-mail o chiedi su Discord e una persona la esaminerà.",
        },
        {
          type: "p",
          text: "Non condividere dati personali in chat. Gli altri giocatori possono vedere quello che scrivi.",
        },
        {
          type: "basis",
          text: "il nostro legittimo interesse a mantenere il gioco sicuro ed equo per tutti coloro che vi giocano.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Fair play e sicurezza",
      blocks: [
        {
          type: "p",
          text: "Gli imbrogli rovinano un gioco competitivo per tutti, perciò conserviamo una piccola quantità di dati tecnici per individuarli e rendere efficaci i blocchi:",
        },
        {
          type: "ul",
          items: [
            "Al primo avvio del gioco registriamo l'identificativo del tuo dispositivo, il modello di telefono, la piattaforma e il tuo indirizzo IP, insieme ai passaggi del tutorial che completi. Questo record lascia il database attivo dopo 90 giorni e viene archiviato.",
            "Per ogni partita online registriamo quali account vi hanno partecipato, con il loro identificativo del dispositivo e il loro indirizzo IP. Un controllo automatico esamina regolarmente i record recenti in cerca di coppie di giocatori che finiscono nelle stesse partite molto più spesso di quanto il caso consenta. I registri delle partite lasciano il database attivo dopo 30 giorni e vengono archiviati.",
            "Gli imbrogli accertati comportano sanzioni, fino al blocco, come previsto dai nostri [Termini di servizio](/termsofservice). La cronologia delle sanzioni resta sul tuo account, e puoi chiedere che una persona riesamini qualsiasi sanzione.",
            "Un blocco del dispositivo impedisce anche la creazione di nuovi account da quel dispositivo. I registri di blocco non hanno una data di fine; li rimuoviamo quando un riesame dimostra che il blocco era sbagliato.",
          ],
        },
        {
          type: "p",
          text: "Le azioni di battaglia in sé vengono convalidate sui nostri server mentre avvengono, il che non richiede dati oltre alla partita stessa. Non usiamo il tuo indirizzo IP per determinare la tua posizione. Quando ti unisci per la prima volta, il gioco ti suggerisce una nazione in base alle impostazioni di lingua e regione del tuo dispositivo; quella lettura avviene sul dispositivo, e puoi scegliere qualsiasi altra nazione.",
        },
        {
          type: "basis",
          text: "il nostro legittimo interesse a prevenire imbrogli, frodi e abusi e a mantenere sicuro il servizio.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Notifiche push",
      blocks: [
        {
          type: "p",
          text: "Se consenti le notifiche, il tuo dispositivo ci fornisce un token push, che conserviamo e usiamo per informarti degli eventi di gioco: ciò che riguarda il tuo account, i tuoi amici e la tua nazione, nuovi eventi e stagioni, e un promemoria se non giochi da un po'.",
        },
        {
          type: "p",
          text: "Le notifiche vengono recapitate tramite Firebase Cloud Messaging (Google) su Android e l'Apple Push Notification service su iOS. Puoi disattivarle in qualsiasi momento nelle impostazioni del tuo dispositivo, il che impedisce che vengano mostrate; il token in sé resta finché non diventa non valido (per esempio quando disinstalli il gioco) o finché non elimini il tuo account. Le notifiche recapitate sono conservate da parte nostra per 30 giorni, poi archiviate.",
        },
        {
          type: "basis",
          text: "il nostro legittimo interesse a tenerti informato sul tuo account e sul gioco a cui giochi, con una disattivazione che richiede un solo tocco.",
        },
      ],
    },
    {
      id: "ads",
      title: "Annunci con ricompensa facoltativi",
      blocks: [
        {
          type: "p",
          text: "Il gioco non ha pubblicità forzata: niente interrompe una battaglia o un menu. Il negozio offre annunci con ricompensa che vengono riprodotti solo quando li tocchi, in cambio di valuta di gioco.",
        },
        {
          type: "p",
          text: "Gli annunci sono forniti da Google AdMob. Il suo software fa parte del gioco, si avvia con esso e carica un annuncio in background in modo che ce ne sia uno pronto se lo tocchi. In quel momento, che tu guardi o meno un annuncio, AdMob riceve il tuo identificativo pubblicitario e una posizione approssimativa ricavata dal tuo indirizzo IP; se ne guardi uno, anche il modo in cui hai interagito con esso. Su iOS il sistema ti chiede il permesso al primo avvio prima che l'identificativo pubblicitario venga usato per il tracciamento; su Android puoi reimpostare o eliminare l'identificativo pubblicitario nelle impostazioni del tuo dispositivo. Google descrive cosa fa con questi dati nella sua [informativa sulla privacy](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "il tuo consenso, espresso tramite le autorizzazioni e le impostazioni pubblicitarie del tuo dispositivo, dove puoi revocarlo in qualsiasi momento.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analisi",
      blocks: [
        {
          type: "p",
          text: "Per capire come viene giocato il gioco e per trovare i problemi, il gioco invia eventi ai nostri server: inizio e fine della sessione, battaglie giocate e concluse, progressi nel tutorial, acquisti nel negozio, notifiche aperte, errori e, su Android, il referrer dello store che ti ha portato al gioco. Ogni evento contiene il tuo identificativo di account, l'identificativo del dispositivo, la piattaforma, il modello di telefono e la versione del gioco. Non usiamo Google Analytics, Firebase Analytics né altri servizi di analisi di terze parti. I rapporti sugli arresti anomali ci arrivano tramite Google Play e l'App Store in base alle loro informative.",
        },
        {
          type: "p",
          text: "Gli eventi di analisi sono conservati per 400 giorni. Le statistiche che ne derivano non contengono dati personali e sono conservate a tempo indeterminato.",
        },
        {
          type: "basis",
          text: "il nostro legittimo interesse a migliorare il gioco e a mantenerlo funzionante.",
        },
      ],
    },
    {
      id: "support",
      title: "Assistenza e community",
      blocks: [
        {
          type: "p",
          text: "Se ci scrivi un'e-mail, conserviamo lo scambio per il tempo necessario a gestirlo.",
        },
        {
          type: "p",
          text: "Il nostro server Discord funziona su Discord secondo l'[informativa sulla privacy di Discord](https://discord.com/privacy). I moderatori che vi operano possono consultare la cronologia della chat di gioco per gestire le segnalazioni, come descritto in «Chat e moderazione».",
        },
        {
          type: "basis",
          text: "l'esecuzione del nostro contratto con te (assistenza) e il nostro legittimo interesse a gestire una community intorno al gioco.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Con chi condividiamo i dati",
      blocks: [
        {
          type: "p",
          text: "Non vendiamo dati personali e non li condividiamo con intermediari di dati. Le società elencate di seguito trattano dati per nostro conto o li ricevono per il modo in cui il gioco funziona:",
        },
        {
          type: "table",
          head: ["Fornitore", "Per cosa", "Dove"],
          rows: [
            ["DigitalOcean", "Hosting dei nostri server di gioco e del database", "Francoforte, Germania"],
            [
              "Gcore",
              "Rete di distribuzione dei contenuti che trasporta parte del traffico del gioco verso i nostri server; vede il tuo indirizzo IP in transito",
              "Server edge in tutto il mondo; la società ha sede in Lussemburgo",
            ],
            [
              "Google Cloud Storage",
              "Archivio dei record scaduti (vedi «Per quanto tempo conserviamo i dati»)",
              "Francoforte, Germania",
            ],
            [
              "Google (Gemini API)",
              "Classificazione dei nomi utente e, quando attivata, dei messaggi della chat",
              "In tutto il mondo: Google non si impegna a una regione per questa API",
            ],
            ["Google AdMob", "Annunci con ricompensa che scegli di guardare", "Stati Uniti"],
            ["Google Firebase Cloud Messaging", "Recapito delle notifiche push su Android", "Stati Uniti"],
            ["Apple Push Notification service", "Recapito delle notifiche push su iOS", "Stati Uniti"],
            ["Zoho Mail", "La nostra posta elettronica, comprese le e-mail di reimpostazione della password", "Unione europea"],
            [
              "Google Play e App Store",
              "Accesso, pagamenti, abbonamenti e rapporti sugli arresti anomali",
              "Secondo le loro informative",
            ],
          ],
        },
        {
          type: "p",
          text: "Ciascuno di questi fornitori è tenuto per contratto a proteggere i tuoi dati almeno quanto descritto in questa informativa e a usarli solo per la finalità indicata. Gli altri giocatori vedono il tuo nome utente, il tuo profilo di gioco e quello che scrivi in chat. Comunichiamo dati alle autorità solo quando la legge lo richiede.",
        },
      ],
    },
    {
      id: "storage",
      title: "Dove sono conservati i tuoi dati",
      blocks: [
        {
          type: "p",
          text: "I nostri server, il database e i backup sono ospitati a Francoforte, in Germania, e il nostro archivio di record scaduti si trova in un bucket Google Cloud Storage nella stessa città. I tuoi dati restano nell'Unione europea, salvo dove un fornitore sopra elencato li tratta negli Stati Uniti o, per la Gemini API, ovunque Google la esegua. Per questi trasferimenti ci basiamo sulle clausole contrattuali tipo della Commissione europea e, dove il fornitore è certificato, sul Quadro UE-USA per la protezione dei dati personali (Data Privacy Framework).",
        },
      ],
    },
    {
      id: "retention",
      title: "Per quanto tempo conserviamo i dati",
      blocks: [
        {
          type: "table",
          head: ["Dati", "Conservati per"],
          rows: [
            ["Account, progressi, inventario, amici, conferme di acquisto", "Finché non elimini il tuo account"],
            [
              "Cronologia delle violazioni e dei silenziamenti della chat, cronologia delle sanzioni per collusione",
              "Per tutta la vita dell'account (i silenziamenti in sé sono temporanei)",
            ],
            ["Blocchi del dispositivo", "Finché non li revochiamo"],
            ["Eventi di analisi", "400 giorni, poi archiviati"],
            ["Chat diverse dalla chat di battaglia, compresi i messaggi diretti", "90 giorni, poi archiviate"],
            [
              "Cronologia delle transazioni di monete e XP",
              "90 giorni (cronologia XP: 90 giorni dalla tua ultima attività), poi archiviata",
            ],
            ["Registro del primo avvio con indirizzo IP e modello di telefono", "90 giorni, poi archiviato"],
            [
              "Registri dei partecipanti per partita con indirizzo IP e identificativo del dispositivo",
              "30 giorni, poi archiviati",
            ],
            ["Notifiche recapitate, progressi giornalieri", "30 giorni, poi archiviati"],
            ["Chat di battaglia", "15 giorni, poi eliminata"],
            ["Replay delle battaglie", "7 giorni, poi archiviati"],
            ["Eventi di navigazione nel negozio", "3 giorni, poi eliminati"],
          ],
        },
        {
          type: "p",
          text: "Le righe contrassegnate con «poi archiviati» vengono copiate in un archivio a Francoforte prima di lasciare il database attivo. Usiamo l'archivio per le statistiche e per indagare su abusi passati; l'accesso è limitato ai due sviluppatori, e nulla del suo contenuto è raggiungibile dal gioco. Conserviamo i record archiviati per il tempo in cui servono a tali finalità e li eliminiamo quando non servono più.",
        },
        {
          type: "p",
          text: "Quando elimini il tuo account, eliminiamo i tuoi dati personali dai sistemi attivi entro 30 giorni. Conserviamo i documenti che siamo legalmente tenuti a conservare, come i documenti di acquisto a fini contabili, e le statistiche che non ti identificano più.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Le nostre basi giuridiche in un unico posto",
      blocks: [
        {
          type: "p",
          text: "In base al GDPR ci serve una base giuridica per ogni cosa che facciamo con i tuoi dati. Le nostre sono:",
        },
        {
          type: "ul",
          items: [
            "**Contratto**: la gestione del tuo account, del gioco, dei tuoi acquisti e dell'assistenza. Senza questi dati non c'è nessun gioco a cui giocare.",
            "**Legittimo interesse**: prevenire imbrogli e abusi, moderare la chat, mantenere sicuro il servizio, capire come viene giocato il gioco e informarti sul tuo account. Il nostro interesse è un gioco equo, sicuro e funzionante; manteniamo i dati al minimo e per poco tempo, e puoi opporti in qualsiasi momento.",
            "**Consenso**: la pubblicità personalizzata negli annunci con ricompensa, espresso tramite le impostazioni del tuo dispositivo e revocabile lì.",
            "**Obbligo legale**: la conservazione dei documenti contabili e la risposta alle richieste legittime delle autorità.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "I tuoi diritti",
      blocks: [
        { type: "p", text: "Hai il diritto di:" },
        {
          type: "ul",
          items: [
            "**accedere** ai dati personali che conserviamo su di te e ottenerne una copia;",
            "**rettificare** i dati inesatti;",
            "**cancellare** il tuo account e i tuoi dati;",
            "**ricevere** i tuoi dati in un formato portabile e leggibile da dispositivo automatico;",
            "**opporti** al trattamento basato sui nostri legittimi interessi e ottenere la **limitazione** del trattamento mentre esaminiamo la richiesta;",
            "**revocare il consenso** alla pubblicità in qualsiasi momento nelle impostazioni del tuo dispositivo, e disattivare le notifiche allo stesso modo.",
          ],
        },
        {
          type: "p",
          text: "Per esercitare un diritto, scrivi a [contact@geofastgames.com](mailto:contact@geofastgames.com) dall'indirizzo collegato al tuo account oppure, se il tuo account non ha un indirizzo e-mail, comunicaci il tuo nome utente e verificheremo la tua identità dall'interno del gioco. Le richieste di cancellazione possono partire anche dalla nostra [pagina per la cancellazione dei dati](/datadeletion). Rispondiamo entro un mese.",
        },
        {
          type: "p",
          text: "Se ritieni che trattiamo i tuoi dati in modo illecito, puoi presentare reclamo all'Autorità belga per la protezione dei dati (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Bruxelles, [dataprotectionauthority.be](https://www.dataprotectionauthority.be), oppure all'autorità del paese in cui vivi.",
        },
      ],
    },
    {
      id: "children",
      title: "Minori",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* non è rivolto a minori di 13 anni, e non raccogliamo consapevolmente dati personali da loro. In Belgio, 13 anni è l'età a partire dalla quale puoi prestare da solo il consenso ai servizi online. Il gioco ha in ogni store una classificazione per età che riflette la sua chat online e gli acquisti facoltativi; i genitori possono usare il controllo parentale di Google Play e dell'App Store per limitare gli acquisti e le app che un minore può installare.",
        },
        {
          type: "p",
          text: "Se ritieni che un minore di 13 anni abbia un account, scrivici un'e-mail e lo elimineremo.",
        },
      ],
    },
    {
      id: "security",
      title: "Sicurezza",
      blocks: [
        {
          type: "p",
          text: "Tutto il traffico tra il gioco, questo sito web e i nostri server è cifrato (TLS). Le password sono conservate in forma di hash. Il database non è raggiungibile da internet. L'accesso ai server e ai dati è limitato ai due sviluppatori; i moderatori vedono la cronologia della chat solo tramite uno strumento che registra ogni consultazione. Nessun sistema è perfettamente sicuro; se mai venissimo a conoscenza di una violazione che riguarda i tuoi dati, informeremmo te e l'autorità come richiesto dalla legge.",
        },
      ],
    },
    {
      id: "website",
      title: "Questo sito web",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com non imposta cookie e non usa script di tracciamento o di analisi. Tre cose lasciano il tuo browser quando lo visiti: il carattere della pagina viene caricato da Google Fonts, quindi Google vede il tuo indirizzo IP; il numero di membri di Discord viene recuperato dall'API pubblica di Discord; e le statistiche in tempo reale provengono dal nostro server. I link agli app store contengono un tag di campagna che ci permette di vedere che un download proviene da questo sito, il che identifica il sito, non te.",
        },
        {
          type: "p",
          text: "Quando ci invii un suggerimento, una segnalazione di bug, una segnalazione su una traduzione o la segnalazione di un giocatore tramite un modulo di questo sito, conserviamo ciò che hai inserito, gli screenshot che hai allegato, l'ora, la lingua del tuo browser e il tuo indirizzo IP in forma di hash sul nostro server nell'UE. Li usiamo per leggere il tuo messaggio e dargli seguito, e per limitare gli abusi dei moduli. Il tuo nome utente e il tuo indirizzo e-mail sono facoltativi; indicali solo se vuoi che possiamo risponderti. Gli invii dei moduli vengono eliminati dopo dodici mesi.",
        },
      ],
    },
    {
      id: "changes",
      title: "Modifiche a questa informativa",
      blocks: [
        {
          type: "p",
          text: "Quando cambiamo il modo in cui trattiamo i dati, aggiorniamo questa pagina e la sua data, e per le modifiche significative te lo comunichiamo nel gioco.",
        },
      ],
    },
  ],
};
