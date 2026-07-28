"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "circle" | "rectangle" | "text";
  radius?: keyof typeof designRadius;
  isLoaded?: boolean;
}

const variantStyles = {
  circle: "rounded-full aspect-square",
  rectangle: "",
  text: "h-4 w-full rounded-md",
};

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = "rectangle",
      radius = "lg",
      isLoaded = false,
      children,
      ...props
    },
    ref
  ) => {
    if (isLoaded) {
      return <>{children}</>;
    }

    return (
      <div
        ref={ref}
        role="status"
        aria-busy="true"
        aria-label="Loading..."
        className={cn(
          "animate-pulse bg-muted/70 shrink-0",
          variantStyles[variant],
          variant !== "circle" && designRadius[radius],
          className
        )}
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
