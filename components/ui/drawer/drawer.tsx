"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export type DrawerPosition = "bottom" | "top" | "left" | "right";
export type DrawerOverlayVariant =
  | "blur"
  | "dark"
  | "light"
  | "transparent"
  | "none";
export type DrawerSize = "sm" | "md" | "lg" | "xl" | "full";

const Drawer = ({
  modal = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) => (
  <DialogPrimitive.Root modal={modal} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DialogPrimitive.Trigger;
const DrawerPortal = DialogPrimitive.Portal;
const DrawerClose = DialogPrimitive.Close;

export interface DrawerOverlayProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
  variant?: DrawerOverlayVariant;
}

const DrawerOverlay = React.forwardRef<HTMLDivElement, DrawerOverlayProps>(
  ({ className, variant = "blur", ...props }, ref) => {
    if (variant === "none") return null;

    const overlayStyles: Record<DrawerOverlayVariant, string> = {
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
DrawerOverlay.displayName = "DrawerOverlay";

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  overlay?: DrawerOverlayVariant;
  position?: DrawerPosition;
  size?: DrawerSize;
  swipeToClose?: boolean;
}

const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(
  (
    {
      className,
      children,
      overlay = "blur",
      position = "right",
      size = "md",
      swipeToClose = true,
      ...props
    },
    ref,
  ) => {
    const [dragOffset, setDragOffset] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);

    const startCoordRef = React.useRef<number>(0);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const closeButtonRef = React.useRef<HTMLButtonElement>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
      if (!swipeToClose) return;
      const touch = e.touches[0];
      startCoordRef.current =
        position === "left" || position === "right"
          ? touch.clientX
          : touch.clientY;
      setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!isDragging || !swipeToClose) return;
      const touch = e.touches[0];
      const currentCoord =
        position === "left" || position === "right"
          ? touch.clientX
          : touch.clientY;
      const delta = currentCoord - startCoordRef.current;

      if (position === "bottom" && delta > 0) {
        setDragOffset(delta);
      } else if (position === "top" && delta < 0) {
        setDragOffset(delta);
      } else if (position === "right" && delta > 0) {
        setDragOffset(delta);
      } else if (position === "left" && delta < 0) {
        setDragOffset(delta);
      }
    };

    const handleTouchEnd = () => {
      if (!isDragging || !swipeToClose) return;
      setIsDragging(false);
      const threshold = 100; // Dragged 100px triggers close

      if (Math.abs(dragOffset) > threshold) {
        closeButtonRef.current?.click();
      }
      setDragOffset(0);
    };

    const positionStyles: Record<DrawerPosition, Record<DrawerSize, string>> = {
      right: {
        sm: "absolute top-0 right-0 bottom-0 h-full w-3/4 sm:w-80 rounded-l-3xl data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
        md: "absolute top-0 right-0 bottom-0 h-full w-3/4 sm:w-96 rounded-l-3xl data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
        lg: "absolute top-0 right-0 bottom-0 h-full w-3/4 sm:w-[500px] rounded-l-3xl data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
        xl: "absolute top-0 right-0 bottom-0 h-full w-3/4 sm:w-[640px] rounded-l-3xl data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
        full: "absolute top-0 right-0 bottom-0 h-full w-full rounded-none data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
      },
      left: {
        sm: "absolute top-0 left-0 bottom-0 h-full w-3/4 sm:w-80 rounded-r-3xl data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
        md: "absolute top-0 left-0 bottom-0 h-full w-3/4 sm:w-96 rounded-r-3xl data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
        lg: "absolute top-0 left-0 bottom-0 h-full w-3/4 sm:w-[500px] rounded-r-3xl data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
        xl: "absolute top-0 left-0 bottom-0 h-full w-3/4 sm:w-[640px] rounded-r-3xl data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
        full: "absolute top-0 left-0 bottom-0 h-full w-full rounded-none data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
      },
      bottom: {
        sm: "absolute bottom-0 left-0 right-0 h-64 rounded-t-3xl data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
        md: "absolute bottom-0 left-0 right-0 h-96 rounded-t-3xl data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
        lg: "absolute bottom-0 left-0 right-0 h-[500px] rounded-t-3xl data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
        xl: "absolute bottom-0 left-0 right-0 h-[640px] rounded-t-3xl data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
        full: "absolute bottom-0 left-0 right-0 h-full rounded-none data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
      },
      top: {
        sm: "absolute top-0 left-0 right-0 h-64 rounded-b-3xl data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
        md: "absolute top-0 left-0 right-0 h-96 rounded-b-3xl data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
        lg: "absolute top-0 left-0 right-0 h-[500px] rounded-b-3xl data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
        xl: "absolute top-0 left-0 right-0 h-[640px] rounded-b-3xl data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
        full: "absolute top-0 left-0 right-0 h-full rounded-none data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
      },
    };

    const handleBar = (position === "bottom" || position === "top") && (
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0 cursor-grab active:cursor-grabbing hover:bg-zinc-400 dark:hover:bg-zinc-600 transition-colors"
      />
    );

    const getTransformStyle = () => {
      if (!dragOffset) return undefined;
      if (position === "bottom" || position === "top") {
        return `translateY(${dragOffset}px)`;
      }
      return `translateX(${dragOffset}px)`;
    };

    return (
      <DrawerPortal>
        <DrawerOverlay variant={overlay} />
        <div className="fixed inset-0 z-50 pointer-events-none max-w-[110rem] mx-auto left-0 right-0 overflow-hidden">
          <DialogPrimitive.Content
            ref={ref}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: getTransformStyle(),
              transition: isDragging ? "none" : "transform 0.2s ease-out",
            }}
            className={cn(
              "pointer-events-auto relative z-50 flex flex-col border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xl p-6 overflow-hidden max-w-full duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out",
              positionStyles[position][size],
              className,
            )}
            {...props}
          >
            {position === "bottom" && handleBar}
            <div className="flex flex-col h-full overflow-hidden">
              {children}
            </div>
            {position === "top" && handleBar}
            <DialogPrimitive.Close
              ref={closeButtonRef as any}
              className="absolute right-4 top-4 rounded-full p-2 opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer shrink-0 z-10"
            >
              <Icon
                icon="hugeicons:cancel-01"
                className="size-4 text-zinc-500 dark:text-zinc-400"
              />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </div>
      </DrawerPortal>
    );
  },
);
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "grid gap-1.5 text-center sm:text-left pr-6 shrink-0",
      className,
    )}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 pt-4 shrink-0", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
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
DrawerTitle.displayName = DialogPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
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
DrawerDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
