"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Ripple } from "@/components/utils/ripple/ripple";
import { useRipples } from "@/hooks/ripple/useRipple";
import { cn } from "@/lib/utils";
import { designColors, designSizes, designRadius } from "@/lib/design-system";

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

const buttonBaseVariants = cva(
  "relative inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-xl",
  {
    variants: {
      size: designSizes,
      radius: designRadius,
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
          designColors[color][activeVariant],
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

export { Button, buttonBaseVariants };
