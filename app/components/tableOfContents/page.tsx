"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import { TableOfContents } from "@/components/ui/tableOfContents/tableOfContents";
import { tableOfContentsCode } from "@/components/ui/tableOfContents/tableOfContents.code";

const sampleItems = [
  { id: "overview", title: "Overview" },
  { id: "installation", title: "Installation & Setup" },
  { id: "usage", title: "Basic Usage" },
  { id: "variants", title: "Visual Variants" },
  { id: "api", title: "API Reference" },
];

export default function TableOfContentsPage() {
  const [activeItem, setActiveItem] = React.useState("usage");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Table Of Contents"
        description="A navigation outline component that automatically highlights active document sections based on viewport scroll position or custom items."
      />

      <ImportSnippet
        importCode={`import { TableOfContents } from "@/components/ui/tableOfContents/tableOfContents";`}
      />

      <InstallationBlock componentName="tableOfContents" />

      <CodeBlock
        code={tableOfContentsCode}
        componentName="tableOfContents.tsx"
        description="TableOfContents component supporting auto-scanning DOM section IDs, IntersectionObserver tracking, and visual variants (default, bordered, flat, cards, pills)."
        tags={["React", "Tailwind", "UI Component", "Navigation", "TOC"]}
      />

      <DocsComponent
        title="Default"
        description="Standard minimal sidebar table of contents with left border accent."
        preview={
          <div className="w-full max-w-xs">
            <TableOfContents
              items={sampleItems}
              activeId={activeItem}
              onItemClick={setActiveItem}
            />
          </div>
        }
        code={`const items = [
  { id: "overview", title: "Overview" },
  { id: "installation", title: "Installation & Setup" },
  { id: "usage", title: "Basic Usage" },
];

<TableOfContents items={items} activeId="usage" />`}
      />

      <DocsComponent
        title="Variants"
        description="Choose from multiple container and item layouts using the 'variant' prop ('default', 'bordered', 'flat', 'cards', 'pills')."
        preview={
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground block">
                variant="bordered"
              </span>
              <TableOfContents
                variant="bordered"
                items={sampleItems}
                activeId={activeItem}
                onItemClick={setActiveItem}
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground block">
                variant="flat"
              </span>
              <TableOfContents
                variant="flat"
                items={sampleItems}
                activeId={activeItem}
                onItemClick={setActiveItem}
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground block">
                variant="cards"
              </span>
              <TableOfContents
                variant="cards"
                items={sampleItems}
                activeId={activeItem}
                onItemClick={setActiveItem}
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground block">
                variant="pills"
              </span>
              <TableOfContents
                variant="pills"
                items={sampleItems}
                activeId={activeItem}
                onItemClick={setActiveItem}
              />
            </div>
          </div>
        }
        code={`<TableOfContents variant="bordered" items={items} activeId="usage" />
<TableOfContents variant="flat" items={items} activeId="usage" />
<TableOfContents variant="cards" items={items} activeId="usage" />
<TableOfContents variant="pills" items={items} activeId="usage" />`}
        props={["variant: 'default' | 'bordered' | 'flat' | 'cards' | 'pills'"]}
      />

      <DocsComponent
        title="Automatic DOM Scanning (autoScan)"
        description="Automatically scan section elements on the page with ID attributes and track active headings as the user scrolls."
        preview={
          <div className="w-full max-w-xs">
            <TableOfContents autoScan title="On this page" />
          </div>
        }
        code={`<TableOfContents autoScan title="On this page" />`}
        props={["autoScan: boolean", "selector?: string"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — TableOfContents"
        description="Supported properties for the TableOfContents component."
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
                  <td className="px-3 py-2 font-mono text-primary">items</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    TOCItem[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom array of title & ID navigation items.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">activeId</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Controlled active item ID.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'flat' | 'cards' | 'pills'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual layout style variant.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">autoScan</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Scans DOM sections and tracks scroll position automatically.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    onItemClick
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    (id: string) =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback triggered when an item is selected.
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
