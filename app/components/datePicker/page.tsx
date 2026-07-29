import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Date Picker",
  description: "Date picker component with popover month grid calendar navigation.",
};

import { DatePicker } from "@/components/ui/datePicker/datePicker";
import { datePickerCode } from "@/components/ui/datePicker/datePicker.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function DatePickerComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Date Picker"
        description="A popover calendar component allowing users to select dates with interactive month navigation."
      />

      <Tabs defaultValue="datePicker">
        <TabsList background={false}>
          <TabsTrigger
            value="datePicker"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            datePicker.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="datePicker">
          <CodeBlock
            code={datePickerCode}
            componentName="datePicker.tsx"
            description="Core implementation of the DatePicker component."
            tags={["React", "Tailwind", "Forms", "UI Component"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard date picker."
        preview={
          <div className="w-full max-w-xs">
            <DatePicker label="Departure Date" placeholder="Pick a date..." />
          </div>
        }
        code={`<DatePicker label="Departure Date" placeholder="Pick a date..." />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — DatePicker"
        description="Properties to configure the DatePicker component."
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
                  <td className="px-3 py-2 font-mono text-primary">value</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">Date</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Selected JavaScript Date object.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">placeholder</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'Select date...'</td>
                  <td className="px-3 py-2 text-muted-foreground">Trigger label placeholder.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
