import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { Avatar, AvatarFallback } from "../avatar";

describe("Avatar Component", () => {
  it("renders fallback text when image is not provided", () => {
    render(
      <Avatar>
        <AvatarFallback>GB</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("GB")).toBeInTheDocument();
  });

  it("applies border ring classes when isBordered is true", () => {
    const { container } = render(
      <Avatar isBordered color="primary">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    const root = container.querySelector('[class*="ring-2"]');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass("ring-primary");
  });

  it("renders status dot when status prop is passed", () => {
    const { container } = render(
      <Avatar status="success" statusPosition="top-right">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    const statusDot = container.querySelector(".bg-success");
    expect(statusDot).toBeInTheDocument();
    expect(statusDot).toHaveClass("top-0", "right-0");
  });

  it("applies disabled styles when isDisabled is true", () => {
    const { container } = render(
      <Avatar isDisabled>
        <AvatarFallback>DS</AvatarFallback>
      </Avatar>,
    );
    const root = container.querySelector('[class*="opacity-50"]');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass("grayscale", "cursor-not-allowed");
  });

  it("applies pressable styles and responds to clicks when isPressable is true", () => {
    const handleClick = vi.fn();
    const { container } = render(
      <Avatar isPressable onClick={handleClick}>
        <AvatarFallback>PR</AvatarFallback>
      </Avatar>,
    );

    const root = container.querySelector('[class*="cursor-pointer"]');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass("hover:scale-105");

    if (root) {
      fireEvent.click(root);
      expect(handleClick).toHaveBeenCalledTimes(1);
    }
  });

  it("applies custom size scale class", () => {
    const { container } = render(
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>,
    );
    const root = container.querySelector('[class*="size-12"]');
    expect(root).toBeInTheDocument();
  });
});
