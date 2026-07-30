export const fileUploadCode = `"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface FileUploadProps {
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export function FileUpload({
  onFilesSelected,
  accept,
  multiple = false,
  maxSizeMB = 10,
  label,
  description = "Drag & drop files here, or click to browse",
  disabled = false,
  className,
}: FileUploadProps) {
  const [dragActive, setDragActive] = React.useState(false);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const validFiles: File[] = [];

    Array.from(files).forEach((file) => {
      if (file.size <= maxSizeMB * 1024 * 1024) {
        validFiles.push(file);
      }
    });

    const updated = multiple ? [...selectedFiles, ...validFiles] : validFiles;
    setSelectedFiles(updated);
    onFilesSelected?.(updated);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (index: number) => {
    const updated = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updated);
    onFilesSelected?.(updated);
  };

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      {label && (
        <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
          {label}
        </label>
      )}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
        className={cn(
          "relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl transition-all duration-200 cursor-pointer bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60",
          dragActive
            ? "border-sky-500 bg-sky-500/10 dark:border-sky-400 dark:bg-sky-400/10"
            : "border-zinc-200 dark:border-zinc-800",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
        <div className="p-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-xs mb-3 text-sky-500 dark:text-sky-400">
          <Icon icon="hugeicons:cloud-upload" className="size-6" />
        </div>
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 text-center">{description}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Maximum file size: {maxSizeMB}MB</p>
      </div>

      {selectedFiles.length > 0 && (
        <div className="flex flex-col gap-2 mt-2">
          {selectedFiles.map((file, idx) => (
            <div
              key={\`\${file.name}-\${idx}\`}
              className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs shadow-xs"
            >
              <div className="flex items-center gap-2.5 truncate">
                <Icon icon="hugeicons:file-02" className="size-4 text-zinc-400 shrink-0" />
                <span className="truncate font-medium text-zinc-900 dark:text-zinc-100">{file.name}</span>
                <span className="text-zinc-400 shrink-0">
                  ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(idx);
                }}
                className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors"
              >
                <Icon icon="hugeicons:cancel-01" className="size-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
`;
