"use client";

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
  scrollToFirstError?: boolean;
  confirmUnsavedChanges?: boolean;
  showResetButton?: boolean;
  onResetCustom?: () => void;
}

export function Form<TFieldValues extends FieldValues = FieldValues>({
  form,
  onSubmit,
  scrollToFirstError = true,
  confirmUnsavedChanges = false,
  showResetButton = false,
  onResetCustom,
  children,
  className,
  ...props
}: FormProps<TFieldValues>) {
  // Navigation guard for unsaved dirty changes
  React.useEffect(() => {
    if (!confirmUnsavedChanges) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (form.formState.isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [confirmUnsavedChanges, form.formState.isDirty]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await form.handleSubmit(onSubmit)(e);

    // If validation fails and scrollToFirstError is enabled, find first invalid input
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

  const handleReset = () => {
    form.reset();
    onResetCustom?.();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={cn("space-y-4 w-full relative", className)}
      {...props}
    >
      {form.formState.isDirty && confirmUnsavedChanges && (
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold flex items-center justify-between">
          <span>Unsaved changes detected in form.</span>
        </div>
      )}

      {children}

      {showResetButton && (
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={handleReset}
            disabled={!form.formState.isDirty}
            className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-40 transition-colors"
          >
            Reset Default Values
          </button>
        </div>
      )}
    </form>
  );
}

export { useForm };
export type { UseFormReturn, SubmitHandler, UseFormProps };
