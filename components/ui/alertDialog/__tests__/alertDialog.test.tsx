import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "../alertDialog";

describe("AlertDialog Component", () => {
  it("renders trigger and confirmation dialog content on click", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>Confirmation message</AlertDialogDescription>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction color="danger">Delete</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>,
    );

    expect(screen.getByText("Delete Account")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Delete Account"));
    expect(screen.getByText("Are you absolutely sure?")).toBeInTheDocument();
    expect(screen.getByText("Confirmation message")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("renders Cancel button with neutral styling and no hover:bg-accent class", () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogCancel>Cancel Dialog</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>,
    );

    const cancelButton = screen.getByText("Cancel Dialog");
    expect(cancelButton).toBeInTheDocument();
    expect(cancelButton.className).not.toContain("hover:bg-accent");
    expect(cancelButton.className).toContain("hover:bg-zinc-100");
  });

  it("supports color props on AlertDialogAction", () => {
    const colors = [
      "danger",
      "primary",
      "warning",
      "success",
      "default",
    ] as const;

    for (const color of colors) {
      const { unmount } = render(
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogAction
              color={color}
            >{`${color} action`}</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>,
      );
      expect(screen.getByText(`${color} action`)).toBeInTheDocument();
      unmount();
    }
  });
});
