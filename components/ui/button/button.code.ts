export const buttonCode = `"use client";
//#region Imports
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Ripple } from "@/components/utils/ripple";
import { useRipples } from "@/hooks/useRipple";
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
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "default";

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
        link: "bg-transparent underline text-sky-600 hover:text-sky-700 shadow-none border-none",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);
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

    //#region Color mapping
    const colorClasses: Record<ButtonColor, Record<string, string>> = {
      default: {
        default:
          "bg-slate-600 text-white hover:bg-slate-700 focus-visible:ring-slate-500",
        bordered:
          "border-slate-500 text-slate-700 focus-visible:ring-slate-500",
        light: "hover:bg-slate-100 focus-visible:ring-slate-500 text-slate-700",
        flat: "bg-slate-100 focus-visible:ring-slate-500 text-slate-700",
        ghost:
          "border-slate-500 text-slate-700 focus-visible:ring-slate-500 hover:bg-slate-500 hover:text-white",
        shadow:
          "bg-slate-600 text-white hover:bg-slate-700 focus-visible:ring-slate-500 shadow-slate-600",
        link: "bg-transparent underline text-slate-600 hover:text-slate-700 shadow-none border-none",
      },
      primary: {
        default:
          "bg-sky-600 text-white hover:bg-sky-700 focus-visible:ring-sky-500",
        bordered: "border-sky-500 text-sky-700 focus-visible:ring-sky-500",
        light: "hover:bg-sky-100 focus-visible:ring-sky-500 text-sky-700",
        flat: "bg-sky-100 focus-visible:ring-sky-500 text-sky-700",
        ghost:
          "border-sky-500 text-sky-700 focus-visible:ring-sky-500 hover:bg-sky-500 hover:text-white",
        shadow:
          "bg-sky-600 text-white hover:bg-sky-700 focus-visible:ring-sky-500 shadow-sky-600",
        link: "bg-transparent underline text-sky-600 hover:text-sky-700 shadow-none border-none",
      },
      secondary: {
        default:
          "bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-500",
        bordered: "border-teal-500 text-teal-700 focus-visible:ring-teal-500",
        light: "hover:bg-teal-100 focus-visible:ring-sky-500 text-teal-700",
        flat: "bg-teal-100 focus-visible:ring-teal-500 text-teal-700",
        ghost:
          "border-teal-500 text-teal-700 focus-visible:ring-teal-500 hover:bg-teal-500 hover:text-white",
        shadow:
          "bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-500 shadow-teal-600",
        link: "bg-transparent underline text-teal-600 hover:text-teal-700 shadow-none border-none",
      },
      success: {
        default:
          "bg-lime-600 text-white hover:bg-lime-700 focus-visible:ring-lime-500",
        bordered: "border-lime-500 text-lime-700 focus-visible:ring-lime-500",
        light: "hover:bg-lime-100 focus-visible:ring-lime-500 text-lime-700",
        flat: "bg-lime-100 focus-visible:ring-lime-500 text-lime-700",
        ghost:
          "border-lime-500 text-lime-700 focus-visible:ring-lime-500 hover:bg-lime-500 hover:text-white",
        shadow:
          "bg-lime-600 text-white hover:bg-lime-700 focus-visible:ring-lime-500 shadow-lime-600",
        link: "bg-transparent underline text-lime-600 hover:text-lime-700 shadow-none border-none",
      },
      warning: {
        default:
          "bg-amber-600 text-white hover:bg-amber-700 focus-visible:ring-amber-500",
        bordered:
          "border-amber-500 text-amber-700 focus-visible:ring-amber-500",
        light: "hover:bg-amber-100 focus-visible:ring-amber-500 text-amber-700",
        flat: "bg-amber-100 focus-visible:ring-amber-500 text-amber-700",
        ghost:
          "border-amber-500 text-amber-700 focus-visible:ring-amber-500 hover:bg-amber-500 hover:text-white",
        shadow:
          "bg-amber-600 text-white hover:bg-amber-700 focus-visible:ring-amber-500 shadow-amber-600",
        link: "bg-transparent underline text-amber-600 hover:text-amber-700 shadow-none border-none",
      },
      danger: {
        default:
          "bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-500",
        bordered: "border-rose-500 text-rose-700 focus-visible:ring-rose-500",
        light: "hover:bg-rose-100 focus-visible:ring-rose-500 text-rose-700",
        flat: "bg-rose-100 focus-visible:ring-rose-500 text-rose-700",
        ghost:
          "border-rose-500 text-rose-700 focus-visible:ring-rose-500 hover:bg-rose-500 hover:text-white",
        shadow:
          "bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-500 shadow-rose-600",
        link: "bg-transparent underline text-rose-600 hover:text-rose-700 shadow-none border-none",
      },
    };
    //#endregion

    const { ripples, addRipple } = useRipples();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled || isLoading) return;

      if (!disableRipple) {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        addRipple(e.clientX - rect.left, e.clientY - rect.top, size);
      }

      onClick?.(e);
    };

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
          buttonBaseVariants({ size, variant, radius }),
          colorClasses[color][variant || "default"],
          className,
          "cursor-pointer active:scale-[0.98] relative overflow-hidden",
          isLoading && "cursor-wait opacity-50",
          isDisabled && "cursor-not-allowed opacity-50",
          isIconOnly && "w-5 aspect-square"
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
            onComplete={() => {}}
          />
        ))}
      </Comp>
    );
  }
);

Button.displayName = "Button";
//#endregion

export { Button, buttonBaseVariants };
`.trim();
