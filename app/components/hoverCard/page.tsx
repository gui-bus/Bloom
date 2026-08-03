"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import { Button } from "@/components/ui/button/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hoverCard/hoverCard";
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

      <ImportSnippet
        importCode={`import { HoverCard } from "@/components/ui/hoverCard/hoverCard";`}
      />

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
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                    alt="@nextjs"
                  />
                  <AvatarFallback>NX</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Next.js Framework</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    The React Framework for the Web — created and maintained by
                    Vercel.
                  </p>
                  <div className="flex items-center pt-2 text-xs text-zinc-400">
                    <Icon
                      icon="hugeicons:calendar-03"
                      className="mr-1 size-3.5"
                    />
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
                <Button variant="bordered" size="sm">
                  Align Start
                </Button>
              </HoverCardTrigger>
              <HoverCardContent align="start">
                <p className="text-xs">
                  Aligned to the start edge of the trigger element.
                </p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="bordered" size="sm">
                  Align Center
                </Button>
              </HoverCardTrigger>
              <HoverCardContent align="center">
                <p className="text-xs">
                  Aligned to the center of the trigger element.
                </p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="bordered" size="sm">
                  Align End
                </Button>
              </HoverCardTrigger>
              <HoverCardContent align="end">
                <p className="text-xs">
                  Aligned to the end edge of the trigger element.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        }
        code={`<HoverCardContent align="start">...</HoverCardContent>
<HoverCardContent align="center">...</HoverCardContent>
<HoverCardContent align="end">...</HoverCardContent>`}
        props={["align: 'start' | 'center' | 'end'"]}
      />

      {/* Configurable Delays & Collision Detection */}
      <DocsComponent
        title="Configurable Delays & Automatic Collision Flip"
        description="Configure hover open and close timing with 'openDelay' and 'closeDelay', while automatic collision detection flips placement at viewport boundaries."
        preview={
          <div className="flex flex-wrap gap-4">
            <HoverCard openDelay={0} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Button variant="bordered" size="sm">
                  Instant Hover (0ms)
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-xs">Opens instantly with 0ms delay!</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={800} closeDelay={300}>
              <HoverCardTrigger asChild>
                <Button variant="bordered" size="sm">
                  Delayed Hover (800ms)
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-xs">Opened after 800ms hover delay.</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        }
        code={`<HoverCard openDelay={0} closeDelay={100}>
  <HoverCardTrigger asChild>
    <Button>Instant Hover</Button>
  </HoverCardTrigger>
  <HoverCardContent avoidCollisions>...</HoverCardContent>
</HoverCard>`}
        props={[
          "openDelay: number",
          "closeDelay: number",
          "avoidCollisions: boolean",
        ]}
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
                    openDelay
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">200</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Duration in ms to wait before opening on hover.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    closeDelay
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">150</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Duration in ms to wait before closing on mouse leave.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    avoidCollisions
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Prevents card overflow by flipping placement dynamically.
                  </td>
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
