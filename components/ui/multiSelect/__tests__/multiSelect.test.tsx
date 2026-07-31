import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { MultiSelect } from "../multiSelect";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

describe("MultiSelect Component", () => {
  it("renders with label and placeholder", () => {
    render(
      <MultiSelect
        options={options}
        value={[]}
        onChange={vi.fn()}
        label="Frameworks"
        placeholder="Select frameworks"
      />
    );
    expect(screen.getByText("Frameworks")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Select frameworks")).toBeInTheDocument();
  });

  it("opens dropdown and selects an option", () => {
    const handleChange = vi.fn();
    render(<MultiSelect options={options} value={[]} onChange={handleChange} />);

    const input = screen.getByPlaceholderText("Select options...");
    fireEvent.focus(input);

    const reactOption = screen.getByText("React");
    fireEvent.click(reactOption);

    expect(handleChange).toHaveBeenCalledWith(["react"]);
  });

  it("renders selected tag and removes it on click", () => {
    const handleChange = vi.fn();
    render(<MultiSelect options={options} value={["react"]} onChange={handleChange} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    const removeBtn = screen.getByRole("button", { name: "" });
    fireEvent.click(removeBtn);

    expect(handleChange).toHaveBeenCalledWith([]);
  });
});
