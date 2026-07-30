export const popoverCode = `"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export type PopoverBackdrop = "none" | "dark" | "light" | "blur";

const backdropVariants: Record<PopoverBackdrop, string> = {
  none: "",
  dark: "bg-black/60",
  light: "bg-zinc-900/20 dark:bg-black/40",
  blur: "bg-black/40 backdrop-blur-md",
};

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverClose = PopoverPrimitive.Close;

export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  backdrop?: PopoverBackdrop;
  showCloseButton?: boolean;
}

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    {
      className,
      align = "center",
      sideOffset = 8,
      backdrop = "none",
      showCloseButton = true,
      children,
      ...props
    },
    ref
  ) => (
    <>
      {backdrop !== "none" && (
        <PopoverPrimitive.Portal>
          <div
            className={cn(
              "fixed inset-0 z-40 cursor-pointer pointer-events-auto max-w-[110rem] mx-auto left-0 right-0 overflow-hidden transition-opacity duration-200 animate-in fade-in-0",
              backdropVariants[backdrop]
            )}
            aria-hidden="true"
          />
        </PopoverPrimitive.Portal>
      )}

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            "z-50 w-80 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 text-zinc-900 dark:text-zinc-100 shadow-xl outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <PopoverPrimitive.Close className="absolute right-3.5 top-3.5 rounded-lg p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20">
              <Icon icon="hugeicons:cancel-01" className="size-4" />
              <span className="sr-only">Close</span>
            </PopoverPrimitive.Close>
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1 text-left mb-3 pr-6", className)}
    {...props}
  />
);
PopoverHeader.displayName = "PopoverHeader";

const PopoverTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-none", className)}
    {...props}
  />
));
PopoverTitle.displayName = "PopoverTitle";

const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-zinc-500 dark:text-zinc-400 mt-1", className)}
    {...props}
  />
));
PopoverDescription.displayName = "PopoverDescription";

export {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
};
`;
