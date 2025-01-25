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
    <nav className=" flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 text-madmon-main font-medium">
      {NAVIGATION_ITEMS.map((ni) => (
        <Link
          key={ni.href}
          href={ni.href}
          className={cn("max-md:w-full max-md:bg-madmon-muted max-md:p-3", {
            "flex items-center gap-1": !!ni.icon,
          })}
        >
          {ni.icon && <ni.icon className="h-4 w-4" />}
          {ni.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
