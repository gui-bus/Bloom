"use client";

import { Icon } from "@iconify/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import { cn } from "@/lib/utils";

const AlertDialog = ({
  modal = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) => (
  <DialogPrimitive.Root modal={modal} {...props} />
);
AlertDialog.displayName = "AlertDialog";

const AlertDialogTrigger = DialogPrimitive.Trigger;
const AlertDialogPortal = DialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close asChild>
    <div
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 cursor-pointer pointer-events-auto transition-all duration-300 bg-black/60 backdrop-blur-xs data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  </DialogPrimitive.Close>
));
AlertDialogOverlay.displayName = "AlertDialogOverlay";

const AlertDialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <div className="fixed inset-0 z-50 pointer-events-none max-w-[110rem] mx-auto left-0 right-0 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "pointer-events-auto relative z-50 grid w-full max-w-lg gap-4 border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-3xl text-zinc-900 dark:text-zinc-100",
            className,
          )}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </div>
    </div>
  </AlertDialogPortal>
));
AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
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
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight flex items-center gap-2",
      className,
    )}
    {...props}
  />
));
AlertDialogTitle.displayName = "AlertDialogTitle";

const AlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed",
      className,
    )}
    {...props}
  />
));
AlertDialogDescription.displayName = "AlertDialogDescription";

export type AlertDialogActionColor =
  | "danger"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "default";

export interface AlertDialogActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: AlertDialogActionColor;
  isLoading?: boolean;
}

const actionColorMap: Record<AlertDialogActionColor, string> = {
  danger: "bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/20",
  primary: "bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/20",
  secondary:
    "bg-purple-500 hover:bg-purple-600 text-white shadow-purple-500/20",
  accent: "bg-pink-500 hover:bg-pink-600 text-white shadow-pink-500/20",
  success:
    "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20",
  warning: "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20",
  default:
    "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90",
};

const AlertDialogAction = React.forwardRef<
  HTMLButtonElement,
  AlertDialogActionProps
>(
  (
    {
      className,
      color = "danger",
      isLoading = false,
      children,
      disabled,
      onClick,
      ...props
    },
    ref,
  ) => {
    const button = (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex h-9 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold cursor-pointer transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed select-none",
          actionColorMap[color],
          className,
        )}
        onClick={onClick}
        {...props}
      >
        {isLoading ? (
          <>
            <Icon icon="hugeicons:loading-01" className="size-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    );

    if (isLoading || disabled) return button;

    return <DialogPrimitive.Close asChild>{button}</DialogPrimitive.Close>;
  },
);
AlertDialogAction.displayName = "AlertDialogAction";

const AlertDialogCancel = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close asChild>
    <button
      ref={ref}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition-all duration-200 mt-2 sm:mt-0 select-none",
        className,
      )}
      {...props}
    />
  </DialogPrimitive.Close>
));
AlertDialogCancel.displayName = "AlertDialogCancel";

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
