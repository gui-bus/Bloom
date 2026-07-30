export const inputCode = `"use client";

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
  "w-full transition-all flex items-center font-normal focus-within:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
        bordered: "bg-transparent border-2 border-zinc-200 dark:border-zinc-800 focus-within:border-sky-500 text-zinc-900 dark:text-zinc-100",
        flat: "bg-zinc-100 dark:bg-zinc-800/60 border-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800 focus-within:bg-white dark:focus-within:bg-zinc-900 focus-within:border-sky-500 border text-zinc-900 dark:text-zinc-100",
        underlined: "bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 rounded-none px-0 focus-within:border-sky-500 text-zinc-900 dark:text-zinc-100",
        filled: "bg-zinc-100 dark:bg-zinc-800/80 border border-transparent focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
        glassmorphism: "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 focus-within:border-sky-500 shadow-lg text-zinc-900 dark:text-zinc-100",
        glow: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus-within:border-sky-500 focus-within:shadow-[0_0_12px_rgba(14,165,233,0.35)] text-zinc-900 dark:text-zinc-100",
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
      className, variant = "default", color = "default", size = "md", radius = "lg",
      label, labelPlacement = "top", description, errorMessage, isInvalid = false,
      startContent, endContent, isClearable = false, isPasswordToggle = false,
      prefix, suffix, showCharacterCount = false, isCopyable = false, onClear,
      disabled, id, type, value, defaultValue, onChange, maxLength, ...props
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
      ? showPassword ? "text" : "password"
      : type;

    const labelEl = label && (
      <label
        htmlFor={inputId}
        className={cn(
          "text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none",
          labelPlacement === "inside" && "absolute top-1 left-3 text-[10px] text-zinc-400 dark:text-zinc-500 z-10 pointer-events-none"
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
          isInvalid && "border-rose-500 dark:border-rose-500 text-rose-600 dark:text-rose-400",
          labelPlacement === "inside" && "relative pt-4",
          className
        )}
      >
        {labelPlacement === "inside" && labelEl}
        {prefix && <span className="text-zinc-400 dark:text-zinc-500 shrink-0 border-r pr-2 mr-1 text-xs font-medium select-none">{prefix}</span>}
        {startContent && <span className="text-zinc-400 dark:text-zinc-500 shrink-0">{startContent}</span>}
        <input
          ref={ref} id={inputId} disabled={disabled} type={effectiveType} value={value}
          defaultValue={value !== undefined ? undefined : defaultValue} onChange={handleChange}
          maxLength={maxLength} aria-invalid={isInvalid ? true : undefined}
          className="w-full h-full bg-transparent outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-zinc-900 dark:text-zinc-100"
          {...props}
        />
        {suffix && <span className="text-zinc-400 dark:text-zinc-500 shrink-0 border-l pl-2 ml-1 text-xs font-medium select-none">{suffix}</span>}
        {isClearable && currentValue && (
          <button type="button" onClick={handleClear} className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 shrink-0 transition-colors cursor-pointer" aria-label="Clear input" tabIndex={-1}>
            <Icon icon="hugeicons:cancel-01" className="size-4" />
          </button>
        )}
        {isPasswordToggle && (
          <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 shrink-0 transition-colors cursor-pointer" aria-label={showPassword ? "Hide password" : "Show password"} tabIndex={-1}>
            <Icon icon={showPassword ? "hugeicons:view-off" : "hugeicons:view"} className="size-4" />
          </button>
        )}
        {isCopyable && (
          <button type="button" onClick={() => copy(currentValue)} className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 shrink-0 transition-colors cursor-pointer" aria-label={copied ? "Copied!" : "Copy to clipboard"} tabIndex={-1}>
            <Icon icon={copied ? "hugeicons:tick-02" : "hugeicons:copy-01"} className={cn("size-4", copied && "text-emerald-500")} />
          </button>
        )}
        {endContent && <span className="text-zinc-400 dark:text-zinc-500 shrink-0">{endContent}</span>}
      </div>
    );

    return (
      <div className="w-full flex flex-col gap-1.5">
        {labelPlacement === "top" && labelEl}
        {inputWrapper}
        {isInvalid && errorMessage ? (
          <p className="text-xs text-rose-500 font-medium">{errorMessage}</p>
        ) : description ? (
          <p className="text-xs text-zinc-400 dark:text-zinc-500">{description}</p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
`;
