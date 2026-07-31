"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { VirtualizedList } from "@/components/ui/virtualizedList/virtualizedList";
import { virtualizedListCode } from "@/components/ui/virtualizedList/virtualizedList.code";
import { Separator } from "@/components/ui/separator/separator";
import { Badge } from "@/components/ui/badge/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  label: `Item ${i + 1}`,
}));

const userDataset = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? "Admin" : i % 3 === 1 ? "Editor" : "Viewer",
}));

export default function VirtualizedListPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Virtualized List"
        description="A high-performance scrollable list that renders only visible items, supporting tens of thousands of rows at 60 FPS with minimal memory footprint."
      />

      <ImportSnippet importCode={`import { VirtualizedList } from "@/components/ui/virtualizedList/virtualizedList";`} />

      <InstallationBlock componentName="virtualizedList" />

      <Tabs defaultValue="virtualizedList">
        <TabsList background={false}>
          <TabsTrigger
            value="virtualizedList"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            virtualizedList.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="virtualizedList">
          <CodeBlock
            code={virtualizedListCode}
            componentName="virtualizedList.tsx"
            description="Virtualized scroll container rendering only visible items for high-performance lists."
            tags={["React", "Tailwind", "UI Component", "Performance", "Virtualization"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="A list of 10,000 items rendered with smooth scrolling. Only visible rows are mounted in the DOM."
        preview={
          <div className="w-full max-w-lg">
            <p className="text-xs text-zinc-400 mb-2 font-mono">10,000 items — scroll to test</p>
            <VirtualizedList
              items={largeDataset}
              itemHeight={40}
              height={320}
              renderItem={(item: { id: number; label: string }) => (
                <div className="flex items-center px-4 h-full text-sm text-zinc-700 dark:text-zinc-300 border-b border-zinc-100 dark:border-zinc-800/50">
                  <span className="font-mono text-xs text-zinc-400 w-16">#{item.id + 1}</span>
                  <span>{item.label}</span>
                </div>
              )}
            />
          </div>
        }
        code={`const items = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  label: \`Item \${i + 1}\`,
}));

<VirtualizedList
  items={items}
  itemHeight={40}
  height={320}
  renderItem={(item) => (
    <div className="flex items-center px-4 h-full text-sm border-b border-zinc-100 dark:border-zinc-800/50">
      <span className="font-mono text-xs text-zinc-400 w-16">#{item.id + 1}</span>
      <span>{item.label}</span>
    </div>
  )}
/>`}
      />

      {/* Custom Render */}
      <DocsComponent
        title="Custom Render"
        description="Use the renderItem prop to display complex row layouts with icons, badges, and metadata."
        preview={
          <div className="w-full max-w-lg">
            <p className="text-xs text-zinc-400 mb-2 font-mono">5,000 users</p>
            <VirtualizedList
              items={userDataset}
              itemHeight={56}
              height={336}
              renderItem={(item: { id: number; name: string; email: string; role: string }) => (
                <div className="flex items-center gap-3 px-4 h-full border-b border-zinc-100 dark:border-zinc-800/50">
                  <div className="flex items-center justify-center size-8 rounded-full bg-sky-500/10 text-sky-500 text-xs font-bold shrink-0">
                    {item.name.charAt(5)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-zinc-400 truncate">{item.email}</p>
                  </div>
                  <Badge
                    color={item.role === "Admin" ? "danger" : item.role === "Editor" ? "primary" : "default"}
                    variant="flat"
                    size="sm"
                  >
                    {item.role}
                  </Badge>
                </div>
              )}
            />
          </div>
        }
        code={`const users = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: \`User \${i + 1}\`,
  email: \`user\${i + 1}@example.com\`,
  role: i % 3 === 0 ? "Admin" : i % 3 === 1 ? "Editor" : "Viewer",
}));

<VirtualizedList
  items={users}
  itemHeight={56}
  height={336}
  renderItem={(item) => (
    <div className="flex items-center gap-3 px-4 h-full border-b">
      <Avatar>{item.name.charAt(5)}</Avatar>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{item.name}</p>
        <p className="text-xs text-zinc-400 truncate">{item.email}</p>
      </div>
      <Badge color={item.role === "Admin" ? "danger" : "default"}>{item.role}</Badge>
    </div>
  )}
/>`}
      />

      {/* Dynamic Item Height */}
      <DocsComponent
        title="Dynamic Item Height Calculation"
        description="Calculate varying row heights dynamically using getItemHeight={(item, index) => number}."
        preview={
          <div className="w-full max-w-lg">
            <VirtualizedList
              items={largeDataset.slice(0, 100)}
              getItemHeight={(_, index) => (index % 2 === 0 ? 44 : 64)}
              height={300}
              renderItem={(item: { id: number; label: string }, index) => (
                <div
                  className={`flex items-center px-4 h-full border-b border-zinc-100 dark:border-zinc-800/50 ${
                    index % 2 === 0 ? "bg-zinc-50/50 dark:bg-zinc-850/40" : "bg-white dark:bg-zinc-900"
                  }`}
                >
                  <span className="font-mono text-xs text-zinc-400 w-24">Row #{index + 1}</span>
                  <span className="text-xs text-zinc-700 dark:text-zinc-300">
                    {index % 2 === 0 ? "Compact Row (44px)" : "Expanded Tall Row (64px)"}
                  </span>
                </div>
              )}
            />
          </div>
        }
        code={`<VirtualizedList
  items={items}
  getItemHeight={(item, index) => (index % 2 === 0 ? 44 : 64)}
  height={300}
  renderItem={renderRow}
/>`}
        props={["getItemHeight: (item, index) => number"]}
      />

      {/* Scroll to Index Helper */}
      <DocsComponent
        title="Scroll to Index Method"
        description="Imperatively jump to any item index in the virtualized list using listRef.current.scrollToIndex(index)."
        preview={
          <div className="w-full max-w-lg space-y-3">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => (window as any).__listRef?.scrollToIndex(0)}
                className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              >
                Jump to #1
              </button>
              <button
                type="button"
                onClick={() => (window as any).__listRef?.scrollToIndex(500)}
                className="px-3 py-1.5 rounded-lg bg-sky-500 text-white text-xs font-semibold hover:bg-sky-600"
              >
                Jump to #501
              </button>
              <button
                type="button"
                onClick={() => (window as any).__listRef?.scrollToIndex(9999)}
                className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              >
                Jump to Bottom (#10000)
              </button>
            </div>

            <VirtualizedList
              ref={(ref) => {
                if (typeof window !== "undefined") (window as any).__listRef = ref;
              }}
              items={largeDataset}
              itemHeight={40}
              height={280}
              renderItem={(item: { id: number; label: string }) => (
                <div className="flex items-center px-4 h-full text-sm text-zinc-700 dark:text-zinc-300 border-b border-zinc-100 dark:border-zinc-800/50">
                  <span className="font-mono text-xs text-sky-500 font-bold w-20">#{item.id + 1}</span>
                  <span>{item.label}</span>
                </div>
              )}
            />
          </div>
        }
        code={`const listRef = useRef<VirtualizedListRef>(null);

<button onClick={() => listRef.current?.scrollToIndex(500)}>
  Jump to #501
</button>

<VirtualizedList ref={listRef} items={largeDataset} height={280} />`}
        props={["scrollToIndex: (index: number) => void (via ref)"]}
      />

      {/* Infinite Scroll Trigger */}
      <DocsComponent
        title="Infinite Scroll Loading (onEndReached)"
        description="Automatically trigger data fetching when scrolling near bottom threshold with onEndReached."
        preview={
          <div className="w-full max-w-lg">
            <VirtualizedList
              items={largeDataset.slice(0, 50)}
              itemHeight={40}
              height={260}
              onEndReached={() => console.log("End reached! Fetching more items...")}
              renderItem={(item: { id: number; label: string }) => (
                <div className="flex items-center px-4 h-full text-sm text-zinc-700 dark:text-zinc-300 border-b border-zinc-100 dark:border-zinc-800/50">
                  <span className="font-mono text-xs text-zinc-400 w-16">#{item.id + 1}</span>
                  <span>{item.label}</span>
                </div>
              )}
            />
          </div>
        }
        code={`<VirtualizedList
  items={items}
  itemHeight={40}
  height={260}
  onEndReached={() => fetchNextPage()}
/>`}
        props={["onEndReached: () => void", "endReachedThreshold?: number"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Prop</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Type</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Default</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">items</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">T[]</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Array of data items to render.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">itemHeight</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">number</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Fixed height in pixels for each row.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">height</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">number</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Container height in pixels.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">renderItem</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">(item: T, index: number) =&gt; ReactNode</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Render function for each row.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">overscan</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">number</td><td className="px-4 py-3 text-zinc-400">5</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Extra items rendered above/below viewport for smooth scrolling.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">className</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Additional CSS classes for the container.</td></tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
