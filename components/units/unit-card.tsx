import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatPrice } from "@/lib/utils";
import {
  Bath,
  BathIcon,
  BedSingleIcon,
  Ruler,
  Trash2,
  UserIcon,
} from "lucide-react";
import { RiRuler2Line } from "react-icons/ri";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface UnitCardProps {
  unit: TUnit;
  onDelete: (id: string) => void;
}

export function UnitCard({ unit, onDelete }: UnitCardProps) {
  return (
    <Card className="relative bg-muted flex rounded-3xl overflow-hidden shadow-lg">
      {/* Image */}
      <div className="relative">
        {unit.status.toLowerCase() === "reserved" && (
          <Badge
            variant={"madmon-reserved"}
            className="absolute left-0 top-0 px-6 py-2 text-xs font-medium rounded-3xl !rounded-bl-none !rounded-tr-none"
          >
            Reserved
          </Badge>
        )}
        <Image
          src={unit.coverUrl || "/placeholder.svg"}
          alt={unit.name}
          width={140}
          height={190}
          className="w-80 h-full object-cover"
        />
      </div>
      {/* Content */}
      <CardContent className="w-full">
        <CardHeader className="flex-1 pt-7 pb-0 px-0">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CardTitle className="font-normal">
                  {/* {unit.name} */}
                  Grand House Real Estate
                </CardTitle>
                <Badge
                  variant={`madmon-${unit.status.toLowerCase() as TUnitStatus}`}
                >
                  {unit.status[0].toUpperCase() + unit.status.slice(1)}
                </Badge>
              </div>
              <CardDescription className="text-base text-madmon-secondary-foreground">
                {unit.address}
              </CardDescription>
            </div>
            <div className="text-right">
              <p className="font-semibold text-2xl text-money">
                {formatPrice(unit.price).replace("EGP", "")}{" "}
                <span className="font-normal text-base">EGP</span>
              </p>
            </div>
          </div>
        </CardHeader>

        <div className="flex items-center gap-6 my-4">
          <div className="flex items-center gap-2 text-sm text-madmon-secondary-foreground">
            <Badge variant={"madmon-secondary"} className="p-1.5">
              <BedSingleIcon className="size-[18px]" />
            </Badge>
            {unit.bedroomsNumber} Rooms
          </div>
          <div className="flex items-center gap-2 text-sm text-madmon-secondary-foreground">
            <Badge variant={"madmon-secondary"} className="p-1.5">
              <BathIcon className="size-[18px]" />
            </Badge>
            {unit.bathroomsNumber} Bathroom
          </div>
          <div className="flex items-center gap-2 text-sm text-madmon-secondary-foreground">
            <Badge variant={"madmon-secondary"} className="p-1.5">
              <RiRuler2Line className="size-[18px]" />
            </Badge>
            {unit.space} m
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          {unit.status.toLowerCase() === "reserved" && (
            <div className="flex items-center gap-2 text-sm text-madmon-secondary-foreground">
              <Badge variant={"madmon-secondary"} className="p-1.5">
                <UserIcon className="size-[18px]" />
              </Badge>
              Mohamed Sami
            </div>
          )}
          <Button
            variant="madmon-outline"
            size={"madmon-lg"}
            className={cn({
              "opacity-0 pointer-events-none":
                unit.status.toLowerCase() === "reserved" ||
                (unit.status.toLowerCase() !== "rejected" &&
                  unit.status.toLowerCase() !== "approved"),
            })}
          >
            {unit.status.toLowerCase() === "rejected"
              ? "Edit"
              : unit.status.toLowerCase() !== "reserved"
              ? "Assign a Broker"
              : ""}
          </Button>
          <p className="text-right text-madmon-secondary-foreground">
            <span className="font-medium">Added</span>
            <br />
            <span className="ml-1 text-madmon-secondary-foreground">
              {new Date(unit.createdAt).toLocaleDateString()}
            </span>
          </p>
        </div>
      </CardContent>
      {/* Delete button */}
      <button
        onClick={() => onDelete(unit.id)}
        className="group h-full w-[60px] bg-[#FF8A8A] hover:bg-red-400 transition-colors flex items-center justify-center"
      >
        <Trash2 className="h-5 w-5 text-white" />
      </button>
    </Card>
  );
}
