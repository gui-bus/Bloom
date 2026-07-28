import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Avatar, AvatarFallback } from "@/components/ui/avatar/avatar";
import { AvatarGroup } from "../avatarGroup";

describe("AvatarGroup Component", () => {
  it("renders all children when max is not set", () => {
    render(
      <AvatarGroup>
        <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
      </AvatarGroup>
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("C")).toBeInTheDocument();
  });

  it("limits visible avatars and displays excess indicator when max is provided", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
      </AvatarGroup>
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.queryByText("C")).not.toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("propagates size and color props to child avatars", () => {
    const { container } = render(
      <AvatarGroup size="lg" color="primary">
        <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
      </AvatarGroup>
    );
    const avatarRoot = container.querySelector('[class*="ring-primary"]');
    expect(avatarRoot).toBeInTheDocument();
    expect(avatarRoot).toHaveClass("size-12");
  });
});
