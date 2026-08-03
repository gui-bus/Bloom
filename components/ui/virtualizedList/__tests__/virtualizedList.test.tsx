import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { VirtualizedList } from "../virtualizedList";

const items = Array.from({ length: 100 }, (_, i) => `Item #${i + 1}`);

describe("VirtualizedList Component", () => {
  it("renders only visible items based on height and itemHeight", () => {
    render(
      <VirtualizedList
        items={items}
        height={200}
        itemHeight={40}
        overscan={2}
        renderItem={(item) => <div data-testid="list-item">{item}</div>}
      />,
    );

    const renderedItems = screen.getAllByTestId("list-item");
    expect(renderedItems.length).toBeLessThan(100);
    expect(screen.getByText("Item #1")).toBeInTheDocument();
  });
});
