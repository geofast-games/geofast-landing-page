import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            Geofast Games
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://discord.gg/czV5cM8rux"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@geofast_"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              TikTok
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/geofast_/"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.youtube.com/@geofast_"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
           <div>
            <a
              rel="noreferrer noopener"
              href="https://play.google.com/store/apps/dev?id=7184241621050076321"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Play Store
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://apps.apple.com/app/geofast-battle-of-nations/id6740595527"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              App Store
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Battle of Nations</h3>
          <div>
            <Link
              to="/feedback"
              className="opacity-60 hover:opacity-100"
            >
              Feedback
            </Link>
          </div>
          <div>
            <Link
              to="/privacy"
              className="opacity-60 hover:opacity-100"
            >
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link
              to="/termsofservice"
              className="opacity-60 hover:opacity-100"
            >
              Terms of Service
            </Link>
          </div>
          <div>
            <Link
              to="/datadeletion"
              className="opacity-60 hover:opacity-100"
            >
              Data Deletion
            </Link>
          </div>
        </div>

      </section>

      <section className="container pb-14 text-center">
        <h3>
          <div>&copy; 2026 Geofast Games. All rights reserved.</div>
        </h3>
      </section>
    </footer>
  );
};
