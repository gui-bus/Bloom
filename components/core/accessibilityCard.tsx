"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { Kbd } from "@/components/ui/kbd/kbd";

export interface ShortcutItem {
  key: string;
  description: string;
}

interface AccessibilityCardProps {
  shortcuts?: ShortcutItem[];
  ariaStandards?: string;
}

const defaultShortcuts: ShortcutItem[] = [
  { key: "Escape", description: "Closes the open panel, modal, or popover overlay." },
  { key: "Tab / Shift+Tab", description: "Navigates focus trapped within active container." },
  { key: "Space / Enter", description: "Triggers or toggles the focused interactive element." },
  { key: "Arrow Keys", description: "Navigates between menu options or accordion items." },
];

export function AccessibilityCard({
  shortcuts = defaultShortcuts,
  ariaStandards = "WAI-ARIA compliant with automatic focus trapping, ARIA roles, and keyboard navigation.",
}: AccessibilityCardProps) {
  return (
    <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs space-y-4">
      <div className="flex items-center gap-2.5">
        <div className="size-8 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
          <Icon icon="hugeicons:view" className="size-4.5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Accessibility & Keyboard Shortcuts</h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{ariaStandards}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {shortcuts.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50 dark:bg-zinc-800/40"
          >
            <Kbd size="sm" className="shrink-0 font-mono mt-0.5">
              {item.key}
            </Kbd>
            <span className="text-xs text-zinc-600 dark:text-zinc-300 leading-snug">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
