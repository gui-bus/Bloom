import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Table",
  description: "Semantic HTML table components for tabular data display.",
};

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table/table";
import { tableCode } from "@/components/ui/table/table.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function TableComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Table"
        description="A responsive tabular data layout component built using semantic HTML5 elements."
      />

      <Tabs defaultValue="table">
        <TabsList background={false}>
          <TabsTrigger
            value="table"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            table.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="table">
          <CodeBlock
            code={tableCode}
            componentName="table.tsx"
            description="Core implementation of the Table component."
            tags={["React", "Tailwind", "Data", "Tables"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Tabular data structure."
        preview={
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">INV-001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">INV-002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        }
        code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-001</TableCell>
      <TableCell>$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — Table"
        description="Available primitives for building tables."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">Table</td>
                  <td className="px-3 py-2 text-muted-foreground">Wrapper container element.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">TableHeader</td>
                  <td className="px-3 py-2 text-muted-foreground">Thead section container.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">TableCell</td>
                  <td className="px-3 py-2 text-muted-foreground">Individual data cell element.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
