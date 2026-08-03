import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../resizable";

describe("Resizable Component", () => {
  it("renders panel group structure and children content", () => {
    render(
      <ResizablePanelGroup direction="horizontal" className="max-w-md border">
        <ResizablePanel defaultSize={50}>
          <div>Panel One</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div>Panel Two</div>
        </ResizablePanel>
      </ResizablePanelGroup>,
    );

    expect(screen.getByText("Panel One")).toBeInTheDocument();
    expect(screen.getByText("Panel Two")).toBeInTheDocument();
  });
});
