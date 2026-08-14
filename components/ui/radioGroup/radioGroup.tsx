"use client";

import { Icon } from "@iconify/react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const radioCardVariants = cva(
  "relative flex items-center gap-3 p-4 transition-all duration-200 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs has-[:checked]:border-sky-500 has-[:checked]:ring-2 has-[:checked]:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
        bordered:
          "bg-transparent border-2 border-zinc-200 dark:border-zinc-800 has-[:checked]:border-sky-500 text-zinc-900 dark:text-zinc-100",
        flat: "bg-zinc-100 dark:bg-zinc-800/60 border-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800 has-[:checked]:bg-white dark:has-[:checked]:bg-zinc-900 has-[:checked]:border-sky-500 border text-zinc-900 dark:text-zinc-100",
        underlined:
          "bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 rounded-none px-0 has-[:checked]:border-sky-500 text-zinc-900 dark:text-zinc-100",
        filled:
          "bg-zinc-100 dark:bg-zinc-800/80 border border-transparent has-[:checked]:border-sky-500 has-[:checked]:ring-2 has-[:checked]:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
        glassmorphism:
          "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 has-[:checked]:border-sky-500 shadow-lg text-zinc-900 dark:text-zinc-100",
        "gradient-border":
          "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 relative [background-clip:padding-box] border border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-sky-500 before:via-indigo-500 before:to-pink-500 has-[:checked]:ring-2 has-[:checked]:ring-indigo-500/30",
        glow: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs has-[:checked]:border-sky-500 has-[:checked]:shadow-[0_0_12px_rgba(14,165,233,0.35)] text-zinc-900 dark:text-zinc-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger";
  variant?:
    | "default"
    | "bordered"
    | "flat"
    | "underlined"
    | "filled"
    | "glassmorphism"
    | "gradient-border"
    | "glow";
  orientation?: "horizontal" | "vertical";
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  label?: React.ReactNode;
  description?: React.ReactNode;
  isInvalid?: boolean;
  isRequired?: boolean;
}

const colorMap = {
  default:
    "text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-zinc-400 dark:data-[state=checked]:border-zinc-500 data-[state=checked]:text-zinc-700 dark:data-[state=checked]:text-zinc-300",
  primary:
    "text-sky-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-sky-500",
  secondary:
    "text-purple-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-purple-500",
  accent:
    "text-pink-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-pink-500",
  success:
    "text-emerald-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-emerald-500",
  warning:
    "text-amber-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-amber-500",
  danger:
    "text-rose-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-rose-500",
};

const RadioGroupContext = React.createContext<{
  color?: RadioGroupProps["color"];
  variant?: RadioGroupProps["variant"];
}>({});

const columnStyles: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
};

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(
  (
    {
      className,
      color = "primary",
      variant = "default",
      orientation = "vertical",
      columns,
      label,
      description,
      isInvalid = false,
      isRequired = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <RadioGroupContext.Provider value={{ color, variant }}>
        <div className="flex flex-col gap-2 w-full">
          {(label || description) && (
            <div className="flex flex-col gap-0.5 select-none">
              {label && (
                <label
                  className={cn(
                    "text-xs font-semibold text-zinc-900 dark:text-zinc-100",
                    isInvalid && "text-rose-500 dark:text-rose-400",
                  )}
                >
                  {label}
                  {isRequired && (
                    <span className="text-rose-500 ml-0.5">*</span>
                  )}
                </label>
              )}
              {description && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {description}
                </p>
              )}
            </div>
          )}

          <RadioGroupPrimitive.Root
            ref={ref}
            className={cn(
              columns
                ? cn("grid gap-3", columnStyles[columns])
                : orientation === "horizontal"
                  ? "flex flex-wrap items-center gap-4"
                  : "grid gap-2.5",
              className,
            )}
            {...props}
          >
            {children}
          </RadioGroupPrimitive.Root>
        </div>
      </RadioGroupContext.Provider>
    );
  },
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  isCard?: boolean;
  icon?: string;
  badge?: string | React.ReactNode;
  price?: string;
  variant?: RadioGroupProps["variant"];
}

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    {
      className,
      label,
      description,
      isCard = false,
      icon,
      badge,
      price,
      id,
      disabled,
      variant: localVariant,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const itemId = id || generatedId;
    const { color = "primary", variant: contextVariant = "default" } =
      React.useContext(RadioGroupContext);

    const variant = localVariant || contextVariant;

    const innerContent = (
      <>
        <RadioGroupPrimitive.Item
          ref={ref}
          id={itemId}
          disabled={disabled}
          className={cn(
            "aspect-square size-4 rounded-full border bg-white dark:bg-zinc-900 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20 disabled:cursor-not-allowed cursor-pointer mt-0.5 flex items-center justify-center shrink-0 group relative",
            colorMap[color],
            className,
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center animate-in fade-in-0 zoom-in-50 duration-200">
            <div className="size-2 rounded-full bg-current transition-transform duration-200 scale-100" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>

        {(label || description || icon || price) && (
          <div className="flex flex-col gap-0.5 select-none w-full min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                {icon && (
                  <Icon icon={icon} className="size-4 text-zinc-500 shrink-0" />
                )}
                {label && (
                  <span className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100 truncate">
                    {label}
                  </span>
                )}
              </div>
              {price && (
                <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 shrink-0">
                  {price}
                </span>
              )}
            </div>
            {description && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {badge && (
          <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            {badge}
          </span>
        )}
      </>
    );

    if (isCard) {
      return (
        <label
          htmlFor={itemId}
          className={cn(
            radioCardVariants({ variant }),
            variant !== "underlined" && "rounded-2xl",
            disabled && "opacity-40 cursor-not-allowed pointer-events-none",
          )}
        >
          {innerContent}
        </label>
      );
    }

    return (
      <label
        htmlFor={itemId}
        className={cn(
          "inline-flex items-start gap-2.5 cursor-pointer select-none",
          disabled && "opacity-40 cursor-not-allowed pointer-events-none",
        )}
      >
        {innerContent}
      </label>
    );
  },
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
