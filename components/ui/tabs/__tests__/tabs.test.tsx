import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../tabs";

// Mock framer-motion animations to avoid issues in jsdom environment
vi.mock("framer-motion", () => ({
  motion: {
    div: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
      ({ children, ...props }, ref) => (
        <div ref={ref} {...props}>
          {children}
        </div>
      )
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useReducedMotion: () => false,
}));

describe("Tabs Component", () => {
  it("renders tabs correctly and switches content on click", async () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab One</TabsTrigger>
          <TabsTrigger value="tab2">Tab Two</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content One</TabsContent>
        <TabsContent value="tab2">Content Two</TabsContent>
      </Tabs>
    );

    // Initial state: Tab 1 content is visible, Tab 2 content is not
    expect(screen.getByText("Content One")).toBeInTheDocument();
    expect(screen.queryByText("Content Two")).not.toBeInTheDocument();

    const tab2 = screen.getByRole("tab", { name: "Tab Two" });

    // Click Tab 2 (fire keydown space/enter and click events to ensure Radix receives them)
    fireEvent.focus(tab2);
    fireEvent.keyDown(tab2, { key: " ", code: "Space", keyCode: 32 });
    fireEvent.keyUp(tab2, { key: " ", code: "Space", keyCode: 32 });
    fireEvent.click(tab2);

    // Tab 2 content should become visible
    await waitFor(() => {
      expect(screen.getByText("Content Two")).toBeInTheDocument();
    });
    expect(screen.queryByText("Content One")).not.toBeInTheDocument();
  });

  it("handles disabled state on trigger", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab One</TabsTrigger>
          <TabsTrigger value="tab2" isDisabled>Tab Two</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content One</TabsContent>
        <TabsContent value="tab2">Content Two</TabsContent>
      </Tabs>
    );

    const disabledTrigger = screen.getByRole("tab", { name: "Tab Two" });
    expect(disabledTrigger).toBeDisabled();
    expect(disabledTrigger).toHaveClass("opacity-50", "pointer-events-none");

    fireEvent.focus(disabledTrigger);
    fireEvent.keyDown(disabledTrigger, { key: " ", code: "Space", keyCode: 32 });
    fireEvent.click(disabledTrigger);
    expect(screen.getByText("Content One")).toBeInTheDocument();
  });

  it("renders with startContent, endContent and badges", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger
            value="tab1"
            startContent={<span data-testid="start-icon">IconA</span>}
            badgeContent="NEW"
          >
            Tab Label
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );

    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByText("NEW")).toBeInTheDocument();
  });
});
