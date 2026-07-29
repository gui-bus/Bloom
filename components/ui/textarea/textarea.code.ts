export const textareaCode = `import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "bordered" | "flat" | "underlined";
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: keyof typeof designRadius;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  maxCount?: number;
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
      description,
      errorMessage,
      isInvalid = false,
      maxCount,
      disabled,
      id,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const [currentLength, setCurrentLength] = React.useState<number>(() => {
      const initialVal = value || defaultValue || "";
      return String(initialVal).length;
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCurrentLength(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-xs font-semibold text-foreground/90 select-none"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            textareaVariants({ variant, size }),
            variant !== "underlined" && designRadius[radius],
            isInvalid && "border-danger focus-within:border-danger focus-within:ring-danger text-danger",
            className
          )}
        >
          <textarea
            ref={ref}
            id={textareaId}
            disabled={disabled}
            aria-invalid={isInvalid ? true : undefined}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            maxLength={maxCount}
            className="w-full h-full bg-transparent outline-none placeholder:text-muted-foreground text-foreground resize-y"
            {...props}
          />
        </div>
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
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };`;
