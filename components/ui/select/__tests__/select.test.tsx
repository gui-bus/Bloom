import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../select";

describe("Select Component", () => {
  it("renders trigger with placeholder", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByText("Select a fruit")).toBeInTheDocument();
  });
});
