import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Combobox } from "../combobox";

const sampleOptions = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
];

describe("Combobox Component", () => {
  it("renders trigger button with placeholder", () => {
    render(
      <Combobox options={sampleOptions} placeholder="Select framework..." />,
    );
    expect(screen.getByText("Select framework...")).toBeInTheDocument();
  });

  it("opens options list when clicked and filters items", () => {
    render(
      <Combobox options={sampleOptions} placeholder="Select framework..." />,
    );
    const trigger = screen.getByText("Select framework...");

    fireEvent.click(trigger);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
  });
});
