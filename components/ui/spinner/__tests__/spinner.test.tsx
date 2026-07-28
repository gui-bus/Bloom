import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Spinner } from "../spinner";

describe("Spinner Component", () => {
  it("renders status role and aria-busy attribute", () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector('[role="status"]');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute("aria-busy", "true");
  });

  it("renders all variant animation types without crash", () => {
    const { container: dots } = render(<Spinner variant="dots" />);
    expect(dots.querySelector(".animate-bounce")).toBeInTheDocument();

    const { container: bars } = render(<Spinner variant="bars" />);
    expect(bars.querySelector(".animate-pulse")).toBeInTheDocument();

    const { container: pulse } = render(<Spinner variant="pulse" />);
    expect(pulse.querySelector(".animate-ping")).toBeInTheDocument();

    const { container: ring } = render(<Spinner variant="ring" />);
    expect(ring.querySelector(".border-dashed")).toBeInTheDocument();
  });

  it("renders visible label when provided", () => {
    render(<Spinner label="Processing payment..." />);
    expect(screen.getByText("Processing payment...")).toBeInTheDocument();
  });
});
