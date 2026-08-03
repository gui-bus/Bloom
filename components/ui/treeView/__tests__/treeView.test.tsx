import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { TreeView, TreeDataItem } from "../treeView";

const sampleData: TreeDataItem[] = [
  {
    id: "src",
    label: "src",
    children: [
      { id: "components", label: "components" },
      { id: "index.ts", label: "index.ts" },
    ],
  },
  { id: "package.json", label: "package.json" },
];

describe("TreeView Component", () => {
  it("renders tree view with root node labels", () => {
    render(<TreeView data={sampleData} />);
    expect(screen.getByText("src")).toBeInTheDocument();
    expect(screen.getByText("package.json")).toBeInTheDocument();
  });

  it("expands child nodes on click", () => {
    render(<TreeView data={sampleData} />);
    expect(screen.queryByText("components")).not.toBeInTheDocument();

    const srcNode = screen.getByText("src");
    fireEvent.click(srcNode);

    expect(screen.getByText("components")).toBeInTheDocument();
    expect(screen.getByText("index.ts")).toBeInTheDocument();
  });

  it("triggers onNodeSelect callback", () => {
    const handleSelect = vi.fn();
    render(<TreeView data={sampleData} onNodeSelect={handleSelect} />);

    fireEvent.click(screen.getByText("package.json"));
    expect(handleSelect).toHaveBeenCalledWith("package.json");
  });

  it("supports checkbox multi-selection", () => {
    const handleCheckedChange = vi.fn();
    render(
      <TreeView
        data={sampleData}
        isCheckable
        onCheckedChange={handleCheckedChange}
      />,
    );

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    expect(handleCheckedChange).toHaveBeenCalledWith(["src"]);
  });
});
