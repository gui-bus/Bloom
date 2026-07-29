import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Alert } from "../alert";

describe("Alert Component", () => {
  it("renders title, content and alert role", () => {
    render(
      <Alert variant="success" title="Success Header">
        Operation completed cleanly.
      </Alert>
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Success Header")).toBeInTheDocument();
    expect(screen.getByText("Operation completed cleanly.")).toBeInTheDocument();
  });
});
