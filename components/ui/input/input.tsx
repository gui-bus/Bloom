"use client";

import { Icon } from "@iconify/react";
import { cva } from "class-variance-authority";
import * as React from "react";
import { toast } from "@/components/ui/toast/toast";
import { designRadius } from "@/lib/design-system";
import { useClipboard } from "@/lib/hooks/useClipboard";
import { cn } from "@/lib/utils";

export type InputMaskType =
  | "CPF"
  | "CNPJ"
  | "Phone"
  | "ZIP"
  | "CreditCard"
  | "Custom";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
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
  labelPlacement?: "top" | "left" | "inside" | "outside";
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
  mask?: InputMaskType | ((val: string) => string);
  customMaskPattern?: string;
  debouncedOnChange?: (value: string) => void;
  debounceTimeout?: number;
}

const inputVariants = cva(
  "w-full transition-all flex items-center font-normal focus-within:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
        bordered:
          "bg-transparent border-2 border-zinc-200 dark:border-zinc-800 focus-within:border-sky-500 text-zinc-900 dark:text-zinc-100",
        flat: "bg-zinc-100 dark:bg-zinc-800/60 border-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800 focus-within:bg-white dark:focus-within:bg-zinc-900 focus-within:border-sky-500 border text-zinc-900 dark:text-zinc-100",
        underlined:
          "bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 rounded-none px-0 focus-within:border-sky-500 text-zinc-900 dark:text-zinc-100",
        filled:
          "bg-zinc-100 dark:bg-zinc-800/80 border border-transparent focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
        glassmorphism:
          "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 focus-within:border-sky-500 shadow-lg text-zinc-900 dark:text-zinc-100",
        "gradient-border":
          "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 relative [background-clip:padding-box] border border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-sky-500 before:via-indigo-500 before:to-pink-500 focus-within:ring-2 focus-within:ring-indigo-500/30",
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
  },
);

