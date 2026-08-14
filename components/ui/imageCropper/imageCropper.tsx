"use client";

import { Crop, Download, RotateCcw } from "lucide-react";
import * as React from "react";
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Button } from "@/components/ui/button/button";
import { Slider } from "@/components/ui/slider/slider";
import { cn } from "@/lib/utils";

export interface ImageCropperRef {
  crop: () => string | null;
  reset: () => void;
}

export interface ImageCropperProps {
  src: string;
  aspectRatio?: number;
  onCrop?: (base64: string) => void;
  circular?: boolean;
  showCropButton?: boolean;
  width?: number;
  height?: number;
  defaultZoom?: number;
}

export const ImageCropper = React.forwardRef<
  ImageCropperRef,
  ImageCropperProps
>(
  (
    {
      src,
      aspectRatio = 1,
      onCrop,
      circular = true,
      showCropButton = true,
      width,
      height,
      defaultZoom = 10,
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [zoom, setZoom] = useState(defaultZoom);
    const scale = zoom / 100;
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [croppedImage, setCroppedImage] = useState<string | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [boxSize, setBoxSize] = useState({ width: 260, height: 260 });

    const isCustomSize = width !== undefined && height !== undefined;
    const effectiveCircular = isCustomSize ? false : circular;
    const effectiveAspectRatio = isCustomSize
      ? (width ?? 0) / (height ?? 0)
      : effectiveCircular
        ? 1
        : aspectRatio;

    useEffect(() => {
      if (!containerRef.current) return;
      const updateSize = () => {
        if (!containerRef.current) return;
        const containerWidth = containerRef.current.clientWidth || 500;
        const containerHeight = containerRef.current.clientHeight || 360;
        let cropBoxWidth = containerWidth * 0.8;
        let cropBoxHeight = containerHeight * 0.8;

        if (cropBoxWidth / cropBoxHeight > effectiveAspectRatio) {
          cropBoxWidth = cropBoxHeight * effectiveAspectRatio;
        } else {
          cropBoxHeight = cropBoxWidth / effectiveAspectRatio;
        }
        setBoxSize({ width: cropBoxWidth, height: cropBoxHeight });
      };

      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, [effectiveAspectRatio]);

    useEffect(() => {
      if (imageRef.current) {
        if (imageRef.current.complete) {
          setImageLoaded(true);
        } else {
          setImageLoaded(false);
        }
      }
    }, [src]);

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
        window.addEventListener("mousemove", handleMouseMove, {
          passive: false,
        });
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchmove", handleMouseMove, {
          passive: false,
        });
        window.addEventListener("touchend", handleMouseUp);
      }
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleMouseMove);
        window.removeEventListener("touchend", handleMouseUp);
      };
    }, [isDragging, handleMouseMove, handleMouseUp]);

    const handleReset = useCallback(() => {
      setZoom(defaultZoom);
      setRotation(0);
      setPosition({ x: 0, y: 0 });
      setCroppedImage(null);
    }, [defaultZoom]);

    const handleCrop = useCallback(() => {
      if (!imageRef.current || !containerRef.current || !canvasRef.current)
        return null;

      const image = imageRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) return null;

      const cropBoxWidth = boxSize.width;
      const cropBoxHeight = boxSize.height;

      if (isCustomSize) {
        canvas.width = width ?? 0;
        canvas.height = height ?? 0;
      } else {
        canvas.width = cropBoxWidth;
        canvas.height = cropBoxHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (effectiveCircular) {
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          Math.min(canvas.width, canvas.height) / 2,
          0,
          Math.PI * 2,
        );
        ctx.clip();
      }

      if (isCustomSize) {

        const scaleFactor = (width ?? 0) / cropBoxWidth;
        ctx.translate(
          canvas.width / 2 + position.x * scaleFactor,
          canvas.height / 2 + position.y * scaleFactor,
        );
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.scale(scale * scaleFactor, scale * scaleFactor);
      } else {
        ctx.translate(
          canvas.width / 2 + position.x,
          canvas.height / 2 + position.y,
        );
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.scale(scale, scale);
      }

      ctx.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);

      const base64 = canvas.toDataURL("image/png");
      setCroppedImage(base64);
      if (onCrop) {
        onCrop(base64);
      }
      return base64;
    }, [
      effectiveCircular,
      onCrop,
      position,
      rotation,
      scale,
      isCustomSize,
      width,
      height,
      boxSize,
    ]);

    useImperativeHandle(
      ref,
      () => ({
        crop: handleCrop,
        reset: handleReset,
      }),
      [handleCrop, handleReset],
    );

    return (
      <div className="flex flex-col gap-4">
        <div
          ref={containerRef}
          className="relative w-full h-[360px] bg-zinc-50/50 dark:bg-zinc-900/20 overflow-hidden rounded-2xl cursor-move touch-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              ref={imageRef}
              src={src}
              crossOrigin={src.startsWith("http") ? "anonymous" : undefined}
              alt="Crop target"
              className="max-w-none animate-fade-in animate-duration-300"
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
                  "border-2 border-white/80 shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] transition-all",
                  effectiveCircular ? "rounded-full" : "rounded-none",
                )}
                style={{
                  width: `${boxSize.width}px`,
                  height: `${boxSize.height}px`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-end justify-between gap-6 py-2 select-none">
          <div className="flex-1">
            <Slider
              label="Zoom"
              min={10}
              max={100}
              step={1}
              value={[zoom]}
              onValueChange={(val) => setZoom(val[0])}
              showValue
              formatValue={(v) => `${v[0]}%`}
              color="default"
              size="sm"
            />
          </div>

          <div className="flex-1">
            <Slider
              label="Rotation"
              min={-180}
              max={180}
              step={1}
              value={[rotation]}
              onValueChange={(val) => setRotation(val[0])}
              showValue
              formatValue={(v) => `${v[0]}°`}
              color="default"
              size="sm"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              type="button"
              variant="flat"
              color="default"
              isIconOnly
              ariaLabel="Reset"
              onClick={handleReset}
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>

            {showCropButton && (
              <Button
                type="button"
                variant="flat"
                color="default"
                isIconOnly
                ariaLabel="Crop Image"
                onClick={handleCrop}
                title="Crop Image"
              >
                <Crop className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        <canvas ref={canvasRef} className="hidden" />

        {showCropButton && croppedImage && (
          <div className="mt-4 flex flex-col items-center gap-3 animate-fade-in">
            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Result
            </h3>
            <img
              src={croppedImage}
              alt="Cropped result"
              className={cn(
                "h-auto shadow-sm",
                effectiveCircular ? "rounded-full" : "rounded-2xl",
              )}
              style={{
                width: isCustomSize ? `${width}px` : "150px",
                maxWidth: "100%",
              }}
            />
            <a
              href={croppedImage}
              download="cropped-image.png"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 rounded-xl transition-colors font-semibold text-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </a>
          </div>
        )}
      </div>
    );
  },
);
ImageCropper.displayName = "ImageCropper";
