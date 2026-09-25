import type { DataDeletionContent } from "./types";

// Source language. This is the account-deletion page both stores link to;
// Google Play requires one that works without the app. The game itself has a
// Delete my account button (Profile panel, confirm by typing the username)
// that calls Nakama's account deletion at once; the email route is for people
// who can no longer open the game. Everything promised here mirrors the
// privacy policy (30 days, what is kept) and the Terms (no refund, the
// subscription is cancelled in the store).
export const en: DataDeletionContent = {
  lang: "en",
  label: "English",
  pageTitle: "Data Deletion Request | Geofast: Battle of Nations",
  metaDescription:
    "How to delete your Geofast: Battle of Nations account and personal data, in the game or by email, what is deleted, what is kept, and how long it takes.",
  gameName: "Geofast: Battle of Nations",
  docName: "Data Deletion Request",
  lastUpdated: "Last updated: September 25, 2026",
  sectionsLabel: "Sections",
  contact: {
    line: "Questions? Ask on Discord. Requests about your data: email us.",
    discord: "Ask on Discord",
    back: "Back to Geofast Games",
  },
  request: {
    title: "Request deletion by email",
    text: "For when you cannot open the game any more. The button opens an email to us with the request already written; fill in your account details and send it. If you have no email app on this device, write to contact@geofastgames.com with the same details.",
    button: "Send deletion request",
    emailSubject: "Data Deletion Request - Geofast: Battle of Nations",
    emailBody: `Hello Geofast Games,

I want my Geofast: Battle of Nations account and my personal data deleted.

My account:
- In-game username: [fill in]
- Email linked to the account, if any: [fill in]
- Nation I play for: [fill in]
- Device used to play: [fill in]

I understand that deletion is permanent, that my progress, currencies and items are lost, and that a Battle Pass subscription has to be cancelled separately in my app store.

Thank you.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Your right to delete your data",
      blocks: [
        {
          type: "p",
          text: "You can have your *Geofast: Battle of Nations* account and the personal data linked to it deleted at any time, wherever you live, without giving a reason. There are two ways: in the game, which is immediate, or by email if you can no longer open the game.",
        },
        {
          type: "p",
          text: "Deleting your account is the only form of deletion we offer: we do not delete parts of an account while keeping the rest.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Before you delete",
      blocks: [
        {
          type: "ul",
          items: [
            "**Cancel your Battle Pass first.** A subscription is a contract with your app store, and deleting your account does not cancel it. Cancel it in Google Play or App Store subscription settings, or it keeps renewing.",
            "**Nothing is refunded.** Virtual currencies, items and unused subscription time end with the account, as set out in our [Terms of Service](/termsofservice).",
            "**It cannot be undone.** There is no grace period and no backup to restore from.",
            "**It applies to every device.** The account disappears from every device it was linked to, not only the one you delete from.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Delete your account in the game",
      blocks: [
        {
          type: "p",
          text: "Open your profile, tap **Delete my account**, and type your username to confirm. The account is deleted at once. The next time the game starts on that device, it creates a new, empty account.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Or ask us by email",
      blocks: [
        {
          type: "p",
          text: "If you have uninstalled the game or lost the device, email [contact@geofastgames.com](mailto:contact@geofastgames.com), or use the button below, with your in-game username and, if you have one, the email address linked to your account. Write from that address: it is how we know the request comes from the account's owner. If your account has no email, tell us your username and the nation you play for, and we will confirm through the game that the account is yours before we delete anything.",
        },
        {
          type: "p",
          text: "We confirm that we received your request, delete within 30 days, and confirm again when it is done. If we cannot match your details to an account, we ask you for more before acting; we never delete an account on an unverified request.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "What is deleted",
      blocks: [
        {
          type: "p",
          text: "Deleting your account removes it and everything stored under it:",
        },
        {
          type: "ul",
          items: [
            "your account, username and the device, email, Google or Apple links attached to it;",
            "your progress: rankings, items, virtual currencies, upgrades, achievements, season progress and battle history;",
            "your friends list and your referral code;",
            "your push notification token.",
          ],
        },
        {
          type: "p",
          text: "Technical records that were tied to the account, such as analytics events, chat messages still in our live database and the per-match and first-launch records described in the Privacy Policy, are removed from our live systems within 30 days.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "What we keep, and why",
      blocks: [
        {
          type: "ul",
          items: [
            "Purchase records that accounting law requires us to keep, for the period that law sets.",
            "Statistics that no longer identify you, such as the number of battles played on a given day.",
            "Records that had already left the live database for our archive before the deletion, as described under [how long we keep data](/privacy#retention) in the Privacy Policy.",
            "Data held by the app stores, Google AdMob or Discord under their own policies. We do not control those; to have it removed, contact them.",
          ],
        },
        {
          type: "p",
          text: "Local files on your device are yours: uninstalling the game removes them.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Other requests about your data",
      blocks: [
        {
          type: "p",
          text: "You can also ask for a copy of your data, have wrong data corrected, or object to how we use it. The same email address handles all of these, and the [Privacy Policy](/privacy#rights) describes each right. We answer within one month.",
        },
      ],
    },
  ],
};
