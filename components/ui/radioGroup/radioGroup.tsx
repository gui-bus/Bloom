"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
}

const colorMap = {
  default: "text-foreground border-input data-[state=checked]:border-foreground",
  primary: "text-primary border-input data-[state=checked]:border-primary",
  secondary: "text-secondary border-input data-[state=checked]:border-secondary",
  accent: "text-accent border-input data-[state=checked]:border-accent",
  success: "text-success border-input data-[state=checked]:border-success",
  warning: "text-warning border-input data-[state=checked]:border-warning",
  danger: "text-danger border-input data-[state=checked]:border-danger",
};

const RadioGroupContext = React.createContext<{ color?: RadioGroupProps["color"] }>({});

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, color = "primary", ...props }, ref) => {
  return (
    <RadioGroupContext.Provider value={{ color }}>
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2.5", className)}
        {...props}
        ref={ref}
      />
    </RadioGroupContext.Provider>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  isCard?: boolean;
}

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, label, description, isCard = false, id, disabled, ...props }, ref) => {
  const generatedId = React.useId();
  const itemId = id || generatedId;
  const { color = "primary" } = React.useContext(RadioGroupContext);

  const content = (
    <div className="inline-flex items-start gap-2.5">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={itemId}
        disabled={disabled}
        className={cn(
          "aspect-square size-4 rounded-full border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer mt-0.5 flex items-center justify-center",
          colorMap[color],
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="size-2 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {(label || description) && (
        <div className="flex flex-col gap-0.5 select-none">
          {label && (
            <label
              htmlFor={itemId}
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
          "relative flex items-center gap-3 p-4 rounded-xl border border-border bg-card transition-all duration-200 cursor-pointer hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 shadow-xs",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none"
        )}
      >
        {content}
      </div>
    );
  }

  return content;
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
