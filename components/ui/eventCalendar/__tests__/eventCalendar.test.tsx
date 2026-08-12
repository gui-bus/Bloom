import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { type CalendarEvent, EventCalendar } from "../eventCalendar";

describe("EventCalendar Component", () => {
  const events: CalendarEvent[] = [
    {
      id: "1",
      title: "Test Event",
      startDate: new Date(),
      endDate: new Date(),
      color: "primary",
    },
  ];

  it("renders calendar and events correctly", () => {
    const onEventClickMock = vi.fn();
    render(<EventCalendar events={events} onEventClick={onEventClickMock} />);

    expect(screen.getByText("Test Event")).toBeInTheDocument();
  });

  it("handles event click", () => {
    const onEventClickMock = vi.fn();
    render(<EventCalendar events={events} onEventClick={onEventClickMock} />);

    const eventEl = screen.getByText("Test Event");
    fireEvent.click(eventEl);

    expect(onEventClickMock).toHaveBeenCalledWith(events[0]);
  });
});
