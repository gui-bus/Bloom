import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Progress } from "../progress";

describe("Progress Component", () => {
  it("renders with role progressbar and correct value attribute", () => {
    const { container } = render(<Progress value={45} />);
    const progressbar = container.querySelector('[role="progressbar"]');
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute("aria-valuenow", "45");
  });

  it("renders label and value percentage when requested", () => {
    render(<Progress value={75} label="Uploading..." showValueLabel />);
    expect(screen.getByText("Uploading...")).toBeInTheDocument();
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("handles indeterminate mode correctly", () => {
    const { container } = render(<Progress isIndeterminate />);
    const progressbar = container.querySelector('[role="progressbar"]');
    expect(progressbar).not.toHaveAttribute("aria-valuenow");
  });
});
