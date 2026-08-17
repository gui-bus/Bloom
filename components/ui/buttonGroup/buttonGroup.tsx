"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "../button/button";

export type ButtonGroupProps = {
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  size?: ButtonProps["size"];
  radius?: ButtonProps["radius"];
  orientation?: "horizontal" | "vertical";
  isAttached?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  ariaLabel?: string;
  className?: string;
};

export const ButtonGroup = React.memo(
  ({
    children,
    variant,
    color,
    size,
    radius,
    orientation = "horizontal",
    isAttached = true,
    isLoading,
    isDisabled,
    ariaLabel,
    className,
  }: ButtonGroupProps) => {
    const clonedChildren = React.useMemo(() => {
      const childrenArray = React.Children.toArray(children);
      const count = childrenArray.length;
      return childrenArray.map((child, index) => {
        if (!React.isValidElement<ButtonProps>(child)) return child;

        const isFirst = index === 0;
        const isLast = index === count - 1;
        const isVertical = orientation === "vertical";

        const childRadius = child.props.radius || radius || "xl";
        let radiusClasses = "";

        if (isAttached) {
          if (isVertical) {
            if (isFirst)
              radiusClasses = `rounded-b-none rounded-t-${childRadius}`;
            else if (isLast)
              radiusClasses = `rounded-t-none rounded-b-${childRadius}`;
            else radiusClasses = "rounded-none";
          } else {
            if (isFirst)
              radiusClasses = `rounded-r-none rounded-l-${childRadius}`;
            else if (isLast)
              radiusClasses = `rounded-l-none rounded-r-${childRadius}`;
            else radiusClasses = "rounded-none";
          }
        }

        return React.cloneElement(child, {
          variant: child.props.variant || variant,
          color: child.props.color || color,
          size: child.props.size || size,
          radius: child.props.radius || radius,
          isLoading:
            child.props.isLoading !== undefined
              ? child.props.isLoading
              : isLoading,
          isDisabled:
            child.props.isDisabled !== undefined
              ? child.props.isDisabled
              : isDisabled,
          className: cn(
            child.props.className,
            isAttached && radiusClasses,
            "focus-visible:z-10 focus-visible:relative",
            isAttached && !isFirst && !isVertical && "-ml-px",
            isAttached && !isFirst && isVertical && "-mt-px",
          ),
        });
      });
    }, [
      children,
      variant,
      color,
      size,
      radius,
      orientation,
      isAttached,
      isLoading,
      isDisabled,
    ]);

    return (
      <div
        role="group"
        aria-label={ariaLabel}
        aria-orientation={orientation}
        className={cn(
          "inline-flex",
          orientation === "vertical"
            ? "flex-col items-stretch"
            : "flex-row items-center",
          !isAttached && (orientation === "vertical" ? "gap-2" : "gap-2"),
          className,
        )}
      >
        {clonedChildren}
      </div>
    );
  },
);

ButtonGroup.displayName = "ButtonGroup";
