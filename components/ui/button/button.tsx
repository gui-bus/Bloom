import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
} from "react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      loadingText,
      isDisabled = false,
      startContent,
      endContent,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isButtonDisabled =
      disabled || isDisabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isButtonDisabled}
        aria-disabled={isButtonDisabled}
        className={clsx(
          // base
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",

          // disabled UI
          isButtonDisabled && [
            "opacity-50 cursor-not-allowed",
            "hover:bg-none",
          ],

          // sizes
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
          },

          // variants (aplicam mesmo disabled, mas visual fica claro)
          {
            "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500":
              variant === "primary",

            "bg-neutral-800 text-white hover:bg-neutral-700 focus-visible:ring-neutral-500":
              variant === "secondary",

            "border border-neutral-300 text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400":
              variant === "outline",

            "text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400":
              variant === "ghost",

            "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500":
              variant === "destructive",
          },

          // microinteração
          !isButtonDisabled && "active:scale-[0.98]",

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
              <span className="whitespace-nowrap">
                {loadingText}
              </span>
            )}
          </>
        ) : (
          <>
            {startContent && (
              <span className="flex items-center">
                {startContent}
              </span>
            )}

            <span className="whitespace-nowrap">
              {children}
            </span>

            {endContent && (
              <span className="flex items-center">
                {endContent}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
