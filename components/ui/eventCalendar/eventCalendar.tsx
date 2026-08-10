"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { Button } from "@/components/ui/button/button";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface CalendarEvent {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default";
}

export interface EventCalendarProps {
  className?: string;
  events?: CalendarEvent[];
  onSelectDate?: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
  radius?: keyof typeof designRadius;
}

const colorMap = {
  default:
    "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700",
  primary:
    "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-400 border-sky-200 dark:border-sky-800",
  secondary:
    "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  success:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  warning:
    "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  danger:
    "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200 dark:border-rose-800",
};

export const EventCalendar: React.FC<EventCalendarProps> = ({
  className,
  events = [],
  onSelectDate,
  onEventClick,
  radius = "md",
}) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      arr.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      arr.push(new Date(year, month, i));
    }
    return arr;
  }, [year, month, firstDayOfMonth, daysInMonth]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date: Date) => {
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const getEventsForDate = (date: Date) => {
    const d = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ).getTime();
    return events.filter((event) => {
      const start = new Date(
        event.startDate.getFullYear(),
        event.startDate.getMonth(),
        event.startDate.getDate(),
      ).getTime();
      const end = new Date(
        event.endDate.getFullYear(),
        event.endDate.getMonth(),
        event.endDate.getDate(),
      ).getTime();
      return d >= start && d <= end;
    });
  };

  return (
    <div
      className={cn(
        "w-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs",
        designRadius[radius],
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
          {monthNames[month]} {year}
        </h3>
        <div className="flex items-center gap-1">
          <Button
            variant="bordered"
            size="sm"
            onClick={handlePrevMonth}
            className="h-8 w-8 p-0"
          >
            <Icon icon="lucide:chevron-left" className="size-4" />
          </Button>
          <Button
            variant="bordered"
            size="sm"
            onClick={handleNextMonth}
            className="h-8 w-8 p-0"
          >
            <Icon icon="lucide:chevron-right" className="size-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 border-b border-zinc-100 dark:border-zinc-800/50 bg-zinc-50 dark:bg-zinc-900/50 text-center text-xs font-semibold text-zinc-500 py-2">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="grid grid-cols-7 divide-x divide-y divide-zinc-100 dark:divide-zinc-800/40 bg-zinc-50/20 dark:bg-zinc-900/10">
        {days.map((date, idx) => (
          <div
            key={idx}
            onClick={() => {
              if (date) {
                setSelectedDate(date);
                onSelectDate?.(date);
              }
            }}
            className={cn(
              "min-h-[90px] p-1.5 flex flex-col justify-between transition-colors",
              date
                ? "cursor-pointer hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30"
                : "bg-zinc-50/50 dark:bg-zinc-950/20 pointer-events-none",
              date && isSelected(date) && "bg-sky-500/5 dark:bg-sky-500/10",
            )}
          >
            {date ? (
              <div className="flex justify-between items-center">
                <span
                  className={cn(
                    "text-xs font-medium h-5 w-5 flex items-center justify-center rounded-full",
                    isToday(date)
                      ? "bg-sky-500 text-white font-semibold"
                      : "text-zinc-600 dark:text-zinc-400",
                  )}
                >
                  {date.getDate()}
                </span>
              </div>
            ) : (
              <div />
            )}

            <div className="mt-1 space-y-1 overflow-hidden">
              {date &&
                getEventsForDate(date).map((event) => (
                  <div
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick?.(event);
                    }}
                    className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-sm border truncate font-medium",
                      colorMap[event.color || "default"],
                    )}
                  >
                    {event.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

EventCalendar.displayName = "EventCalendar";
