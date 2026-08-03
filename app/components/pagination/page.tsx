"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationToolbar,
} from "@/components/ui/pagination/pagination";
import { paginationCode } from "@/components/ui/pagination/pagination.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function PaginationComponentPage() {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Pagination"
        description="Comprehensive pagination suite supporting high-level toolbar integration (showRowsPerPage, showJumper, showTotal, first/last buttons), 6 visual variants (default, bordered, flat, light, pills, line), and 3 button shapes."
      />

      <ImportSnippet
        importCode={`import { Pagination, PaginationToolbar } from "@/components/ui/pagination/pagination";`}
      />

      <InstallationBlock componentName="pagination" />

      <Tabs defaultValue="pagination">
        <TabsList background={false}>
          <TabsTrigger
            value="pagination"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            pagination.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pagination">
          <CodeBlock
            code={paginationCode}
            componentName="pagination.tsx"
            description="Core implementation of the Pagination suite."
            tags={["React", "Pagination", "Table", "Toolbar"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Full Pagination Toolbar Suite"
        description="High-level toolbar containing rows per page dropdown, total records summary, quick page jumper, and first/last buttons."
        preview={
          <div className="w-full">
            <PaginationToolbar
              page={page}
              total={150}
              pageSize={pageSize}
              onPageChange={setPage}
              onPageSizeChange={setPageSize}
              showTotal
              showRowsPerPage
              showJumper
              showFirstButton
              showLastButton
            />
          </div>
        }
        code={`const [page, setPage] = React.useState(1);
const [pageSize, setPageSize] = React.useState(10);

<PaginationToolbar
  page={page}
  total={150}
  pageSize={pageSize}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
  showTotal
  showRowsPerPage
  showJumper
  showFirstButton
  showLastButton
/>`}
        props={[
          "showRowsPerPage: boolean",
          "showJumper: boolean",
          "showTotal: boolean",
          "showFirstButton: boolean",
          "showLastButton: boolean",
        ]}
      />

      <DocsComponent
        title="Variants (default, bordered, flat, light, pills, line)"
        description="Choose from 6 visual surface variants for active page links."
        preview={
          <div className="flex flex-col gap-4 w-full">
            <div>
              <span className="text-xs text-muted-foreground block mb-1 font-semibold">
                1. Default
              </span>
              <Pagination variant="default">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div>
              <span className="text-xs text-muted-foreground block mb-1 font-semibold">
                2. Bordered
              </span>
              <Pagination variant="bordered">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div>
              <span className="text-xs text-muted-foreground block mb-1 font-semibold">
                3. Flat
              </span>
              <Pagination variant="flat">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div>
              <span className="text-xs text-muted-foreground block mb-1 font-semibold">
                4. Light
              </span>
              <Pagination variant="light">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div>
              <span className="text-xs text-muted-foreground block mb-1 font-semibold">
                5. Pills
              </span>
              <Pagination variant="pills">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div>
              <span className="text-xs text-muted-foreground block mb-1 font-semibold">
                6. Line
              </span>
              <Pagination variant="line">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        }
        code={`<Pagination variant="default">...</Pagination>
<Pagination variant="line">...</Pagination>`}
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'light' | 'pills' | 'line'",
        ]}
      />

      <DocsComponent
        title="Shapes (square, rounded, circle)"
        description="Button border radius shape using the 'shape' prop: 'square', 'rounded', or 'circle'."
        preview={
          <div className="flex flex-col gap-6 w-full">
            <Pagination shape="rounded">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            <Pagination shape="circle">
              <PaginationContent>
                <PaginationItem>
                  <PaginationFirst />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLast />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        }
        code={`<Pagination shape="rounded">...</Pagination>
<Pagination shape="circle">...</Pagination>`}
        props={["shape: 'square' | 'rounded' | 'circle'"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — PaginationToolbar"
        description="Supported properties for the PaginationToolbar component."
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
                    showRowsPerPage
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders page size selector dropdown (10, 25, 50, 100).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showJumper
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders direct page jump input box.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showTotal
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays total record summary string (e.g., '1-10 of 150
                    items').
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showFirstButton / showLastButton
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders double arrow buttons to jump directly to page 1 or
                    totalPages.
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
