import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NumberInput } from "../numberInput";

describe("NumberInput Component", () => {
  it("renders with initial value and label", () => {
    render(<NumberInput label="Quantity" defaultValue={5} />);
    expect(screen.getByText("Quantity")).toBeInTheDocument();
    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });

  it("increments and decrements value on button clicks", () => {
    const handleChange = vi.fn();
    render(<NumberInput defaultValue={1} onValueChange={handleChange} />);

    const incBtn = screen.getByRole("button", { name: /increment value/i });
    fireEvent.click(incBtn);

    expect(handleChange).toHaveBeenCalledWith(2);
  });
});
