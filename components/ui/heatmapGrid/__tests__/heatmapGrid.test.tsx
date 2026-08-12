import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeatmapGrid } from "../heatmapGrid";

describe("HeatmapGrid Component", () => {
  const data = [
    { date: new Date("2026-01-01"), count: 5 },
    { date: "2026-01-02", count: 10 },
  ];

  it("renders heatmap grid correctly", () => {
    render(
      <HeatmapGrid
        data={data}
        startDate={new Date("2026-01-01")}
        endDate={new Date("2026-01-07")}
      />,
    );

    expect(screen.getByText("Less")).toBeInTheDocument();
    expect(screen.getByText("More")).toBeInTheDocument();
  });
});
