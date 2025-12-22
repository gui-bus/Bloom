export const buttonCode =
  `import { ButtonHTMLAttributes, forwardRef } from "react";
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
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={clsx(
          // base
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none min-w-fit wrap-break-word",

          // sizes
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
          },

          // variants
          {
            // primary
            "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500":
              variant === "primary",

            // secondary
            "bg-neutral-800 text-white hover:bg-neutral-700 focus-visible:ring-neutral-500":
              variant === "secondary",

            // outline
            "border border-neutral-300 text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400":
              variant === "outline",

            // ghost
            "text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400":
              variant === "ghost",

            // destructive
            "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500":
              variant === "destructive",
          },

          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        )}

        {props.startContent}

        {children}

        {props.endContent}
      </button>
    );
  }
);

Button.displayName = "Button";

`.trim();
