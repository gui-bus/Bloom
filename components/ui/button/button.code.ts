export const buttonCode = `//#region Imports
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
//#endregion

//#region Variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
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
      asChild = false,
      isLoading = false,
      loadingText,
      isDisabled = false,
      startContent,
      endContent,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isButtonDisabled = disabled || isDisabled || isLoading;

    return (
      <Comp
        ref={ref}
        disabled={isButtonDisabled}
        aria-disabled={isButtonDisabled}
        data-variant={variant}
        data-size={size}
        className={cn(
          buttonVariants({ variant, size }),
          !isButtonDisabled && "active:scale-[0.98]",
          isButtonDisabled && "cursor-not-allowed",
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

            {children && <span className="whitespace-nowrap">{children}</span>}

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
`.trim();
