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
  isDisabled?: boolean;
}

const colorMap = {
  default: "data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-zinc-100",
  primary: "data-[state=checked]:bg-sky-500",
  secondary: "data-[state=checked]:bg-purple-500",
  accent: "data-[state=checked]:bg-pink-500",
  success: "data-[state=checked]:bg-emerald-500",
  warning: "data-[state=checked]:bg-amber-500",
  danger: "data-[state=checked]:bg-rose-500",
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
      isDisabled,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const switchId = id || generatedId;
    const isSwitchDisabled = disabled || isDisabled;

    const switchElement = (
      <div className="inline-flex items-center gap-2 shrink-0">
        {startLabel && <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 select-none">{startLabel}</span>}
        <SwitchPrimitives.Root
          ref={ref}
          id={switchId}
          disabled={isSwitchDisabled}
          className={cn(
            "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20 disabled:cursor-not-allowed disabled:opacity-35 data-[state=unchecked]:bg-zinc-200 dark:data-[state=unchecked]:bg-zinc-800",
            sizeMap[size].root,
            colorMap[color],
            className
          )}
          {...props}
        >
          <SwitchPrimitives.Thumb
            className={cn(
              "pointer-events-none flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 shadow-xs ring-0 transition-transform duration-200 text-[10px] text-zinc-700 dark:text-zinc-300",
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
        {endLabel && <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 select-none">{endLabel}</span>}
      </div>
    );

    const content = (
      <div className="flex items-center gap-3 w-full">
        {switchElement}
        {(label || description) && (
          <div className="flex flex-col gap-0.5 select-none flex-1">
            {label && (
              <label
                htmlFor={switchId}
                className="text-xs font-bold text-zinc-900 dark:text-zinc-100 leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-40"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug">{description}</p>
            )}
          </div>
        )}
      </div>
    );

    if (isCard) {
      return (
        <label
          htmlFor={switchId}
          className={cn(
            "relative flex items-center justify-between p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 has-[:checked]:border-sky-500/50 has-[:checked]:bg-sky-500/5 shadow-xs w-full",
            isSwitchDisabled && "opacity-35 grayscale cursor-not-allowed pointer-events-none"
          )}
        >
          {content}
        </label>
      );
    }

    return content;
  }
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
