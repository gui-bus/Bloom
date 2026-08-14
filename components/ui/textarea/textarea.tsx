"use client";

import { cva } from "class-variance-authority";
import * as React from "react";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  variant?:
    | "default"
    | "bordered"
    | "flat"
    | "underlined"
    | "filled"
    | "glassmorphism"
    | "gradient-border"
    | "glow";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: keyof typeof designRadius;
  label?: React.ReactNode;
  labelPlacement?: "top" | "left" | "inside";
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  maxCount?: number;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
  isRequired?: boolean;
}

const textareaVariants = cva(
  "w-full transition-all flex font-medium focus-within:outline-none disabled:opacity-35 disabled:cursor-not-allowed p-3.5",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20",
        bordered:
          "bg-transparent border-2 border-zinc-200 dark:border-zinc-800 focus-within:border-sky-500",
        flat: "bg-zinc-100 dark:bg-zinc-800/60 border-transparent hover:bg-zinc-200/60 dark:hover:bg-zinc-800 focus-within:bg-white dark:focus-within:bg-zinc-900 focus-within:border-sky-500 border",
        underlined:
          "bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 rounded-none px-0 focus-within:border-sky-500",
        filled:
          "bg-zinc-100 dark:bg-zinc-800 border border-transparent focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20",
        glassmorphism:
          "backdrop-blur-md bg-white/40 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-700/50 focus-within:border-sky-500 shadow-md",
        "gradient-border":
          "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 relative [background-clip:padding-box] border border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-sky-500 before:via-indigo-500 before:to-pink-500 focus-within:ring-2 focus-within:ring-indigo-500/30",
        glow: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus-within:border-sky-500 focus-within:shadow-[0_0_12px_rgba(56,189,248,0.3)]",
      },
      size: {
        sm: "min-h-[70px] text-xs",
        md: "min-h-[100px] text-xs",
        lg: "min-h-[140px] text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant = "default",
      color = "default",
      size = "md",
      radius = "lg",
      label,
      labelPlacement = "top",
      description,
      errorMessage,
      isInvalid = false,
      maxCount,
      autoResize = false,
      minRows = 3,
      maxRows = 10,
      isRequired = false,
      disabled,
      id,
      value,
      defaultValue,
      onChange,
      rows,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const innerRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(
      ref,
      () => innerRef.current as HTMLTextAreaElement,
    );

    const [currentLength, setCurrentLength] = React.useState<number>(() => {
      const initialVal = value || defaultValue || "";
      return String(initialVal).length;
    });

    const adjustHeight = React.useCallback(() => {
      const textarea = innerRef.current;
      if (!textarea || !autoResize) return;
      textarea.style.height = "auto";
      const lineHeight = 20;
      const minHeight = minRows * lineHeight;
      const maxHeight = maxRows * lineHeight;
      const newHeight = Math.min(
        Math.max(textarea.scrollHeight, minHeight),
        maxHeight,
      );
      textarea.style.height = `${newHeight}px`;
    }, [autoResize, minRows, maxRows]);

    React.useEffect(() => {
      adjustHeight();
    }, [adjustHeight]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCurrentLength(e.target.value.length);
      adjustHeight();
      onChange?.(e);
    };

    const labelEl = label && (
      <label
        htmlFor={textareaId}
        className={cn(
          "text-xs font-bold text-zinc-900 dark:text-zinc-100 select-none",
          labelPlacement === "inside" &&
            "absolute top-2 left-3.5 text-[10px] text-zinc-400 dark:text-zinc-500 z-10 pointer-events-none",
        )}
      >
        {label}
        {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
      </label>
    );

    const textareaContainer = (
      <div
        className={cn(
          textareaVariants({ variant, size }),
          variant !== "underlined" && designRadius[radius],
          isInvalid &&
            "border-rose-500 focus-within:border-rose-500 focus-within:ring-rose-500/20 text-rose-600 dark:text-rose-400",
          labelPlacement === "inside" && "relative pt-6",
          className,
        )}
      >
        <textarea
          ref={innerRef}
          id={textareaId}
          disabled={disabled}
          aria-invalid={isInvalid ? true : undefined}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          maxLength={maxCount}
          rows={rows || (autoResize ? minRows : undefined)}
          className={cn(
            "w-full h-full bg-transparent outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-zinc-900 dark:text-zinc-100",
            autoResize ? "resize-none" : "resize-y",
          )}
          {...props}
        />
      </div>
    );

    const bottomContent = (
      <div className="flex justify-between items-center text-xs">
        {isInvalid && errorMessage ? (
          <p className="text-rose-500 font-semibold text-xs">{errorMessage}</p>
        ) : description ? (
          <p className="text-zinc-500 dark:text-zinc-400 text-xs">
            {description}
          </p>
        ) : (
          <span />
        )}
        {maxCount && (
          <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[11px] ml-auto">
            {currentLength}/{maxCount}
          </span>
        )}
      </div>
    );

    if (labelPlacement === "left") {
      return (
        <div className="w-full flex items-start gap-3">
          {labelEl}
          <div className="flex-1 flex flex-col gap-1.5">
            {textareaContainer}
            {bottomContent}
          </div>
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col gap-1.5">
        {labelPlacement === "top" && labelEl}
        {labelPlacement === "inside" && labelEl}
        {textareaContainer}
        {bottomContent}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
