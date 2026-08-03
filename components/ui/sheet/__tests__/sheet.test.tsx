import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../sheet";

describe("Sheet Component", () => {
  it("renders trigger and opens side sheet overlay on click", () => {
    render(
      <Sheet>
        <SheetTrigger>Open Drawer</SheetTrigger>
        <SheetContent side="right">
          <SheetTitle>Side Drawer Title</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    expect(screen.getByText("Open Drawer")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Open Drawer"));
    expect(screen.getByText("Side Drawer Title")).toBeInTheDocument();
  });
});
