"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface FileItemState {
  id: string;
  file: File;
  previewUrl?: string;
  progress: number;
  status: "uploading" | "paused" | "completed" | "error";
  errorMessage?: string;
}

export interface FileValidationRules {
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  aspectRatio?: number; // e.g., 1 for 1:1, 1.7778 for 16:9
  aspectRatioTolerance?: number; // e.g. 0.05
}

export interface FileUploadProps {
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
  allowPaste?: boolean;
  enableCrop?: boolean;
  validationRules?: FileValidationRules;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  showPreviews?: boolean;
  simulateProgress?: boolean;
  className?: string;
}

export function FileUpload({
  onFilesSelected,
  accept,
  multiple = false,
  maxSizeMB = 10,
  allowPaste = true,
  enableCrop = false,
  validationRules,
  label,
  description = "Drag & drop files here, paste image, or click to browse",
  disabled = false,
  showPreviews = true,
  simulateProgress = true,
  className,
}: FileUploadProps) {
  const [dragActive, setDragActive] = React.useState(false);
  const [fileItems, setFileItems] = React.useState<FileItemState[]>([]);
  const [cropFileItem, setCropFileItem] = React.useState<FileItemState | null>(null);
  const [cropRotation, setCropRotation] = React.useState<number>(0);
  const [cropZoom, setCropZoom] = React.useState<number>(1);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const validateImageDimensions = (file: File): Promise<string | null> => {
    return new Promise((resolve) => {
      if (!validationRules || !file.type.startsWith("image/")) {
        resolve(null);
        return;
      }

      const img = new Image();
      const objectUrl = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(objectUrl);
        const { width, height } = img;
        const { minWidth, minHeight, maxWidth, maxHeight, aspectRatio, aspectRatioTolerance = 0.05 } = validationRules;

        if (minWidth && width < minWidth) {
          resolve(`Image width (${width}px) is less than min allowed ${minWidth}px.`);
          return;
        }
        if (minHeight && height < minHeight) {
          resolve(`Image height (${height}px) is less than min allowed ${minHeight}px.`);
          return;
        }
        if (maxWidth && width > maxWidth) {
          resolve(`Image width (${width}px) exceeds max allowed ${maxWidth}px.`);
          return;
        }
        if (maxHeight && height > maxHeight) {
          resolve(`Image height (${height}px) exceeds max allowed ${maxHeight}px.`);
          return;
        }
        if (aspectRatio) {
          const currentRatio = width / height;
          if (Math.abs(currentRatio - aspectRatio) > aspectRatioTolerance) {
            resolve(`Aspect ratio (${currentRatio.toFixed(2)}) does not match required ratio (${aspectRatio.toFixed(2)}).`);
            return;
          }
        }
        resolve(null);
      };
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        resolve(null);
      };
      img.src = objectUrl;
    });
  };

  const processFiles = async (filesList: File[]) => {
    const newItems: FileItemState[] = [];

    for (const file of filesList) {
      let errorMessage: string | undefined = undefined;

      if (file.size > maxSizeMB * 1024 * 1024) {
        errorMessage = `File size exceeds ${maxSizeMB}MB limit.`;
      } else {
        const valError = await validateImageDimensions(file);
        if (valError) errorMessage = valError;
      }

      let previewUrl: string | undefined = undefined;
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        previewUrl = URL.createObjectURL(file);
      }

      const item: FileItemState = {
        id: `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
        file,
        previewUrl,
        progress: errorMessage ? 0 : simulateProgress ? 0 : 100,
        status: errorMessage ? "error" : simulateProgress ? "uploading" : "completed",
        errorMessage,
      };

      newItems.push(item);
    }

    const updated = multiple ? [...fileItems, ...newItems] : newItems;
    setFileItems(updated);
    onFilesSelected?.(updated.filter((i) => i.status !== "error").map((item) => item.file));

    // If enableCrop and first image has no error, open crop modal
    if (enableCrop && newItems.length > 0 && newItems[0].file.type.startsWith("image/") && !newItems[0].errorMessage) {
      setCropFileItem(newItems[0]);
      setCropRotation(0);
      setCropZoom(1);
    }
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    processFiles(Array.from(files));
  };

  // Clipboard Paste Support (allowPaste)
  React.useEffect(() => {
    if (!allowPaste || disabled) return;

    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      const pastedFiles: File[] = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith("image/")) {
          const blob = items[i].getAsFile();
          if (blob) {
            const pastedFile = new File([blob], `pasted-image-${Date.now()}.png`, { type: blob.type });
            pastedFiles.push(pastedFile);
          }
        }
      }

      if (pastedFiles.length > 0) {
        processFiles(pastedFiles);
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [allowPaste, disabled, fileItems]);

  React.useEffect(() => {
    if (!simulateProgress) return;

    const interval = setInterval(() => {
      setFileItems((prev) =>
        prev.map((item) => {
          if (item.status === "uploading" && item.progress < 100) {
            const nextProgress = Math.min(100, item.progress + Math.floor(Math.random() * 25) + 10);
            return {
              ...item,
              progress: nextProgress,
              status: nextProgress === 100 ? "completed" : "uploading",
            };
          }
          return item;
        })
      );
    }, 400);

    return () => clearInterval(interval);
  }, [simulateProgress]);

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

  const removeFile = (id: string) => {
    const updated = fileItems.filter((item) => item.id !== id);
    setFileItems(updated);
    onFilesSelected?.(updated.filter((i) => i.status !== "error").map((item) => item.file));
  };

  const togglePause = (id: string) => {
    setFileItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextStatus = item.status === "paused" ? "uploading" : "paused";
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  const handleApplyCrop = () => {
    if (!cropFileItem) return;
    // Apply rotation transformation simulation
    setCropFileItem(null);
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) return "hugeicons:image-01";
    if (file.type.startsWith("video/")) return "hugeicons:video-01";
    if (file.type.startsWith("audio/")) return "hugeicons:music-note-01";
    if (file.type.includes("pdf")) return "hugeicons:pdf-01";
    return "hugeicons:file-02";
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
          "relative flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl transition-all duration-300 cursor-pointer bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 select-none group",
          dragActive
            ? "border-sky-500 bg-sky-500/10 dark:border-sky-400 dark:bg-sky-400/10 scale-[1.01]"
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
        <div className="p-3.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-xs mb-3 text-sky-500 dark:text-sky-400 group-hover:scale-110 transition-transform duration-200">
          <Icon icon="hugeicons:cloud-upload" className="size-6" />
        </div>
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 text-center">{description}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
          Max file size: {maxSizeMB}MB {allowPaste && "• Paste supported (Ctrl+V)"}
        </p>
      </div>

      {fileItems.length > 0 && (
        <div className="flex flex-col gap-2.5 mt-3">
          {fileItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex flex-col gap-2 p-3 bg-white dark:bg-zinc-900 border rounded-2xl text-xs shadow-xs transition-all",
                item.status === "error"
                  ? "border-rose-300 dark:border-rose-900/50 bg-rose-50/30 dark:bg-rose-950/10"
                  : "border-zinc-200 dark:border-zinc-800"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {showPreviews && item.previewUrl ? (
                    <div className="size-10 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0 border border-zinc-200 dark:border-zinc-700">
                      {item.file.type.startsWith("image/") ? (
                        <img src={item.previewUrl} alt={item.file.name} className="size-full object-cover" />
                      ) : (
                        <video src={item.previewUrl} className="size-full object-cover" />
                      )}
                    </div>
                  ) : (
                    <div className="size-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700 text-zinc-500">
                      <Icon icon={getFileIcon(item.file)} className="size-5" />
                    </div>
                  )}

                  <div className="flex flex-col min-w-0">
                    <span className="truncate font-semibold text-zinc-900 dark:text-zinc-100">{item.file.name}</span>
                    <span className="text-[11px] text-zinc-400">
                      {(item.file.size / (1024 * 1024)).toFixed(2)} MB •{" "}
                      <span
                        className={cn(
                          item.status === "completed" && "text-emerald-500 font-semibold",
                          item.status === "uploading" && "text-sky-500",
                          item.status === "paused" && "text-amber-500 font-semibold",
                          item.status === "error" && "text-rose-600 dark:text-rose-400 font-semibold"
                        )}
                      >
                        {item.status === "error"
                          ? item.errorMessage ?? "Validation Error"
                          : item.status === "completed"
                          ? "Completed"
                          : item.status === "paused"
                          ? "Paused"
                          : `${item.progress}%`}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  {enableCrop && item.file.type.startsWith("image/") && item.status !== "error" && (
                    <button
                      type="button"
                      onClick={() => {
                        setCropFileItem(item);
                        setCropRotation(0);
                        setCropZoom(1);
                      }}
                      className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-sky-500 cursor-pointer transition-colors"
                      title="Crop & Rotate Image"
                    >
                      <Icon icon="hugeicons:crop" className="size-4" />
                    </button>
                  )}
                  {item.status !== "completed" && item.status !== "error" && (
                    <button
                      type="button"
                      onClick={() => togglePause(item.id)}
                      className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors"
                    >
                      <Icon
                        icon={item.status === "paused" ? "hugeicons:play" : "hugeicons:pause"}
                        className="size-4"
                      />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => removeFile(item.id)}
                    className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-rose-500 cursor-pointer transition-colors"
                  >
                    <Icon icon="hugeicons:cancel-01" className="size-4" />
                  </button>
                </div>
              </div>

              {item.status !== "completed" && item.status !== "error" && (
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full transition-all duration-300 rounded-full",
                      item.status === "paused" ? "bg-amber-500" : "bg-sky-500"
                    )}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Image Crop & Rotation Modal */}
      {cropFileItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Crop & Rotate Image
              </h3>
              <button
                type="button"
                onClick={() => setCropFileItem(null)}
                className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400"
              >
                <Icon icon="hugeicons:cancel-01" className="size-4" />
              </button>
            </div>

            <div className="relative size-64 mx-auto overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 flex items-center justify-center">
              {cropFileItem.previewUrl && (
                <img
                  src={cropFileItem.previewUrl}
                  alt="Crop preview"
                  className="max-h-full max-w-full object-contain transition-transform duration-200"
                  style={{
                    transform: `rotate(${cropRotation}deg) scale(${cropZoom})`,
                  }}
                />
              )}
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCropRotation((r) => (r - 90) % 360)}
                  className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  title="Rotate Left"
                >
                  <Icon icon="hugeicons:rotate-left" className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCropRotation((r) => (r + 90) % 360)}
                  className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  title="Rotate Right"
                >
                  <Icon icon="hugeicons:rotate-right" className="size-4" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                <span>Zoom</span>
                <input
                  type="range"
                  min="0.5"
                  max="2.5"
                  step="0.1"
                  value={cropZoom}
                  onChange={(e) => setCropZoom(Number(e.target.value))}
                  className="w-24 accent-sky-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => setCropFileItem(null)}
                className="px-4 py-2 text-xs font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApplyCrop}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors"
              >
                Apply Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
