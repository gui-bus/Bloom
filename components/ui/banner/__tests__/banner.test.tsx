import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { Banner } from "../banner";

describe("Banner Component", () => {
  it("renders banner content", () => {
    render(<Banner>Special Discount Announcement</Banner>);
    expect(
      screen.getByText("Special Discount Announcement"),
    ).toBeInTheDocument();
  });

  it("handles dismissal when isDismissible is true", () => {
    const handleDismiss = vi.fn();
    render(
      <Banner isDismissible onDismiss={handleDismiss}>
        Dismissible Banner
      </Banner>,
    );

    const btn = screen.getByRole("button", { name: "Dismiss banner" });
    fireEvent.click(btn);

    expect(handleDismiss).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Dismissible Banner")).not.toBeInTheDocument();
  });

  it("cycles through multiple announcements", () => {
    const announcements = [
      { id: 1, content: "Announcement 1" },
      { id: 2, content: "Announcement 2" },
    ];

    render(<Banner announcements={announcements} />);
    expect(screen.getByText("Announcement 1")).toBeInTheDocument();

    const nextBtn = screen.getByRole("button", { name: "Next announcement" });
    fireEvent.click(nextBtn);

    expect(screen.getByText("Announcement 2")).toBeInTheDocument();
  });
});
