import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Kbd } from "../kbd";

describe("Kbd Component", () => {
  it("renders shortcut keys text", () => {
    render(<Kbd>⌘K</Kbd>);
    expect(screen.getByText("⌘K")).toBeInTheDocument();
  });

  it("applies size classes correctly", () => {
    const { container } = render(<Kbd size="lg">Ctrl</Kbd>);
    expect(container.firstChild).toHaveClass("h-7", "text-sm");
  });
});
