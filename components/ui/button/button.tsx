"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Ripple } from "@/lib/ripple/ripple";
import { useRipples } from "@/lib/ripple/useRipple";
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
    isFullWidth?: boolean;
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
  "relative inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-200 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl",
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
  },
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
      isFullWidth = false,
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
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { ripples, addRipple, removeRipple } = useRipples();

    const isEffectivelyDisabled = isDisabled || disabled;
    const nativeDisabled = !asChild ? isEffectivelyDisabled : undefined;
    const ariaDisabled = isEffectivelyDisabled || isLoading || undefined;

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isEffectivelyDisabled || isLoading) return;

        if (!disableRipple) {
          const rect = e.currentTarget.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          addRipple(e.clientX - rect.left, e.clientY - rect.top, size);
        }

        onClick?.(e);
      },
      [isEffectivelyDisabled, isLoading, disableRipple, addRipple, onClick],
    );

    const activeVariant = variant || "default";

    return (
      <Comp
        ref={ref}
        type={type ?? "button"}
        disabled={nativeDisabled}
        aria-disabled={ariaDisabled}
        aria-busy={isLoading || undefined}
        aria-label={ariaLabel || undefined}
        tabIndex={asChild && isEffectivelyDisabled ? -1 : undefined}
        onClick={handleClick}
        className={cn(
          buttonBaseVariants({ size, variant, radius, hover }),
          designColors[color][activeVariant],
          className,
          "cursor-pointer relative overflow-hidden",
          isFullWidth && "w-full flex flex-1 justify-center",
          isLoading && "cursor-wait opacity-50",
          isEffectivelyDisabled && "cursor-not-allowed opacity-50",
          asChild && isEffectivelyDisabled && "pointer-events-none",
          isIconOnly && "aspect-square",
        )}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            {loadingIcon ? (
              <span aria-hidden="true">{loadingIcon}</span>
            ) : (
              <span
                role="status"
                className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                aria-label="Loading"
              />
            )}
            <span>{loadingText || children}</span>
            <span className="sr-only" aria-live="polite" aria-atomic="true">
              {loadingText ?? "Loading, please wait"}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            {badgeContent && badgePosition === "start" && (
              <span
                className={cn(
                  "inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-primary text-white mr-2",
                  badgeCustomClassname,
                )}
                aria-hidden="true"
              >
                {badgeContent}
              </span>
            )}
            {startContent && (
              <span className={cn(!isIconOnly && "mr-2")} aria-hidden="true">
                {startContent}
              </span>
            )}
            {children && <span>{children}</span>}
            {endContent && (
              <span className={cn(!isIconOnly && "ml-2")} aria-hidden="true">
                {endContent}
              </span>
            )}
            {badgeContent && badgePosition === "end" && (
              <span
                className={cn(
                  "inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-primary text-white ml-2",
                  badgeCustomClassname,
                )}
                aria-hidden="true"
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
  },
);

Button.displayName = "Button";

export { Button, buttonBaseVariants };
