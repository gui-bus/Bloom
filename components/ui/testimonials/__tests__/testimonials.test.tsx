import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const mockApi = {
  scrollPrev: vi.fn(),
  scrollNext: vi.fn(),
  scrollTo: vi.fn(),
  canScrollPrev: () => true,
  canScrollNext: () => true,
  selectedScrollSnap: () => 0,
  scrollSnapList: () => [0, 1],
  on: vi.fn(),
  off: vi.fn(),
};

vi.mock("embla-carousel-react", () => ({
  default: () => [(node: HTMLElement | null) => node, mockApi],
}));

vi.mock("react-fast-marquee", () => ({
  default: ({ children }: any) => <div>{children}</div>,
}));

import { type TestimonialItem, Testimonials } from "../testimonials";

describe("Testimonials Component", () => {
  const items: TestimonialItem[] = [
    {
      id: 1,
      quote: "This is a great product!",
      author: {
        name: "John Doe",
        role: "CEO",
        company: "Acme Corp",
      },
      rating: 5,
    },
  ];

  it("renders grid testimonials layout", () => {
    render(<Testimonials items={items} layout="grid" />);

    expect(screen.getByText(/This is a great product!/)).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("CEO at Acme Corp")).toBeInTheDocument();
  });

  it("renders carousel testimonials layout", () => {
    render(<Testimonials items={items} layout="carousel" />);

    expect(screen.getByText(/This is a great product!/)).toBeInTheDocument();
  });
});
