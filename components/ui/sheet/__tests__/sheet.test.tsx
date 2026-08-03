import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../sheet";

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
