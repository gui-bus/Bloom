"use client";

import { Icon } from "@iconify/react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import * as React from "react";
import { designSizes } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export type TabsVariant =
  | "default"
  | "underlined"
  | "pills"
  | "bordered"
  | "contained"
  | "vertical"
  | "ghost"
  | "underline"
  | "flat"
  | "filled"
  | "glassmorphism"
  | "gradient-border"
  | "glow";
export type TabsSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TabsColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "custom";

export interface TabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root> {
  onTabChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  variant?: TabsVariant;
}

export interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List> {
  background?: boolean;
  isScrollable?: boolean;
  addable?: boolean;
  onAdd?: () => void;
  label?: string;
}

export interface TabsTriggerProps
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
  isClosable?: boolean;
  onClose?: (e: React.MouseEvent) => void;
}

export interface TabsContentProps
  extends React.ComponentProps<typeof TabsPrimitive.Content> {}

const TabsContext = React.createContext<{
  orientation: "horizontal" | "vertical";
  variant: TabsVariant;
}>({
  orientation: "horizontal",
  variant: "default",
});

const colorClasses: Record<
  Exclude<TabsColor, "custom">,
  Record<string, string>
> = {
  default: {
    default:
      "data-[state=active]:bg-zinc-900 dark:data-[state=active]:bg-zinc-100 data-[state=active]:text-white dark:data-[state=active]:text-zinc-900",
    ghost:
      "data-[state=active]:bg-zinc-100 dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100",
    bordered:
      "data-[state=active]:border-zinc-900 dark:data-[state=active]:border-zinc-100 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100",
    underline:
      "data-[state=active]:border-zinc-900 dark:data-[state=active]:border-zinc-100 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100",
    underlined:
      "data-[state=active]:border-zinc-900 dark:data-[state=active]:border-zinc-100 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100",
    pills:
      "data-[state=active]:bg-zinc-400 dark:data-[state=active]:bg-zinc-600 data-[state=active]:text-white dark:data-[state=active]:text-white",
    contained:
      "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100",
    vertical:
      "data-[state=active]:bg-zinc-100 dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 font-bold",
    flat: "data-[state=active]:bg-zinc-400 dark:data-[state=active]:bg-zinc-600 data-[state=active]:text-white dark:data-[state=active]:text-white",
    filled:
      "data-[state=active]:bg-zinc-400 dark:data-[state=active]:bg-zinc-600 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glassmorphism:
      "data-[state=active]:bg-zinc-400 dark:data-[state=active]:bg-zinc-600 data-[state=active]:text-white dark:data-[state=active]:text-white",
    "gradient-border":
      "data-[state=active]:bg-zinc-400 dark:data-[state=active]:bg-zinc-600 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glow: "data-[state=active]:bg-zinc-400 dark:data-[state=active]:bg-zinc-600 data-[state=active]:text-white dark:data-[state=active]:text-white",
  },
  primary: {
    default:
      "data-[state=active]:bg-sky-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    ghost:
      "data-[state=active]:bg-sky-500/15 data-[state=active]:text-sky-500 dark:data-[state=active]:text-sky-400",
    bordered:
      "data-[state=active]:border-sky-500 data-[state=active]:text-sky-500 dark:data-[state=active]:text-sky-400",
    underline:
      "data-[state=active]:border-sky-500 data-[state=active]:text-sky-500 dark:data-[state=active]:text-sky-400",
    underlined:
      "data-[state=active]:border-sky-500 data-[state=active]:text-sky-500 dark:data-[state=active]:text-sky-400",
    pills:
      "data-[state=active]:bg-sky-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    contained:
      "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-sky-500 dark:data-[state=active]:text-sky-400",
    vertical:
      "data-[state=active]:bg-sky-500/10 data-[state=active]:text-sky-500 dark:data-[state=active]:text-sky-400 data-[state=active]:border-r-2 data-[state=active]:border-sky-500",
    flat: "data-[state=active]:bg-sky-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    filled:
      "data-[state=active]:bg-sky-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glassmorphism:
      "data-[state=active]:bg-sky-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    "gradient-border":
      "data-[state=active]:bg-sky-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glow: "data-[state=active]:bg-sky-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
  },
  secondary: {
    default:
      "data-[state=active]:bg-purple-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    ghost:
      "data-[state=active]:bg-purple-500/15 data-[state=active]:text-purple-500 dark:data-[state=active]:text-purple-400",
    bordered:
      "data-[state=active]:border-purple-500 data-[state=active]:text-purple-500 dark:data-[state=active]:text-purple-400",
    underline:
      "data-[state=active]:border-purple-500 data-[state=active]:text-purple-500 dark:data-[state=active]:text-purple-400",
    underlined:
      "data-[state=active]:border-purple-500 data-[state=active]:text-purple-500 dark:data-[state=active]:text-purple-400",
    pills:
      "data-[state=active]:bg-purple-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    contained:
      "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-purple-500 dark:data-[state=active]:text-purple-400",
    vertical:
      "data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-500 dark:data-[state=active]:text-purple-400 data-[state=active]:border-r-2 data-[state=active]:border-purple-500",
    flat: "data-[state=active]:bg-purple-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    filled:
      "data-[state=active]:bg-purple-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glassmorphism:
      "data-[state=active]:bg-purple-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    "gradient-border":
      "data-[state=active]:bg-purple-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glow: "data-[state=active]:bg-purple-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
  },
  success: {
    default:
      "data-[state=active]:bg-emerald-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    ghost:
      "data-[state=active]:bg-emerald-500/15 data-[state=active]:text-emerald-500 dark:data-[state=active]:text-emerald-400",
    bordered:
      "data-[state=active]:border-emerald-500 data-[state=active]:text-emerald-500 dark:data-[state=active]:text-emerald-400",
    underline:
      "data-[state=active]:border-emerald-500 data-[state=active]:text-emerald-500 dark:data-[state=active]:text-emerald-400",
    underlined:
      "data-[state=active]:border-emerald-500 data-[state=active]:text-emerald-500 dark:data-[state=active]:text-emerald-400",
    pills:
      "data-[state=active]:bg-emerald-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    contained:
      "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-emerald-500 dark:data-[state=active]:text-emerald-400",
    vertical:
      "data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-500 dark:data-[state=active]:text-emerald-400 data-[state=active]:border-r-2 data-[state=active]:border-emerald-500",
    flat: "data-[state=active]:bg-emerald-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    filled:
      "data-[state=active]:bg-emerald-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glassmorphism:
      "data-[state=active]:bg-emerald-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    "gradient-border":
      "data-[state=active]:bg-emerald-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glow: "data-[state=active]:bg-emerald-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
  },
  warning: {
    default:
      "data-[state=active]:bg-amber-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    ghost:
      "data-[state=active]:bg-amber-500/15 data-[state=active]:text-amber-500 dark:data-[state=active]:text-amber-400",
    bordered:
      "data-[state=active]:border-amber-500 data-[state=active]:text-amber-500 dark:data-[state=active]:text-amber-400",
    underline:
      "data-[state=active]:border-amber-500 data-[state=active]:text-amber-500 dark:data-[state=active]:text-amber-400",
    underlined:
      "data-[state=active]:border-amber-500 data-[state=active]:text-amber-500 dark:data-[state=active]:text-amber-400",
    pills:
      "data-[state=active]:bg-amber-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    contained:
      "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-amber-500 dark:data-[state=active]:text-amber-400",
    vertical:
      "data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-500 dark:data-[state=active]:text-amber-400 data-[state=active]:border-r-2 data-[state=active]:border-amber-500",
    flat: "data-[state=active]:bg-amber-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    filled:
      "data-[state=active]:bg-amber-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glassmorphism:
      "data-[state=active]:bg-amber-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    "gradient-border":
      "data-[state=active]:bg-amber-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glow: "data-[state=active]:bg-amber-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
  },
  danger: {
    default:
      "data-[state=active]:bg-rose-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    ghost:
      "data-[state=active]:bg-rose-500/15 data-[state=active]:text-rose-500 dark:data-[state=active]:text-rose-400",
    bordered:
      "data-[state=active]:border-rose-500 data-[state=active]:text-rose-500 dark:data-[state=active]:text-rose-400",
    underline:
      "data-[state=active]:border-rose-500 data-[state=active]:text-rose-500 dark:data-[state=active]:text-rose-400",
    underlined:
      "data-[state=active]:border-rose-500 data-[state=active]:text-rose-500 dark:data-[state=active]:text-rose-400",
    pills:
      "data-[state=active]:bg-rose-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    contained:
      "data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-rose-500 dark:data-[state=active]:text-rose-400",
    vertical:
      "data-[state=active]:bg-rose-500/10 data-[state=active]:text-rose-500 dark:data-[state=active]:text-rose-400 data-[state=active]:border-r-2 data-[state=active]:border-rose-500",
    flat: "data-[state=active]:bg-rose-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    filled:
      "data-[state=active]:bg-rose-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glassmorphism:
      "data-[state=active]:bg-rose-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    "gradient-border":
      "data-[state=active]:bg-rose-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
    glow: "data-[state=active]:bg-rose-500 data-[state=active]:text-white dark:data-[state=active]:text-white",
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
  underlined:
    "bg-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-none transition-all duration-200 border-b-2 border-transparent",
  pills:
    "bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-full transition-all duration-200 shadow-xs",
  contained:
    "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-xl transition-all duration-200 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:shadow-xs",
  vertical:
    "bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all duration-200 justify-start w-full",
  flat: "bg-zinc-100 dark:bg-zinc-800/60 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-xl border border-transparent transition-all duration-200",
  filled:
    "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-xl border border-transparent transition-all duration-200",
  glassmorphism:
    "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-xl shadow-lg transition-all duration-200",
  "gradient-border":
    "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-xl relative [background-clip:padding-box] border border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-sky-500 before:via-indigo-500 before:to-pink-500 transition-all duration-200",
  glow: "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-xl shadow-xs border border-zinc-200 dark:border-zinc-800 data-[state=active]:shadow-[0_0_12px_rgba(14,165,233,0.35)] data-[state=active]:border-sky-500 transition-all duration-200",
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

const Tabs = React.memo(
  ({
    className,
    onTabChange,
    orientation = "horizontal",
    variant = "default",
    ...props
  }: TabsProps) => (
    <TabsContext.Provider value={{ orientation, variant }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        orientation={orientation}
        className={cn(
          orientation === "vertical"
            ? "flex flex-row gap-6 w-full"
            : "flex flex-col gap-4",
          className,
        )}
        onValueChange={onTabChange}
        {...props}
      />
    </TabsContext.Provider>
  ),
);
Tabs.displayName = "Tabs";

const TabsList = React.memo(
  ({
    className,
    background = true,
    isScrollable = false,
    addable = false,
    onAdd,
    label,
    children,
    ...props
  }: TabsListProps) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const { orientation } = React.useContext(TabsContext);

    const scrollLeft = () => {
      if (scrollRef.current)
        scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
    };

    const scrollRight = () => {
      if (scrollRef.current)
        scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    };

    return (
      <div
        className={cn(
          "relative flex items-center gap-2",
          orientation === "vertical" && "flex-col items-start min-w-[200px]",
        )}
      >
        {isScrollable && orientation === "horizontal" && (
          <button
            type="button"
            onClick={scrollLeft}
            className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 cursor-pointer shrink-0"
          >
            <Icon icon="hugeicons:arrow-left-01" className="size-4" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-none flex items-center relative w-full"
        >
          <TabsPrimitive.List
            data-slot="tabs-list"
            aria-label={label}
            className={cn(
              "inline-flex items-center gap-2 rounded-2xl p-1",
              orientation === "vertical"
                ? "flex-col items-stretch w-full"
                : "flex-row",
              background && "bg-zinc-100 dark:bg-zinc-800/60",
              className,
            )}
            {...props}
          >
            {children}
          </TabsPrimitive.List>
        </div>

        {isScrollable && orientation === "horizontal" && (
          <button
            type="button"
            onClick={scrollRight}
            className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 cursor-pointer shrink-0"
          >
            <Icon icon="hugeicons:arrow-right-01" className="size-4" />
          </button>
        )}

        {addable && (
          <button
            type="button"
            onClick={onAdd}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            <Icon icon="hugeicons:plus-sign" className="size-4" />
          </button>
        )}
      </div>
    );
  },
);
TabsList.displayName = "TabsList";

const TabsTrigger = React.memo(
  ({
    className,
    startContent,
    endContent,
    badgeContent,
    badgePosition = "end",
    variant: propVariant,
    size = "md",
    color = "primary",
    customColor,
    isDisabled = false,
    isLoading = false,
    isClosable = false,
    onClose,
    children,
    ...props
  }: TabsTriggerProps) => {
    const { variant: contextVariant } = React.useContext(TabsContext);
    const activeVariant = propVariant || contextVariant;
    const disabled = isDisabled || isLoading;
    const isCustom = color === "custom" && !!customColor;
    const isHex = isCustom && customColor.startsWith("#");

    const handleClose = (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onClose?.(e);
    };

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
          "group relative inline-flex items-center justify-center gap-1.5 font-bold transition-all duration-200 ease-in-out cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20 select-none",
          designSizes[size],
          variantClasses[activeVariant],
          color !== "custom" && colorClasses[color]?.[activeVariant],
          isHex &&
            "data-[state=active]:bg-(--tabs-active-bg) data-[state=active]:border-(--tabs-active-border) data-[state=active]:text-(--tabs-active-text)",
          disabled && stateClasses.disabled,
          isLoading && stateClasses.loading,
          className,
        )}
        disabled={isDisabled}
        aria-disabled={disabled || undefined}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Spinner />
            {children}
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
            {startContent && (
              <span className="mr-1" aria-hidden="true">
                {startContent}
              </span>
            )}
            {children}
            {endContent && (
              <span className="ml-1" aria-hidden="true">
                {endContent}
              </span>
            )}
            {badgePosition === "end" && badgeContent && (
              <span
                aria-hidden="true"
                className="ml-1.5 inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-sky-500 text-white shadow-xs"
              >
                {badgeContent}
              </span>
            )}
            {isClosable && (
              <span
                role="button"
                tabIndex={0}
                onClick={handleClose}
                className="ml-1 p-0.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 text-zinc-400 group-data-[state=active]:text-white/70 hover:text-zinc-900 dark:hover:text-zinc-100 group-data-[state=active]:hover:text-white transition-colors cursor-pointer"
              >
                <Icon icon="hugeicons:cancel-01" className="size-3.5" />
              </span>
            )}
          </>
        )}
      </TabsPrimitive.Trigger>
    );
  },
);
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.memo(
  ({ className, children, ...props }: TabsContentProps) => {
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
              className,
            )}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </TabsPrimitive.Content>
    );
  },
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, TabsTrigger };
