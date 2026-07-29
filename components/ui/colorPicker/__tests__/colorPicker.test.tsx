import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { ColorPicker } from "../colorPicker";

describe("ColorPicker Component", () => {
  it("renders color picker input with hex value", () => {
    render(<ColorPicker label="Theme Color" defaultValue="#ef4444" />);
    expect(screen.getByText("Theme Color")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue("#ef4444");
  });

  it("updates value when preset swatch clicked", () => {
    const handleChange = vi.fn();
    render(<ColorPicker defaultValue="#ffffff" onValueChange={handleChange} />);

    const blackSwatch = screen.getByLabelText("Select color #000000");
    fireEvent.click(blackSwatch);

    expect(handleChange).toHaveBeenCalledWith("#000000");
  });
});
