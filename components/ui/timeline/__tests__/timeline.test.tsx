import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Timeline, TimelineItem } from "../timeline";

describe("Timeline Component", () => {
  it("renders timeline items with titles and timestamps", () => {
    render(
      <Timeline>
        <TimelineItem title="Order Placed" time="10:00 AM" description="Your order was confirmed." />
        <TimelineItem title="Order Shipped" time="02:00 PM" description="Package is on the way." />
      </Timeline>
    );

    expect(screen.getByText("Order Placed")).toBeInTheDocument();
    expect(screen.getByText("10:00 AM")).toBeInTheDocument();
    expect(screen.getByText("Order Shipped")).toBeInTheDocument();
  });

  it("toggles expandable details content", () => {
    render(
      <Timeline>
        <TimelineItem
          title="Deployment"
          details={<span data-testid="extra-info">Deployment Hash #12345</span>}
        />
      </Timeline>
    );

    expect(screen.queryByTestId("extra-info")).not.toBeInTheDocument();

    const toggleBtn = screen.getByRole("button", { name: "Show Details" });
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId("extra-info")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Hide Details" })).toBeInTheDocument();
  });
});
