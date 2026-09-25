import type { TermsContent } from "./types";

// Italian. Informal "tu" throughout, as in the Italian privacy policy and the
// game's Italian translation. Guillemets for quotations. The document is
// called "Termini di servizio", the term the privacy policy links to; the
// privacy policy is "Informativa sulla privacy", as it names itself. Legal
// vocabulary follows the official Italian text of the Consumer Rights
// Directive and the Digital Content Directive: "diritto di recesso",
// "conformita", "norme imperative a tutela dei consumatori", "colpa grave",
// "responsabilita", "foro del luogo in cui risiedi". Game terms follow the
// game: "battaglia", "nazione", "chat", "monete", "diamanti", "stelle",
// "stagione", "classifiche", "armi", "skin", "codice di riferimento";
// "Battle Pass" stays untranslated, as in the game. As in the privacy policy,
// cheating is "imbrogli", a mute a "silenziamento", a ban a "blocco", a
// report a "segnalazione".
export const it: TermsContent = {
  lang: "it",
  label: "Italiano",
  pageTitle: "Termini di servizio | Geofast: Battle of Nations",
  metaDescription:
    "Le regole per giocare a Geofast: Battle of Nations: account, condotta, moderazione e reclami, acquisti e Battle Pass, modifiche e i tuoi diritti.",
  gameName: "Geofast: Battle of Nations",
  docName: "Termini di servizio",
  lastUpdated: "Ultimo aggiornamento: 25 settembre 2026",
  sectionsLabel: "Sezioni",
  languageLabel: "Lingua",
  contact: {
    line: "Domande? Chiedi su Discord. Richieste sui tuoi dati: scrivici un'e-mail.",
    discord: "Chiedi su Discord",
    back: "Torna a Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Chi siamo e cosa disciplinano questi Termini",
      blocks: [
        {
          type: "p",
          text: "Questi Termini di servizio sono il contratto tra te e Geofast Games, uno studio di videogiochi indipendente con sede in Belgio, per *Geofast: Battle of Nations* (il gioco) e il sito web geofastgames.com. Puoi contattarci a [contact@geofastgames.com](mailto:contact@geofastgames.com).",
        },
        {
          type: "p",
          text: "Creando un account o giocando, accetti questi Termini. Se non sei d'accordo con essi, non giocare. La nostra [Informativa sulla privacy](/privacy) spiega cosa facciamo con i tuoi dati; è un documento separato e si applica insieme a questi Termini.",
        },
        {
          type: "p",
          text: "Su iOS l'app ti è concessa in licenza secondo il contratto di licenza standard per l'utente finale di Apple, che regola l'uso dell'app in sé. Questi Termini regolano il servizio di gioco, il tuo account e il modo in cui giochi con gli altri. Dove i due si sovrappongono, il contratto di Apple si applica alla licenza dell'app e questi Termini a tutto il resto.",
        },
        {
          type: "p",
          text: "Questi Termini sono redatti in inglese. Le traduzioni sono fornite per comodità; se una traduzione differisce dal testo inglese, prevale il testo inglese.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Chi può giocare",
      blocks: [
        {
          type: "p",
          text: "Devi avere almeno 13 anni per giocare. Se hai meno di 18 anni, ti serve il permesso di un genitore o tutore per giocare e per fare qualsiasi acquisto, e giocando confermi di averlo. Genitori e tutori sono responsabili di ciò che i minori a loro affidati fanno nel gioco e degli acquisti effettuati tramite il loro account dello store. Il controllo parentale di Google Play e dell'App Store può limitare acquisti e download.",
        },
        {
          type: "p",
          text: "Le classificazioni per età del gioco negli store riflettono il fatto che contiene una chat tra giocatori e acquisti facoltativi.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Il tuo account",
      blocks: [
        {
          type: "p",
          text: "Quando giochi online per la prima volta, il gioco crea un account collegato al tuo dispositivo. Puoi collegare un indirizzo e-mail con password, oppure un accesso Google o Apple, per conservare i tuoi progressi su più dispositivi. Tieni per te le tue credenziali: tutto ciò che viene fatto tramite il tuo account è responsabilità tua, e devi avvisarci subito se pensi che qualcun altro lo stia usando.",
        },
        {
          type: "p",
          text: "Solo un dispositivo alla volta può essere connesso a un account. Connettersi da un nuovo dispositivo disconnette il precedente.",
        },
        {
          type: "p",
          text: "Se perdi o ripristini il tuo dispositivo senza aver collegato un indirizzo e-mail o un accesso Google o Apple, non abbiamo modo di confermare che l'account sia tuo, e non può essere ripristinato. Collega il tuo account se i tuoi progressi ti stanno a cuore.",
        },
        {
          type: "p",
          text: "Condividere un account con un'altra persona non è consentito, perché dà un vantaggio sleale nelle classifiche. Avere più di un account è consentito, purché nessuno di essi sia usato per ottenere un vantaggio sleale, truccare le partite o aggirare una sanzione su un altro account. Gli account e ciò che contengono non possono essere venduti, comprati, scambiati o ceduti.",
        },
        {
          type: "p",
          text: "Il tuo nome utente è visibile a tutti. Non deve essere offensivo, ingannevole o impersonare qualcuno, incluso il nostro staff. Puoi cambiarlo una volta nel gioco, al costo indicato lì. Possiamo modificare un nome utente che viola queste regole.",
        },
        {
          type: "p",
          text: "Non eliminiamo gli account inattivi. Puoi eliminare il tuo account in qualsiasi momento tramite la nostra [pagina per la cancellazione dei dati](/datadeletion). L'eliminazione è definitiva e comprende i tuoi progressi, le valute virtuali e gli oggetti.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. La tua licenza di gioco",
      blocks: [
        {
          type: "p",
          text: "Ti concediamo una licenza personale, non esclusiva e non trasferibile per installare e giocare al gioco su dispositivi che possiedi o controlli, per il tuo intrattenimento personale. Il gioco, la sua grafica, i suoni, i testi, il codice e il design appartengono a Geofast Games o ai nostri licenzianti e sono protetti dal diritto della proprietà intellettuale. Non puoi copiare, modificare, distribuire, vendere o noleggiare alcuna parte del gioco, né decompilarlo, salvo dove la legge lo consenta espressamente.",
        },
        {
          type: "p",
          text: "Il gioco funziona sulle versioni di Android e iOS indicate negli store. Giocare online richiede una versione ragionevolmente aggiornata del gioco: pubblichiamo aggiornamenti tramite gli store, e una versione obsoleta può perdere l'accesso alle funzioni online finché non viene aggiornata.",
        },
        {
          type: "p",
          text: "Puoi registrare, trasmettere in streaming e pubblicare video e screenshot delle tue partite, anche su piattaforme dove guadagni con pubblicità o abbonamenti. Non presentare i tuoi contenuti come creati o approvati da noi, non vendere merchandising con la nostra grafica e non mostrare cheat o exploit. Possiamo chiederti di rimuovere contenuti che violano queste regole o la legge.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Regole di condotta",
      blocks: [
        { type: "p", text: "Gioca in modo corretto e tratta gli altri giocatori con rispetto. Non puoi:" },
        {
          type: "ul",
          items: [
            "usare cheat, exploit, bot, automazioni, client modificati o qualsiasi strumento che interferisca con il gioco o i suoi server;",
            "sfruttare bug per ottenere un vantaggio invece di segnalarli;",
            "colludere con altri giocatori, truccare le partite, scambiare vittorie o manipolare in altro modo classifiche o ricompense, anche con account aggiuntivi;",
            "condividere, vendere, comprare o trasferire account, o scambiare oggetti virtuali al di fuori del gioco;",
            "molestare, minacciare, insultare o intimidire altri giocatori, o pubblicare contenuti di odio, sessuali, violenti o comunque abusivi;",
            "impersonare altri giocatori, il nostro staff o qualsiasi persona od organizzazione;",
            "fare spam, pubblicità o condividere link a contenuti dannosi;",
            "chiedere o raccogliere informazioni personali o dati di accesso di altri giocatori, o condividere i tuoi o quelli di chiunque altro in chat;",
            "fare consapevolmente segnalazioni false su altri giocatori, o abusare della procedura di ricorso;",
            "organizzare o partecipare a scommesse o giochi d'azzardo sulle partite o su qualsiasi altra cosa nel gioco;",
            "attaccare, sondare o sovraccaricare i nostri server, o interferire con le connessioni di altri giocatori;",
            "rovinare deliberatamente il gioco agli altri giocatori;",
            "usare il gioco per qualsiasi scopo illegale.",
          ],
        },
        {
          type: "p",
          text: "Rivalità, provocazioni e linguaggio di guerra tra nazioni fanno parte del gioco. Gli attacchi a persone reali, l'odio verso gruppi, le minacce e i contenuti sessuali no.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Chat, nomi utente e contenuti che crei",
      blocks: [
        {
          type: "p",
          text: "Il gioco ha una chat tra giocatori. Ciò che scrivi viene recapitato agli altri giocatori di quella chat e conservato sui nostri server per i periodi indicati nell'Informativa sulla privacy, affinché i moderatori possano esaminare le segnalazioni. La chat non è privata: gli altri giocatori la vedono, e i moderatori possono leggerla quando gestiscono una segnalazione. Non condividere dati personali in chat.",
        },
        {
          type: "p",
          text: "Mantieni i diritti su ciò che scrivi. Ci dai il permesso di conservarlo, mostrarlo, moderarlo e, dove necessario, rimuoverlo per far funzionare il gioco. Sei responsabile di ciò che pubblichi. Rimuoviamo i contenuti che violano questi Termini o la legge.",
        },
        {
          type: "p",
          text: "Se ci invii suggerimenti o idee, tramite il gioco, il nostro sito web o Discord, possiamo usarli liberamente, senza compenso né alcun obbligo verso di te, e senza nominarti.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. Come moderiamo",
      blocks: [
        { type: "p", text: "La moderazione combina strumenti automatici e persone:" },
        {
          type: "ul",
          items: [
            "Prima che un messaggio venga recapitato, un filtro automatico sui nostri server lo controlla rispetto a limiti di frequenza, una lista di parole e schemi di incitamento all'odio. Un messaggio bloccato non viene mai inviato.",
            "Quando abbiamo attivato questa funzione, i messaggi recapitati vengono anche classificati da un servizio automatico (Gemini di Google), che riceve il messaggio e i tuoi messaggi recenti in quella chat come contesto. I nomi utente vengono controllati allo stesso modo quando li imposti o li modifichi. Un messaggio classificato come abusivo viene eliminato e una violazione viene registrata sul tuo account.",
            "Moderatori umani esaminano le segnalazioni dei giocatori e agiscono in base a ciò che trovano. Il loro accesso alla cronologia della chat viene registrato.",
          ],
        },
        {
          type: "p",
          text: "Le conseguenze delle violazioni in chat sono avvertimenti e silenziamenti temporanei. Le violazioni rilevate automaticamente portano prima a un avvertimento, e a un breve silenziamento se ripeti rapidamente. I silenziamenti applicati dai moderatori sono temporanei e si allungano con ogni silenziamento che hai già ricevuto, da ore a mesi. Il registro delle tue violazioni e dei tuoi silenziamenti resta sul tuo account affinché i comportamenti ripetuti possano essere riconosciuti.",
        },
        {
          type: "p",
          text: "Ogni volta che ti silenziamo, rimuoviamo i tuoi contenuti o sanzioniamo il tuo account, ti diciamo nel gioco cosa è stato fatto e perché, e puoi contestarlo come descritto nella sezione 9.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Applicazione del fair play",
      blocks: [
        {
          type: "p",
          text: "Le azioni di battaglia vengono convalidate sui nostri server mentre avvengono, quindi un client modificato non può cambiare l'esito di una partita. Un controllo automatico esamina regolarmente i registri delle partite recenti in cerca di giocatori che finiscono nelle stesse partite molto più spesso di quanto il caso consenta; è così che vengono individuati partite truccate e collusione.",
        },
        {
          type: "p",
          text: "Imbrogli e collusione vengono puniti per gradi. Un giocatore viene prima avvertito, una volta. Le sanzioni aumentano solo quando ci sono nuove prove dopo l'avvertimento e con del tempo tra un grado e l'altro: azzeramento di classifiche e valute, poi un azzeramento completo dei progressi e infine un blocco permanente del dispositivo, che impedisce anche la creazione di nuovi account da quel dispositivo. Gli account coinvolti in imbrogli gravi o ripetuti possono essere chiusi. Prima di applicare un azzeramento salviamo un'istantanea dell'account, così che una sanzione che si riveli sbagliata possa essere annullata. Il registro delle sanzioni resta sul tuo account.",
        },
        {
          type: "p",
          text: "Ogni sanzione è accompagnata da un avviso nel gioco che indica cosa è stato fatto e perché, e puoi contestarla come descritto nella sezione 9.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Segnalazioni e ricorsi",
      blocks: [
        {
          type: "p",
          text: "Per segnalare un giocatore o un contenuto che viola questi Termini o la legge, usa il pulsante «Segnala» nel gioco, il modulo di segnalazione sulla nostra [pagina dei feedback](/feedback) oppure scrivi a [contact@geofastgames.com](mailto:contact@geofastgames.com). Dicci chi, cosa e dove. Confermiamo di aver ricevuto la tua segnalazione e ti facciamo sapere cosa abbiamo deciso, senza indebito ritardo. Le segnalazioni vengono gestite da persone, con l'aiuto degli strumenti descritti sopra, in buona fede e senza arbitrarietà.",
        },
        {
          type: "p",
          text: "Se ritieni che un silenziamento, una sanzione, un blocco o una rimozione di contenuti sia stato sbagliato, presenta ricorso via e-mail o su Discord entro un mese. Una persona che non è stata coinvolta nella decisione originale la riesamina, e rispondiamo entro 14 giorni. Se la decisione era sbagliata, la annulliamo e, dove possibile, ripristiniamo ciò che è stato perso. Nulla qui limita il tuo diritto di rivolgerti a un tribunale o a un organismo per i consumatori.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Valute virtuali, oggetti e acquisti",
      blocks: [
        {
          type: "p",
          text: "Il gioco ha valute virtuali (diamanti, monete e stelle) e oggetti virtuali come armi, skin, potenziamenti e ricompense del Battle Pass. I diamanti possono essere acquistati con denaro reale tramite Google Play o l'App Store; monete e stelle si guadagnano giocando o si scambiano all'interno del gioco. I prezzi sono mostrati nella tua valuta locale nello store e nel gioco prima dell'acquisto.",
        },
        {
          type: "p",
          text: "Valute e oggetti virtuali ti sono concessi in licenza per l'uso nel gioco. Non sono di tua proprietà, non hanno valore al di fuori del gioco, non possono essere convertiti in denaro reale, beni o servizi, e non possono essere trasferiti a un altro account o a un'altra persona.",
        },
        {
          type: "p",
          text: "Gli acquisti vengono consegnati immediatamente. Acquistando, ci chiedi di consegnare subito e riconosci che, una volta iniziata la consegna, il diritto di recesso legale di 14 giorni non si applica più. Per il resto gli acquisti sono definitivi, salvo dove la legge ti dia diritto a un rimborso. Le richieste di rimborso vanno allo store dal quale hai acquistato, che gestisce il pagamento; noi non vediamo mai i tuoi dati di pagamento.",
        },
        {
          type: "p",
          text: "Possiamo modificare, ribilanciare, aggiungere o ritirare valute e oggetti virtuali per motivi validi: mantenere il gioco bilanciato e divertente, correggere bug, per sicurezza o per obblighi di legge. Dove una modifica inciderebbe in modo significativo su qualcosa per cui hai pagato di recente, ti avvisiamo in anticipo, e dove la legge ti dà il diritto di porre fine al contratto e di essere rimborsato a causa di tale modifica, lo rispettiamo. I tuoi diritti di legge come consumatore, incluso il diritto a un gioco che funzioni come descritto, non sono pregiudicati.",
        },
        {
          type: "p",
          text: "Il gioco non ha pubblicità forzata. Dove il gioco offre annunci con ricompensa facoltativi, guardarne uno è una tua scelta, e possiamo modificare o rimuovere quell'offerta.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. Il Battle Pass",
      blocks: [
        {
          type: "p",
          text: "Il Battle Pass è un abbonamento acquistato tramite Google Play o l'App Store. Si rinnova automaticamente ogni mese al prezzo indicato nello store finché non lo annulli. Puoi annullarlo in qualsiasi momento nelle impostazioni degli abbonamenti del tuo store; il pass resta allora attivo fino alla fine del periodo che hai pagato, e conservi le ricompense che hai riscattato. Le variazioni di prezzo si applicano dal rinnovo successivo, e lo store ti avvisa prima che entrino in vigore.",
        },
        {
          type: "p",
          text: "Le ricompense del Battle Pass si sbloccano giocando durante la stagione; un pass da solo non concede ogni ricompensa. I rimborsi degli abbonamenti sono gestiti dallo store secondo le sue regole e la legge.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Ricompense per inviti e programma per creatori",
      blocks: [
        {
          type: "p",
          text: "Il gioco ti ricompensa quando un nuovo giocatore si unisce con il tuo codice di riferimento, e ricompensa anche lui. Le ricompense per inviti sono per veri nuovi giocatori. Invitare te stesso, i tuoi altri account o account creati solo per incassare la ricompensa non è consentito, e le ricompense ottenute in questo modo vengono rimosse.",
        },
        {
          type: "p",
          text: "Il nostro programma per creatori ricompensa i giocatori che pubblicano video sul gioco quando i loro contenuti raggiungono determinate soglie di visualizzazioni. Le soglie, le ricompense e i requisiti di ammissibilità sono pubblicati nel gioco e possono cambiare. Le ricompense vengono verificate e concesse da noi manualmente, e in caso di dubbio decidiamo noi. Le ricompense richieste con visualizzazioni falsificate, o con contenuti che violano questi Termini, vengono rifiutate o rimosse.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Servizi di terzi",
      blocks: [
        {
          type: "p",
          text: "Il gioco usa Google Play e l'App Store per download, pagamenti e abbonamenti; Google e Apple per l'accesso facoltativo; Google AdMob per gli annunci con ricompensa facoltativi; e Discord per il nostro server della community. L'uso che fai di quei servizi è regolato dai loro termini e dalle loro informative sulla privacy, che non controlliamo.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Disponibilità e modifiche al gioco",
      blocks: [
        {
          type: "p",
          text: "Lavoriamo per mantenere il gioco disponibile, ma non possiamo promettere che non verrà mai interrotto. Le funzioni online possono non essere disponibili durante la manutenzione, per problemi tecnici o per cause al di fuori del nostro controllo. Le modalità offline continuano a funzionare senza connessione.",
        },
        {
          type: "p",
          text: "Il gioco è un servizio live e cambia nel tempo: aggiungiamo, modifichiamo e rimuoviamo funzioni, armi, nazioni, stagioni ed eventi per mantenerlo bilanciato e fresco, correggere problemi, per sicurezza e per rispettare gli obblighi di legge. Le modifiche che incidono in modo significativo sul modo in cui puoi giocare vengono annunciate nel gioco in anticipo. I tuoi diritti di legge non sono pregiudicati.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Cessazione del contratto",
      blocks: [
        {
          type: "p",
          text: "Puoi smettere di giocare in qualsiasi momento disinstallando il gioco, e puoi eliminare il tuo account tramite la nostra [pagina per la cancellazione dei dati](/datadeletion). Eliminare il tuo account rimuove definitivamente i tuoi progressi, le valute virtuali e gli oggetti; per essi non viene rimborsato nulla.",
        },
        {
          type: "p",
          text: "Possiamo sospendere o chiudere il tuo account se violi questi Termini in modo grave o ripetuto, o se la legge lo richiede. Salvo nei casi gravi, come imbrogli, abusi o un obbligo di legge, ti avvertiamo prima e ti diamo la possibilità di rispondere. Ti comunichiamo il motivo e come presentare ricorso (sezione 9). La chiusura di un account pone fine alla tua licenza e al tuo accesso alle sue valute e ai suoi oggetti virtuali.",
        },
        {
          type: "p",
          text: "Se un giorno dovessimo chiudere il gioco, lo annunceremo con almeno 30 giorni di preavviso nel gioco e sul nostro sito web. Valute e oggetti virtuali terminano con il gioco. I tuoi diritti di legge sugli acquisti recenti non sono pregiudicati.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. La nostra responsabilità",
      blocks: [
        {
          type: "p",
          text: "Siamo responsabili verso di te nei termini previsti dalla legge. Non escludiamo né limitiamo la nostra responsabilità per morte o lesioni personali causate dalla nostra negligenza, per dolo, per condotta intenzionale o colpa grave, né per qualsiasi altra cosa che non possa essere esclusa in base alle norme che ti proteggono come consumatore, incluso il tuo diritto a un gioco conforme a quanto promesso.",
        },
        {
          type: "p",
          text: "Oltre a ciò, siamo responsabili solo dei danni che erano prevedibili quando hai accettato questi Termini e che derivano dalla nostra violazione degli stessi. Il gioco è gratuito e fornito come servizio live; non siamo responsabili delle perdite causate da interruzioni, dal comportamento di altri giocatori o da eventi al di fuori del nostro ragionevole controllo, salvo dove la legge disponga diversamente.",
        },
        {
          type: "p",
          text: "Sei responsabile dei danni che ci causi violando questi Termini, nella misura consentita dalla legge.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Privacy",
      blocks: [
        {
          type: "p",
          text: "Come raccogliamo e usiamo i tuoi dati è descritto nella nostra [Informativa sulla privacy](/privacy). Non fa parte di questi Termini e non dipende dalla tua accettazione degli stessi: ti dice cosa facciamo e quali sono i tuoi diritti.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Modifiche a questi Termini",
      blocks: [
        {
          type: "p",
          text: "Modifichiamo questi Termini quando cambiano il gioco, la legge o i nostri servizi, o per renderli più chiari. Per le modifiche che incidono sui tuoi diritti o sul modo in cui giochi, diamo un preavviso di almeno 30 giorni nel gioco prima che entrino in vigore, e puoi smettere di giocare ed eliminare il tuo account prima di allora se non sei d'accordo. Chiarimenti e correzioni che non ti riguardano entrano in vigore al momento della pubblicazione. La data in alto ti dice quando è entrata in vigore la versione attuale.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Legge applicabile, controversie e reclami",
      blocks: [
        {
          type: "p",
          text: "Questi Termini sono regolati dalla legge belga. Se vivi in un altro paese, mantieni la protezione delle norme imperative a tutela dei consumatori di quel paese, e puoi agire in giudizio davanti ai tribunali del luogo in cui risiedi. Noi possiamo agire contro di te solo lì.",
        },
        {
          type: "p",
          text: "Se hai un reclamo, contattaci prima a [contact@geofastgames.com](mailto:contact@geofastgames.com) o su Discord; la maggior parte delle cose si può risolvere direttamente. Puoi anche rivolgerti a un organismo di risoluzione delle controversie dei consumatori nel tuo paese; in Belgio è il Servizio di mediazione per i consumatori (Consumentenombudsdienst / Service de Médiation pour le Consommateur). Questi Termini non contengono alcuna clausola arbitrale né alcuna rinuncia alle azioni collettive.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Disposizioni finali",
      blocks: [
        {
          type: "p",
          text: "Ti contattiamo tramite avvisi nel gioco, sul nostro sito web e, se hai collegato un indirizzo e-mail, via e-mail. Tu ci contatti a [contact@geofastgames.com](mailto:contact@geofastgames.com); è anche il nostro indirizzo per le comunicazioni legali e il nostro punto di contatto per le autorità.",
        },
        {
          type: "p",
          text: "Se una parte di questi Termini risulta invalida, il resto rimane in vigore. Se in un dato momento non facciamo rispettare una regola, possiamo comunque farla rispettare in seguito. Possiamo trasferire questo contratto a una società che subentri nel gioco, a condizione che i tuoi diritti non vengano ridotti; tu non puoi trasferire il tuo account né questo contratto. Questi Termini e l'Informativa sulla privacy costituiscono l'intero accordo tra te e noi riguardo al gioco.",
        },
      ],
    },
  ],
};
