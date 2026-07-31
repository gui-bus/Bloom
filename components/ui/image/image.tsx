"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export type ImageRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
export type ImageAspectRatio = "auto" | "square" | "video" | "4/3" | "21/9";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  fallbackSrc?: string;
  alt?: string;
  radius?: ImageRadius;
  aspectRatio?: ImageAspectRatio;
  fallback?: React.ReactNode;
  isZoomable?: boolean;
  enableLightbox?: boolean;
  isBlurred?: boolean;
  placeholder?: boolean;
  isPlaceholder?: boolean;
  blurUpPlaceholder?: string;
  caption?: string;
}

const radiusStyles: Record<ImageRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

const aspectRatioStyles: Record<ImageAspectRatio, string> = {
  auto: "aspect-auto",
  square: "aspect-square",
  video: "aspect-video",
  "4/3": "aspect-4/3",
  "21/9": "aspect-21/9",
};

const PLACEHOLDER_SVG_SRC = "/utils/placeholder.svg";

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      fallbackSrc,
      alt = "Image",
      radius = "2xl",
      aspectRatio = "auto",
      fallback,
      isZoomable = false,
      enableLightbox = false,
      isBlurred = false,
      placeholder = false,
      isPlaceholder = false,
      blurUpPlaceholder,
      caption,
      className,
      onError,
      onLoad,
      ...props
    },
    ref
  ) => {
    const [currentSrc, setCurrentSrc] = React.useState<string | undefined>(src);
    const [hasError, setHasError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
    const internalRef = React.useRef<HTMLImageElement>(null);

    React.useImperativeHandle(ref, () => internalRef.current as HTMLImageElement);

    const usePlaceholder = placeholder || isPlaceholder;
    const activeSrc = usePlaceholder ? PLACEHOLDER_SVG_SRC : currentSrc;

    React.useEffect(() => {
      setCurrentSrc(src);
      setHasError(false);
    }, [src]);

    React.useEffect(() => {
      if (internalRef.current && internalRef.current.complete) {
        setIsLoading(false);
      }
    }, [activeSrc]);

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
        setHasError(false);
      } else {
        setHasError(true);
        setIsLoading(false);
      }
      onError?.(e);
    };

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setIsLoading(false);
      onLoad?.(e);
    };

    const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
      if (enableLightbox && !hasError && activeSrc) {
        setIsLightboxOpen(true);
      }
      props.onClick?.(e);
    };

    return (
      <>
        <figure className="relative inline-flex flex-col max-w-full">
          {/* Glow backdrop blur shadow effect when isBlurred=true */}
          {isBlurred && !hasError && activeSrc && (
            <img
              src={activeSrc}
              alt=""
              aria-hidden="true"
              className={cn(
                "absolute inset-0 size-full object-cover blur-lg opacity-60 scale-105 pointer-events-none transition-opacity duration-300",
                radiusStyles[radius]
              )}
            />
          )}

          <div
            className={cn(
              "relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200/60 dark:border-zinc-800/60 transition-all duration-300",
              radiusStyles[radius],
              aspectRatioStyles[aspectRatio],
              className
            )}
          >
            {hasError ? (
              fallback || (
                <div className="flex flex-col items-center justify-center p-6 text-center text-zinc-400 dark:text-zinc-500 w-full h-full min-h-[140px]">
                  <Icon icon="hugeicons:image-not-found-01" className="size-8 mb-2 opacity-60" />
                  <span className="text-xs font-medium">Failed to load image</span>
                </div>
              )
            ) : (
              <>
                {/* Progressive Blur-Up Placeholder Effect */}
                {blurUpPlaceholder && isLoading && (
                  <img
                    src={blurUpPlaceholder}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 size-full object-cover blur-md scale-110"
                  />
                )}

                {isLoading && !blurUpPlaceholder && (
                  <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse flex items-center justify-center">
                    <Icon icon="hugeicons:image-01" className="size-8 text-zinc-400 dark:text-zinc-600 animate-bounce" />
                  </div>
                )}
                <img
                  ref={internalRef}
                  src={activeSrc}
                  alt={alt}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  onClick={handleImageClick}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-500 ease-out",
                    isLoading ? "opacity-0 scale-105 blur-sm" : "opacity-100 scale-100 blur-0",
                    (isZoomable || enableLightbox) && "hover:scale-105 cursor-pointer"
                  )}
                  {...props}
                />
              </>
            )}
          </div>
          {caption && (
            <figcaption className="mt-2 text-center text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {caption}
            </figcaption>
          )}
        </figure>

        {/* Lightbox Zoom Modal */}
        {isLightboxOpen && activeSrc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in-0 cursor-zoom-out"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <Icon icon="hugeicons:cancel-01" className="size-6" />
            </button>
            <img
              src={activeSrc}
              alt={alt}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl animate-in zoom-in-95"
            />
          </div>
        )}
      </>
    );
  }
);
Image.displayName = "Image";

export { Image };
