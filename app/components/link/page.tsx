import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Link",
  description: "Stylized link component supporting internal Next.js routing, external links, variants, and icon slots.",
};

import { Link } from "@/components/ui/link/link";
import { linkCode } from "@/components/ui/link/link.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function LinkComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Link"
        description="A navigation link component integrating Next.js Link routing, automatic external indicators, visual style variants, and icon slots."
      />

      <Tabs defaultValue="link">
        <TabsList background={false}>
          <TabsTrigger
            value="link"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            link.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="link">
          <CodeBlock
            code={linkCode}
            componentName="link.tsx"
            description="Core implementation of the Link component."
            tags={["React", "Next.js", "Tailwind", "Navigation"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Internal and external navigation links."
        preview={
          <div className="flex flex-col gap-3">
            <Link href="/components/button">Go to Button docs</Link>
            <Link href="https://github.com/gui-bus/Bloom" isExternal>
              GitHub Repository
            </Link>
          </div>
        }
        code={`<div className="flex flex-col gap-3">
  <Link href="/components/button">Go to Button docs</Link>
  <Link href="https://github.com/gui-bus/Bloom" isExternal>
    GitHub Repository
  </Link>
</div>`}
      />

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Default, muted, underline, and ghost visual styles."
        preview={
          <div className="flex flex-wrap gap-4 items-center">
            <Link variant="default" href="#">Default Link</Link>
            <Link variant="muted" href="#">Muted Link</Link>
            <Link variant="underline" href="#">Underline Link</Link>
            <Link variant="ghost" href="#">Ghost Link</Link>
          </div>
        }
        code={`<div className="flex flex-wrap gap-4 items-center">
  <Link variant="default" href="#">Default Link</Link>
  <Link variant="muted" href="#">Muted Link</Link>
  <Link variant="underline" href="#">Underline Link</Link>
  <Link variant="ghost" href="#">Ghost Link</Link>
</div>`}
        props={["variant: 'default' | 'muted' | 'underline' | 'ghost'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Link"
        description="Properties to configure the Link component."
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
                  <td className="px-3 py-2 font-mono text-primary">href</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Target URL path or external web link.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isExternal</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Opens link in new tab with external icon indicator.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
