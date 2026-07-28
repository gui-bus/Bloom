"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, type AvatarProps } from "@/components/ui/avatar/avatar";

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: number;
  size?: AvatarProps["size"];
  color?: AvatarProps["color"];
  radius?: AvatarProps["radius"];
  isBordered?: boolean;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      children,
      max,
      size = "md",
      color = "default",
      radius = "full",
      isBordered = true,
      className,
      ...props
    },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children);
    const totalAvatars = childrenArray.length;
    const hasMax = typeof max === "number" && max > 0 && max < totalAvatars;
    const visibleAvatars = hasMax ? childrenArray.slice(0, max) : childrenArray;
    const excessCount = hasMax ? totalAvatars - max : 0;

    return (
      <div
        ref={ref}
        role="group"
        aria-label="Avatar group"
        className={cn("flex items-center -space-x-3 hover:space-x-1 transition-all duration-300", className)}
        {...props}
      >
        {visibleAvatars.map((child, index) => {
          if (!React.isValidElement<AvatarProps>(child)) return child;

          return React.cloneElement(child, {
            key: index,
            size: child.props.size || size,
            color: child.props.color || color,
            radius: child.props.radius || radius,
            isBordered: child.props.isBordered !== undefined ? child.props.isBordered : isBordered,
          });
        })}

        {excessCount > 0 && (
          <Avatar
            size={size}
            color={color}
            radius={radius}
            isBordered={isBordered}
          >
            <AvatarFallback className="bg-muted text-foreground font-semibold">
              +{excessCount}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };
