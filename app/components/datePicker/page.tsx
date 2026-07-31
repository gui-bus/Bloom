"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 15);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Date Picker"
        description="A visual date selection component supporting single, range, and multiple selection modes, quick presets, side-by-side double month view, min/max date boundary constraints, and full internationalization (Locale & Timezone)."
      />

      <ImportSnippet importCode={`import { DatePicker } from "@/components/ui/datePicker/datePicker";`} />

      <InstallationBlock componentName="datePicker" />

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
            tags={["React", "Tailwind", "Calendar", "Locale", "Timezone", "DatePicker"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default (Single Mode) */}
      <DocsComponent
        title="Single Selection Mode"
        description="Standard single date picker input with interactive calendar grid popup."
        preview={
          <div className="w-full max-w-sm">
            <DatePicker mode="single" label="Birth Date" placeholder="Select your birth date..." />
          </div>
        }
        code={`<DatePicker mode="single" label="Birth Date" placeholder="Select your birth date..." />`}
        props={["mode: 'single' | 'range' | 'multiple'"]}
      />

      {/* Internationalization: Locale & Timezone */}
      <DocsComponent
        title="Locale & Timezone Customization"
        description="Pass 'locale' (e.g., 'pt-BR', 'es-ES', 'de-DE', 'en-US') and optional 'timeZone' (e.g., 'America/Sao_Paulo', 'UTC') to automatically localize month names, weekday headers, and date formatting."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
            <DatePicker
              locale="pt-BR"
              timeZone="America/Sao_Paulo"
              label="Brasil (pt-BR)"
              value={today}
            />
            <DatePicker
              locale="es-ES"
              label="Spain (es-ES)"
              value={today}
            />
          </div>
        }
        code={`<DatePicker
  locale="pt-BR"
  timeZone="America/Sao_Paulo"
  label="Brasil (pt-BR)"
  value={new Date()}
/>

<DatePicker
  locale="es-ES"
  label="Spain (es-ES)"
  value={new Date()}
/>`}
        props={["locale: string (e.g. 'pt-BR')", "timeZone: string (e.g. 'America/Sao_Paulo')"]}
      />

      {/* Range Mode & Double Month View */}
      <DocsComponent
        title="Range Mode with Double Month View"
        description="Select a date interval with side-by-side 2-month calendar display."
        preview={
          <div className="w-full max-w-md">
            <DatePicker
              mode="range"
              showDoubleMonth
              isClearable
              label="Travel Interval (Double Month)"
              placeholder="Select start and end dates..."
            />
          </div>
        }
        code={`<DatePicker
  mode="range"
  showDoubleMonth
  isClearable
  label="Travel Interval (Double Month)"
  placeholder="Select start and end dates..."
/>`}
        props={["mode: 'range'", "showDoubleMonth: boolean"]}
      />

      {/* Quick Presets */}
      <DocsComponent
        title="Quick Presets Sidebar"
        description="Built-in shortcut presets ('Today', 'Yesterday', 'Last 7 Days', 'This Month')."
        preview={
          <div className="w-full max-w-md">
            <DatePicker
              mode="range"
              showPresets
              label="Report Period (Quick Presets)"
              placeholder="Pick period..."
            />
          </div>
        }
        code={`<DatePicker
  mode="range"
  showPresets
  label="Report Period (Quick Presets)"
/>`}
        props={["showPresets: boolean", "customPresets: DatePickerPreset[]"]}
      />

      {/* Multiple Dates Mode */}
      <DocsComponent
        title="Multiple Dates Selection"
        description="Select multiple individual dates across different months."
        preview={
          <div className="w-full max-w-sm">
            <DatePicker
              mode="multiple"
              isClearable
              label="Meeting Slots (Multiple Dates)"
              placeholder="Click dates to toggle selection..."
            />
          </div>
        }
        code={`<DatePicker
  mode="multiple"
  isClearable
  label="Meeting Slots (Multiple Dates)"
/>`}
        props={["mode: 'multiple'"]}
      />

      {/* Min / Max Date Constraints */}
      <DocsComponent
        title="Min / Max Allowed Dates"
        description="Visual disabled locking for dates outside allowed min and max boundaries."
        preview={
          <div className="w-full max-w-sm">
            <DatePicker
              minDate={today}
              maxDate={nextMonth}
              label="Booking Window (Today to Next Month)"
              placeholder="Select date within allowed window..."
            />
          </div>
        }
        code={`<DatePicker
  minDate={new Date()}
  maxDate={new Date(2026, 8, 15)}
  label="Booking Window"
/>`}
        props={["minDate: Date", "maxDate: Date"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props DatePicker Table */}
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
                  <td className="px-3 py-2 font-mono text-primary">locale</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'en-US'</td>
                  <td className="px-3 py-2 text-muted-foreground">BCC 47 language tag (e.g. 'pt-BR', 'en-US', 'es-ES') for localizing month names, weekdays, and formats.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">timeZone</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">IANA time zone string (e.g. 'America/Sao_Paulo', 'UTC', 'America/New_York').</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">mode</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'single' | 'range' | 'multiple'</td>
                  <td className="px-3 py-2 text-muted-foreground">'single'</td>
                  <td className="px-3 py-2 text-muted-foreground">Selection mode for single date, date range interval, or multiple dates.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showPresets</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders quick shortcut presets sidebar (e.g. Today, Last 7 Days, This Month).</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showDoubleMonth</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Displays 2 consecutive months side-by-side in the popup calendar.</td>
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
