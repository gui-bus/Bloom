"use client";

import { Icon } from "@iconify/react";
import { cva } from "class-variance-authority";
import * as React from "react";
import { useKeyboardClick } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export const datePickerTriggerVariants = cva(
  "h-10 w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 shadow-xs outline-none focus:ring-2 focus:ring-sky-500/40 transition-all cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 text-zinc-900 dark:text-zinc-100 rounded-xl",
        bordered:
          "bg-transparent border-2 border-zinc-200 dark:border-zinc-800 focus:border-sky-500 text-zinc-900 dark:text-zinc-100 rounded-xl",
        flat: "bg-zinc-100 dark:bg-zinc-800/60 border-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-900 focus:border-sky-500 border text-zinc-900 dark:text-zinc-100 rounded-xl",
        underlined:
          "bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 px-0 focus:border-sky-500 text-zinc-900 dark:text-zinc-100 rounded-none",
        filled:
          "bg-zinc-100 dark:bg-zinc-800/80 border border-transparent focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 text-zinc-900 dark:text-zinc-100 rounded-xl",
        glassmorphism:
          "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 focus:border-sky-500 shadow-lg text-zinc-900 dark:text-zinc-100 rounded-xl",
        "gradient-border":
          "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 relative [background-clip:padding-box] border border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-sky-500 before:via-indigo-500 before:to-pink-500 focus:ring-2 focus:ring-indigo-500/30 rounded-xl",
        glow: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus:border-sky-500 focus:shadow-[0_0_12px_rgba(14,165,233,0.35)] text-zinc-900 dark:text-zinc-100 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type DatePickerMode = "single" | "range" | "multiple";
export type DatePickerViewMode = "date" | "fiscalQuarter" | "fiscalYear";

export interface DatePickerPreset {
  label: string;
  getValue: () => Date | [Date, Date] | Date[];
}

export interface DatePickerProps {
  mode?: DatePickerMode;
  viewMode?: DatePickerViewMode;
  fiscalYearStartMonth?: number;
  showTimePicker?: boolean;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  rangeValue?: [Date | undefined, Date | undefined];
  onRangeChange?: (range: [Date | undefined, Date | undefined]) => void;
  multipleValue?: Date[];
  onMultipleChange?: (dates: Date[]) => void;
  label?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  isInvalid?: boolean;
  isClearable?: boolean;
  minDate?: Date;
  maxDate?: Date;
  showPresets?: boolean;
  customPresets?: DatePickerPreset[];
  showDoubleMonth?: boolean;
  locale?: string;
  timeZone?: string;
  variant?:
    | "default"
    | "bordered"
    | "flat"
    | "underlined"
    | "filled"
    | "glassmorphism"
    | "gradient-border"
    | "glow";
  isRequired?: boolean;
  className?: string;
}

const DEFAULT_PRESETS: DatePickerPreset[] = [
  {
    label: "Today",
    getValue: () => new Date(),
  },
  {
    label: "Yesterday",
    getValue: () => {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      return d;
    },
  },
  {
    label: "Last 7 Days",
    getValue: () => {
      const end = new Date();
      const start = new Date();
      start.setDate(start.getDate() - 6);
      return [start, end];
    },
  },
  {
    label: "This Month",
    getValue: () => {
      const now = new Date();
      const start = new Date(now.getFullYear(), now.getMonth(), 1);
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      return [start, end];
    },
  },
];

function isSameDay(d1?: Date, d2?: Date): boolean {
  if (!d1 || !d2) return false;
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function isDateInRange(date: Date, start?: Date, end?: Date): boolean {
  if (!start || !end) return false;
  const time = date.getTime();
  const startTime = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  ).getTime();
  const endTime = new Date(
    end.getFullYear(),
    end.getMonth(),
    end.getDate(),
  ).getTime();
  return time >= startTime && time <= endTime;
}

function isDateDisabled(date: Date, minDate?: Date, maxDate?: Date): boolean {
  const time = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ).getTime();
  if (minDate) {
    const minTime = new Date(
      minDate.getFullYear(),
      minDate.getMonth(),
      minDate.getDate(),
    ).getTime();
    if (time < minTime) return true;
  }
  if (maxDate) {
    const maxTime = new Date(
      maxDate.getFullYear(),
      maxDate.getMonth(),
      maxDate.getDate(),
    ).getTime();
    if (time > maxTime) return true;
  }
  return false;
}

