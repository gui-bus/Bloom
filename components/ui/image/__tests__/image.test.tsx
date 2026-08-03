import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Image } from "../image";

describe("Image Component", () => {
  it("renders image tag with src and alt", () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
        alt="Gradient background"
      />,
    );
    const img = screen.getByAltText("Gradient background");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    );
  });

  it("renders caption when provided", () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
        alt="Gradient"
        caption="A colorful abstract gradient"
      />,
    );
    expect(
      screen.getByText("A colorful abstract gradient"),
    ).toBeInTheDocument();
  });

  it("renders fallback UI on image error", () => {
    render(
      <Image
        src="invalid-image-url.jpg"
        alt="Broken"
        fallback={<div data-testid="custom-fallback">Image Error</div>}
      />,
    );
    const img = screen.getByAltText("Broken");
    fireEvent.error(img);

    expect(screen.getByTestId("custom-fallback")).toBeInTheDocument();
    expect(screen.getByText("Image Error")).toBeInTheDocument();
  });

  it("applies zoomable hover class when isZoomable is true", () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
        alt="Zoomable"
        isZoomable
      />,
    );
    const img = screen.getByAltText("Zoomable");
    expect(img).toHaveClass("hover:scale-105", "cursor-pointer");
  });
});
