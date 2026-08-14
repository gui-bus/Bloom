import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Timeline, TimelineItem } from "../timeline";

describe("Timeline Component", () => {
  it("renders correctly with default state", () => {
    const { container } = render(
      <Timeline>
        <TimelineItem
          title="Step 1"
          description="First milestone description"
        />
        <TimelineItem
          title="Step 2"
          description="Second milestone description"
        />
      </Timeline>,
    );
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("First milestone description")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(container.querySelector("svg, .rounded-full")).toBeInTheDocument();
  });

  it("applies color prop classes correctly", () => {
    const { container } = render(
      <Timeline color="success">
        <TimelineItem title="Task Completed" />
      </Timeline>,
    );
    // Query the inner dot element which receives the background color
    const dot = container.querySelector(".rounded-full span.bg-emerald-500");
    expect(dot).toBeInTheDocument();
  });

  it("applies sizes correctly", () => {
    const { container } = render(
      <Timeline size="lg">
        <TimelineItem title="Large Step" />
      </Timeline>,
    );
    // lg size uses size-10 for the dot container
    const outerDot = container.querySelector(".size-10");
    expect(outerDot).toBeInTheDocument();
  });

  it("renders contained variant correctly", () => {
    const { container } = render(
      <Timeline variant="contained">
        <TimelineItem
          title="Card Content"
          description="Contained in card box"
        />
      </Timeline>,
    );
    // Contained items get border and card styling on the content wrapper
    const card = container.querySelector(".border.rounded-2xl");
    expect(card).toBeInTheDocument();
  });

  it("supports explicit position left or right override", () => {
    const { container } = render(
      <Timeline>
        <TimelineItem title="Left Item" position="left" />
        <TimelineItem title="Right Item" position="right" />
      </Timeline>,
    );
    // Right position item root container has flex-row-reverse class
    const rightItem = container.querySelector(".flex-row-reverse");
    expect(rightItem).toBeInTheDocument();
  });
});
