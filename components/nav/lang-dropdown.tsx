"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  {
    label: "EN",
    value: "en",
  },
  {
    label: "AR",
    value: "ar",
  },
];

export function LangDropdown() {
  const [lang, setLang] = React.useState("en");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-madmon-main max-md:justify-start"
        >
          <GlobeIcon className="h-4 w-4" />
          EN
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="center">
        <DropdownMenuLabel>Choose a language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
          {LANGUAGES.map((l) => (
            <DropdownMenuRadioItem
              key={l.value}
              value={l.value}
              className={cn({
                "bg-madmon-main/10 text-madmon-main": lang === l.value,
              })}
            >
              {l.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
