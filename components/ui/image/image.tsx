"use client";

import { Icon } from "@iconify/react";
import NextImage from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

export type ImageRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
export type ImageAspectRatio = "auto" | "square" | "video" | "4/3" | "21/9";

export interface ImageProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof NextImage>,
    "src" | "radius" | "placeholder" | "alt"
  > {
  src?: string;
  fallbackSrc?: string;
  alt?: string;
  radius?: ImageRadius;
  aspectRatio?: ImageAspectRatio;
  fallback?: React.ReactNode;
  isZoomable?: boolean;
  enableLightbox?: boolean;
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
  auto: "aspect-auto min-h-[200px]",
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
      placeholder = false,
      isPlaceholder = false,
      blurUpPlaceholder,
      caption,
      className,
      onError,
      onLoad,
      ...props
    },
    _ref,
  ) => {
    const [currentSrc, setCurrentSrc] = React.useState<string | undefined>(src);
    const [hasError, setHasError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

    const usePlaceholder = placeholder || isPlaceholder;
    const activeSrc = usePlaceholder ? PLACEHOLDER_SVG_SRC : currentSrc;

    React.useEffect(() => {
      setCurrentSrc(src);
      setHasError(false);
      setIsLoading(true);
    }, [src]);

    const handleImageError = (
      e: React.SyntheticEvent<HTMLImageElement, Event>,
    ) => {
      if (fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
        setHasError(false);
        setIsLoading(true);
      } else {
        setHasError(true);
        setIsLoading(false);
      }
      onError?.(e as any);
    };

    const handleImageLoad = (
      e: React.SyntheticEvent<HTMLImageElement, Event>,
    ) => {
      setIsLoading(false);
      onLoad?.(e as any);
    };

    const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
      if (enableLightbox && !hasError && activeSrc) {
        setIsLightboxOpen(true);
      }
      props.onClick?.(e as any);
    };

    return (
      <>
        <figure className="relative inline-flex flex-col w-full max-w-full">
          <div
            className={cn(
              "relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/60 dark:border-zinc-800/60 transition-all duration-300 w-full",
              radiusStyles[radius],
              aspectRatioStyles[aspectRatio],
              aspectRatio === "auto" && "h-64",
              className,
            )}
          >
            {hasError ? (
              fallback || (
                <div className="flex flex-col items-center justify-center p-6 text-center text-zinc-400 dark:text-zinc-500 w-full h-full min-h-[140px]">
                  <Icon
                    icon="hugeicons:image-not-found-01"
                    className="size-8 mb-2 opacity-60"
                  />
                  <span className="text-xs font-medium">
                    Failed to load image
                  </span>
                </div>
              )
            ) : (
              <>
                {blurUpPlaceholder && isLoading && (
                  <NextImage
                    src={blurUpPlaceholder}
                    alt=""
                    fill
                    unoptimized
                    aria-hidden="true"
                    className="absolute inset-0 size-full object-cover blur-md scale-110"
                  />
                )}

                {isLoading && !blurUpPlaceholder && (
                  <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse flex items-center justify-center z-10">
                    <Icon
                      icon="hugeicons:image-01"
                      className="size-8 text-zinc-400 dark:text-zinc-600 animate-bounce"
                    />
                  </div>
                )}

                {activeSrc && (
                  <NextImage
                    src={activeSrc}
                    alt={alt}
                    fill
                    unoptimized
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    onClick={handleImageClick as any}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-500 ease-out",
                      isLoading
                        ? "opacity-0 scale-105 blur-sm"
                        : "opacity-100 scale-100 blur-0",
                      (isZoomable || enableLightbox) &&
                        "hover:scale-105 cursor-pointer",
                    )}
                    {...(props as any)}
                  />
                )}
              </>
            )}
          </div>
          {caption && (
            <figcaption className="mt-2 text-center text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {caption}
            </figcaption>
          )}
        </figure>

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
  },
);
Image.displayName = "Image";

export { Image };
