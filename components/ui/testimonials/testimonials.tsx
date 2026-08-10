"use client";

import { Icon } from "@iconify/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import * as React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id?: string | number;
  quote: React.ReactNode;
  author: {
    name: string;
    role?: string;
    company?: string;
    avatarUrl?: string;
    avatarFallback?: string;
  };
  rating?: number;
  featured?: boolean;
}

export interface TestimonialsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: TestimonialItem[];
  layout?: "grid" | "masonry" | "carousel" | "split";
  cols?: 1 | 2 | 3 | 4;
  autoplay?: boolean;
  autoplayDelay?: number;
  showDots?: boolean;
  showControls?: boolean;
  radius?: keyof typeof designRadius;
  cardClassName?: string;
  ratingColor?: string;
  showQuoteIcon?: boolean;
  splitVariant?: "featured-aside" | "quote-author";
}

export function RatingStars({
  rating,
  ratingColor = "text-amber-500",
}: {
  rating: number;
  ratingColor?: string;
}) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Rating: ${rating} stars`}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <Icon
          key={idx}
          icon={idx < rating ? "solar:star-bold" : "solar:star-linear"}
          className={cn(
            "size-4",
            idx < rating ? ratingColor : "text-zinc-300 dark:text-zinc-700",
          )}
        />
      ))}
    </div>
  );
}

export function TestimonialCard({
  item,
  radius = "2xl",
  className,
  ratingColor,
  showQuoteIcon = true,
}: {
  item: TestimonialItem;
  radius?: keyof typeof designRadius;
  className?: string;
  ratingColor?: string;
  showQuoteIcon?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-8 flex flex-col justify-between gap-6 shadow-xs transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700/80",
        designRadius[radius],
        item.featured && "ring-1 ring-zinc-900/5 dark:ring-white/5 shadow-md",
        className,
      )}
    >
      {showQuoteIcon && (
        <div className="absolute top-6 right-6 text-zinc-100 dark:text-zinc-800/50 pointer-events-none select-none">
          <Icon
            icon="hugeicons:quote-down-double"
            className="size-10 rotate-180"
          />
        </div>
      )}

      <div className="space-y-4">
        {item.rating !== undefined && (
          <RatingStars rating={item.rating} ratingColor={ratingColor} />
        )}
        <blockquote className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>

      <div className="flex items-center gap-3">
        <Avatar size="md">
          <AvatarImage src={item.author.avatarUrl} alt={item.author.name} />
          <AvatarFallback>
            {item.author.avatarFallback ||
              item.author.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col min-w-0">
          <cite className="not-italic font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
            {item.author.name}
          </cite>
          {(item.author.role || item.author.company) && (
            <span className="text-zinc-500 dark:text-zinc-400 text-xs truncate">
              {item.author.role}
              {item.author.role && item.author.company && " at "}
              {item.author.company}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Testimonials({
  items,
  layout = "grid",
  cols = 3,
  autoplay = false,
  autoplayDelay = 4000,
  showDots = true,
  showControls = true,
  radius = "2xl",
  cardClassName,
  ratingColor,
  showQuoteIcon = true,
  splitVariant = "featured-aside",
  className,
  ...props
}: TestimonialsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    autoplay
      ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
      : [],
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi],
  );
  const scrollTo = React.useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = React.useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (layout === "masonry") {
    const masonryColsClass = {
      1: "columns-1",
      2: "columns-1 md:columns-2",
      3: "columns-1 md:columns-2 lg:columns-3",
      4: "columns-1 sm:columns-2 md:columns-3 lg:columns-4",
    }[cols];

    return (
      <div className={cn("w-full", className)} {...props}>
        <div
          className={cn(
            "gap-6 space-y-6 [column-fill:_balance] box-decoration-clone",
            masonryColsClass,
          )}
        >
          {items.map((item, idx) => (
            <div key={item.id ?? idx} className="break-inside-avoid">
              <TestimonialCard
                item={item}
                radius={radius}
                className={cardClassName}
                ratingColor={ratingColor}
                showQuoteIcon={showQuoteIcon}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (layout === "carousel") {
    return (
      <div className={cn("w-full space-y-6", className)} {...props}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {items.map((item, idx) => (
              <div
                key={item.id ?? idx}
                className={cn(
                  "pl-4 min-w-0 shrink-0",
                  cols === 1 && "basis-full",
                  cols === 2 && "basis-full md:basis-1/2",
                  cols === 3 && "basis-full md:basis-1/2 lg:basis-1/3",
                  cols === 4 &&
                    "basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4",
                )}
              >
                <TestimonialCard
                  item={item}
                  radius={radius}
                  className={cn("h-full", cardClassName)}
                  ratingColor={ratingColor}
                  showQuoteIcon={showQuoteIcon}
                />
              </div>
            ))}
          </div>
        </div>

        {(showControls || showDots) && (
          <div className="flex items-center justify-between gap-4">
            {showDots ? (
              <div className="flex items-center gap-2">
                {scrollSnaps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className={cn(
                      "size-2 rounded-full transition-all duration-200",
                      idx === selectedIndex
                        ? "bg-zinc-900 dark:bg-white w-4"
                        : "bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400",
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            ) : (
              <div />
            )}

            {showControls && (
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollPrev}
                  className="flex items-center justify-center size-9 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Previous slide"
                >
                  <Icon icon="hugeicons:arrow-left-01" className="size-4" />
                </button>
                <button
                  onClick={scrollNext}
                  className="flex items-center justify-center size-9 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Next slide"
                >
                  <Icon icon="hugeicons:arrow-right-01" className="size-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (layout === "split") {
    if (splitVariant === "quote-author") {
      const mainItem = items.find((i) => i.featured) || items[0];
      return (
        <div
          className={cn(
            "w-full bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
            designRadius[radius],
            className,
          )}
          {...props}
        >
          <div className="lg:col-span-8 space-y-6">
            {showQuoteIcon && (
              <Icon
                icon="hugeicons:quote-down-double"
                className="size-12 text-zinc-200 dark:text-zinc-800 rotate-180"
              />
            )}
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-zinc-900 dark:text-zinc-100 font-medium leading-normal tracking-tight">
              &ldquo;{mainItem.quote}&rdquo;
            </blockquote>
          </div>
          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-zinc-200 dark:border-zinc-800 space-y-4">
            {mainItem.rating !== undefined && (
              <RatingStars rating={mainItem.rating} ratingColor={ratingColor} />
            )}
            <div className="flex items-center gap-4">
              <Avatar size="lg">
                <AvatarImage
                  src={mainItem.author.avatarUrl}
                  alt={mainItem.author.name}
                />
                <AvatarFallback>
                  {mainItem.author.avatarFallback ||
                    mainItem.author.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <cite className="not-italic font-bold text-zinc-900 dark:text-zinc-100 text-base md:text-lg block">
                  {mainItem.author.name}
                </cite>
                {(mainItem.author.role || mainItem.author.company) && (
                  <span className="text-zinc-500 dark:text-zinc-400 text-sm">
                    {mainItem.author.role}
                    {mainItem.author.role && mainItem.author.company && " at "}
                    {mainItem.author.company}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    const featuredItem = items.find((i) => i.featured) || items[0];
    const otherItems = items.filter((i) => i !== featuredItem);

    return (
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-8 w-full",
          className,
        )}
        {...props}
      >
        <div className="lg:col-span-5 h-full">
          <TestimonialCard
            item={{ ...featuredItem, featured: true }}
            radius={radius}
            className={cn("h-full justify-center p-8 md:p-10", cardClassName)}
            ratingColor={ratingColor}
            showQuoteIcon={showQuoteIcon}
          />
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherItems.slice(0, 4).map((item, idx) => (
            <TestimonialCard
              key={item.id ?? idx}
              item={item}
              radius={radius}
              className={cardClassName}
              ratingColor={ratingColor}
              showQuoteIcon={showQuoteIcon}
            />
          ))}
        </div>
      </div>
    );
  }

  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }[cols];

  return (
    <div
      className={cn("grid gap-6 w-full", gridColsClass, className)}
      {...props}
    >
      {items.map((item, idx) => (
        <TestimonialCard
          key={item.id ?? idx}
          item={item}
          radius={radius}
          className={cardClassName}
          ratingColor={ratingColor}
          showQuoteIcon={showQuoteIcon}
        />
      ))}
    </div>
  );
}
