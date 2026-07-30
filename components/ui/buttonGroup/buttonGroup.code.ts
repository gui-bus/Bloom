export const buttonGroupCode = `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "../button/button";

export type ButtonGroupProps = {
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  size?: ButtonProps["size"];
  radius?: ButtonProps["radius"];
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
    isLoading,
    isDisabled,
    ariaLabel,
    className,
  }: ButtonGroupProps) => {
    const childrenArray = React.Children.toArray(children);
    const count = childrenArray.length;

    const clonedChildren = React.useMemo(() => {
      return childrenArray.map((child, index) => {
        if (!React.isValidElement<ButtonProps>(child)) return child;

        const isFirst = index === 0;
        const isLast = index === count - 1;

        return React.cloneElement(child, {
          variant: child.props.variant || variant,
          color: child.props.color || color,
          size: child.props.size || size,
          radius: child.props.radius || radius,
          isLoading: child.props.isLoading !== undefined ? child.props.isLoading : isLoading,
          isDisabled: child.props.isDisabled !== undefined ? child.props.isDisabled : isDisabled,
          className: cn(
            child.props.className,
            "rounded-none",
            "focus-visible:z-10 focus-visible:relative",
            isFirst && "rounded-l-xl",
            isLast && "rounded-r-xl",
            !isFirst && !isLast && "-ml-px"
          ),
        });
      });
    }, [childrenArray, variant, color, size, radius, isLoading, isDisabled, count]);

    return (
      <div
        role="group"
        aria-label={ariaLabel}
        className={cn("inline-flex items-center", className)}
      >
        {clonedChildren}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";
`;
