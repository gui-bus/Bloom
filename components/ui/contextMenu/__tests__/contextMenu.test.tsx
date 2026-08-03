import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContextMenu, ContextMenuTrigger } from "../contextMenu";

describe("ContextMenu Component", () => {
  it("renders context menu trigger container", () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      </ContextMenu>,
    );

    expect(screen.getByText("Right click here")).toBeInTheDocument();
  });
});
