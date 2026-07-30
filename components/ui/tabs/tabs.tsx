"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";
import { designSizes } from "@/lib/design-system";

type TabsVariant = "default" | "bordered" | "ghost" | "underline" | "pills" | "contained";
type TabsSize = "xs" | "sm" | "md" | "lg" | "xl";
type TabsColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "custom";

interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  onTabChange?: (value: string) => void;
}

interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {
  background?: boolean;
  isScrollable?: boolean;
  label?: string;
}

interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  badgeContent?: string;
  badgePosition?: "start" | "end";
  variant?: TabsVariant;
  size?: TabsSize;
  color?: TabsColor;
  customColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

interface TabsContentProps
  extends React.ComponentProps<typeof TabsPrimitive.Content> {}

const colorClasses: Record<
  Exclude<TabsColor, "custom">,
  Record<TabsVariant, string>
> = {
  default: {
    default: "data-[state=active]:bg-zinc-900 dark:data-[state=active]:bg-zinc-100 data-[state=active]:text-white dark:data-[state=active]:text-zinc-900",
    ghost: "data-[state=active]:bg-zinc-100 dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100",
    bordered: "data-[state=active]:border-zinc-900 dark:data-[state=active]:border-zinc-100 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100",
    underline: "data-[state=active]:border-zinc-900 dark:data-[state=active]:border-zinc-100 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100",
    pills: "data-[state=active]:bg-zinc-900 dark:data-[state=active]:bg-zinc-100 data-[state=active]:text-white dark:data-[state=active]:text-zinc-900",
    contained: "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100",
  },
  primary: {
    default: "data-[state=active]:bg-sky-500 data-[state=active]:text-white",
    ghost: "data-[state=active]:bg-sky-500/15 data-[state=active]:text-sky-500",
    bordered: "data-[state=active]:border-sky-500 data-[state=active]:text-sky-500",
    underline: "data-[state=active]:border-sky-500 data-[state=active]:text-sky-500",
    pills: "data-[state=active]:bg-sky-500 data-[state=active]:text-white",
    contained: "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-sky-500",
  },
  secondary: {
    default: "data-[state=active]:bg-purple-500 data-[state=active]:text-white",
    ghost: "data-[state=active]:bg-purple-500/15 data-[state=active]:text-purple-500",
    bordered: "data-[state=active]:border-purple-500 data-[state=active]:text-purple-500",
    underline: "data-[state=active]:border-purple-500 data-[state=active]:text-purple-500",
    pills: "data-[state=active]:bg-purple-500 data-[state=active]:text-white",
    contained: "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-purple-500",
  },
  success: {
    default: "data-[state=active]:bg-emerald-500 data-[state=active]:text-white",
    ghost: "data-[state=active]:bg-emerald-500/15 data-[state=active]:text-emerald-500",
    bordered: "data-[state=active]:border-emerald-500 data-[state=active]:text-emerald-500",
    underline: "data-[state=active]:border-emerald-500 data-[state=active]:text-emerald-500",
    pills: "data-[state=active]:bg-emerald-500 data-[state=active]:text-white",
    contained: "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-emerald-500",
  },
  warning: {
    default: "data-[state=active]:bg-amber-500 data-[state=active]:text-white",
    ghost: "data-[state=active]:bg-amber-500/15 data-[state=active]:text-amber-500",
    bordered: "data-[state=active]:border-amber-500 data-[state=active]:text-amber-500",
    underline: "data-[state=active]:border-amber-500 data-[state=active]:text-amber-500",
    pills: "data-[state=active]:bg-amber-500 data-[state=active]:text-white",
    contained: "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-amber-500",
  },
  danger: {
    default: "data-[state=active]:bg-rose-500 data-[state=active]:text-white",
    ghost: "data-[state=active]:bg-rose-500/15 data-[state=active]:text-rose-500",
    bordered: "data-[state=active]:border-rose-500 data-[state=active]:text-rose-500",
    underline: "data-[state=active]:border-rose-500 data-[state=active]:text-rose-500",
    pills: "data-[state=active]:bg-rose-500 data-[state=active]:text-white",
    contained: "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-rose-500",
  },
};

