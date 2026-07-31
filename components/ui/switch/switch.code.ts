export const switchCode = `"use client";

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
  checkedThumbIcon?: React.ReactNode;
  uncheckedThumbIcon?: React.ReactNode;
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
    root: "h-5.5 w-10 p-0.5",
    thumb: "size-4.5 data-[state=checked]:translate-x-4.5 data-[state=unchecked]:translate-x-0",
  },
  md: {
    root: "h-7 w-13 p-0.5",
    thumb: "size-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
  },
  lg: {
    root: "h-8.5 w-16 p-1",
    thumb: "size-6.5 data-[state=checked]:translate-x-7.5 data-[state=unchecked]:translate-x-0",
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
      checkedThumbIcon,
      uncheckedThumbIcon,
      startLabel,
      endLabel,
      isCard = false,
      id,
      disabled,
      isDisabled,
      checked,
      defaultChecked,
      onCheckedChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const switchId = id || generatedId;
    const isSwitchDisabled = disabled || isDisabled;

    const [internalChecked, setInternalChecked] = React.useState(!!defaultChecked);
    const isChecked = checked !== undefined ? checked : internalChecked;

    const handleCheckedChange = (val: boolean) => {
      if (checked === undefined) {
        setInternalChecked(val);
      }
      onCheckedChange?.(val);
    };

    const renderThumbContent = () => {
      if (thumbIcon) return thumbIcon;
      if (isChecked && checkedThumbIcon) return checkedThumbIcon;
      if (!isChecked && uncheckedThumbIcon) return uncheckedThumbIcon;
      if (isChecked && startIcon) return startIcon;
      if (!isChecked && endIcon) return endIcon;
      return null;
    };

    const switchElement = (
      <div className="inline-flex items-center gap-2.5 shrink-0">
        {startLabel && (
          <span
            onClick={() => !isSwitchDisabled && handleCheckedChange(false)}
            className={cn(
              "text-xs font-semibold select-none cursor-pointer transition-colors",
              !isChecked ? "text-zinc-900 dark:text-zinc-100 font-bold" : "text-zinc-400 dark:text-zinc-500"
            )}
          >
            {startLabel}
          </span>
        )}
        <SwitchPrimitives.Root
          ref={ref}
          id={switchId}
          disabled={isSwitchDisabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={handleCheckedChange}
          className={cn(
            "peer relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/30 disabled:cursor-not-allowed disabled:opacity-35 data-[state=unchecked]:bg-zinc-200 dark:data-[state=unchecked]:bg-zinc-800 shadow-inner",
            sizeMap[size].root,
            colorMap[color],
            className
          )}
          {...props}
        >
          <SwitchPrimitives.Thumb
            className={cn(
              "pointer-events-none relative z-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 shadow-md ring-0 transition-transform duration-300 ease-spring text-zinc-700 dark:text-zinc-200",
              sizeMap[size].thumb
            )}
          >
            <span className="transition-all duration-200 transform active:scale-95 flex items-center justify-center">
              {renderThumbContent()}
            </span>
          </SwitchPrimitives.Thumb>
        </SwitchPrimitives.Root>

        {endLabel && (
          <span
            onClick={() => !isSwitchDisabled && handleCheckedChange(true)}
            className={cn(
              "text-xs font-semibold select-none cursor-pointer transition-colors",
              isChecked ? "text-zinc-900 dark:text-zinc-100 font-bold" : "text-zinc-400 dark:text-zinc-500"
            )}
          >
            {endLabel}
          </span>
        )}
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
            "relative flex items-center justify-between p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 has-[:checked]:border-sky-500/50 has-[:checked]:bg-sky-500/5 shadow-xs w-full select-none",
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
`;
