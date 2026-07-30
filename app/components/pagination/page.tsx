"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
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
  const [page, setPage] = React.useState(2);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Pagination"
        description="Pagination component with page numbers, prev/next controls, first/last jumps, shapes, variants, and sizes."
      />

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
            description="Core implementation of the Pagination component."
            tags={["React", "Pagination", "Navigation", "Table"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard pagination bar."
        preview={
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage(Math.max(1, page - 1))} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive={page === 1} onClick={() => setPage(1)}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive={page === 2} onClick={() => setPage(2)}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive={page === 3} onClick={() => setPage(3)}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={() => setPage(Math.min(5, page + 1))} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        }
        code={`<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious /></PaginationItem>
    <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext /></PaginationItem>
  </PaginationContent>
</Pagination>`}
      />

      {/* Shapes */}
      <DocsComponent
        title="Shapes"
        description="Button border radius shape using the 'shape' prop: 'square', 'rounded', or 'circle'."
        preview={
          <div className="flex flex-col gap-6 w-full">
            <Pagination shape="rounded">
              <PaginationContent>
                <PaginationItem><PaginationPrevious /></PaginationItem>
                <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationNext /></PaginationItem>
              </PaginationContent>
            </Pagination>

            <Pagination shape="circle">
              <PaginationContent>
                <PaginationItem><PaginationFirst /></PaginationItem>
                <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLast /></PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        }
        code={`<Pagination shape="rounded">...</Pagination>
<Pagination shape="circle">...</Pagination>`}
        props={["shape: 'square' | 'rounded' | 'circle'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Scale pagination button size using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-col gap-6 w-full">
            <Pagination size="sm">
              <PaginationContent>
                <PaginationItem><PaginationPrevious /></PaginationItem>
                <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationNext /></PaginationItem>
              </PaginationContent>
            </Pagination>

            <Pagination size="lg">
              <PaginationContent>
                <PaginationItem><PaginationPrevious /></PaginationItem>
                <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationNext /></PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        }
        code={`<Pagination size="sm">...</Pagination>
<Pagination size="lg">...</Pagination>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Pagination"
        description="Supported properties for the Pagination component."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'flat' | 'light' | 'pills'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">Visual button surface style variant.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">shape</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'square' | 'rounded' | 'circle'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'rounded'</td>
                  <td className="px-3 py-2 text-muted-foreground">Border radius shape variant.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Button dimensions scale.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isActive (on Link)</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Highlights current active page link.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
