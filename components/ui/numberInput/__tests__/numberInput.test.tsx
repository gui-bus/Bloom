import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { NumberInput } from "../numberInput";

describe("NumberInput Component", () => {
  it("renders with initial value and label", () => {
    render(<NumberInput label="Quantity" defaultValue={5} />);
    expect(screen.getByText("Quantity")).toBeInTheDocument();
    expect(screen.getByRole("spinbutton")).toHaveValue(5);
  });

  it("increments and decrements value on button clicks", () => {
    const handleChange = vi.fn();
    render(<NumberInput defaultValue={1} onValueChange={handleChange} />);

    const incBtn = screen.getByRole("button", { name: /increment value/i });
    fireEvent.click(incBtn);

    expect(handleChange).toHaveBeenCalledWith(2);
  });
});
