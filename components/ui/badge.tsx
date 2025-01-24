import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        "madmon-approved":
          "font-medium rounded-md min-w-20 justify-center border-transparent bg-badge-approved text-white hover:bg-badge-approved/80",
        "madmon-pending":
          "font-medium rounded-md min-w-20 justify-center border-transparent bg-badge-pending text-white hover:bg-badge-pending/80",
        "madmon-reserved":
          "font-medium rounded-md min-w-20 justify-center border-transparent bg-badge-reserved text-white hover:bg-badge-reserved/80",
        "madmon-rejected":
          "font-medium rounded-md min-w-20 justify-center border-transparent bg-badge-rejected text-white hover:bg-badge-rejected/80",
        "madmon-sold":
          "font-medium rounded-md min-w-20 justify-center border-transparent bg-badge-sold text-white hover:bg-badge-sold/80",
        "madmon-secondary":
          "font-medium rounded-md justify-center border-button-primary bg-white text-button-primary hover:bg-secondary/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
