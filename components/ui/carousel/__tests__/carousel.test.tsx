import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";

// Mock embla-carousel-react to operate safely in jsdom environment
vi.mock("embla-carousel-react", () => {
  return {
    default: () => [
      (node: HTMLElement | null) => node,
      {
        scrollPrev: vi.fn(),
        scrollNext: vi.fn(),
        scrollTo: vi.fn(),
        canScrollPrev: () => true,
        canScrollNext: () => true,
        selectedScrollSnap: () => 0,
        scrollSnapList: () => [0, 1],
        on: vi.fn(),
        off: vi.fn(),
      },
    ],
  };
});

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../carousel";

describe("Carousel Component", () => {
  it("renders carousel items and navigation buttons", () => {
    render(
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );

    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
    expect(screen.getByLabelText("Previous slide")).toBeInTheDocument();
    expect(screen.getByLabelText("Next slide")).toBeInTheDocument();
  });
});
