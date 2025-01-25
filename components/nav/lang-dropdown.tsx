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
import { useLangStore } from "@/store/use-lang-store";

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
  const { lang, setLang } = useLangStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-madmon-main max-md:justify-start"
        >
          <GlobeIcon className="h-4 w-4" />
          {lang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="center">
        <DropdownMenuLabel>Choose a language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={lang}
          onValueChange={(value) => setLang(value as TLangOption)}
        >
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
