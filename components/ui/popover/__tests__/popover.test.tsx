import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Popover, PopoverTrigger, PopoverContent } from "../popover";

describe("Popover Component", () => {
  it("renders trigger and opens popover content on click", () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Body Content</PopoverContent>
      </Popover>
    );

    expect(screen.getByText("Open Popover")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Open Popover"));
    expect(screen.getByText("Popover Body Content")).toBeInTheDocument();
  });
});
