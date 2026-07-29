import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "../switch";

describe("Switch Component", () => {
  it("renders correctly with label", () => {
    render(<Switch label="Airplane Mode" />);
    expect(screen.getByText("Airplane Mode")).toBeInTheDocument();
  });

  it("toggles checked state when clicked", () => {
    const handleCheckedChange = vi.fn();
    render(<Switch label="Wi-Fi" onCheckedChange={handleCheckedChange} />);
    const switchEl = screen.getByRole("switch");

    fireEvent.click(switchEl);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });
});
