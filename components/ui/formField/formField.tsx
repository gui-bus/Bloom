"use client";

import * as React from "react";
import { Label } from "@/components/ui/label/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";
import { cn } from "@/lib/utils";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  isRequired?: boolean;
  requiredTooltip?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  htmlFor?: string;
  maxLength?: number;
  currentLength?: number;
  helperAlign?: "left" | "right" | "between";
}

export function FormField({
  className,
  children,
  label,
  isRequired = false,
  requiredTooltip = "This field is required",
  description,
  errorMessage,
  isInvalid = false,
  htmlFor,
  maxLength,
  currentLength,
  helperAlign = "between",
  ...props
}: FormFieldProps) {
  const generatedId = React.useId();
  const fieldId = htmlFor || generatedId;

  const renderLabelContent = () => {
    if (!label) return null;
    if (!isRequired || !requiredTooltip) {
      return (
        <Label htmlFor={fieldId} isRequired={isRequired}>
          {label}
        </Label>
      );
    }

    return (
      <div className="flex items-center gap-1.5">
        <Label htmlFor={fieldId} isRequired={false}>
          {label}
        </Label>
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="text-rose-500 font-bold text-xs cursor-help select-none">
                *
              </span>
            </TooltipTrigger>
            <TooltipContent>{requiredTooltip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  };

  return (
    <div className={cn("w-full flex flex-col gap-1.5", className)} {...props}>
      {renderLabelContent()}
      <div className="w-full">
        {React.isValidElement(children)
          ? React.cloneElement(
              children as React.ReactElement<{
                id?: string;
                isInvalid?: boolean;
              }>,
              {
                id: fieldId,
                isInvalid: isInvalid || Boolean(errorMessage),
              },
            )
          : children}
      </div>

      <div
        className={cn(
          "flex items-center text-xs gap-2 min-h-4",
          helperAlign === "right" && "justify-end",
          helperAlign === "left" && "justify-start",
          helperAlign === "between" && "justify-between",
        )}
      >
        {isInvalid && errorMessage ? (
          <p className="text-rose-500 font-medium">{errorMessage}</p>
        ) : description ? (
          <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
        ) : (
          <div />
        )}

        {typeof maxLength === "number" && typeof currentLength === "number" && (
          <span
            className={cn(
              "font-mono text-[11px] shrink-0 ml-auto",
              currentLength > maxLength
                ? "text-rose-500 font-bold"
                : currentLength >= maxLength * 0.9
                  ? "text-amber-500 font-semibold"
                  : "text-zinc-400",
            )}
          >
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}
