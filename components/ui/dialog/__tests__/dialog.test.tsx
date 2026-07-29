import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../dialog";

describe("Dialog Component", () => {
  it("renders trigger and opens dialog overlay content on click", () => {
    render(
      <Dialog>
        <DialogTrigger>Open Modal</DialogTrigger>
        <DialogContent>
          <DialogTitle>Modal Header</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByText("Open Modal")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Open Modal"));
    expect(screen.getByText("Modal Header")).toBeInTheDocument();
  });
});
