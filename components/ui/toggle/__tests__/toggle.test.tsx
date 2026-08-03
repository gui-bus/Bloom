import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
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
