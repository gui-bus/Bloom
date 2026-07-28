export const buttonGroupCode = `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "../button/button";

type ButtonGroupProps = {
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  size?: ButtonProps["size"];
};

export const ButtonGroup = React.memo(({
  children,
  variant,
  color,
  size,
}: ButtonGroupProps) => {
  const count = React.Children.count(children);

  const clonedChildren = React.useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement<ButtonProps>(child)) return child;

      const isFirst = index === 0;
      const isLast = index === count - 1;

      return React.cloneElement(child, {
        variant,
        color,
        size,
        className: cn(
          child.props.className,
          "rounded-none",
          isFirst && "rounded-l-xl",
          isLast && "rounded-r-xl",
          !isFirst && !isLast && "-ml-px"
        ),
      });
    });
  }, [children, variant, color, size, count]);

  return (
    <div className="inline-flex">
      {clonedChildren}
    </div>
  );
});

ButtonGroup.displayName = "ButtonGroup";
`;
