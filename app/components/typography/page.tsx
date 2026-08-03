"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import { Typography } from "@/components/ui/typography/typography";
import { typographyCode } from "@/components/ui/typography/typography.code";

export default function TypographyComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Typography"
        description="Standardized typographic text hierarchy styles including headings, body paragraphs, lead copy, colors, and inline code elements."
      />

      <ImportSnippet
        importCode={`import { Typography } from "@/components/ui/typography/typography";`}
      />

      <InstallationBlock componentName="typography" />

      <Tabs defaultValue="typography">
        <TabsList background={false}>
          <TabsTrigger
            value="typography"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            typography.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="typography">
          <CodeBlock
            code={typographyCode}
            componentName="typography.tsx"
            description="Core implementation of the Typography component."
            tags={["React", "Typography", "Headings", "Text"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard paragraph text typography element."
        preview={
          <div className="max-w-md w-full">
            <Typography variant="p">
              Bloom UI is an accessible, customizable, and high-performance
              React component library designed with modern aesthetic tokens.
            </Typography>
          </div>
        }
        code={`<Typography variant="p">
  Bloom UI is an accessible, customizable, and high-performance React component library...
</Typography>`}
      />

      {/* Headings Scale (H1-H6) */}
      <DocsComponent
        title="Headings Scale (H1 - H6)"
        description="Typographic hierarchy sizes ranging from H1 to H6 headings."
        preview={
          <div className="space-y-4 w-full">
            <Typography variant="h1">Heading 1 — Display</Typography>
            <Typography variant="h2">Heading 2 — Section Title</Typography>
            <Typography variant="h3">Heading 3 — Subsection Title</Typography>
            <Typography variant="h4">Heading 4 — Card Header</Typography>
            <Typography variant="h5">Heading 5 — Subheading</Typography>
            <Typography variant="h6">Heading 6 — Small Label</Typography>
          </div>
        }
        code={`<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>`}
        props={["variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'"]}
      />

      {/* Colors & Code Format */}
      <DocsComponent
        title="Colors & Code Format"
        description="Color variants and inline code formatting."
        preview={
          <div className="space-y-4 w-full">
            <Typography variant="lead" color="primary">
              Primary colored lead text for highlighting section intros.
            </Typography>
            <Typography variant="p" color="muted">
              Muted body paragraph text for secondary information.
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="p">Install via terminal:</Typography>
              <Typography variant="code">
                npm install @bloom-ui/react
              </Typography>
            </div>
          </div>
        }
        code={`<Typography variant="lead" color="primary">Primary colored text...</Typography>
<Typography variant="p" color="muted">Muted secondary text...</Typography>
<Typography variant="code">npm install @bloom-ui/react</Typography>`}
        props={[
          "color: 'default' | 'muted' | 'primary' | 'secondary' | ...",
          "variant: 'lead' | 'code'",
        ]}
      />

      {/* Line Clamping & Read More Toggle */}
      <DocsComponent
        title="Line Clamping & Read More Toggle"
        description="Clamp long paragraphs to a max line count (e.g. clampLines={2}) and toggle full text with showExpandToggle={true}."
        preview={
          <div className="max-w-md w-full p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <Typography clampLines={2} showExpandToggle variant="p">
              ZoeUI provides a rich collection of modular, accessible components
              designed for modern web applications. Every component adheres
              strictly to dark/light neutral design tokens and provides smooth
              micro-animations, customizable variants, and comprehensive API
              documentation.
            </Typography>
          </div>
        }
        code={`<Typography clampLines={2} showExpandToggle variant="p">
  ZoeUI provides a rich collection of modular, accessible components...
</Typography>`}
        props={["clampLines: number", "showExpandToggle: boolean"]}
      />

      {/* Accessibility & ARIA Section */}
      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Typography"
        description="Supported properties for Typography."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'lead' |
                    'large' | 'small' | 'muted' | 'code'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'p'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Typographic size & HTML tag mapping.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'muted' | 'primary' | 'secondary' | 'accent' |
                    'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Theme color palette of typography text.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    clampLines
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Limits text to specified number of lines with ellipsis.
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
