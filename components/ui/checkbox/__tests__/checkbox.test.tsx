import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "../checkbox";

describe("Checkbox Component", () => {
  it("renders correctly with label", () => {
    render(<Checkbox label="Accept terms and conditions" />);
    expect(screen.getByText("Accept terms and conditions")).toBeInTheDocument();
  });

  it("toggles checked state when clicked", () => {
    const handleCheckedChange = vi.fn();
    render(<Checkbox label="Subscribe" onCheckedChange={handleCheckedChange} />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });
});
