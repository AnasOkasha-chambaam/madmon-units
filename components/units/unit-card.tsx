import { formatDistanceToNow } from "date-fns";
import { Bath, BedDouble, Ruler, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface UnitCardProps {
  unit: TUnit;
  onDelete: (id: string) => void;
}

export function UnitCard({ unit, onDelete }: UnitCardProps) {
  const statusConfig = {
    approved: { color: "bg-green-500", label: "Approved" },
    pending: { color: "bg-[#7666F9]", label: "Pending" },
    reserved: { color: "bg-blue-500", label: "Reserved" },
    rejected: { color: "bg-red-500", label: "Rejected" },
    sold: { color: "bg-purple-500", label: "Sold" },
  }[unit.status.toLowerCase()] || { color: "bg-gray-500", label: unit.status };

  return (
    <div className="relative flex bg-white rounded-lg overflow-hidden">
      <div className="relative w-[240px] h-[180px]">
        {unit.status.toLowerCase() === "reserved" && (
          <div className="absolute left-0 top-4 bg-blue-500 text-white px-4 py-1 text-sm font-medium">
            Reserved
          </div>
        )}
        <img
          src={unit.coverUrl || "/placeholder.svg"}
          alt={unit.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">{unit.name}</h3>
              <Badge
                className={`${statusConfig.color} text-white border-0`}
                variant="secondary"
              >
                {statusConfig.label}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{unit.address}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-2xl text-red-500">
              {new Intl.NumberFormat("en-EG", {
                style: "currency",
                currency: "EGP",
                maximumFractionDigits: 0,
              }).format(unit.price)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Added {formatDistanceToNow(new Date(unit.createdAt))} ago
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center">
              <BedDouble className="h-4 w-4 text-blue-500" />
            </div>
            {unit.bedroomsNumber} Rooms
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center">
              <Bath className="h-4 w-4 text-blue-500" />
            </div>
            {unit.bathroomsNumber} Bathroom
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center">
              <Ruler className="h-4 w-4 text-blue-500" />
            </div>
            {unit.space} m
          </div>
        </div>

        <Button variant="outline" className="w-full bg-white hover:bg-gray-50">
          {unit.status.toLowerCase() === "pending" ? "Assign a Broker" : "Edit"}
        </Button>
      </div>

      <button
        onClick={() => onDelete(unit.id)}
        className="group h-full w-[60px] bg-[#FF8A8A] hover:bg-red-400 transition-colors flex items-center justify-center"
      >
        <Trash2 className="h-5 w-5 text-white" />
      </button>
    </div>
  );
}
