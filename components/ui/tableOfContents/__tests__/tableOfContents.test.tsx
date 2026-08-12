import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { TableOfContents, type TOCItem } from "../tableOfContents";

describe("TableOfContents Component", () => {
  const items: TOCItem[] = [
    { id: "sec-1", title: "Introduction" },
    { id: "sec-2", title: "Usage Guide" },
  ];

  beforeEach(() => {
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it("renders TOC list and items correctly", () => {
    const onItemClickMock = vi.fn();
    render(
      <TableOfContents
        items={items}
        title="Page Content"
        onItemClick={onItemClickMock}
      />,
    );

    expect(screen.getByText("Page Content")).toBeInTheDocument();
    expect(screen.getByText("Introduction")).toBeInTheDocument();

    const button = screen.getByText("Usage Guide");
    fireEvent.click(button);

    expect(onItemClickMock).toHaveBeenCalledWith("sec-2");
  });
});
