"use client";

import {
  Check,
  Download,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface ImageCropperProps {
  src: string;
  aspectRatio?: number;
  onCrop?: (base64: string) => void;
  circular?: boolean;
}

export function ImageCropper({
  src,
  aspectRatio = 1,
  onCrop,
  circular = false,
}: ImageCropperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const effectiveAspectRatio = circular ? 1 : aspectRatio;

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      setPosition({
        x: clientX - dragStart.x,
        y: clientY - dragStart.y,
      });
    },
    [isDragging, dragStart],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove, { passive: false });
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMouseMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const newScale = scale - e.deltaY * 0.001;
    setScale(Math.min(Math.max(0.1, newScale), 5));
  };

  const handleCrop = () => {
    if (!imageRef.current || !containerRef.current || !canvasRef.current)
      return;

    const image = imageRef.current;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    let cropBoxWidth = containerWidth * 0.8;
    let cropBoxHeight = containerHeight * 0.8;

    if (cropBoxWidth / cropBoxHeight > effectiveAspectRatio) {
      cropBoxWidth = cropBoxHeight * effectiveAspectRatio;
    } else {
      cropBoxHeight = cropBoxWidth / effectiveAspectRatio;
    }

    canvas.width = cropBoxWidth;
    canvas.height = cropBoxHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (circular) {
      ctx.beginPath();
      ctx.arc(
        cropBoxWidth / 2,
        cropBoxHeight / 2,
        Math.min(cropBoxWidth, cropBoxHeight) / 2,
        0,
        Math.PI * 2,
      );
      ctx.clip();
    }

    ctx.translate(
      canvas.width / 2 + position.x,
      canvas.height / 2 + position.y,
    );
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(scale, scale);

    ctx.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);

    const base64 = canvas.toDataURL("image/png");
    setCroppedImage(base64);
    if (onCrop) {
      onCrop(base64);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        className="relative w-full h-[400px] bg-zinc-100 dark:bg-zinc-900 overflow-hidden rounded-lg cursor-move border border-zinc-200 dark:border-zinc-800 touch-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onWheel={handleWheel}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            ref={imageRef}
            src={src}
            crossOrigin="anonymous"
            alt="Crop target"
            className="max-w-none animate-fade-in"
            onLoad={() => setImageLoaded(true)}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
              transformOrigin: "center",
              display: imageLoaded ? "block" : "none",
            }}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                "border-2 border-white/80 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] transition-all",
                circular ? "rounded-full" : "rounded-none",
              )}
              style={{
                width:
                  effectiveAspectRatio >= 1
                    ? "280px"
                    : `${280 * effectiveAspectRatio}px`,
                height:
                  effectiveAspectRatio >= 1
                    ? `${280 / effectiveAspectRatio}px`
                    : "280px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale((s) => Math.max(0.1, s - 0.1))}
            className="p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 rounded-md transition-colors"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="w-24 accent-zinc-900 dark:accent-zinc-100"
          />
          <button
            onClick={() => setScale((s) => Math.min(5, s + 0.1))}
            className="p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 rounded-md transition-colors"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setRotation((r) => r - 90)}
            className="p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 rounded-md transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <input
            type="range"
            min="-180"
            max="180"
            value={rotation}
            onChange={(e) => setRotation(parseFloat(e.target.value))}
            className="w-24 accent-zinc-900 dark:accent-zinc-100"
          />
          <button
            onClick={() => setRotation((r) => r + 90)}
            className="p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 rounded-md transition-colors"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={handleCrop}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium text-sm"
        >
          <Check className="w-4 h-4" />
          Crop Image
        </button>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      {croppedImage && (
        <div className="mt-4 flex flex-col items-center gap-4 animate-fade-in">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Result
          </h3>
          <img
            src={croppedImage}
            alt="Cropped result"
            className={cn(
              "max-w-full h-auto border border-zinc-200 dark:border-zinc-800",
              circular ? "rounded-full" : "rounded-none",
            )}
          />
          <a
            href={croppedImage}
            download="cropped-image.png"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors font-medium text-sm"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      )}
    </div>
  );
}
