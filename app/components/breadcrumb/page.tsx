import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb/breadcrumb";
import { breadcrumbCode } from "@/components/ui/breadcrumb/breadcrumb.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export const metadata: Metadata = {
  title: "Breadcrumb",
  description: "Displays the path to the current resource using a hierarchy of links.",
};

export default function BreadcrumbDocsPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Breadcrumb"
        description="A navigational helper that reveals the user's location within a website or web application."
      />

      <Tabs defaultValue="breadcrumb">
        <TabsList background={false}>
          <TabsTrigger
            value="breadcrumb"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            breadcrumb.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="breadcrumb">
          <CodeBlock
            code={breadcrumbCode}
            componentName="breadcrumb.tsx"
            description="Breadcrumb trail component supporting custom separators, page indicators, and ellipsis."
            tags={["React", "Tailwind", "UI Component", "Navigation", "Breadcrumb"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Breadcrumb */}
      <DocsComponent
        title="Basic Usage"
        description="Standard breadcrumb navigation path leading to the active page."
        preview={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components/button">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components/button">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      {/* Custom Separator */}
      <DocsComponent
        title="Custom Separators"
        description="Pass custom icons or slash characters into BreadcrumbSeparator."
        preview={
          <div className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>API</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Icon icon="hugeicons:arrow-right-02" className="size-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Icon icon="hugeicons:arrow-right-02" className="size-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Security</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        }
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>/</BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Docs</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      {/* Collapsed Ellipsis */}
      <DocsComponent
        title="Collapsed Items with Ellipsis"
        description="Use BreadcrumbEllipsis to compress long paths while retaining navigation context."
        preview={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Breadcrumb"
        description="Sub-components for building accessible Breadcrumb trails."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">HTML Element</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">Breadcrumb</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">&lt;nav&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Root container with aria-label="breadcrumb".
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">BreadcrumbList</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">&lt;ol&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Ordered list container for breadcrumb items.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">BreadcrumbItem</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">&lt;li&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Wrapper item for a breadcrumb segment.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">BreadcrumbLink</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">&lt;a&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Interactive link for navigating up the hierarchy.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">BreadcrumbPage</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">&lt;span&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Active page indicator with aria-current="page".
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">BreadcrumbSeparator</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">&lt;li&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual divider icon or element between items.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
