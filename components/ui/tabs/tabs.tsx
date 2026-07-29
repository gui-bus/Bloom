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
  /** Accessible label for the tab list. Useful when there are multiple tab lists on the same page. */
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
    default: "data-[state=active]:bg-default data-[state=active]:text-default-foreground",
    ghost: "data-[state=active]:bg-default/20 data-[state=active]:text-default-foreground",
    bordered: "data-[state=active]:border-default data-[state=active]:text-default-foreground",
    underline: "data-[state=active]:border-default data-[state=active]:text-default-foreground",
  },
  primary: {
    default: "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
    ghost: "data-[state=active]:bg-primary/20 data-[state=active]:text-primary",
    bordered: "data-[state=active]:border-primary data-[state=active]:text-primary",
    underline: "data-[state=active]:border-primary data-[state=active]:text-primary",
  },
  secondary: {
    default: "data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground",
    ghost: "data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary",
    bordered: "data-[state=active]:border-secondary data-[state=active]:text-secondary",
    underline: "data-[state=active]:border-secondary data-[state=active]:text-secondary",
  },
  success: {
    default: "data-[state=active]:bg-success data-[state=active]:text-success-foreground",
    ghost: "data-[state=active]:bg-success/20 data-[state=active]:text-success",
    bordered: "data-[state=active]:border-success data-[state=active]:text-success",
    underline: "data-[state=active]:border-success data-[state=active]:text-success",
  },
  warning: {
    default: "data-[state=active]:bg-warning data-[state=active]:text-warning-foreground",
    ghost: "data-[state=active]:bg-warning/20 data-[state=active]:text-warning",
    bordered: "data-[state=active]:border-warning data-[state=active]:text-warning",
    underline: "data-[state=active]:border-warning data-[state=active]:text-warning",
  },
  danger: {
    default: "data-[state=active]:bg-danger data-[state=active]:text-danger-foreground",
    ghost: "data-[state=active]:bg-danger/20 data-[state=active]:text-danger",
    bordered: "data-[state=active]:border-danger data-[state=active]:text-danger",
    underline: "data-[state=active]:border-danger data-[state=active]:text-danger",
  },
};

const variantClasses: Record<TabsVariant, string> = {
  default:
    "bg-background text-foreground hover:bg-muted/50 rounded-3xl shadow-md border border-border transition-all duration-200",
  ghost:
    "bg-transparent text-muted-foreground hover:bg-muted rounded-3xl border border-transparent shadow-none transition-all duration-200",
  bordered:
    "bg-transparent text-foreground border-2 border-border hover:bg-muted rounded-3xl shadow-sm transition-all duration-200",
  underline:
    "bg-transparent text-muted-foreground hover:text-foreground rounded-none transition-all duration-200 border-b-2 border-transparent",
  pills:
    "bg-transparent text-muted-foreground hover:text-foreground rounded-full transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground shadow-xs",
  contained:
    "bg-muted/40 text-muted-foreground hover:text-foreground rounded-xl transition-all duration-200 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
};

const stateClasses = {
  disabled: "opacity-50 cursor-not-allowed pointer-events-none select-none",
  loading: "cursor-wait data-[state=active]:opacity-80",
};

const Spinner = React.memo(() => {
  return (
    // aria-hidden: aria-busy on the trigger already signals loading to screen readers
    <span
      className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent"
      aria-hidden="true"
    />
  );
});
Spinner.displayName = "Spinner";

const Tabs = React.memo(({ className, onTabChange, ...props }: TabsProps) => {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      onValueChange={onTabChange}
      {...props}
    />
  );
});
Tabs.displayName = "Tabs";

const TabsList = React.memo(({ className, background = true, label, ...props }: TabsListProps) => {
  return (
    <div className="overflow-x-auto scrollbar-none flex items-center relative">
      <TabsPrimitive.List
        data-slot="tabs-list"
        // aria-label forwarded so multi-tablist pages can distinguish between them
        aria-label={label}
        className={cn(
          "inline-flex items-center gap-2 rounded-2xl p-1 scroll-snap-x-x",
          background && "bg-muted",
          className
        )}
        {...props}
      />
    </div>
  );
});
TabsList.displayName = "TabsList";

const TabsTrigger = React.memo(({
  className,
  startContent,
  endContent,
  badgeContent,
  badgePosition = "end",
  variant = "default",
  size = "md",
  color = "default",
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
        // outline-none + focus-visible:ring-* ensures keyboard users see a
        // focus ring without showing one on mouse/touch interactions.
        "inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-200 ease-in-out cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        designSizes[size],
        variantClasses[variant],
        color !== "custom" && colorClasses[color][variant],
        isHex &&
          "data-[state=active]:bg-(--tabs-active-bg) data-[state=active]:border-(--tabs-active-border) data-[state=active]:text-(--tabs-active-text)",
        disabled && stateClasses.disabled,
        isLoading && stateClasses.loading,
        className
      )}
      // Only set native disabled when isDisabled (not isLoading) so the tab
      // stays focusable/discoverable while loading. aria-disabled covers both.
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
            // aria-hidden: badge count is decorative within the tab label context
            <span
              aria-hidden="true"
              className={cn(
                "mr-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full shadow bg-primary text-white"
              )}
            >
              {badgeContent}
            </span>
          )}
          {/* aria-hidden: icons are decorative; the tab's text label is the accessible name */}
          {startContent && <span className="mr-1" aria-hidden="true">{startContent}</span>}
          {props.children}
          {endContent && <span className="ml-1" aria-hidden="true">{endContent}</span>}
          {badgePosition === "end" && badgeContent && (
            <span
              aria-hidden="true"
              className={cn(
                "ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full shadow bg-primary text-white"
              )}
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
  // Respect user's OS-level "reduce motion" preference (WCAG 2.3.3)
  const shouldReduceMotion = useReducedMotion();

  return (
    // Radix TabsContent automatically gets role="tabpanel" and aria-labelledby
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
