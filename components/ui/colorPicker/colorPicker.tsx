"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ColorPickerProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (color: string) => void;
  presets?: string[];
  label?: React.ReactNode;
  disabled?: boolean;
}

const defaultPresets = [
  "#000000",
  "#6b7280",
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#10b981",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#ffffff",
];

export function ColorPicker({
  value,
  defaultValue = "#3b82f6",
  onValueChange,
  presets = defaultPresets,
  label,
  disabled = false,
}: ColorPickerProps) {
  const [color, setColor] = React.useState<string>(
    value !== undefined ? value : defaultValue
  );

  React.useEffect(() => {
    if (value !== undefined) {
      setColor(value);
    }
  }, [value]);

  const handleChange = (newColor: string) => {
    setColor(newColor);
    onValueChange?.(newColor);
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      {label && <label className="text-xs font-semibold text-foreground/90 select-none">{label}</label>}
      <div className="flex items-center gap-3">
        <div className="relative size-10 rounded-xl overflow-hidden border border-input shadow-xs shrink-0 cursor-pointer">
          <input
            type="color"
            value={color}
            disabled={disabled}
            onChange={(e) => handleChange(e.target.value)}
            className="absolute -top-2 -left-2 size-14 cursor-pointer outline-none border-0"
          />
        </div>
        <input
          type="text"
          value={color}
          disabled={disabled}
          onChange={(e) => handleChange(e.target.value)}
          className="h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-xs font-mono text-foreground uppercase outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      {presets && presets.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {presets.map((presetColor) => (
            <button
              key={presetColor}
              type="button"
              disabled={disabled}
              onClick={() => handleChange(presetColor)}
              style={{ backgroundColor: presetColor }}
              className={cn(
                "size-5 rounded-full border border-border/40 transition-transform hover:scale-115 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring",
                color.toLowerCase() === presetColor.toLowerCase() && "ring-2 ring-primary ring-offset-2"
              )}
              aria-label={`Select color ${presetColor}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
