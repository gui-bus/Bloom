import * as React from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "../button/button";

type ButtonGroupProps = {
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  size?: ButtonProps["size"];
  /**
   * Accessible label describing the purpose of this button group.
   * Required for screen readers to announce the group context.
   * Example: "Text formatting", "View options", "Pagination"
   */
  ariaLabel?: string;
};

export const ButtonGroup = React.memo(({
  children,
  variant,
  color,
  size,
  ariaLabel,
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
          // Ensure focused button's ring always renders above adjacent siblings
          "focus-visible:z-10 focus-visible:relative",
          isFirst && "rounded-l-xl",
          isLast && "rounded-r-xl",
          !isFirst && !isLast && "-ml-px"
        ),
      });
    });
  }, [children, variant, color, size, count]);

  return (
    // role="group" with aria-label semantically announces this as a related
    // collection of controls, enabling screen readers to provide context
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex"
    >
      {clonedChildren}
    </div>
  );
});

ButtonGroup.displayName = "ButtonGroup";
