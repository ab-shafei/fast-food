import Link from "next/link";
import FacebookIcon from "@/components/icons/facebookIcon";
import XIcon from "@/components/icons/xIcon";
import InstagramIcon from "@/components/icons/instagramIcon";

export const Footer = () => {
  return (
    <footer className="text-foreground mx-auto flex max-w-[1440px] flex-col px-6">
      <div className="border-muted-foreground flex flex-col items-center justify-between gap-5 border-y py-20 sm:flex-row">
        <div className="flex gap-4">
          <Link className="font-bold text-[#3b3b3b]" href="/">
            Home
          </Link>
          <Link className="font-bold text-[#3b3b3b]" href="/our-menu">
            Our Menu
          </Link>
          <Link className="font-bold text-[#3b3b3b]" href="/offers">
            Offers
          </Link>
          <Link className="font-bold text-[#3b3b3b]" href="/about">
            About
          </Link>
        </div>
        <div className="flex gap-2">
          <FacebookIcon className="bg-secondary h-14 w-14 p-4" />
          <XIcon className="bg-secondary h-14 w-14 p-4" />
          <InstagramIcon className="bg-secondary h-14 w-14 p-4" />
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <p className="font-bold text-[#3b3b3b]">
          Copyright © 2025 Fast Food Restaurant
        </p>
      </div>
    </footer>
  );
};
