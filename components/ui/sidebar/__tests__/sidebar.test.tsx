import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { UiSidebar } from "../sidebar";

describe("UiSidebar Component", () => {
  it("renders header, children and collapses on trigger click", () => {
    render(
      <UiSidebar header={<div>Logo</div>}>
        <div>Navigation Link</div>
      </UiSidebar>
    );

    expect(screen.getByText("Logo")).toBeInTheDocument();
    expect(screen.getByText("Navigation Link")).toBeInTheDocument();

    const collapseBtn = screen.getByLabelText("Collapse sidebar");
    fireEvent.click(collapseBtn);

    expect(screen.getByLabelText("Expand sidebar")).toBeInTheDocument();
  });
});
