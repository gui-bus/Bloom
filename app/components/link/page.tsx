"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Link } from "@/components/ui/link/link";
import { linkCode } from "@/components/ui/link/link.code";

export default function LinkComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Link"
        description="Accessible navigation hyperlink component built on top of Next.js Link and HTML anchor primitives with variants and external indicators."
      />

      <ImportSnippet
        importCode={`import { Link } from "@/components/ui/link/link";`}
      />

      <InstallationBlock componentName="link" />

      <CodeBlock
        code={linkCode}
        componentName="link.tsx"
        description="Core implementation of the Link component."
        tags={["React", "Next.js", "Link", "Navigation"]}
      />

      <DocsComponent
        title="Default"
        description="Standard primary navigation link."
        preview={
          <div className="flex items-center gap-4">
            <Link href="#">Explore Components</Link>
          </div>
        }
        code={`<Link href="#">Explore Components</Link>`}
      />

      <DocsComponent
        title="Variants"
        description="Visual style variants using the 'variant' prop: 'default', 'muted', 'underline', or 'ghost'."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#" variant="default">
              Default Link
            </Link>
            <Link href="#" variant="muted">
              Muted Link
            </Link>
            <Link href="#" variant="underline">
              Underline Link
            </Link>
            <Link href="#" variant="ghost">
              Ghost Link
            </Link>
          </div>
        }
        code={`<Link href="#" variant="default">Default Link</Link>
<Link href="#" variant="muted">Muted Link</Link>
<Link href="#" variant="underline">Underline Link</Link>
<Link href="#" variant="ghost">Ghost Link</Link>`}
        props={["variant: 'default' | 'muted' | 'underline' | 'ghost'"]}
      />

      <DocsComponent
        title="Sizes"
        description="Typography size scales using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex items-baseline gap-4">
            <Link href="#" size="sm">
              Small Link
            </Link>
            <Link href="#" size="md">
              Medium Link
            </Link>
            <Link href="#" size="lg">
              Large Link
            </Link>
          </div>
        }
        code={`<Link href="#" size="sm">Small Link</Link>
<Link href="#" size="md">Medium Link</Link>
<Link href="#" size="lg">Large Link</Link>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <DocsComponent
        title="External Link Indicator"
        description="Automatically renders an external arrow icon and target='_blank' attributes with the 'isExternal' prop."
        preview={
          <div className="flex items-center gap-4">
            <Link href="https://github.com" isExternal>
              GitHub Repository
            </Link>
          </div>
        }
        code={`<Link href="https://github.com" isExternal>
  GitHub Repository
</Link>`}
        props={["isExternal: boolean"]}
      />

      <DocsComponent
        title="Custom Start & End Content"
        description="Pass custom icons into 'startContent' and 'endContent'."
        preview={
          <div className="flex items-center gap-4">
            <Link
              href="#"
              variant="muted"
              startContent={
                <Icon icon="hugeicons:download-01" className="size-4" />
              }
            >
              Download PDF Docs
            </Link>
          </div>
        }
        code={`<Link href="#" startContent={<Icon icon="hugeicons:download-01" className="size-4" />}>
  Download PDF Docs
</Link>`}
        props={["startContent: ReactNode", "endContent: ReactNode"]}
      />

      <DocsComponent
        title="Props — Link"
        description="Supported properties for the Link component."
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
                  <td className="px-3 py-2 font-mono text-primary">href</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Target URL destination.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'muted' | 'underline' | 'ghost'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual style variant for text and hover effect.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Font size scale.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isExternal
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Opens link in a new tab with security attributes and arrow
                    icon.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    startContent / endContent
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Icons or elements rendered before or after the link text.
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
