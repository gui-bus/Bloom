import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Data Table",
  description: "Interactive data table component with sorting, filtering, and pagination built on TanStack Table.",
};

import { DataTableDemo } from "./dataTable-demo";
import { dataTableCode } from "@/components/ui/dataTable/dataTable.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function DataTableComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Data Table"
        description="A feature-rich data grid component with client-side searching, column sorting, and pagination controls."
      />

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
            tags={["React", "TanStack Table", "Tailwind", "Data Grid"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Filterable and paginated data table."
        preview={<DataTableDemo />}
        code={`<DataTable columns={columns} data={data} searchPlaceholder="Search users..." />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

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
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">TanStack column definitions array.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">data</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">TData[]</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Array of data row objects.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
