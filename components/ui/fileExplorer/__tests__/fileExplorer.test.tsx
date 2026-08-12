import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FileExplorer, type FileNode } from "../fileExplorer";

describe("FileExplorer Component", () => {
  const data: FileNode[] = [
    {
      id: "1",
      name: "src",
      type: "folder",
      children: [
        {
          id: "2",
          name: "index.ts",
          type: "file",
        },
      ],
    },
  ];

  it("renders files and folders correctly", () => {
    const onNodeClickMock = vi.fn();
    render(<FileExplorer data={data} onNodeClick={onNodeClickMock} />);

    expect(screen.getByText("src")).toBeInTheDocument();

    fireEvent.click(screen.getByText("src"));
    expect(screen.getByText("index.ts")).toBeInTheDocument();
  });

  it("triggers click callbacks", () => {
    const onNodeClickMock = vi.fn();
    render(<FileExplorer data={data} onNodeClick={onNodeClickMock} />);

    fireEvent.click(screen.getByText("src"));
    const fileEl = screen.getByText("index.ts");
    fireEvent.click(fileEl);

    expect(onNodeClickMock).toHaveBeenCalled();
  });
});
