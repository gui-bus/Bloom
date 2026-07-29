import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
} from "../alertDialog";

describe("AlertDialog Component", () => {
  it("renders trigger and confirmation dialog content on click", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogContent>
      </AlertDialog>
    );

    expect(screen.getByText("Delete Account")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Delete Account"));
    expect(screen.getByText("Are you absolutely sure?")).toBeInTheDocument();
  });
});
