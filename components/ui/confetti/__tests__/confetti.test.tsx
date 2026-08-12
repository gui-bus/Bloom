import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const confettiMock = vi.fn();
vi.mock("canvas-confetti", () => ({
  default: (...args: any[]) => confettiMock(...args),
}));

import { Confetti } from "../confetti";

describe("Confetti Component", () => {
  beforeEach(() => {
    confettiMock.mockClear();
  });

  it("fires confetti on render", () => {
    const onCompleteMock = vi.fn();
    render(
      <Confetti fire={true} variant="cannon" onComplete={onCompleteMock} />,
    );

    expect(confettiMock).toHaveBeenCalled();
    expect(onCompleteMock).toHaveBeenCalled();
  });
});
