"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationToolbar,
} from "@/components/ui/pagination/pagination";
import { paginationCode } from "@/components/ui/pagination/pagination.code";

export default function PaginationComponentPage() {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Pagination"
        description="Comprehensive pagination suite supporting high-level toolbar integration, multiple visual variants matching input components, customizable sizing, coloring, and border radius shapes."
      />

      <ImportSnippet
        importCode={`import { Pagination, PaginationToolbar } from "@/components/ui/pagination/pagination";`}
      />

      <InstallationBlock componentName="pagination" />

      <CodeBlock
        code={paginationCode}
        componentName="pagination.tsx"
        description="Core implementation of the Pagination suite."
        tags={["React", "Pagination", "Table", "Toolbar"]}
      />

      <DocsComponent
        title="Default"
        description="Standard pagination layout containing previous, next, and active numerical page triggers."
        preview={
          <div className="w-full">
            <Pagination>
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
                  <PaginationLink>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        }
        code={`<Pagination>
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
</Pagination>`}
      />

      <DocsComponent
        title="Variants"
        description="Surface styling options matched directly to input component configurations."
        preview={
          <div className="flex flex-col gap-5 w-full">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Default
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

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Bordered
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

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Flat
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

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Underlined
              </span>
              <Pagination variant="underlined">
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

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Filled
              </span>
              <Pagination variant="filled">
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

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Glassmorphism
              </span>
              <Pagination variant="glassmorphism">
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

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Glow
              </span>
              <Pagination variant="glow">
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
<Pagination variant="bordered">...</Pagination>
<Pagination variant="flat">...</Pagination>
<Pagination variant="underlined">...</Pagination>
<Pagination variant="filled">...</Pagination>
<Pagination variant="glassmorphism">...</Pagination>
<Pagination variant="glow">...</Pagination>`}
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'underlined' | 'filled' | 'glassmorphism' | 'gradient-border' | 'glow'",
        ]}
      />

      <DocsComponent
        title="Colors"
        description="Style active items with alert colors: primary, success, warning, danger, and default."
        preview={
          <div className="flex flex-col gap-5 w-full">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Primary
              </span>
              <Pagination color="primary">
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
                    <PaginationLink>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Success
              </span>
              <Pagination color="success">
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
                    <PaginationLink>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Warning
              </span>
              <Pagination color="warning">
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
                    <PaginationLink>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Danger
              </span>
              <Pagination color="danger">
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
                    <PaginationLink>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Default
              </span>
              <Pagination color="default">
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
                    <PaginationLink>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        }
        code={`<Pagination color="primary">...</Pagination>
<Pagination color="success">...</Pagination>
<Pagination color="warning">...</Pagination>
<Pagination color="danger">...</Pagination>
<Pagination color="default">...</Pagination>`}
        props={[
          "color: 'primary' | 'success' | 'warning' | 'danger' | 'default'",
        ]}
      />

      <DocsComponent
        title="Sizes"
        description="Choose from sm, md, or lg dimensions to fit different layout designs."
        preview={
          <div className="flex flex-col gap-4 w-full">
            <Pagination size="sm">
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

            <Pagination size="md">
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

            <Pagination size="lg">
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
        }
        code={`<Pagination size="sm">...</Pagination>
<Pagination size="md">...</Pagination>
<Pagination size="lg">...</Pagination>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <DocsComponent
        title="Radius"
        description="Choose border radius style for pagination active buttons matching design tokens."
        preview={
          <div className="flex flex-col gap-6 w-full">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                None
              </span>
              <Pagination radius="none">
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

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                MD
              </span>
              <Pagination radius="md">
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

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Full
              </span>
              <Pagination radius="full">
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
        code={`<Pagination radius="none">...</Pagination>
<Pagination radius="md">...</Pagination>
<Pagination radius="full">...</Pagination>`}
        props={["radius: keyof typeof designRadius"]}
      />

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
        title="Props — PaginationToolbar"
        description="Supported properties for the PaginationToolbar component."
        preview={
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    showRowsPerPage
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">true</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Renders page size selector dropdown (10, 25, 50, 100).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    showJumper
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">true</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Renders direct page jump input box.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    showTotal
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">true</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Displays total record summary string (e.g., '1-10 of 150
                    items').
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    showFirstButton / showLastButton
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">true</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
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
