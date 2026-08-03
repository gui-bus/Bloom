import { render } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import { Chart } from "../chart";

describe("Chart Component", () => {
  beforeEach(() => {
    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  });

  it("renders chart container", () => {
    const data = [
      { month: "Jan", sales: 100 },
      { month: "Feb", sales: 200 },
    ];
    const { container } = render(
      <Chart data={data} xKey="month" yKey="sales" />,
    );
    expect(container).toBeInTheDocument();
  });
});
