"use client";
//#region Imports
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

//#endregion

//#region Types
/**
 * Visual style variants available for the TabsTrigger component.
 */
type TabsVariant = "default" | "bordered" | "ghost" | "underline";

/**
 * Predefined sizing scale for TabsTrigger.
 * Follows a semantic size system commonly used in design systems.
 */
type TabsSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Color intent for TabsTrigger.
 * Can map to theme tokens or be overridden via `customColor`.
 */
type TabsColor = "primary" | "secondary" | "success" | "warning" | "danger" | "custom";
//#endregion

//#region Interfaces
/**
 * Props for the TabsTrigger component.
 *
 * Extends Radix UI's Trigger props while adding
 * design-system specific features such as:
 * - Variants
 * - Sizes
 * - Color intents
 * - Loading and disabled states
 * - Optional badges and slot-like content
 */
interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  /**
   * Element rendered before the tab label.
   * Common use cases: icons or avatars.
   */
  startContent?: React.ReactNode;

  /**
   * Element rendered after the tab label.
   * Common use cases: icons or indicators.
   */
  endContent?: React.ReactNode;

  /**
   * Small badge displayed alongside the tab label.
   * Useful for counters or status indicators.
   */
  badgeContent?: string;

  /**
   * Defines whether the badge appears before or after the label.
   * @default "end"
   */
  badgePosition?: "start" | "end";

  /**
   * Visual variant of the tab.
   * Controls borders, backgrounds and interaction styles.
   * @default "default"
   */
  variant?: TabsVariant;

  /**
   * Size of the tab trigger.
   * Affects height, padding and font size.
   * @default "md"
   */
  size?: TabsSize;

  /**
   * Color intent of the active state.
   * Uses theme tokens unless `customColor` is provided.
   * @default "primary"
   */
  color?: TabsColor;

  /**
   * Custom color used when `color="custom"`.
   * Accepts HEX values.
   *
   * Example: "#7c3aed"
   */
  customColor?: string;

  /**
   * Disables the tab interaction.
   * Prevents selection and applies disabled styles.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Displays a loading spinner and blocks interaction.
   * Intended for async tab changes or data fetching.
   * @default false
   */
  isLoading?: boolean;
}

/**
 * Root Tabs component props.
 *
 * Acts as a controlled/uncontrolled wrapper
 * around Radix UI Tabs.Root.
 */
interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  /**
   * Callback fired whenever the active tab value changes.
   */
  onTabChange?: (value: string) => void;
}

/**
 * Props for the TabsList component.
 *
 * Controls the visual container that wraps all triggers.
 */
interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List> {
  /**
   * Toggles the background container behind the tabs.
   * Useful for "floating" or minimal tab layouts.
   * @default true
   */
  background?: boolean;
}

/**
 * Props for the TabsContent component.
 *
 * Wraps Radix UI Content and adds animated transitions.
 */
interface TabsContentProps
  extends React.ComponentProps<typeof TabsPrimitive.Content> {}
//#endregion

//#region Components
/**
 * Tabs
 *
 * Root container responsible for managing tab state.
 * This component should wrap `TabsList` and `TabsContent`.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="profile">
 *   <TabsList>
 *     <TabsTrigger value="profile">Profile</TabsTrigger>
 *     <TabsTrigger value="settings">Settings</TabsTrigger>
 *   </TabsList>
 *
 *   <TabsContent value="profile">...</TabsContent>
 *   <TabsContent value="settings">...</TabsContent>
 * </Tabs>
 * ```
 */
function Tabs({ className, onTabChange, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      onValueChange={onTabChange}
      {...props}
    />
  );
}

/**
 * TabsList
 *
 * Container that holds all `TabsTrigger` components.
 * Supports horizontal scrolling for overflow scenarios.
 */
function TabsList({ className, background = true, ...props }: TabsListProps) {
  return (
    <div className="overflow-x-auto scrollbar-none flex items-center relative">
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          "inline-flex items-center gap-2 rounded-2xl p-1 shadow-inner scroll-snap-x-x",
          background && "bg-muted",
          className
        )}
        {...props}
      />
    </div>
  );
}

/**
 * TabsTrigger
 *
 * Interactive tab button responsible for changing tab state.
 * Highly customizable and aligned with design system needs.
 *
 * Supports:
 * - Multiple visual variants
 * - Semantic sizing
 * - Color intents and custom colors
 * - Loading and disabled states
 * - Badges and slot-based content
 */
function TabsTrigger({
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
}: TabsTriggerProps) {
  //#region Styles
  /**
   * Maps semantic sizes to Tailwind utility classes.
   */
  const sizeClasses: Record<TabsSize, string> = {
    xs: "px-2 py-0.5 text-xs h-6",
    sm: "px-3 py-1 text-sm h-7",
    md: "px-4 py-2 text-sm h-9",
    lg: "px-5 py-2 text-base h-11",
    xl: "px-6 py-3 text-lg h-12",
  };

  /**
   * Color styles applied when the tab is active.
   * Each color supports all available variants.
   */
  const colorClasses: Record<
    Exclude<TabsColor, "custom">,
    Record<TabsVariant, string>
  > = {
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

  /**
   * Base styles for each visual variant.
   */
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

  /**
   * Styles applied when the tab is disabled or loading.
   * These styles must override variant and color styles.
   */
  const stateClasses = {
    disabled: "opacity-50 cursor-not-allowed pointer-events-none select-none",
    loading: "cursor-wait data-[state=active]:opacity-80",
  };
  //#endregion

  //#region Helper components
  /**
   * Internal loading spinner used when `isLoading` is true.
   */
  function Spinner() {
    return (
      <span
        className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent"
        aria-hidden
      />
    );
  }
  //#endregion

  //#region Constants
  const disabled = isDisabled || isLoading;
  const isCustom = color === "custom" && !!customColor;
  const isHex = isCustom && customColor.startsWith("#");
  //#endregion

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
        // Base
        "inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-200 ease-in-out cursor-pointer",

        // Size & variant
        sizeClasses[size],
        variantClasses[variant],

        // Colors
        color !== "custom" && colorClasses[color][variant],
        isHex &&
          "data-[state=active]:bg-(--tabs-active-bg) data-[state=active]:border-(--tabs-active-border) data-[state=active]:text-(--tabs-active-text)",

        // States
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
}

/**
 * TabsContent
 *
 * Content panel associated with a specific tab value.
 * Includes animated enter/exit transitions using Framer Motion.
 */
function TabsContent({ className, children, ...props }: TabsContentProps) {
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
            "flex-1 outline-none p-5 transition-all duration-300 ease-in-out",
            className
          )}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TabsPrimitive.Content>
  );
}
//#endregion

export { Tabs, TabsList, TabsTrigger, TabsContent };
