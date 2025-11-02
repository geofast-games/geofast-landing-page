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
    title: "Data Collection and Use",
    content: (
      <div>
        <em>Geofast: Battle of Nations</em> collects and uses data to improve your
        experience and support the app’s functionality. Below is a summary of
        data collection practices:
        <br />
        <br />
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>AdMob</strong> - AdMob is used to serve interstitial ads in
            our game. It collects:
            <ul className="list-disc pl-6">
              <li>Device IDs (e.g., Advertising ID or IDFA)</li>
              <li>Coarse location (based on IP address)</li>
              <li>Product interaction data (e.g., ad clicks and impressions)</li>
            </ul>
            This data is used for third-party advertising, ad performance
            measurement, and analytics. For details on how AdMob handles data, please review their{" "} 
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              Privacy Policy
            </a>.
          </li>
          <li>
            <strong>In-App Analytics</strong> - We collect product interaction
            data, such as:
            <ul className="list-disc pl-6">
              <li>Frequency and duration of gameplay sessions</li>
              <li>Game mode preferences</li>
              <li>User engagement with game features</li>
            </ul>
            This data helps us:
            <ul className="list-disc pl-6">
              <li>Evaluate user behavior</li>
              <li>Understand feature performance</li>
              <li>Plan future updates and improvements</li>
            </ul>
          </li>
          <li>
            <strong>Google Play Store & Apple App Store</strong> - These
            platforms may collect data required for in-app purchases under their
            own privacy policies. Geofast Games does not access or store this data.
          </li>
        </ol>
        <br />
        <p>
          By using <em>Geofast: Battle of Nations</em>, you consent to the collection 
          and processing of data as described in this policy. Users can adjust their 
          ad preferences and tracking permissions through their device settings.
        </p>
      </div>
    ),
  },
  {
    title: "Data Security",
    content: (
      <div>
        We take appropriate measures to protect the data collected from unauthorized access, use, or disclosure.
        This includes using secure communication protocols, and limiting data access to authorized personnel only.
        Data collected by third-party providers is handled under their own privacy and security policies. 
      </div>
    ),
  },
  {
    title: "Tracking Disclosure",
    content: (
      <div>
        Our app uses <strong>AdMob</strong> and in-app analytics, which involve
        tracking for the following purposes:
        <ul className="list-disc pl-6">
          <li>Displaying third-party ads</li>
          <li>Measuring ad performance</li>
          <li>Linking ad-related data to Third-Party Data for personalized advertising</li>
          <li>Evaluating gameplay behavior to improve app features</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <div>
        Geofast: Battle of Nations may display age restrictions on the Google
        Play Store and the Apple App Store, which vary based on regional
        regulations.
        <br />
        <br />
        We encourage parents to monitor children's activities online to ensure a
        safe experience.
        <br />
        <br />
        Please note that this app includes ads, in-app purchases, analytics,
        and tracking.
        <br />
        <br />
        Geofast Games does not knowingly collect personal data from children under the age of 13.
        If you believe that a child has provided us with data, please contact us so we can take steps to delete it.
      </div>
    ),
  },
  {
    title: "Changes to this Privacy Policy",
    content: (
      <div>
        We may update this policy to reflect changes in our practices or legal
        requirements.
        <br />
        <br />
        Any updates will be posted on this page, so please check back
        periodically.
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
        Last updated: January 26, 2025
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
          .
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
