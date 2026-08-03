"use client";

import { Icon } from "@iconify/react";
import React from "react";
import { cn } from "@/lib/utils";

export interface AnnouncementItem {
  id: string | number;
  content: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  position?: "static" | "sticky-top" | "sticky-bottom";
  announcements?: AnnouncementItem[];
  storageKey?: string;
  isDismissible?: boolean;
  onDismiss?: () => void;
  action?: React.ReactNode;
  icon?: React.ReactNode;
}

export function Banner({
  children,
  variant = "default",
  position = "static",
  announcements,
  storageKey,
  isDismissible,
  onDismiss,
  action,
  icon,
  className,
  ...props
}: BannerProps) {
  const [isDismissed, setIsDismissed] = React.useState(false);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] =
    React.useState(0);

  React.useEffect(() => {
    if (storageKey && typeof window !== "undefined") {
      const dismissed = localStorage.getItem(
        `bloom-banner-dismissed-${storageKey}`,
      );
      if (dismissed === "true") {
        setIsDismissed(true);
      }
    }
  }, [storageKey]);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (storageKey && typeof window !== "undefined") {
      localStorage.setItem(`bloom-banner-dismissed-${storageKey}`, "true");
    }
    onDismiss?.();
  };

  if (isDismissed) return null;

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

  const positionStyles = {
    static: "relative",
    "sticky-top": "sticky top-0 z-40 rounded-none border-x-0 border-t-0",
    "sticky-bottom": "sticky bottom-0 z-40 rounded-none border-x-0 border-b-0",
  };

  const hasCarousel = announcements && announcements.length > 0;
  const currentAnnouncement = hasCarousel
    ? announcements[currentAnnouncementIndex]
    : null;

  const nextAnnouncement = () => {
    if (hasCarousel) {
      setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }
  };

  const prevAnnouncement = () => {
    if (hasCarousel) {
      setCurrentAnnouncementIndex((prev) =>
        prev === 0 ? announcements.length - 1 : prev - 1,
      );
    }
  };

  const activeContent = currentAnnouncement
    ? currentAnnouncement.content
    : children;
  const activeIcon = currentAnnouncement
    ? (currentAnnouncement.icon ?? icon)
    : icon;
  const activeAction = currentAnnouncement
    ? (currentAnnouncement.action ?? action)
    : action;

  return (
    <div
      className={cn(
        "flex items-center gap-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 py-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 transition-all duration-200",
        positionStyles[position],
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute bottom-0 left-0 top-0 w-[3px]",
          variantAccentStyles[variant],
        )}
      />

      {activeIcon && (
        <div className={cn("flex-shrink-0", variantIconStyles[variant])}>
          {activeIcon}
        </div>
      )}

      <div className="flex-1 text-sm text-zinc-700 dark:text-zinc-300">
        {activeContent}
      </div>

      {hasCarousel && announcements.length > 1 && (
        <div className="flex items-center gap-1 shrink-0 text-xs font-mono text-zinc-400">
          <button
            type="button"
            onClick={prevAnnouncement}
            className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Previous announcement"
          >
            <Icon icon="hugeicons:arrow-left-01" className="size-3.5" />
          </button>
          <span>
            {currentAnnouncementIndex + 1}/{announcements.length}
          </span>
          <button
            type="button"
            onClick={nextAnnouncement}
            className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Next announcement"
          >
            <Icon icon="hugeicons:arrow-right-01" className="size-3.5" />
          </button>
        </div>
      )}

      {activeAction && <div className="flex-shrink-0 ml-2">{activeAction}</div>}

      {isDismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          className="ml-2 flex-shrink-0 rounded-full p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors dark:hover:bg-zinc-800 dark:hover:text-zinc-300 cursor-pointer"
          aria-label="Dismiss banner"
        >
          <Icon icon="hugeicons:cancel-01" className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
