export const formFieldCode = `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label/label";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  isRequired?: boolean;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  htmlFor?: string;
}

export function FormField({
  className,
  children,
  label,
  isRequired = false,
  description,
  errorMessage,
  isInvalid = false,
  htmlFor,
  ...props
}: FormFieldProps) {
  const generatedId = React.useId();
  const fieldId = htmlFor || generatedId;

  return (
    <div className={cn("w-full flex flex-col gap-1.5", className)} {...props}>
      {label && (
        <Label htmlFor={fieldId} isRequired={isRequired}>
          {label}
        </Label>
      )}
      <div className="w-full">
        {React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement<{ id?: string; isInvalid?: boolean }>, {
              id: fieldId,
              isInvalid: isInvalid || Boolean(errorMessage),
            })
          : children}
      </div>
      {isInvalid && errorMessage ? (
        <p className="text-xs text-rose-500 font-medium">{errorMessage}</p>
      ) : description ? (
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{description}</p>
      ) : null}
    </div>
  );
}
`;
