import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

describe("Popover Component", () => {
  it("renders trigger and opens popover content on click", () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Body Content</PopoverContent>
      </Popover>,
    );

    expect(screen.getByText("Open Popover")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Open Popover"));
    expect(screen.getByText("Popover Body Content")).toBeInTheDocument();
  });
});
