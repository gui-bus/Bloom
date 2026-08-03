"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

// ─── Color conversion utilities ───
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleaned = hex.replace("#", "");
  const bigint = parseInt(cleaned, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function rgbToHsl(
  r: number,
  g: number,
  b: number,
): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToRgb(
  h: number,
  s: number,
  l: number,
): { r: number; g: number; b: number } {
  h /= 360;
  s /= 100;
  l /= 100;

  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

// ─── Types ───
export type ColorFormat = "hex" | "rgb" | "hsl";

export interface ColorPickerProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (color: string) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  showWheel?: boolean;
  showFormatSwitcher?: boolean;
  defaultFormat?: ColorFormat;
}

// ─── Color Wheel sub-component ───
function ColorWheel({
  value,
  onChange,
  size = 180,
  disabled = false,
}: {
  value: string;
  onChange: (hex: string) => void;
  size?: number;
  disabled?: boolean;
}) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 4;

    ctx.clearRect(0, 0, size, size);

    for (let angle = 0; angle < 360; angle++) {
      const startAngle = ((angle - 1) * Math.PI) / 180;
      const endAngle = ((angle + 1) * Math.PI) / 180;

      for (let sat = 0; sat <= 100; sat += 2) {
        const innerRadius = (sat / 100) * radius;
        const outerRadius = ((sat + 2) / 100) * radius;
        ctx.beginPath();
        ctx.arc(centerX, centerY, innerRadius, startAngle, endAngle);
        ctx.arc(centerX, centerY, outerRadius, endAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = `hsl(${angle}, ${sat}%, 50%)`;
        ctx.fill();
      }
    }

    const rgb = hexToRgb(value);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const angleRad = (hsl.h * Math.PI) / 180;
    const dist = (hsl.s / 100) * radius;
    const selectorX = centerX + dist * Math.cos(angleRad);
    const selectorY = centerY + dist * Math.sin(angleRad);

    ctx.beginPath();
    ctx.arc(selectorX, selectorY, 8, 0, 2 * Math.PI);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(selectorX, selectorY, 9.5, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(0,0,0,0.25)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }, [value, size]);

  const pickColor = React.useCallback(
    (
      e:
        | React.MouseEvent<HTMLCanvasElement>
        | React.TouchEvent<HTMLCanvasElement>,
    ) => {
      if (disabled) return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = size / 2;
      const centerY = size / 2;
      const radius = size / 2 - 4;

      const dx = x - centerX;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= radius) {
        let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        if (angle < 0) angle += 360;
        const saturation = Math.min((dist / radius) * 100, 100);

        const rgb = hslToRgb(Math.round(angle), Math.round(saturation), 50);
        onChange(rgbToHex(rgb.r, rgb.g, rgb.b));
      }
    },
    [disabled, size, onChange],
  );

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={cn(
        "rounded-full cursor-crosshair select-none touch-none",
        disabled && "opacity-50 pointer-events-none",
      )}
      onMouseDown={(e) => {
        setIsDragging(true);
        pickColor(e);
      }}
      onMouseMove={(e) => isDragging && pickColor(e)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={(e) => {
        setIsDragging(true);
        pickColor(e);
      }}
      onTouchMove={(e) => isDragging && pickColor(e)}
      onTouchEnd={() => setIsDragging(false)}
    />
  );
}

// ─── Main ColorPicker ───
export function ColorPicker({
  value,
  defaultValue = "#3b82f6",
  onValueChange,
  label,
  disabled = false,
  showWheel = false,
  showFormatSwitcher = true,
  defaultFormat = "hex",
}: ColorPickerProps) {
  const [color, setColor] = React.useState<string>(
    value !== undefined ? value : defaultValue,
  );
  const [format, setFormat] = React.useState<ColorFormat>(defaultFormat);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (value !== undefined) {
      setColor(value);
    }
  }, [value]);

  const handleChange = (newColor: string) => {
    setColor(newColor);
    onValueChange?.(newColor);
  };

  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  const formatDisplay = () => {
    switch (format) {
      case "rgb":
        return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
      case "hsl":
        return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
      default:
        return color.toUpperCase();
    }
  };

  const formatLabel = () => {
    switch (format) {
      case "rgb":
        return "RGB";
      case "hsl":
        return "HSL";
      default:
        return "HEX";
    }
  };

  const handleTextChange = (text: string) => {
    if (format === "hex") {
      const cleaned = text.replace(/[^#0-9a-fA-F]/g, "");
      const hex = cleaned.startsWith("#") ? cleaned : `#${cleaned}`;
      if (hex.length === 7 && /^#[0-9a-fA-F]{6}$/.test(hex)) {
        handleChange(hex.toLowerCase());
      }
    } else if (format === "rgb") {
      const match = text.match(/(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/);
      if (match) {
        const [, rs, gs, bs] = match;
        const r = Math.min(255, parseInt(rs, 10));
        const g = Math.min(255, parseInt(gs, 10));
        const b = Math.min(255, parseInt(bs, 10));
        handleChange(rgbToHex(r, g, b));
      }
    } else if (format === "hsl") {
      const match = text.match(/(\d{1,3})\s*,\s*(\d{1,3})%?\s*,\s*(\d{1,3})%?/);
      if (match) {
        const [, hs, ss, ls] = match;
        const h = Math.min(360, parseInt(hs, 10));
        const s = Math.min(100, parseInt(ss, 10));
        const l = Math.min(100, parseInt(ls, 10));
        const converted = hslToRgb(h, s, l);
        handleChange(rgbToHex(converted.r, converted.g, converted.b));
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatDisplay());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const formats: ColorFormat[] = ["hex", "rgb", "hsl"];

  const cycleFormat = () => {
    const idx = formats.indexOf(format);
    setFormat(formats[(idx + 1) % formats.length]);
  };

  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      {label && (
        <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
          {label}
        </label>
      )}

      {showWheel && (
        <div className="flex justify-center">
          <ColorWheel
            value={color}
            onChange={handleChange}
            disabled={disabled}
          />
        </div>
      )}

      <div className="flex items-center gap-2.5">
        <div className="relative size-10 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xs shrink-0 cursor-pointer">
          <input
            type="color"
            value={color}
            disabled={disabled}
            onChange={(e) => handleChange(e.target.value)}
            className="absolute -top-2 -left-2 size-14 cursor-pointer outline-none border-0"
          />
        </div>

        <div className="flex items-center flex-1">
          {showFormatSwitcher && (
            <button
              type="button"
              disabled={disabled}
              onClick={cycleFormat}
              className="h-10 px-2.5 rounded-l-xl border border-r-0 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formatLabel()}
            </button>
          )}
          <input
            type="text"
            value={formatDisplay()}
            disabled={disabled}
            onChange={(e) => handleTextChange(e.target.value)}
            className={cn(
              "h-10 w-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-xs font-mono text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-sky-500/40 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed",
              showFormatSwitcher ? "border-l-0" : "rounded-l-xl",
            )}
          />
          <button
            type="button"
            disabled={disabled}
            onClick={handleCopy}
            className="h-10 px-3 rounded-r-xl border border-l-0 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Copy color code"
          >
            <Icon
              icon={copied ? "hugeicons:tick-02" : "hugeicons:copy-01"}
              className={cn("size-3.5", copied && "text-emerald-500")}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
