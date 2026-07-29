"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type AccordionVariant = "default" | "bordered" | "splitted" | "shadow" | "compact";

const AccordionContext = React.createContext<{ variant: AccordionVariant }>({
  variant: "default",
});

const useAccordionContext = () => React.useContext(AccordionContext);

/* ─── Root ─── */
const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    variant?: AccordionVariant;
  }
>(({ className, variant = "default", ...props }, ref) => {
  const rootClasses = cn(
    variant === "bordered" && "border border-border rounded-xl p-1",
    variant === "shadow" && "shadow-md rounded-xl bg-card p-1",
    variant === "splitted" && "space-y-2",
    className
  );

  return (
    <AccordionContext.Provider value={{ variant }}>
      <AccordionPrimitive.Root ref={ref} className={rootClasses} {...props} />
    </AccordionContext.Provider>
  );
});
Accordion.displayName = "Accordion";

/* ─── Item ─── */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant } = useAccordionContext();

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        variant === "default" && "border-b border-border last:border-b-0",
        variant === "bordered" && "border-b border-border last:border-b-0",
        variant === "splitted" &&
          "bg-card rounded-xl border border-border/50 shadow-sm px-4",
        variant === "shadow" && "border-b border-border/30 last:border-b-0",
        variant === "compact" && "border-b border-border last:border-b-0",
        className
      )}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

/* ─── Trigger ─── */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { variant } = useAccordionContext();

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between text-sm font-medium text-foreground transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          variant === "compact" ? "py-2" : "py-4",
          className
        )}
        {...props}
      >
        {children}
        <Icon
          icon="hugeicons:arrow-down-01"
          className="size-4 shrink-0 transition-transform duration-200 text-muted-foreground"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/* ─── Content ─── */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
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
          variant === "compact" ? "pb-2 pt-0" : "pb-4 pt-0",
          "text-muted-foreground",
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
export type { AccordionVariant, AccordionProps };
