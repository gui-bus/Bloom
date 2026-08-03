import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Avatar, AvatarFallback } from "@/components/ui/avatar/avatar";
import { AvatarGroup } from "../avatarGroup";

describe("AvatarGroup Component", () => {
  it("renders all children when max is not set", () => {
    render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("C")).toBeInTheDocument();
  });

  it("limits visible avatars and displays excess indicator when max is provided", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.queryByText("C")).not.toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("supports orientation vertical and horizontal props", () => {
    const { container: horiz } = render(
      <AvatarGroup orientation="horizontal">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(horiz.querySelector('[role="group"]')).toHaveClass("-space-x-3");

    const { container: vert } = render(
      <AvatarGroup orientation="vertical">
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(vert.querySelector('[role="group"]')).toHaveClass(
      "flex-col",
      "-space-y-3",
    );
  });

  it("supports renderCount custom renderer", () => {
    render(
      <AvatarGroup
        max={2}
        renderCount={(count) => <span>more than {count}</span>}
      >
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(screen.getByText("more than 1")).toBeInTheDocument();
  });

  it("renders grid layout when isGrid is true", () => {
    const { container } = render(
      <AvatarGroup isGrid>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    const group = container.querySelector('[role="group"]');
    expect(group).toHaveClass("flex-wrap", "gap-2");
  });

  it("propagates size and color props to child avatars", () => {
    const { container } = render(
      <AvatarGroup size="lg" color="primary">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    const avatarRoot =
      container.querySelector("span") ||
      container.firstElementChild?.querySelector("div");
    expect(screen.getByText("A")).toBeInTheDocument();
  });
});
