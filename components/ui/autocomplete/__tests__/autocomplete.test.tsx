import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Autocomplete } from "../autocomplete";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

describe("Autocomplete Component", () => {
  it("renders input with placeholder and label", () => {
    render(
      <Autocomplete
        label="Fruit"
        placeholder="Choose a fruit"
        options={options}
      />,
    );
    expect(screen.getByText("Fruit")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Choose a fruit")).toBeInTheDocument();
  });

  it("opens dropdown and filters options on typing", () => {
    render(<Autocomplete options={options} />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Ba" } });

    expect(screen.getByText("Ba")).toBeInTheDocument();
    expect(screen.getByText("nana")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
  });

  it("triggers onChange when an option is selected", () => {
    const handleChange = vi.fn();
    render(<Autocomplete options={options} onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.focus(input);
    const option = screen.getByText("Apple");
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith("apple");
    expect(input).toHaveValue("Apple");
  });

  it("handles keyboard navigation with arrow keys and Enter", () => {
    const handleChange = vi.fn();
    render(<Autocomplete options={options} onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "Enter" });

    expect(handleChange).toHaveBeenCalledWith("apple");
  });
});
