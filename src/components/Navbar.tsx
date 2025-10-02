import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { buttonVariants } from "./ui/button";
import { Menu, Download } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#battleofnations",
    label: "Battle of Nations",
  },
  {
    href: "/#about",
    label: "About Us",
  },
  {
    href: "/#careers",
    label: "Join the Team",
  },
  {
    href: "/#team",
    label: "Team",
  },
  {
    href: "/#contact",
    label: "Contact Us",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIcon />
              Geofast Games
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Geofast Games
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] hover:opacity-90 w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Now
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-56">
                      <DropdownMenuItem asChild>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center cursor-pointer"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>Google Play Store</span>
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a
                          href="https://apps.apple.com/app/geofast-battle-of-nations/id6740595527"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center cursor-pointer"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>Apple App Store</span>
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] hover:opacity-90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center cursor-pointer"
                  >
                    <span>📱 Google Play Store</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://apps.apple.com/app/geofast-battle-of-nations/id6740595527"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center cursor-pointer"
                  >
                    <span>🍎 Apple App Store</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
