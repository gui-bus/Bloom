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

  it("renders visible label when provided", () => {
    render(<Spinner label="Processing payment..." />);
    expect(screen.getByText("Processing payment...")).toBeInTheDocument();
  });

  it("applies size and color theme classes correctly", () => {
    const { container } = render(<Spinner size="lg" color="danger" />);
    const spinnerCircle = container.querySelector(".animate-spin");
    expect(spinnerCircle).toHaveClass("size-8");
    expect(spinnerCircle).toHaveClass("border-t-rose-500");
  });
});
