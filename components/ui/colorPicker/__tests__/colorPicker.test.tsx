import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { ColorPicker } from "../colorPicker";

describe("ColorPicker Component", () => {
  it("renders color picker input with hex value", () => {
    render(<ColorPicker label="Theme Color" defaultValue="#ef4444" />);
    expect(screen.getByText("Theme Color")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue("#EF4444");
  });

  it("updates value when color input changes", () => {
    const handleChange = vi.fn();
    const { container } = render(<ColorPicker defaultValue="#ffffff" onValueChange={handleChange} />);

    const colorInput = container.querySelector('input[type="color"]');
    if (colorInput) {
      fireEvent.change(colorInput, { target: { value: "#000000" } });
      expect(handleChange).toHaveBeenCalledWith("#000000");
    }
  });
});
