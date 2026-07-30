"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

type SwatchShape = "circle" | "square";
type SwatchSize = "sm" | "md" | "lg";

interface ColorSwatchesProps {
  colors: string[];
  value?: string;
  onChange?: (color: string) => void;
  size?: SwatchSize;
  shape?: SwatchShape;
  className?: string;
}

const sizeMap: Record<SwatchSize, string> = {
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
};

const checkSize: Record<SwatchSize, string> = {
  sm: "size-3",
  md: "size-4",
  lg: "size-5",
};

export function ColorSwatches({
  colors,
  value,
  onChange,
  size = "md",
  shape = "circle",
  className,
}: ColorSwatchesProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {colors.map((color) => {
        const isSelected = value === color;
        return (
          <button
            key={color}
            type="button"
            onClick={() => onChange?.(color)}
            className={cn(
              "relative flex items-center justify-center transition-transform hover:scale-110 focus:outline-none",
              sizeMap[size],
              shape === "circle" ? "rounded-full" : "rounded-lg",
              isSelected &&
                "ring-2 ring-sky-500 ring-offset-2 dark:ring-offset-zinc-900"
            )}
            style={{ backgroundColor: color }}
            title={color}
          >
            {isSelected && (
              <Icon
                icon="hugeicons:checkmark-circle-02"
                className={cn(
                  checkSize[size],
                  "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                )}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
