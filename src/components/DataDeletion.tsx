import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLayoutEffect } from "react";
import { Mail } from "lucide-react";

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const sectionData: SectionProps[] = [
  {
    title: "Your Right to Data Deletion",
    content: (
      <div>
        At Geofast Games, we respect your privacy and your right to control your
        personal data. If you wish to have your data completely removed from our
        systems, you can request deletion at any time.
        <br />
        <br />
        Under various privacy regulations (including GDPR, CCPA, and others),
        you have the right to request the deletion of your personal data that we
        have collected and stored.
      </div>
    ),
  },
  {
    title: "What Data Will Be Deleted",
    content: (
      <div>
        Upon receiving and processing your deletion request, we will remove:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Your account information and profile data</li>
          <li>Game progress and saved data</li>
          <li>In-app analytics data associated with your account</li>
          <li>Any other personal information we have collected</li>
        </ul>
        <br />
        <p>
          <strong>Please note:</strong> Data processed by third-party services
          (such as AdMob or app stores) is subject to their own data retention
          and deletion policies. You may need to contact these services directly
          for complete data removal.
        </p>
      </div>
    ),
  },
  {
    title: "How to Request Data Deletion",
    content: (
      <div>
        To request the deletion of your data, please send an email to our
        support team. To help us process your request quickly, please include:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>The email address associated with your account (if applicable)</li>
          <li>Your in-game username or player ID</li>
          <li>The device you used to play the game</li>
          <li>Confirmation that you want all your data permanently deleted</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Processing Time",
    content: (
      <div>
        We will process your data deletion request within 14 days of receiving
        it.
        <br />
        <br />
        Please note that once your data is deleted, this action cannot be
        undone. You will lose all game progress and any other associated data
        permanently.
      </div>
    ),
  },
];

export const DataDeletion = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const emailSubject = encodeURIComponent("Data Deletion Request - Geofast: Battle of Nations");
  const emailBody = encodeURIComponent(
    `Hello Geofast Games Support,

I would like to request the complete deletion of my personal data from your systems.

My account details:
- Email associated with account: [Please fill in]
- In-game username/Player ID: [Please fill in]
- Device used: [Please fill in]

I confirm that I want all my data permanently deleted and understand that this action cannot be undone.

Thank you.`
  );

  const mailtoLink = `mailto:contact@geofastgames.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="data-deletion" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Geofast: Battle of Nations
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Data Deletion Request{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground mb-8">
        Last updated: December 1, 2025
      </p>

      <div className="space-y-6">
        {sectionData.map(({ title, content }: SectionProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground text-lg">{content}</div>
            </CardContent>
          </Card>
        ))}

        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">Request Data Deletion Now</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-lg mb-6">
              Click the button below to open your email client with a pre-filled
              deletion request. Simply fill in your account details and send.
            </div>
            <a href={mailtoLink}>
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Send Deletion Request
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-muted-foreground text-center">
        <p>
          If you have any questions about data deletion, please contact us at:{" "}
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

export default DataDeletion;
