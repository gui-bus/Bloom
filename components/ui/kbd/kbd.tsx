import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const kbdVariants = cva(
  "inline-flex items-center justify-center font-mono font-medium select-none rounded-lg border transition-colors shadow-xs",
  {
    variants: {
      variant: {
        flat: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200/80 dark:border-zinc-700/80",
        bordered: "bg-transparent text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-700",
        solid: "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 border-transparent",
      },
      size: {
        sm: "h-5 min-w-[20px] px-1.5 text-[10px]",
        md: "h-6 min-w-[24px] px-2 text-xs",
        lg: "h-7 min-w-[28px] px-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "flat",
      size: "md",
    },
  }
);

export type KbdKey =
  | "command"
  | "cmd"
  | "shift"
  | "ctrl"
  | "option"
  | "alt"
  | "enter"
  | "delete"
  | "escape"
  | "tab"
  | "space text"
  | string;

const keySymbolMap: Record<string, string> = {
  command: "⌘",
  cmd: "⌘",
  shift: "⇧",
  ctrl: "⌃",
  option: "⌥",
  alt: "⌥",
  enter: "↵",
  delete: "⌫",
  escape: "Esc",
  tab: "⇥",
};

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {
  keys?: KbdKey[];
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, variant, size = "md", keys, children, ...props }, ref) => {
    const renderKeys = () => {
      if (keys && keys.length > 0) {
        return keys.map((k) => keySymbolMap[k.toLowerCase()] || k.toUpperCase()).join("");
      }
      return children;
    };

    return (
      <kbd
        ref={ref}
        className={cn(kbdVariants({ variant, size, className }))}
        {...props}
      >
        {renderKeys()}
      </kbd>
    );
  }
);
Kbd.displayName = "Kbd";

export { Kbd, kbdVariants };
