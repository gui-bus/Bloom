import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TagInput } from "../tagInput";

describe("TagInput Component", () => {
  it("renders labels, placeholder, and initial tags", () => {
    const onChangeMock = vi.fn();
    render(
      <TagInput
        label="Tags"
        placeholder="Enter tags..."
        value={["React", "CSS"]}
        onChange={onChangeMock}
      />,
    );

    expect(screen.getByText("Tags")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
  });

  it("adds new tags when typing and pressing Enter", () => {
    const onChangeMock = vi.fn();
    render(
      <TagInput value={[]} onChange={onChangeMock} placeholder="Add tag..." />,
    );

    const input = screen.getByPlaceholderText("Add tag...");
    fireEvent.change(input, { target: { value: "HTML" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(onChangeMock).toHaveBeenCalledWith(["HTML"]);
  });

  it("removes a tag when the close button is clicked", () => {
    const onChangeMock = vi.fn();
    render(<TagInput value={["React", "CSS"]} onChange={onChangeMock} />);

    const removeBtns = screen.getAllByRole("button");

    fireEvent.click(removeBtns[0]);

    expect(onChangeMock).toHaveBeenCalledWith(["CSS"]);
  });
});
