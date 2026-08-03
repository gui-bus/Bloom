"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Badge } from "@/components/ui/badge/badge";
import { Separator } from "@/components/ui/separator/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/table";
import { tableCode } from "@/components/ui/table/table.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function TableComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Table"
        description="A responsive data table for presenting tabular information with custom row highlights, headers, status badges, and captions."
      />

      <ImportSnippet
        importCode={`import { Table } from "@/components/ui/table/table";`}
      />

      <InstallationBlock componentName="table" />

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
            tags={["React", "Table", "Data", "Grid"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard data table layout."
        preview={
          <div className="w-full">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
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
                  <TableCell className="font-bold">INV-001</TableCell>
                  <TableCell>
                    <Badge color="success">Paid</Badge>
                  </TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">INV-002</TableCell>
                  <TableCell>
                    <Badge color="warning">Pending</Badge>
                  </TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">INV-003</TableCell>
                  <TableCell>
                    <Badge color="danger">Unpaid</Badge>
                  </TableCell>
                  <TableCell>Bank Transfer</TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right font-bold">
                    $750.00
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        }
        code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-001</TableCell>
      <TableCell><Badge color="success">Paid</Badge></TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      />

      {/* Selected Row Highlights */}
      <DocsComponent
        title="Selected Row Highlights"
        description="Mark rows with data-state='selected' for interactive data selection."
        preview={
          <div className="w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow data-state="selected">
                  <TableCell className="font-bold">Guilherme Bus</TableCell>
                  <TableCell>gui@example.com</TableCell>
                  <TableCell>
                    <Badge color="primary">Admin</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Ana Silva</TableCell>
                  <TableCell>ana@example.com</TableCell>
                  <TableCell>
                    <Badge color="secondary">Developer</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        }
        code={`<TableRow data-state="selected">
  <TableCell>Guilherme Bus</TableCell>
</TableRow>`}
      />

      {/* Zebra Striped Rows */}
      <DocsComponent
        title="Zebra Striping"
        description="Alternate background shading for even table rows using striped={true}."
        preview={
          <div className="w-full">
            <Table striped>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono">#101</TableCell>
                  <TableCell>Pro Mac M3 Max</TableCell>
                  <TableCell>Hardware</TableCell>
                  <TableCell className="text-right">$3,499.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">#102</TableCell>
                  <TableCell>Ultrawide Monitor 49"</TableCell>
                  <TableCell>Displays</TableCell>
                  <TableCell className="text-right">$1,299.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">#103</TableCell>
                  <TableCell>Ergonomic Chair</TableCell>
                  <TableCell>Furniture</TableCell>
                  <TableCell className="text-right">$599.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">#104</TableCell>
                  <TableCell>Mechanical Keyboard</TableCell>
                  <TableCell>Accessories</TableCell>
                  <TableCell className="text-right">$199.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        }
        code={`<Table striped>
  <TableHeader>...</TableHeader>
  <TableBody>...</TableBody>
</Table>`}
        props={["striped: boolean"]}
      />

      {/* Compact Density */}
      <DocsComponent
        title="Compact Density"
        description="Reduce padding inside table cells for dense data grids using density='compact'."
        preview={
          <div className="w-full">
            <Table density="compact" striped>
              <TableHeader>
                <TableRow>
                  <TableHead>System Metric</TableHead>
                  <TableHead>Current Value</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>CPU Utilization</TableCell>
                  <TableCell className="font-mono">42.8%</TableCell>
                  <TableCell>
                    <Badge color="success">Optimal</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Memory Usage</TableCell>
                  <TableCell className="font-mono">11.4 GB / 32 GB</TableCell>
                  <TableCell>
                    <Badge color="success">Normal</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Disk I/O Rate</TableCell>
                  <TableCell className="font-mono">485 MB/s</TableCell>
                  <TableCell>
                    <Badge color="warning">Elevated</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Network Bandwidth</TableCell>
                  <TableCell className="font-mono">1.2 Gbps</TableCell>
                  <TableCell>
                    <Badge color="primary">Active</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        }
        code={`<Table density="compact" striped>
  <TableHeader>...</TableHeader>
  <TableBody>...</TableBody>
</Table>`}
        props={["density: 'default' | 'compact'"]}
      />

      {/* Sticky Header & Sticky First Column */}
      <DocsComponent
        title="Sticky Header & Sticky First Column"
        description="Freeze table headers at top during vertical scrolling and freeze the first column during horizontal scrolling."
        preview={
          <div className="w-full">
            <Table stickyHeader stickyFirstColumn>
              <TableHeader isSticky>
                <TableRow>
                  <TableHead isStickyColumn>Member</TableHead>
                  <TableHead>Q1 Sales</TableHead>
                  <TableHead>Q2 Sales</TableHead>
                  <TableHead>Q3 Sales</TableHead>
                  <TableHead>Q4 Sales</TableHead>
                  <TableHead>Annual Total</TableHead>
                  <TableHead>Performance Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 8 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell isStickyColumn className="font-bold">
                      Engineer #{i + 1}
                    </TableCell>
                    <TableCell className="font-mono">$45,200</TableCell>
                    <TableCell className="font-mono">$52,400</TableCell>
                    <TableCell className="font-mono">$61,000</TableCell>
                    <TableCell className="font-mono">$74,800</TableCell>
                    <TableCell className="font-mono font-bold">
                      $233,400
                    </TableCell>
                    <TableCell>
                      <Badge color="success">Exceeds</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        }
        code={`<Table stickyHeader stickyFirstColumn>
  <TableHeader isSticky>
    <TableRow>
      <TableHead isStickyColumn>Member</TableHead>
      <TableHead>Q1 Sales</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell isStickyColumn className="font-bold">Engineer #1</TableCell>
      <TableCell>$45,200</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        props={[
          "stickyHeader: boolean",
          "stickyFirstColumn: boolean",
          "isSticky: boolean",
          "isStickyColumn: boolean",
        ]}
      />

      {/* Accessibility & ARIA Section */}
      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Table"
        description="Supported properties for Table elements."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Element
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    &lt;Table /&gt;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Outer table wrapper with scrollable card border container.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    &lt;TableHeader /&gt;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Header row container &lt;thead&gt;.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    &lt;TableRow /&gt;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Table row &lt;tr&gt; with hover and selected highlights.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    &lt;TableCell /&gt;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Standard data cell &lt;td&gt;.
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
