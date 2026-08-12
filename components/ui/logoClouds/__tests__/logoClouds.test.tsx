import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("react-fast-marquee", () => ({
  default: ({ children }: any) => <div>{children}</div>,
}));

import { type Logo, LogoClouds } from "../logoClouds";

describe("LogoClouds Component", () => {
  const customLogos: Logo[] = [
    {
      id: "logo1",
      name: "Custom Logo 1",
      logo: <span>Custom Logo 1 SVG</span>,
    },
  ];

  it("renders logos in grid layout", () => {
    render(
      <LogoClouds variant="grid" logos={customLogos} title="Our partners" />,
    );

    expect(screen.getByText("Our partners")).toBeInTheDocument();
    expect(screen.getByText("Custom Logo 1 SVG")).toBeInTheDocument();
  });

  it("renders logos in marquee layout", () => {
    render(<LogoClouds variant="marquee" logos={customLogos} />);

    expect(screen.getByText("Custom Logo 1 SVG")).toBeInTheDocument();
  });
});
