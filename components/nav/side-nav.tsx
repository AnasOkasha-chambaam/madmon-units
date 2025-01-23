import Link from "next/link";
import { cn } from "@/lib/utils";

export function SideNav() {
  return (
    <nav className="w-64 min-h-screen border-r bg-muted/10">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-1">
            <Link
              href="/account"
              className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              My Account
            </Link>
            <Link
              href="/units"
              className="block rounded-lg bg-muted px-4 py-2 text-sm font-medium"
            >
              My Units
            </Link>
            <Link
              href="/reservations"
              className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              My Reservations
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
