import type { PrivacyContent } from "./types";

// French (Belgium). Formal "vous" throughout. French typography: a no-break
// space (U+00A0) precedes : ; ? ! and sits inside French quotation marks.
// Game terms follow the game's own French translation: "bataille" for battle,
// "nation" for nation; "Battle Pass" stays untranslated, as in the game.
export const fr: PrivacyContent = {
  lang: "fr",
  label: "Français",
  pageTitle: "Politique de confidentialité | Geofast: Battle of Nations",
  metaDescription:
    "Quelles données Geofast: Battle of Nations collecte, comment elles sont utilisées, avec qui elles sont partagées et comment en demander la suppression.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Politique de confidentialité",
  lastUpdated: "Dernière mise à jour : 25 septembre 2026",
  sectionsLabel: "Sections",
  languageLabel: "Langue",
  legalBasisLabel: "Base légale :",
  contact: {
    line: "Des questions ? Posez-les sur Discord. Pour toute demande concernant vos données : écrivez-nous.",
    discord: "Demander sur Discord",
    back: "Retour à Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Qui nous sommes",
      blocks: [
        {
          type: "p",
          text: "Geofast Games est un studio de jeux indépendant établi en Belgique. Nous développons *Geofast: Battle of Nations* et exploitons ce site web. Nous sommes le responsable du traitement des données personnelles décrites dans cette politique : c'est nous qui décidons de ce qui est collecté et pourquoi.",
        },
        {
          type: "p",
          text: "Vous pouvez nous joindre à l'adresse [contact@geofastgames.com](mailto:contact@geofastgames.com). Nous sommes un studio de deux personnes et n'avons pas désigné de délégué à la protection des données ; la même adresse permet de joindre les personnes responsables de vos données.",
        },
        {
          type: "p",
          text: "Cette politique couvre le jeu sur iOS et Android ainsi que le site geofastgames.com. Elle ne couvre pas Discord, l'App Store, Google Play ni les autres services que vous utilisez en marge du jeu ; ceux-ci ont leurs propres politiques, vers lesquelles nous renvoyons lorsqu'ils sont mentionnés.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "En bref",
      blocks: [
        {
          type: "table",
          head: ["Quoi", "Pourquoi", "Combien de temps"],
          rows: [
            [
              "Compte : un identifiant d'appareil, votre nom d'utilisateur et, si vous le souhaitez, une adresse e-mail avec mot de passe ou une connexion via Google ou Apple",
              "Pour gérer votre compte et vous permettre de jouer en ligne",
              "Jusqu'à la suppression de votre compte ; nous ne supprimons pas les comptes inactifs",
            ],
            [
              "Jeu : parties, classements, objets, confirmations d'achat",
              "Pour faire fonctionner le jeu, les classements et votre inventaire",
              "Jusqu'à la suppression de votre compte ; replays de bataille 7 jours, puis archivés",
            ],
            [
              "Messages de chat",
              "Pour les acheminer et modérer les abus",
              "Chat de bataille 15 jours, puis supprimé ; autres chats 90 jours, puis archivés",
            ],
            [
              "Adresse IP, identifiant d'appareil, modèle de téléphone",
              "Pour détecter la tricherie et la collusion et faire respecter les bannissements",
              "Enregistrements de partie 30 jours et enregistrement du premier lancement 90 jours, puis archivés ; l'identifiant d'appareil reste lié à votre compte ; un enregistrement de bannissement reste jusqu'à ce que nous levions le bannissement",
            ],
            [
              "Jeton de notification push",
              "Pour envoyer des notifications que vous pouvez désactiver",
              "Jusqu'à ce que le jeton cesse de fonctionner (par exemple après une désinstallation) ou que vous supprimiez votre compte",
            ],
            [
              "Événements d'analyse sur votre façon de jouer",
              "Pour comprendre les habitudes de jeu et corriger les problèmes",
              "400 jours, puis archivés",
            ],
            [
              "Identifiant publicitaire, lu par le logiciel de Google AdMob",
              "Pour charger et afficher des publicités récompensées que vous pouvez choisir de regarder",
              "Envoyé à Google au lancement du jeu et au chargement d'une publicité ; nous ne le stockons pas ; la politique d'AdMob s'applique",
            ],
          ],
        },
        { type: "lead", text: "Quatre choses à savoir avant de poursuivre" },
        {
          type: "ul",
          items: [
            "Le chat n'est pas privé. Les messages sont conservés jusqu'à 15 jours (chat de bataille) ou 90 jours (autres chats) pour que les modérateurs puissent examiner les signalements ; chaque message passe par un filtre automatique et, lorsque nous activons cette fonction, les messages sont aussi classifiés par le service Gemini de Google.",
            "Nous enregistrons votre adresse IP et un identifiant d'appareil lorsque vous jouez, pour repérer la tricherie et faire respecter les bannissements.",
            "Nos serveurs se trouvent à Francfort, en Allemagne. Quelques prestataires que nous utilisons (Google, Apple) traitent des données en dehors de l'Union européenne.",
            "Les enregistrements qui expirent de notre base de données active (chats autres que le chat de bataille, enregistrements de partie, données d'analyse et autres) sont archivés à Francfort plutôt que détruits. Voir « Combien de temps nous conservons les données ».",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Votre compte",
      blocks: [
        {
          type: "p",
          text: "Lorsque vous jouez en ligne pour la première fois, nous créons un compte pour vous et le lions à un identifiant généré sur votre appareil. Rien d'autre n'est nécessaire pour jouer, et vous n'avez jamais à nous donner votre nom.",
        },
        {
          type: "p",
          text: "Vous choisissez un nom d'utilisateur, visible par les autres joueurs. Au-delà, nous stockons ce dont le jeu a besoin pour fonctionner pour vous : votre progression, vos réglages et vos amis, ainsi que la version du jeu que vous utilisez.",
        },
        {
          type: "p",
          text: "Si vous souhaitez conserver votre progression d'un appareil à l'autre, vous pouvez ajouter une adresse e-mail avec mot de passe ou vous connecter avec Google ou Apple. Les mots de passe sont stockés hachés, ce qui signifie que nous ne pouvons pas les lire. De Google ou d'Apple, nous ne recevons que ce qui est nécessaire pour lier le compte, et nous n'utilisons votre adresse e-mail que pour sécuriser le compte et réinitialiser le mot de passe.",
        },
        {
          type: "p",
          text: "L'identifiant d'appareil est nécessaire pour jouer en ligne. Tout le reste est facultatif.",
        },
        { type: "basis", text: "l'exécution de notre contrat avec vous (la fourniture du jeu)." },
      ],
    },
    {
      id: "gameplay",
      title: "Jeu, progression et achats",
      blocks: [
        {
          type: "p",
          text: "Pour faire fonctionner les batailles en ligne, les classements et votre inventaire, nous stockons votre progression : résultats de parties, classements, objets et monnaies que vous possédez, et progression dans les événements et les saisons. Vos batailles récentes sont conservées comme historique ; les replays de bataille quittent la base de données active après 7 jours et sont archivés.",
        },
        {
          type: "p",
          text: "Les paiements sont entièrement gérés par Google Play ou l'App Store. Nous ne voyons jamais vos données de carte ou bancaires. La boutique nous indique ce que vous avez acheté, et nous stockons cette confirmation ainsi que, pour le Battle Pass, le statut de l'abonnement, afin de livrer les objets, restaurer les achats et vous aider en cas de besoin.",
        },
        {
          type: "basis",
          text: "l'exécution de notre contrat avec vous. Les justificatifs d'achat que nous devons conserver pour la comptabilité le sont au titre de nos obligations légales.",
        },
      ],
    },
    {
      id: "chat",
      title: "Chat et modération",
      blocks: [
        {
          type: "p",
          text: "Le jeu comporte un chat entre joueurs. Les messages sont acheminés aux autres joueurs de ce chat et stockés sur nos serveurs : le chat au sein d'une bataille pendant 15 jours, après quoi il est supprimé ; tous les autres chats pendant 90 jours, après quoi ils sont archivés (voir « Combien de temps nous conservons les données »). Nous les conservons pour que les modérateurs puissent enquêter sur les signalements d'abus ou de tricherie. Chaque consultation par un modérateur est journalisée.",
        },
        {
          type: "p",
          text: "La modération fonctionne en trois étapes. Premièrement, chaque message passe par un filtre automatique sur nos serveurs (limites de débit, liste de mots et motifs de discours haineux) avant d'être acheminé ; un message bloqué n'est jamais envoyé. Deuxièmement, lorsque nous activons cette fonction, les messages acheminés sont aussi classifiés par le service Gemini de Google, qui reçoit le message et vos messages récents dans ce chat comme contexte. Les noms d'utilisateur sont vérifiés par Gemini lorsque vous les définissez ou les modifiez. Un message que Gemini classe comme abusif est supprimé et une infraction est enregistrée. Troisièmement, des modérateurs humains traitent les signalements.",
        },
        {
          type: "p",
          text: "Les infractions entraînent des avertissements et des réductions au silence temporaires dans le chat, comme le précisent nos [conditions d'utilisation](/termsofservice). L'enregistrement de vos infractions et réductions au silence reste lié à votre compte afin que les comportements répétés puissent être reconnus. Ces étapes automatiques n'affectent que votre capacité à discuter. Si vous estimez qu'une décision était erronée, écrivez-nous ou demandez sur Discord ; une personne examinera le cas.",
        },
        {
          type: "p",
          text: "Ne partagez pas d'informations personnelles dans le chat. Les autres joueurs peuvent voir ce que vous écrivez.",
        },
        {
          type: "basis",
          text: "notre intérêt légitime à maintenir un jeu sûr et équitable pour tous ceux qui y jouent.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Fair-play et sécurité",
      blocks: [
        {
          type: "p",
          text: "La tricherie gâche un jeu compétitif pour tout le monde. Nous conservons donc une petite quantité de données techniques pour la détecter et faire respecter les bannissements :",
        },
        {
          type: "ul",
          items: [
            "Au premier lancement du jeu, nous enregistrons votre identifiant d'appareil, votre modèle de téléphone, la plateforme et votre adresse IP, ainsi que les étapes du tutoriel que vous terminez. Cet enregistrement quitte la base de données active après 90 jours et est archivé.",
            "Pour chaque partie en ligne, nous enregistrons les comptes qui y ont participé, avec leur identifiant d'appareil et leur adresse IP. Une vérification automatique parcourt régulièrement les enregistrements récents à la recherche de paires de joueurs qui se retrouvent dans les mêmes parties bien plus souvent que le hasard ne le permet. Les enregistrements de partie quittent la base de données active après 30 jours et sont archivés.",
            "La tricherie détectée entraîne des sanctions, pouvant aller jusqu'au bannissement, comme le précisent nos [conditions d'utilisation](/termsofservice). L'historique des sanctions reste lié à votre compte, et vous pouvez demander à une personne de réexaminer toute sanction.",
            "Un bannissement d'appareil bloque aussi les nouveaux comptes créés depuis cet appareil. Les enregistrements de bannissement n'ont pas de date de fin ; nous les retirons lorsqu'un réexamen montre que le bannissement était erroné.",
          ],
        },
        {
          type: "p",
          text: "Les actions de bataille elles-mêmes sont validées sur nos serveurs au moment où elles se produisent, ce qui ne nécessite aucune donnée au-delà de la partie. Nous n'utilisons pas votre adresse IP pour déterminer votre position. Lors de votre première participation, le jeu vous suggère une nation à partir du réglage de langue et de région de votre appareil ; cette lecture se fait sur l'appareil, et vous pouvez choisir n'importe quelle autre nation.",
        },
        {
          type: "basis",
          text: "notre intérêt légitime à prévenir la tricherie, la fraude et les abus, et à maintenir la sécurité du service.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Notifications push",
      blocks: [
        {
          type: "p",
          text: "Si vous autorisez les notifications, votre appareil nous fournit un jeton push, que nous stockons et utilisons pour vous informer des événements du jeu : ce qui concerne votre compte, vos amis et votre nation, les nouveaux événements et saisons, et un rappel si vous n'avez pas joué depuis un moment.",
        },
        {
          type: "p",
          text: "Les notifications sont acheminées via Firebase Cloud Messaging (Google) sur Android et le service Apple Push Notification sur iOS. Vous pouvez les désactiver à tout moment dans les réglages de votre appareil ; elles ne s'affichent alors plus. Le jeton lui-même reste stocké jusqu'à ce qu'il devienne invalide (par exemple lorsque vous désinstallez le jeu) ou que vous supprimiez votre compte. Les notifications envoyées sont conservées de notre côté pendant 30 jours, puis archivées.",
        },
        {
          type: "basis",
          text: "notre intérêt légitime à vous tenir informé de votre compte et du jeu auquel vous jouez, avec une désactivation qui ne demande qu'un geste.",
        },
      ],
    },
    {
      id: "ads",
      title: "Publicités récompensées facultatives",
      blocks: [
        {
          type: "p",
          text: "Le jeu ne contient aucune publicité imposée : rien n'interrompt une bataille ou un menu. La boutique propose des publicités récompensées qui ne se lancent que lorsque vous appuyez dessus, en échange de monnaie du jeu.",
        },
        {
          type: "p",
          text: "Les publicités sont diffusées par Google AdMob. Son logiciel fait partie du jeu, démarre avec lui et charge une publicité en arrière-plan pour qu'elle soit prête si vous appuyez. À ce moment, que vous regardiez un jour une publicité ou non, AdMob reçoit votre identifiant publicitaire et une localisation approximative dérivée de votre adresse IP ; si vous en regardez une, il reçoit aussi la façon dont vous avez interagi avec elle. Sur iOS, le système vous demande votre autorisation au premier lancement avant que l'identifiant publicitaire ne soit utilisé pour le suivi ; sur Android, vous pouvez réinitialiser ou supprimer l'identifiant publicitaire dans les réglages de votre appareil. Google décrit ce qu'il fait de ces données dans sa [politique de confidentialité](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "votre consentement, donné via les autorisations et les réglages publicitaires de votre appareil, que vous pouvez y retirer à tout moment.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analyse",
      blocks: [
        {
          type: "p",
          text: "Pour comprendre comment le jeu est joué et repérer les problèmes, le jeu envoie des événements à nos propres serveurs : début et fin de session, batailles jouées et terminées, progression dans le tutoriel, achats dans la boutique, notifications ouvertes, erreurs et, sur Android, la source de la boutique qui vous a amené au jeu. Chaque événement contient votre identifiant de compte, votre identifiant d'appareil, la plateforme, le modèle de téléphone et la version du jeu. Nous n'utilisons ni Google Analytics, ni Firebase Analytics, ni aucun autre service d'analyse tiers. Les rapports de plantage nous parviennent via Google Play et l'App Store selon leurs propres politiques.",
        },
        {
          type: "p",
          text: "Les événements d'analyse sont conservés 400 jours. Les statistiques qui en sont dérivées ne contiennent aucune donnée personnelle et sont conservées indéfiniment.",
        },
        {
          type: "basis",
          text: "notre intérêt légitime à améliorer le jeu et à le maintenir en bon fonctionnement.",
        },
      ],
    },
    {
      id: "support",
      title: "Support et communauté",
      blocks: [
        {
          type: "p",
          text: "Si vous nous écrivez, nous conservons l'échange aussi longtemps que son traitement l'exige.",
        },
        {
          type: "p",
          text: "Notre serveur Discord fonctionne sur Discord selon la [politique de confidentialité de Discord](https://discord.com/privacy). Les modérateurs qui s'y trouvent peuvent consulter l'historique du chat du jeu pour traiter les signalements, comme décrit sous « Chat et modération ».",
        },
        {
          type: "basis",
          text: "l'exécution de notre contrat avec vous (support) et notre intérêt légitime à animer une communauté autour du jeu.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Avec qui nous partageons vos données",
      blocks: [
        {
          type: "p",
          text: "Nous ne vendons pas de données personnelles et ne les partageons pas avec des courtiers en données. Les sociétés ci-dessous traitent des données pour notre compte ou les reçoivent en raison du fonctionnement du jeu :",
        },
        {
          type: "table",
          head: ["Prestataire", "Pour quoi", "Où"],
          rows: [
            ["DigitalOcean", "Hébergement de nos serveurs de jeu et de notre base de données", "Francfort, Allemagne"],
            [
              "Gcore",
              "Réseau de diffusion de contenu (CDN) qui achemine une partie du trafic du jeu vers nos serveurs ; il voit votre adresse IP en transit",
              "Serveurs périphériques dans le monde entier ; la société est établie au Luxembourg",
            ],
            [
              "Google Cloud Storage",
              "Archive des enregistrements expirés (voir « Combien de temps nous conservons les données »)",
              "Francfort, Allemagne",
            ],
            [
              "Google (API Gemini)",
              "Classification des noms d'utilisateur et, lorsqu'elle est activée, des messages de chat",
              "Monde entier : Google ne s'engage sur aucune région pour cette API",
            ],
            ["Google AdMob", "Publicités récompensées que vous choisissez de regarder", "États-Unis"],
            ["Google Firebase Cloud Messaging", "Acheminement des notifications push sur Android", "États-Unis"],
            ["Service Apple Push Notification", "Acheminement des notifications push sur iOS", "États-Unis"],
            ["Zoho Mail", "Notre messagerie, y compris les e-mails de réinitialisation du mot de passe", "Union européenne"],
            [
              "Google Play et l'App Store",
              "Connexion, paiements, abonnements et rapports de plantage",
              "Selon leurs propres politiques",
            ],
          ],
        },
        {
          type: "p",
          text: "Chacun de ces prestataires est tenu par contrat de protéger vos données au moins aussi bien que cette politique le décrit et de ne les utiliser que pour la finalité indiquée. Les autres joueurs voient votre nom d'utilisateur, votre profil dans le jeu et ce que vous écrivez dans le chat. Nous ne communiquons des données aux autorités que lorsque la loi l'exige.",
        },
      ],
    },
    {
      id: "storage",
      title: "Où vos données sont stockées",
      blocks: [
        {
          type: "p",
          text: "Nos serveurs, notre base de données et nos sauvegardes sont hébergés à Francfort, en Allemagne, et notre archive d'enregistrements expirés se trouve dans un bucket Google Cloud Storage de la même ville. Vos données restent dans l'Union européenne, sauf lorsqu'un prestataire cité ci-dessus les traite aux États-Unis ou, pour l'API Gemini, là où Google l'exécute. Pour ces transferts, nous nous appuyons sur les clauses contractuelles types de la Commission européenne et, lorsque le prestataire est certifié, sur le cadre de protection des données UE-États-Unis (Data Privacy Framework).",
        },
      ],
    },
    {
      id: "retention",
      title: "Combien de temps nous conservons les données",
      blocks: [
        {
          type: "table",
          head: ["Données", "Conservées"],
          rows: [
            ["Compte, progression, inventaire, amis, confirmations d'achat", "Jusqu'à la suppression de votre compte"],
            [
              "Historique des infractions et réductions au silence dans le chat, historique des sanctions pour collusion",
              "Durée de vie du compte (les réductions au silence elles-mêmes sont temporaires)",
            ],
            ["Bannissements d'appareil", "Jusqu'à ce que nous les levions"],
            ["Événements d'analyse", "400 jours, puis archivés"],
            ["Chats autres que le chat de bataille, y compris les messages privés", "90 jours, puis archivés"],
            [
              "Historique des transactions de pièces et d'XP",
              "90 jours (historique d'XP : 90 jours après votre dernière activité), puis archivé",
            ],
            ["Enregistrement du premier lancement avec adresse IP et modèle de téléphone", "90 jours, puis archivé"],
            [
              "Enregistrements des participants par partie avec adresse IP et identifiant d'appareil",
              "30 jours, puis archivés",
            ],
            ["Notifications envoyées, progression quotidienne", "30 jours, puis archivées"],
            ["Chat de bataille", "15 jours, puis supprimé"],
            ["Replays de bataille", "7 jours, puis archivés"],
            ["Événements de navigation dans la boutique", "3 jours, puis supprimés"],
          ],
        },
        {
          type: "p",
          text: "Les lignes marquées « puis archivé(e)s » sont copiées dans une archive à Francfort avant de quitter la base de données active. Nous utilisons l'archive pour des statistiques et pour enquêter sur des abus passés ; son accès est limité aux deux développeurs, et rien de son contenu n'est accessible depuis le jeu. Nous conservons les enregistrements archivés aussi longtemps qu'ils sont nécessaires à ces fins et les supprimons lorsqu'ils ne le sont plus.",
        },
        {
          type: "p",
          text: "Lorsque vous supprimez votre compte, nous supprimons vos données personnelles des systèmes actifs dans un délai de 30 jours. Nous conservons les documents que la loi nous impose de garder, comme les justificatifs d'achat pour la comptabilité, ainsi que les statistiques qui ne vous identifient plus.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Nos bases légales en un coup d'œil",
      blocks: [
        {
          type: "p",
          text: "Le RGPD nous impose une base légale pour tout ce que nous faisons de vos données. Les nôtres sont :",
        },
        {
          type: "ul",
          items: [
            "**Le contrat** : la gestion de votre compte, du jeu, de vos achats et du support. Sans ces données, il n'y a pas de jeu.",
            "**L'intérêt légitime** : prévenir la tricherie et les abus, modérer le chat, sécuriser le service, comprendre comment le jeu est joué et vous informer sur votre compte. Notre intérêt est un jeu équitable, sûr et fonctionnel ; nous limitons les données au minimum et les conservons peu de temps, et vous pouvez vous y opposer à tout moment.",
            "**Le consentement** : la publicité personnalisée dans les publicités récompensées, donné via les réglages de votre appareil et révocable au même endroit.",
            "**L'obligation légale** : la conservation des documents comptables et la réponse aux demandes légitimes des autorités.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Vos droits",
      blocks: [
        { type: "p", text: "Vous avez le droit :" },
        {
          type: "ul",
          items: [
            "d'**accéder** aux données personnelles que nous détenons sur vous et d'en obtenir une copie ;",
            "de faire **rectifier** des données inexactes ;",
            "de faire **supprimer** votre compte et vos données ;",
            "de **recevoir** vos données dans un format portable et lisible par machine ;",
            "de vous **opposer** aux traitements fondés sur nos intérêts légitimes et de faire **limiter** le traitement pendant que nous examinons votre demande ;",
            "de **retirer votre consentement** à la publicité à tout moment dans les réglages de votre appareil, et de désactiver les notifications de la même manière.",
          ],
        },
        {
          type: "p",
          text: "Pour exercer un droit, écrivez à [contact@geofastgames.com](mailto:contact@geofastgames.com) depuis l'adresse liée à votre compte ou, si votre compte n'a pas d'adresse e-mail, indiquez-nous votre nom d'utilisateur et nous confirmerons votre identité via le jeu. Les demandes de suppression peuvent aussi être lancées depuis notre [page de suppression des données](/datadeletion). Nous répondons dans un délai d'un mois.",
        },
        {
          type: "p",
          text: "Si vous estimez que nous traitons vos données de manière illicite, vous pouvez introduire une réclamation auprès de l'Autorité de protection des données belge (Gegevensbeschermingsautoriteit), rue de la Presse 35, 1000 Bruxelles, [autoriteprotectiondonnees.be](https://www.autoriteprotectiondonnees.be), ou auprès de l'autorité du pays où vous vivez.",
        },
      ],
    },
    {
      id: "children",
      title: "Enfants",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* ne s'adresse pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment de données personnelles les concernant. En Belgique, 13 ans est l'âge à partir duquel on peut consentir soi-même à des services en ligne. Le jeu porte dans chaque boutique une classification par âge qui reflète son chat en ligne et ses achats facultatifs ; les parents peuvent utiliser le contrôle parental de Google Play et de l'App Store pour restreindre les achats et les applications qu'un enfant peut installer.",
        },
        {
          type: "p",
          text: "Si vous pensez qu'un enfant de moins de 13 ans possède un compte, écrivez-nous et nous le supprimerons.",
        },
      ],
    },
    {
      id: "security",
      title: "Sécurité",
      blocks: [
        {
          type: "p",
          text: "Tout le trafic entre le jeu, ce site web et nos serveurs est chiffré (TLS). Les mots de passe sont hachés. La base de données n'est pas accessible depuis Internet. L'accès aux serveurs et aux données est limité aux deux développeurs ; les modérateurs ne voient l'historique du chat qu'au moyen d'un outil qui journalise chaque consultation. Aucun système n'est parfaitement sûr ; si nous apprenions un jour une violation touchant vos données, nous vous en informerions, ainsi que l'autorité, comme la loi l'exige.",
        },
      ],
    },
    {
      id: "website",
      title: "Ce site web",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com ne dépose aucun cookie et n'utilise aucun script de suivi ou d'analyse. Trois choses quittent votre navigateur lors d'une visite : la police de la page est chargée depuis Google Fonts, de sorte que Google voit votre adresse IP ; le nombre de membres de notre Discord est récupéré via l'API publique de Discord ; et les statistiques en direct proviennent de notre propre serveur. Les liens vers les boutiques d'applications portent une balise de campagne qui nous permet de voir qu'un téléchargement provient de ce site ; elle identifie le site, pas vous.",
        },
        {
          type: "p",
          text: "Lorsque vous nous envoyez une suggestion, un rapport de bug, un signalement concernant une traduction ou un signalement de joueur via un formulaire de ce site, nous stockons ce que vous avez saisi, les captures d'écran que vous avez jointes, l'heure, la langue de votre navigateur et une forme hachée de votre adresse IP sur notre propre serveur dans l'UE. Nous les utilisons pour lire votre message et y donner suite, ainsi que pour limiter les abus des formulaires. Votre nom d'utilisateur et votre adresse e-mail sont facultatifs ; ne les indiquez que si vous souhaitez que nous puissions vous répondre. Les envois de formulaires sont supprimés après douze mois.",
        },
      ],
    },
    {
      id: "changes",
      title: "Modifications de cette politique",
      blocks: [
        {
          type: "p",
          text: "Lorsque nous modifions notre façon de traiter les données, nous mettons à jour cette page et sa date, et pour les changements importants, nous vous en informons dans le jeu.",
        },
      ],
    },
  ],
};
