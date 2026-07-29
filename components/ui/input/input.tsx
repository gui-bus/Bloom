import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "default" | "bordered" | "flat" | "underlined";
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: keyof typeof designRadius;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const inputVariants = cva(
  "w-full transition-colors flex items-center font-normal focus-within:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-background border border-input shadow-xs focus-within:border-ring focus-within:ring-1 focus-within:ring-ring",
        bordered: "bg-transparent border-2 border-input focus-within:border-primary",
        flat: "bg-muted/60 border-transparent hover:bg-muted/80 focus-within:bg-background focus-within:border-primary border",
        underlined: "bg-transparent border-b-2 border-input rounded-none px-0 focus-within:border-primary",
      },
      size: {
        sm: "h-8 px-2.5 text-xs gap-1.5",
        md: "h-10 px-3 text-sm gap-2",
        lg: "h-12 px-4 text-base gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = "default",
      color = "default",
      size = "md",
      radius = "lg",
      label,
      description,
      errorMessage,
      isInvalid = false,
      startContent,
      endContent,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold text-foreground/90 select-none"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            inputVariants({ variant, size }),
            variant !== "underlined" && designRadius[radius],
            isInvalid && "border-danger focus-within:border-danger focus-within:ring-danger text-danger",
            className
          )}
        >
          {startContent && <span className="text-muted-foreground shrink-0">{startContent}</span>}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={isInvalid ? true : undefined}
            className="w-full h-full bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
            {...props}
          />
          {endContent && <span className="text-muted-foreground shrink-0">{endContent}</span>}
        </div>
        {isInvalid && errorMessage ? (
          <p className="text-xs text-danger font-medium">{errorMessage}</p>
        ) : description ? (
          <p className="text-xs text-muted-foreground">{description}</p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
