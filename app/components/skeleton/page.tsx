"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Skeleton } from "@/components/ui/skeleton/skeleton";
import { skeletonCode } from "@/components/ui/skeleton/skeleton.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SkeletonComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Skeleton"
        description="Renders subtle animated pulse loading placeholders while data or media content is fetching."
      />

      <InstallationBlock componentName="skeleton" />

      <Tabs defaultValue="skeleton">
        <TabsList background={false}>
          <TabsTrigger
            value="skeleton"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            skeleton.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="skeleton">
          <CodeBlock
            code={skeletonCode}
            componentName="skeleton.tsx"
            description="Core implementation of the Skeleton component."
            tags={["React", "Skeleton", "Loading", "Placeholder"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard skeleton card loading placeholder."
        preview={
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 max-w-sm w-full shadow-xs">
            <Skeleton variant="circle" className="size-12" />
            <div className="space-y-2 flex-1">
              <Skeleton variant="text" className="w-3/4 h-4" />
              <Skeleton variant="text" className="w-1/2 h-3" />
            </div>
          </div>
        }
        code={`<div className="flex items-center gap-4 p-4 border rounded-2xl">
  <Skeleton variant="circle" className="size-12" />
  <div className="space-y-2 flex-1">
    <Skeleton variant="text" className="w-3/4 h-4" />
    <Skeleton variant="text" className="w-1/2 h-3" />
  </div>
</div>`}
      />

      {/* Media Card Placeholder */}
      <DocsComponent
        title="Media Card Placeholder"
        description="Complex UI card skeleton preview structure."
        preview={
          <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 max-w-sm w-full space-y-3 shadow-xs">
            <Skeleton variant="rectangle" className="w-full h-36 rounded-xl" />
            <Skeleton variant="text" className="w-4/5 h-4" />
            <Skeleton variant="text" className="w-full h-3" />
            <Skeleton variant="text" className="w-2/3 h-3" />
          </div>
        }
        code={`<div className="p-4 border rounded-2xl space-y-3">
  <Skeleton variant="rectangle" className="w-full h-36 rounded-xl" />
  <Skeleton variant="text" className="w-4/5 h-4" />
  <Skeleton variant="text" className="w-full h-3" />
</div>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Skeleton"
        description="Supported properties for Skeleton."
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
                    'circle' | 'rectangle' | 'text'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'rectangle'</td>
                  <td className="px-3 py-2 text-muted-foreground">Shape layout of the loading placeholder.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    keyof typeof designRadius
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">Border radius style variant.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isLoaded</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">When true, replaces skeleton with real children.</td>
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
