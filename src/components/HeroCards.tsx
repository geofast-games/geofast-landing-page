import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import battleOfNationsLogo from "../assets/playstore_logo.png";
import image_playstore from "../assets/playstore.webp";
import image_appstore from "../assets/appstore.webp";
import discordIcon from "../assets/discord_green.webp";
import tiktokIcon from "../assets/tiktok_green.webp";
import instagramIcon from "../assets/instagram_green.webp";
import youtubeIcon from "../assets/youtube_green.webp";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/utkarshtrivedimdz.png"
            />
            <AvatarFallback>UT</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Utkarsh Trivedi</CardTitle>
            <CardDescription className="font-normal text-primary">
              CTO
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>"You can build just about anything."</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://github.com/geofast.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Valentijn Hoornaert</CardTitle>
          <CardDescription className="font-normal text-primary">
            Founder & CEO
          </CardDescription>
        </CardHeader>
      
        <CardContent className="text-center pb-2">
          <p>
            "I want to reach players in every country on Earth."
          </p>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Battle of Nations
            <img
              src={battleOfNationsLogo}
              alt=""
              className="w-[75px] object-contain rounded-lg"
            />
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">400K+</span>
            <span className="text-muted-foreground"> installs</span>
          </div>
      
          <CardDescription>
            Pick a country and conquer the world in a thrilling battle royale showdown!
          </CardDescription>
        </CardHeader>
      
        {/* Replaced Button with App Store and Play Store images */}
        <CardContent className="flex flex-col items-center gap-4">
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations"
          >
            <img
              src={image_playstore}
              alt="Get it on Google Play"
              className="h-12 object-contain"
            />
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://apps.apple.com/app/geofast-battle-of-nations/id6740595527"
          >
            <img
              src={image_appstore}
              alt="Download on the App Store"
              className="h-12 object-contain"
            />
          </a>
        </CardContent>
      
        <hr className="w-4/5 m-auto mb-4" />
      
        <CardFooter className="flex">
          <div className="space-y-4">
            {["Free", "Online Multiplayer", "Premium Sandbox Mode", "57 Supported Languages", "Frequent Updates"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

     {/* Community Card */}
      <Card className="absolute right-[20px] top-[240px] w-80 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <div className="text-center space-y-2">
            <CardTitle className="text-xl font-bold">
              Be Part of Our Growing Community
            </CardTitle>
            <CardDescription className="text-sm">Daily Content!</CardDescription>
          </div>
        </CardHeader>
      
        <CardContent className="flex flex-col items-center gap-4 mt-4">
          {/* Discord */}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://discord.gg/czV5cM8rux"
            className="flex items-center justify-center gap-4"
          >
            <img
              src={discordIcon}
              alt="Discord"
              className="h-12 w-12 object-contain"
            />
            <span className="text-muted-foreground text-sm">Geofast</span>
          </a>
          {/* TikTok */}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.tiktok.com/@geofast_"
            className="flex items-center justify-center gap-4"
          >
            <img
              src={tiktokIcon}
              alt="TikTok"
              className="h-12 w-12 object-contain"
            />
            <span className="text-muted-foreground text-sm">@geofast_</span>
          </a>
      
          {/* Instagram */}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.instagram.com/geofast_/"
            className="flex items-center justify-center gap-4"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="h-12 w-12 object-contain"
            />
            <span className="text-muted-foreground text-sm">@geofast_</span>
          </a>
      
          {/* YouTube */}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.youtube.com/@geofast_"
            className="flex items-center justify-center gap-4"
          >
            <img
              src={youtubeIcon}
              alt="YouTube"
              className="h-12 w-12 object-contain"
            />
            <span className="text-muted-foreground text-sm">@geofast_</span>
          </a>
        </CardContent>
      </Card>


    </div>
  );
};
