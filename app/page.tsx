"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import FilterButtons from "@/components/units/filter-buttons";
import PaginationButtons from "@/components/units/pagination-buttons";
import { UnitCard } from "@/components/units/unit-card";
import { useDeleteUnit, useUnits } from "@/hooks/use-units";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

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
              {[
                ...units,
                // ...([
                //   // TODO: Remove this
                //   {
                //     createdAt: "2024-10-02T13:12:45.000000Z",
                //     name: "Newly Added",
                //     coverUrl:
                //       "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996",
                //     address: "Heliopolis, Egypt",
                //     price: 270000000000,
                //     bedroomsNumber: 2,
                //     bathroomsNumber: 1,
                //     space: 24,
                //     status: "pending",
                //     id: "2222",
                //   },
                //   {
                //     createdAt: "2024-10-02T13:12:45.000000Z",
                //     name: "Newly Added",
                //     coverUrl:
                //       "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996",
                //     address: "Heliopolis, Egypt",
                //     price: 270000000000,
                //     bedroomsNumber: 2,
                //     bathroomsNumber: 1,
                //     space: 24,
                //     status: "approved",
                //     id: "3333",
                //   },
                //   {
                //     createdAt: "2024-10-02T13:12:45.000000Z",
                //     name: "Newly Added",
                //     coverUrl:
                //       "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996",
                //     address: "Heliopolis, Egypt",
                //     price: 270000000000,
                //     bedroomsNumber: 2,
                //     bathroomsNumber: 1,
                //     space: 24,
                //     status: "rejected",
                //     id: "4444",
                //   },
                //   {
                //     createdAt: "2024-10-02T13:12:45.000000Z",
                //     name: "Newly Added",
                //     coverUrl:
                //       "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996",
                //     address: "Heliopolis, Egypt",
                //     price: 270000000000,
                //     bedroomsNumber: 2,
                //     bathroomsNumber: 1,
                //     space: 24,
                //     status: "reserved",
                //     id: "5555",
                //   },
                // ] as TUnit[]),
              ].map((unit) => (
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
