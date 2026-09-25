import type { PrivacyContent } from "./types";

// Source language. Every statement here is checked against the backend and
// client code; the retention numbers are the ones the cleanup jobs enforce
// (backend cleanup/cleanupCron.go, mirrored in geofast-workspace
// docs/architecture/data-retention.md). Change the code, change this file,
// then the translations.
export const en: PrivacyContent = {
  lang: "en",
  label: "English",
  pageTitle: "Privacy Policy | Geofast: Battle of Nations",
  metaDescription:
    "What data Geofast: Battle of Nations collects, how it is used, who it is shared with, and how to request deletion.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Privacy Policy",
  lastUpdated: "Last updated: September 25, 2026",
  sectionsLabel: "Sections",
  languageLabel: "Language",
  legalBasisLabel: "Legal basis:",
  contact: {
    line: "Questions? Ask on Discord. Requests about your data: email us.",
    discord: "Ask on Discord",
    back: "Back to Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        {
          type: "p",
          text: "Geofast Games is an independent game studio based in Belgium. We make *Geofast: Battle of Nations* and run this website. We are the data controller for the personal data described in this policy: we decide what is collected and why.",
        },
        {
          type: "p",
          text: "You reach us at [contact@geofastgames.com](mailto:contact@geofastgames.com). We are a two-person studio and have not appointed a data protection officer; the same address reaches the people responsible for your data.",
        },
        {
          type: "p",
          text: "This policy covers the game on iOS and Android and the website geofastgames.com. It does not cover Discord, the App Store, Google Play or other services you use alongside the game; those have their own policies, linked where they come up.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "At a glance",
      blocks: [
        {
          type: "table",
          head: ["What", "Why", "How long"],
          rows: [
            [
              "Account: a device identifier, your username, and if you choose, an email address and password or a Google or Apple sign-in",
              "To run your account and let you play online",
              "Until you delete your account; we do not delete inactive accounts",
            ],
            [
              "Gameplay: matches, rankings, items, purchase confirmations",
              "To run the game, leaderboards and your inventory",
              "Until you delete your account; battle replays 7 days, then archived",
            ],
            [
              "Chat messages",
              "To deliver them and to moderate abuse",
              "Battle chat 15 days, then deleted; other chat 90 days, then archived",
            ],
            [
              "IP address, device identifier, phone model",
              "To detect cheating and collusion and to enforce bans",
              "Match records 30 days and first-launch record 90 days, then archived; the device identifier stays with your account; a ban record stays until we lift the ban",
            ],
            [
              "Push notification token",
              "To send notifications you can switch off",
              "Until the token stops working (for example after you uninstall) or you delete your account",
            ],
            [
              "Analytics events about how you play",
              "To understand play patterns and fix problems",
              "400 days, then archived",
            ],
            [
              "Advertising identifier, read by Google AdMob's software",
              "To load and show rewarded ads you can choose to watch",
              "Sent to Google when the game starts and when an ad loads; not stored by us; AdMob's policy governs",
            ],
          ],
        },
        { type: "lead", text: "Four things worth knowing before you read on" },
        {
          type: "ul",
          items: [
            "Chat is not private. Messages are kept for up to 15 days (battle chat) or 90 days (other chat) so moderators can review reports, every message passes an automated filter, and when we switch it on, messages are also classified by Google's Gemini service.",
            "We record your IP address and a device identifier when you play, to catch cheating and to make bans stick.",
            "Our servers are in Frankfurt, Germany. A few providers we use (Google, Apple) process data outside the European Union.",
            "Records that expire from our live database (chat other than battle chat, match records, analytics and more) are archived in Frankfurt rather than destroyed. See how long we keep data.",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Your account",
      blocks: [
        {
          type: "p",
          text: "When you first play online, we create an account for you and link it to an identifier generated on your device. Nothing else is needed to play, and you never have to give us your name.",
        },
        {
          type: "p",
          text: "You choose a username, which other players can see. Beyond that we store what the game needs to work for you: your progress, your settings and friends, and the version of the game you use.",
        },
        {
          type: "p",
          text: "If you want to keep your progress across devices, you can add an email address and password or sign in with Google or Apple. Passwords are stored hashed, which means we cannot read them. From Google or Apple we receive only what is needed to link the account, and we use your email address only to secure the account and reset the password.",
        },
        {
          type: "p",
          text: "The device identifier is required to play online. Everything else is optional.",
        },
        { type: "basis", text: "performance of our contract with you (providing the game)." },
      ],
    },
    {
      id: "gameplay",
      title: "Gameplay, progress and purchases",
      blocks: [
        {
          type: "p",
          text: "To run online battles, leaderboards and your inventory we store your game progress: match results, rankings, the items and currencies you own, and your progress through events and seasons. Your recent battles are kept as history; battle replays leave the live database after 7 days and are archived.",
        },
        {
          type: "p",
          text: "Payments are handled entirely by Google Play or the App Store. We never see your card or bank details. The store tells us what you bought, and we store that confirmation and, for the Battle Pass, the subscription status, so we can deliver items, restore purchases and help with support.",
        },
        {
          type: "basis",
          text: "performance of our contract with you. Purchase records that we must keep for accounting are kept under our legal obligations.",
        },
      ],
    },
    {
      id: "chat",
      title: "Chat and moderation",
      blocks: [
        {
          type: "p",
          text: "The game has chat between players. Messages are delivered to the other players in that chat and stored on our servers: chat inside a battle for 15 days, after which it is deleted; all other chat for 90 days, after which it is archived (see how long we keep data). We keep them so that moderators can investigate reports of abuse or cheating. Every moderator lookup is logged.",
        },
        {
          type: "p",
          text: "Moderation works in three steps. First, every message passes an automated filter on our servers (rate limits, a word list and hate speech patterns) before it is delivered; a blocked message is never sent. Second, when we switch it on, delivered messages are also classified by Google's Gemini service, which receives the message and your recent messages in that chat for context. Usernames are checked by Gemini when you set or change them. A message Gemini classifies as abusive is deleted and a violation is recorded. Third, human moderators act on reports.",
        },
        {
          type: "p",
          text: "Violations lead to warnings and temporary chat mutes, as set out in our [Terms of Service](/termsofservice). The record of your violations and mutes stays on your account so that repeat behaviour can be recognised. These automated steps affect only your ability to chat. If you think a decision was wrong, email us or ask on Discord and a person will look at it.",
        },
        {
          type: "p",
          text: "Do not share personal details in chat. Other players can see what you write.",
        },
        {
          type: "basis",
          text: "our legitimate interest in keeping the game safe and fair for everyone who plays it.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Fair play and security",
      blocks: [
        {
          type: "p",
          text: "Cheating in a competitive game ruins it for everyone, so we keep a small amount of technical data to detect it and to make bans stick:",
        },
        {
          type: "ul",
          items: [
            "When you first launch the game, we record your device identifier, phone model, platform and IP address, together with the steps of the tutorial you complete. This record leaves the live database after 90 days and is archived.",
            "For every online match we record which accounts took part, with their device identifier and IP address. An automated check regularly looks through recent records for pairs of players who land in the same matches far more often than chance allows. Match records leave the live database after 30 days and are archived.",
            "Detected cheating leads to penalties, up to a ban, as set out in our [Terms of Service](/termsofservice). The penalty history stays on your account, and you can ask a person to review any penalty.",
            "A device ban also blocks new accounts from that device. Ban records have no end date; we remove them when a review shows the ban was wrong.",
          ],
        },
        {
          type: "p",
          text: "Battle actions themselves are validated on our servers as they happen, which needs no data beyond the match itself. We do not use your IP address to determine your location. When you first join, the game suggests a nation from the language and region setting of your device; that reading happens on the device, and you can choose any nation instead.",
        },
        {
          type: "basis",
          text: "our legitimate interest in preventing cheating, fraud and abuse, and in keeping the service secure.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Push notifications",
      blocks: [
        {
          type: "p",
          text: "If you allow notifications, your device gives us a push token, which we store and use to tell you about in-game events: things that happen to your account, your friends and your nation, new events and seasons, and a reminder if you have been away for a while.",
        },
        {
          type: "p",
          text: "Notifications are delivered through Firebase Cloud Messaging (Google) on Android and the Apple Push Notification service on iOS. You can turn them off at any time in your device settings, which stops them from being shown; the token itself stays until it becomes invalid (for example when you uninstall the game) or you delete your account. Delivered notifications are kept on our side for 30 days, then archived.",
        },
        {
          type: "basis",
          text: "our legitimate interest in keeping you informed about your account and the game you play, with an opt-out that takes one tap.",
        },
      ],
    },
    {
      id: "ads",
      title: "Optional rewarded ads",
      blocks: [
        {
          type: "p",
          text: "The game has no forced ads: nothing interrupts a battle or a menu. The shop offers rewarded ads that play only when you tap them, in exchange for in-game currency.",
        },
        {
          type: "p",
          text: "Ads are served by Google AdMob. Its software is part of the game, starts with it, and loads an ad in the background so one is ready if you tap. At that point, whether or not you ever watch an ad, AdMob receives your advertising identifier and a coarse location derived from your IP address; if you watch one, also how you interacted with it. On iOS the system asks your permission at first launch before the advertising identifier is used for tracking; on Android you can reset or delete the advertising identifier in your device settings. Google describes what it does with this data in its [privacy policy](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "your consent, given through your device's permission and advertising settings, which you can withdraw there at any time.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      blocks: [
        {
          type: "p",
          text: "To understand how the game is played and to find problems, the game sends events to our own servers: session start and end, battles played and finished, tutorial progress, purchases in the shop, notifications opened, errors, and on Android the store referrer that brought you to the game. Each event carries your account identifier, device identifier, platform, phone model and game version. We do not use Google Analytics, Firebase Analytics or any other third-party analytics service. Crash reports reach us through Google Play and the App Store under their own policies.",
        },
        {
          type: "p",
          text: "Analytics events are kept for 400 days. Statistics derived from them contain no personal data and are kept indefinitely.",
        },
        {
          type: "basis",
          text: "our legitimate interest in improving the game and keeping it running well.",
        },
      ],
    },
    {
      id: "support",
      title: "Support and community",
      blocks: [
        {
          type: "p",
          text: "If you email us, we keep the exchange for as long as it takes to handle it.",
        },
        {
          type: "p",
          text: "Our Discord server is run on Discord under [Discord's privacy policy](https://discord.com/privacy). Moderators there can look up in-game chat history to handle reports, as described under chat and moderation.",
        },
        {
          type: "basis",
          text: "performance of our contract with you (support) and our legitimate interest in running a community around the game.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Who we share data with",
      blocks: [
        {
          type: "p",
          text: "We do not sell personal data and we do not share it with data brokers. The companies below process data on our behalf or receive it because of how the game works:",
        },
        {
          type: "table",
          head: ["Provider", "What for", "Where"],
          rows: [
            ["DigitalOcean", "Hosting of our game servers and database", "Frankfurt, Germany"],
            [
              "Gcore",
              "Content delivery network that carries part of the game's traffic to our servers; it sees your IP address in transit",
              "Edge servers worldwide; the company is based in Luxembourg",
            ],
            [
              "Google Cloud Storage",
              "Archive of expired records (see how long we keep data)",
              "Frankfurt, Germany",
            ],
            [
              "Google (Gemini API)",
              "Classification of usernames and, when switched on, chat messages",
              "Worldwide: Google does not commit to a region for this API",
            ],
            ["Google AdMob", "Rewarded ads you choose to watch", "United States"],
            ["Google Firebase Cloud Messaging", "Delivering push notifications on Android", "United States"],
            ["Apple Push Notification service", "Delivering push notifications on iOS", "United States"],
            ["Zoho Mail", "Our email, including password reset emails", "European Union"],
            [
              "Google Play and the App Store",
              "Sign-in, payments, subscriptions and crash reports",
              "Under their own policies",
            ],
          ],
        },
        {
          type: "p",
          text: "Each of these providers is bound by contract to protect your data at least as well as this policy describes and to use it only for the purpose listed. Other players see your username, your in-game profile and what you write in chat. We disclose data to authorities only when the law requires it.",
        },
      ],
    },
    {
      id: "storage",
      title: "Where your data is stored",
      blocks: [
        {
          type: "p",
          text: "Our servers, database and backups are hosted in Frankfurt, Germany, and our archive of expired records is in a Google Cloud Storage bucket in the same city. Your data stays in the European Union except where a provider listed above processes it in the United States or, for the Gemini API, wherever Google runs it. For those transfers we rely on the European Commission's standard contractual clauses and, where the provider is certified, the EU-US Data Privacy Framework.",
        },
      ],
    },
    {
      id: "retention",
      title: "How long we keep data",
      blocks: [
        {
          type: "table",
          head: ["Data", "Kept for"],
          rows: [
            ["Account, progress, inventory, friends, purchase confirmations", "Until you delete your account"],
            [
              "Chat violation and mute history, collusion penalty history",
              "Life of the account (the mutes themselves are temporary)",
            ],
            ["Device bans", "Until we lift them"],
            ["Analytics events", "400 days, then archived"],
            ["Chat other than battle chat, including direct messages", "90 days, then archived"],
            [
              "Coin and XP transaction history",
              "90 days (XP history: 90 days after your last activity), then archived",
            ],
            ["First-launch record with IP address and phone model", "90 days, then archived"],
            [
              "Per-match participant records with IP address and device identifier",
              "30 days, then archived",
            ],
            ["Delivered notifications, daily progress", "30 days, then archived"],
            ["Battle chat", "15 days, then deleted"],
            ["Battle replays", "7 days, then archived"],
            ["Shop browsing events", "3 days, then deleted"],
          ],
        },
        {
          type: "p",
          text: "Rows marked \"then archived\" are copied to an archive in Frankfurt before they leave the live database. We use the archive for statistics and for investigating past abuse; access to it is limited to the two developers, and nothing in it is reachable from the game. We keep archived records for as long as they are needed for those purposes and delete them when they no longer are.",
        },
        {
          type: "p",
          text: "When you delete your account, we delete your personal data from the live systems within 30 days. We keep records we are legally required to keep, such as purchase records for accounting, and statistics that no longer identify you.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Our legal bases in one place",
      blocks: [
        {
          type: "p",
          text: "Under the GDPR we need a legal basis for each thing we do with your data. Ours are:",
        },
        {
          type: "ul",
          items: [
            "**Contract**: running your account, the game, your purchases and support. Without this data there is no game to play.",
            "**Legitimate interest**: preventing cheating and abuse, moderating chat, keeping the service secure, understanding how the game is played, and telling you about your account. Our interest is a fair, safe, working game; we keep the data minimal and short-lived, and you can object at any time.",
            "**Consent**: personalised advertising in rewarded ads, given through your device's settings and withdrawable there.",
            "**Legal obligation**: keeping accounting records and answering lawful requests from authorities.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      blocks: [
        { type: "p", text: "You have the right to:" },
        {
          type: "ul",
          items: [
            "**Access** the personal data we hold about you and get a copy.",
            "**Correct** data that is wrong.",
            "**Delete** your account and data.",
            "**Receive** your data in a portable, machine-readable format.",
            "**Object** to processing based on our legitimate interests, and to **restrict** processing while we look into it.",
            "**Withdraw consent** for advertising at any time in your device settings, and switch off notifications the same way.",
          ],
        },
        {
          type: "p",
          text: "To exercise a right, email [contact@geofastgames.com](mailto:contact@geofastgames.com) from the address linked to your account, or if your account has no email, tell us your username and we will verify from within the game. Deletion requests can also start from our [data deletion page](/datadeletion). We answer within one month.",
        },
        {
          type: "p",
          text: "If you believe we handle your data unlawfully, you can complain to the Belgian Data Protection Authority (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Brussels, [dataprotectionauthority.be](https://www.dataprotectionauthority.be), or to the authority in the country where you live.",
        },
      ],
    },
    {
      id: "children",
      title: "Children",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* is not directed at children under 13, and we do not knowingly collect personal data from them. In Belgium, 13 is the age from which you can consent to online services yourself. The game carries an age rating in each store that reflects its online chat and optional purchases; parents can use the parental controls of Google Play and the App Store to restrict purchases and which apps a child can install.",
        },
        {
          type: "p",
          text: "If you believe a child under 13 has an account, email us and we will delete it.",
        },
      ],
    },
    {
      id: "security",
      title: "Security",
      blocks: [
        {
          type: "p",
          text: "All traffic between the game, this website and our servers is encrypted (TLS). Passwords are hashed. The database is not reachable from the internet. Access to servers and data is limited to the two developers; moderators see chat history only through a tool that logs every lookup. No system is perfectly secure; if we ever learn of a breach affecting your data, we will tell you and the authority as the law requires.",
        },
      ],
    },
    {
      id: "website",
      title: "This website",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com sets no cookies and uses no tracking or analytics scripts. Three things do leave your browser when you visit: the page font is loaded from Google Fonts, so Google sees your IP address; the Discord member count is fetched from Discord's public API; and the live statistics come from our own server. Links to the app stores carry a campaign tag so we can see that a download came from this site, which identifies the site, not you.",
        },
        {
          type: "p",
          text: "When you send us a suggestion, a bug report, a translation report or a player report through a form on this site, we store what you entered, any screenshots you attached, the time, your browser language and a hashed form of your IP address on our own server in the EU. We use it to read and follow up on your message and to limit abuse of the forms. Your username and email address are optional; give them only if you want us to be able to reply. Form submissions are deleted after twelve months.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "When we change how we handle data, we update this page and its date, and for significant changes we tell you in the game.",
        },
      ],
    },
  ],
};
