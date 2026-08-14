"use client";

import { Icon } from "@iconify/react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  OTPInput,
  OTPInputContext,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "input-otp";
import * as React from "react";
import { cn } from "@/lib/utils";

export type OTPType = "numeric" | "alphabetic" | "alphanumeric";
export type OTPSize = "sm" | "md" | "lg";

export type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput> & {
  allowedType?: OTPType;
  showSeparator?: boolean;
  separatorIcon?: string;
  autoFocus?: boolean;
  label?: React.ReactNode;
  isRequired?: boolean;
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
>(
  (
    {
      className,
      containerClassName,
      allowedType = "numeric",
      label,
      isRequired = false,
      ...props
    },
    ref,
  ) => {
    const inputOtpComponent = (
      <OTPInput
        ref={ref}
        pattern={patternMap[allowedType]}
        inputMode={inputModeMap[allowedType]}
        containerClassName={cn(
          "flex items-center gap-2 disabled:cursor-not-allowed",
          containerClassName,
        )}
        className={cn("disabled:cursor-not-allowed", className)}
        {...props}
      />
    );

    if (label) {
      return (
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
            {label}
            {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
          </label>
          {inputOtpComponent}
        </div>
      );
    }

    return inputOtpComponent;
  },
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
));
InputOTPGroup.displayName = "InputOTPGroup";

export interface InputOTPSlotProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof slotVariants> {
  index: number;
  size?: OTPSize;
  maskCode?: boolean;
}

const slotSizeStyles: Record<OTPSize, string> = {
  sm: "size-8 text-xs rounded-lg",
  md: "size-11 text-base rounded-xl",
  lg: "size-14 text-lg rounded-2xl",
};

const slotVariants = cva(
  "relative flex items-center justify-center font-bold transition-all duration-200 select-none data-[active=true]:z-10 data-[active=true]:scale-105",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs data-[active=true]:border-sky-500 data-[active=true]:ring-2 data-[active=true]:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
        bordered:
          "bg-transparent border-2 border-zinc-200 dark:border-zinc-800 data-[active=true]:border-sky-500 text-zinc-900 dark:text-zinc-100",
        flat: "bg-zinc-100 dark:bg-zinc-800/60 border-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800 data-[active=true]:bg-white dark:data-[active=true]:bg-zinc-900 data-[active=true]:border-sky-500 border text-zinc-900 dark:text-zinc-100",
        underlined:
          "bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 rounded-none px-0 data-[active=true]:border-sky-500 text-zinc-900 dark:text-zinc-100",
        filled:
          "bg-zinc-100 dark:bg-zinc-800/80 border border-transparent data-[active=true]:border-sky-500 data-[active=true]:ring-2 data-[active=true]:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
        glassmorphism:
          "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 data-[active=true]:border-sky-500 shadow-lg text-zinc-900 dark:text-zinc-100",
        "gradient-border":
          "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 relative [background-clip:padding-box] border border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-sky-500 before:via-indigo-500 before:to-pink-500 data-[active=true]:ring-2 data-[active=true]:ring-indigo-500/30",
        glow: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs data-[active=true]:border-sky-500 data-[active=true]:shadow-[0_0_12px_rgba(14,165,233,0.35)] text-zinc-900 dark:text-zinc-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPSlotProps
>(
  (
    { index, size = "md", variant, maskCode = false, className, ...props },
    ref,
  ) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const slot = inputOTPContext.slots[index];
    const { char, hasFakeCaret, isActive } = slot || {};

    return (
      <div
        ref={ref}
        data-active={isActive}
        className={cn(
          slotVariants({ variant }),
          slotSizeStyles[size],
          className,
        )}
        {...props}
      >
        {char ? (
          maskCode ? (
            <span className="size-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-in zoom-in-50" />
          ) : (
            char
          )
        ) : null}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-0.5 animate-pulse bg-sky-500 duration-1000" />
          </div>
        )}
      </div>
    );
  },
);
InputOTPSlot.displayName = "InputOTPSlot";

export interface InputOTPSeparatorProps
  extends React.ComponentPropsWithoutRef<"div"> {
  icon?: string;
}

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPSeparatorProps
>(({ icon = "hugeicons:minus-01", className, ...props }, ref) => (
  <div
    ref={ref}
    role="presentation"
    className={cn(
      "px-1.5 text-zinc-400 dark:text-zinc-600 flex items-center justify-center",
      className,
    )}
    {...props}
  >
    <Icon icon={icon} className="size-4" />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
