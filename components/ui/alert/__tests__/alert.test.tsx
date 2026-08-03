import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Alert, AlertDescription, AlertTitle } from "../alert";

describe("Alert Component", () => {
  it("renders title, content and alert role", () => {
    render(
      <Alert color="success" title="Success Header">
        Operation completed cleanly.
      </Alert>,
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Success Header")).toBeInTheDocument();
    expect(
      screen.getByText("Operation completed cleanly."),
    ).toBeInTheDocument();
  });

  it("renders startContent and endContent elements", () => {
    render(
      <Alert
        color="info"
        title="Info Alert"
        startContent={<span data-testid="start-element">Start</span>}
        endContent={<span data-testid="end-element">End</span>}
      >
        Alert message
      </Alert>,
    );

    expect(screen.getByTestId("start-element")).toBeInTheDocument();
    expect(screen.getByTestId("end-element")).toBeInTheDocument();
  });

  it("dismisses alert when isClosable is set and close button is clicked", () => {
    const handleClose = vi.fn();
    render(
      <Alert
        color="warning"
        title="Closable Alert"
        isClosable
        onClose={handleClose}
      >
        Warning description
      </Alert>,
    );

    const closeButton = screen.getByRole("button", { name: /close alert/i });
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("renders compound components AlertTitle and AlertDescription", () => {
    render(
      <Alert color="danger">
        <AlertTitle>Compound Title</AlertTitle>
        <AlertDescription>Compound Description Body</AlertDescription>
      </Alert>,
    );

    expect(screen.getByText("Compound Title")).toBeInTheDocument();
    expect(screen.getByText("Compound Description Body")).toBeInTheDocument();
  });

  it("renders variants without crashing", () => {
    const variants = [
      "default",
      "bordered",
      "flat",
      "ghost",
      "shadow",
    ] as const;

    for (const variant of variants) {
      const { container } = render(
        <Alert variant={variant} color="info" title={`${variant} title`}>
          Message
        </Alert>,
      );
      expect(container.firstChild).toBeInTheDocument();
    }
  });
});
