"use client";

import { Icon } from "@iconify/react";
import { cva } from "class-variance-authority";
import * as React from "react";
import { Badge } from "@/components/ui/badge/badge";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface TagInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange" | "value"
  > {
  value?: string[];
  onChange?: (value: string[]) => void;
  variant?: "default" | "bordered" | "flat" | "underlined" | "filled" | "glow";
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
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  maxTags?: number;
  allowDuplicates?: boolean;
  validate?: (tag: string) => boolean | string;
  addOnBlur?: boolean;
  delimiterKeys?: string[];
  tagColor?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger";
  tagVariant?: "default" | "bordered" | "flat" | "ghost" | "shadow";
  isDisabled?: boolean;
}

const tagInputVariants = cva(
  "w-full flex flex-wrap items-center gap-1.5 transition-all font-normal focus-within:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
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
        glow: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus-within:border-sky-500 focus-within:shadow-[0_0_12px_rgba(14,165,233,0.35)] text-zinc-900 dark:text-zinc-100",
      },
      size: {
        sm: "min-h-8 p-1 text-xs gap-1",
        md: "min-h-10 p-1.5 text-sm gap-1.5",
        lg: "min-h-12 p-2 text-base gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      className,
      value = [],
      onChange,
      variant = "default",
      color = "default",
      size = "md",
      radius = "md",
      label,
      description,
      errorMessage,
      isInvalid = false,
      maxTags,
      allowDuplicates = false,
      validate,
      addOnBlur = true,
      delimiterKeys = ["Enter", ","],
      tagColor = "primary",
      tagVariant = "flat",
      isDisabled = false,
      placeholder = "Add tag...",
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = React.useState("");
    const [localInvalid, setLocalInvalid] = React.useState(false);
    const [localError, setLocalError] = React.useState<string | null>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleAddTag = (tag: string) => {
      const trimmed = tag.trim();
      if (!trimmed) return;

      if (maxTags !== undefined && value.length >= maxTags) {
        setLocalInvalid(true);
        setLocalError(`Maximum of ${maxTags} tags allowed.`);
        return;
      }

      if (!allowDuplicates && value.includes(trimmed)) {
        setLocalInvalid(true);
        setLocalError("Duplicate tags are not allowed.");
        return;
      }

      if (validate) {
        const validationResult = validate(trimmed);
        if (typeof validationResult === "string") {
          setLocalInvalid(true);
          setLocalError(validationResult);
          return;
        }
        if (validationResult === false) {
          setLocalInvalid(true);
          setLocalError("Invalid tag format.");
          return;
        }
      }

      setLocalInvalid(false);
      setLocalError(null);
      const updated = [...value, trimmed];
      onChange?.(updated);
      setInputValue("");
    };

    const handleRemoveTag = (index: number) => {
      const updated = value.filter((_, i) => i !== index);
      onChange?.(updated);
      setLocalInvalid(false);
      setLocalError(null);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (delimiterKeys.includes(e.key)) {
        e.preventDefault();
        handleAddTag(inputValue);
      } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
        e.preventDefault();
        handleRemoveTag(value.length - 1);
      }
    };

    const handleBlur = () => {
      if (addOnBlur && inputValue) {
        handleAddTag(inputValue);
      }
    };

    const hasError = isInvalid || localInvalid;
    const currentError = errorMessage || localError;

    return (
      <div className={cn("w-full flex flex-col gap-1.5", className)}>
        {label && (
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {label}
          </label>
        )}

        <div
          className={cn(
            tagInputVariants({ variant, size }),
            designRadius[radius],
            hasError &&
              "border-danger focus-within:border-danger focus-within:ring-danger/30 focus-within:shadow-[0_0_12px_rgba(239,68,68,0.35)]",
            isDisabled &&
              "opacity-50 cursor-not-allowed pointer-events-none bg-zinc-50 dark:bg-zinc-900/50",
          )}
          onClick={() => inputRef.current?.focus()}
        >
          {value.map((tag, index) => (
            <Badge
              key={`${tag}-${index}`}
              color={tagColor}
              variant={tagVariant}
              size={size === "lg" ? "lg" : size === "sm" ? "sm" : "md"}
              isRemovable={!isDisabled}
              onRemove={() => handleRemoveTag(index)}
              className="max-w-full truncate"
            >
              {tag}
            </Badge>
          ))}

          <input
            {...props}
            ref={
              ref
                ? (node) => {
                    if (typeof ref === "function") ref(node);
                    else (ref as any).current = node;
                    (inputRef as any).current = node;
                  }
                : inputRef
            }
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (localInvalid) {
                setLocalInvalid(false);
                setLocalError(null);
              }
            }}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            disabled={isDisabled}
            placeholder={value.length === 0 ? placeholder : ""}
            className={cn(
              "flex-1 min-w-[120px] bg-transparent outline-none border-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500",
              size === "sm" && "text-xs py-0.5",
              size === "md" && "text-sm py-1",
              size === "lg" && "text-base py-1.5",
            )}
          />
        </div>

        {currentError && (
          <p className="text-xs text-danger font-medium flex items-center gap-1">
            <Icon icon="lucide:alert-circle" className="size-3.5" />
            {currentError}
          </p>
        )}

        {description && !currentError && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        )}
      </div>
    );
  },
);

TagInput.displayName = "TagInput";
