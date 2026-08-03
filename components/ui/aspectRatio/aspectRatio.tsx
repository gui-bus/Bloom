"use client";

import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { cn } from "@/lib/utils";

export type AspectRatioPreset =
  | "video"
  | "square"
  | "golden"
  | "cinema"
  | "portrait"
  | "ultrawide";

const ratioPresets: Record<AspectRatioPreset, number> = {
  video: 16 / 9,
  square: 1 / 1,
  golden: 1.618 / 1,
  cinema: 21 / 9,
  portrait: 4 / 5,
  ultrawide: 32 / 9,
};

export interface AspectRatioProps
  extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
  ratio?: number;
  preset?: AspectRatioPreset;
  isLoading?: boolean;
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(
  (
    { ratio, preset, isLoading = false, className, children, ...props },
    ref,
  ) => {
    const computedRatio = preset ? ratioPresets[preset] : (ratio ?? 16 / 9);

    return (
      <div
        className={cn("relative w-full overflow-hidden rounded-2xl", className)}
      >
        <AspectRatioPrimitive.Root ref={ref} ratio={computedRatio} {...props}>
          {isLoading && (
            <div className="absolute inset-0 z-10 bg-zinc-200 dark:bg-zinc-800 animate-pulse flex items-center justify-center">
              <div className="size-8 rounded-full border-2 border-zinc-400 border-t-transparent animate-spin" />
            </div>
          )}
          {children}
        </AspectRatioPrimitive.Root>
      </div>
    );
  },
);

AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;

export { AspectRatio };
