import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";
import {
  SocialIcon,
  socialLinks,
  appleIconPath,
  googlePlayIconPath,
} from "./SocialIcons";

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
          {socialLinks.map(({ name, href, path }) => (
            <div key={name}>
              <a
                rel="noreferrer noopener"
                href={href}
                target="_blank"
                className="inline-flex items-center gap-2 opacity-60 hover:opacity-100"
              >
                <SocialIcon path={path} className="h-4 w-4" />
                {name}
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://apps.apple.com/app/geofast-battle-of-nations/id6740595527?ct=website-footer"
              target="_blank"
              className="inline-flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <SocialIcon path={appleIconPath} className="h-4 w-4" />
              App Store
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://play.google.com/store/apps/dev?id=7184241621050076321"
              target="_blank"
              className="inline-flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <SocialIcon path={googlePlayIconPath} className="h-4 w-4" />
              Google Play
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
        {/* Secondary text, same token the rest of the site uses for it: the
            line should sit quieter than the footer links above it. */}
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Geofast Games. All rights reserved.
        </p>
      </section>
    </footer>
  );
};
