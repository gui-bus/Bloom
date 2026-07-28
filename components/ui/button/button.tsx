"use client";
//#region Imports
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Ripple } from "@/components/utils/ripple/ripple";
import { useRipples } from "@/hooks/ripple/useRipple";
import { cn } from "@/lib/utils";
//#endregion

//#region Types
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type ButtonRadius =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";
type ButtonColor =
  | "accent"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "default";

type ButtonHover = "scale" | "lift";

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonBaseVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    loadingText?: string;
    loadingIcon?: React.ReactNode;
    isDisabled?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    badgeContent?: string;
    badgePosition?: "start" | "end";
    badgeCustomClassname?: string;
    hover?: ButtonHover;
    size?: ButtonSize;
    color?: ButtonColor;
    radius?: ButtonRadius;
    disableRipple?: boolean;
  };

type IconOnlyProps = {
  isIconOnly: true;
  ariaLabel: string;
};

type NormalButtonProps = {
  isIconOnly?: false;
  ariaLabel?: string;
};

export type ButtonProps = ButtonBaseProps & (IconOnlyProps | NormalButtonProps);
//#endregion

//#region Variants
const buttonBaseVariants = cva(
  "relative inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-xl",
  {
    variants: {
      size: {
        xs: "px-2 py-1 text-xs h-6",
        sm: "px-3 py-1.5 text-sm h-7",
        md: "px-4 py-2 text-sm h-9",
        lg: "px-5 py-2.5 text-base h-11",
        xl: "px-6 py-3 text-lg h-12",
        "2xl": "px-7 py-3.5 text-xl h-14",
        "3xl": "px-8 py-4 text-2xl h-16",
      },
      radius: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
      variant: {
        default: "shadow-md",
        bordered: "bg-transparent border-2 border-teal-300 shadow-sm",
        light: "bg-transparent shadow-none border border-transparent",
        flat: "bg-transparent shadow-none border border-transparent",
        ghost: "bg-transparent border-2 border-teal-300 shadow-sm",
        shadow: "shadow-lg",
        link: "bg-transparent underline text-sky-600 hover:text-sky-500 shadow-none border-none",
      },
      hover: {
        scale: "hover:scale-[1.03] active:scale-[0.97] will-change-transform",
        lift: "hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm will-change-transform",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);
//#endregion

//#region Static Color Mapping
const colorClasses: Record<ButtonColor, Record<string, string>> = {
  default: {
    default:
      "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 focus-visible:ring-neutral-400",
    bordered:
      "border border-neutral-300 text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-400",
    light:
      "bg-transparent text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-400",
    flat: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus-visible:ring-neutral-400",
    ghost:
      "bg-transparent text-neutral-700 hover:bg-neutral-200 focus-visible:ring-neutral-400 border-2 border-neutral-200",
    shadow:
      "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 focus-visible:ring-neutral-400 shadow-neutral-300/40 hover:shadow-neutral-400/40",
    link: "bg-transparent text-neutral-600 hover:text-neutral-800 underline shadow-none border-none",
  },
  primary: {
    default:
      "bg-sky-600 text-white hover:bg-sky-500 focus-visible:ring-sky-500",
    bordered: "border-sky-500 text-sky-500 focus-visible:ring-sky-500",
    light: "hover:bg-sky-100 focus-visible:ring-sky-500 text-sky-500",
    flat: "bg-sky-100 focus-visible:ring-sky-500 text-sky-500",
    ghost:
      "border-sky-500 text-sky-500 focus-visible:ring-sky-500 hover:bg-sky-500 hover:text-white",
    shadow:
      "bg-sky-600 text-white hover:bg-sky-500 focus-visible:ring-sky-500 shadow-sky-600 hover:shadow-sky-500",
    link: "bg-transparent underline text-sky-600 hover:text-sky-500 shadow-none border-none",
  },
  secondary: {
    default:
      "bg-amber-600 text-white hover:bg-amber-500 focus-visible:ring-amber-500",
    bordered:
      "border-amber-500 text-amber-500 focus-visible:ring-amber-500",
    light: "hover:bg-amber-100 focus-visible:ring-amber-500 text-amber-500",
    flat: "bg-amber-100 focus-visible:ring-amber-500 text-amber-500",
    ghost:
      "border-amber-500 text-amber-500 focus-visible:ring-amber-500 hover:bg-amber-500 hover:text-white",
    shadow:
      "bg-amber-600 text-white hover:bg-amber-500 focus-visible:ring-amber-500 shadow-amber-600 hover:shadow-amber-500",
    link: "bg-transparent underline text-amber-600 hover:text-amber-500 shadow-none border-none",
  },
  accent: {
    default:
      "bg-teal-600 text-white hover:bg-teal-500 focus-visible:ring-teal-500",
    bordered: "border-teal-500 text-teal-500 focus-visible:ring-teal-500",
    light: "hover:bg-teal-100 focus-visible:ring-sky-500 text-teal-500",
    flat: "bg-teal-100 focus-visible:ring-teal-500 text-teal-500",
    ghost:
      "border-teal-500 text-teal-500 focus-visible:ring-teal-500 hover:bg-teal-500 hover:text-white",
    shadow:
      "bg-teal-600 text-white hover:bg-teal-500 focus-visible:ring-teal-500 shadow-teal-600 hover:shadow-teal-500",
    link: "bg-transparent underline text-teal-600 hover:text-teal-500 shadow-none border-none",
  },
  success: {
    default:
      "bg-green-600 text-white hover:bg-green-500 focus-visible:ring-green-500",
    bordered:
      "border-green-500 text-green-500 focus-visible:ring-green-500",
    light: "hover:bg-green-100 focus-visible:ring-green-500 text-green-500",
    flat: "bg-green-100 focus-visible:ring-green-500 text-green-500",
    ghost:
      "border-green-500 text-green-500 focus-visible:ring-green-500 hover:bg-green-500 hover:text-white",
    shadow:
      "bg-green-600 text-white hover:bg-green-500 focus-visible:ring-green-500 shadow-green-600 hover:shadow-green-500",
    link: "bg-transparent underline text-green-600 hover:text-green-500 shadow-none border-none",
  },
  warning: {
    default:
      "bg-yellow-500 text-white hover:bg-yellow-400 focus-visible:ring-yellow-400",
    bordered:
      "border-yellow-400 text-yellow-400 focus-visible:ring-yellow-400",
    light:
      "hover:bg-yellow-100 focus-visible:ring-yellow-400 text-yellow-400",
    flat: "bg-yellow-100 focus-visible:ring-yellow-400 text-yellow-400",
    ghost:
      "border-yellow-400 text-yellow-400 focus-visible:ring-yellow-400 hover:bg-yellow-400 hover:text-white",
    shadow:
      "bg-yellow-500 text-white hover:bg-yellow-400 focus-visible:ring-yellow-400 shadow-yellow-500 hover:shadow-yellow-400",
    link: "bg-transparent underline text-yellow-500 hover:text-yellow-400 shadow-none border-none",
  },
  danger: {
    default:
      "bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-500",
    bordered: "border-red-500 text-red-500 focus-visible:ring-red-500",
    light: "hover:bg-red-100 focus-visible:ring-red-500 text-red-500",
    flat: "bg-red-100 focus-visible:ring-red-500 text-red-500",
    ghost:
      "border-red-500 text-red-500 focus-visible:ring-red-500 hover:bg-red-500 hover:text-white",
    shadow:
      "bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-500 shadow-red-600 hover:shadow-red-500",
    link: "bg-transparent underline text-red-600 hover:text-red-500 shadow-none border-none",
  },
};
//#endregion

//#region Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      variant,
      isLoading = false,
      loadingText,
      loadingIcon,
      isDisabled = false,
      startContent,
      endContent,
      badgeContent,
      badgePosition = "end",
      badgeCustomClassname,
      color = "default",
      radius = "xl",
      size = "md",
      hover = "scale",
      disableRipple = false,
      disabled,
      children,
      className,
      onClick,
      type,
      isIconOnly = false,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const { ripples, addRipple, removeRipple } = useRipples();

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isDisabled || isLoading) return;

        if (!disableRipple) {
          const rect = e.currentTarget.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          addRipple(e.clientX - rect.left, e.clientY - rect.top, size);
        }

        onClick?.(e);
      },
      [isDisabled, isLoading, disableRipple, addRipple, onClick]
    );

    const activeVariant = variant || "default";

    return (
      <Comp
        ref={ref}
        type={type ?? "button"}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        aria-label={ariaLabel}
        onClick={handleClick}
        className={cn(
          buttonBaseVariants({ size, variant, radius, hover }),
          colorClasses[color][activeVariant],
          className,
          "cursor-pointer relative overflow-hidden",
          isLoading && "cursor-wait opacity-50",
          isDisabled && "cursor-not-allowed opacity-50",
          isIconOnly && "aspect-square"
        )}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            {loadingIcon || (
              <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                aria-hidden
              />
            )}
            <span>{loadingText || children}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            {badgeContent && badgePosition === "start" && (
              <span
                className={cn(
                  "inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-primary text-white mr-2",
                  badgeCustomClassname
                )}
              >
                {badgeContent}
              </span>
            )}
            {startContent && (
              <span className={cn(!isIconOnly && "mr-2")}>{startContent}</span>
            )}
            {children && <span>{children}</span>}
            {endContent && (
              <span className={cn(!isIconOnly && "ml-2")}>{endContent}</span>
            )}
            {badgeContent && badgePosition === "end" && (
              <span
                className={cn(
                  "inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-primary text-white ml-2",
                  badgeCustomClassname
                )}
              >
                {badgeContent}
              </span>
            )}
          </div>
        )}

        {ripples.map((r) => (
          <Ripple
            key={r.id}
            x={r.x}
            y={r.y}
            size={r.size}
            onComplete={() => removeRipple(r.id)}
          />
        ))}
      </Comp>
    );
  }
);

Button.displayName = "Button";
//#endregion

export { Button, buttonBaseVariants };