function applyMask(
  value: string,
  mask: InputMaskType | ((val: string) => string) | undefined,
  customPattern?: string,
): string {
  if (!mask) return value;
  if (typeof mask === "function") return mask(value);

  const raw = value.replace(/\D/g, "");

  if (mask === "CPF") {
    const v = raw.slice(0, 11);
    return v
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  if (mask === "CNPJ") {
    const v = raw.slice(0, 14);
    return v
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  if (mask === "Phone") {
    const v = raw.slice(0, 11);
    if (v.length <= 10) {
      return v
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }
    return v.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
  }

  if (mask === "ZIP") {
    const v = raw.slice(0, 8);
    return v.replace(/^(\d{5})(\d)/, "$1-$2");
  }

  if (mask === "CreditCard") {
    const v = raw.slice(0, 16);
    return v.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  }

  if (mask === "Custom" && customPattern) {
    let result = "";
    let rawIdx = 0;
    for (let i = 0; i < customPattern.length && rawIdx < raw.length; i++) {
      const patternChar = customPattern[i];
      if (patternChar === "9") {
        result += raw[rawIdx];
        rawIdx++;
      } else {
        result += patternChar;
      }
    }
    return result;
  }

  return value;
}

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
      mask,
      customMaskPattern,
      debouncedOnChange,
      debounceTimeout = 300,
      disabled,
      id,
      type,
      value,
      defaultValue,
      onChange,
      maxLength,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const initialRaw =
      (value !== undefined
        ? value
        : defaultValue !== undefined
          ? defaultValue
          : ""
      )?.toString() || "";
    const [internalValue, setInternalValue] = React.useState(
      mask ? applyMask(initialRaw, mask, customMaskPattern) : initialRaw,
    );
    const [showPassword, setShowPassword] = React.useState(false);
    const { copy, copied } = useClipboard();

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value.toString() : internalValue;

    React.useEffect(() => {
      if (!debouncedOnChange) return;
      const handler = setTimeout(() => {
        debouncedOnChange(currentValue);
      }, debounceTimeout);

      return () => clearTimeout(handler);
    }, [currentValue, debouncedOnChange, debounceTimeout]);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const formattedValue = mask
          ? applyMask(rawValue, mask, customMaskPattern)
          : rawValue;

        if (!isControlled) {
          setInternalValue(formattedValue);
        }

        if (onChange) {
          const updatedEvent = {
            ...e,
            target: {
              ...e.target,
              value: formattedValue,
            },
          };
          onChange(updatedEvent as React.ChangeEvent<HTMLInputElement>);
        }
      },
      [isControlled, mask, customMaskPattern, onChange],
    );

    const handleClear = React.useCallback(() => {
      if (!isControlled) {
        setInternalValue("");
      }
      onClear?.();

      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value",
      )?.set;
      const inputEl = document.getElementById(inputId) as HTMLInputElement;
      if (inputEl && nativeInputValueSetter) {
        nativeInputValueSetter.call(inputEl, "");
        inputEl.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, [inputId, isControlled, onClear]);

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (isClearable && e.key === "Escape" && currentValue) {
          e.preventDefault();
          handleClear();
        }
        onKeyDown?.(e);
      },
      [isClearable, currentValue, handleClear, onKeyDown],
    );

    const handleCopy = React.useCallback(() => {
      copy(currentValue);
      toast.success("Content copied!", {
        description: "Text copied to clipboard.",
      });
    }, [copy, currentValue]);

    const effectiveType = isPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

    const effectivePlacement =
      labelPlacement === "outside" ? "top" : labelPlacement;

    const labelEl = label && (
      <label
        htmlFor={inputId}
        className={cn(
          "text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none",
          effectivePlacement === "inside" &&
            "absolute top-1 left-3 text-[10px] text-zinc-400 dark:text-zinc-500 z-10 pointer-events-none font-normal",
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
          isInvalid &&
            "border-rose-500 dark:border-rose-500 focus-within:border-rose-500 focus-within:ring-rose-500/30 text-rose-600 dark:text-rose-400",
          effectivePlacement === "inside" && "relative pt-4",
          className,
        )}
      >
        {effectivePlacement === "inside" && labelEl}
        {prefix && (
          <span className="text-zinc-400 dark:text-zinc-500 shrink-0 border-r border-zinc-200 dark:border-zinc-800 pr-2 mr-1 text-xs font-medium select-none">
            {prefix}
          </span>
        )}
        {startContent && (
          <span className="text-zinc-400 dark:text-zinc-500 shrink-0">
            {startContent}
          </span>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          type={effectiveType}
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={maxLength}
          aria-invalid={isInvalid ? true : undefined}
          className="w-full h-full bg-transparent outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-zinc-900 dark:text-zinc-100"
          {...props}
        />
        {suffix && (
          <span className="text-zinc-400 dark:text-zinc-500 shrink-0 border-l border-zinc-200 dark:border-zinc-800 pl-2 ml-1 text-xs font-medium select-none">
            {suffix}
          </span>
        )}
        {isClearable && currentValue && (
          <button
            type="button"
            onClick={handleClear}
            className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 shrink-0 transition-colors cursor-pointer"
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
            className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 shrink-0 transition-colors cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            <Icon
              icon={showPassword ? "hugeicons:view-off" : "hugeicons:view"}
              className="size-4 transition-transform duration-200 active:scale-95"
            />
          </button>
        )}
        {isCopyable && (
          <button
            type="button"
            onClick={handleCopy}
            className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 shrink-0 transition-colors cursor-pointer"
            aria-label={copied ? "Copied!" : "Copy to clipboard"}
            tabIndex={-1}
          >
            <Icon
              icon={copied ? "hugeicons:tick-02" : "hugeicons:copy-01"}
              className={cn(
                "size-4 transition-all duration-200",
                copied && "text-emerald-500 scale-110",
              )}
            />
          </button>
        )}
        {endContent && (
          <span className="text-zinc-400 dark:text-zinc-500 shrink-0">
            {endContent}
          </span>
        )}
      </div>
    );

    const bottomContent = (
      <>
        {isInvalid && errorMessage ? (
          <p className="text-xs text-rose-500 font-medium">{errorMessage}</p>
        ) : description ? (
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            {description}
          </p>
        ) : null}
        {showCharacterCount && maxLength && (
          <p
            className={cn(
              "text-xs text-right font-mono transition-colors",
              Number(currentValue.length) >= maxLength
                ? "text-rose-500 font-semibold"
                : Number(currentValue.length) >= maxLength * 0.8
                  ? "text-amber-500 font-medium"
                  : "text-zinc-400 dark:text-zinc-500",
            )}
          >
            {currentValue.length}/{maxLength}
          </p>
        )}
      </>
    );

    if (effectivePlacement === "left") {
      return (
        <div className="w-full flex items-center gap-3">
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
        {effectivePlacement === "top" && labelEl}
        {inputWrapper}
        {bottomContent}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
