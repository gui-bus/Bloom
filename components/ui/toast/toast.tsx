"use client";

import { Icon } from "@iconify/react";
import type * as React from "react";
import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";
import { Spinner, type SpinnerVariant } from "@/components/ui/spinner/spinner";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface ToastProps {
  theme?: "light" | "dark" | "system";
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
}

const progressStyle = `
@keyframes toastShrinkWidth {
  from { width: 100%; }
  to { width: 0%; }
}
`;

export function Toast({
  theme = "system",
  position = "bottom-right",
}: ToastProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: progressStyle }} />
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
    </>
  );
}

export type ToastVariant = "default" | "bordered" | "bar";
export type ToastSize = "sm" | "md" | "lg";
export type ToastRadius =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export interface ToastOptions {
  description?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
  spinnerVariant?: SpinnerVariant;
  variant?: ToastVariant;
  size?: ToastSize;
  radius?: ToastRadius;
  richColors?: boolean;
  showBgIcon?: boolean;
  showProgress?: boolean;
  id?: string | number;
}

const createCustomToast = (
  type: "success" | "error" | "warning" | "info" | "default" | "loading",
  title: React.ReactNode,
  options?: ToastOptions,
) => {
  const duration = type === "loading" ? 100000 : options?.duration || 4000;
  const activeVariant = options?.variant || "default";
  const activeSize = options?.size || "md";
  const activeRadius = options?.radius || "xl";

  const iconMap = {
    success: {
      icon: "hugeicons:checkmark-circle-02",
      bg: "bg-success/10 text-success border-success/20",
      bar: "bg-success",
      richBg: "bg-success text-white border-transparent",
      borderClass: "border-success",
    },
    error: {
      icon: "hugeicons:alert-circle",
      bg: "bg-danger/10 text-danger border-danger/20",
      bar: "bg-danger",
      richBg: "bg-danger text-white border-transparent",
      borderClass: "border-danger",
    },
    warning: {
      icon: "hugeicons:alert-02",
      bg: "bg-warning/10 text-warning border-warning/20",
      bar: "bg-warning",
      richBg: "bg-warning text-white border-transparent",
      borderClass: "border-warning",
    },
    info: {
      icon: "hugeicons:information-circle",
      bg: "bg-primary/10 text-primary border-primary/20",
      bar: "bg-primary",
      richBg: "bg-primary text-white border-transparent",
      borderClass: "border-primary",
    },
    loading: {
      icon: null,
      bg: "bg-primary/10 text-primary border-primary/20",
      bar: "bg-primary",
      richBg: "bg-primary text-white border-transparent",
      borderClass: "border-primary",
    },
    default: {
      icon: "hugeicons:notification-01",
      bg: "bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-350 border-zinc-200 dark:border-zinc-700",
      bar: "bg-zinc-400 dark:bg-zinc-650",
      richBg:
        "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-transparent",
      borderClass: "border-zinc-300 dark:border-zinc-700",
    },
  };

  const style = iconMap[type];

  // Resolve sizes classes
  const sizeMap = {
    sm: {
      width: "w-72 max-w-xs p-3",
      iconBox: "size-7 rounded-lg",
      iconSize: "size-4.5",
      title: "text-xs",
      desc: "text-[10px] mt-0.5",
    },
    md: {
      width: "w-85 max-w-sm p-4",
      iconBox: "size-9 rounded-xl",
      iconSize: "size-5",
      title: "text-sm",
      desc: "text-xs mt-1",
    },
    lg: {
      width: "w-96 max-w-md p-5",
      iconBox: "size-11 rounded-2xl",
      iconSize: "size-6",
      title: "text-base",
      desc: "text-sm mt-1.5",
    },
  };

  const sStyle = sizeMap[activeSize];

  // Determine wrapper container style based on richColors and variants
  let containerBgBorder =
    "bg-white/95 dark:bg-zinc-900/95 border-zinc-200/80 dark:border-zinc-800/80";
  let textColor = "text-zinc-900 dark:text-zinc-100";
  let titleColor = "text-zinc-900 dark:text-zinc-100";
  let descColor = "text-zinc-500 dark:text-zinc-400";

  if (options?.richColors) {
    containerBgBorder = style.richBg;
    textColor = "text-white";
    titleColor = "text-white";
    descColor = "text-white/85";
  } else {
    switch (activeVariant) {
      case "bordered":
        containerBgBorder = cn(
          "bg-white dark:bg-zinc-900 border-2",
          style.borderClass,
        );
        break;
      case "bar":
        containerBgBorder =
          "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 pl-5";
        break;
      default:
        containerBgBorder =
          "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800";
        break;
    }
  }

  const leftBarVisible = activeVariant === "bar";
  const showSmallIcon = !options?.showBgIcon;
  const radiusClass = designRadius[activeRadius] || "rounded-2xl";

  // Resolve ID selector for Sonner dismiss call
  const getToastId = (val: any) => {
    if (typeof val === "object" && val !== null && "id" in val) {
      return val.id;
    }
    return val;
  };

  return sonnerToast.custom(
    (t) => (
      <div
        className={cn(
          "relative flex gap-3.5 border shadow-2xl transition-all duration-300 overflow-hidden select-none pointer-events-auto",
          options?.description ? "items-start" : "items-center",
          sStyle.width,
          containerBgBorder,
          textColor,
          radiusClass,
        )}
      >
        {/* Rich Background Icon decoration */}
        {options?.showBgIcon && style.icon && (
          <Icon
            icon={style.icon}
            className="absolute -right-4 -bottom-4 size-24 opacity-[0.08] pointer-events-none rotate-12 text-current"
          />
        )}

        {/* Left accent bar */}
        {leftBarVisible && !options?.richColors && (
          <div
            className={cn("absolute left-0 top-0 bottom-0 w-1.5", style.bar)}
          />
        )}

        {/* Icon status container */}
        {showSmallIcon && (
          <div
            className={cn(
              "flex items-center justify-center border shrink-0 transition-all duration-300 pointer-events-none",
              sStyle.iconBox,
              options?.richColors
                ? "bg-white/20 border-transparent text-white"
                : style.bg,
            )}
          >
            {type === "loading" ? (
              <Spinner
                variant={options?.spinnerVariant || "default"}
                color={options?.richColors ? "default" : "primary"}
                size="sm"
              />
            ) : (
              <Icon icon={style.icon || ""} className={sStyle.iconSize} />
            )}
          </div>
        )}

        {/* Text descriptions */}
        <div className="flex-1 min-w-0 pr-5">
          <h5
            className={cn(
              "font-bold leading-tight pointer-events-none",
              sStyle.title,
              titleColor,
            )}
          >
            {title}
          </h5>
          {options?.description && (
            <p
              className={cn(
                "leading-relaxed pointer-events-none",
                sStyle.desc,
                descColor,
              )}
            >
              {options.description}
            </p>
          )}
          {options?.action && (
            <button
              type="button"
              onClick={() => {
                options.action?.onClick();
                sonnerToast.dismiss(getToastId(t));
              }}
              className={cn(
                "mt-2 text-xs font-extrabold transition-colors underline cursor-pointer pointer-events-auto relative z-50",
                options?.richColors
                  ? "text-white hover:text-white/80"
                  : "text-sky-500 hover:text-sky-600 dark:hover:text-sky-400",
              )}
            >
              {options.action.label}
            </button>
          )}
        </div>

        {/* Auto closing progress bar track */}
        {options?.showProgress && (
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 h-1 transition-all pointer-events-none",
              options?.richColors ? "bg-white/45" : style.bar,
            )}
            style={{
              animation: `toastShrinkWidth ${duration}ms linear forwards`,
            }}
          />
        )}
      </div>
    ),
    {
      id: options?.id,
      duration: duration,
    },
  );
};

export const toast = Object.assign(
  (title: React.ReactNode, options?: ToastOptions) =>
    createCustomToast("default", title, options),
  {
    success: (title: React.ReactNode, options?: ToastOptions) =>
      createCustomToast("success", title, options),
    error: (title: React.ReactNode, options?: ToastOptions) =>
      createCustomToast("error", title, options),
    warning: (title: React.ReactNode, options?: ToastOptions) =>
      createCustomToast("warning", title, options),
    info: (title: React.ReactNode, options?: ToastOptions) =>
      createCustomToast("info", title, options),
    loading: (title: React.ReactNode, options?: ToastOptions) =>
      createCustomToast("loading", title, options),
    dismiss: (toastId?: string | number) => sonnerToast.dismiss(toastId),
  },
);
