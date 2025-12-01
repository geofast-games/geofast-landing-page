import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const termsData: SectionProps[] = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <div>
        By downloading, installing, accessing, or using{" "}
        <em>Geofast: Battle of Nations</em> ("the Game"), you agree to be bound
        by these Terms of Service ("Terms"). If you do not agree to these Terms,
        please do not use the Game.
        <br />
        <br />
        These Terms constitute a legally binding agreement between you and
        Geofast Games ("we," "us," or "our"). We reserve the right to modify
        these Terms at any time, and your continued use of the Game after such
        modifications constitutes your acceptance of the updated Terms.
      </div>
    ),
  },
  {
    title: "2. License to Use",
    content: (
      <div>
        Subject to your compliance with these Terms, we grant you a limited,
        non-exclusive, non-transferable, non-sublicensable, revocable license to
        download, install, and use the Game for your personal, non-commercial
        entertainment purposes.
        <br />
        <br />
        This license does not give you any ownership rights in the Game. All
        rights not expressly granted to you are reserved by Geofast Games.
      </div>
    ),
  },
  {
    title: "3. User Accounts",
    content: (
      <div>
        Some features of the Game may require you to create an account or link
        to a third-party service. You are responsible for:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us immediately of any unauthorized use of your account</li>
        </ul>
        <br />
        We reserve the right to suspend or terminate your account at our sole
        discretion if we believe you have violated these Terms or engaged in
        inappropriate conduct.
      </div>
    ),
  },
  {
    title: "4. Prohibited Conduct",
    content: (
      <div>
        You agree not to:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Use cheats, exploits, automation software, bots, hacks, mods, or any
            unauthorized third-party software designed to modify or interfere
            with the Game
          </li>
          <li>
            Exploit bugs, glitches, or game mechanics in unintended ways to gain
            an unfair advantage
          </li>
          <li>
            Reverse engineer, decompile, disassemble, or otherwise attempt to
            derive the source code of the Game
          </li>
          <li>
            Harass, threaten, or abuse other players, or engage in any behavior
            that is harmful, offensive, or disruptive
          </li>
          <li>
            Impersonate any person or entity, or falsely claim an affiliation
            with any person or entity
          </li>
          <li>
            Buy, sell, trade, or transfer your account or any virtual items
            outside of official game mechanisms
          </li>
          <li>
            Use the Game for any illegal purpose or in violation of any
            applicable laws or regulations
          </li>
          <li>
            Collect or harvest any information from other users without their
            consent
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "5. Virtual Items and In-App Purchases",
    content: (
      <div>
        The Game may offer virtual currency, items, or other content ("Virtual
        Items") for purchase with real money. You understand and agree that:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Virtual Items have no real-world value and cannot be exchanged for
            real money, goods, or services
          </li>
          <li>
            All purchases of Virtual Items are final and non-refundable, except
            as required by applicable law
          </li>
          <li>
            We reserve the right to modify, manage, control, or eliminate
            Virtual Items at any time without liability to you
          </li>
          <li>
            Virtual Items are licensed to you, not sold, and remain our property
          </li>
        </ul>
        <br />
        Refund requests for in-app purchases should be directed to the
        respective app store (Google Play Store or Apple App Store) in
        accordance with their refund policies.
      </div>
    ),
  },
  {
    title: "6. Intellectual Property",
    content: (
      <div>
        The Game and all of its content, including but not limited to graphics,
        images, text, sounds, music, gameplay mechanics, and software, are owned
        by or licensed to Geofast Games and are protected by copyright,
        trademark, and other intellectual property laws.
        <br />
        <br />
        You may not copy, modify, distribute, sell, or lease any part of the
        Game or its content without our prior written consent.
      </div>
    ),
  },
  {
    title: "7. User-Generated Content",
    content: (
      <div>
        If the Game allows you to create, upload, or share content, you retain ownership of your
        content but grant us a worldwide, royalty-free, non-exclusive license to
        use, reproduce, modify, and display such content in connection with the
        Game.
        <br />
        <br />
        You are solely responsible for your content and must ensure it does not
        violate any laws or infringe upon the rights of others. We reserve the
        right to remove any content that we deem inappropriate or in violation
        of these Terms.
      </div>
    ),
  },
  {
    title: "8. Privacy",
    content: (
      <div>
        Your use of the Game is also governed by our{" "}
        <Link to="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        , which describes how we collect, use, and protect your personal
        information. By using the Game, you consent to our collection and use of
        data as described in the Privacy Policy.
      </div>
    ),
  },
  {
    title: "9. Disclaimers",
    content: (
      <div>
        THE GAME IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF
        ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        AND NON-INFRINGEMENT.
        <br />
        <br />
        We do not warrant that the Game will be uninterrupted, error-free,
        secure, or free of viruses or other harmful components. You use the Game
        at your own risk.
      </div>
    ),
  },
  {
    title: "10. Limitation of Liability",
    content: (
      <div>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GEOFAST GAMES AND ITS
        OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
        INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL,
        ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE GAME.
        <br />
        <br />
        IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU HAVE
        PAID TO US FOR THE GAME IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
      </div>
    ),
  },
  {
    title: "11. Indemnification",
    content: (
      <div>
        You agree to indemnify, defend, and hold harmless Geofast Games and its
        officers, directors, employees, and agents from and against any claims,
        liabilities, damages, losses, and expenses (including reasonable
        attorneys' fees) arising out of or in any way connected with your use of
        the Game or your violation of these Terms.
      </div>
    ),
  },
  {
    title: "12. Termination",
    content: (
      <div>
        We may terminate or suspend your access to the Game at any time, with or
        without cause, and with or without notice. Upon termination:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Your license to use the Game will immediately cease</li>
          <li>
            You will lose access to your account and any associated Virtual
            Items
          </li>
          <li>We are not obligated to provide refunds for any purchases made</li>
        </ul>
        <br />
        You may also terminate your use of the Game at any time by uninstalling
        it from your device and requesting deletion of your data through our{" "}
        <Link to="/datadeletion" className="text-primary hover:underline">
          Data Deletion
        </Link>{" "}
        page.
      </div>
    ),
  },
  {
    title: "13. Governing Law",
    content: (
      <div>
        These Terms shall be governed by and construed in accordance with the
        laws of Belgium, without regard to its conflict of law provisions. Any
        disputes arising from these Terms or your use of the Game shall be
        subject to the exclusive jurisdiction of the courts located in Belgium.
      </div>
    ),
  },
  {
    title: "14. Severability",
    content: (
      <div>
        If any provision of these Terms is found to be unenforceable or invalid,
        that provision shall be limited or eliminated to the minimum extent
        necessary so that these Terms shall otherwise remain in full force and
        effect.
      </div>
    ),
  },
  {
    title: "15. Entire Agreement",
    content: (
      <div>
        These Terms, together with our Privacy Policy, constitute the entire
        agreement between you and Geofast Games regarding your use of the Game
        and supersede any prior agreements or understandings.
      </div>
    ),
  },
  ];

export const TermsOfService = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section id="terms-of-service" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Geofast: Battle of Nations
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Terms of Service{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground mb-8">
        Last updated: December 1, 2025
      </p>

      <div className="space-y-6">
        {termsData.map(({ title, content }: SectionProps) => (
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
          If you have any questions about these Terms of Service, please contact
          us at:{" "}
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

export default TermsOfService;
