"use client";

import { Icon } from "@iconify/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import { cn } from "@/lib/utils";

export type DialogOverlayVariant =
  | "blur"
  | "dark"
  | "light"
  | "transparent"
  | "none";
export type DialogSize = "sm" | "md" | "lg" | "xl" | "full";

const Dialog = ({
  modal = true,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) => (
  <DialogPrimitive.Root modal={modal} {...props} />
);

const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

export interface DialogOverlayProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
  variant?: DialogOverlayVariant;
}

const DialogOverlay = React.forwardRef<HTMLDivElement, DialogOverlayProps>(
  ({ className, variant = "blur", ...props }, ref) => {
    if (variant === "none") return null;

    const overlayStyles: Record<DialogOverlayVariant, string> = {
      blur: "bg-black/50 backdrop-blur-md",
      dark: "bg-black/80 backdrop-blur-xs",
      light: "bg-zinc-950/20 backdrop-blur-xs",
      transparent: "bg-transparent",
      none: "",
    };

    return (
      <DialogPrimitive.Close asChild>
        <div
          ref={ref}
          className={cn(
            "fixed inset-0 z-50 cursor-pointer pointer-events-auto transition-all duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            overlayStyles[variant],
            className,
          )}
          {...props}
        />
      </DialogPrimitive.Close>
    );
  },
);
DialogOverlay.displayName = "DialogOverlay";

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  overlay?: DialogOverlayVariant;
  size?: DialogSize;
}

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, overlay = "blur", size = "md", ...props }, ref) => {
  const sizeStyles: Record<DialogSize, string> = {
    sm: "max-w-sm rounded-2xl p-5",
    md: "max-w-lg rounded-3xl p-6",
    lg: "max-w-2xl rounded-3xl p-7",
    xl: "max-w-4xl rounded-3xl p-8",
    full: "max-w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] rounded-3xl p-8 flex flex-col justify-between",
  };

  return (
    <DialogPortal>
      <DialogOverlay variant={overlay} />
      <div className="fixed inset-0 z-50 pointer-events-none max-w-[110rem] mx-auto left-0 right-0 flex items-center justify-center p-4">
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "pointer-events-auto relative z-50 grid w-full gap-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            sizeStyles[size],
            className,
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-2 opacity-70 transition-all hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-sky-500/40 disabled:pointer-events-none hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer">
            <Icon
              icon="hugeicons:cancel-01"
              className="size-4 text-zinc-500 dark:text-zinc-400"
            />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </div>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 mt-4",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-bold leading-none tracking-tight text-zinc-900 dark:text-zinc-100",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed",
      className,
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
