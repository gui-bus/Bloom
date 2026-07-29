import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { List, ListItem } from "../list";

describe("List Component", () => {
  it("renders list items correctly", () => {
    render(
      <List variant="bordered">
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
      </List>
    );

    expect(screen.getByText("First item")).toBeInTheDocument();
    expect(screen.getByText("Second item")).toBeInTheDocument();
  });
});
