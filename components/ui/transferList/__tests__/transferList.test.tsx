import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { type TransferItem, TransferList } from "../transferList";

describe("TransferList Component", () => {
  const leftItems: TransferItem[] = [
    { id: "1", label: "Item 1" },
    { id: "2", label: "Item 2" },
  ];
  const rightItems: TransferItem[] = [{ id: "3", label: "Item 3" }];

  it("renders lists and moves items correctly", () => {
    const onChangeMock = vi.fn();
    render(
      <TransferList
        leftItems={leftItems}
        rightItems={rightItems}
        onChange={onChangeMock}
      />,
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();

    const moveAllRightBtn = screen.getByRole("button", {
      name: /move all right/i,
    });
    fireEvent.click(moveAllRightBtn);

    expect(onChangeMock).toHaveBeenCalledWith(
      [],
      [
        { id: "3", label: "Item 3" },
        { id: "1", label: "Item 1" },
        { id: "2", label: "Item 2" },
      ],
    );
  });
});
