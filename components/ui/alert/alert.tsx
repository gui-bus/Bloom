"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertStyle = "flat" | "bordered" | "solid" | "left-accent" | "glassmorphism";
type AlertColor = "info" | "success" | "warning" | "danger";

const alertColorMap: Record<AlertColor, Record<AlertStyle, string>> = {
  info: {
    flat: "bg-sky-500/10 text-sky-700 dark:text-sky-300 [&>svg]:text-sky-500 border-transparent",
    bordered: "bg-transparent text-sky-700 dark:text-sky-300 [&>svg]:text-sky-500 border border-sky-500/50",
    solid: "bg-sky-500 text-white [&>svg]:text-white border-transparent",
    "left-accent": "bg-transparent text-sky-700 dark:text-sky-300 [&>svg]:text-sky-500 border-l-4 border-sky-500 border-t-0 border-r-0 border-b-0",
    glassmorphism: "backdrop-blur-md bg-sky-500/10 text-sky-700 dark:text-sky-300 [&>svg]:text-sky-500 border border-sky-500/20 shadow-lg",
  },
  success: {
    flat: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 [&>svg]:text-emerald-500 border-transparent",
    bordered: "bg-transparent text-emerald-700 dark:text-emerald-300 [&>svg]:text-emerald-500 border border-emerald-500/50",
    solid: "bg-emerald-500 text-white [&>svg]:text-white border-transparent",
    "left-accent": "bg-transparent text-emerald-700 dark:text-emerald-300 [&>svg]:text-emerald-500 border-l-4 border-emerald-500 border-t-0 border-r-0 border-b-0",
    glassmorphism: "backdrop-blur-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 [&>svg]:text-emerald-500 border border-emerald-500/20 shadow-lg",
  },
  warning: {
    flat: "bg-amber-500/10 text-amber-700 dark:text-amber-300 [&>svg]:text-amber-500 border-transparent",
    bordered: "bg-transparent text-amber-700 dark:text-amber-300 [&>svg]:text-amber-500 border border-amber-500/50",
    solid: "bg-amber-500 text-white [&>svg]:text-white border-transparent",
    "left-accent": "bg-transparent text-amber-700 dark:text-amber-300 [&>svg]:text-amber-500 border-l-4 border-amber-500 border-t-0 border-r-0 border-b-0",
    glassmorphism: "backdrop-blur-md bg-amber-500/10 text-amber-700 dark:text-amber-300 [&>svg]:text-amber-500 border border-amber-500/20 shadow-lg",
  },
  danger: {
    flat: "bg-rose-500/10 text-rose-700 dark:text-rose-300 [&>svg]:text-rose-500 border-transparent",
    bordered: "bg-transparent text-rose-700 dark:text-rose-300 [&>svg]:text-rose-500 border border-rose-500/50",
    solid: "bg-rose-500 text-white [&>svg]:text-white border-transparent",
    "left-accent": "bg-transparent text-rose-700 dark:text-rose-300 [&>svg]:text-rose-500 border-l-4 border-rose-500 border-t-0 border-r-0 border-b-0",
    glassmorphism: "backdrop-blur-md bg-rose-500/10 text-rose-700 dark:text-rose-300 [&>svg]:text-rose-500 border border-rose-500/20 shadow-lg",
  },
};

const iconMap = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: AlertCircle,
};

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: AlertStyle;
  color?: AlertColor;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  isClosable?: boolean;
  onClose?: () => void;
  action?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = "flat",
      color = "info",
      title,
      icon,
      isClosable = false,
      onClose,
      action,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const IconComponent = iconMap[color || "info"];

    if (!isVisible) return null;

    const handleClose = () => {
      setIsVisible(false);
      onClose?.();
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative w-full rounded-2xl p-4 text-sm flex gap-3 items-start font-medium leading-relaxed",
          alertColorMap[color][variant],
          className
        )}
        {...props}
      >
        {icon !== undefined ? icon : <IconComponent className="size-5 shrink-0 mt-0.5" />}
        <div className="flex flex-col gap-1 flex-1">
          {title && <h5 className="font-bold text-sm leading-none">{title}</h5>}
          {children && <div className="text-xs opacity-90">{children}</div>}
          {action && <div className="mt-2">{action}</div>}
        </div>
        {isClosable && (
          <button
            type="button"
            onClick={handleClose}
            className="shrink-0 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            aria-label="Dismiss"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";

export { Alert };
