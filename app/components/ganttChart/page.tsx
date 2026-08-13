"use client";

import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  GanttChart,
  type GanttTask,
} from "@/components/ui/ganttChart/ganttChart";
import { ganttChartCode } from "@/components/ui/ganttChart/ganttChart.code";
import { Separator } from "@/components/ui/separator/separator";

export default function GanttChartPage() {
  const sampleTasks: GanttTask[] = [
    {
      id: "1",
      name: "Project Initiation",
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-01-15"),
      progress: 100,
      color: "primary",
    },
    {
      id: "2",
      name: "Design Phase",
      startDate: new Date("2026-01-15"),
      endDate: new Date("2026-02-15"),
      progress: 60,
      color: "secondary",
      dependencies: ["Project Initiation"],
    },
    {
      id: "3",
      name: "Development",
      startDate: new Date("2026-02-10"),
      endDate: new Date("2026-03-30"),
      progress: 20,
      color: "success",
      dependencies: ["Design Phase"],
    },
    {
      id: "4",
      name: "Quality Assurance",
      startDate: new Date("2026-03-25"),
      endDate: new Date("2026-04-10"),
      progress: 0,
      color: "warning",
      dependencies: ["Development"],
    },
    {
      id: "5",
      name: "Deployment",
      startDate: new Date("2026-04-08"),
      endDate: new Date("2026-04-15"),
      progress: 0,
      color: "danger",
      dependencies: ["Quality Assurance"],
    },
  ];

  const handleTaskClick = (task: GanttTask) => {
    alert(
      `Clicked task: ${task.name}\nDuration: ${task.startDate.toLocaleDateString()} - ${task.endDate.toLocaleDateString()}\nProgress: ${task.progress}%`,
    );
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Gantt Chart"
        description="A visual timeline displaying tasks, milestones, progress states, categories, and project durations."
      />

      <ImportSnippet
        importCode={`import { GanttChart } from "@/components/ui/ganttChart/ganttChart";`}
      />

      <InstallationBlock componentName="ganttChart" />

      <CodeBlock
        code={ganttChartCode}
        componentName="ganttChart.tsx"
        description="Timeline grid calculation and task duration layout."
        tags={["React", "Timeline", "Gantt", "Scheduler"]}
      />

      <DocsComponent
        title="Default"
        description="Standard Gantt view plotting task progress percentages across time."
        props={[
          "tasks: GanttTask[]",
          "viewStartDate: Date",
          "viewEndDate: Date",
          "onTaskClick: (task: GanttTask) => void",
        ]}
        preview={
          <div className="w-full p-4 bg-zinc-50 dark:bg-zinc-950/40 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-x-auto">
            <GanttChart
              tasks={sampleTasks}
              viewStartDate={new Date("2025-12-25")}
              viewEndDate={new Date("2026-04-20")}
              onTaskClick={handleTaskClick}
            />
          </div>
        }
        code={`const tasks = [
  {
    id: "1",
    name: "Project Initiation",
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-01-15"),
    progress: 100,
    color: "primary"
  },
  {
    id: "2",
    name: "Design Phase",
    startDate: new Date("2026-01-15"),
    endDate: new Date("2026-02-15"),
    progress: 60,
    color: "secondary",
    dependencies: ["Project Initiation"]
  }
];

<GanttChart
  tasks={tasks}
  viewStartDate={new Date("2025-12-25")}
  viewEndDate={new Date("2026-04-20")}
  onTaskClick={(task) => console.log(task)}
/>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — GanttChart"
        description="Props to configure the GanttChart component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">tasks</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    GanttTask[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    List of tasks to plot on the timeline
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    viewStartDate
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    Date
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Starting viewport boundary date for scale mapping
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    viewEndDate
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    Date
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Ending viewport boundary date for scale mapping
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    onTaskClick
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"(task: GanttTask) => void"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Fires when clicking any task block on the scheduler timeline
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
      <DocsPagination />
    </div>
  );
}
