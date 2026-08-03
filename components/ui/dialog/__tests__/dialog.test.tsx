import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../dialog";

describe("Dialog Component", () => {
  it("renders trigger and opens dialog overlay content on click", () => {
    render(
      <Dialog>
        <DialogTrigger>Open Modal</DialogTrigger>
        <DialogContent>
          <DialogTitle>Modal Header</DialogTitle>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByText("Open Modal")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Open Modal"));
    expect(screen.getByText("Modal Header")).toBeInTheDocument();
  });
});
