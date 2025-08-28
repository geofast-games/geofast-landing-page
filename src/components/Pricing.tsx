import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import icons
import developerIcon from "../assets/developer.webp";
import gameplayIcon from "../assets/gameplay.webp";
import artistIcon from "../assets/artist.webp";
import marketingIcon from "../assets/marketing.webp";
import communityIcon from "../assets/community.webp";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  description: string;
  buttonText: string;
  icon: string;
  mailto: string; // Email link for each role
}

const pricingList: PricingProps[] = [
  {
    title: "Game Developer",
    popular: PopularPlanType.NO,
    description: "Develop engaging gameplay and mechanics for our games.",
    buttonText: "Apply Now",
    icon: developerIcon,
    mailto: "mailto:geofast.help@gmail.com?subject=Geofast Games Application for Game Developer", // Pre-filled email
  },
  {
    title: "Gameplay Writer",
    popular: PopularPlanType.NO,
    description: "Design exciting new gameplay features.",
    buttonText: "Apply Now",
    icon: gameplayIcon,
    mailto: "mailto:geofast.help@gmail.com?subject=Geofast Games Application for Gameplay Writer", // Pre-filled email
  },
  {
    title: "Game Artist",
    popular: PopularPlanType.NO,
    description: "Create skins, effects, and visuals to bring our games to life.",
    buttonText: "Apply Now",
    icon: artistIcon,
    mailto: "mailto:geofast.help@gmail.com?subject=Geofast Games Application for Game Artist", // Pre-filled email
  },
  {
    title: "Marketing Specialist",
    popular: PopularPlanType.NO,
    description: "Drive user acquisition and manage marketing campaigns.",
    buttonText: "Apply Now",
    icon: marketingIcon,
    mailto: "mailto:geofast.help@gmail.com?subject=Geofast Games Application for Marketing Specialist", // Pre-filled email
  },
  {
    title: "Community Manager",
    popular: PopularPlanType.NO,
    description: "Engage with players and manage our social media presence.",
    buttonText: "Apply Now",
    icon: communityIcon,
    mailto: "mailto:geofast.help@gmail.com?subject=Geofast Games Application for Community Manager", // Pre-filled email
  },
];

export const Pricing = () => {
  return (
    <section id="careers" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Join{" "}
        </span>
        the Team
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        We’re on the lookout for passionate and talented professionals to join our growing team.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader className="relative">
              {/* Add the icon in the top-right corner */}
              <img
                src={pricing.icon}
                alt={`${pricing.title} icon`}
                className="absolute top-2 right-2 h-8 w-8"
              />
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a href={pricing.mailto}>
                <Button className="w-full">{pricing.buttonText}</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
