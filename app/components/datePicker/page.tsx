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
        description="A visual date selection component supporting single, range, and multiple selection modes, integrated time picker selectors, fiscal quarter & year picker modes, quick presets, double month view, and full internationalization."
      />

      <ImportSnippet
        importCode={`import { DatePicker } from "@/components/ui/datePicker/datePicker";`}
      />

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
            description="Core implementation of the DatePicker component with integrated time picker and fiscal quarter/year modes."
            tags={[
              "React",
              "Tailwind",
              "Calendar",
              "TimePicker",
              "FiscalYear",
              "DatePicker",
            ]}
          />
        </TabsContent>
      </Tabs>

      {/* Integrated Time Picker */}
      <DocsComponent
        title="Integrated Time Picker Selection"
        description="Enable 'showTimePicker' to display interactive hours and minutes dropdown selectors at the bottom of the date calendar popup."
        preview={
          <div className="w-full max-w-sm">
            <DatePicker
              showTimePicker
              label="Schedule Meeting (Date & Time)"
              placeholder="Select date & time..."
              value={today}
            />
          </div>
        }
        code={`<DatePicker
  showTimePicker
  label="Schedule Meeting (Date & Time)"
  placeholder="Select date & time..."
  value={new Date()}
/>`}
        props={["showTimePicker: boolean"]}
      />

      {/* Fiscal Quarter & Fiscal Year Modes */}
      <DocsComponent
        title="Fiscal Quarter & Year Picker Modes"
        description="Set 'viewMode' to 'fiscalQuarter' or 'fiscalYear' to select financial reporting periods (Q1-Q4, FY2026). Customize start month with 'fiscalYearStartMonth' (e.g. 4 for April)."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
            <DatePicker
              viewMode="fiscalQuarter"
              fiscalYearStartMonth={4}
              label="Financial Quarter (FY Starts April)"
              placeholder="Select Quarter..."
            />
            <DatePicker
              viewMode="fiscalYear"
              label="Fiscal Year"
              placeholder="Select Fiscal Year..."
            />
          </div>
        }
        code={`<DatePicker
  viewMode="fiscalQuarter"
  fiscalYearStartMonth={4}
  label="Financial Quarter (April Start)"
/>

<DatePicker
  viewMode="fiscalYear"
  label="Fiscal Year"
/>`}
        props={[
          "viewMode: 'date' | 'fiscalQuarter' | 'fiscalYear'",
          "fiscalYearStartMonth: number (1-12)",
        ]}
      />

      {/* Single Selection Mode */}
      <DocsComponent
        title="Single Selection Mode"
        description="Standard single date picker input with interactive calendar grid popup."
        preview={
          <div className="w-full max-w-sm">
            <DatePicker
              mode="single"
              label="Birth Date"
              placeholder="Select your birth date..."
            />
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
            <DatePicker locale="es-ES" label="Spain (es-ES)" value={today} />
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
        props={[
          "locale: string (e.g. 'pt-BR')",
          "timeZone: string (e.g. 'America/Sao_Paulo')",
        ]}
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
                  <td className="px-3 py-2 font-mono text-primary">
                    showTimePicker
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Integrates hours and minutes time dropdown selectors inside
                    calendar popup.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">viewMode</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'date' | 'fiscalQuarter' | 'fiscalYear'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'date'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Display view mode for standard calendar dates, fiscal
                    quarters (Q1-Q4), or fiscal years.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    fiscalYearStartMonth
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number (1-12)
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Starting month offset for fiscal quarter calculations (e.g.
                    1 = Jan, 4 = Apr, 10 = Oct).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">mode</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'single' | 'range' | 'multiple'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'single'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Selection mode for single date, date range interval, or
                    multiple dates.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">locale</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'en-US'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    BCC 47 language tag (e.g. 'pt-BR', 'en-US', 'es-ES') for
                    localizing month names, weekdays, and formats.
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
