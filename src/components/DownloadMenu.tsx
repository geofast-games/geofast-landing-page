import { useRef, useState } from "react";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SocialIcon, appleIconPath, googlePlayIconPath } from "./SocialIcons";

const appleURL = (campaign: string) =>
  `https://apps.apple.com/app/geofast-battle-of-nations/id6740595527?ct=website-${campaign}`;

const playURL = (campaign: string) =>
  `https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations&utm_source=website&utm_medium=organic&utm_campaign=${campaign}`;

// The one download dropdown, used by the navbar (desktop + mobile sheet)
// and the mobile sticky bar — same stores, same motion, one place to fix.
export const DownloadMenu = ({
  label = "Download Now",
  campaign,
  className = "",
  itemClassName = "",
  // Hugs its content: a fixed width left the two short labels stranded
  // against a wide empty panel.
  contentClassName = "min-w-[11rem]",
  align = "center",
  scaleOnHover = false,
  onNavigate,
}: {
  label?: string;
  campaign: string;
  className?: string;
  itemClassName?: string;
  contentClassName?: string;
  align?: "start" | "center" | "end";
  scaleOnHover?: boolean;
  onNavigate?: () => void;
}) => {
  // Radix returns focus to the trigger when the menu closes, and the browser
  // then paints the keyboard focus ring even though the user clicked. Track
  // how the menu was opened: pointer opens close ringless, keyboard opens
  // still hand focus back so keyboard users keep their place.
  const openedByPointer = useRef(false);
  const [, setOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          onPointerDown={() => (openedByPointer.current = true)}
          onKeyDown={() => (openedByPointer.current = false)}
          className={`group rounded-full transition-all hover:shadow-md ${
            scaleOnHover ? "hover:scale-105" : ""
          } ${className}`}
        >
          <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          {label}
          <ChevronDown className="ml-1.5 h-4 w-4 opacity-70 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className={contentClassName}
        onCloseAutoFocus={(event) => {
          if (openedByPointer.current) event.preventDefault();
        }}
      >
        <DropdownMenuItem asChild>
          <a
            href={appleURL(campaign)}
            target="_blank"
            rel="noreferrer"
            className={`flex cursor-pointer items-center gap-2.5 py-2 ${itemClassName}`}
            onClick={onNavigate}
          >
            <SocialIcon path={appleIconPath} className="h-4 w-4" />
            <span>App Store</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={playURL(campaign)}
            target="_blank"
            rel="noreferrer"
            className={`flex cursor-pointer items-center gap-2.5 py-2 ${itemClassName}`}
            onClick={onNavigate}
          >
            <SocialIcon path={googlePlayIconPath} className="h-4 w-4" />
            <span>Google Play</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
