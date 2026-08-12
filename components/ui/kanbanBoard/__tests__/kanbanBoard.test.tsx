import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  KanbanBoard,
  type KanbanCard,
  type KanbanColumn,
} from "../kanbanBoard";

describe("KanbanBoard Component", () => {
  const columns: KanbanColumn[] = [
    { id: "todo", title: "To Do", color: "primary" },
    { id: "done", title: "Done", color: "success" },
  ];

  const cards: KanbanCard[] = [
    {
      id: "card-1",
      columnId: "todo",
      title: "Kanban Task 1",
      description: "Description 1",
      tags: ["High"],
    },
  ];

  it("renders columns and cards correctly", () => {
    render(<KanbanBoard columns={columns} cards={cards} />);

    expect(screen.getByText("To Do")).toBeInTheDocument();
    expect(screen.getByText("Kanban Task 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("High")).toBeInTheDocument();
  });

  it("triggers callback when adding card", () => {
    const onAddCardMock = vi.fn();
    render(
      <KanbanBoard columns={columns} cards={cards} onAddCard={onAddCardMock} />,
    );

    const addBtn = screen.getByRole("button", { name: /add card to to do/i });
    fireEvent.click(addBtn);

    expect(onAddCardMock).toHaveBeenCalledWith("todo");
  });
});
