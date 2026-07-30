export const formCode = `"use client";

import * as React from "react";
import {
  useForm,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
  UseFormProps,
} from "react-hook-form";
import { cn } from "@/lib/utils";

export interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
}

export function Form<TFieldValues extends FieldValues = FieldValues>({
  form,
  onSubmit,
  children,
  className,
  ...props
}: FormProps<TFieldValues>) {
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("space-y-4 w-full", className)}
      {...props}
    >
      {children}
    </form>
  );
}

export { useForm };
export type { UseFormReturn, SubmitHandler, UseFormProps };
`;
