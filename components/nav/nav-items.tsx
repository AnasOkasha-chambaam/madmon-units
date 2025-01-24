import { cn } from "@/lib/utils";
import { HeartIcon, type LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NAVIGATION_ITEMS: TNavigationItem<LucideIcon>[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Favourite",
    href: "/favourite",
    icon: HeartIcon,
  },
];

const NavItems = () => {
  return (
    <nav className="hidden md:flex items-center gap-6 text-main-color font-medium">
      {NAVIGATION_ITEMS.map((ni) => (
        <Link
          key={ni.href}
          href={ni.href}
          className={cn({ "flex items-center gap-1": !!ni.icon })}
        >
          {ni.icon && <ni.icon className="h-4 w-4" />}
          {ni.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
