"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import FilterButtons from "@/components/units/filter-buttons";
import PaginationButtons from "@/components/units/pagination-buttons";
import { UnitCard } from "@/components/units/unit-card";
import { useDeleteUnit, useUnits } from "@/hooks/use-units";

export default function UnitsPage() {
  const { data: units = [], isLoading } = useUnits();
  const { mutate: deleteUnit, isPending } = useDeleteUnit();

  return (
    <div className="min-h-screen max-w-[100vw]">
      <div className="flex">
        {/* <SideNav /> */}
        <main className="flex-1 py-8 px-6">
          <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between gap-2 mb-8">
            <h1 className="text-2xl font-semibold flex items-center">
              <SidebarTrigger className="lg:hidden" />
              <Separator
                orientation="vertical"
                className="h-9 mx-2 lg:hidden"
              />
              My Units
            </h1>
            <FilterButtons />
          </div>

          {isLoading ? (
            <ul className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <li key={i + "-skeleton"}>
                  <Skeleton className="h-[180px] rounded-lg" />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-9">
              {units.map((unit) => (
                <li key={unit.id}>
                  <UnitCard
                    unit={unit}
                    onDelete={deleteUnit}
                    isDeleting={isPending}
                  />
                </li>
              ))}
            </ul>
          )}

          {/* <Pagination /> */}
          <div className="flex items-center justify-between flex-col gap-3 lg:flex-row py-12 px-1">
            <p className="text-muted-foreground font-medium">
              Showing {units.length} Units
            </p>
            <PaginationButtons />
          </div>
        </main>
      </div>
    </div>
  );
}
