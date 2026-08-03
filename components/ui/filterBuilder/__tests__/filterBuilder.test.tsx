import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { exportQuery, FilterBuilder, type FilterGroup } from "../filterBuilder";

const fields = [
  { id: "name", label: "Name", type: "text" as const },
  { id: "age", label: "Age", type: "number" as const },
];

const initialValue: FilterGroup = {
  conjunction: "AND",
  rules: [{ field: "name", operator: "equals", value: "Alice" }],
};

describe("FilterBuilder Component", () => {
  it("renders rules and field selector", () => {
    const handleChange = vi.fn();
    render(
      <FilterBuilder
        fields={fields}
        value={initialValue}
        onChange={handleChange}
      />,
    );
    expect(screen.getByDisplayValue("Name")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Alice")).toBeInTheDocument();
  });

  it("adds a new rule on button click", () => {
    const handleChange = vi.fn();
    render(
      <FilterBuilder
        fields={fields}
        value={initialValue}
        onChange={handleChange}
      />,
    );

    const addRuleBtn = screen.getByRole("button", { name: /add rule/i });
    fireEvent.click(addRuleBtn);

    expect(handleChange).toHaveBeenCalledWith({
      conjunction: "AND",
      rules: [
        { field: "name", operator: "equals", value: "Alice" },
        { field: "name", operator: "equals", value: "" },
      ],
    });
  });

  it("exports SQL queries correctly via exportQuery helper", () => {
    const sql = exportQuery(initialValue, "sql");
    expect(sql).toBe("name = 'Alice'");
  });
});
