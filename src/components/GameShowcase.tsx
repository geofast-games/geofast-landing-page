import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image_appstore from "../assets/appstore.webp";
import image_playstore from "../assets/playstore.webp";
import appIcon from "../assets/playstore_logo.png";

// Feature screenshots
import featureBattle from "../assets/feature_battle.webp";
import featureRankings from "../assets/feature_rankings.webp";
import featureCountry from "../assets/feature_country.webp";
import featureWeapons from "../assets/feature_weapons.webp";

// Feature icons
import iconBattle from "../assets/quickbattle_green.webp";
import iconRankings from "../assets/leaderboard.webp";
import iconStrong from "../assets/strong.webp";
import iconUpgrade from "../assets/upgrade.webp";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const features: FeatureProps[] = [
  {
    title: "Battle in Real-Time!",
    description:
      "Get matched automatically with players worldwide. Use grenades, nukes, poison, drones, and more to eliminate your rivals and be the last player standing. Make friends, form alliances, and defeat your enemies. Earn medals and battle rewards!",
    image: featureBattle,
    icon: iconBattle,
  },
  {
    title: "Climb the Rankings!",
    description:
      "Compete in weekly World War seasons. Earn medals to rise through player rankings and lead your nation to glory on the nation leaderboards!",
    image: featureRankings,
    icon: iconRankings,
  },
  {
    title: "Get Stronger!",
    description:
      "Invest in extra hearts and nukes to become harder to defeat. Become a heavyweight and dominate the battlefield!",
    image: featureCountry,
    icon: iconStrong,
  },
  {
    title: "Unlock & Upgrade Weapons!",
    description:
      "Start with 6 core weapons and unlock 15 special weapons as you play. You have 3 special weapon slots, so find the perfect combo to defeat your opponents! Upgrade weapons to boost your chances.",
    image: featureWeapons,
    icon: iconUpgrade,
  },
];

const featureList: string[] = [
  "Battle Royale",
  "Online Multiplayer",
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
          className="w-32 h-32 mx-auto rounded-2xl mb-6"
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
        Pick a nation and dominate the battlefield in online multiplayer combat! Battle players worldwide in strategic turn-based showdowns. Unlock powerful weapons, upgrade your arsenal, and climb the global rankings.
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

      {/* Feature Cards - 4 columns on xl, 2 on md, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {features.map(({ title, description, image, icon }: FeatureProps) => (
          <Card key={title} className="flex flex-col relative">
            <img
              src={icon}
              alt={`${title} icon`}
              className="absolute top-2 right-2 h-8 w-8"
            />
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{description}</p>
            </CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className="w-full max-w-[250px] mx-auto rounded-xl"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
