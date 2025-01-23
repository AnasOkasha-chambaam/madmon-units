import { formatDistanceToNow } from "date-fns";
import { Bath, BedDouble, Ruler, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface UnitCardProps {
  unit: TUnit;
  onDelete: (id: string) => void;
}

export function UnitCard({ unit, onDelete }: UnitCardProps) {
  const statusColor =
    {
      approved: "bg-green-500",
      pending: "bg-blue-500",
      reserved: "bg-yellow-500",
      rejected: "bg-red-500",
      sold: "bg-purple-500",
    }[unit.status.toLowerCase()] || "bg-gray-500";

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3]">
          <img
            src={unit.coverUrl || "/placeholder.svg"}
            alt={unit.name}
            className="object-cover w-full h-full"
          />
          <Badge
            className={`absolute top-4 left-4 ${statusColor} text-white`}
            variant="secondary"
          >
            {unit.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">{unit.name}</h3>
              <p className="text-sm text-muted-foreground">{unit.address}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">
                {new Intl.NumberFormat("en-EG", {
                  style: "currency",
                  currency: "EGP",
                  maximumFractionDigits: 0,
                }).format(unit.price)}
              </p>
              <p className="text-xs text-muted-foreground">
                Added {formatDistanceToNow(new Date(unit.createdAt))} ago
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <BedDouble className="h-4 w-4" />
              {unit.bedroomsNumber} Rooms
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              {unit.bathroomsNumber} Bathroom
            </div>
            <div className="flex items-center gap-1">
              <Ruler className="h-4 w-4" />
              {unit.space} m²
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" className="w-[48%]">
          {unit.status === "pending" ? "Assign Broker" : "Edit"}
        </Button>
        <Button
          variant="destructive"
          className="w-[48%]"
          onClick={() => onDelete(unit.id)}
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
