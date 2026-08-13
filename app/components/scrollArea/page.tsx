"use client";

import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { ScrollArea } from "@/components/ui/scrollArea/scrollArea";
import { scrollAreaCode } from "@/components/ui/scrollArea/scrollArea.code";
import { Separator } from "@/components/ui/separator/separator";

const tags = [
  "v1.0.0",
  "React 19",
  "Next.js 16",
  "Tailwind CSS v4",
  "Radix UI",
  "TypeScript",
  "Iconify",
  "Design System",
  "UI Components",
  "Accessibility",
  "Dark Mode",
];

export default function ScrollAreaComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Scroll Area"
        description="Augments native scroll functionality with custom cross-browser styled scrollbars built on Radix UI primitives."
      />

      <ImportSnippet
        importCode={`import { ScrollArea } from "@/components/ui/scrollArea/scrollArea";`}
      />

      <InstallationBlock componentName="scrollArea" />

      <CodeBlock
        code={scrollAreaCode}
        componentName="scrollArea.tsx"
        description="Core implementation of the ScrollArea component."
        tags={["React", "Radix UI", "ScrollArea", "Layout"]}
      />

      <DocsComponent
        title="Default"
        description="Vertical scrollable list container."
        preview={
          <ScrollArea className="h-60 w-72 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-xs">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Changelog Items
              </h4>
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="text-xs text-zinc-700 dark:text-zinc-300 pb-2 border-b border-zinc-100 dark:border-zinc-800/60 last:border-0"
                >
                  Release v1.2.{i + 1} — Updated UI design system component
                  tokens.
                </div>
              ))}
            </div>
          </ScrollArea>
        }
        code={`<ScrollArea className="h-60 w-72 border rounded-2xl p-4">
  {items.map(item => (
    <div key={item.id}>{item.title}</div>
  ))}
</ScrollArea>`}
      />

      <DocsComponent
        title="Horizontal Scrolling"
        description="Horizontal scroll container using orientation='horizontal'."
        preview={
          <ScrollArea
            orientation="horizontal"
            className="w-full max-w-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-xs"
          >
            <div className="flex gap-3 pb-3">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-900 dark:text-zinc-100 shrink-0 border border-zinc-200 dark:border-zinc-700"
                >
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
        }
        code={`<ScrollArea orientation="horizontal" className="w-full max-w-lg border rounded-2xl p-4">
  <div className="flex gap-3">
    {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
  </div>
</ScrollArea>`}
        props={["orientation: 'vertical' | 'horizontal' | 'both'"]}
      />

      <DocsComponent
        title="Floating Action Scroll Buttons"
        description="Enable floating scroll-to-top and scroll-to-bottom action buttons on hover with 'showScrollButtons'."
        preview={
          <ScrollArea
            showScrollButtons
            className="h-60 w-80 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-xs"
          >
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-500">
                Long Document
              </h4>
              {Array.from({ length: 20 }).map((_, i) => (
                <p key={i} className="text-xs text-zinc-600 dark:text-zinc-400">
                  Item {i + 1}: Hover over this container to see the floating
                  scroll-to-top and scroll-to-bottom action buttons.
                </p>
              ))}
            </div>
          </ScrollArea>
        }
        code={`<ScrollArea showScrollButtons className="h-60 w-80 border rounded-2xl p-4">
  {content}
</ScrollArea>`}
        props={["showScrollButtons: boolean"]}
      />

      <DocsComponent
        title="Scroll Progress Bar"
        description="Display a top progress indicator bar showing current scroll percentage with 'showProgressBar'."
        preview={
          <ScrollArea
            showProgressBar
            className="h-60 w-80 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-xs"
          >
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                Reading Progress
              </h4>
              {Array.from({ length: 20 }).map((_, i) => (
                <p key={i} className="text-xs text-zinc-600 dark:text-zinc-400">
                  Paragraph {i + 1}: Scroll down to watch the top progress bar
                  dynamically fill.
                </p>
              ))}
            </div>
          </ScrollArea>
        }
        code={`<ScrollArea showProgressBar className="h-60 w-80 border rounded-2xl p-4">
  {content}
</ScrollArea>`}
        props={["showProgressBar: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — ScrollArea"
        description="Supported properties for ScrollArea."
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
                    showScrollButtons
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays floating scroll-to-top / scroll-to-bottom action
                    buttons on hover.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showProgressBar
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays top scroll progress indicator line.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    orientation
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'vertical' | 'horizontal' | 'both'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    'vertical'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Scroll direction layout and scrollbar visibility.
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
