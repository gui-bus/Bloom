"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  variant?: "default" | "bordered" | "flat" | "underlined" | "filled" | "glassmorphism" | "glow";
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
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
}

const textareaVariants = cva(
  "w-full transition-colors flex font-normal focus-within:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none p-3",
  {
    variants: {
      variant: {
        default: "bg-background border border-input shadow-xs focus-within:border-ring focus-within:ring-1 focus-within:ring-ring",
        bordered: "bg-transparent border-2 border-input focus-within:border-primary",
        flat: "bg-muted/60 border-transparent hover:bg-muted/80 focus-within:bg-background focus-within:border-primary border",
        underlined: "bg-transparent border-b-2 border-input rounded-none px-0 focus-within:border-primary",
        filled: "bg-muted border border-transparent focus-within:border-ring focus-within:ring-1 focus-within:ring-ring",
        glassmorphism: "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 focus-within:border-primary shadow-lg",
        glow: "bg-background border border-input shadow-xs focus-within:border-primary focus-within:shadow-[0_0_10px_rgba(var(--primary-rgb,59,130,246),0.3)]",
      },
      size: {
        sm: "min-h-[70px] text-xs",
        md: "min-h-[100px] text-sm",
        lg: "min-h-[140px] text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
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
      disabled,
      id,
      value,
      defaultValue,
      onChange,
      rows,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const innerRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement);

    const [currentLength, setCurrentLength] = React.useState<number>(() => {
      const initialVal = value || defaultValue || "";
      return String(initialVal).length;
    });

    const adjustHeight = React.useCallback(() => {
      const textarea = innerRef.current;
      if (!textarea || !autoResize) return;
      textarea.style.height = "auto";
      const lineHeight = 20; // approximate
      const minHeight = minRows * lineHeight;
      const maxHeight = maxRows * lineHeight;
      const newHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);
      textarea.style.height = `${newHeight}px`;
    }, [autoResize, minRows, maxRows]);

    React.useEffect(() => {
      adjustHeight();
    }, [value, adjustHeight]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCurrentLength(e.target.value.length);
      adjustHeight();
      onChange?.(e);
    };

    const labelEl = label && (
      <label
        htmlFor={textareaId}
        className={cn(
          "text-xs font-semibold text-foreground/90 select-none",
          labelPlacement === "inside" && "absolute top-2 left-3 text-[10px] text-muted-foreground z-10 pointer-events-none"
        )}
      >
        {label}
      </label>
    );

    const textareaContainer = (
      <div
        className={cn(
          textareaVariants({ variant, size }),
          variant !== "underlined" && designRadius[radius],
          isInvalid && "border-danger focus-within:border-danger focus-within:ring-danger text-danger",
          labelPlacement === "inside" && "relative pt-6",
          className
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
            "w-full h-full bg-transparent outline-none placeholder:text-muted-foreground text-foreground",
            autoResize ? "resize-none" : "resize-y"
          )}
          {...props}
        />
      </div>
    );

    const bottomContent = (
      <div className="flex justify-between items-center text-xs">
        {isInvalid && errorMessage ? (
          <p className="text-danger font-medium">{errorMessage}</p>
        ) : description ? (
          <p className="text-muted-foreground">{description}</p>
        ) : <span />}
        {maxCount && (
          <span className="text-muted-foreground ml-auto">
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
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
