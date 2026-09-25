import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadMenu } from "./DownloadMenu";

// Mobile-only bar that follows the reader down the home page. It stays away
// while the hero is on screen, because the hero already carries both store
// badges, and slides up once the reader has passed them and has no download
// link in reach any more. Home page only: on the legal and form pages a
// download prompt is noise, and those pages are prerendered, so the bar must
// render the same (nothing) on the server and in the browser.
export const StickyDownload = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [dismissed, setDismissed] = useState(false);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    // Tied to the hero itself rather than a pixel count: section heights move
    // every time the page is edited, and a hardcoded threshold silently
    // stops meaning what it was set to mean.
    const hero = document.getElementById("battleofnations");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome || dismissed) return null;

  return (
    <div
      // Kept mounted and slid out of view, so appearing and leaving are
      // animated rather than a pop.
      aria-hidden={!showBar}
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-3 shadow-lg transition-transform duration-300 ease-out md:hidden ${
        showBar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between gap-2">
        {/* Same label, motion and menu as the navbar button: only the width
            differs, because this one spans the bar. */}
        <DownloadMenu
          campaign="sticky_download"
          className="flex-1"
          align="center"
          contentClassName="min-w-[11rem] mb-2"
          scaleOnHover
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setDismissed(true)}
          aria-label="Hide the download bar"
          className="flex-shrink-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
