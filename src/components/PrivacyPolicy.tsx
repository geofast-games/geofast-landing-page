import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLayoutEffect } from "react";

interface PolicySectionProps {
  title: string;
  content: React.ReactNode;
}

const policyData: PolicySectionProps[] = [
  {
    title: "Introduction",
    content: (
      <div>
        Welcome to <em>Geofast: Battle of Nations</em>, developed by Geofast Games. This
        Privacy Policy explains what types of information may be collected when
        you use our game and how this information is handled.
        <br />
        <br />
        We value your privacy and want to ensure transparency about any data
        related to your use of our app.
      </div>
    ),
  },
  {
    title: "Account Data",
    content: (
      <div>
        To access online multiplayer features, an account is created automatically. By default, accounts are linked to your device ID, requiring no personal information.
        <br />
        <br />
        If you choose to create an email account or link your account, we collect:
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Email address</strong> - Used for account verification, password recovery, and important account-related communications</li>
          <li><strong>Password</strong> - Stored securely using industry-standard encryption (hashed)</li>
        </ul>
        <br />
        For all accounts, we store:
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Username/Display name</strong> - Your chosen in-game name, visible to other players</li>
          <li><strong>Nation selection</strong> - The country you choose to represent in the game</li>
          <li><strong>Friends list</strong> - Other players you have added as friends</li>
        </ul>
        <br />
        You may also sign in using third-party authentication (Google, Apple). In this case, we receive only the information necessary to link your account as permitted by those services.
      </div>
    ),
  },
  {
    title: "Gameplay Data",
    content: (
      <div>
        To provide online multiplayer features and leaderboards, your game progress is stored on our servers. This includes your rankings, match results, achievements, in-game items, and other gameplay-related data. This data is necessary for the multiplayer experience.
      </div>
    ),
  },
  {
    title: "Chat and Communication",
    content: (
      <div>
        The game includes live chat features that allow players to communicate during matches and in nation chats. Chat messages may be:
        <ul className="list-disc pl-6 mt-2">
          <li>Transmitted in real-time to other players in the same match or nation chat</li>
          <li>Temporarily stored on our servers to deliver messages</li>
          <li>Subject to moderation to maintain a safe and respectful environment</li>
        </ul>
        <br />
        Please be mindful of what you share in chat. Do not share personal information with other players.
      </div>
    ),
  },
  {
    title: "Advertising (AdMob)",
    content: (
      <div>
        <strong>AdMob</strong> is used to serve ads in our game. It collects:
        <ul className="list-disc pl-6 mt-2">
          <li>Device IDs (e.g., Advertising ID or IDFA)</li>
          <li>Coarse location (based on IP address)</li>
          <li>Product interaction data (e.g., ad clicks and impressions)</li>
        </ul>
        <br />
        This data is used for third-party advertising, ad performance measurement, and analytics. For details on how AdMob handles data, please review their{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Privacy Policy
        </a>.
        <br />
        <br />
        Users can adjust their ad preferences and tracking permissions through their device settings.
      </div>
    ),
  },
  {
    title: "Analytics",
    content: (
      <div>
        We collect analytics data to understand how players interact with the game, identify issues, and plan improvements. This includes gameplay patterns, feature usage, and crash reports.
      </div>
    ),
  },
  {
    title: "In-App Purchases",
    content: (
      <div>
        <strong>Google Play Store</strong> and <strong>Apple App Store</strong> handle all payment processing for in-app purchases. Geofast Games does not collect or store payment information such as credit card numbers.
        <br />
        <br />
        We receive confirmation of purchases to deliver the purchased items to your account. Purchase history may be stored to provide customer support and restore purchases.
      </div>
    ),
  },
  {
    title: "Data Storage and Security",
    content: (
      <div>
        Your data is stored on secure servers. We implement appropriate technical and organizational measures to protect your data, including:
        <ul className="list-disc pl-6 mt-2">
          <li>Encryption of sensitive data (passwords, authentication tokens)</li>
          <li>Secure communication protocols (HTTPS/TLS)</li>
          <li>Access controls limiting data access to authorized personnel</li>
          <li>Regular security reviews and updates</li>
        </ul>
        <br />
        Data collected by third-party providers (AdMob, app stores) is handled under their own privacy and security policies.
      </div>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <div>
        We retain your data for as long as your account is active or as needed to provide services. If you request account deletion, we will delete your personal data within 30 days, except where we are required to retain it for legal purposes.
        <br />
        <br />
        Anonymous analytics data may be retained indefinitely for statistical purposes.
      </div>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <div>
        Depending on your location, you may have the following rights:
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Access</strong> - Request a copy of your personal data</li>
          <li><strong>Correction</strong> - Request correction of inaccurate data</li>
          <li><strong>Deletion</strong> - Request deletion of your account and data</li>
          <li><strong>Data portability</strong> - Request your data in a portable format</li>
        </ul>
        <br />
        To exercise these rights, please contact us at{" "}
        <a href="mailto:contact@geofastgames.com" className="text-primary hover:underline">
          contact@geofastgames.com
        </a>{" "}
        or use our{" "}
        <a href="/datadeletion" className="text-primary hover:underline">
          data deletion request page
        </a>.
      </div>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <div>
        Geofast: Battle of Nations may display age restrictions on the Google Play Store and the Apple App Store, which vary based on regional regulations.
        <br />
        <br />
        We encourage parents to monitor children's activities online to ensure a safe experience.
        <br />
        <br />
        Please note that this app includes ads, in-app purchases, analytics, and online multiplayer features.
        <br />
        <br />
        Geofast Games does not knowingly collect personal data from children under the age of 13. If you believe that a child has provided us with data, please contact us so we can take steps to delete it.
      </div>
    ),
  },
  {
    title: "Changes to this Privacy Policy",
    content: (
      <div>
        We may update this policy to reflect changes in our practices or legal requirements.
        <br />
        <br />
        Any updates will be posted on this page. We encourage you to review this policy periodically.
      </div>
    ),
  },
];

export const PrivacyPolicy = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section id="privacy-policy" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Geofast: Battle of Nations
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Privacy Policy{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground mb-8">
        Last updated: January 26, 2026
      </p>

      <div className="space-y-6">
        {policyData.map(({ title, content }: PolicySectionProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground text-lg">{content}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-muted-foreground text-center">
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:{" "}
          <a
            href="mailto:contact@geofastgames.com"
            className="text-primary hover:underline"
          >
            contact@geofastgames.com
          </a>
        </p>
        <p className="mt-4">
          <a href="/" className="text-primary hover:underline">
            Back to Geofast Games
          </a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
