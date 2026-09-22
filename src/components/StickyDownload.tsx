import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadMenu } from "./DownloadMenu";

export const StickyDownload = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide button after scrolling past GameShowcase section (approximately 2000px)
      const scrollPosition = window.scrollY;
      if (scrollPosition > 2000) {
        setHasScrolledPast(true);
      } else {
        setHasScrolledPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || hasScrolledPast) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-lg p-3">
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
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
