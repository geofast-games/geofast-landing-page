import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex-1 bg-gradient-to-r from-[#F596D3] to-[#D247BF] hover:opacity-90 text-white font-bold">
              <Download className="mr-2 h-4 w-4" />
              Download Game - Free!
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-64 mb-2">
            <DropdownMenuItem asChild>
              <a
                href="https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations"
                target="_blank"
                rel="noreferrer"
                className="flex items-center cursor-pointer py-3"
              >
                <span className="text-base">📱 Google Play Store</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="https://apps.apple.com/app/geofast-battle-of-nations/id6740595527"
                target="_blank"
                rel="noreferrer"
                className="flex items-center cursor-pointer py-3"
              >
                <span className="text-base">🍎 Apple App Store</span>
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
