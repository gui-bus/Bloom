import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HoverCard, HoverCardTrigger } from "../hoverCard";

describe("HoverCard Component", () => {
  it("renders hover card trigger element", () => {
    render(
      <HoverCard>
        <HoverCardTrigger>@nextjs</HoverCardTrigger>
      </HoverCard>,
    );

    expect(screen.getByText("@nextjs")).toBeInTheDocument();
  });
});
