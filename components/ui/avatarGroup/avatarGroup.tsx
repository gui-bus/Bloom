"use client";

import * as React from "react";
import {
  Avatar,
  AvatarFallback,
  type AvatarProps,
  AvatarContext,
} from "@/components/ui/avatar/avatar";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";

export type AvatarGroupOrientation = "horizontal" | "vertical";
export type AvatarGroupOverlap = "sm" | "md" | "lg";

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: number;
  total?: number;
  orientation?: AvatarGroupOrientation;
  overlap?: AvatarGroupOverlap;
  size?: AvatarProps["size"];
  color?: AvatarProps["color"];
  radius?: AvatarProps["radius"];
  isBordered?: boolean;
  isGrid?: boolean;
  isDisabled?: boolean;
  isPressable?: boolean;
  showTooltip?: boolean;
  renderCount?: (count: number) => React.ReactNode;
}

const overlapHorizontal: Record<AvatarGroupOverlap, string> = {
  sm: "-space-x-1.5 hover:-space-x-1",
  md: "-space-x-3 hover:-space-x-1.5",
  lg: "-space-x-4 hover:-space-x-2",
};

const overlapVertical: Record<AvatarGroupOverlap, string> = {
  sm: "-space-y-1.5 hover:-space-y-1",
  md: "-space-y-3 hover:-space-y-1.5",
  lg: "-space-y-4 hover:-space-y-2",
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      children,
      max,
      total,
      orientation = "horizontal",
      overlap = "md",
      size = "md",
      color = "default",
      radius = "full",
      isBordered = true,
      isGrid = false,
      isDisabled = false,
      isPressable = false,
      showTooltip = false,
      renderCount,
      className,
      ...props
    },
    ref,
  ) => {
    const childrenArray = React.Children.toArray(children);
    const countTotal = total ?? childrenArray.length;
    const hasMax =
      typeof max === "number" && max > 0 && max < childrenArray.length;
    const visibleAvatars = hasMax ? childrenArray.slice(0, max) : childrenArray;
    const excessCount = hasMax
      ? countTotal - max
      : countTotal > childrenArray.length
        ? countTotal - childrenArray.length
        : 0;

    const isVertical = orientation === "vertical";

    const groupContent = (
      <AvatarContext.Provider value={{ color, isInGroup: true }}>
        <div
        ref={ref}
        role="group"
        aria-label="Avatar group"
        className={cn(
          "inline-flex transition-all duration-300 ease-out",
          isGrid
            ? "flex-wrap gap-2"
            : isVertical
              ? cn("flex-col items-start", overlapVertical[overlap])
              : cn("items-center", overlapHorizontal[overlap]),
          isDisabled && "opacity-50 grayscale pointer-events-none",
          className,
        )}
        {...props}
      >
        {visibleAvatars.map((child, index) => {
          if (!React.isValidElement<AvatarProps>(child)) return child;

          const clonedAvatar = React.cloneElement(child, {
            size: child.props.size || size,
            color: child.props.color || color,
            radius: child.props.radius || radius,
            isBordered:
              child.props.isBordered !== undefined
                ? child.props.isBordered
                : isBordered,
            isDisabled:
              child.props.isDisabled !== undefined
                ? child.props.isDisabled
                : isDisabled,
            isPressable:
              child.props.isPressable !== undefined
                ? child.props.isPressable
                : isPressable,
            className: cn(
              "ring-2 ring-white dark:ring-zinc-900 transition-all duration-300 ease-out",
              child.props.className,
            ),
          });

          const avatarItem = (
            <div
              className={cn(
                "relative transition-all duration-300 ease-out hover:z-30 hover:scale-105",
                isVertical ? "hover:translate-x-1" : "hover:-translate-y-1",
              )}
              style={{ zIndex: visibleAvatars.length - index }}
            >
              {clonedAvatar}
            </div>
          );

          if (showTooltip) {
            const label = child.props.title || child.props.alt || "User";
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  {avatarItem}
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            );
          }

          return (
            <React.Fragment key={index}>
              {avatarItem}
            </React.Fragment>
          );
        })}

        {excessCount > 0 && (
          <div
            className={cn(
              "relative transition-all duration-300 ease-out hover:z-30 hover:scale-105",
              isVertical ? "hover:translate-x-1" : "hover:-translate-y-1",
            )}
            style={{ zIndex: 0 }}
          >
            <Avatar
              size={size}
              color={color}
              radius={radius}
              isBordered={isBordered}
              className="ring-2 ring-white dark:ring-zinc-900"
            >
              {renderCount ? (
                renderCount(excessCount)
              ) : (
                <AvatarFallback className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-xs select-none">
                  +{excessCount}
                </AvatarFallback>
              )}
            </Avatar>
          </div>
        )}
        </div>
      </AvatarContext.Provider>
    );

    if (showTooltip) {
      return (
        <TooltipProvider>
          {groupContent}
        </TooltipProvider>
      );
    }

    return groupContent;
  },
);

AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };
