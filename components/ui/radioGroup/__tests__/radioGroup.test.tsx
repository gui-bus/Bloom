import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { RadioGroup, RadioGroupItem } from "../radioGroup";

describe("RadioGroup Component", () => {
  it("renders group items correctly", () => {
    render(
      <RadioGroup defaultValue="opt1">
        <RadioGroupItem value="opt1" label="Option 1" />
        <RadioGroupItem value="opt2" label="Option 2" />
      </RadioGroup>,
    );

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("handles value change on item click", () => {
    const handleValueChange = vi.fn();
    render(
      <RadioGroup defaultValue="opt1" onValueChange={handleValueChange}>
        <RadioGroupItem value="opt1" label="Option 1" />
        <RadioGroupItem value="opt2" label="Option 2" />
      </RadioGroup>,
    );

    fireEvent.click(screen.getByText("Option 2"));
    expect(handleValueChange).toHaveBeenCalledWith("opt2");
  });
});
