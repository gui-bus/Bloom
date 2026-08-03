import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../inputOtp";

describe("InputOTP Component", () => {
  it("renders OTP slots correctly", () => {
    render(
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>,
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});
