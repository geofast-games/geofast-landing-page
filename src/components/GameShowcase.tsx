import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image1 from "../assets/online_multiplayer_screenshot.webp";
import image2 from "../assets/worldwar_screenshot.webp";
import image3 from "../assets/sandbox_screenshot.webp";
import image_appstore from "../assets/appstore.webp";
import image_playstore from "../assets/playstore.webp";
import appIcon from "../assets/playstore_logo.png"; // Import the app icon

import onlineIcon from "../assets/global_green.webp";
import worldWarIcon from "../assets/worldwar_green.webp";
import sandboxIcon from "../assets/sandbox_green.webp";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const features: FeatureProps[] = [
  {
    title: "Online Multiplayer",
    description:
      "Battle players from around the world! Host or join lobbies, pick your country, and use the in-game chat to strategize—or taunt—your rivals.",
    image: image1,
    icon: onlineIcon,
  },
  {
    title: "World War",
    description:
      "Compete in global seasonal tournaments! Represent your nation, climb the worldwide leaderboards, and earn medals to unlock exclusive rewards in ranked competitive battles.",
    image: image2,
    icon: worldWarIcon,
  },
  {
    title: "Sandbox",
    description:
      "Design your own wars by tweaking country strengths. Unlock limitless battle scenarios in this premium game mode!",
    image: image3,
    icon: sandboxIcon,
  },
];


const featureList: string[] = [
  "Battle Royale",
  "Online Multiplayer",
  "Geopolitics",
  "Strategy",
  "Mobile",
];

export const GameShowcase = () => {
  return (
    <section id="battleofnations" className="container py-24 sm:py-32 space-y-8">
      {/* App Icon and Title */}
      <div className="text-center">
        <img
          src={appIcon}
          alt="Geofast App Icon"
          className="w-32 h-32 mx-auto rounded-2xl mb-6" // Increased size and rounded corners
        />
        <h2 className="text-3xl lg:text-4xl font-bold">
          Geofast:{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Battle of Nations
          </span>
        </h2>
      </div>

      {/* Descriptive text under the title */}
      <p className="text-muted-foreground md:text-center text-lg mx-auto max-w-3xl">
        Pick a nation and conquer the world in a thrilling multiplayer battle royale!<br />
        In <em>Geofast: Battle of Nations</em>, choose from real-world countries—each with unique strengths—and clash with players from around the globe in intense, strategic showdowns. Use powerful special shots like grenades, nukes, poison, and revival spells to outlast your rivals and emerge as the last nation standing!
      </p>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      {/* App Store and Play Store Buttons */}
      <div className="flex justify-center gap-8 mt-8">
        <a
          href="https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations&pcampaignid=web_share"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image_playstore}
            alt="Get it on Google Play"
            className="h-12 object-contain"
          />
        </a>
        <a
          href="https://apps.apple.com/app/geofast-battle-of-nations/id6740595527"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image_appstore}
            alt="Download on the App Store"
            className="h-12 object-contain"
          />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image, icon }: FeatureProps) => (
          <Card key={title} className="relative">
            {/* Icon in the top-right corner */}
            <img
              src={icon}
              alt={`${title} icon`}
              className="absolute top-2 right-2 h-8 w-8"
            />
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto rounded-xl"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
