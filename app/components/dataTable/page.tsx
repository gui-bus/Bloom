"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { DataTable } from "@/components/ui/dataTable/dataTable";
import { dataTableCode } from "@/components/ui/dataTable/dataTable.code";
import { Badge } from "@/components/ui/badge/badge";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

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
        <Badge color={role.includes("Lead") ? "primary" : role.includes("Dev") ? "secondary" : "default"}>
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
  { id: "1", name: "Guilherme Santos", email: "gui@example.com", role: "Frontend Lead", status: "Active" },
  { id: "2", name: "Beatriz Lima", email: "bea@example.com", role: "UI Designer", status: "Active" },
  { id: "3", name: "Carlos Eduardo", email: "carlos@example.com", role: "Backend Dev", status: "Pending" },
  { id: "4", name: "Ana Souza", email: "ana@example.com", role: "DevOps Engineer", status: "Active" },
  { id: "5", name: "Rafael Costa", email: "rafael@example.com", role: "Product Manager", status: "Active" },
];

export default function DataTableComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Data Table"
        description="A feature-rich data grid component built on TanStack Table supporting client-side searching, column sorting, pagination controls, and CSV data export."
      />

      <ImportSnippet importCode={`import { DataTable } from "@/components/ui/dataTable/dataTable";`} />

      <InstallationBlock componentName="dataTable" />

      <Tabs defaultValue="dataTable">
        <TabsList background={false}>
          <TabsTrigger
            value="dataTable"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            dataTable.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dataTable">
          <CodeBlock
            code={dataTableCode}
            componentName="dataTable.tsx"
            description="Core implementation of the DataTable component."
            tags={["React", "TanStack Table", "Tailwind", "Data Grid", "DataTable"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard data table with live search input, sorting column headers, pagination controls, and CSV export action."
        preview={
          <div className="w-full">
            <DataTable columns={columns} data={sampleData} searchPlaceholder="Search team members..." />
          </div>
        }
        code={`<DataTable
  columns={columns}
  data={data}
  searchPlaceholder="Search team members..."
/>`}
      />

      {/* Without Export */}
      <DocsComponent
        title="Without CSV Export"
        description="Set 'enableExport' to false to hide the CSV export button."
        preview={
          <div className="w-full">
            <DataTable
              enableExport={false}
              columns={columns}
              data={sampleData}
              searchPlaceholder="Filter records..."
            />
          </div>
        }
        code={`<DataTable
  enableExport={false}
  columns={columns}
  data={data}
  searchPlaceholder="Filter records..."
/>`}
        props={["enableExport: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props DataTable Table */}
      <DocsComponent
        title="Props — DataTable"
        description="Properties to configure the DataTable component."
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
                  <td className="px-3 py-2 font-mono text-primary">columns</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ColumnDef[]</td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">TanStack column definitions array with headers and cell renderers.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">data</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">TData[]</td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">Array of data row objects.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">searchPlaceholder</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'Filter rows...'</td>
                  <td className="px-3 py-2 text-muted-foreground">Placeholder text for global filter input.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">enableExport</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders the Export CSV action button.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">exportFileName</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'data-table-export'</td>
                  <td className="px-3 py-2 text-muted-foreground">File name string used when downloading CSV.</td>
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
