"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type AccordionVariant = "default" | "bordered" | "splitted" | "shadow" | "compact";

interface AccordionContextValue {
  variant: AccordionVariant;
}

const AccordionContext = React.createContext<AccordionContextValue>({
  variant: "default",
});

const useAccordionContext = () => React.useContext(AccordionContext);

/* ─── Root ─── */
type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  variant?: AccordionVariant;
  isDisabled?: boolean;
};

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, variant = "default", isDisabled, disabled, ...props }, ref) => {
  const isAccordionDisabled = isDisabled || disabled;

  const rootClasses = cn(
    variant === "bordered" && "border border-border rounded-xl p-1",
    variant === "shadow" && "shadow-md rounded-xl bg-card p-1",
    variant === "splitted" && "space-y-2",
    isAccordionDisabled && "opacity-60 pointer-events-none select-none",
    className
  );

  return (
    <AccordionContext.Provider value={{ variant }}>
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
        variant === "default" && "border-b border-border last:border-b-0 px-4",
        variant === "bordered" && "border-b border-border last:border-b-0 px-4",
        variant === "splitted" &&
          "bg-card rounded-xl border border-border/50 shadow-sm px-4",
        variant === "shadow" && "border-b border-border/30 last:border-b-0 px-4",
        variant === "compact" && "border-b border-border last:border-b-0 px-3",
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
            "flex flex-1 items-center justify-between gap-3 text-sm font-medium text-foreground transition-all hover:underline text-left outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
            "disabled:pointer-events-none disabled:opacity-50",
            "[&[data-state=open]_.accordion-indicator]:rotate-180",
            variant === "compact" ? "py-2.5" : "py-4",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {startContent && (
              <span className="shrink-0 inline-flex items-center text-muted-foreground">
                {startContent}
              </span>
            )}
            <span className="truncate">{children}</span>
          </div>
          {!hideIndicator && (
            <span className="accordion-indicator shrink-0 transition-transform duration-200 text-muted-foreground flex items-center justify-center">
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
type AccordionContentProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  const { variant } = useAccordionContext();

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
      {...props}
    >
      <div
        className={cn(
          variant === "compact" ? "pb-3 pt-0" : "pb-4 pt-1",
          "text-muted-foreground leading-relaxed",
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
