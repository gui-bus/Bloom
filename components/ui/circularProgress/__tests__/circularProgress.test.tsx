import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CircularProgress } from "../circularProgress";

describe("CircularProgress Component", () => {
  it("renders correctly with default state", () => {
    const { container } = render(<CircularProgress value={45} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies alert-aligned stroke colors correctly", () => {
    const { container } = render(
      <CircularProgress value={50} color="success" />,
    );
    const circle = container.querySelector("circle:nth-child(2)");
    expect(circle).toHaveClass("stroke-emerald-500");
  });

  it("renders showValueLabel percent label inside circle", () => {
    render(<CircularProgress value={75} showValueLabel />);
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("renders custom label text correctly", () => {
    render(<CircularProgress label="Syncing database" />);
    expect(screen.getByText("Syncing database")).toBeInTheDocument();
  });

  it("applies spin animation class when isIndeterminate is true", () => {
    const { container } = render(<CircularProgress isIndeterminate />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("animate-spin");
  });
});
