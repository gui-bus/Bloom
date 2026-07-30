export const bannerCode = `
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  isDismissible?: boolean;
  onDismiss?: () => void;
  action?: React.ReactNode;
  icon?: React.ReactNode;
}

export function Banner({
  children,
  variant = "default",
  isDismissible,
  onDismiss,
  action,
  icon,
  className,
  ...props
}: BannerProps) {
  const variantAccentStyles = {
    default: "bg-zinc-500 dark:bg-zinc-400",
    primary: "bg-sky-500",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-rose-500",
  };

  const variantIconStyles = {
    default: "text-zinc-500 dark:text-zinc-400",
    primary: "text-sky-500",
    success: "text-emerald-500",
    warning: "text-amber-500",
    danger: "text-rose-500",
  };

  return (
    <div
      className={cn(
        "relative flex items-center gap-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 py-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute bottom-0 left-0 top-0 w-[3px]",
          variantAccentStyles[variant]
        )}
      />

      {icon && (
        <div className={cn("flex-shrink-0", variantIconStyles[variant])}>
          {icon}
        </div>
      )}

      <div className="flex-1 text-sm text-zinc-700 dark:text-zinc-300">
        {children}
      </div>

      {action && <div className="flex-shrink-0 ml-2">{action}</div>}

      {isDismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className="ml-2 flex-shrink-0 rounded-full p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
          aria-label="Dismiss banner"
        >
          <Icon icon="hugeicons:cancel-01" className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
`;
