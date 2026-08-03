import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "../badge";

describe("Badge Component", () => {
  it("renders correctly with children text", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies flat variant classes by default", () => {
    render(<Badge color="primary">Primary</Badge>);
    const badge = screen.getByText("Primary").parentElement;
    expect(badge).toHaveClass("bg-sky-500/15");
  });

  it("applies default variant classes correctly", () => {
    render(
      <Badge variant="default" color="success">
        Success
      </Badge>,
    );
    const badge = screen.getByText("Success").parentElement;
    expect(badge).toHaveClass("bg-emerald-600", "text-white");
  });

  it("applies bordered variant classes correctly", () => {
    render(
      <Badge variant="bordered" color="danger">
        Danger
      </Badge>,
    );
    const badge = screen.getByText("Danger").parentElement;
    expect(badge).toHaveClass("border", "border-rose-500");
  });

  it("supports isPressable prop with hover scale interaction", () => {
    render(
      <Badge isPressable color="primary">
        Clickable
      </Badge>,
    );
    const badge = screen.getByText("Clickable").parentElement;
    expect(badge).toHaveClass("cursor-pointer", "hover:scale-105");
  });

  it("supports isDisabled prop", () => {
    render(
      <Badge isDisabled color="primary">
        Disabled
      </Badge>,
    );
    const badge = screen.getByText("Disabled").parentElement;
    expect(badge).toHaveClass("opacity-50", "pointer-events-none");
  });

  it("returns null when isInvisible is true", () => {
    const { container } = render(<Badge isInvisible>Hidden</Badge>);
    expect(container.firstChild).toBeNull();
  });

  it("renders dot indicator when dot prop is true", () => {
    render(
      <Badge dot color="success">
        Online
      </Badge>,
    );
    const badge = screen.getByText("Online").parentElement;
    const dot = badge?.querySelector("span > span");
    expect(dot).toBeInTheDocument();
  });

  it("renders startContent correctly", () => {
    render(
      <Badge startContent={<span data-testid="start-icon">★</span>}>
        Verified
      </Badge>,
    );
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByText("Verified")).toBeInTheDocument();
  });

  it("renders endContent correctly", () => {
    render(
      <Badge endContent={<span data-testid="end-icon">→</span>}>Next</Badge>,
    );
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });

  it("applies size classes correctly", () => {
    render(
      <Badge size="lg" color="primary">
        Large
      </Badge>,
    );
    const badge = screen.getByText("Large").parentElement;
    expect(badge).toHaveClass("text-sm", "px-3");
  });

  it("applies full radius by default", () => {
    render(<Badge>Pill</Badge>);
    const badge = screen.getByText("Pill").parentElement;
    expect(badge).toHaveClass("rounded-full");
  });
});
