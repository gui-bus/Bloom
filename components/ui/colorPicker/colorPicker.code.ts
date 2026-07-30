export const colorPickerCode = `"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

// ─── Color conversion utilities ───
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleaned = hex.replace("#", "");
  const bigint = parseInt(cleaned, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

function rgbToHex(r: number, g: number, b: number): string {
  return \`#\${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}\`;
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360; s /= 100; l /= 100;
  let r: number, g: number, b: number;
  if (s === 0) { r = g = b = l; } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1; if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1/3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

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

function ColorWheel({ value, onChange, size = 180, disabled = false }: {
  value: string; onChange: (hex: string) => void; size?: number; disabled?: boolean;
}) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const center = size / 2, radius = size / 2 - 4;
    ctx.clearRect(0, 0, size, size);
    for (let angle = 0; angle < 360; angle++) {
      const start = ((angle - 1) * Math.PI) / 180;
      const end = ((angle + 1) * Math.PI) / 180;
      for (let sat = 0; sat <= 100; sat += 2) {
        ctx.beginPath();
        ctx.arc(center, center, (sat / 100) * radius, start, end);
        ctx.arc(center, center, ((sat + 2) / 100) * radius, end, start, true);
        ctx.closePath();
        ctx.fillStyle = \`hsl(\${angle}, \${sat}%, 50%)\`;
        ctx.fill();
      }
    }
    // Draw selector
    const rgb = hexToRgb(value);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const angleRad = (hsl.h * Math.PI) / 180;
    const dist = (hsl.s / 100) * radius;
    const sx = center + dist * Math.cos(angleRad);
    const sy = center + dist * Math.sin(angleRad);
    ctx.beginPath(); ctx.arc(sx, sy, 8, 0, 2 * Math.PI);
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 2.5; ctx.stroke();
  }, [value, size]);

  const pickColor = React.useCallback((e: any) => {
    if (disabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const cx = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const cy = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top;
    const center = size / 2, radius = size / 2 - 4;
    const dx = cx - center, dy = cy - center;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist <= radius) {
      let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      if (angle < 0) angle += 360;
      const sat = Math.min((dist / radius) * 100, 100);
      const rgb = hslToRgb(Math.round(angle), Math.round(sat), 50);
      onChange(rgbToHex(rgb.r, rgb.g, rgb.b));
    }
  }, [disabled, size, onChange]);

  return (
    <canvas ref={canvasRef} width={size} height={size}
      className={cn("rounded-full cursor-crosshair select-none touch-none", disabled && "opacity-50 pointer-events-none")}
      onMouseDown={(e) => { setIsDragging(true); pickColor(e); }}
      onMouseMove={(e) => isDragging && pickColor(e)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)} />
  );
}

export function ColorPicker({
  value, defaultValue = "#3b82f6", onValueChange, label,
  disabled = false, showWheel = false, showFormatSwitcher = true, defaultFormat = "hex",
}: ColorPickerProps) {
  const [color, setColor] = React.useState(value ?? defaultValue);
  const [format, setFormat] = React.useState<ColorFormat>(defaultFormat);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => { if (value !== undefined) setColor(value); }, [value]);

  const handleChange = (c: string) => { setColor(c); onValueChange?.(c); };
  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  const formatDisplay = () => {
    switch (format) {
      case "rgb": return \`rgb(\${rgb.r}, \${rgb.g}, \${rgb.b})\`;
      case "hsl": return \`hsl(\${hsl.h}, \${hsl.s}%, \${hsl.l}%)\`;
      default: return color.toUpperCase();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatDisplay());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const cycleFormat = () => {
    const fmts: ColorFormat[] = ["hex", "rgb", "hsl"];
    setFormat(fmts[(fmts.indexOf(format) + 1) % fmts.length]);
  };

  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      {label && <label className="text-xs font-semibold select-none">{label}</label>}
      {showWheel && <div className="flex justify-center"><ColorWheel value={color} onChange={handleChange} disabled={disabled} /></div>}
      <div className="flex items-center gap-2.5">
        <div className="relative size-10 rounded-xl overflow-hidden border shadow-xs shrink-0 cursor-pointer">
          <input type="color" value={color} disabled={disabled} onChange={(e) => handleChange(e.target.value)}
            className="absolute -top-2 -left-2 size-14 cursor-pointer outline-none border-0" />
        </div>
        <div className="flex items-center flex-1">
          {showFormatSwitcher && (
            <button type="button" disabled={disabled} onClick={cycleFormat}
              className="h-10 px-2.5 rounded-l-xl border border-r-0 bg-zinc-50 dark:bg-zinc-800 text-[10px] font-bold uppercase text-zinc-500 cursor-pointer select-none">
              {format.toUpperCase()}
            </button>
          )}
          <input type="text" value={formatDisplay()} disabled={disabled}
            className={cn("h-10 w-full border px-3 py-2 text-xs font-mono outline-none focus:ring-2 focus:ring-sky-500/40",
              showFormatSwitcher ? "border-l-0" : "rounded-l-xl")} />
          <button type="button" disabled={disabled} onClick={handleCopy}
            className="h-10 px-3 rounded-r-xl border border-l-0 bg-zinc-50 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-700 cursor-pointer"
            aria-label="Copy color code">
            <Icon icon={copied ? "hugeicons:tick-02" : "hugeicons:copy-01"} className={cn("size-3.5", copied && "text-emerald-500")} />
          </button>
        </div>
      </div>
    </div>
  );
}
`;
