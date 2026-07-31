"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type AvatarColor =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger";

type StatusPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface AvatarContextValue {
  color: AvatarColor;
}

const AvatarContext = React.createContext<AvatarContextValue>({
  color: "default",
});

const useAvatarContext = () => React.useContext(AvatarContext);

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: AvatarSize;
  color?: AvatarColor;
  radius?: keyof typeof designRadius;
  isBordered?: boolean;
  isDisabled?: boolean;
  isPressable?: boolean;
  status?: AvatarColor;
  statusPosition?: StatusPosition;
  isEditable?: boolean;
  onUpload?: () => void;
}

const avatarSizes: Record<AvatarSize, string> = {
  xs: "size-6 text-xs",
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-12 text-base",
  xl: "size-14 text-lg",
  "2xl": "size-16 text-xl",
  "3xl": "size-20 text-2xl",
};

const avatarColorBorders: Record<AvatarColor, string> = {
  default: "ring-2 ring-zinc-300 dark:ring-zinc-700",
  primary: "ring-2 ring-primary",
  secondary: "ring-2 ring-secondary",
  accent: "ring-2 ring-accent",
  success: "ring-2 ring-success",
  warning: "ring-2 ring-warning",
  danger: "ring-2 ring-danger",
};

const statusColors: Record<AvatarColor, string> = {
  default: "bg-zinc-400 dark:bg-zinc-500",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

const statusPositions: Record<StatusPosition, string> = {
  "top-left": "top-0 left-0 -translate-x-1/3 -translate-y-1/3",
  "top-right": "top-0 right-0 translate-x-1/3 -translate-y-1/3",
  "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
  "bottom-right": "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
};

const fallbackColorMap: Record<AvatarColor, string> = {
  default: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300",
  primary: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
  secondary: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
  accent: "bg-pink-500/15 text-pink-600 dark:text-pink-400",
  success: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  warning: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  danger: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
};

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(
  (
    {
      size = "md",
      color = "default",
      radius = "full",
      isBordered = false,
      isDisabled = false,
      isPressable = false,
      status,
      statusPosition = "bottom-right",
      isEditable = false,
      onUpload,
      className,
      children,
      tabIndex,
      ...props
    },
    ref
  ) => {
    const isEffectivelyDisabled = isDisabled;

    return (
      <AvatarContext.Provider value={{ color }}>
        <div className="relative inline-flex shrink-0 group">
          <AvatarPrimitive.Root
            ref={ref}
            tabIndex={isPressable && !isEffectivelyDisabled ? tabIndex ?? 0 : tabIndex}
            className={cn(
              "relative flex shrink-0 overflow-hidden items-center justify-center select-none font-semibold transition-all duration-200",
              avatarSizes[size],
              designRadius[radius],
              isBordered && cn("ring-offset-2 ring-offset-background", avatarColorBorders[color]),
              isPressable &&
                !isEffectivelyDisabled &&
                "cursor-pointer hover:scale-105 active:scale-95 hover:opacity-90 transition-all duration-200 ease-in-out will-change-transform focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none",
              isEffectivelyDisabled && "opacity-50 grayscale cursor-not-allowed pointer-events-none",
              className
            )}
            {...props}
          >
            {children}
            {isEditable && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onUpload?.();
                }}
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer text-white"
              >
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            )}
          </AvatarPrimitive.Root>
          {status && (
            <span
              aria-hidden="true"
              className={cn(
                "absolute size-3 rounded-full ring-2 ring-white dark:ring-zinc-900 z-10",
                statusColors[status],
                statusPositions[statusPosition]
              )}
            />
          )}
        </div>
      </AvatarContext.Provider>
    );
  }
);
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square size-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => {
  const { color } = useAvatarContext();

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        "flex size-full items-center justify-center font-semibold text-xs leading-none select-none",
        fallbackColorMap[color],
        className
      )}
      {...props}
    />
  );
});
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
export type { AvatarSize, AvatarColor, StatusPosition };
