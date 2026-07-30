"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hoverCard/hoverCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar/avatar";
import { Button } from "@/components/ui/button/button";
import { hoverCardCode } from "@/components/ui/hoverCard/hoverCard.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function HoverCardComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Hover Card"
        description="For sighted users to preview content available behind a link or trigger when hovered over."
      />

      <ImportSnippet importCode={`import { HoverCard } from "@/components/ui/hoverCard/hoverCard";`} />

      <InstallationBlock componentName="hoverCard" />

      <Tabs defaultValue="hoverCard">
        <TabsList background={false}>
          <TabsTrigger
            value="hoverCard"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            hoverCard.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hoverCard">
          <CodeBlock
            code={hoverCardCode}
            componentName="hoverCard.tsx"
            description="Core implementation of the HoverCard component."
            tags={["React", "Radix UI", "Tailwind", "HoverCard"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="User profile hover preview trigger."
        preview={
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="flat">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex justify-between space-x-4">
                <Avatar size="md">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="@nextjs" />
                  <AvatarFallback>NX</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Next.js Framework</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    The React Framework for the Web — created and maintained by Vercel.
                  </p>
                  <div className="flex items-center pt-2 text-xs text-zinc-400">
                    <Icon icon="hugeicons:calendar-03" className="mr-1 size-3.5" />
                    <span>Joined December 2021</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        }
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="flat">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex justify-between space-x-4">
      <Avatar size="md">
        <AvatarImage src="..." alt="@nextjs" />
        <AvatarFallback>NX</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Next.js Framework</h4>
        <p className="text-xs text-zinc-500">The React Framework for the Web.</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
      />

      {/* Alignments */}
      <DocsComponent
        title="Alignments"
        description="Control popover alignment using the 'align' prop: 'start', 'center', or 'end'."
        preview={
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="bordered" size="sm">Align Start</Button>
              </HoverCardTrigger>
              <HoverCardContent align="start">
                <p className="text-xs">Aligned to the start edge of the trigger element.</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="bordered" size="sm">Align Center</Button>
              </HoverCardTrigger>
              <HoverCardContent align="center">
                <p className="text-xs">Aligned to the center of the trigger element.</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="bordered" size="sm">Align End</Button>
              </HoverCardTrigger>
              <HoverCardContent align="end">
                <p className="text-xs">Aligned to the end edge of the trigger element.</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        }
        code={`<HoverCardContent align="start">...</HoverCardContent>
<HoverCardContent align="center">...</HoverCardContent>
<HoverCardContent align="end">...</HoverCardContent>`}
        props={["align: 'start' | 'center' | 'end'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — HoverCardContent"
        description="Supported properties for HoverCardContent primitive."
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
                  <td className="px-3 py-2 font-mono text-primary">align</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'start' | 'center' | 'end'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'center'</td>
                  <td className="px-3 py-2 text-muted-foreground">Alignment of the content relative to the trigger.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">sideOffset</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">6</td>
                  <td className="px-3 py-2 text-muted-foreground">Pixel distance offset from the trigger button.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">openDelay</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">700</td>
                  <td className="px-3 py-2 text-muted-foreground">Duration in ms to wait before opening on hover.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    
      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
