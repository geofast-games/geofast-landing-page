import { HeroCards } from "./HeroCards";
import discordIcon from "../assets/discord_green.webp";
import tiktokIcon from "../assets/tiktok_green.webp";
import instagramIcon from "../assets/instagram_green.webp";
import youtubeIcon from "../assets/youtube_green.webp";
import playstoreBadge from "../assets/playstore.webp";
import appstoreBadge from "../assets/appstore.webp";
import revivalIcon from "../assets/revival.webp";
import grenadeIcon from "../assets/grenade.webp";
import heartIcon from "../assets/heart.webp";
import poisonIcon from "../assets/poison.webp";
import allianceIcon from "../assets/alliance2.webp";
import revivalBIcon from "../assets/revivalb.webp";
import grenadeBIcon from "../assets/grenadeb.webp";
import heartBIcon from "../assets/heartb.webp";
import poisonBIcon from "../assets/poisonb.webp";
import allianceBIcon from "../assets/alliance2b.webp";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-start space-y-6">
        {/* Icon Row with Hover Effect */}
        <div className="flex justify-start gap-6">
          {/* Revival Icon */}
          <div className="relative">
            <img
              src={revivalBIcon}
              alt="Revival"
              className="h-10 w-10 object-contain opacity-50 hover:opacity-0 transition-opacity absolute"
            />
            <img
              src={revivalIcon}
              alt="Revival Hover"
              className="h-10 w-10 object-contain opacity-0 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Grenade Icon */}
          <div className="relative">
            <img
              src={grenadeBIcon}
              alt="Grenade"
              className="h-10 w-10 object-contain opacity-50 hover:opacity-0 transition-opacity absolute"
            />
            <img
              src={grenadeIcon}
              alt="Grenade Hover"
              className="h-10 w-10 object-contain opacity-0 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Heart Icon */}
          <div className="relative">
            <img
              src={heartBIcon}
              alt="Heart"
              className="h-10 w-10 object-contain opacity-50 hover:opacity-0 transition-opacity absolute"
            />
            <img
              src={heartIcon}
              alt="Heart Hover"
              className="h-10 w-10 object-contain opacity-0 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Poison Icon */}
          <div className="relative">
            <img
              src={poisonBIcon}
              alt="Poison"
              className="h-10 w-10 object-contain opacity-50 hover:opacity-0 transition-opacity absolute"
            />
            <img
              src={poisonIcon}
              alt="Poison Hover"
              className="h-10 w-10 object-contain opacity-0 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Alliance Icon */}
          <div className="relative">
            <img
              src={allianceBIcon}
              alt="Alliance"
              className="h-10 w-10 object-contain opacity-50 hover:opacity-0 transition-opacity absolute"
            />
            <img
              src={allianceIcon}
              alt="Alliance Hover"
              className="h-10 w-10 object-contain opacity-0 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Download CTA - Moved to top for immediate visibility */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
            Download Now - It's Free!
          </h3>
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <img
                src={playstoreBadge}
                alt="Get it on Google Play"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/app/geofast-battle-of-nations/id6740595527"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <img
                src={appstoreBadge}
                alt="Download on the App Store"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            ⭐ Join 300K+ players worldwide
          </p>
        </div>

        {/* Title */}
        <main className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Accessible
            </span>{" "}
            Gaming,
          </h1>
          <br />
          Unlimited{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Fun
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          <b>Geofast Games</b> is a game development studio based in Belgium,
          creating engaging mobile games designed for players from all over the world.
          Our goal is to develop games accessible to everyone, regardless of experience or language.
          Our first mobile game, <em>Geofast: Battle of Nations</em>, had a strong and successful launch,
          capturing the interest of players globally.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-start gap-6 mt-6">
          <a
            href="https://discord.gg/czV5cM8rux"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={discordIcon}
              alt="Discord"
              className="h-10 w-10 object-contain"
            />
          </a>
          <a
            href="https://www.tiktok.com/@geofast_"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tiktokIcon}
              alt="TikTok"
              className="h-10 w-10 object-contain"
            />
          </a>
          <a
            href="https://www.instagram.com/geofast_/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="h-10 w-10 object-contain"
            />
          </a>
          <a
            href="https://www.youtube.com/@geofast_"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={youtubeIcon}
              alt="YouTube"
              className="h-10 w-10 object-contain"
            />
          </a>
        </div>
      </div>

      {/* Hero cards section */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
