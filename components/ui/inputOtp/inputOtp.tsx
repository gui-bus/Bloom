"use client";

import * as React from "react";
import { OTPInput, OTPInputContext, REGEXP_ONLY_DIGITS, REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export type OTPType = "numeric" | "alphabetic" | "alphanumeric";
export type OTPSize = "sm" | "md" | "lg";

export type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput> & {
  allowedType?: OTPType;
  showSeparator?: boolean;
  separatorIcon?: string;
  autoFocus?: boolean;
};

const patternMap: Record<OTPType, string> = {
  numeric: REGEXP_ONLY_DIGITS,
  alphabetic: REGEXP_ONLY_CHARS,
  alphanumeric: REGEXP_ONLY_DIGITS_AND_CHARS,
};

const inputModeMap: Record<OTPType, "numeric" | "text"> = {
  numeric: "numeric",
  alphabetic: "text",
  alphanumeric: "text",
};

const InputOTP = React.forwardRef<
  React.ComponentRef<typeof OTPInput>,
  InputOTPProps
>(({ className, containerClassName, allowedType = "numeric", ...props }, ref) => (
  <OTPInput
    ref={ref}
    pattern={patternMap[allowedType]}
    inputMode={inputModeMap[allowedType]}
    containerClassName={cn(
      "flex items-center gap-2 disabled:cursor-not-allowed",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center gap-2", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

export interface InputOTPSlotProps extends React.ComponentPropsWithoutRef<"div"> {
  index: number;
  size?: OTPSize;
}

const slotSizeStyles: Record<OTPSize, string> = {
  sm: "size-8 text-xs rounded-lg",
  md: "size-11 text-base rounded-xl",
  lg: "size-14 text-lg rounded-2xl",
};

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPSlotProps
>(({ index, size = "md", className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const slot = inputOTPContext.slots[index];
  const { char, hasFakeCaret, isActive } = slot || {};

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold shadow-xs transition-all duration-200 select-none",
        slotSizeStyles[size],
        isActive && "z-10 border-sky-500 ring-2 ring-sky-500/20 dark:border-sky-400 dark:ring-sky-400/20 scale-105",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-0.5 animate-pulse bg-sky-500 duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

export interface InputOTPSeparatorProps extends React.ComponentPropsWithoutRef<"div"> {
  icon?: string;
}

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPSeparatorProps
>(({ icon = "hugeicons:minus-01", className, ...props }, ref) => (
  <div ref={ref} role="separator" className={cn("px-1.5 text-zinc-400 dark:text-zinc-600 flex items-center justify-center", className)} {...props}>
    <Icon icon={icon} className="size-4" />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
