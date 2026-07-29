import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { StatCard } from "../statCard";

describe("StatCard Component", () => {
  it("renders title, numerical value and trend percentage", () => {
    render(
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        change="+20.1%"
        trend="up"
      />
    );

    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
    expect(screen.getByText("$45,231.89")).toBeInTheDocument();
    expect(screen.getByText("+20.1%")).toBeInTheDocument();
  });
});