const variantClasses: Record<TabsVariant, string> = {
  default:
    "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-xl shadow-xs border border-zinc-200 dark:border-zinc-800 transition-all duration-200",
  ghost:
    "bg-transparent text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl border border-transparent transition-all duration-200",
  bordered:
    "bg-transparent text-zinc-700 dark:text-zinc-300 border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-xl transition-all duration-200",
  underline:
    "bg-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-none transition-all duration-200 border-b-2 border-transparent",
  pills:
    "bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-full transition-all duration-200 shadow-xs",
  contained:
    "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-xl transition-all duration-200 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:shadow-xs",
};

const stateClasses = {
  disabled: "opacity-40 cursor-not-allowed pointer-events-none select-none",
  loading: "cursor-wait data-[state=active]:opacity-80",
};

const Spinner = React.memo(() => (
  <span
    className="size-4 animate-spin rounded-full border-2 border-zinc-400 border-t-transparent"
    aria-hidden="true"
  />
));
Spinner.displayName = "Spinner";

const Tabs = React.memo(({ className, onTabChange, ...props }: TabsProps) => (
  <TabsPrimitive.Root
    data-slot="tabs"
    className={cn("flex flex-col gap-4", className)}
    onValueChange={onTabChange}
    {...props}
  />
));
Tabs.displayName = "Tabs";

const TabsList = React.memo(({ className, background = true, label, ...props }: TabsListProps) => (
  <div className="overflow-x-auto scrollbar-none flex items-center relative">
    <TabsPrimitive.List
      data-slot="tabs-list"
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl p-1 scroll-snap-x",
        background && "bg-zinc-100 dark:bg-zinc-800/60",
        className
      )}
      {...props}
    />
  </div>
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.memo(({
  className,
  startContent,
  endContent,
  badgeContent,
  badgePosition = "end",
  variant = "default",
  size = "md",
  color = "primary",
  customColor,
  isDisabled = false,
  isLoading = false,
  ...props
}: TabsTriggerProps) => {
  const disabled = isDisabled || isLoading;
  const isCustom = color === "custom" && !!customColor;
  const isHex = isCustom && customColor.startsWith("#");

  return (
    <TabsPrimitive.Trigger
      style={
        isHex
          ? ({
              "--tabs-active-bg": customColor,
              "--tabs-active-border": customColor,
              "--tabs-active-text": "#ffffff",
            } as React.CSSProperties)
          : undefined
      }
      className={cn(
        "inline-flex items-center justify-center gap-1.5 font-bold transition-all duration-200 ease-in-out cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20",
        designSizes[size],
        variantClasses[variant],
        color !== "custom" && colorClasses[color][variant],
        isHex &&
          "data-[state=active]:bg-(--tabs-active-bg) data-[state=active]:border-(--tabs-active-border) data-[state=active]:text-(--tabs-active-text)",
        disabled && stateClasses.disabled,
        isLoading && stateClasses.loading,
        className
      )}
      disabled={isDisabled}
      aria-disabled={disabled || undefined}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <Spinner />
          {props.children}
        </div>
      ) : (
        <>
          {badgePosition === "start" && badgeContent && (
            <span
              aria-hidden="true"
              className="mr-1.5 inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-sky-500 text-white shadow-xs"
            >
              {badgeContent}
            </span>
          )}
          {startContent && <span className="mr-1" aria-hidden="true">{startContent}</span>}
          {props.children}
          {endContent && <span className="ml-1" aria-hidden="true">{endContent}</span>}
          {badgePosition === "end" && badgeContent && (
            <span
              aria-hidden="true"
              className="ml-1.5 inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-sky-500 text-white shadow-xs"
            >
              {badgeContent}
            </span>
          )}
        </>
      )}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.memo(({ className, children, ...props }: TabsContentProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <TabsPrimitive.Content {...props} data-slot="tabs-content">
      <AnimatePresence mode="wait">
        <motion.div
          key={props.value}
          initial={shouldReduceMotion ? false : { opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
          className={cn(
            "flex-1 outline-none transition-all duration-300 ease-in-out motion-reduce:transition-none motion-reduce:transform-none",
            className
          )}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TabsPrimitive.Content>
  );
});
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
