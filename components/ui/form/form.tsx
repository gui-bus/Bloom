"use client";

import type * as React from "react";
import {
  Controller,
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  type UseFormProps,
  type UseFormReturn,
  useFieldArray,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { cn } from "@/lib/utils";

export interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
  scrollToFirstError?: boolean;
}

export function Form<TFieldValues extends FieldValues = FieldValues>({
  form,
  onSubmit,
  scrollToFirstError = true,
  children,
  className,
  ...props
}: FormProps<TFieldValues>) {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await form.handleSubmit(onSubmit)(e);

    if (scrollToFirstError && Object.keys(form.formState.errors).length > 0) {
      setTimeout(() => {
        const firstErrorKey = Object.keys(form.formState.errors)[0];
        const errorElement = document.querySelector(
          `[name="${firstErrorKey}"], #${firstErrorKey}`,
        );
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
          (errorElement as HTMLElement).focus?.();
        }
      }, 50);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleFormSubmit}
        className={cn("space-y-4 w-full relative", className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export type { SubmitHandler, UseFormProps, UseFormReturn };
export {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
  useWatch,
};
