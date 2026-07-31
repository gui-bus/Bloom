import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { ColorSwatches } from "../colorSwatches";

const colors = ["#ff0000", "#00ff00", "#0000ff"];

describe("ColorSwatches Component", () => {
  it("renders color swatch buttons", () => {
    render(<ColorSwatches colors={colors} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  it("handles single color selection", () => {
    const handleChange = vi.fn();
    render(<ColorSwatches colors={colors} value="#ff0000" onChange={handleChange} />);

    const blueSwatch = screen.getByLabelText("Select color #0000ff");
    fireEvent.click(blueSwatch);

    expect(handleChange).toHaveBeenCalledWith("#0000ff");
  });

  it("handles multi-color selection", () => {
    const handleMultiChange = vi.fn();
    render(
      <ColorSwatches
        colors={colors}
        isMulti
        multiValue={["#ff0000"]}
        onMultiChange={handleMultiChange}
      />
    );

    const greenSwatch = screen.getByLabelText("Select color #00ff00");
    fireEvent.click(greenSwatch);

    expect(handleMultiChange).toHaveBeenCalledWith(["#ff0000", "#00ff00"]);
  });
});
