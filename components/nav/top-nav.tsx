import Link from "next/link";
import { LangDropdown } from "./lang-dropdown";
import NavItems from "./nav-items";
import UserDropdown from "./user-dropdown";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";

export function TopNav() {
  return (
    <header className="border-b shadow-lg px-3 sticky top-0 z-40 bg-background">
      <div className="container mx-auto flex h-16 w-full items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo.png"
              alt="Madmon Logo"
              width={120}
              height={40}
              className="w-20"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <NavItems />
          <LangDropdown />
          <UserDropdown />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
