"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ColorPreset {
  name: string;
  hsl: string; // e.g. "204 94% 48%"
  hex: string; // e.g. "#0284c7"
  bgClass: string;
}

export const colorPresets: ColorPreset[] = [
  { name: "Sky", hsl: "199 89% 48%", hex: "#0284c7", bgClass: "bg-sky-600" },
  {
    name: "Emerald",
    hsl: "160 84% 39%",
    hex: "#059669",
    bgClass: "bg-emerald-600",
  },
  {
    name: "Violet",
    hsl: "263 70% 50%",
    hex: "#7c3aed",
    bgClass: "bg-violet-600",
  },
  { name: "Rose", hsl: "347 77% 50%", hex: "#e11d48", bgClass: "bg-rose-600" },
  { name: "Amber", hsl: "38 92% 50%", hex: "#d97706", bgClass: "bg-amber-600" },
  {
    name: "Indigo",
    hsl: "239 84% 67%",
    hex: "#4f46e5",
    bgClass: "bg-indigo-600",
  },
];

export interface RadiusPreset {
  name: string;
  value: string;
}

export const radiusPresets: RadiusPreset[] = [
  { name: "0", value: "0px" },
  { name: "sm", value: "0.375rem" },
  { name: "md", value: "0.5rem" },
  { name: "lg", value: "0.75rem" },
  { name: "xl", value: "1rem" },
  { name: "full", value: "9999px" },
];

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(colorPresets[0]);
  const [selectedRadius, setSelectedRadius] = React.useState(radiusPresets[3]);
  const [copied, setCopied] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Apply CSS variables dynamically to :root
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary", selectedColor.hsl);
    root.style.setProperty("--radius", selectedRadius.value);
  }, [selectedColor, selectedRadius]);

  const cssSnippet = `:root {
  --primary: ${selectedColor.hsl};
  --radius: ${selectedRadius.value};
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center gap-2 py-2 px-3 mb-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 hover:border-sky-500/50 hover:bg-sky-500/5 text-xs font-bold transition-all duration-200 shadow-2xs cursor-pointer active:scale-[0.98]"
      >
        <Icon
          icon="hugeicons:paint-board"
          className="size-4 text-sky-500 shrink-0"
        />
        <span>Customize Theme</span>
      </button>

      {/* Slide-over Drawer Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity animate-in fade-in-0"
        />
      )}

      {/* Theme Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 p-6 z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center">
                <Icon icon="hugeicons:paint-board" className="size-4.5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  Theme Customizer
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Real-time design token customizer
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <Icon icon="hugeicons:cancel-01" className="size-5" />
            </button>
          </div>

          {/* Color Presets */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Primary Brand Accent
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {colorPresets.map((preset) => {
                const isSelected = selectedColor.name === preset.name;
                return (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => setSelectedColor(preset)}
                    className={cn(
                      "flex items-center gap-2 p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer",
                      isSelected
                        ? "border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 font-bold shadow-2xs"
                        : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300",
                    )}
                  >
                    <span
                      className={cn(
                        "size-3.5 rounded-full shrink-0",
                        preset.bgClass,
                      )}
                    />
                    <span>{preset.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Border Radius */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Border Radius (`radius`)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {radiusPresets.map((preset) => {
                const isSelected = selectedRadius.name === preset.name;
                return (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => setSelectedRadius(preset)}
                    className={cn(
                      "py-2 px-3 rounded-xl border text-xs font-mono font-semibold transition-all cursor-pointer text-center",
                      isSelected
                        ? "border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 font-bold shadow-2xs"
                        : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300",
                    )}
                  >
                    {preset.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme Mode */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Appearance Mode
            </label>
            <div className="flex items-center gap-2 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                  resolvedTheme === "light"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-2xs"
                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300",
                )}
              >
                <Icon icon="hugeicons:sun-01" className="size-4" />
                <span>Light</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                  resolvedTheme === "dark"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-2xs"
                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300",
                )}
              >
                <Icon icon="hugeicons:moon-01" className="size-4" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Live Preview Box */}
          <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 space-y-3">
            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 block">
              Live Component Preview
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                style={{ borderRadius: selectedRadius.value }}
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition-all",
                  selectedColor.bgClass,
                )}
              >
                Button Accent
              </button>
              <span
                style={{ borderRadius: selectedRadius.value }}
                className="px-2.5 py-1 text-xs font-medium border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
              >
                Badge Component
              </span>
            </div>
          </div>
        </div>

        {/* Copy CSS Snippet Footer */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold shadow-md hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all cursor-pointer active:scale-[0.98]"
          >
            <Icon
              icon={
                copied ? "hugeicons:checkmark-circle-02" : "hugeicons:copy-01"
              }
              className="size-4"
            />
            <span>
              {copied ? "CSS Variables Copied!" : "Copy CSS Variables"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
