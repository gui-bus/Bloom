"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";
import { Icon } from "@iconify/react";
import { useClipboard } from "@/lib/hooks/useClipboard";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  variant?: "default" | "bordered" | "flat" | "underlined" | "filled" | "glassmorphism" | "glow";
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: keyof typeof designRadius;
  label?: React.ReactNode;
  labelPlacement?: "top" | "left" | "inside";
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isClearable?: boolean;
  isPasswordToggle?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  showCharacterCount?: boolean;
  isCopyable?: boolean;
  onClear?: () => void;
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
        filled: "bg-muted border border-transparent focus-within:border-ring focus-within:ring-1 focus-within:ring-ring",
        glassmorphism: "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 focus-within:border-primary shadow-lg",
        glow: "bg-background border border-input shadow-xs focus-within:border-primary focus-within:shadow-[0_0_10px_rgba(var(--primary-rgb,59,130,246),0.3)]",
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
      labelPlacement = "top",
      description,
      errorMessage,
      isInvalid = false,
      startContent,
      endContent,
      isClearable = false,
      isPasswordToggle = false,
      prefix,
      suffix,
      showCharacterCount = false,
      isCopyable = false,
      onClear,
      disabled,
      id,
      type,
      value,
      defaultValue,
      onChange,
      maxLength,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const [internalValue, setInternalValue] = React.useState(defaultValue?.toString() || "");
    const [showPassword, setShowPassword] = React.useState(false);
    const { copy, copied } = useClipboard();

    const currentValue = value !== undefined ? value.toString() : internalValue;

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value);
        onChange?.(e);
      },
      [onChange]
    );

    const handleClear = React.useCallback(() => {
      setInternalValue("");
      onClear?.();
      // Dispatch synthetic event for controlled components
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )?.set;
      const inputEl = document.getElementById(inputId) as HTMLInputElement;
      if (inputEl && nativeInputValueSetter) {
        nativeInputValueSetter.call(inputEl, "");
        inputEl.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, [inputId, onClear]);

    const effectiveType = isPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

    const labelEl = label && (
      <label
        htmlFor={inputId}
        className={cn(
          "text-xs font-semibold text-foreground/90 select-none",
          labelPlacement === "inside" && "absolute top-1 left-3 text-[10px] text-muted-foreground z-10 pointer-events-none"
        )}
      >
        {label}
      </label>
    );

    const inputWrapper = (
      <div
        className={cn(
          inputVariants({ variant, size }),
          variant !== "underlined" && designRadius[radius],
          isInvalid && "border-danger focus-within:border-danger focus-within:ring-danger text-danger",
          labelPlacement === "inside" && "relative pt-4",
          className
        )}
      >
        {labelPlacement === "inside" && labelEl}
        {prefix && (
          <span className="text-muted-foreground shrink-0 border-r border-border pr-2 mr-1 text-xs font-medium select-none">
            {prefix}
          </span>
        )}
        {startContent && <span className="text-muted-foreground shrink-0">{startContent}</span>}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          type={effectiveType}
          value={value}
          defaultValue={value !== undefined ? undefined : defaultValue}
          onChange={handleChange}
          maxLength={maxLength}
          aria-invalid={isInvalid ? true : undefined}
          className="w-full h-full bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
          {...props}
        />
        {suffix && (
          <span className="text-muted-foreground shrink-0 border-l border-border pl-2 ml-1 text-xs font-medium select-none">
            {suffix}
          </span>
        )}
        {isClearable && currentValue && (
          <button
            type="button"
            onClick={handleClear}
            className="text-muted-foreground hover:text-foreground shrink-0 transition-colors cursor-pointer"
            aria-label="Clear input"
            tabIndex={-1}
          >
            <Icon icon="hugeicons:cancel-01" className="size-4" />
          </button>
        )}
        {isPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-muted-foreground hover:text-foreground shrink-0 transition-colors cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            <Icon
              icon={showPassword ? "hugeicons:view-off" : "hugeicons:view"}
              className="size-4"
            />
          </button>
        )}
        {isCopyable && (
          <button
            type="button"
            onClick={() => copy(currentValue)}
            className="text-muted-foreground hover:text-foreground shrink-0 transition-colors cursor-pointer"
            aria-label={copied ? "Copied!" : "Copy to clipboard"}
            tabIndex={-1}
          >
            <Icon
              icon={copied ? "hugeicons:tick-02" : "hugeicons:copy-01"}
              className="size-4"
            />
          </button>
        )}
        {endContent && <span className="text-muted-foreground shrink-0">{endContent}</span>}
      </div>
    );

    const bottomContent = (
      <>
        {isInvalid && errorMessage ? (
          <p className="text-xs text-danger font-medium">{errorMessage}</p>
        ) : description ? (
          <p className="text-xs text-muted-foreground">{description}</p>
        ) : null}
        {showCharacterCount && maxLength && (
          <p className={cn(
            "text-xs text-right",
            Number(currentValue.length) >= maxLength ? "text-danger" : "text-muted-foreground"
          )}>
            {currentValue.length}/{maxLength}
          </p>
        )}
      </>
    );

    if (labelPlacement === "left") {
      return (
        <div className="w-full flex items-start gap-3">
          {labelEl}
          <div className="flex-1 flex flex-col gap-1.5">
            {inputWrapper}
            {bottomContent}
          </div>
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col gap-1.5">
        {labelPlacement === "top" && labelEl}
        {inputWrapper}
        {bottomContent}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
