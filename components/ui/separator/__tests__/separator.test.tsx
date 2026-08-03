import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Separator } from "../separator";

describe("Separator Component", () => {
  it("renders horizontal separator by default", () => {
    const { container } = render(<Separator />);
    const root =
      container.querySelector('[role="none"]') ||
      container.querySelector('[role="separator"]');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass("h-px", "w-full");
  });

  it("renders vertical separator correctly", () => {
    const { container } = render(<Separator orientation="vertical" />);
    const root = container.querySelector('[data-orientation="vertical"]');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass("w-px", "h-full");
  });

  it("renders label when label prop is provided", () => {
    render(<Separator label="OR" />);
    expect(screen.getByText("OR")).toBeInTheDocument();
  });

  it("applies color theme classes correctly", () => {
    const { container } = render(<Separator color="primary" />);
    const root = container.firstElementChild;
    expect(root).toHaveClass("bg-sky-500");
  });

  it("applies gradient class when gradient prop is true", () => {
    const { container } = render(<Separator gradient color="primary" />);
    const root = container.firstElementChild;
    expect(root).toHaveClass("bg-gradient-to-r");
  });

  it("sets non-decorative aria role when decorative is false", () => {
    render(<Separator decorative={false} aria-label="Divider" />);
    const separator = screen.getByRole("separator", { name: "Divider" });
    expect(separator).toBeInTheDocument();
  });
});
