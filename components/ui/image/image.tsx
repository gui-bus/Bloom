import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  radius?: keyof typeof designRadius;
  aspectRatio?: "auto" | "square" | "video" | "4/3" | "21/9";
  fallback?: React.ReactNode;
  isZoomable?: boolean;
  caption?: string;
}

const aspectRatioStyles: Record<string, string> = {
  auto: "aspect-auto",
  square: "aspect-square",
  video: "aspect-video",
  "4/3": "aspect-4/3",
  "21/9": "aspect-21/9",
};

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      radius = "lg",
      aspectRatio = "auto",
      fallback,
      isZoomable = false,
      caption,
      className,
      onError,
      onLoad,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setHasError(true);
      setIsLoading(false);
      onError?.(e);
    };

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setIsLoading(false);
      onLoad?.(e);
    };

    return (
      <figure className="inline-flex flex-col max-w-full">
        <div
          className={cn(
            "relative overflow-hidden bg-muted flex items-center justify-center transition-all duration-300",
            designRadius[radius],
            aspectRatioStyles[aspectRatio],
            className
          )}
        >
          {hasError ? (
            fallback || (
              <div className="flex flex-col items-center justify-center p-4 text-center text-muted-foreground w-full h-full min-h-[120px]">
                <svg
                  className="size-8 mb-2 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs">Failed to load image</span>
              </div>
            )
          ) : (
            <>
              {isLoading && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              <img
                ref={ref}
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-300",
                  isLoading ? "opacity-0" : "opacity-100",
                  isZoomable && "hover:scale-105 cursor-pointer"
                )}
                {...props}
              />
            </>
          )}
        </div>
        {caption && (
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }
);
Image.displayName = "Image";

export { Image };
