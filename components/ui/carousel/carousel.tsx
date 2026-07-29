"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  autoplay?: boolean;
  autoplayDelay?: number;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollSnaps: number[];
  scrollTo: (index: number) => void;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins = [],
      autoplay = false,
      autoplayDelay = 3000,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const activePlugins = React.useMemo(() => {
      const list = [...(Array.isArray(plugins) ? plugins : [plugins])];
      if (autoplay) {
        list.push(
          Autoplay({
            delay: autoplayDelay,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          })
        );
      }
      return list;
    }, [plugins, autoplay, autoplayDelay]);

    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      activePlugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;
      setSelectedIndex(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollTo = React.useCallback(
      (index: number) => {
        api?.scrollTo(index);
      },
      [api]
    );

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    React.useEffect(() => {
      if (!api) return;
      setScrollSnaps(api.scrollSnapList());
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      if (setApi) setApi(api);

      return () => {
        api.off("select", onSelect);
      };
    }, [api, onSelect, setApi]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          selectedIndex,
          scrollSnaps,
          scrollTo,
          autoplay,
          autoplayDelay,
        }}
      >
        <div
          ref={ref}
          role="region"
          aria-roledescription="carousel"
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden size-full">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "bordered", size = "sm", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      isIconOnly
      isDisabled={!canScrollPrev}
      onClick={scrollPrev}
      ariaLabel="Previous slide"
      className={cn(
        "absolute rounded-full z-10 bg-background/80 backdrop-blur-sm shadow-md",
        orientation === "horizontal"
          ? "-left-4 top-1/2 -translate-y-1/2"
          : "-top-4 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      {...props}
    >
      <Icon icon="hugeicons:arrow-left-01" className="size-4" />
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "bordered", size = "sm", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      isIconOnly
      isDisabled={!canScrollNext}
      onClick={scrollNext}
      ariaLabel="Next slide"
      className={cn(
        "absolute rounded-full z-10 bg-background/80 backdrop-blur-sm shadow-md",
        orientation === "horizontal"
          ? "-right-4 top-1/2 -translate-y-1/2"
          : "-bottom-4 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      {...props}
    >
      <Icon icon="hugeicons:arrow-right-01" className="size-4" />
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { scrollSnaps, selectedIndex, scrollTo } = useCarousel();

  if (!scrollSnaps.length) return null;

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-1.5 mt-4", className)}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={cn(
            "size-2 rounded-full transition-all duration-300 cursor-pointer",
            index === selectedIndex
              ? "bg-primary w-6"
              : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
          )}
        />
      ))}
    </div>
  );
});
CarouselDots.displayName = "CarouselDots";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
};
