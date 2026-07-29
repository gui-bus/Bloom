import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Hover Card",
  description: "Expanded card preview component displayed on hover built on Radix UI.",
};

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hoverCard/hoverCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar/avatar";
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
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Hover Card"
        description="For sighted users to preview content available behind a link."
      />

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
            tags={["React", "Radix UI", "Tailwind", "Overlays"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="User profile hover preview."
        preview={
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="font-semibold cursor-pointer underline text-primary">@nextjs</span>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold">Next.js</h4>
                  <p className="text-xs text-muted-foreground">
                    The React Framework for the Web.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        }
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <span>@nextjs</span>
  </HoverCardTrigger>
  <HoverCardContent>
    <div>Next.js Framework</div>
  </HoverCardContent>
</HoverCard>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — HoverCard"
        description="Available primitives for building hover cards."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">HoverCard</td>
                  <td className="px-3 py-2 text-muted-foreground">Root hover card container.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">HoverCardContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Preview card content shown on mouse enter.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
