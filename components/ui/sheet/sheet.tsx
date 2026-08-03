"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export type SheetBackdrop = "blur" | "dark" | "light" | "transparent" | "none";
export type SheetSide = "top" | "bottom" | "left" | "right";

const backdropVariants: Record<SheetBackdrop, string> = {
  blur: "bg-black/50 backdrop-blur-md",
  dark: "bg-black/80 backdrop-blur-xs",
  light: "bg-zinc-950/20 backdrop-blur-xs",
  transparent: "bg-transparent",
  none: "",
};

const Sheet = ({
  modal = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) => (
  <DialogPrimitive.Root modal={modal} {...props} />
);
Sheet.displayName = "Sheet";

const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;

export interface SheetOverlayProps
  extends React.ComponentPropsWithoutRef<"div"> {
  backdrop?: SheetBackdrop;
}

const SheetOverlay = React.forwardRef<HTMLDivElement, SheetOverlayProps>(
  ({ className, backdrop = "blur", ...props }, ref) => {
    if (backdrop === "none") return null;

    return (
      <SheetClose asChild>
        <div
          ref={ref}
          className={cn(
            "fixed inset-0 z-50 cursor-pointer pointer-events-auto max-w-[110rem] mx-auto left-0 right-0 overflow-hidden transition-all duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            backdropVariants[backdrop],
            className,
          )}
          {...props}
        />
      </SheetClose>
    );
  },
);
SheetOverlay.displayName = "SheetOverlay";

const positionStyles: Record<SheetSide, string> = {
  right:
    "absolute top-0 right-0 bottom-0 h-full w-3/4 sm:w-96 rounded-l-3xl border-l border-zinc-200 dark:border-zinc-800 data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
  left: "absolute top-0 left-0 bottom-0 h-full w-3/4 sm:w-96 rounded-r-3xl border-r border-zinc-200 dark:border-zinc-800 data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
  bottom:
    "absolute bottom-0 left-0 right-0 h-96 rounded-t-3xl border-t border-zinc-200 dark:border-zinc-800 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
  top: "absolute top-0 left-0 right-0 h-96 rounded-b-3xl border-b border-zinc-200 dark:border-zinc-800 data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
};

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: SheetSide;
  backdrop?: SheetBackdrop;
  showCloseButton?: boolean;
}

const SheetContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      side = "right",
      backdrop = "blur",
      showCloseButton = true,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <SheetPortal>
      <SheetOverlay backdrop={backdrop} />
      <div className="fixed inset-0 z-50 pointer-events-none max-w-[110rem] mx-auto left-0 right-0 overflow-hidden">
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "pointer-events-auto relative z-50 flex flex-col bg-white dark:bg-zinc-900 p-6 text-zinc-900 dark:text-zinc-100 shadow-2xl overflow-hidden duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out",
            positionStyles[side || "right"],
            className,
          )}
          {...props}
        >
          <div className="flex flex-col h-full overflow-hidden gap-4">
            {children}
          </div>
          {showCloseButton && (
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20 z-10">
              <Icon icon="hugeicons:cancel-01" className="size-5" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </div>
    </SheetPortal>
  ),
);
SheetContent.displayName = DialogPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-left pr-6 shrink-0",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80 shrink-0",
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-bold text-zinc-900 dark:text-zinc-100",
      className,
    )}
    {...props}
  />
));
SheetTitle.displayName = DialogPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-xs text-zinc-500 dark:text-zinc-400", className)}
    {...props}
  />
));
SheetDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
