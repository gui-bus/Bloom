import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ToggleGroup, ToggleGroupItem } from "../toggleGroup";

describe("ToggleGroup Component", () => {
  it("renders toggle items correctly", () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center">Center</ToggleGroupItem>
      </ToggleGroup>,
    );

    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Center")).toBeInTheDocument();
  });
});
