import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { PaginationInteractiveDemo } from "./pagination-demo";
import {
  PaginationFirstLastDemo,
  PaginationCompactDemo,
} from "./pagination-interactive-demos";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationFirst,
  PaginationLast,
  PaginationEllipsis,
} from "@/components/ui/pagination/pagination";
import { paginationCode } from "@/components/ui/pagination/pagination.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export const metadata: Metadata = {
  title: "Pagination",
  description: "Pagination component with page navigation controls, first/last controls, compact icon modes, and interactive stateful switching.",
};

export default function PaginationDocsPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Pagination"
        description="Navigation controls for splitting multi-page content into discrete pages with stateful switching, icon modes, and first/last jump controls."
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
            description="Pagination bar component supporting page switching, previous/next/first/last controls, and page ellipsis."
            tags={["React", "Tailwind", "UI Component", "Navigation", "Pagination"]}
          />
        </TabsContent>
      </Tabs>

      {/* Interactive Stateful Pagination */}
      <DocsComponent
        title="Interactive Stateful Page Switching"
        description="Stateful page switching that updates content dynamically without anchor jump scroll."
        preview={<PaginationInteractiveDemo />}
        code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive={currentPage === 1} onClick={() => setCurrentPage(1)}>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive={currentPage === 2} onClick={() => setCurrentPage(2)}>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive={currentPage === 3} onClick={() => setCurrentPage(3)}>3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
      />

      {/* Complete Navigation Controls with First / Last */}
      <DocsComponent
        title="First & Last Controls"
        description="Include PaginationFirst and PaginationLast buttons to jump directly to the beginning or end of large datasets."
        preview={<PaginationFirstLastDemo />}
        code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationFirst label="First" disabled={currentPage === 1} onClick={() => setCurrentPage(1)} />
    </PaginationItem>
    <PaginationItem>
      <PaginationPrevious disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive>{currentPage}</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLast label="Last" disabled={currentPage === totalPages} onClick={() => setCurrentPage(totalPages)} />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
      />

      {/* Compact Icon-Only Mode */}
      <DocsComponent
        title="Compact Icon-Only Mode"
        description="Pass label='' to hide text labels for a compact icon-driven pagination layout."
        preview={<PaginationCompactDemo />}
        code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationFirst label="" disabled={currentPage === 1} onClick={() => setCurrentPage(1)} />
    </PaginationItem>
    <PaginationItem>
      <PaginationPrevious label="" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive={currentPage === 1} onClick={() => setCurrentPage(1)}>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext label="" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLast label="" disabled={currentPage === totalPages} onClick={() => setCurrentPage(totalPages)} />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Pagination"
        description="Sub-components for composing accessible Pagination controls."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Props</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">Pagination</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">HTMLNavProps</td>
                  <td className="px-3 py-2 text-muted-foreground">Root container with role="navigation".</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">PaginationLink</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">isActive?: boolean, size?: 'sm'|'md'|'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">Interactive page button with active indicator state.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">PaginationFirst / PaginationLast</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">label?: string</td>
                  <td className="px-3 py-2 text-muted-foreground">Buttons to jump directly to page 1 or the last page.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">PaginationPrevious / PaginationNext</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">label?: string</td>
                  <td className="px-3 py-2 text-muted-foreground">Previous and Next page navigation buttons.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
