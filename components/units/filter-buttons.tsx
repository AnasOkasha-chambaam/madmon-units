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
import { cn } from "@/lib/utils";
import { useUnitsStore } from "@/store/use-units-store";
import { BarChart, PlusIcon, Settings2Icon } from "lucide-react";
import { AddOrEditUnitDialog } from "./AddOrEditUnitDialog";

const FilterButtons = () => {
  const { sortBy, sortOrder, setSortBy, setSortOrder } = useUnitsStore();
  return (
    <div className="flex items-center gap-4 justify-end w-full lg:w-auto">
      {/* Sort By */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="madmon-primary" size="sm">
            <Settings2Icon className="!size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Sort By</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={sortBy}
            onValueChange={(value) => setSortBy(value as TSortOption)}
          >
            <DropdownMenuRadioItem
              value={"date"}
              className={cn({
                "bg-madmon-main/10 text-madmon-main": sortBy === "date",
              })}
            >
              Date
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>

          <DropdownMenuRadioGroup
            value={sortBy}
            onValueChange={(value) => setSortBy(value as TSortOption)}
          >
            <DropdownMenuRadioItem
              value={"price"}
              className={cn({
                "bg-madmon-main/10 text-madmon-main": sortBy === "price",
              })}
            >
              Price
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Order */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="madmon-primary" size="sm">
            <BarChart className="!size-5 stroke-[3px] -rotate-90" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Order</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={sortOrder}
            onValueChange={(value) => setSortOrder(value as TSortOrderOption)}
          >
            <DropdownMenuRadioItem
              value={"asc"}
              className={cn({
                "bg-madmon-main/10 text-madmon-main": sortOrder === "asc",
              })}
            >
              Ascending
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuRadioGroup
            value={sortOrder}
            onValueChange={(value) => setSortOrder(value as TSortOrderOption)}
          >
            <DropdownMenuRadioItem
              value={"desc"}
              className={cn({
                "bg-madmon-main/10 text-madmon-main": sortOrder === "desc",
              })}
            >
              Descending
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Add Unit */}
      <AddOrEditUnitDialog
        trigger={
          <Button
            variant={"madmon-primary"}
            size={"madmon-lg"}
            className="max-sm:!w-full"
          >
            <PlusIcon />
            Add Unit
          </Button>
        }
      />
    </div>
  );
};

export default FilterButtons;
