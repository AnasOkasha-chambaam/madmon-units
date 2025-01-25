"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LangDropdown } from "./lang-dropdown";
import NavItems from "./nav-items";
import UserDropdown from "./user-dropdown";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="!size-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-between h-full gap-4 py-4">
          <NavItems />
          <div className="flex flex-col gap-4 border-t pt-4">
            <LangDropdown />
            <UserDropdown />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
