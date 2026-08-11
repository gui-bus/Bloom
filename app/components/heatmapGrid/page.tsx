"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import {
  HeatmapGrid,
  type HeatmapValue,
} from "@/components/ui/heatmapGrid/heatmapGrid";
import { heatmapGridCode } from "@/components/ui/heatmapGrid/heatmapGrid.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function HeatmapGridPage() {
  const sampleData: HeatmapValue[] = React.useMemo(() => {
    const arr: HeatmapValue[] = [];
    const year = new Date().getFullYear();
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    const dt = new Date(startDate);
    while (dt <= endDate) {
      const chance = Math.random();
      if (chance > 0.3) {
        arr.push({
          date: new Date(dt),
          count: Math.floor(Math.random() * 12),
        });
      }
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }, []);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Heatmap Grid"
        description="A GitHub-like contribution grid/heatmap matrix for activity mapping, with customizable colors, dates, and tooltip details."
      />

      <ImportSnippet
        importCode={`import { HeatmapGrid } from "@/components/ui/heatmapGrid/heatmapGrid";`}
      />

      <InstallationBlock componentName="heatmapGrid" />

      <Tabs defaultValue="heatmapGrid">
        <TabsList background={false}>
          <TabsTrigger
            value="heatmapGrid"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            heatmapGrid.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="heatmapGrid">
          <CodeBlock
            code={heatmapGridCode}
            componentName="heatmapGrid.tsx"
            description="Core implementation of the HeatmapGrid mapping date intensities to SVG blocks with tooltips."
            tags={["React", "Tailwind", "Heatmap", "Grid", "Tooltip"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Standard activity board showing random sample data mapped across the current calendar year."
        props={["data: HeatmapValue[]", "colorTheme: 'emerald' | 'sky' | 'indigo' | 'rose' | 'amber'"]}
        preview={
          <div className="w-full p-2 bg-zinc-50 dark:bg-zinc-950/40 rounded-xl border border-zinc-200 dark:border-zinc-800 flex justify-center overflow-x-auto">
            <HeatmapGrid data={sampleData} colorTheme="emerald" />
          </div>
        }
        code={`const data = [
  { date: "2026-01-01", count: 4 },
  { date: "2026-01-02", count: 8 },
  ...
];

<HeatmapGrid data={data} colorTheme="emerald" />`}
      />

      <DocsComponent
        title="Color Themes"
        description="Select different color palettes such as sky, indigo, rose, or amber to fit your design system."
        props={["colorTheme: 'emerald' | 'sky' | 'indigo' | 'rose' | 'amber'"]}
        preview={
          <div className="w-full space-y-6 p-4 bg-zinc-50 dark:bg-zinc-950/40 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-x-auto">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-zinc-400">
                Sky Theme
              </span>
              <HeatmapGrid data={sampleData} colorTheme="sky" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold text-zinc-400">
                Indigo Theme
              </span>
              <HeatmapGrid data={sampleData} colorTheme="indigo" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold text-zinc-400">
                Rose Theme
              </span>
              <HeatmapGrid data={sampleData} colorTheme="rose" />
            </div>
          </div>
        }
        code={`<HeatmapGrid data={data} colorTheme="sky" />
<HeatmapGrid data={data} colorTheme="indigo" />
<HeatmapGrid data={data} colorTheme="rose" />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — HeatmapGrid"
        description="Props for the HeatmapGrid component."
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
                  <td className="px-3 py-2 font-mono text-primary">data</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">HeatmapValue[]</td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">List of data cells containing dates and numeric activity scores.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">startDate</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">Date</td>
                  <td className="px-3 py-2 text-muted-foreground">Jan 1st (Current Year)</td>
                  <td className="px-3 py-2 text-muted-foreground">Starting date plotted on the board.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">endDate</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">Date</td>
                  <td className="px-3 py-2 text-muted-foreground">Dec 31st (Current Year)</td>
                  <td className="px-3 py-2 text-muted-foreground">Ending date plotted on the board.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">colorTheme</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'emerald' | 'sky' | 'indigo' | 'rose' | 'amber'</td>
                  <td className="px-3 py-2 text-muted-foreground">'emerald'</td>
                  <td className="px-3 py-2 text-muted-foreground">Color preset style applied to intensity tiers.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">keyof typeof designRadius</td>
                  <td className="px-3 py-2 text-muted-foreground">'xs'</td>
                  <td className="px-3 py-2 text-muted-foreground">Corner radius design token of the individual squares.</td>
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
