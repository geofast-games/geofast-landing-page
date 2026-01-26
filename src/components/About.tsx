import { Statistics } from "./Statistics";
import GeofastLogo from "../assets/geofast_round.webp";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        {/* Add the company logo */}
        <div className="flex justify-center">
          <img
            src={GeofastLogo}
            alt="Geofast Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain mb-8"
          />
        </div>

        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Geofast Games
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Geofast Games was founded in Belgium in 2024 with a passion for creating engaging gaming experiences for a global audience.
              Our first game, <em>Geofast: Battle of Nations</em>, was released on the Google Play Store in December 2024, followed by the Apple App Store in February 2025.
              Even before its release, the game went viral on TikTok and Instagram, where videos garnered millions of views and built a wave of anticipation.
              This early excitement translated into a strong launch, with players from all over the world joining to form a vibrant and diverse community.
              Since launch, we've continued expanding the experience—adding ranked online multiplayer, weapon unlocking and upgrading, skins, and much more. The battlefield keeps evolving, and the best is yet to come!
              </p>
            </div>

            <Statistics />
          </div>
        </div>

      </div>
    </section>
  );
};
