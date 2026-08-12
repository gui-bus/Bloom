"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Badge } from "@/components/ui/badge/badge";
import { DataTable } from "@/components/ui/dataTable/dataTable";
import { dataTableCode } from "@/components/ui/dataTable/dataTable.code";
import { Separator } from "@/components/ui/separator/separator";

const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }: any) => {
      const role = row.getValue("role");
      return (
        <Badge
          color={
            role.includes("Lead")
              ? "primary"
              : role.includes("Dev")
                ? "secondary"
                : "default"
          }
        >
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: any) => {
      const status = row.getValue("status");
      return (
        <Badge color={status === "Active" ? "success" : "warning"}>
          {status}
        </Badge>
      );
    },
  },
];

const sampleData = [
  {
    id: "1",
    name: "Guilherme Santos",
    email: "gui@example.com",
    role: "Frontend Lead",
    status: "Active",
  },
  {
    id: "2",
    name: "Beatriz Lima",
    email: "bea@example.com",
    role: "UI Designer",
    status: "Active",
  },
  {
    id: "3",
    name: "Carlos Eduardo",
    email: "carlos@example.com",
    role: "Backend Dev",
    status: "Pending",
  },
  {
    id: "4",
    name: "Ana Souza",
    email: "ana@example.com",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    id: "5",
    name: "Rafael Costa",
    email: "rafael@example.com",
    role: "Product Manager",
    status: "Active",
  },
];

export default function DataTableComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Data Table"
        description="A feature-rich data grid component built on TanStack Table supporting column reordering via drag-and-drop handles, column visibility picker dropdowns, global & per-column filter builders, and CSV / Excel data export."
      />

      <ImportSnippet
        importCode={`import { DataTable } from "@/components/ui/dataTable/dataTable";`}
      />

      <InstallationBlock componentName="dataTable" />

      <CodeBlock
        code={dataTableCode}
        componentName="dataTable.tsx"
        description="Core implementation of the DataTable component with column reordering, visibility menu, filter builder, and spreadsheet export."
        tags={[
          "React",
          "TanStack Table",
          "Tailwind",
          "Data Grid",
          "DataTable",
          "Export",
        ]}
      />

      <DocsComponent
        title="Full-Featured Data Table"
        description="Includes drag-and-drop column reordering, column visibility toggle menu, global search, per-column filter builder, and CSV/Excel spreadsheet export."
        preview={
          <div className="w-full">
            <DataTable
              columns={columns}
              data={sampleData}
              searchPlaceholder="Search team members..."
              enableColumnReorder
              enableColumnVisibility
              enableColumnFilters
              enableExport
            />
          </div>
        }
        code={`<DataTable
  columns={columns}
  data={data}
  searchPlaceholder="Search team members..."
  enableColumnReorder
  enableColumnVisibility
  enableColumnFilters
  enableExport
  exportFileName="team-members"
/>`}
      />

      <DocsComponent
        title="Per-Column Filter Builder & Drag-and-Drop Reordering"
        description="Click 'Filters' to open individual column input filters. Drag column headers horizontally by hover handles to reorder columns on the fly."
        preview={
          <div className="w-full">
            <DataTable
              columns={columns}
              data={sampleData}
              enableColumnFilters
              enableColumnReorder
              enableColumnVisibility={false}
              enableExport={false}
            />
          </div>
        }
        code={`<DataTable
  columns={columns}
  data={data}
  enableColumnFilters
  enableColumnReorder
/>`}
        props={["enableColumnFilters: boolean", "enableColumnReorder: boolean"]}
      />

      <DocsComponent
        title="CSV & Excel Export Callback Hooks"
        description="Attach custom 'onExportCSV' or 'onExportExcel' event handlers to process table data without initiating mandatory browser downloads."
        preview={
          <div className="w-full">
            <DataTable
              columns={columns}
              data={sampleData}
              enableExport
              onExportCSV={(tableInstance) => {
                alert(
                  `Custom CSV export handler triggered for ${tableInstance.getFilteredRowModel().rows.length} rows!`,
                );
              }}
              onExportExcel={(tableInstance) => {
                alert(
                  `Custom Excel export handler triggered for ${tableInstance.getFilteredRowModel().rows.length} rows!`,
                );
              }}
              enableColumnFilters={false}
              enableColumnReorder={false}
              enableColumnVisibility={false}
            />
          </div>
        }
        code={`<DataTable
  columns={columns}
  data={data}
  enableExport
  onExportCSV={(table) => {

  }}
  onExportExcel={(table) => {

  }}
/>`}
        props={[
          "onExportCSV: (table) => void",
          "onExportExcel: (table) => void",
        ]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — DataTable"
        description="Properties to configure the DataTable component."
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
                  <td className="px-3 py-2 font-mono text-primary">columns</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ColumnDef[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    TanStack column definitions array with headers and cell
                    renderers.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">data</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    TData[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of data row objects.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    enableColumnReorder
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables drag-and-drop column reordering handles.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    enableColumnVisibility
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders column visibility picker dropdown menu.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    enableColumnFilters
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables per-column filter builder bar.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    enableExport
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders CSV and Excel data export action buttons.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    exportFileName
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    'data-table-export'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    File name string used when downloading exported
                    spreadsheets.
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
