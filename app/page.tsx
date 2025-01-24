"use client";

import FilterButtons from "@/components/units/filter-buttons";
import { UnitCard } from "@/components/units/unit-card";
import { useDeleteUnit, useUnits } from "@/hooks/use-units";
import { useUnitsStore } from "@/store/use-units-store";

export default function UnitsPage() {
  const { data: units = [], isLoading } = useUnits();
  const { mutate: deleteUnit } = useDeleteUnit();

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* <SideNav /> */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">
              {/* <SidebarTrigger /> */}
              My Units
            </h1>
            <FilterButtons />
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-[180px] rounded-lg bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-9">
              {[
                ...units,
                ...([
                  // TODO: Remove this
                  {
                    createdAt: "2024-10-02T13:12:45.000000Z",
                    name: "Newly Added",
                    coverUrl:
                      "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996",
                    address: "Heliopolis, Egypt",
                    price: 270000000000,
                    bedroomsNumber: 2,
                    bathroomsNumber: 1,
                    space: 24,
                    status: "pending",
                    id: "2222",
                  },
                  {
                    createdAt: "2024-10-02T13:12:45.000000Z",
                    name: "Newly Added",
                    coverUrl:
                      "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996",
                    address: "Heliopolis, Egypt",
                    price: 270000000000,
                    bedroomsNumber: 2,
                    bathroomsNumber: 1,
                    space: 24,
                    status: "approved",
                    id: "3333",
                  },
                  {
                    createdAt: "2024-10-02T13:12:45.000000Z",
                    name: "Newly Added",
                    coverUrl:
                      "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996",
                    address: "Heliopolis, Egypt",
                    price: 270000000000,
                    bedroomsNumber: 2,
                    bathroomsNumber: 1,
                    space: 24,
                    status: "rejected",
                    id: "4444",
                  },
                ] as TUnit[]),
              ].map((unit) => (
                <UnitCard key={unit.id} unit={unit} onDelete={deleteUnit} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
