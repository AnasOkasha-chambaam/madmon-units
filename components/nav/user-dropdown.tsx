// UserDropdown.tsx
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDownIcon, XIcon } from "lucide-react";

const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 group">
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://cdn3.f-cdn.com/ppic/203055065/logo/54158093/gCx75/profile_logo_LinkedIn_54158093.jpg" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          Omar Mohamed{" "}
          <span className="size-4 relative">
            <ChevronDownIcon className="absolute inset-0 size-4 rotate-0 group-data-[state=open]:rotate-45 opacity-100 group-data-[state=open]:opacity-0 transition-all" />
            <XIcon className="absolute inset-0 size-4 rotate-0 group-data-[state=closed]:rotate-45 opacity-100  group-data-[state=closed]:opacity-0 transition-all" />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <a href="#">Profile</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#">Billing</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#">Settings</a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className={buttonVariants({
            variant: "destructive",
            className: "w-full",
          })}
        >
          <a href="#">Logout</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
