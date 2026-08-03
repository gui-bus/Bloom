import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DataTable } from "../dataTable";

describe("DataTable Component", () => {
  it("renders data table rows correctly", () => {
    const columns = [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "role", header: "Role" },
    ];
    const data = [{ name: "Alice", role: "Developer" }];

    render(<DataTable columns={columns} data={data} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
  });
});
