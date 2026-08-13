"use client";

import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
} from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

type AlertColor =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "danger";

type AlertVariant =
  | "default"
  | "bordered"
  | "flat"
  | "ghost"
  | "shadow"
  | "accent-left"
  | "glow";

interface AlertContextValue {
  color: AlertColor;
  variant: AlertVariant;
}

const AlertContext = React.createContext<AlertContextValue>({
  color: "info",
  variant: "default",
});

const useAlertContext = () => React.useContext(AlertContext);

const titleColorMap: Record<AlertColor, string> = {
  default: "text-zinc-900 dark:text-zinc-100 font-semibold",
  info: "text-sky-600 dark:text-sky-400 font-semibold",
  success: "text-emerald-600 dark:text-emerald-400 font-semibold",
  warning: "text-amber-600 dark:text-amber-400 font-semibold",
  danger: "text-rose-600 dark:text-rose-400 font-semibold",
};

const iconColorMap: Record<AlertColor, string> = {
  default: "text-zinc-500 dark:text-zinc-400",
  info: "text-sky-500",
  success: "text-emerald-500",
  warning: "text-amber-500",
  danger: "text-rose-500",
};

const accentLeftBorderMap: Record<AlertColor, string> = {
  default: "border-l-4 border-l-zinc-500",
  info: "border-l-4 border-l-sky-500",
  success: "border-l-4 border-l-emerald-500",
  warning: "border-l-4 border-l-amber-500",
  danger: "border-l-4 border-l-rose-500",
};

const glowMap: Record<AlertColor, string> = {
  default:
    "shadow-[0_0_15px_rgba(113,113,122,0.25)] border-zinc-300 dark:border-zinc-700",
  info: "shadow-[0_0_15px_rgba(14,165,233,0.3)] border-sky-400/50 dark:border-sky-500/50",
  success:
    "shadow-[0_0_15px_rgba(16,185,129,0.3)] border-emerald-400/50 dark:border-emerald-500/50",
  warning:
    "shadow-[0_0_15px_rgba(245,158,11,0.3)] border-amber-400/50 dark:border-amber-500/50",
  danger:
    "shadow-[0_0_15px_rgba(244,63,94,0.3)] border-rose-400/50 dark:border-rose-500/50",
};

const variantCardMap: Record<AlertVariant, string> = {
  default:
    "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs",
  bordered:
    "bg-transparent text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800",
  flat: "bg-zinc-100/90 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 border border-transparent",
  ghost:
    "bg-transparent text-zinc-900 dark:text-zinc-100 border border-transparent",
  shadow:
    "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200/60 dark:border-zinc-800/60 shadow-md",
  "accent-left":
    "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border-y border-r border-zinc-200/80 dark:border-zinc-800/80 shadow-xs",
  glow: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border",
};

const iconMap: Record<AlertColor, React.ElementType> = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: AlertCircle,
};

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: AlertVariant;
  color?: AlertColor;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  customIcon?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  hideIcon?: boolean;
  isClosable?: boolean;
  isDismissible?: boolean;
  durationMs?: number;
  onClose?: () => void;
  action?: React.ReactNode;
  showWatermark?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = "default",
      color = "info",
      title,
      icon,
      customIcon,
      startContent,
      endContent,
      hideIcon = false,
      isClosable = false,
      isDismissible = false,
      durationMs,
      onClose,
      action,
      showWatermark = false,
      children,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const handleClose = React.useCallback(() => {
      setIsVisible(false);
      onClose?.();
    }, [onClose]);

    React.useEffect(() => {
      if ((isDismissible || durationMs) && durationMs && durationMs > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, durationMs);
        return () => clearTimeout(timer);
      }
    }, [isDismissible, durationMs, handleClose]);

    if (!isVisible) return null;

    const IconComponent = iconMap[color];
    const activeIcon = customIcon ?? icon;

    const renderedStart =
      !showWatermark &&
      (startContent ??
        (!hideIcon &&
          (activeIcon ?? (
            <IconComponent
              className={cn("size-5 shrink-0 mt-0.5", iconColorMap[color])}
            />
          ))));

    const watermarkElement = showWatermark && !hideIcon && (
      <div className="absolute right-4 bottom-0 -mb-4 -mr-2 opacity-[0.08] dark:opacity-[0.04] pointer-events-none select-none text-zinc-900 dark:text-white">
        {activeIcon ?? <IconComponent className="size-24" />}
      </div>
    );

    const canClose = isClosable || isDismissible;

    return (
      <AlertContext.Provider value={{ color, variant }}>
        <div
          ref={ref}
          role="alert"
          className={cn(
            "relative w-full rounded-2xl p-4 text-sm flex gap-3.5 items-start leading-relaxed transition-all duration-200 overflow-hidden",
            variantCardMap[variant],
            variant === "accent-left" && accentLeftBorderMap[color],
            variant === "glow" && glowMap[color],
            className,
          )}
          {...props}
        >
          {watermarkElement}
          <div className="flex flex-col flex-1 min-w-0">
            {title ? (
              <div className="flex items-center gap-2 mb-1">
                {renderedStart}
                <AlertTitle>{title}</AlertTitle>
              </div>
            ) : (
              <div className="flex items-start gap-2">
                {renderedStart}
                {children &&
                  (typeof children === "string" ? (
                    <AlertDescription className="mt-0">{children}</AlertDescription>
                  ) : (
                    children
                  ))}
              </div>
            )}

            {title && children &&
              (typeof children === "string" ? (
                <AlertDescription>{children}</AlertDescription>
              ) : (
                children
              ))}
            {action && <div className="mt-2.5">{action}</div>}
          </div>

          {(endContent || canClose) && (
            <div className="flex items-center gap-2 shrink-0 self-start">
              {endContent}
              {canClose && (
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer"
                  aria-label="Close alert"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </AlertContext.Provider>
    );
  },
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  const { color } = useAlertContext();

  return (
    <h5
      ref={ref}
      className={cn(
        "font-semibold text-sm leading-none tracking-tight",
        titleColorMap[color],
        className,
      )}
      {...props}
    >
      {children}
    </h5>
  );
});
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1.5",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
AlertDescription.displayName = "AlertDescription";

export type { AlertColor, AlertVariant };
export { Alert, AlertDescription, AlertTitle };
