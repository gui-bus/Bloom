import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { TooltipProvider, Tooltip, TooltipTrigger } from "../tooltip";

describe("Tooltip Component", () => {
  it("renders tooltip trigger element", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover Me</TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    );

    expect(screen.getByText("Hover Me")).toBeInTheDocument();
  });
});
