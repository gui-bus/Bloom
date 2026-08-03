import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "../textarea";

describe("Textarea Component", () => {
  it("renders correctly with label", () => {
    render(<Textarea label="Bio" placeholder="Tell us about yourself" />);
    expect(screen.getByLabelText("Bio")).toBeInTheDocument();
  });

  it("updates character counter when maxCount is passed", () => {
    render(<Textarea label="Comment" maxCount={100} defaultValue="Hello" />);
    expect(screen.getByText("5/100")).toBeInTheDocument();
  });

  it("shows error message when isInvalid is true", () => {
    render(<Textarea label="Bio" isInvalid errorMessage="Bio is too short" />);
    expect(screen.getByText("Bio is too short")).toBeInTheDocument();
  });
});
