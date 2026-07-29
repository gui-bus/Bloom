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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdownMenu/dropdownMenu";
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
            description="Breadcrumb trail component supporting icons, custom separators, and interactive dropdown ellipsis."
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

      {/* With Icons */}
      <DocsComponent
        title="With Icons"
        description="Pass icon names to BreadcrumbLink and BreadcrumbPage for enhanced visual cues."
        preview={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" icon="hugeicons:home-01">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components/button" icon="hugeicons:grid-view">
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage icon="hugeicons:navigation-01">
                  Breadcrumb
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" icon="hugeicons:home-01">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components" icon="hugeicons:grid-view">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage icon="hugeicons:navigation-01">Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        props={["icon: string"]}
      />

      {/* Collapsed Ellipsis with Dropdown Menu */}
      <DocsComponent
        title="Collapsed Items with Interactive Dropdown Menu"
        description="Clicking the BreadcrumbEllipsis trigger opens our DropdownMenu popover containing hidden route items."
        preview={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <BreadcrumbEllipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                      <a href="/docs">Documentation</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="/components">All Components</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="/themes">Theme Customizer</a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <BreadcrumbEllipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem asChild>
            <a href="/docs">Documentation</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/components">All Components</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Props</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">Breadcrumb</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">HTMLNavProps</td>
                  <td className="px-3 py-2 text-muted-foreground">Root container with aria-label="breadcrumb".</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">BreadcrumbLink</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">icon?: string</td>
                  <td className="px-3 py-2 text-muted-foreground">Interactive link with optional icon.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">BreadcrumbPage</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">icon?: string</td>
                  <td className="px-3 py-2 text-muted-foreground">Active page with aria-current="page".</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">BreadcrumbEllipsis</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">HTMLButtonProps</td>
                  <td className="px-3 py-2 text-muted-foreground">Button trigger for opening DropdownMenu hidden routes.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
