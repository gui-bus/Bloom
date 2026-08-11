"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { Separator } from "@/components/ui/separator/separator";
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
        props={["events: CalendarEvent[]", "onSelectDate: (date: Date) => void", "onEventClick: (event: CalendarEvent) => void"]}
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
        props={["events: CalendarEvent[]"]}
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — EventCalendar"
        description="Properties for configuring the EventCalendar component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Default</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">events</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">CalendarEvent[]</td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">List of event objects with dates, labels, and state colors to plot on the grid.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onSelectDate</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(date: Date) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback fired when a grid cell date is selected.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onEventClick</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(event: CalendarEvent) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback fired when an individual event block inside a day cell is clicked.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">keyof typeof designRadius</td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Corner radius design token of the calendar card.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
