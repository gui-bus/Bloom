import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { HoverCard, HoverCardTrigger } from "../hoverCard";

describe("HoverCard Component", () => {
  it("renders hover card trigger element", () => {
    render(
      <HoverCard>
        <HoverCardTrigger>@nextjs</HoverCardTrigger>
      </HoverCard>
    );

    expect(screen.getByText("@nextjs")).toBeInTheDocument();
  });
});
