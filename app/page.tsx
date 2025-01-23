"use client";

import { ArrowDownAZ, Plus } from "lucide-react";
import { TopNav } from "@/components/nav/top-nav";
import { SideNav } from "@/components/nav/side-nav";
import { UnitCard } from "@/components/units/unit-card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUnits, useDeleteUnit } from "@/hooks/use-units";
import { useUnitsStore } from "@/store/use-units-store";
import { useQueryClient } from "@tanstack/react-query";

export default function UnitsPage() {
  const { data: units = [], isLoading } = useUnits();
  const { mutate: deleteUnit } = useDeleteUnit();
  const { sortBy, setSortBy } = useUnitsStore();
  const queryClient = useQueryClient();

  const sortedUnits = [...units].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return a.price - b.price;
  });

  return (
    <div className="min-h-screen">
      <TopNav />
      <div className="flex">
        <SideNav />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">My Units</h1>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <ArrowDownAZ className="mr-2 h-4 w-4" />
                    Sort by {sortBy === "date" ? "Date" : "Price"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSortBy("date")}>
                    Date
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("price")}>
                    Price
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Unit
              </Button>
            </div>
          </div>

          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-[400px] rounded-lg bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedUnits.map((unit) => (
                <UnitCard key={unit.id} unit={unit} onDelete={deleteUnit} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
