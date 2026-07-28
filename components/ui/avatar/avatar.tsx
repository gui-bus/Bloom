"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";
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

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: AvatarSize;
  color?: AvatarColor;
  radius?: keyof typeof designRadius;
  isBordered?: boolean;
  isDisabled?: boolean;
  status?: AvatarColor;
  statusPosition?: StatusPosition;
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
  default: "ring-2 ring-default",
  primary: "ring-2 ring-primary",
  secondary: "ring-2 ring-secondary",
  accent: "ring-2 ring-accent",
  success: "ring-2 ring-success",
  warning: "ring-2 ring-warning",
  danger: "ring-2 ring-danger",
};

const statusColors: Record<AvatarColor, string> = {
  default: "bg-default-foreground",
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
      status,
      statusPosition = "bottom-right",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative inline-flex shrink-0">
        <AvatarPrimitive.Root
          ref={ref}
          className={cn(
            "relative flex shrink-0 overflow-hidden items-center justify-center select-none font-medium transition-all duration-200",
            avatarSizes[size],
            designRadius[radius],
            isBordered && cn("ring-offset-2 ring-offset-background", avatarColorBorders[color]),
            isDisabled && "opacity-50 grayscale cursor-not-allowed",
            className
          )}
          {...props}
        >
          {children}
        </AvatarPrimitive.Root>
        {status && (
          <span
            aria-hidden="true"
            className={cn(
              "absolute size-3 rounded-full ring-2 ring-background z-10",
              statusColors[status],
              statusPositions[statusPosition]
            )}
          />
        )}
      </div>
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
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex size-full items-center justify-center font-medium bg-muted text-muted-foreground",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
