"use client";

import * as React from "react";
import { Button } from "@/components/ui/button/button";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export type SnippetVariant =
  | "default"
  | "mac"
  | "powershell"
  | "cmd"
  | "ubuntu"
  | "flat"
  | "bordered";

export interface SnippetProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  variant?: SnippetVariant;
  radius?: keyof typeof designRadius;
  symbol?: string;
  label?: string;
  showCopy?: boolean;
  onCopy?: () => void;
  className?: string;
}

const variantStyles: Record<
  SnippetVariant,
  { container: string; symbol: string; text: string; header?: React.ReactNode }
> = {
  default: {
    container:
      "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs",
    symbol: "text-sky-500 font-bold",
    text: "font-mono font-semibold text-zinc-900 dark:text-zinc-100",
  },
  flat: {
    container:
      "bg-zinc-100 dark:bg-zinc-800/60 border border-transparent text-zinc-900 dark:text-zinc-100",
    symbol: "text-zinc-400 font-medium",
    text: "font-mono font-semibold text-zinc-900 dark:text-zinc-100",
  },
  bordered: {
    container:
      "bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100",
    symbol: "text-sky-500 font-bold",
    text: "font-mono font-semibold text-zinc-900 dark:text-zinc-100",
  },
  mac: {
    container: "bg-[#1e1e1e] border border-zinc-800 text-zinc-100 shadow-lg",
    symbol: "text-emerald-400 font-bold",
    text: "font-mono font-semibold text-zinc-100",
    header: (
      <div className="flex items-center gap-1.5 mb-2 select-none">
        <span className="size-3 rounded-full bg-[#ff5f56] inline-block" />
        <span className="size-3 rounded-full bg-[#ffbd2e] inline-block" />
        <span className="size-3 rounded-full bg-[#27c93f] inline-block" />
      </div>
    ),
  },
  powershell: {
    container: "bg-[#012456] border border-blue-900 text-white shadow-md",
    symbol: "text-yellow-300 font-bold",
    text: "font-mono font-semibold text-white",
  },
  cmd: {
    container: "bg-black border border-zinc-800 text-zinc-100 shadow-md",
    symbol: "text-zinc-400 font-mono",
    text: "font-mono font-normal text-zinc-100",
  },
  ubuntu: {
    container: "bg-[#300a24] border border-[#5e2750] text-white shadow-md",
    symbol: "text-green-400 font-bold",
    text: "font-mono font-medium text-white",
  },
};

const defaultSymbols: Record<SnippetVariant, string> = {
  default: "import",
  flat: "$",
  bordered: "$",
  mac: "~",
  powershell: "PS C:\\>",
  cmd: "C:\\>",
  ubuntu: "user@ubuntu:~$",
};

const Snippet = React.forwardRef<HTMLDivElement, SnippetProps>(
  (
    {
      code,
      variant = "default",
      radius = "xl",
      symbol,
      label,
      showCopy = true,
      onCopy,
      className,
      ...props
    },
    ref,
  ) => {
    const styleConfig = variantStyles[variant] || variantStyles.default;
    const resolvedSymbol = symbol ?? defaultSymbols[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col p-4 transition-all duration-200",
          designRadius[radius],
          styleConfig.container,
          className,
        )}
        {...props}
      >
        {styleConfig.header}
        <div className="flex items-center justify-between gap-3 w-full">
          <div className="flex items-center gap-3 font-mono text-xs overflow-x-auto max-w-full">
            {variant === "default" && !symbol ? (
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-500 bg-sky-500/10 px-2 py-0.5 rounded-md select-none shrink-0">
                {label ?? "Import"}
              </span>
            ) : (
              <span
                className={cn(
                  "select-none shrink-0 text-xs font-mono",
                  styleConfig.symbol,
                )}
              >
                {resolvedSymbol}
              </span>
            )}
            <code className={cn("text-xs leading-relaxed", styleConfig.text)}>
              {code}
            </code>
          </div>

          {showCopy && (
            <Button
              isCopy
              copyText={code}
              onClick={onCopy}
              variant="flat"
              size="xs"
              radius="sm"
              className={cn(
                "border shrink-0",
                variant === "mac" ||
                  variant === "cmd" ||
                  variant === "ubuntu" ||
                  variant === "powershell"
                  ? "bg-white/10 hover:bg-white/20 text-white border-white/10"
                  : "border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700",
              )}
            />
          )}
        </div>
      </div>
    );
  },
);

Snippet.displayName = "Snippet";

export { Snippet };
