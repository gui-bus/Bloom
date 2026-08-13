"use client";

import { Icon } from "@iconify/react";
import { cva } from "class-variance-authority";
import * as React from "react";
import { Badge } from "@/components/ui/badge/badge";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface FileInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange"
  > {
  variant?:
    | "default"
    | "bordered"
    | "flat"
    | "underlined"
    | "filled"
    | "glassmorphism"
    | "gradient-border"
    | "glow";
  size?: "sm" | "md" | "lg";
  radius?: keyof typeof designRadius;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  progress?: number;
  showBadges?: boolean;
  maxSizeMB?: number;
  onFilesSelected?: (files: File[]) => void;
}

const fileInputVariants = cva(
  "w-full transition-all flex items-center font-normal focus-within:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none relative overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xs focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
        bordered:
          "bg-transparent border-2 border-zinc-200 dark:border-zinc-800 focus-within:border-sky-500 text-zinc-900 dark:text-zinc-100",
        flat: "bg-zinc-100 dark:bg-zinc-850/60 border-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800 focus-within:bg-white dark:focus-within:bg-zinc-950 focus-within:border-sky-500 border text-zinc-900 dark:text-zinc-100",
        underlined:
          "bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 rounded-none px-0 focus-within:border-sky-500 text-zinc-900 dark:text-zinc-100",
        filled:
          "bg-zinc-100 dark:bg-zinc-850/80 border border-transparent focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
        glassmorphism:
          "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 focus-within:border-sky-500 shadow-lg text-zinc-900 dark:text-zinc-100",
        "gradient-border":
          "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 relative [background-clip:padding-box] border border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-sky-500 before:via-indigo-500 before:to-pink-500 focus-within:ring-2 focus-within:ring-indigo-500/30",
        glow: "bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xs focus-within:border-sky-500 focus-within:shadow-[0_0_12px_rgba(14,165,233,0.35)] text-zinc-900 dark:text-zinc-100",
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

const matchAcceptRule = (
  fileName: string,
  fileType: string,
  accept: string,
) => {
  const rules = accept.split(",").map((r) => r.trim().toLowerCase());
  return rules.some((rule) => {
    if (rule.startsWith(".")) {
      return fileName.toLowerCase().endsWith(rule);
    }
    if (rule.endsWith("/*")) {
      const baseType = rule.replace("/*", "");
      return fileType.toLowerCase().startsWith(baseType);
    }
    return fileType.toLowerCase() === rule;
  });
};

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      variant = "default",
      size = "md",
      radius = "xl",
      label,
      description,
      errorMessage,
      isInvalid,
      isLoading,
      isClearable = true,
      progress,
      showBadges = false,
      maxSizeMB = 10,
      onFilesSelected,
      placeholder = "No file chosen",
      multiple,
      accept,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
    const [localError, setLocalError] = React.useState<string | null>(null);

    const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const filesArr = Array.from(e.target.files);
        let errorMsg: string | null = null;

        for (const file of filesArr) {
          if (maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
            errorMsg = `File "${file.name}" exceeds the ${maxSizeMB}MB size limit.`;
            break;
          }
          if (accept && !matchAcceptRule(file.name, file.type, accept)) {
            errorMsg = `File "${file.name}" has an invalid type. Allowed: ${accept}.`;
            break;
          }
        }

        if (errorMsg) {
          setLocalError(errorMsg);
          setSelectedFiles([]);
          onFilesSelected?.([]);
        } else {
          setLocalError(null);
          setSelectedFiles(filesArr);
          onFilesSelected?.(filesArr);
        }
      }
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedFiles([]);
      setLocalError(null);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      onFilesSelected?.([]);
    };

    const handleRemoveFile = (idxToRemove: number) => {
      const nextFiles = selectedFiles.filter((_, i) => i !== idxToRemove);
      setSelectedFiles(nextFiles);
      setLocalError(null);
      onFilesSelected?.(nextFiles);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    };

    const radiusClass = designRadius[radius] || "rounded-xl";

    return (
      <div className={cn("flex flex-col gap-1.5 w-full max-w-md", className)}>
        {label && (
          <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
            {label}
          </label>
        )}

        <div
          onClick={() => !disabled && !isLoading && inputRef.current?.click()}
          className={cn(
            fileInputVariants({ variant, size }),
            radiusClass,
            (isInvalid || !!localError) &&
              "border-rose-500 dark:border-rose-500 focus-within:ring-rose-500/20",
            disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          )}
        >
          <input
            ref={inputRef}
            type="file"
            multiple={multiple}
            accept={accept}
            disabled={disabled}
            onChange={handleFilesChange}
            className="hidden"
            {...props}
          />

          <Icon
            icon="hugeicons:file-attachment"
            className={cn(
              "shrink-0 text-zinc-400 dark:text-zinc-500",
              size === "sm" ? "size-3.5" : size === "lg" ? "size-5" : "size-4",
            )}
          />

          <div
            className={cn(
              "flex-1 text-left truncate font-medium",
              selectedFiles.length > 0
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-400 dark:text-zinc-500",
            )}
          >
            {selectedFiles.length > 0
              ? showBadges
                ? `${selectedFiles.length} file${selectedFiles.length > 1 ? "s" : ""} selected`
                : selectedFiles.map((f) => f.name).join(", ")
              : placeholder}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {isClearable && selectedFiles.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
              >
                <Icon icon="hugeicons:cancel-01" className="size-3.5" />
              </button>
            )}

            {isLoading ? (
              <Icon
                icon="hugeicons:loading-02"
                className="size-4 animate-spin text-sky-500 shrink-0"
              />
            ) : (
              <span className="px-2 py-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 text-xs font-bold rounded-lg border border-zinc-200 dark:border-zinc-700 transition-colors select-none">
                Browse
              </span>
            )}
          </div>

          {progress !== undefined && progress >= 0 && progress <= 100 && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-zinc-100 dark:bg-zinc-800">
              <div
                className="h-full bg-sky-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        {showBadges && selectedFiles.length > 0 && (
          <div className="flex flex-row flex-wrap gap-1.5 mt-2">
            {selectedFiles.map((file, idx) => (
              <Badge
                key={`${file.name}-${idx}`}
                variant="flat"
                color="primary"
                isRemovable
                onRemove={() => handleRemoveFile(idx)}
                className="max-w-full truncate"
              >
                {file.name}
              </Badge>
            ))}
          </div>
        )}

        {description && !(isInvalid || !!localError) && (
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500 leading-normal">
            {description}
          </p>
        )}

        {(isInvalid || !!localError) && (errorMessage || localError) && (
          <p className="text-[11px] text-rose-500 dark:text-rose-400 leading-normal font-medium">
            {errorMessage || localError}
          </p>
        )}
      </div>
    );
  },
);

FileInput.displayName = "FileInput";
