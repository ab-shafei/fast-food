"use client";

import Image from "next/image";
import Link from "next/link";

import { AlignRight } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@reactuses/core";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Menu",
    href: "/our-menu",
  },
  {
    label: "Offers",
    href: "/offers",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Close drawer automatically on desktop
  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  return (
    <header className="absolute w-full text-[#e1e1e1]">
      <div className="flex w-full justify-between px-4 pt-4 lg:px-9">
        <div>
          <Link href="/" className="">
            <Image
              width={251}
              height={48}
              src="/images/logo-regular-free-img.png"
              className="w-[200px] transition-all md:w-[251px]"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden md:block 2xl:mr-80">
          <nav>
            <ul className="flex gap-8">
              {routes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={cn(
                      "font-rubic text-md leading-16 font-bold tracking-tight uppercase transition duration-500 ease-in-out",
                      route.href === pathname &&
                        "text-white underline underline-offset-2",
                    )}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="bg-secondary hover:text-muted-foreground flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all hover:scale-105 md:hidden"
        >
          <AlignRight className="h-5 w-5" />
        </div>
      </div>
      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
        <DrawerContent>
          <DrawerHeader>
            <VisuallyHidden asChild>
              <DrawerTitle>Navigation Menu</DrawerTitle>
            </VisuallyHidden>
          </DrawerHeader>
          <nav className="mt-16 ml-6 text-[#3b3b3b]">
            <ul className="flex flex-col gap-8">
              {routes.map((route) => (
                <li key={route.href}>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={route.href}
                    className={cn(
                      "font-rubic font-bold tracking-tight uppercase",
                      route.href === pathname &&
                        "text-primary underline underline-offset-2",
                    )}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
