"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export interface TimePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string;
  onChange?: (time: string) => void;
  format?: "12h" | "24h";
  step?: number;
  size?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  description?: React.ReactNode;
  isInvalid?: boolean;
  isDisabled?: boolean;
  useWheel?: boolean;
  locale?: string;
  timeZone?: string;
}

export const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      value = "12:00 PM",
      onChange,
      format = "12h",
      step = 1,
      size = "md",
      label,
      description,
      isInvalid,
      isDisabled,
      useWheel = false,
      locale = "en-US",
      timeZone,
      className,
      ...props
    },
    ref,
  ) => {
    // Basic state parsing
    const parseTime = (timeStr: string) => {
      const [time, period] = timeStr.split(" ");
      const [hours, minutes] = (time || "12:00").split(":");
      return {
        hours: hours || (format === "12h" ? "12" : "00"),
        minutes: minutes || "00",
        period: (period || "PM") as "AM" | "PM",
      };
    };

    const [timeState, setTimeState] = React.useState(parseTime(value));

    React.useEffect(() => {
      if (value) {
        setTimeState(parseTime(value));
      }
    }, [value, format]);

    const updateTime = (updates: Partial<typeof timeState>) => {
      const newState = { ...timeState, ...updates };
      setTimeState(newState);
      const newTimeStr =
        format === "12h"
          ? `${newState.hours}:${newState.minutes} ${newState.period}`
          : `${newState.hours}:${newState.minutes}`;
      onChange?.(newTimeStr);
    };

    const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value.replace(/\D/g, "");
      if (val.length > 2) val = val.slice(0, 2);

      let numVal = parseInt(val);
      if (!isNaN(numVal)) {
        if (format === "12h") {
          if (numVal > 12) val = "12";
          if (numVal === 0 && val.length === 2) val = "12";
        } else {
          if (numVal > 23) val = "23";
        }
      }
      updateTime({ hours: val });
    };

    const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value.replace(/\D/g, "");
      if (val.length > 2) val = val.slice(0, 2);

      let numVal = parseInt(val);
      if (!isNaN(numVal)) {
        if (numVal > 59) val = "59";
      }
      updateTime({ minutes: val });
    };

    const incrementHour = () => {
      let h = parseInt(timeState.hours) || 0;
      if (format === "12h") {
        h = h >= 12 ? 1 : h + 1;
      } else {
        h = h >= 23 ? 0 : h + 1;
      }
      updateTime({ hours: h.toString().padStart(2, "0") });
    };

    const decrementHour = () => {
      let h = parseInt(timeState.hours) || 0;
      if (format === "12h") {
        h = h <= 1 ? 12 : h - 1;
      } else {
        h = h <= 0 ? 23 : h - 1;
      }
      updateTime({ hours: h.toString().padStart(2, "0") });
    };

    const incrementMinute = () => {
      let m = parseInt(timeState.minutes) || 0;
      m = m + step;
      if (m > 59) m = 0;
      updateTime({ minutes: m.toString().padStart(2, "0") });
    };

    const decrementMinute = () => {
      let m = parseInt(timeState.minutes) || 0;
      m = m - step;
      if (m < 0) m = 60 - step;
      updateTime({ minutes: m.toString().padStart(2, "0") });
    };

    const togglePeriod = () => {
      updateTime({ period: timeState.period === "AM" ? "PM" : "AM" });
    };

    const sizeClasses = {
      sm: "h-9 px-3",
      md: "h-10 px-3",
      lg: "h-12 px-4",
    };

    const inputSizeClasses = {
      sm: "w-6 text-sm",
      md: "w-7 text-base",
      lg: "w-8 text-lg",
    };

    // Generate wheel options
    const hoursList = React.useMemo(() => {
      if (format === "12h") {
        return Array.from({ length: 12 }, (_, i) =>
          (i + 1).toString().padStart(2, "0"),
        );
      }
      return Array.from({ length: 24 }, (_, i) =>
        i.toString().padStart(2, "0"),
      );
    }, [format]);

    const minutesList = React.useMemo(() => {
      const list: string[] = [];
      for (let i = 0; i < 60; i += step) {
        list.push(i.toString().padStart(2, "0"));
      }
      return list;
    }, [step]);

    if (useWheel) {
      return (
        <div
          className={cn("flex flex-col gap-2", className)}
          ref={ref}
          {...props}
        >
          {label && (
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100 select-none">
              {label}
            </label>
          )}

          <div
            className={cn(
              "flex items-center justify-center gap-2 p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-fit shadow-xs select-none",
              isInvalid && "border-rose-500",
              isDisabled && "opacity-50 pointer-events-none",
            )}
          >
            {/* Hours Wheel Column */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                Hours
              </span>
              <div className="h-32 w-12 overflow-y-auto snap-y snap-mandatory rounded-xl bg-zinc-50 dark:bg-zinc-800/60 p-1 border border-zinc-200/60 dark:border-zinc-700/60 scrollbar-none">
                {hoursList.map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => updateTime({ hours: h })}
                    className={cn(
                      "w-full py-1.5 text-xs font-mono font-bold rounded-lg transition-colors snap-center cursor-pointer",
                      timeState.hours === h
                        ? "bg-sky-500 text-white shadow-xs"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-700/60",
                    )}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>

            <span className="text-zinc-400 font-bold self-center pt-5 text-sm">
              :
            </span>

            {/* Minutes Wheel Column */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                Minutes
              </span>
              <div className="h-32 w-12 overflow-y-auto snap-y snap-mandatory rounded-xl bg-zinc-50 dark:bg-zinc-800/60 p-1 border border-zinc-200/60 dark:border-zinc-700/60 scrollbar-none">
                {minutesList.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => updateTime({ minutes: m })}
                    className={cn(
                      "w-full py-1.5 text-xs font-mono font-bold rounded-lg transition-colors snap-center cursor-pointer",
                      timeState.minutes === m
                        ? "bg-sky-500 text-white shadow-xs"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-700/60",
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Period Column */}
            {format === "12h" && (
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Period
                </span>
                <div className="h-32 w-12 flex flex-col justify-center gap-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 p-1 border border-zinc-200/60 dark:border-zinc-700/60">
                  {["AM", "PM"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => updateTime({ period: p as "AM" | "PM" })}
                      className={cn(
                        "w-full py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer",
                        timeState.period === p
                          ? "bg-sky-500 text-white shadow-xs"
                          : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-700/60",
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {description && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          )}
        </div>
      );
    }

    return (
      <div
        className={cn("flex flex-col gap-2", className)}
        ref={ref}
        {...props}
      >
        {label && (
          <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {label}
          </label>
        )}
        <div
          className={cn(
            "flex items-center gap-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-fit focus-within:ring-2 focus-within:ring-sky-500/20 focus-within:border-sky-500 transition-colors",
            sizeClasses[size],
            isInvalid &&
              "border-rose-500 focus-within:ring-rose-500/20 focus-within:border-rose-500",
            isDisabled && "opacity-50 pointer-events-none",
          )}
        >
          {/* Hour Segment */}
          <div className="flex flex-col items-center justify-center -space-y-1">
            <button
              type="button"
              onClick={incrementHour}
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 outline-none"
              tabIndex={-1}
            >
              <Icon icon="hugeicons:arrow-up-01" className="w-3 h-3" />
            </button>
            <input
              type="text"
              value={timeState.hours}
              onChange={handleHourChange}
              onBlur={() => {
                let val =
                  parseInt(timeState.hours) || (format === "12h" ? 12 : 0);
                updateTime({ hours: val.toString().padStart(2, "0") });
              }}
              className={cn(
                "bg-transparent text-center font-medium text-zinc-900 dark:text-zinc-100 outline-none placeholder:text-zinc-400",
                inputSizeClasses[size],
              )}
              placeholder="12"
            />
            <button
              type="button"
              onClick={decrementHour}
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 outline-none"
              tabIndex={-1}
            >
              <Icon icon="hugeicons:arrow-down-01" className="w-3 h-3" />
            </button>
          </div>

          <span className="text-zinc-400 font-medium pb-0.5">:</span>

          {/* Minute Segment */}
          <div className="flex flex-col items-center justify-center -space-y-1">
            <button
              type="button"
              onClick={incrementMinute}
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 outline-none"
              tabIndex={-1}
            >
              <Icon icon="hugeicons:arrow-up-01" className="w-3 h-3" />
            </button>
            <input
              type="text"
              value={timeState.minutes}
              onChange={handleMinuteChange}
              onBlur={() => {
                let val = parseInt(timeState.minutes) || 0;
                updateTime({ minutes: val.toString().padStart(2, "0") });
              }}
              className={cn(
                "bg-transparent text-center font-medium text-zinc-900 dark:text-zinc-100 outline-none placeholder:text-zinc-400",
                inputSizeClasses[size],
              )}
              placeholder="00"
            />
            <button
              type="button"
              onClick={decrementMinute}
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 outline-none"
              tabIndex={-1}
            >
              <Icon icon="hugeicons:arrow-down-01" className="w-3 h-3" />
            </button>
          </div>

          {/* AM/PM Toggle */}
          {format === "12h" && (
            <button
              type="button"
              onClick={togglePeriod}
              className={cn(
                "ml-1 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700",
                size === "sm" && "px-1.5 py-0.5 text-[10px]",
                size === "md" && "px-2 py-1 text-xs",
                size === "lg" && "px-2.5 py-1.5 text-sm",
              )}
            >
              {timeState.period}
            </button>
          )}
        </div>
        {description && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        )}
      </div>
    );
  },
);
TimePicker.displayName = "TimePicker";
