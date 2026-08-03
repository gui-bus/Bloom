import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../tooltip";

describe("Tooltip Component", () => {
  it("renders tooltip trigger element", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover Me</TooltipTrigger>
        </Tooltip>
      </TooltipProvider>,
    );

    expect(screen.getByText("Hover Me")).toBeInTheDocument();
  });
});
