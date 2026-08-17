"use client";

import { Icon } from "@iconify/react";
import React from "react";
import { cn } from "@/lib/utils";

export type BannerRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export interface AnnouncementItem {
  id: string | number;
  content: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  position?: "static" | "sticky-top" | "sticky-bottom";
  radius?: BannerRadius;
  announcements?: AnnouncementItem[];
  storageKey?: string;
  isDismissible?: boolean;
  onDismiss?: () => void;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  hideIcon?: boolean;
  customIcon?: React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showProgress?: boolean;
}

const radiusMap: Record<BannerRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

export function Banner({
  children,
  variant = "default",
  position = "static",
  radius = "2xl",
  announcements,
  storageKey,
  isDismissible,
  onDismiss,
  action,
  icon,
  hideIcon = false,
  customIcon,
  autoPlay = false,
  autoPlayInterval = 4000,
  showProgress = false,
  className,
  ...props
}: BannerProps) {
  const [isDismissed, setIsDismissed] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

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

  const hasCarousel = announcements && announcements.length > 0;
  const count = announcements?.length ?? 0;

  const nextAnnouncement = React.useCallback(() => {
    if (hasCarousel) {
      setCurrentIndex((prev) => (prev + 1) % count);
      setProgress(0);
    }
  }, [hasCarousel, count]);

  const prevAnnouncement = React.useCallback(() => {
    if (hasCarousel) {
      setCurrentIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
      setProgress(0);
    }
  }, [hasCarousel, count]);

  React.useEffect(() => {
    if (!hasCarousel || !autoPlay || count <= 1) return;

    if (showProgress) {
      setProgress(0);
      const step = 50;
      const increment = (step / autoPlayInterval) * 100;
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + increment;
        });
      }, step);
      const advance = setTimeout(nextAnnouncement, autoPlayInterval);
      return () => {
        clearInterval(interval);
        clearTimeout(advance);
      };
    }

    const timer = setTimeout(nextAnnouncement, autoPlayInterval);
    return () => clearTimeout(timer);
  }, [
    hasCarousel,
    autoPlay,
    autoPlayInterval,
    count,
    currentIndex,
    showProgress,
    nextAnnouncement,
  ]);

  const handleDismiss = React.useCallback(() => {
    setIsDismissed(true);
    if (storageKey && typeof window !== "undefined") {
      localStorage.setItem(`bloom-banner-dismissed-${storageKey}`, "true");
    }
    onDismiss?.();
  }, [storageKey, onDismiss]);

  if (isDismissed) return null;

  const variantStyles = {
    default: {
      accent: "bg-zinc-500 dark:bg-zinc-400",
      icon: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
      progress: "bg-zinc-500",
      bg: "bg-white dark:bg-zinc-900",
      text: "text-zinc-500 dark:text-zinc-400",
    },
    primary: {
      accent: "bg-sky-500",
      icon: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
      progress: "bg-sky-500",
      bg: "bg-white dark:bg-zinc-900",
      text: "text-sky-600 dark:text-sky-400",
    },
    success: {
      accent: "bg-emerald-500",
      icon: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      progress: "bg-emerald-500",
      bg: "bg-white dark:bg-zinc-900",
      text: "text-emerald-600 dark:text-emerald-400",
    },
    warning: {
      accent: "bg-amber-500",
      icon: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      progress: "bg-amber-500",
      bg: "bg-white dark:bg-zinc-900",
      text: "text-amber-600 dark:text-amber-400",
    },
    danger: {
      accent: "bg-rose-500",
      icon: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      progress: "bg-rose-500",
      bg: "bg-white dark:bg-zinc-900",
      text: "text-rose-600 dark:text-rose-400",
    },
  };

  const positionStyles = {
    static: "relative",
    "sticky-top": "sticky top-0 z-40 rounded-none border-x-0 border-t-0",
    "sticky-bottom": "sticky bottom-0 z-40 rounded-none border-x-0 border-b-0",
  };

  const styles = variantStyles[variant];
  const isSticky = position !== "static";

  const currentAnnouncement = hasCarousel ? announcements[currentIndex] : null;
  const activeContent = currentAnnouncement
    ? currentAnnouncement.content
    : children;
  const activeIcon = currentAnnouncement
    ? (currentAnnouncement.icon ?? icon)
    : icon;
  const activeAction = currentAnnouncement
    ? (currentAnnouncement.action ?? action)
    : action;

  const resolvedIcon = customIcon ?? activeIcon;
  const showIconSlot = !hideIcon && resolvedIcon;

  return (
    <div
      className={cn(
        "relative flex items-center gap-3 overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300",
        styles.bg,
        isSticky ? positionStyles[position] : radiusMap[radius],
        !isSticky && "p-3 px-4",
        isSticky && "px-4 py-3",
        className,
      )}
      {...props}
    >
      <div
        className={cn("absolute bottom-0 left-0 top-0 w-[3px]", styles.accent)}
      />

      {showProgress && hasCarousel && count > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-100 dark:bg-zinc-800">
          <div
            className={cn("h-full transition-none", styles.progress)}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {showIconSlot && (
        <div
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-lg border",
            styles.icon,
          )}
        >
          {resolvedIcon}
        </div>
      )}

      <div className="flex-1 text-sm text-zinc-700 dark:text-zinc-300 leading-snug">
        {activeContent}
      </div>

      {hasCarousel && count > 1 && (
        <div
          className={cn(
            "flex items-center gap-0.5 shrink-0 text-xs font-mono",
            styles.text,
          )}
        >
          <button
            type="button"
            onClick={prevAnnouncement}
            className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Previous announcement"
          >
            <Icon icon="hugeicons:arrow-left-01" className="size-3.5" />
          </button>
          <span className="tabular-nums px-0.5">
            {currentIndex + 1}/{count}
          </span>
          <button
            type="button"
            onClick={nextAnnouncement}
            className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Next announcement"
          >
            <Icon icon="hugeicons:arrow-right-01" className="size-3.5" />
          </button>
        </div>
      )}

      {activeAction && <div className="flex-shrink-0 ml-1">{activeAction}</div>}

      {isDismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          className={cn(
            "flex-shrink-0 rounded-lg p-1.5 transition-colors cursor-pointer",
            "text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600",
            "dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
          )}
          aria-label="Dismiss banner"
        >
          <Icon icon="hugeicons:cancel-01" className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
