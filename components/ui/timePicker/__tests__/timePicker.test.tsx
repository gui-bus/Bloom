import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TimePicker } from "../timePicker";

describe("TimePicker Component", () => {
  it("renders with default time value and label", () => {
    render(<TimePicker label="Select Meeting Time" value="10:30 AM" />);

    expect(screen.getByText("Select Meeting Time")).toBeInTheDocument();
    expect(screen.getByDisplayValue("10")).toBeInTheDocument();
    expect(screen.getByDisplayValue("30")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "AM" })).toBeInTheDocument();
  });

  it("toggles AM/PM period on click", () => {
    const handleChange = vi.fn();
    render(<TimePicker value="10:30 AM" onChange={handleChange} />);

    const periodBtn = screen.getByRole("button", { name: "AM" });
    fireEvent.click(periodBtn);

    expect(handleChange).toHaveBeenCalledWith("10:30 PM");
  });

  it("renders wheel columns when useWheel is true", () => {
    render(<TimePicker useWheel value="08:15 AM" />);

    expect(screen.getByText("Hours")).toBeInTheDocument();
    expect(screen.getByText("Minutes")).toBeInTheDocument();
    expect(screen.getByText("Period")).toBeInTheDocument();
  });
});
