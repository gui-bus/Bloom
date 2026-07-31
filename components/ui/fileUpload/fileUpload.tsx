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
}

export interface FileUploadProps {
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
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
  label,
  description = "Drag & drop files here, or click to browse",
  disabled = false,
  showPreviews = true,
  simulateProgress = true,
  className,
}: FileUploadProps) {
  const [dragActive, setDragActive] = React.useState(false);
  const [fileItems, setFileItems] = React.useState<FileItemState[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const newItems: FileItemState[] = [];

    Array.from(files).forEach((file) => {
      if (file.size <= maxSizeMB * 1024 * 1024) {
        let previewUrl: string | undefined = undefined;
        if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
          previewUrl = URL.createObjectURL(file);
        }

        newItems.push({
          id: `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
          file,
          previewUrl,
          progress: simulateProgress ? 0 : 100,
          status: simulateProgress ? "uploading" : "completed",
        });
      }
    });

    const updated = multiple ? [...fileItems, ...newItems] : newItems;
    setFileItems(updated);
    onFilesSelected?.(updated.map((item) => item.file));
  };

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
    onFilesSelected?.(updated.map((item) => item.file));
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
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Maximum file size: {maxSizeMB}MB</p>
      </div>

      {fileItems.length > 0 && (
        <div className="flex flex-col gap-2.5 mt-3">
          {fileItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-xs shadow-xs transition-all"
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
                          item.status === "paused" && "text-amber-500 font-semibold"
                        )}
                      >
                        {item.status === "completed" ? "Completed" : item.status === "paused" ? "Paused" : `${item.progress}%`}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  {item.status !== "completed" && (
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

              {item.status !== "completed" && (
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
    </div>
  );
}
