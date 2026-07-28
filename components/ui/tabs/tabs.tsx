"use client";
//#region Imports
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";
//#endregion

//#region Types
type TabsVariant = "default" | "bordered" | "ghost" | "underline";
type TabsSize = "xs" | "sm" | "md" | "lg" | "xl";
type TabsColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "custom";
//#endregion

//#region Interfaces
interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  onTabChange?: (value: string) => void;
}

interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {
  background?: boolean;
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
//#endregion

//#region Static Configuration
const sizeClasses: Record<TabsSize, string> = {
  xs: "px-2 py-0.5 text-xs h-6",
  sm: "px-3 py-1 text-sm h-7",
  md: "px-4 py-2 text-sm h-9",
  lg: "px-5 py-2 text-base h-11",
  xl: "px-6 py-3 text-lg h-12",
};

const colorClasses: Record<
  Exclude<TabsColor, "custom">,
  Record<TabsVariant, string>
> = {
  default: {
    default:
      "data-[state=active]:bg-neutral-600 data-[state=active]:text-white",
    ghost:
      "data-[state=active]:bg-neutral-100 data-[state=active]:text-neutral-800",
    bordered:
      "data-[state=active]:border-neutral-500 data-[state=active]:text-neutral-700",
    underline:
      "data-[state=active]:border-neutral-600 data-[state=active]:text-neutral-600",
  },
  primary: {
    default: "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
    ghost:
      "data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700",
    bordered:
      "data-[state=active]:border-blue-500 data-[state=active]:text-blue-700",
    underline:
      "data-[state=active]:border-blue-600 data-[state=active]:text-blue-600",
  },
  secondary: {
    default: "data-[state=active]:bg-gray-700 data-[state=active]:text-white",
    ghost:
      "data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900",
    bordered:
      "data-[state=active]:border-gray-500 data-[state=active]:text-gray-700",
    underline:
      "data-[state=active]:border-gray-700 data-[state=active]:text-gray-700",
  },
  success: {
    default:
      "data-[state=active]:bg-green-600 data-[state=active]:text-white",
    ghost:
      "data-[state=active]:bg-green-100 data-[state=active]:text-green-700",
    bordered:
      "data-[state=active]:border-green-500 data-[state=active]:text-green-700",
    underline:
      "data-[state=active]:border-green-600 data-[state=active]:text-green-600",
  },
  warning: {
    default:
      "data-[state=active]:bg-yellow-600 data-[state=active]:text-white",
    ghost:
      "data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-700",
    bordered:
      "data-[state=active]:border-yellow-500 data-[state=active]:text-yellow-700",
    underline:
      "data-[state=active]:border-yellow-600 data-[state=active]:text-yellow-600",
  },
  danger: {
    default: "data-[state=active]:bg-red-600 data-[state=active]:text-white",
    ghost: "data-[state=active]:bg-red-100 data-[state=active]:text-red-700",
    bordered:
      "data-[state=active]:border-red-500 data-[state=active]:text-red-700",
    underline:
      "data-[state=active]:border-red-600 data-[state=active]:text-red-600",
  },
};

const variantClasses: Record<TabsVariant, string> = {
  default:
    "bg-white text-gray-800 hover:bg-gray-50 rounded-3xl shadow-md border border-gray-200 transition-all duration-200",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 rounded-3xl border border-transparent shadow-none transition-all duration-200",
  bordered:
    "bg-transparent text-gray-800 border-2 border-gray-300 hover:bg-gray-50 rounded-3xl shadow-sm transition-all duration-200",
  underline:
    "bg-transparent text-gray-700 hover:text-gray-900 rounded-none transition-all duration-200 border-b-2 border-transparent",
};

const stateClasses = {
  disabled: "opacity-50 cursor-not-allowed pointer-events-none select-none",
  loading: "cursor-wait data-[state=active]:opacity-80",
};

const Spinner = React.memo(() => {
  return (
    <span
      className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent"
      aria-hidden
    />
  );
});
Spinner.displayName = "Spinner";
//#endregion

//#region Components
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

const TabsList = React.memo(({ className, background = true, ...props }: TabsListProps) => {
  return (
    <div className="overflow-x-auto scrollbar-none flex items-center relative">
      <TabsPrimitive.List
        data-slot="tabs-list"
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
        "inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-200 ease-in-out cursor-pointer",
        sizeClasses[size],
        variantClasses[variant],
        color !== "custom" && colorClasses[color][variant],
        isHex &&
          "data-[state=active]:bg-(--tabs-active-bg) data-[state=active]:border-(--tabs-active-border) data-[state=active]:text-(--tabs-active-text)",
        disabled && stateClasses.disabled,
        isLoading && stateClasses.loading,
        className
      )}
      disabled={disabled}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
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
              className={cn(
                "mr-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full shadow bg-primary text-white"
              )}
            >
              {badgeContent}
            </span>
          )}
          {startContent && <span className="mr-1">{startContent}</span>}
          {props.children}
          {endContent && <span className="ml-1">{endContent}</span>}
          {badgePosition === "end" && badgeContent && (
            <span
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
  return (
    <TabsPrimitive.Content {...props} data-slot="tabs-content">
      <AnimatePresence mode="wait">
        <motion.div
          key={props.value}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "flex-1 outline-none transition-all duration-300 ease-in-out",
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
//#endregion

export { Tabs, TabsList, TabsTrigger, TabsContent };
