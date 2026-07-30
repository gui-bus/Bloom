"use client";

import * as React from "react";
import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface ToastProps {
  theme?: "light" | "dark" | "system";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
}

export function Toast({ theme = "system", position = "bottom-right" }: ToastProps) {
  return (
    <SonnerToaster
      theme={theme}
      position={position}
      toastOptions={{
        style: {
          background: "transparent",
          border: "none",
          boxShadow: "none",
          padding: 0,
        },
      }}
    />
  );
}

export interface ToastOptions {
  description?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
}

const createCustomToast = (
  type: "success" | "error" | "warning" | "info" | "default",
  title: React.ReactNode,
  options?: ToastOptions
) => {
  const iconMap = {
    success: {
      icon: "hugeicons:checkmark-circle-02",
      bg: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      bar: "bg-emerald-500",
    },
    error: {
      icon: "hugeicons:cancel-circle-02",
      bg: "bg-rose-500/10 text-rose-500 border-rose-500/20",
      bar: "bg-rose-500",
    },
    warning: {
      icon: "hugeicons:alert-circle",
      bg: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      bar: "bg-amber-500",
    },
    info: {
      icon: "hugeicons:information-circle",
      bg: "bg-sky-500/10 text-sky-500 border-sky-500/20",
      bar: "bg-sky-500",
    },
    default: {
      icon: "hugeicons:notification-01",
      bg: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
      bar: "bg-zinc-400 dark:bg-zinc-600",
    },
  };

  const style = iconMap[type];

  return sonnerToast.custom((t) => (
    <div
      className={cn(
        "relative flex items-start gap-3.5 w-80 max-w-sm p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl text-zinc-900 dark:text-zinc-100 shadow-2xl transition-all duration-300 overflow-hidden"
      )}
    >
      <div className={cn("absolute left-0 top-0 bottom-0 w-1", style.bar)} />

      <div className={cn("size-9 rounded-xl flex items-center justify-center border shrink-0 mt-0.5", style.bg)}>
        <Icon icon={style.icon} className="size-5" />
      </div>

      <div className="flex-1 min-w-0 pr-5">
        <h5 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
          {title}
        </h5>
        {options?.description && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
            {options.description}
          </p>
        )}
        {options?.action && (
          <button
            onClick={() => {
              options.action?.onClick();
              sonnerToast.dismiss(t);
            }}
            className="mt-2 text-xs font-extrabold text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors underline cursor-pointer"
          >
            {options.action.label}
          </button>
        )}
      </div>

      <button
        onClick={() => sonnerToast.dismiss(t)}
        className="absolute right-2.5 top-2.5 p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
      >
        <Icon icon="hugeicons:cancel-01" className="size-4" />
      </button>
    </div>
  ), { duration: options?.duration || 4000 });
};

export const toast = Object.assign(
  (title: React.ReactNode, options?: ToastOptions) => createCustomToast("default", title, options),
  {
    success: (title: React.ReactNode, options?: ToastOptions) => createCustomToast("success", title, options),
    error: (title: React.ReactNode, options?: ToastOptions) => createCustomToast("error", title, options),
    warning: (title: React.ReactNode, options?: ToastOptions) => createCustomToast("warning", title, options),
    info: (title: React.ReactNode, options?: ToastOptions) => createCustomToast("info", title, options),
    dismiss: (toastId?: string | number) => sonnerToast.dismiss(toastId),
  }
);
