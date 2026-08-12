import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { GanttChart, type GanttTask } from "../ganttChart";

describe("GanttChart Component", () => {
  const tasks: GanttTask[] = [
    {
      id: "1",
      name: "Task 1",
      startDate: new Date("2026-08-01"),
      endDate: new Date("2026-08-10"),
      progress: 50,
      color: "primary",
    },
  ];

  it("renders tasks correctly", () => {
    const onTaskClickMock = vi.fn();
    render(
      <GanttChart
        tasks={tasks}
        viewStartDate={new Date("2026-08-01")}
        viewEndDate={new Date("2026-08-15")}
        onTaskClick={onTaskClickMock}
      />,
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("triggers task click callback", () => {
    const onTaskClickMock = vi.fn();
    render(
      <GanttChart
        tasks={tasks}
        viewStartDate={new Date("2026-08-01")}
        viewEndDate={new Date("2026-08-15")}
        onTaskClick={onTaskClickMock}
      />,
    );

    const taskRow = screen.getByText("Task 1");
    fireEvent.click(taskRow);

    expect(onTaskClickMock).toHaveBeenCalledWith(tasks[0]);
  });
});
