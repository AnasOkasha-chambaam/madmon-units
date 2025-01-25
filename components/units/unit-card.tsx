import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatPrice } from "@/lib/utils";
import { BathIcon, BedSingleIcon, Loader2, UserIcon } from "lucide-react";
import Image from "next/image";
import { RiRuler2Line } from "react-icons/ri";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { useTransition } from "react";
import { AddOrEditUnitDialog } from "./AddOrEditUnitDialog";

interface UnitCardProps {
  unit: TUnit;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}

export function UnitCard({ unit, onDelete, isDeleting }: UnitCardProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => {
      onDelete(unit.id);
    });
  };

  return (
    <Card className="relative bg-madmon-card flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-xl">
      {/* Image */}
      <div className="relative w-full lg:!w-60 h-48 lg:h-auto">
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
          // src={
          //   "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996"
          // }
          alt={unit.name}
          width={140}
          height={190}
          className="w-full xl:w-80 h-full object-cover"
        />
      </div>
      {/* Content */}
      <CardContent className="flex-1 p-4 sm:p-6">
        <CardHeader className="p-0 mb-4">
          <div className="flex max-sm:flex-col-reverse flex-row items-start justify-between">
            <div className="space-y-2 mb-2 sm:mb-0">
              <div className="flex lg:items-center items-start gap-2 flex-col lg:flex-row">
                <CardTitle className="font-normal max-lg:text-xl">
                  {unit.name}
                </CardTitle>
                <Badge
                  variant={`madmon-${unit.status.toLowerCase() as TUnitStatus}`}
                >
                  {unit.status[0].toUpperCase() + unit.status.slice(1)}
                </Badge>
              </div>
              <CardDescription className="text-sm lg:text-base text-madmon-secondary-foreground">
                {unit.address}
              </CardDescription>
            </div>
            <div className="text-left sm:text-right max-sm:text-right max-sm:w-full">
              <p className="font-semibold text-xl lg:text-2xl text-money">
                {formatPrice(unit.price).replace("EGP", "")}{" "}
                <span className="font-normal text-base">EGP</span>
              </p>
            </div>
          </div>
        </CardHeader>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 my-4">
          <div className="flex items-center text-sm text-madmon-secondary-foreground">
            <Badge variant={"madmon-secondary"} className="p-1.5 mr-2">
              <BedSingleIcon className="size-[18px]" />
            </Badge>
            {unit.bedroomsNumber} Rooms
          </div>
          <div className="flex items-center text-sm text-madmon-secondary-foreground">
            <Badge variant={"madmon-secondary"} className="p-1.5 mr-2">
              <BathIcon className="size-[18px]" />
            </Badge>
            {unit.bathroomsNumber} Bathroom
          </div>
          <div className="flex items-center text-sm text-madmon-secondary-foreground">
            <Badge variant={"madmon-secondary"} className="p-1.5 mr-2">
              <RiRuler2Line className="size-[18px]" />
            </Badge>
            {unit.space} m<sup>2</sup>
          </div>
        </div>

        <Separator className="my-2 sm:hidden" />

        <div className="mt-4 sm:mt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-0">
          {unit.status.toLowerCase() === "reserved" && (
            <div className="flex items-center text-sm text-madmon-secondary-foreground">
              <Badge variant={"madmon-secondary"} className="p-1.5 mr-2">
                <UserIcon className="size-[18px]" />
              </Badge>
              Mohamed Sami
            </div>
          )}
          {unit.status === "rejected" ? (
            <AddOrEditUnitDialog
              unit={{
                ...unit,
              }}
              trigger={
                <Button
                  variant="madmon-outline"
                  size={"madmon-lg"}
                  className={cn("max-sm:!w-full", {
                    "opacity-0 pointer-events-none":
                      unit.status.toLowerCase() === "reserved" ||
                      (unit.status.toLowerCase() !== "rejected" &&
                        unit.status.toLowerCase() !== "approved"),
                  })}
                >
                  Edit
                </Button>
              }
            />
          ) : (
            <Button
              variant="madmon-outline"
              size={"madmon-lg"}
              className={cn("max-sm:!w-full", {
                "opacity-0 pointer-events-none":
                  unit.status.toLowerCase() === "reserved" ||
                  (unit.status.toLowerCase() !== "rejected" &&
                    unit.status.toLowerCase() !== "approved"),
              })}
            >
              Assign a Broker
            </Button>
          )}
          <p className="text-left lg:text-right text-madmon-secondary-foreground">
            <span className="font-medium">Added</span>
            <br />
            <span className="ml-1 text-madmon-secondary-foreground">
              {new Date(unit.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </p>
        </div>
      </CardContent>
      {/* Delete button */}
      {unit.status !== "reserved" && (
        <Button
          onClick={() => handleDelete()}
          variant={"destructive"}
          className="h-auto rounded-none py-3 px-5"
          disabled={isDeleting || isPending}
        >
          {isPending ? (
            <Loader2 className="size-6 text-white" />
          ) : (
            <Image
              src={"/assets/icons/trash-icon.svg"}
              alt="trash"
              width={24}
              height={24}
              className="sm:size-6 text-white"
            />
          )}
        </Button>
      )}
    </Card>
  );
}
