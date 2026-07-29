export const fileUploadCode = `"use client";

import * as React from "react";
import { UploadCloud, File, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileUploadProps {
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}

export function FileUpload({
  onFilesSelected,
  accept,
  multiple = false,
  maxSizeMB = 10,
  label,
  description = "Drag & drop files here, or click to browse",
  disabled = false,
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
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-xs font-semibold text-foreground/90 select-none">{label}</label>}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
        className={cn(
          "relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl transition-all duration-200 cursor-pointer bg-muted/20 hover:bg-muted/40",
          dragActive ? "border-primary bg-primary/10" : "border-input",
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
        <div className="p-3 bg-background border border-border rounded-xl shadow-xs mb-3">
          <UploadCloud className="size-6 text-primary" />
        </div>
        <p className="text-sm font-medium text-foreground text-center">{description}</p>
        <p className="text-xs text-muted-foreground mt-1">Max file size: {maxSizeMB}MB</p>
      </div>

      {selectedFiles.length > 0 && (
        <div className="flex flex-col gap-2 mt-2">
          {selectedFiles.map((file, idx) => (
            <div
              key={\`\${file.name}-\${idx}\`}
              className="flex items-center justify-between p-2.5 bg-card border border-border rounded-xl text-xs"
            >
              <div className="flex items-center gap-2 truncate">
                <File className="size-4 text-muted-foreground shrink-0" />
                <span className="truncate font-medium">{file.name}</span>
                <span className="text-muted-foreground shrink-0">
                  ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(idx);
                }}
                className="p-1 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="size-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`;
