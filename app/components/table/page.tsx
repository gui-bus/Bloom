"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table/table";
import { Badge } from "@/components/ui/badge/badge";
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
    <div className="space-y-8">
      <DocsTitle
        title="Table"
        description="A responsive data table for presenting tabular information with custom row highlights, headers, status badges, and captions."
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
                  <TableCell><Badge color="success">Paid</Badge></TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">INV-002</TableCell>
                  <TableCell><Badge color="warning">Pending</Badge></TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">INV-003</TableCell>
                  <TableCell><Badge color="danger">Unpaid</Badge></TableCell>
                  <TableCell>Bank Transfer</TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right font-bold">$750.00</TableCell>
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
                  <TableCell><Badge color="primary">Admin</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Ana Silva</TableCell>
                  <TableCell>ana@example.com</TableCell>
                  <TableCell><Badge color="secondary">Developer</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        }
        code={`<TableRow data-state="selected">
  <TableCell>Guilherme Bus</TableCell>
</TableRow>`}
      />

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
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Element</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">&lt;Table /&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">Outer table wrapper with scrollable card border container.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">&lt;TableHeader /&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">Header row container &lt;thead&gt;.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">&lt;TableRow /&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">Table row &lt;tr&gt; with hover and selected highlights.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">&lt;TableCell /&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">Standard data cell &lt;td&gt;.</td>
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
