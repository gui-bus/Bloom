import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Gauge } from "../gauge";

describe("Gauge Component", () => {
  it("renders correctly with default state", () => {
    const { container } = render(<Gauge value={60} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders custom label and unit text correctly", () => {
    render(<Gauge value={45} label="Storage" unit="GB" />);
    expect(screen.getByText("Storage")).toBeInTheDocument();
    expect(screen.getByText("45")).toBeInTheDocument();
    expect(screen.getByText("GB")).toBeInTheDocument();
  });

  it("applies color styles correctly", () => {
    const { container } = render(<Gauge value={50} color="success" />);
    const circle = container.querySelector("circle:nth-child(2)");
    expect(circle).toHaveClass("stroke-emerald-500");
  });

  it("renders variant dashes correctly", () => {
    const { container } = render(
      <Gauge value={75} variant="dashes" numDashes={10} />,
    );
    const lines = container.querySelectorAll("line");
    expect(lines.length).toBe(10);
  });

  it("renders scale tick labels correctly with tickStep", () => {
    render(<Gauge value={50} showTicks showTickLabels tickStep={50} />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getAllByText("50")[0]).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  it("renders scale tick labels correctly with tickValues", () => {
    render(
      <Gauge value={30} showTicks showTickLabels tickValues={[10, 20, 30]} />,
    );
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getAllByText("30")[0]).toBeInTheDocument();
  });
});
