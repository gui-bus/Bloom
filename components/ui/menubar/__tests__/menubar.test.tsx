import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Menubar, MenubarMenu, MenubarTrigger } from "../menubar";

describe("Menubar Component", () => {
  it("renders desktop top level menu triggers", () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    );

    expect(screen.getByText("File")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });
});
