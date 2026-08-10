"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/dialog";
import {
  type CalendarEvent,
  EventCalendar,
} from "@/components/ui/eventCalendar/eventCalendar";
import { eventCalendarCode } from "@/components/ui/eventCalendar/eventCalendar.code";
import { Input } from "@/components/ui/input/input";
import { Select } from "@/components/ui/select/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function EventCalendarPage() {
  const today = new Date();
  const [events, setEvents] = React.useState<CalendarEvent[]>([
    {
      id: "1",
      title: "Sprint Planning",
      startDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
      ),
      endDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      color: "primary",
    },
    {
      id: "2",
      title: "Multi-day Project Hackathon",
      startDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
      ),
      endDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 3,
      ),
      color: "success",
    },
    {
      id: "3",
      title: "Design Align",
      startDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 3,
      ),
      endDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 3,
      ),
      color: "secondary",
    },
  ]);

  const [title, setTitle] = React.useState("");
  const [startDateStr, setStartDateStr] = React.useState(
    today.toISOString().split("T")[0],
  );
  const [endDateStr, setEndDateStr] = React.useState(
    today.toISOString().split("T")[0],
  );
  const [color, setColor] = React.useState<
    "primary" | "secondary" | "success" | "warning" | "danger" | "default"
  >("primary");
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleAddEvent = () => {
    if (!title) return;
    const newStart = new Date(`${startDateStr}T00:00:00`);
    const newEnd = new Date(`${endDateStr}T00:00:00`);

    const newEvent: CalendarEvent = {
      id: Math.random().toString(),
      title,
      startDate: newStart,
      endDate: newEnd,
      color,
    };

    setEvents((prev) => [...prev, newEvent]);
    setTitle("");
    setStartDateStr(today.toISOString().split("T")[0]);
    setEndDateStr(today.toISOString().split("T")[0]);
    setColor("primary");
    setDialogOpen(false);
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Event Calendar"
        description="A month-view grid scheduler display mapping calendar events, color states, and custom action callbacks."
      />

      <ImportSnippet
        importCode={`import { EventCalendar } from "@/components/ui/eventCalendar/eventCalendar";`}
      />

      <InstallationBlock componentName="eventCalendar" />

      <Tabs defaultValue="eventCalendar">
        <TabsList background={false}>
          <TabsTrigger
            value="eventCalendar"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            eventCalendar.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="eventCalendar">
          <CodeBlock
            code={eventCalendarCode}
            componentName="eventCalendar.tsx"
            description="Event calendar monthly layout logic displaying scheduled event cells."
            tags={["React", "Tailwind", "Calendar", "Scheduler", "Grid"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Standard monthly event calendar mapping current scheduled milestones."
        preview={
          <div className="w-full p-2 bg-zinc-50 dark:bg-zinc-950/40 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <EventCalendar
              events={events}
              onSelectDate={(date) => console.log("Selected date:", date)}
              onEventClick={(event) => alert(`Event: ${event.title}`)}
            />
          </div>
        }
        code={`const events = [
  {
    id: "1",
    title: "Sprint Planning",
    startDate: new Date(),
    endDate: new Date(),
    color: "primary",
  },
  {
    id: "2",
    title: "Multi-day Project Hackathon",
    startDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    color: "success",
  }
];

<EventCalendar
  events={events}
  onSelectDate={(date) => console.log(date)}
  onEventClick={(event) => alert(event.title)}
/>`}
      />

      <DocsComponent
        title="Interactive Dialog Integration"
        description="Use a Dialog to schedule new events dynamically, including multi-day events."
        preview={
          <div className="w-full p-6 bg-zinc-50 dark:bg-zinc-950/40 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                Add custom events to the scheduler:
              </span>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="default" color="primary">
                    Add New Event
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Event to Calendar</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <Input
                      label="Event Title"
                      placeholder="e.g. Code Deploy"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Start Date"
                        type="date"
                        value={startDateStr}
                        onChange={(e) => setStartDateStr(e.target.value)}
                      />
                      <Input
                        label="End Date"
                        type="date"
                        value={endDateStr}
                        onChange={(e) => setEndDateStr(e.target.value)}
                      />
                    </div>
                    <Select
                      label="Color Category"
                      value={color}
                      onValueChange={(val) => setColor(val as any)}
                      options={[
                        { value: "primary", label: "Blue (Primary)" },
                        { value: "secondary", label: "Purple (Secondary)" },
                        { value: "success", label: "Green (Success)" },
                        { value: "warning", label: "Orange (Warning)" },
                        { value: "danger", label: "Red (Danger)" },
                        { value: "default", label: "Grey (Default)" },
                      ]}
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="bordered">Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleAddEvent} color="primary">
                      Schedule Event
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <EventCalendar events={events} />
          </div>
        }
        code={`// In your page component:
const [events, setEvents] = React.useState(initialEvents);
const [dialogOpen, setDialogOpen] = React.useState(false);

const handleAddEvent = () => {
  const newEvent = {
    id: Math.random().toString(),
    title,
    startDate,
    endDate,
    color
  };
  setEvents(prev => [...prev, newEvent]);
  setDialogOpen(false);
};

<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
  <Button onClick={() => setDialogOpen(true)}>Add New Event</Button>
  <DialogContent>
    <Input label="Event Title" value={title} onChange={...} />
    {/* Start & End Date Inputs */}
    <Button onClick={handleAddEvent}>Schedule Event</Button>
  </DialogContent>
</Dialog>

<EventCalendar events={events} />`}
      />

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Prop
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Type
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Default
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  events
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  CalendarEvent[]
                </td>
                <td className="px-4 py-3 font-mono">[]</td>
                <td className="px-4 py-3">
                  List of event objects with dates, labels, and state colors to
                  plot on the grid.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onSelectDate
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  {"(date: Date) => void"}
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Callback fired when a grid cell date is selected.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onEventClick
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  {"(event: CalendarEvent) => void"}
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Callback fired when an individual event block inside a day
                  cell is clicked.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  radius
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  keyof typeof designRadius
                </td>
                <td className="px-4 py-3 font-mono">"md"</td>
                <td className="px-4 py-3">
                  Corner radius design token of the calendar card.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Virtualized List",
          href: "/components/virtualizedList",
        }}
        next={{ title: "Heatmap Grid", href: "/components/heatmapGrid" }}
      />
    </div>
  );
}
