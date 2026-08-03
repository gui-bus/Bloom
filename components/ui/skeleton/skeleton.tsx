"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "circle" | "rectangle" | "text";
  radius?: keyof typeof designRadius;
  animation?: "pulse" | "shimmer" | "none";
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
      animation = "pulse",
      isLoaded = false,
      children,
      ...props
    },
    ref,
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
          "bg-zinc-200 dark:bg-zinc-800 shrink-0 relative overflow-hidden",
          animation === "pulse" && "animate-pulse",
          variantStyles[variant],
          variant !== "circle" && designRadius[radius],
          className,
        )}
        {...props}
      >
        {animation === "shimmer" && (
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent pointer-events-none" />
        )}
        <span className="sr-only">Loading...</span>
      </div>
    );
  },
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
