"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type SwatchShape = "circle" | "square";
type SwatchSize = "sm" | "md" | "lg";

export interface ColorItem {
  color: string;
  name?: string;
}

export interface ColorSwatchesProps {
  colors: (string | ColorItem)[];
  value?: string;
  onChange?: (color: string) => void;
  isMulti?: boolean;
  multiValue?: string[];
  onMultiChange?: (colors: string[]) => void;
  maxLimit?: number;
  showTooltip?: boolean;
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

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleaned = hex.replace("#", "").trim();
  if (cleaned.length === 3) {
    const r = parseInt(cleaned[0] + cleaned[0], 16);
    const g = parseInt(cleaned[1] + cleaned[1], 16);
    const b = parseInt(cleaned[2] + cleaned[2], 16);
    return { r, g, b };
  }
  if (cleaned.length === 6) {
    const bigint = parseInt(cleaned, 16);
    if (Number.isNaN(bigint)) return null;
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  }
  return null;
}

function getLuminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrastRatio(hex: string): {
  ratio: string;
  score: "AAA" | "AA" | "Fail";
} {
  const rgb = hexToRgb(hex);
  if (!rgb) return { ratio: "1.0:1", score: "Fail" };

  const lumBg = getLuminance(rgb.r, rgb.g, rgb.b);
  const lumWhite = getLuminance(255, 255, 255);
  const lumDark = getLuminance(24, 24, 27);

  const ratioWhite =
    (Math.max(lumBg, lumWhite) + 0.05) / (Math.min(lumBg, lumWhite) + 0.05);
  const ratioDark =
    (Math.max(lumBg, lumDark) + 0.05) / (Math.min(lumBg, lumDark) + 0.05);
  const bestRatio = Math.max(ratioWhite, ratioDark);

  let score: "AAA" | "AA" | "Fail" = "Fail";
  if (bestRatio >= 7) score = "AAA";
  else if (bestRatio >= 4.5) score = "AA";

  return {
    ratio: `${bestRatio.toFixed(1)}:1`,
    score,
  };
}

export function ColorSwatches({
  colors,
  value,
  onChange,
  isMulti = false,
  multiValue = [],
  onMultiChange,
  maxLimit,
  showTooltip = true,
  size = "md",
  shape = "circle",
  className,
}: ColorSwatchesProps) {
  const handleSelect = (colorHex: string) => {
    if (isMulti) {
      if (multiValue.includes(colorHex)) {
        onMultiChange?.(multiValue.filter((c) => c !== colorHex));
      } else {
        if (maxLimit && multiValue.length >= maxLimit) return;
        onMultiChange?.([...multiValue, colorHex]);
      }
    } else {
      onChange?.(colorHex);
    }
  };

  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {colors.map((item) => {
        const hex = typeof item === "string" ? item : item.color;
        const name = typeof item === "string" ? hex : (item.name ?? hex);
        const isSelected = isMulti ? multiValue.includes(hex) : value === hex;
        const isMaxReached =
          isMulti && maxLimit && multiValue.length >= maxLimit && !isSelected;
        const { ratio, score } = getContrastRatio(hex);

        return (
          <div key={hex} className="relative group">
            <button
              type="button"
              disabled={Boolean(isMaxReached)}
              onClick={() => handleSelect(hex)}
              className={cn(
                "relative flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none cursor-pointer",
                sizeMap[size],
                shape === "circle" ? "rounded-full" : "rounded-xl",
                isSelected &&
                  "ring-2 ring-sky-500 ring-offset-2 dark:ring-offset-zinc-900 shadow-md",
                isMaxReached && "opacity-30 cursor-not-allowed hover:scale-100",
              )}
              style={{ backgroundColor: hex }}
              aria-label={`Select color ${name}`}
            >
              {isSelected && (
                <Icon
                  icon="hugeicons:checkmark-circle-02"
                  className={cn(
                    checkSize[size],
                    "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]",
                  )}
                />
              )}
            </button>

            {showTooltip && (
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-30">
                <div className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[11px] font-medium py-1.5 px-2.5 rounded-lg shadow-xl border border-zinc-800 dark:border-zinc-200 whitespace-nowrap gap-0.5 flex flex-col items-center">
                  <span className="font-semibold">{name}</span>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 dark:text-zinc-500">
                    <span>{hex.toUpperCase()}</span>
                    <span>•</span>
                    <span className="font-mono">{ratio}</span>
                    <span
                      className={cn(
                        "px-1 py-0.2 rounded text-[9px] font-bold uppercase",
                        score === "AAA" &&
                          "bg-emerald-500/20 text-emerald-400 dark:text-emerald-600",
                        score === "AA" &&
                          "bg-sky-500/20 text-sky-400 dark:text-sky-600",
                        score === "Fail" &&
                          "bg-rose-500/20 text-rose-400 dark:text-rose-600",
                      )}
                    >
                      {score}
                    </span>
                  </div>
                </div>
                <div className="w-2 h-2 -mt-1 rotate-45 bg-zinc-900 dark:bg-zinc-100" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
