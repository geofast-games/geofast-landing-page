import type { TermsContent } from "./types";

// French (Belgium). Formal "vous" throughout, as in the French privacy policy.
// French typography: a no-break space (U+00A0) precedes : ; ? ! and sits
// inside French quotation marks. The document is called "Conditions
// d'utilisation", the term the privacy policy links to; the privacy policy is
// "Politique de confidentialite", as it names itself. Legal vocabulary
// follows the French text of the Consumer Rights Directive and the Digital
// Content Directive and Belgian usage: "droit de retractation", "conformite",
// "dispositions imperatives protegeant le consommateur", "faute lourde",
// "responsabilite", "tribunaux de votre domicile". Game terms follow the
// game's French translation: "bataille" for battle, "nation", "chat",
// "pieces", "diamants", "etoiles", "saison", "classements", "armes", "skins",
// "code de parrainage"; "Battle Pass" stays untranslated, as in the game. As
// in the privacy policy, cheating is "tricherie", a mute a "reduction au
// silence", a ban a "bannissement", a report a "signalement".
export const fr: TermsContent = {
  lang: "fr",
  label: "Français",
  pageTitle: "Conditions d'utilisation | Geofast: Battle of Nations",
  metaDescription:
    "Les règles du jeu Geofast: Battle of Nations : comptes, conduite, modération et recours, achats et Battle Pass, modifications et vos droits.",
  gameName: "Geofast: Battle of Nations",
  docName: "Conditions d'utilisation",
  lastUpdated: "Dernière mise à jour : 25 septembre 2026",
  sectionsLabel: "Sections",
  languageLabel: "Langue",
  contact: {
    line: "Des questions ? Posez-les sur Discord. Pour toute demande concernant vos données : écrivez-nous.",
    discord: "Demander sur Discord",
    back: "Retour à Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Qui nous sommes et ce que couvrent les présentes conditions",
      blocks: [
        {
          type: "p",
          text: "Les présentes conditions d'utilisation constituent le contrat entre vous et Geofast Games, un studio de jeux indépendant établi en Belgique, pour *Geofast: Battle of Nations* (le jeu) et le site web geofastgames.com. Vous pouvez nous joindre à [contact@geofastgames.com](mailto:contact@geofastgames.com).",
        },
        {
          type: "p",
          text: "En créant un compte ou en jouant, vous acceptez les présentes conditions. Si vous n'êtes pas d'accord avec elles, ne jouez pas. Notre [politique de confidentialité](/privacy) explique ce que nous faisons de vos données ; c'est un document distinct qui s'applique en parallèle des présentes conditions.",
        },
        {
          type: "p",
          text: "Sur iOS, l'application vous est concédée sous licence selon le contrat de licence utilisateur final standard d'Apple, qui régit votre utilisation de l'application elle-même. Les présentes conditions régissent le service de jeu, votre compte et la manière dont vous jouez avec les autres. Lorsque les deux se recoupent, le contrat d'Apple s'applique à la licence de l'application et les présentes conditions à tout le reste.",
        },
        {
          type: "p",
          text: "Les présentes conditions sont rédigées en anglais. Les traductions sont fournies pour votre commodité ; si une traduction diffère du texte anglais, le texte anglais prévaut.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Qui peut jouer",
      blocks: [
        {
          type: "p",
          text: "Vous devez avoir au moins 13 ans pour jouer. Si vous avez moins de 18 ans, vous avez besoin de l'autorisation d'un parent ou d'un tuteur pour jouer et pour effectuer tout achat, et en jouant, vous confirmez l'avoir obtenue. Les parents et tuteurs sont responsables de ce que les mineurs dont ils ont la charge font dans le jeu et des achats effectués via leur compte de boutique. Le contrôle parental de Google Play et de l'App Store permet de restreindre les achats et les téléchargements.",
        },
        {
          type: "p",
          text: "Les classifications par âge du jeu dans les boutiques reflètent le fait qu'il comporte un chat entre joueurs et des achats facultatifs.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Votre compte",
      blocks: [
        {
          type: "p",
          text: "Lorsque vous jouez en ligne pour la première fois, le jeu crée un compte lié à votre appareil. Vous pouvez y lier une adresse e-mail avec mot de passe, ou une connexion Google ou Apple, pour conserver votre progression d'un appareil à l'autre. Gardez vos identifiants pour vous : tout ce qui est fait via votre compte relève de votre responsabilité, et vous devez nous prévenir immédiatement si vous pensez que quelqu'un d'autre l'utilise.",
        },
        {
          type: "p",
          text: "Un seul appareil peut être connecté à un compte à la fois. Se connecter depuis un nouvel appareil déconnecte le précédent.",
        },
        {
          type: "p",
          text: "Si vous perdez ou réinitialisez votre appareil sans avoir lié une adresse e-mail ou une connexion Google ou Apple, nous n'avons aucun moyen de confirmer que le compte est le vôtre, et il ne peut pas être restauré. Liez votre compte si votre progression compte pour vous.",
        },
        {
          type: "p",
          text: "Partager un compte avec une autre personne n'est pas autorisé, car cela procure un avantage déloyal dans les classements. Avoir plusieurs comptes est autorisé, tant qu'aucun d'eux n'est utilisé pour obtenir un avantage déloyal, truquer des parties ou contourner une sanction visant un autre compte. Les comptes et leur contenu ne peuvent être ni vendus, ni achetés, ni échangés, ni cédés.",
        },
        {
          type: "p",
          text: "Votre nom d'utilisateur est visible par tous. Il ne doit pas être offensant ou trompeur, ni usurper l'identité de qui que ce soit, y compris de notre équipe. Vous pouvez le changer une fois dans le jeu, moyennant les frais qui y sont indiqués. Nous pouvons modifier un nom d'utilisateur qui enfreint ces règles.",
        },
        {
          type: "p",
          text: "Nous ne supprimons pas les comptes inactifs. Vous pouvez supprimer votre compte à tout moment dans le jeu, depuis votre profil, ou via notre [page de suppression des données](/datadeletion). La suppression est définitive et inclut votre progression, vos monnaies virtuelles et vos objets.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. Votre licence de jeu",
      blocks: [
        {
          type: "p",
          text: "Nous vous accordons une licence personnelle, non exclusive et non transférable pour installer le jeu et y jouer sur des appareils que vous possédez ou contrôlez, pour votre propre divertissement. Le jeu, ses graphismes, ses sons, ses textes, son code et son design appartiennent à Geofast Games ou à nos concédants et sont protégés par le droit de la propriété intellectuelle. Vous ne pouvez pas copier, modifier, distribuer, vendre ou louer une partie du jeu, ni le désassembler, sauf lorsque la loi l'autorise expressément.",
        },
        {
          type: "p",
          text: "Le jeu fonctionne sur les versions d'Android et d'iOS indiquées dans les boutiques. Jouer en ligne nécessite une version raisonnablement récente du jeu : nous publions des mises à jour via les boutiques, et une version obsolète peut perdre l'accès aux fonctionnalités en ligne jusqu'à sa mise à jour.",
        },
        {
          type: "p",
          text: "Vous pouvez enregistrer, diffuser en direct et publier des vidéos et des captures d'écran de vos parties, y compris sur des plateformes où vous gagnez de l'argent grâce à la publicité ou aux abonnements. Ne présentez pas votre contenu comme créé ou approuvé par nous, ne vendez pas de produits dérivés utilisant nos graphismes et ne mettez pas en avant des logiciels de triche ou des exploits. Nous pouvons vous demander de retirer un contenu qui enfreint ces règles ou la loi.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Règles de conduite",
      blocks: [
        { type: "p", text: "Jouez loyalement et traitez les autres joueurs avec respect. Vous ne pouvez pas :" },
        {
          type: "ul",
          items: [
            "utiliser des logiciels de triche, des exploits, des bots, de l'automatisation, des clients modifiés ou tout outil qui interfère avec le jeu ou ses serveurs ;",
            "exploiter des bugs pour en tirer un avantage au lieu de les signaler ;",
            "vous entendre avec d'autres joueurs, truquer des parties, échanger des victoires ou manipuler de toute autre manière les classements ou les récompenses, y compris avec des comptes supplémentaires ;",
            "partager, vendre, acheter ou transférer des comptes, ou échanger des objets virtuels en dehors du jeu ;",
            "harceler, menacer, insulter ou intimider d'autres joueurs, ou publier du contenu haineux, sexuel, violent ou autrement abusif ;",
            "usurper l'identité d'autres joueurs, de notre équipe ou de toute personne ou organisation ;",
            "envoyer du spam, faire de la publicité ou partager des liens vers du contenu nuisible ;",
            "demander ou collecter les informations personnelles ou les identifiants de connexion d'autres joueurs, ou partager les vôtres ou ceux de quelqu'un d'autre dans le chat ;",
            "faire sciemment de faux signalements concernant d'autres joueurs, ou détourner la procédure de recours ;",
            "organiser des paris ou des jeux d'argent sur des parties ou sur quoi que ce soit d'autre dans le jeu, ou y participer ;",
            "attaquer, sonder ou surcharger nos serveurs, ou perturber les connexions d'autres joueurs ;",
            "gâcher délibérément le jeu pour les autres joueurs ;",
            "utiliser le jeu à des fins illégales.",
          ],
        },
        {
          type: "p",
          text: "La rivalité, les provocations et le langage guerrier entre nations font partie du jeu. Les attaques contre des personnes réelles, la haine visant des groupes, les menaces et le contenu sexuel n'en font pas partie.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Chat, noms d'utilisateur et contenu que vous créez",
      blocks: [
        {
          type: "p",
          text: "Le jeu comporte un chat entre joueurs. Ce que vous écrivez est acheminé aux autres joueurs de ce chat et stocké sur nos serveurs pendant les durées indiquées dans la politique de confidentialité, afin que les modérateurs puissent examiner les signalements. Le chat n'est pas privé : les autres joueurs le voient, et les modérateurs peuvent le lire lorsqu'ils traitent un signalement. Ne partagez pas d'informations personnelles dans le chat.",
        },
        {
          type: "p",
          text: "Vous conservez les droits sur ce que vous écrivez. Vous nous autorisez à le stocker, l'afficher, le modérer et, si nécessaire, le retirer afin de faire fonctionner le jeu. Vous êtes responsable de ce que vous publiez. Nous retirons le contenu qui enfreint les présentes conditions ou la loi.",
        },
        {
          type: "p",
          text: "Si vous nous envoyez des suggestions ou des idées, via le jeu, notre site web ou Discord, nous pouvons les utiliser librement, sans paiement ni aucune obligation envers vous, et sans vous nommer.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. Comment nous modérons",
      blocks: [
        { type: "p", text: "La modération combine des outils automatiques et des personnes :" },
        {
          type: "ul",
          items: [
            "Avant qu'un message soit acheminé, un filtre automatique sur nos serveurs le confronte à des limites de débit, une liste de mots et des motifs de discours haineux. Un message bloqué n'est jamais envoyé.",
            "Lorsque nous avons activé cette fonction, les messages acheminés sont aussi classifiés par un service automatique (Gemini de Google), qui reçoit le message et vos messages récents dans ce chat comme contexte. Les noms d'utilisateur sont vérifiés de la même manière lorsque vous les définissez ou les modifiez. Un message classé comme abusif est supprimé et une infraction est enregistrée sur votre compte.",
            "Des modérateurs humains examinent les signalements des joueurs et agissent en fonction de ce qu'ils constatent. Leur accès à l'historique du chat est journalisé.",
          ],
        },
        {
          type: "p",
          text: "Les conséquences des infractions dans le chat sont des avertissements et des réductions au silence temporaires. Les infractions détectées automatiquement entraînent d'abord un avertissement, puis une courte réduction au silence si vous récidivez rapidement. Les réductions au silence appliquées par les modérateurs sont temporaires et s'allongent à chaque réduction au silence déjà reçue, de quelques heures à plusieurs mois. L'enregistrement de vos infractions et réductions au silence reste lié à votre compte afin que les comportements répétés puissent être reconnus.",
        },
        {
          type: "p",
          text: "Chaque fois que nous vous réduisons au silence, retirons votre contenu ou pénalisons votre compte, nous vous indiquons dans le jeu ce qui a été fait et pourquoi, et vous pouvez le contester comme décrit à la section 9.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Application du fair-play",
      blocks: [
        {
          type: "p",
          text: "Les actions de bataille sont validées sur nos serveurs au moment où elles se produisent, de sorte qu'un client modifié ne peut pas changer l'issue d'une partie. Une vérification automatique examine régulièrement les enregistrements de parties récentes à la recherche de joueurs qui se retrouvent dans les mêmes parties bien plus souvent que le hasard ne le permet ; c'est ainsi que le trucage de parties et la collusion sont détectés.",
        },
        {
          type: "p",
          text: "La tricherie et la collusion sont sanctionnées par étapes. Un joueur est d'abord averti, une fois. Les sanctions ne s'aggravent que s'il y a de nouvelles preuves après l'avertissement, et avec du temps entre les étapes : réinitialisation des classements et des monnaies, puis réinitialisation complète de la progression, et enfin bannissement définitif de l'appareil, qui bloque aussi les nouveaux comptes créés depuis celui-ci. Les comptes impliqués dans une tricherie grave ou répétée peuvent être fermés. Avant d'appliquer une réinitialisation, nous sauvegardons un instantané du compte, afin qu'une sanction qui s'avère erronée puisse être annulée. L'enregistrement des sanctions reste lié à votre compte.",
        },
        {
          type: "p",
          text: "Chaque sanction s'accompagne d'une notification dans le jeu indiquant ce qui a été fait et pourquoi, et vous pouvez la contester comme décrit à la section 9.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Signalements et recours",
      blocks: [
        {
          type: "p",
          text: "Pour signaler un joueur ou un contenu qui enfreint les présentes conditions ou la loi, utilisez le bouton « Signaler » dans le jeu, le [formulaire de signalement sur notre site web](/report), ou écrivez à [contact@geofastgames.com](mailto:contact@geofastgames.com). Dites-nous qui, quoi et où. Nous confirmons la réception de votre signalement et vous informons de notre décision sans retard injustifié. Les signalements sont traités par des personnes, avec l'aide des outils décrits ci-dessus, de bonne foi et sans arbitraire.",
        },
        {
          type: "p",
          text: "Si vous estimez qu'une réduction au silence, une sanction, un bannissement ou un retrait de contenu était injustifié, introduisez un recours par e-mail ou sur Discord dans un délai d'un mois. Une personne qui n'a pas participé à la décision initiale la réexamine, et nous répondons dans les 14 jours. Si la décision était erronée, nous l'annulons et, lorsque c'est possible, restaurons ce qui a été perdu. Rien ici ne limite votre droit de porter l'affaire devant un tribunal ou un organisme de protection des consommateurs.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Monnaies virtuelles, objets et achats",
      blocks: [
        {
          type: "p",
          text: "Le jeu comporte des monnaies virtuelles (diamants, pièces et étoiles) et des objets virtuels tels que des armes, des skins, des améliorations et des récompenses du Battle Pass. Les diamants peuvent être achetés avec de l'argent réel via Google Play ou l'App Store ; les pièces et les étoiles se gagnent en jouant ou s'échangent dans le jeu. Les prix sont affichés dans votre devise locale dans la boutique et dans le jeu avant l'achat.",
        },
        {
          type: "p",
          text: "Les monnaies et objets virtuels vous sont concédés sous licence pour une utilisation dans le jeu. Ils ne sont pas votre propriété, n'ont aucune valeur en dehors du jeu, ne peuvent pas être échangés contre de l'argent réel, des biens ou des services, et ne peuvent pas être transférés à un autre compte ou à une autre personne.",
        },
        {
          type: "p",
          text: "Les achats sont livrés immédiatement. En achetant, vous nous demandez de livrer sans attendre et reconnaissez que, dès que la livraison a commencé, le droit de rétractation légal de 14 jours ne s'applique plus. Pour le reste, les achats sont définitifs, sauf lorsque la loi vous accorde un droit au remboursement. Les demandes de remboursement s'adressent à la boutique où vous avez acheté, qui gère le paiement ; nous ne voyons jamais vos données de paiement.",
        },
        {
          type: "p",
          text: "Nous pouvons modifier, rééquilibrer, ajouter ou retirer des monnaies et objets virtuels pour des motifs valables : maintenir l'équilibre et le plaisir du jeu, corriger des bugs, assurer la sécurité ou respecter des obligations légales. Lorsqu'une modification affecterait de manière significative quelque chose que vous avez récemment payé, nous vous en informons à l'avance, et lorsque la loi vous donne le droit de mettre fin au contrat et d'être remboursé en raison d'une telle modification, nous le respectons. Vos droits légaux en tant que consommateur, y compris le droit à un jeu qui fonctionne comme décrit, ne sont pas affectés.",
        },
        {
          type: "p",
          text: "Le jeu ne comporte aucune publicité imposée. Lorsque le jeu propose des publicités récompensées facultatives, en regarder une est votre choix, et nous pouvons modifier ou retirer cette offre.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. Le Battle Pass",
      blocks: [
        {
          type: "p",
          text: "Le Battle Pass est un abonnement acheté via Google Play ou l'App Store. Il se renouvelle automatiquement chaque mois au prix indiqué dans la boutique jusqu'à ce que vous l'annuliez. Vous pouvez l'annuler à tout moment dans les paramètres d'abonnement de votre boutique ; le pass reste alors actif jusqu'à la fin de la période que vous avez payée, et vous conservez les récompenses que vous avez réclamées. Les changements de prix s'appliquent à partir du renouvellement suivant, et la boutique vous en informe avant qu'ils prennent effet.",
        },
        {
          type: "p",
          text: "Les récompenses du Battle Pass se débloquent en jouant pendant la saison ; un pass ne donne pas à lui seul toutes les récompenses. Les remboursements d'abonnements sont gérés par la boutique selon ses règles et la loi.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Récompenses de parrainage et programme de créateurs",
      blocks: [
        {
          type: "p",
          text: "Le jeu vous récompense lorsqu'un nouveau joueur rejoint le jeu avec votre code de parrainage, et le récompense aussi. Les récompenses de parrainage sont destinées à de véritables nouveaux joueurs. Vous parrainer vous-même, parrainer vos autres comptes ou des comptes créés uniquement pour empocher la récompense n'est pas autorisé, et les récompenses obtenues de cette manière sont retirées.",
        },
        {
          type: "p",
          text: "Notre programme de créateurs récompense les joueurs qui publient des vidéos sur le jeu lorsque leur contenu atteint certains seuils de vues. Les seuils, les récompenses et les conditions d'admissibilité sont publiés dans le jeu et peuvent changer. Les récompenses sont vérifiées et accordées par nous manuellement, et nous tranchons en cas de doute. Les récompenses réclamées avec des vues falsifiées, ou avec un contenu qui enfreint les présentes conditions, sont refusées ou retirées.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Services tiers",
      blocks: [
        {
          type: "p",
          text: "Le jeu utilise Google Play et l'App Store pour les téléchargements, les paiements et les abonnements ; Google et Apple pour la connexion facultative ; Google AdMob pour les publicités récompensées facultatives ; et Discord pour notre serveur communautaire. Votre utilisation de ces services est régie par leurs propres conditions et politiques de confidentialité, sur lesquelles nous n'avons aucun contrôle.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Disponibilité et modifications du jeu",
      blocks: [
        {
          type: "p",
          text: "Nous nous efforçons de garder le jeu disponible, mais nous ne pouvons pas promettre qu'il ne sera jamais interrompu. Les fonctionnalités en ligne peuvent être indisponibles pendant la maintenance, en raison de problèmes techniques ou pour des raisons indépendantes de notre volonté. Les modes hors ligne continuent de fonctionner sans connexion.",
        },
        {
          type: "p",
          text: "Le jeu est un service en direct et évolue avec le temps : nous ajoutons, ajustons et retirons des fonctionnalités, des armes, des nations, des saisons et des événements pour le garder équilibré et attrayant, corriger des problèmes, assurer la sécurité et respecter les obligations légales. Les modifications qui affectent de manière significative votre façon de jouer sont annoncées à l'avance dans le jeu. Vos droits légaux ne sont pas affectés.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Fin du contrat",
      blocks: [
        {
          type: "p",
          text: "Vous pouvez arrêter de jouer à tout moment en désinstallant le jeu, et vous pouvez supprimer votre compte dans le jeu, depuis votre profil, ou via notre [page de suppression des données](/datadeletion). La suppression de votre compte efface définitivement votre progression, vos monnaies virtuelles et vos objets ; rien n'est remboursé pour ceux-ci.",
        },
        {
          type: "p",
          text: "Nous pouvons suspendre ou fermer votre compte si vous enfreignez gravement ou de manière répétée les présentes conditions, ou si la loi l'exige. Sauf dans les cas graves, comme la tricherie, les abus ou une obligation légale, nous vous avertissons d'abord et vous donnons la possibilité de répondre. Nous vous indiquons le motif et la manière d'introduire un recours (section 9). La fermeture d'un compte met fin à votre licence et à votre accès à ses monnaies et objets virtuels.",
        },
        {
          type: "p",
          text: "Si nous devions un jour arrêter le jeu, nous vous en informerions au moins 30 jours à l'avance dans le jeu et sur notre site web. Les monnaies et objets virtuels prennent fin avec le jeu. Vos droits légaux concernant les achats récents ne sont pas affectés.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. Notre responsabilité",
      blocks: [
        {
          type: "p",
          text: "Nous sommes responsables envers vous conformément à la loi. Nous n'excluons ni ne limitons notre responsabilité en cas de décès ou de blessure corporelle causés par notre négligence, de dol, de faute intentionnelle ou de faute lourde, ni pour tout ce qui ne peut être exclu en vertu des dispositions qui vous protègent en tant que consommateur, y compris votre droit à un jeu conforme à ce qui a été promis.",
        },
        {
          type: "p",
          text: "Au-delà, nous ne sommes responsables que des dommages qui étaient prévisibles lorsque vous avez accepté les présentes conditions et qui résultent de notre manquement à celles-ci. Le jeu est gratuit et fourni en tant que service en direct ; nous ne sommes pas responsables des pertes causées par des interruptions, par le comportement d'autres joueurs ou par des événements échappant à notre contrôle raisonnable, sauf disposition légale contraire.",
        },
        {
          type: "p",
          text: "Vous êtes responsable des dommages que vous nous causez en enfreignant les présentes conditions, dans la mesure permise par la loi.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Confidentialité",
      blocks: [
        {
          type: "p",
          text: "La manière dont nous collectons et utilisons vos données est décrite dans notre [politique de confidentialité](/privacy). Elle ne fait pas partie des présentes conditions et ne dépend pas de votre acceptation de celles-ci : elle vous indique ce que nous faisons et quels sont vos droits.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Modifications des présentes conditions",
      blocks: [
        {
          type: "p",
          text: "Nous modifions les présentes conditions lorsque le jeu, la loi ou nos services changent, ou pour les rendre plus claires. Pour les modifications qui affectent vos droits ou votre façon de jouer, nous vous en informons dans le jeu au moins 30 jours avant leur entrée en vigueur, et vous pouvez arrêter de jouer et supprimer votre compte avant cette date si vous n'êtes pas d'accord. Les clarifications et corrections qui ne vous affectent pas prennent effet dès leur publication. La date en haut de page vous indique quand la version actuelle est entrée en vigueur.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Droit applicable, litiges et réclamations",
      blocks: [
        {
          type: "p",
          text: "Les présentes conditions sont régies par le droit belge. Si vous vivez dans un autre pays, vous conservez la protection des dispositions impératives du droit de la consommation de ce pays, et vous pouvez introduire une action devant les tribunaux du lieu où vous vivez. Nous ne pouvons introduire une action contre vous que devant ceux-ci.",
        },
        {
          type: "p",
          text: "Si vous avez une réclamation, contactez-nous d'abord à [contact@geofastgames.com](mailto:contact@geofastgames.com) ou sur Discord ; la plupart des problèmes peuvent se régler directement. Vous pouvez aussi vous adresser à un organisme de règlement des litiges de consommation de votre pays ; en Belgique, il s'agit du Service de Médiation pour le Consommateur (Consumentenombudsdienst). Les présentes conditions ne contiennent aucune clause d'arbitrage ni aucune renonciation aux actions collectives.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Dispositions finales",
      blocks: [
        {
          type: "p",
          text: "Nous vous contactons par des notifications dans le jeu, sur notre site web et, si vous avez lié une adresse e-mail, par e-mail. Vous nous contactez à [contact@geofastgames.com](mailto:contact@geofastgames.com) ; c'est aussi notre adresse pour les notifications légales et notre point de contact pour les autorités.",
        },
        {
          type: "p",
          text: "Si une partie des présentes conditions s'avère nulle, le reste demeure en vigueur. Si nous n'appliquons pas une règle à un moment donné, nous pouvons toujours l'appliquer plus tard. Nous pouvons transférer le présent contrat à une société qui reprend le jeu, à condition que vos droits ne soient pas réduits ; vous ne pouvez pas transférer votre compte ni le présent contrat. Les présentes conditions et la politique de confidentialité constituent l'intégralité de l'accord entre vous et nous concernant le jeu.",
        },
      ],
    },
  ],
};
