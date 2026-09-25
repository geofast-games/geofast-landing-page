import type { TermsContent } from "./types";

// Source language. Written for EU consumers: no unilateral change or
// termination without reason and notice, no liability exclusions the law
// forbids, consumers keep their home courts. Sections 7 to 9 are what the
// Digital Services Act requires of a service that stores player chat: how
// moderation works, including automated tools and human review, how to
// report, and how to appeal. Enforcement is described in shape, not with
// tunable numbers, so the text does not go stale when a threshold moves.
export const en: TermsContent = {
  lang: "en",
  label: "English",
  pageTitle: "Terms of Service | Geofast: Battle of Nations",
  metaDescription:
    "The rules for playing Geofast: Battle of Nations: accounts, conduct, moderation and appeals, purchases and the Battle Pass, changes, and your rights.",
  gameName: "Geofast: Battle of Nations",
  docName: "Terms of Service",
  lastUpdated: "Last updated: September 25, 2026",
  sectionsLabel: "Sections",
  contact: {
    line: "Questions? Ask on Discord. Requests about your data: email us.",
    discord: "Ask on Discord",
    back: "Back to Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Who we are and what these Terms cover",
      blocks: [
        {
          type: "p",
          text: "These Terms of Service are the agreement between you and Geofast Games, an independent game studio based in Belgium, for *Geofast: Battle of Nations* (the game) and the website geofastgames.com. You reach us at [contact@geofastgames.com](mailto:contact@geofastgames.com).",
        },
        {
          type: "p",
          text: "By creating an account or playing, you accept these Terms. If you do not agree with them, do not play. Our [Privacy Policy](/privacy) explains what we do with your data; it is a separate document and applies alongside these Terms.",
        },
        {
          type: "p",
          text: "On iOS the app is licensed to you under Apple's standard end user licence agreement, which governs your use of the app itself. These Terms govern the game service, your account and how you play with others. Where the two overlap, Apple's agreement applies to the app licence and these Terms to everything else.",
        },
        {
          type: "p",
          text: "These Terms are written in English. Translations are provided for convenience; if a translation differs from the English text, the English text applies.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Who can play",
      blocks: [
        {
          type: "p",
          text: "You must be at least 13 years old to play. If you are under 18, you need the permission of a parent or guardian to play and to make any purchase, and by playing you confirm that you have it. Parents and guardians are responsible for what minors in their care do in the game and for purchases made through their store account. The parental controls of Google Play and the App Store can restrict purchases and downloads.",
        },
        {
          type: "p",
          text: "The game's age ratings in the stores reflect that it has chat between players and optional purchases.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Your account",
      blocks: [
        {
          type: "p",
          text: "When you first play online, the game creates an account linked to your device. You can link an email address and password, or a Google or Apple sign-in, to keep your progress across devices. Keep your credentials to yourself: everything done through your account is your responsibility, and you should tell us at once if you think someone else is using it.",
        },
        {
          type: "p",
          text: "Only one device can be connected to an account at a time. Connecting from a new device disconnects the previous one.",
        },
        {
          type: "p",
          text: "If you lose or reset your device without having linked an email address or a Google or Apple sign-in, we have no way to confirm that the account is yours, and it cannot be restored. Link your account if your progress matters to you.",
        },
        {
          type: "p",
          text: "Sharing an account with another person is not allowed, because it gives an unfair advantage in leaderboards and rankings. Having more than one account is allowed, as long as none of them is used to gain an unfair advantage, to fix matches, or to get around a sanction on another account. Accounts and what they contain cannot be sold, bought, traded or given away.",
        },
        {
          type: "p",
          text: "Your username is visible to everyone. It must not be offensive, misleading, or impersonate anyone, including our staff. You can change it once in the game, for the fee shown there. We can change a username that breaks these rules.",
        },
        {
          type: "p",
          text: "We do not delete inactive accounts. You can delete your account at any time through our [data deletion page](/datadeletion). Deletion is permanent and includes your progress, virtual currencies and items.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. Your licence to play",
      blocks: [
        {
          type: "p",
          text: "We grant you a personal, non-exclusive, non-transferable licence to install and play the game on devices you own or control, for your own entertainment. The game, its artwork, sounds, text, code and design belong to Geofast Games or our licensors and are protected by intellectual property law. You may not copy, modify, distribute, sell or rent any part of the game, or reverse engineer it, except where the law expressly allows it.",
        },
        {
          type: "p",
          text: "The game runs on the Android and iOS versions listed in the stores. Playing online requires a reasonably current version of the game: we release updates through the stores, and an outdated version can lose access to online features until it is updated.",
        },
        {
          type: "p",
          text: "You may record, stream and publish videos and screenshots of your gameplay, including on platforms where you earn money from ads or memberships. Do not present your content as made or endorsed by us, do not sell merchandise using our artwork, and do not feature cheats or exploits. We can ask you to take down content that breaks these rules or the law.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Rules of conduct",
      blocks: [
        { type: "p", text: "Play fair and treat other players decently. You may not:" },
        {
          type: "ul",
          items: [
            "use cheats, exploits, bots, automation, modified clients, or any tool that interferes with the game or its servers;",
            "exploit bugs to gain an advantage instead of reporting them;",
            "collude with other players, fix matches, trade wins, or otherwise manipulate rankings, leaderboards or rewards, including with additional accounts;",
            "share, sell, buy or transfer accounts, or trade virtual items outside the game;",
            "harass, threaten, insult or bully other players, or post hateful, sexual, violent or otherwise abusive content;",
            "impersonate other players, our staff, or any person or organisation;",
            "spam, advertise, or share links to harmful content;",
            "ask for or collect other players' personal information or login details, or share your own or anyone else's in chat;",
            "knowingly make false reports about other players, or misuse the appeal process;",
            "organise or take part in betting or gambling on matches or on anything else in the game;",
            "attack, probe or overload our servers, or interfere with other players' connections;",
            "deliberately ruin the game for other players;",
            "use the game for anything illegal.",
          ],
        },
        {
          type: "p",
          text: "Rivalry, taunting and war talk between nations are part of the game. Abuse of real people, hate directed at groups, threats, and sexual content are not.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Chat, usernames and content you create",
      blocks: [
        {
          type: "p",
          text: "The game has chat between players. What you write is delivered to the other players in that chat and stored on our servers for the periods set out in the Privacy Policy, so that moderators can review reports. Chat is not private: other players see it, and moderators can read it when handling a report. Do not share personal details in chat.",
        },
        {
          type: "p",
          text: "You keep the rights to what you write. You give us permission to store, display, moderate and, where needed, remove it in order to run the game. You are responsible for what you post. We remove content that breaks these Terms or the law.",
        },
        {
          type: "p",
          text: "If you send us suggestions or ideas, through the game, our website or Discord, we can use them freely, without payment or any obligation to you, and without naming you.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. How we moderate",
      blocks: [
        { type: "p", text: "Moderation combines automated tools and people:" },
        {
          type: "ul",
          items: [
            "Before a message is delivered, an automated filter on our servers checks it against rate limits, a word list and hate speech patterns. A blocked message is never sent.",
            "When we have it switched on, delivered messages are also classified by an automated service (Google's Gemini), which receives the message and your recent messages in that chat for context. Usernames are checked the same way when you set or change them. A message classified as abusive is deleted and a violation is recorded against your account.",
            "Human moderators review reports from players and act on what they find. Their access to chat history is logged.",
          ],
        },
        {
          type: "p",
          text: "The consequences of chat violations are warnings and temporary mutes. Automated violations lead to a warning first, and to a short mute if you repeat quickly. Mutes applied by moderators are temporary and escalate with each mute you have already received, from hours to months. The record of your violations and mutes stays on your account so that repeat behaviour can be recognised.",
        },
        {
          type: "p",
          text: "Whenever we mute you, remove your content or penalise your account, we tell you in the game what was done and why, and you can contest it as described in section 9.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Fair play enforcement",
      blocks: [
        {
          type: "p",
          text: "Battle actions are validated on our servers as they happen, so a modified client cannot change the outcome of a match. An automated check regularly reviews recent match records for players who land in the same matches far more often than chance allows; this is how match fixing and collusion are detected.",
        },
        {
          type: "p",
          text: "Cheating and collusion are punished in steps. A player is warned first, once. Penalties escalate only when there is new evidence after the warning and with time between steps: resets of rankings and currencies, then a full reset of progress, and finally a permanent ban of the device, which also blocks new accounts created from it. Accounts involved in serious or repeated cheating can be closed. Before applying a reset we save a snapshot of the account, so that a penalty which turns out to be wrong can be reversed. The record of penalties stays on your account.",
        },
        {
          type: "p",
          text: "Every penalty comes with a notice in the game stating what was done and why, and you can contest it as described in section 9.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Reporting and appeals",
      blocks: [
        {
          type: "p",
          text: "To report a player or content that breaks these Terms or the law, use the Report button in the game, the report form on our [feedback page](/feedback), or email [contact@geofastgames.com](mailto:contact@geofastgames.com). Tell us who, what and where. We confirm that we received your report and let you know what we decided, without undue delay. Reports are handled by people, with the help of the tools described above, in good faith and without arbitrariness.",
        },
        {
          type: "p",
          text: "If you think a mute, penalty, ban or content removal was wrong, appeal by email or on Discord within one month. A person who was not involved in the original decision reviews it, and we answer within 14 days. If the decision was wrong, we lift it and, where possible, restore what was lost. Nothing here limits your right to take the matter to a court or to a consumer body.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Virtual currencies, items and purchases",
      blocks: [
        {
          type: "p",
          text: "The game has virtual currencies (diamonds, coins and stars) and virtual items such as weapons, skins, upgrades and Battle Pass rewards. Diamonds can be bought with real money through Google Play or the App Store; coins and stars are earned by playing or exchanged inside the game. Prices are shown in your local currency in the store and in the game before you buy.",
        },
        {
          type: "p",
          text: "Virtual currencies and items are licensed to you for use in the game. They are not your property, have no value outside the game, cannot be exchanged for real money, goods or services, and cannot be transferred to another account or person.",
        },
        {
          type: "p",
          text: "Purchases are delivered immediately. By buying, you ask us to deliver at once and acknowledge that, once delivery has begun, the statutory 14-day right of withdrawal no longer applies. Otherwise purchases are final, except where the law gives you a right to a refund. Refund requests go to the store you bought from, which handles the payment; we never see your payment details.",
        },
        {
          type: "p",
          text: "We can change, rebalance, add or retire virtual currencies and items for valid reasons: keeping the game balanced and fun, fixing bugs, security, or legal requirements. Where a change would significantly affect something you recently paid for, we tell you in advance, and where the law gives you a right to end the agreement and be refunded because of such a change, we honour it. Your statutory rights as a consumer, including the right to a game that works as described, are not affected.",
        },
        {
          type: "p",
          text: "The game has no forced advertising. Where the game offers optional rewarded ads, watching one is your choice, and we can change or remove that offer.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. The Battle Pass",
      blocks: [
        {
          type: "p",
          text: "The Battle Pass is a subscription bought through Google Play or the App Store. It renews automatically each month at the price shown in the store until you cancel. You can cancel at any time in your store's subscription settings; the pass then stays active until the end of the period you paid for, and you keep the rewards you claimed. Price changes apply from the next renewal, and the store tells you before they do.",
        },
        {
          type: "p",
          text: "Battle Pass rewards are unlocked by playing during the season; a pass does not by itself grant every reward. Refunds for subscriptions are handled by the store under its rules and the law.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Referral rewards and the creator program",
      blocks: [
        {
          type: "p",
          text: "The game rewards you when a new player joins with your referral code, and rewards them too. Referral rewards are for genuine new players. Referring yourself, your own other accounts, or accounts created only to collect the reward is not allowed, and rewards obtained that way are removed.",
        },
        {
          type: "p",
          text: "Our creator program rewards players who publish videos about the game once their content reaches view milestones. The milestones, rewards and eligibility rules are published in the game and can change. Rewards are verified and granted by us by hand, and we decide in case of doubt. Rewards claimed with faked views, or with content that breaks these Terms, are refused or removed.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Third-party services",
      blocks: [
        {
          type: "p",
          text: "The game uses Google Play and the App Store for downloads, payments and subscriptions; Google and Apple for optional sign-in; Google AdMob for optional rewarded ads; and Discord for our community server. Your use of those services is governed by their own terms and privacy policies, which we do not control.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Availability and changes to the game",
      blocks: [
        {
          type: "p",
          text: "We work to keep the game available, but we cannot promise that it will never be interrupted. Online features can be unavailable during maintenance, because of technical problems, or for reasons outside our control. Offline modes keep working without a connection.",
        },
        {
          type: "p",
          text: "The game is a live service and changes over time: we add, adjust and remove features, weapons, nations, seasons and events to keep it balanced and fresh, to fix problems, for security, and to meet legal requirements. Changes that significantly affect how you can play are announced in the game in advance. Your statutory rights are not affected.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Ending the agreement",
      blocks: [
        {
          type: "p",
          text: "You can stop playing at any time by uninstalling the game, and you can delete your account through our [data deletion page](/datadeletion). Deleting your account permanently removes your progress, virtual currencies and items; nothing is refunded for them.",
        },
        {
          type: "p",
          text: "We can suspend or close your account if you seriously or repeatedly break these Terms, or if the law requires it. Except in serious cases, such as cheating, abuse or a legal obligation, we warn you first and give you a chance to respond. We tell you the reason and how to appeal (section 9). Closing an account ends your licence and your access to its virtual currencies and items.",
        },
        {
          type: "p",
          text: "If we ever have to shut the game down, we give at least 30 days' notice in the game and on our website. Virtual currencies and items end with the game. Your statutory rights regarding recent purchases are not affected.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. Our responsibility",
      blocks: [
        {
          type: "p",
          text: "We are responsible to you as the law provides. We do not exclude or limit our liability for death or personal injury caused by our negligence, for fraud, for intentional or grossly negligent conduct, or for anything else that cannot be excluded under the law that protects you as a consumer, including your right to a game that conforms to what was promised.",
        },
        {
          type: "p",
          text: "Beyond that, we are liable only for damage that was foreseeable when you accepted these Terms and that results from our breach of them. The game is free to play and provided as a live service; we are not liable for losses caused by interruptions, by other players' behaviour, or by events outside our reasonable control, except where the law says otherwise.",
        },
        {
          type: "p",
          text: "You are responsible for damage you cause us by breaking these Terms, to the extent the law allows.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Privacy",
      blocks: [
        {
          type: "p",
          text: "How we collect and use your data is described in our [Privacy Policy](/privacy). It is not part of these Terms and does not depend on your agreement to them: it tells you what we do and what your rights are.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Changes to these Terms",
      blocks: [
        {
          type: "p",
          text: "We change these Terms when the game, the law or our services change, or to make them clearer. For changes that affect your rights or how you play, we give at least 30 days' notice in the game before they take effect, and you can stop playing and delete your account before then if you do not agree. Clarifications and corrections that do not affect you take effect when posted. The date at the top tells you when the current version took effect.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Law, disputes and complaints",
      blocks: [
        {
          type: "p",
          text: "These Terms are governed by Belgian law. If you live in another country, you keep the protection of the mandatory consumer law of that country, and you can bring a claim before the courts of the place where you live. We can bring a claim against you only there.",
        },
        {
          type: "p",
          text: "If you have a complaint, contact us first at [contact@geofastgames.com](mailto:contact@geofastgames.com) or on Discord; most things can be sorted out directly. You can also turn to a consumer dispute resolution body in your country; in Belgium that is the Consumer Mediation Service (Consumentenombudsdienst / Service de Médiation pour le Consommateur). These Terms contain no arbitration clause and no class action waiver.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Final provisions",
      blocks: [
        {
          type: "p",
          text: "We contact you through notices in the game, on our website and, if you linked an email address, by email. You contact us at [contact@geofastgames.com](mailto:contact@geofastgames.com); that is also our address for legal notices and our point of contact for authorities.",
        },
        {
          type: "p",
          text: "If a part of these Terms turns out to be invalid, the rest stays in force. If we do not enforce a rule at some point, we can still enforce it later. We may transfer this agreement to a company that takes over the game, provided your rights are not reduced; you may not transfer your account or this agreement. These Terms and the Privacy Policy are the whole agreement between you and us about the game.",
        },
      ],
    },
  ],
};
