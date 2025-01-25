import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useUnitsStore } from "@/store/use-units-store";
import {
  ArrowDownAZ,
  BarChart,
  PlusIcon,
  Settings2Icon,
  SortAscIcon,
} from "lucide-react";

const FilterButtons = () => {
  const { sortBy, sortDirection, setSortBy, setSortDirection } =
    useUnitsStore();
  return (
    <div className="flex items-center gap-4">
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
      {/* Sort Direction */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="madmon-primary" size="sm">
            <BarChart className="!size-5 stroke-[3px] -rotate-90" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Sort Direction</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setSortDirection("asc")}
            className={cn({
              "bg-madmon-main/10 text-madmon-main": sortDirection === "asc",
            })}
          >
            Ascending
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setSortDirection("desc")}
            className={cn({
              "bg-madmon-main/10 text-madmon-main": sortDirection === "desc",
            })}
          >
            Descending
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Add Unit */}
      <Button variant={"madmon-primary"} size={"madmon-lg"}>
        <PlusIcon />
        Add Unit
      </Button>
    </div>
  );
};

export default FilterButtons;
