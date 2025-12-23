import * as React from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "../button/button";

type ButtonGroupProps = {
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  size?: ButtonProps["size"];
};

export const ButtonGroup = ({
  children,
  variant,
  color,
  size,
}: ButtonGroupProps) => {
  const count = React.Children.count(children);

  return (
    <div className="inline-flex">
      {React.Children.map(children, (child, index) => {
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
      })}
    </div>
  );
};
