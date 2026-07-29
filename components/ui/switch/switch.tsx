"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  description?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  thumbIcon?: React.ReactNode;
  startLabel?: React.ReactNode;
  endLabel?: React.ReactNode;
  isCard?: boolean;
}

const colorMap = {
  default: "data-[state=checked]:bg-foreground",
  primary: "data-[state=checked]:bg-primary",
  secondary: "data-[state=checked]:bg-secondary",
  accent: "data-[state=checked]:bg-accent",
  success: "data-[state=checked]:bg-success",
  warning: "data-[state=checked]:bg-warning",
  danger: "data-[state=checked]:bg-danger",
};

const sizeMap = {
  sm: {
    root: "h-5 w-9",
    thumb: "size-3.5 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5",
  },
  md: {
    root: "h-6 w-11",
    thumb: "size-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5",
  },
  lg: {
    root: "h-7 w-14",
    thumb: "size-6 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0.5",
  },
};

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      className,
      color = "primary",
      size = "md",
      label,
      description,
      startIcon,
      endIcon,
      thumbIcon,
      startLabel,
      endLabel,
      isCard = false,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const switchId = id || generatedId;

    const switchElement = (
      <div className="inline-flex items-center gap-2">
        {startLabel && <span className="text-xs font-medium text-muted-foreground select-none">{startLabel}</span>}
        <SwitchPrimitives.Root
          ref={ref}
          id={switchId}
          disabled={disabled}
          className={cn(
            "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-input",
            sizeMap[size].root,
            colorMap[color],
            className
          )}
          {...props}
        >
          <SwitchPrimitives.Thumb
            className={cn(
              "pointer-events-none flex items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform duration-200 text-[10px]",
              sizeMap[size].thumb
            )}
          >
            {thumbIcon || (
              <>
                {startIcon && <span className="data-[state=unchecked]:hidden">{startIcon}</span>}
                {endIcon && <span className="data-[state=checked]:hidden">{endIcon}</span>}
              </>
            )}
          </SwitchPrimitives.Thumb>
        </SwitchPrimitives.Root>
        {endLabel && <span className="text-xs font-medium text-muted-foreground select-none">{endLabel}</span>}
      </div>
    );

    const content = (
      <div className="inline-flex items-center gap-3">
        {switchElement}
        {(label || description) && (
          <div className="flex flex-col gap-0.5 select-none">
            {label && (
              <label
                htmlFor={switchId}
                className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        )}
      </div>
    );

    if (isCard) {
      return (
        <div
          className={cn(
            "relative flex items-center justify-between p-4 rounded-xl border border-border bg-card transition-all duration-200 cursor-pointer hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 shadow-xs",
            disabled && "opacity-50 cursor-not-allowed pointer-events-none"
          )}
        >
          {content}
        </div>
      );
    }

    return content;
  }
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
