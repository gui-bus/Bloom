"use client";
//#region Imports
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

//#endregion

//#region Variants
const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
        secondary:
          "bg-neutral-800 text-white hover:bg-neutral-700 focus-visible:ring-neutral-500",
        outline:
          "border border-neutral-300 text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400",
        ghost:
          "text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
//#endregion

//#region Interfaces
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
  disableRipple?: boolean;
  disableScale?: boolean;
  isIconOnly?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}
//#endregion

//#region Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      isLoading = false,
      loadingText,
      isDisabled = false,
      disableRipple = false,
      disableScale = false,
      isIconOnly = false,
      startContent,
      endContent,
      disabled,
      children,
      onClick,
      type,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isButtonDisabled = disabled || isDisabled || isLoading;

    // A11y guard para isIconOnly
    if (isIconOnly && !props["aria-label"]) {
      console.warn(
        "Button with isIconOnly=true requires an aria-label for accessibility."
      );
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isButtonDisabled) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!disableRipple && !prefersReducedMotion) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();

        const ripple = document.createElement("span");
        const rippleSize = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - rippleSize / 2;
        const y = e.clientY - rect.top - rippleSize / 2;

        ripple.className = "ripple";
        ripple.style.width = ripple.style.height = `${rippleSize}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }

      onClick?.(e);
    };

    return (
      <Comp
        ref={ref}
        type={type ?? "button"}
        disabled={isButtonDisabled}
        aria-disabled={isButtonDisabled}
        data-variant={variant}
        data-size={size}
        onClick={handleClick}
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          !disableScale && !isButtonDisabled && "active:scale-[0.98]",
          isButtonDisabled && "cursor-not-allowed",
          isIconOnly && "p-0 aspect-square",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden
            />
            {loadingText && (
              <span className="whitespace-nowrap">{loadingText}</span>
            )}
          </>
        ) : (
          <>
            {startContent && (
              <span className="flex items-center">{startContent}</span>
            )}

            {!isIconOnly && children && (
              <span className="whitespace-nowrap">{children}</span>
            )}

            {endContent && (
              <span className="flex items-center">{endContent}</span>
            )}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
//#endregion

export { Button, buttonVariants };
