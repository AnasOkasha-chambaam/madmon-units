"use client";
import { Circle, LucideIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Menu items.
const items: TNavigationItem<LucideIcon>[] = [
  {
    title: "My Account",
    href: "/account",
  },
  {
    title: "My Units",
    href: "/",
  },
  {
    title: "My Reservations",
    href: "/reservations",
  },
];

export function AppSideNav() {
  const pathname = usePathname();
  return (
    <Sidebar className="border-transparent">
      <SidebarContent className="pt-24 pl-4 !bg-background">
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.href}
                      className={cn(
                        "border border-border/30 bg-madmon-muted text-madmon-main flex items-center text-lg p-4",
                        {
                          "!border-madmon-main": pathname === item.href,
                        }
                      )}
                    >
                      {item.icon && <item.icon />}
                      {
                        <Circle
                          className={cn(
                            "!size-2.5  fill-madmon-main text-madmon-main",
                            {
                              "opacity-0": pathname !== item.href,
                            }
                          )}
                        />
                      }
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