function getFiscalQuarter(date: Date, startMonth = 1) {
  const month = date.getMonth() + 1;
  const offset = (month - startMonth + 12) % 12;
  const quarter = Math.floor(offset / 3) + 1;

  let fiscalYear = date.getFullYear();
  if (month < startMonth) {
    fiscalYear = date.getFullYear();
  } else if (startMonth !== 1) {
    fiscalYear = date.getFullYear() + 1;
  }

  return { quarter, fiscalYear };
}

export function DatePicker({
  mode = "single",
  viewMode = "date",
  fiscalYearStartMonth = 1,
  showTimePicker = false,
  value,
  onChange,
  rangeValue,
  onRangeChange,
  multipleValue,
  onMultipleChange,
  label,
  placeholder = "Select date...",
  disabled = false,
  isInvalid = false,
  isClearable = false,
  minDate,
  maxDate,
  showPresets = false,
  customPresets,
  showDoubleMonth = false,
  locale = "en-US",
  timeZone,
  variant = "default",
  isRequired = false,
  className,
}: DatePickerProps) {
  const [singleDate, setSingleDate] = React.useState<Date | undefined>(value);
  const [dateRange, setDateRange] = React.useState<
    [Date | undefined, Date | undefined]
  >(rangeValue || [undefined, undefined]);
  const [multipleDates, setMultipleDates] = React.useState<Date[]>(
    multipleValue || [],
  );

  const [hours, setHours] = React.useState<number>(
    value ? value.getHours() : 12,
  );
  const [minutes, setMinutes] = React.useState<number>(
    value ? value.getMinutes() : 0,
  );

  const [isOpen, setIsOpen] = React.useState(false);
  const keyboardProps = useKeyboardClick<HTMLDivElement>(!disabled);
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    value || rangeValue?.[0] || multipleValue?.[0] || new Date(),
  );
  const [fiscalYearView, setFiscalYearView] = React.useState<number>(
    (value || new Date()).getFullYear(),
  );

  const containerRef = React.useRef<HTMLDivElement>(null);

  const weekdaysShort = React.useMemo(() => {
    const list: string[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(2026, 0, 4 + i);
      const name = new Intl.DateTimeFormat(locale, {
        weekday: "narrow",
        timeZone,
      }).format(d);
      list.push(name);
    }
    return list;
  }, [locale, timeZone]);

  React.useEffect(() => {
    if (value !== undefined) {
      setSingleDate(value);
      setHours(value.getHours());
      setMinutes(value.getMinutes());
    }
  }, [value]);

  React.useEffect(() => {
    if (rangeValue !== undefined) setDateRange(rangeValue);
  }, [rangeValue]);

  React.useEffect(() => {
    if (multipleValue !== undefined) setMultipleDates(multipleValue);
  }, [multipleValue]);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const nextMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    1,
  );

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const updateDateTime = (d: Date, h: number, m: number) => {
    const updated = new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m);
    setSingleDate(updated);
    onChange?.(updated);
  };

  const handleSelectDay = (targetDate: Date) => {
    if (isDateDisabled(targetDate, minDate, maxDate)) return;

    if (mode === "single") {
      updateDateTime(targetDate, hours, minutes);
      if (!showTimePicker) setIsOpen(false);
    } else if (mode === "range") {
      const [start, end] = dateRange;
      if (!start || (start && end)) {
        const nextRange: [Date, undefined] = [targetDate, undefined];
        setDateRange(nextRange);
        onRangeChange?.(nextRange);
      } else {
        let nextRange: [Date, Date];
        if (targetDate.getTime() < start.getTime()) {
          nextRange = [targetDate, start];
        } else {
          nextRange = [start, targetDate];
        }
        setDateRange(nextRange);
        onRangeChange?.(nextRange);
        setIsOpen(false);
      }
    } else if (mode === "multiple") {
      const exists = multipleDates.some((d) => isSameDay(d, targetDate));
      let nextDates: Date[];
      if (exists) {
        nextDates = multipleDates.filter((d) => !isSameDay(d, targetDate));
      } else {
        nextDates = [...multipleDates, targetDate];
      }
      setMultipleDates(nextDates);
      onMultipleChange?.(nextDates);
    }
  };

  const handleSelectFiscalQuarter = (qNumber: number) => {
    const startMonthIdx = (fiscalYearStartMonth - 1 + (qNumber - 1) * 3) % 12;
    let targetYear = fiscalYearView;
    if (
      fiscalYearStartMonth !== 1 &&
      startMonthIdx < fiscalYearStartMonth - 1
    ) {
      targetYear = fiscalYearView;
    }
    const qStartDate = new Date(targetYear, startMonthIdx, 1);
    setSingleDate(qStartDate);
    onChange?.(qStartDate);
    setIsOpen(false);
  };

  const handleSelectFiscalYear = (fyYear: number) => {
    const fyStartDate = new Date(fyYear, fiscalYearStartMonth - 1, 1);
    setSingleDate(fyStartDate);
    onChange?.(fyStartDate);
    setIsOpen(false);
  };

  const handleTimeChange = (newHours: number, newMinutes: number) => {
    setHours(newHours);
    setMinutes(newMinutes);
    if (singleDate) {
      updateDateTime(singleDate, newHours, newMinutes);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (mode === "single") {
      setSingleDate(undefined);
      onChange?.(undefined);
    } else if (mode === "range") {
      setDateRange([undefined, undefined]);
      onRangeChange?.([undefined, undefined]);
    } else if (mode === "multiple") {
      setMultipleDates([]);
      onMultipleChange?.([]);
    }
  };

  const handleApplyPreset = (preset: DatePickerPreset) => {
    const val = preset.getValue();
    if (Array.isArray(val)) {
      if (val.length === 2 && mode === "range") {
        const range = val as [Date, Date];
        setDateRange(range);
        onRangeChange?.(range);
        setIsOpen(false);
      } else if (mode === "multiple") {
        const dates = val as Date[];
        setMultipleDates(dates);
        onMultipleChange?.(dates);
        setIsOpen(false);
      }
    } else if (val instanceof Date) {
      if (mode === "single") {
        setSingleDate(val);
        onChange?.(val);
        setIsOpen(false);
      } else if (mode === "multiple") {
        setMultipleDates([val]);
        onMultipleChange?.([val]);
        setIsOpen(false);
      }
    }
  };

  const formatDate = (date: Date) => {
    if (viewMode === "fiscalQuarter") {
      const f = getFiscalQuarter(date, fiscalYearStartMonth);
      return `Q${f.quarter} FY${f.fiscalYear}`;
    }
    if (viewMode === "fiscalYear") {
      const f = getFiscalQuarter(date, fiscalYearStartMonth);
      return `FY${f.fiscalYear}`;
    }

    const dateStr = new Intl.DateTimeFormat(locale, {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: timeZone,
    }).format(date);

    if (showTimePicker) {
      const timeStr = `${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes(),
      ).padStart(2, "0")}`;
      return `${dateStr} ${timeStr}`;
    }

    return dateStr;
  };

  const renderTriggerText = () => {
    if (mode === "single") {
      return singleDate ? formatDate(singleDate) : placeholder;
    }
    if (mode === "range") {
      const [start, end] = dateRange;
      if (start && end) return `${formatDate(start)} - ${formatDate(end)}`;
      if (start) return `${formatDate(start)} - ...`;
      return placeholder;
    }
    if (mode === "multiple") {
      if (multipleDates.length === 0) return placeholder;
      if (multipleDates.length === 1) return formatDate(multipleDates[0]);
      return `${multipleDates.length} dates selected`;
    }
    return placeholder;
  };

  const hasValue =
    (mode === "single" && singleDate) ||
    (mode === "range" && (dateRange[0] || dateRange[1])) ||
    (mode === "multiple" && multipleDates.length > 0);

  const presets = customPresets || DEFAULT_PRESETS;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full flex flex-col gap-1.5 max-w-xs",
        className,
      )}
    >
      {label && (
        <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
          {label}
          {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
        </label>
      )}

      <div
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={cn(
          datePickerTriggerVariants({ variant }),
          isInvalid && "border-rose-500 dark:border-rose-500 text-rose-500",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        )}
        role="button"
        tabIndex={disabled ? -1 : 0}
        {...keyboardProps}
      >
        <span
          className={cn(
            "truncate",
            !hasValue && "text-zinc-400 dark:text-zinc-500",
          )}
        >
          {renderTriggerText()}
        </span>

        <div className="flex items-center gap-1 shrink-0 ml-2">
          {isClearable && hasValue && (
            <span
              role="button"
              tabIndex={0}
              onClick={handleClear}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClear(e as any);
                }
              }}
              className="p-0.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
            >
              <Icon icon="hugeicons:cancel-01" className="size-3.5" />
            </span>
          )}
          <Icon
            icon="hugeicons:calendar-01"
            className="size-4 text-zinc-400 dark:text-zinc-500"
          />
        </div>
      </div>

      {isOpen && (
        <div
          className={cn(
            "absolute top-full left-0 z-50 mt-1 flex flex-col md:flex-row rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl text-zinc-900 dark:text-zinc-100 shadow-2xl p-3 animate-in fade-in-80 gap-4",
          )}
        >
          {showPresets && viewMode === "date" && (
            <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 pb-2 md:pb-0 md:pr-3 min-w-[110px]">
              <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-1">
                Presets
              </span>
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => handleApplyPreset(preset)}
                  className="text-left px-2 py-1.5 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          )}

          {viewMode === "fiscalQuarter" && (
            <div className="w-60 flex flex-col gap-3">
              <div className="flex items-center justify-between h-7">
                <button
                  type="button"
                  onClick={() => setFiscalYearView((prev) => prev - 1)}
                  className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500"
                >
                  <Icon icon="hugeicons:arrow-left-01" className="size-4" />
                </button>
                <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  Fiscal Year {fiscalYearView}
                </span>
                <button
                  type="button"
                  onClick={() => setFiscalYearView((prev) => prev + 1)}
                  className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500"
                >
                  <Icon icon="hugeicons:arrow-right-01" className="size-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((q) => {
                  const currentF = singleDate
                    ? getFiscalQuarter(singleDate, fiscalYearStartMonth)
                    : null;
                  const isSelected =
                    currentF?.quarter === q &&
                    currentF?.fiscalYear === fiscalYearView;
                  return (
                    <button
                      key={q}
                      type="button"
                      onClick={() => handleSelectFiscalQuarter(q)}
                      className={cn(
                        "h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-xs font-semibold transition-colors cursor-pointer",
                        isSelected
                          ? "bg-sky-600 text-white border-sky-600"
                          : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200",
                      )}
                    >
                      <span>Q{q}</span>
                      <span className="text-[9px] opacity-80">Quarter {q}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {viewMode === "fiscalYear" && (
            <div className="w-60 flex flex-col gap-3">
              <span className="text-xs font-bold text-center text-zinc-900 dark:text-zinc-100 h-7 flex items-center justify-center">
                Select Fiscal Year
              </span>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                {Array.from(
                  { length: 10 },
                  (_, i) => fiscalYearView - 4 + i,
                ).map((fy) => {
                  const currentF = singleDate
                    ? getFiscalQuarter(singleDate, fiscalYearStartMonth)
                    : null;
                  const isSelected = currentF?.fiscalYear === fy;
                  return (
                    <button
                      key={fy}
                      type="button"
                      onClick={() => handleSelectFiscalYear(fy)}
                      className={cn(
                        "h-10 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-xs font-semibold transition-colors cursor-pointer",
                        isSelected
                          ? "bg-sky-600 text-white border-sky-600"
                          : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200",
                      )}
                    >
                      FY{fy}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {viewMode === "date" && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-4">
                {renderMonthCalendar(
                  currentMonth,
                  handlePrevMonth,
                  handleNextMonth,
                  mode,
                  locale,
                  timeZone,
                  weekdaysShort,
                  singleDate,
                  dateRange,
                  multipleDates,
                  minDate,
                  maxDate,
                  handleSelectDay,
                  true,
                  !showDoubleMonth,
                )}

                {showDoubleMonth &&
                  renderMonthCalendar(
                    nextMonth,
                    handlePrevMonth,
                    handleNextMonth,
                    mode,
                    locale,
                    timeZone,
                    weekdaysShort,
                    singleDate,
                    dateRange,
                    multipleDates,
                    minDate,
                    maxDate,
                    handleSelectDay,
                    false,
                    true,
                  )}
              </div>

              {showTimePicker && mode === "single" && (
                <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    <Icon
                      icon="hugeicons:clock-01"
                      className="size-4 text-sky-500"
                    />
                    <span>Time</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <select
                      value={hours}
                      onChange={(e) =>
                        handleTimeChange(Number(e.target.value), minutes)
                      }
                      className="px-2 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    >
                      {Array.from({ length: 24 }, (_, i) => i).map((h) => (
                        <option key={h} value={h}>
                          {String(h).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <span className="font-mono text-zinc-400 font-bold">:</span>
                    <select
                      value={minutes}
                      onChange={(e) =>
                        handleTimeChange(hours, Number(e.target.value))
                      }
                      className="px-2 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    >
                      {Array.from({ length: 12 }, (_, i) => i * 5).map((m) => (
                        <option key={m} value={m}>
                          {String(m).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function renderMonthCalendar(
  monthDate: Date,
  handlePrevMonth: () => void,
  handleNextMonth: () => void,
  mode: DatePickerMode,
  locale: string,
  timeZone: string | undefined,
  weekdaysShort: string[],
  singleDate?: Date,
  dateRange?: [Date | undefined, Date | undefined],
  multipleDates?: Date[],
  minDate?: Date,
  maxDate?: Date,
  handleSelectDay?: (d: Date) => void,
  showPrevNav = true,
  showNextNav = true,
) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const monthTitle = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: timeZone,
  }).format(monthDate);

  return (
    <div className="w-60 flex flex-col">
      <div className="flex items-center justify-between mb-3 h-7">
        {showPrevNav ? (
          <button
            type="button"
            onClick={handlePrevMonth}
            className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors"
          >
            <Icon icon="hugeicons:arrow-left-01" className="size-4" />
          </button>
        ) : (
          <div className="size-6" />
        )}

        <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 capitalize">
          {monthTitle}
        </span>

        {showNextNav ? (
          <button
            type="button"
            onClick={handleNextMonth}
            className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors"
          >
            <Icon icon="hugeicons:arrow-right-01" className="size-4" />
          </button>
        ) : (
          <div className="size-6" />
        )}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 mb-1">
        {weekdaysShort.map((dayName, idx) => (
          <span key={idx}>{dayName}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const targetDate = new Date(year, month, day);
          const isDisabled = isDateDisabled(targetDate, minDate, maxDate);

          let isSelected = false;
          let isInRange = false;
          let isRangeStart = false;
          let isRangeEnd = false;

          if (mode === "single") {
            isSelected = isSameDay(singleDate, targetDate);
          } else if (mode === "range" && dateRange) {
            const [start, end] = dateRange;
            isRangeStart = isSameDay(start, targetDate);
            isRangeEnd = isSameDay(end, targetDate);
            isSelected = isRangeStart || isRangeEnd;
            isInRange = isDateInRange(targetDate, start, end);
          } else if (mode === "multiple" && multipleDates) {
            isSelected = multipleDates.some((d) => isSameDay(d, targetDate));
          }

          return (
            <button
              key={day}
              type="button"
              disabled={isDisabled}
              onClick={() => handleSelectDay?.(targetDate)}
              className={cn(
                "size-7 rounded-lg text-xs flex items-center justify-center transition-colors cursor-pointer select-none",
                "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
                isInRange &&
                  "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 rounded-none",
                isRangeStart &&
                  "rounded-l-lg bg-sky-600 text-white font-semibold hover:bg-sky-500 dark:bg-sky-500",
                isRangeEnd &&
                  "rounded-r-lg bg-sky-600 text-white font-semibold hover:bg-sky-500 dark:bg-sky-500",
                isSelected &&
                  mode !== "range" &&
                  "bg-sky-600 text-white font-semibold hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400",
                isDisabled &&
                  "opacity-25 cursor-not-allowed pointer-events-none hover:bg-transparent",
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
