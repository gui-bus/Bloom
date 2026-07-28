import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Badge } from "../badge";

describe("Badge Component", () => {
  it("renders correctly with children text", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies flat variant classes by default", () => {
    render(<Badge color="primary">Primary</Badge>);
    const badge = screen.getByText("Primary");
    expect(badge).toHaveClass("bg-primary/20", "text-primary");
  });

  it("applies default variant classes correctly", () => {
    render(<Badge variant="default" color="success">Success</Badge>);
    const badge = screen.getByText("Success");
    expect(badge).toHaveClass("bg-success", "text-success-foreground");
  });

  it("applies bordered variant classes correctly", () => {
    render(<Badge variant="bordered" color="danger">Danger</Badge>);
    const badge = screen.getByText("Danger");
    expect(badge).toHaveClass("border", "border-danger", "text-danger");
  });

  it("renders dot indicator when dot prop is true", () => {
    render(<Badge dot color="success">Online</Badge>);
    const badge = screen.getByText("Online").closest("span");
    // The dot is a child span within the badge
    const dot = badge?.querySelector("span");
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveClass("size-1.5", "rounded-full");
  });

  it("renders startContent correctly", () => {
    render(
      <Badge startContent={<span data-testid="start-icon">★</span>}>
        Verified
      </Badge>
    );
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByText("Verified")).toBeInTheDocument();
  });

  it("renders endContent correctly", () => {
    render(
      <Badge endContent={<span data-testid="end-icon">→</span>}>
        Next
      </Badge>
    );
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });

  it("applies size classes correctly", () => {
    render(<Badge size="lg" color="primary">Large</Badge>);
    const badge = screen.getByText("Large");
    expect(badge).toHaveClass("text-sm", "px-3");
  });

  it("applies full radius by default", () => {
    render(<Badge>Pill</Badge>);
    const badge = screen.getByText("Pill");
    expect(badge).toHaveClass("rounded-full");
  });

  it("applies custom radius class", () => {
    render(<Badge radius="md">Square-ish</Badge>);
    const badge = screen.getByText("Square-ish");
    expect(badge).toHaveClass("rounded-md");
  });

  it("accepts and applies custom className", () => {
    render(<Badge className="my-custom-class">Custom</Badge>);
    const badge = screen.getByText("Custom");
    expect(badge).toHaveClass("my-custom-class");
  });
});
