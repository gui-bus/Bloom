"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type AccordionVariant = "default" | "bordered" | "splitted" | "shadow" | "compact";

interface AccordionContextValue {
  variant: AccordionVariant;
  isKeepMounted?: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue>({
  variant: "default",
  isKeepMounted: false,
});

const useAccordionContext = () => React.useContext(AccordionContext);

/* ─── Root ─── */
type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  variant?: AccordionVariant;
  isDisabled?: boolean;
  isKeepMounted?: boolean;
};

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, variant = "default", isDisabled, disabled, isKeepMounted = false, ...props }, ref) => {
  const isAccordionDisabled = isDisabled || disabled;

  const rootClasses = cn(
    variant === "bordered" && "border border-zinc-200 dark:border-zinc-800 rounded-xl p-1 bg-white dark:bg-zinc-900",
    variant === "shadow" && "shadow-md rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 p-1",
    variant === "splitted" && "space-y-2",
    isAccordionDisabled && "opacity-60 pointer-events-none select-none",
    className
  );

  return (
    <AccordionContext.Provider value={{ variant, isKeepMounted }}>
      <AccordionPrimitive.Root
        ref={ref}
        disabled={isAccordionDisabled}
        className={rootClasses}
        {...props}
      />
    </AccordionContext.Provider>
  );
});
Accordion.displayName = "Accordion";

/* ─── Item ─── */
type AccordionItemProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
  isDisabled?: boolean;
};

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, isDisabled, disabled, ...props }, ref) => {
  const { variant } = useAccordionContext();
  const isItemDisabled = isDisabled || disabled;

  return (
    <AccordionPrimitive.Item
      ref={ref}
      disabled={isItemDisabled}
      className={cn(
        variant === "default" && "border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 px-4",
        variant === "bordered" && "border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 px-4",
        variant === "splitted" &&
          "bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs px-4",
        variant === "shadow" && "border-b border-zinc-200/40 dark:border-zinc-800/40 last:border-b-0 px-4",
        variant === "compact" && "border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 px-3",
        isItemDisabled && "opacity-50 pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

/* ─── Trigger ─── */
type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  hideIndicator?: boolean;
  isDisabled?: boolean;
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(
  (
    {
      className,
      children,
      startContent,
      endContent,
      hideIndicator = false,
      isDisabled,
      disabled,
      ...props
    },
    ref
  ) => {
    const { variant } = useAccordionContext();
    const isTriggerDisabled = isDisabled || disabled;

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          disabled={isTriggerDisabled}
          className={cn(
            "flex flex-1 items-center justify-between gap-3 text-sm font-medium text-zinc-900 dark:text-zinc-100 transition-all hover:underline text-left outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
            "disabled:pointer-events-none disabled:opacity-50",
            "[&[data-state=open]_.accordion-indicator]:rotate-180",
            variant === "compact" ? "py-2.5" : "py-4",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {startContent && (
              <span className="shrink-0 inline-flex items-center text-zinc-500 dark:text-zinc-400">
                {startContent}
              </span>
            )}
            <span className="truncate">{children}</span>
          </div>
          {!hideIndicator && (
            <span className="accordion-indicator shrink-0 transition-transform duration-200 text-zinc-500 dark:text-zinc-400 flex items-center justify-center">
              {endContent ?? (
                <Icon
                  icon="hugeicons:arrow-down-01"
                  className="size-4"
                />
              )}
            </span>
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/* ─── Content ─── */
type AccordionContentProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
  forceMount?: boolean;
};

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, forceMount, ...props }, ref) => {
  const { variant, isKeepMounted } = useAccordionContext();
  const shouldForceMount = forceMount || isKeepMounted;

  return (
    <AccordionPrimitive.Content
      ref={ref}
      forceMount={shouldForceMount ? true : undefined}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
      {...props}
    >
      <div
        className={cn(
          variant === "compact" ? "pb-3 pt-0" : "pb-4 pt-1",
          "text-zinc-600 dark:text-zinc-400 leading-relaxed",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export type {
  AccordionVariant,
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
};
