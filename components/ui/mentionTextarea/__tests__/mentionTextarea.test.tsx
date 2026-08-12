import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { type MentionItem, MentionTextarea } from "../mentionTextarea";

describe("MentionTextarea Component", () => {
  const items: MentionItem[] = [
    { id: "1", display: "Alice", subtitle: "Developer" },
    { id: "2", display: "Bob", subtitle: "Designer" },
  ];

  beforeEach(() => {});

  it("renders textarea correctly", () => {
    render(<MentionTextarea items={items} placeholder="Write a message..." />);
    expect(
      screen.getByPlaceholderText("Write a message..."),
    ).toBeInTheDocument();
  });

  it("shows suggestions on typing trigger key", () => {
    render(<MentionTextarea items={items} />);

    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "@A" } });

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
  });
});
