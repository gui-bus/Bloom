import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { Toggle } from "../toggle";

describe("Toggle Component", () => {
  it("renders correctly with text content", () => {
    render(<Toggle>Bold</Toggle>);
    expect(screen.getByText("Bold")).toBeInTheDocument();
  });

  it("toggles pressed state on click", () => {
    const handlePressedChange = vi.fn();
    render(<Toggle onPressedChange={handlePressedChange}>Italic</Toggle>);

    fireEvent.click(screen.getByText("Italic"));
    expect(handlePressedChange).toHaveBeenCalledWith(true);
  });
});
