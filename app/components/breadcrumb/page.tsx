"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb/breadcrumb";
import { breadcrumbCode } from "@/components/ui/breadcrumb/breadcrumb.code";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu/dropdownMenu";
import { Separator } from "@/components/ui/separator/separator";

function BreadcrumbDemo({
  variant,
  separator,
}: {
  variant?: "default" | "bordered" | "flat" | "ghost" | "shadow";
  separator?: React.ReactNode;
}) {
  return (
    <Breadcrumb variant={variant} separator={separator}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default function BreadcrumbDocsPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Breadcrumb"
        description="A navigational helper that reveals the user's location within a website or web application hierarchy. Supports system design variants, custom separators, icons, and auto-collapse."
      />

      <ImportSnippet
        importCode={`import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from "@/components/ui/breadcrumb/breadcrumb";`}
      />

      <InstallationBlock componentName="breadcrumb" />

      <CodeBlock
        code={breadcrumbCode}
        componentName="breadcrumb.tsx"
        description="Breadcrumb trail component supporting system variants, custom separators, icons, and interactive dropdown ellipsis."
        tags={["React", "Tailwind", "UI Component", "Navigation", "Breadcrumb"]}
      />

      <DocsComponent
        title="Default"
        description="A standard breadcrumb navigation path leading to the current active page."
        preview={
          <div className="w-full">
            <BreadcrumbDemo />
          </div>
        }
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      <DocsComponent
        title="Variants"
        description="Breadcrumb follows the system design language: default, bordered, flat, ghost, and shadow — matching the same vocabulary as Button and other components."
        preview={
          <div className="w-full flex flex-col gap-5">
            {(["default", "bordered", "flat", "ghost", "shadow"] as const).map(
              (v) => (
                <div key={v} className="flex flex-col gap-1.5">
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                    variant="{v}"
                  </span>
                  <BreadcrumbDemo variant={v} />
                </div>
              ),
            )}
          </div>
        }
        code={`<Breadcrumb variant="bordered">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'ghost' | 'shadow'",
        ]}
      />

      <DocsComponent
        title="Custom Separator"
        description="Pass any ReactNode to 'separator' on the root Breadcrumb — use an icon component or a plain string like '/' or '·'. The separator flows to all BreadcrumbSeparator children automatically."
        preview={
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                separator="/"
              </span>
              <BreadcrumbDemo separator="/" />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                separator="·"
              </span>
              <BreadcrumbDemo separator="·" />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                separator="-"
              </span>
              <BreadcrumbDemo separator="-" />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                separator={`<Icon icon="hugeicons:arrow-right-01" />`}
              </span>
              <BreadcrumbDemo
                separator={
                  <Icon icon="hugeicons:arrow-right-01" className="size-3.5" />
                }
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                separator={`<Icon icon="hugeicons:arrow-right-02" />`}
              </span>
              <BreadcrumbDemo
                separator={
                  <Icon icon="hugeicons:arrow-right-02" className="size-3.5" />
                }
              />
            </div>
          </div>
        }
        code={`{/* Text separator */}
<Breadcrumb separator="/">
  ...
</Breadcrumb>

{/* Icon separator */}
<Breadcrumb separator={<Icon icon="hugeicons:chevron-right" className="size-3.5" />}>
  ...
</Breadcrumb>`}
        props={["separator: ReactNode"]}
      />

      <DocsComponent
        title="With Icons"
        description="Pass icon names to BreadcrumbLink and BreadcrumbPage for enhanced visual cues."
        preview={
          <div className="w-full">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" icon="hugeicons:home-01">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" icon="hugeicons:grid-view">
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
          </div>
        }
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#" icon="hugeicons:home-01">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#" icon="hugeicons:grid-view">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage icon="hugeicons:navigation-01">Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        props={["icon: string"]}
      />

      <DocsComponent
        title="Collapsed Items with Dropdown Menu"
        description="Clicking the BreadcrumbEllipsis trigger opens a DropdownMenu containing hidden route items without shifting page layout."
        preview={
          <div className="w-full">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <BreadcrumbEllipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      <DropdownMenuItem>
                        <Icon
                          icon="hugeicons:book-open-01"
                          className="mr-2 size-4"
                        />
                        <span>Documentation</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon
                          icon="hugeicons:grid-view"
                          className="mr-2 size-4"
                        />
                        <span>All Components</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon
                          icon="hugeicons:color-picker"
                          className="mr-2 size-4"
                        />
                        <span>Theme Customizer</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        }
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <BreadcrumbEllipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Documentation</DropdownMenuItem>
          <DropdownMenuItem>All Components</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      <DocsComponent
        title="Automatic Middle Collapse"
        description="Set 'maxItems' on BreadcrumbList to automatically collapse middle steps into a popover when paths exceed limit."
        preview={
          <div className="w-full">
            <Breadcrumb>
              <BreadcrumbList maxItems={3}>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">UI Library</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        }
        code={`<Breadcrumb>
  <BreadcrumbList maxItems={3}>
    <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="#">Docs</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        props={["maxItems: number"]}
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
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Component
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Props
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    Breadcrumb
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    variant?: 'default' | 'bordered' | 'flat' | 'ghost' |
                    'shadow'
                    <br />
                    separator?: ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Root container. Variant and separator context flows to all
                    sub-components.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    BreadcrumbList
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    maxItems?: number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Ordered list with optional auto-collapse when exceeding
                    maxItems.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    BreadcrumbLink
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    icon?: string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Interactive link with optional icon. Styled per variant.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    BreadcrumbPage
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    icon?: string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Active page with aria-current="page". Styled per variant.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    BreadcrumbSeparator
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    children?: ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Uses root separator by default. Pass children to override
                    locally.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    BreadcrumbEllipsis
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    HTMLButtonProps
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Button trigger for opening DropdownMenu hidden routes.
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
