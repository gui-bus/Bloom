import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { DatePicker } from "../datePicker";

describe("DatePicker Component", () => {
  it("renders trigger button with placeholder", () => {
    render(<DatePicker label="Birth Date" placeholder="Select date..." />);
    expect(screen.getByText("Birth Date")).toBeInTheDocument();
    expect(screen.getByText("Select date...")).toBeInTheDocument();
  });

  it("opens popover calendar on click", () => {
    render(<DatePicker placeholder="Select date..." />);
    const trigger = screen.getByText("Select date...");

    fireEvent.click(trigger);
    expect(screen.getByText("Su")).toBeInTheDocument();
  });
});
