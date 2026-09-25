import type { DataDeletionContent } from "./types";

// French (Belgium). Formal "vous" throughout, as in the French privacy policy
// and the French Terms. French typography: a no-break space (U+00A0)
// precedes : ; ? ! and sits inside French quotation marks. The page is the
// "Demande de suppression des donnees"; both other documents link to it as
// the "page de suppression des donnees". Terminology follows them: "compte",
// "appareil", "nom d'utilisateur", "progression", "monnaies virtuelles et
// objets", "base de donnees active" and "systemes actifs", "archive",
// "abonnement", "boutique" for the store; "Battle Pass" stays untranslated,
// as in the game. The privacy policy is the "politique de confidentialite",
// the Terms are the "conditions d'utilisation", as those documents name
// themselves.
export const fr: DataDeletionContent = {
  lang: "fr",
  label: "Français",
  pageTitle: "Demande de suppression des données | Geofast: Battle of Nations",
  metaDescription:
    "Comment supprimer votre compte Geofast: Battle of Nations et vos données personnelles, dans le jeu ou par e-mail, ce qui est supprimé, ce qui est conservé et combien de temps cela prend.",
  gameName: "Geofast: Battle of Nations",
  docName: "Demande de suppression des données",
  lastUpdated: "Dernière mise à jour : 25 septembre 2026",
  sectionsLabel: "Sections",
  languageLabel: "Langue",
  contact: {
    line: "Des questions ? Posez-les sur Discord. Pour toute demande concernant vos données : écrivez-nous.",
    discord: "Demander sur Discord",
    back: "Retour à Geofast Games",
  },
  request: {
    title: "Demander la suppression par e-mail",
    text: "Pour le cas où vous ne pouvez plus ouvrir le jeu. Le bouton ouvre un e-mail à notre adresse dans lequel la demande est déjà rédigée ; complétez les informations de votre compte et envoyez-le. Si vous n'avez pas d'application de messagerie sur cet appareil, écrivez à contact@geofastgames.com avec les mêmes informations.",
    button: "Envoyer la demande de suppression",
    emailSubject: "Demande de suppression des données - Geofast: Battle of Nations",
    emailBody: `Bonjour Geofast Games,

Je souhaite que mon compte Geofast: Battle of Nations et mes données personnelles soient supprimés.

Mon compte\u00a0:
- Nom d'utilisateur dans le jeu\u00a0: [à compléter]
- Adresse e-mail liée au compte, le cas échéant\u00a0: [à compléter]
- Nation pour laquelle je joue\u00a0: [à compléter]
- Appareil utilisé pour jouer\u00a0: [à compléter]

Je comprends que la suppression est définitive, que ma progression, mes monnaies et mes objets sont perdus, et qu'un abonnement Battle Pass doit être annulé séparément dans ma boutique d'applications.

Merci.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Votre droit de supprimer vos données",
      blocks: [
        {
          type: "p",
          text: "Vous pouvez faire supprimer votre compte *Geofast: Battle of Nations* et les données personnelles qui y sont liées à tout moment, où que vous viviez, sans donner de raison. Il existe deux moyens : dans le jeu, ce qui est immédiat, ou par e-mail si vous ne pouvez plus ouvrir le jeu.",
        },
        {
          type: "p",
          text: "La suppression de votre compte est la seule forme de suppression que nous proposons : nous ne supprimons pas des parties d'un compte en conservant le reste.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Avant de supprimer",
      blocks: [
        {
          type: "ul",
          items: [
            "**Annulez d'abord votre Battle Pass.** Un abonnement est un contrat avec votre boutique d'applications, et la suppression de votre compte ne l'annule pas. Annulez-le dans les paramètres d'abonnement de Google Play ou de l'App Store, sinon il continue de se renouveler.",
            "**Rien n'est remboursé.** Les monnaies virtuelles, les objets et le temps d'abonnement non utilisé prennent fin avec le compte, comme le prévoient nos [conditions d'utilisation](/termsofservice).",
            "**C'est irréversible.** Il n'y a ni délai de grâce ni sauvegarde à partir de laquelle restaurer.",
            "**Cela s'applique à tous les appareils.** Le compte disparaît de tous les appareils auxquels il était lié, pas seulement de celui depuis lequel vous le supprimez.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Supprimer votre compte dans le jeu",
      blocks: [
        {
          type: "p",
          text: "Ouvrez votre profil, appuyez sur **Supprimer mon compte** et saisissez votre nom d'utilisateur pour confirmer. Le compte est supprimé immédiatement. Au prochain lancement du jeu sur cet appareil, un nouveau compte vide est créé.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Ou demandez-nous par e-mail",
      blocks: [
        {
          type: "p",
          text: "Si vous avez désinstallé le jeu ou perdu l'appareil, écrivez à [contact@geofastgames.com](mailto:contact@geofastgames.com), ou utilisez le bouton ci-dessous, en indiquant votre nom d'utilisateur dans le jeu et, si vous en avez une, l'adresse e-mail liée à votre compte. Écrivez depuis cette adresse : c'est ainsi que nous savons que la demande vient du titulaire du compte. Si votre compte n'a pas d'adresse e-mail, indiquez-nous votre nom d'utilisateur et la nation pour laquelle vous jouez, et nous confirmerons via le jeu que le compte est le vôtre avant de supprimer quoi que ce soit.",
        },
        {
          type: "p",
          text: "Nous confirmons la réception de votre demande, supprimons dans un délai de 30 jours et confirmons de nouveau une fois que c'est fait. Si nous ne parvenons pas à faire correspondre vos informations à un compte, nous vous en demandons davantage avant d'agir ; nous ne supprimons jamais un compte sur une demande non vérifiée.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "Ce qui est supprimé",
      blocks: [
        {
          type: "p",
          text: "La suppression de votre compte l'efface avec tout ce qui y est stocké :",
        },
        {
          type: "ul",
          items: [
            "votre compte, votre nom d'utilisateur et les liens d'appareil, d'e-mail, Google ou Apple qui y sont attachés ;",
            "votre progression : classements, objets, monnaies virtuelles, améliorations, succès, progression de saison et historique de batailles ;",
            "votre liste d'amis et votre code de parrainage ;",
            "votre jeton de notification push.",
          ],
        },
        {
          type: "p",
          text: "Les enregistrements techniques qui étaient liés au compte, comme les événements d'analyse, les messages de chat encore présents dans notre base de données active et les enregistrements de partie et du premier lancement décrits dans la politique de confidentialité, sont retirés de nos systèmes actifs dans un délai de 30 jours.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "Ce que nous conservons, et pourquoi",
      blocks: [
        {
          type: "ul",
          items: [
            "Les justificatifs d'achat que le droit comptable nous impose de conserver, pendant la durée fixée par la loi.",
            "Les statistiques qui ne vous identifient plus, comme le nombre de batailles jouées un jour donné.",
            "Les enregistrements qui avaient déjà quitté la base de données active pour notre archive avant la suppression, comme décrit sous [combien de temps nous conservons les données](/privacy#retention) dans la politique de confidentialité.",
            "Les données détenues par les boutiques d'applications, Google AdMob ou Discord selon leurs propres politiques. Nous ne les contrôlons pas ; pour les faire supprimer, adressez-vous à eux.",
          ],
        },
        {
          type: "p",
          text: "Les fichiers locaux sur votre appareil vous appartiennent : désinstaller le jeu les supprime.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Autres demandes concernant vos données",
      blocks: [
        {
          type: "p",
          text: "Vous pouvez aussi demander une copie de vos données, faire rectifier des données inexactes ou vous opposer à la manière dont nous les utilisons. La même adresse e-mail traite toutes ces demandes, et la [politique de confidentialité](/privacy#rights) décrit chacun de ces droits. Nous répondons dans un délai d'un mois.",
        },
      ],
    },
  ],
};
