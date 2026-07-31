import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../button";

describe("Button Component", () => {
  it("renders correctly with default styles and text content", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("relative", "inline-flex", "items-center", "justify-center");
  });

  it("handles loading states correctly", () => {
    render(<Button isLoading loadingText="Loading...">Action</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveClass("cursor-wait", "opacity-50");
    expect(screen.getAllByText("Loading...")[0]).toBeInTheDocument();
  });

  it("renders as disabled and prevents clicking", () => {
    const handleClick = vi.fn();
    render(<Button isDisabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveClass("cursor-not-allowed");
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("triggers onClick handler on click when active", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    const button = screen.getByRole("button", { name: /clickable/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies size and variant classes from CVA and design system maps", () => {
    render(<Button size="sm" variant="bordered" color="success">Success bordered</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-sm");
    expect(button).toHaveClass("border");
  });
});
