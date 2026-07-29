import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Typography",
  description: "Standardized text styling component supporting semantic text elements, custom tags, and color variants.",
};

import { Typography } from "@/components/ui/typography/typography";
import { typographyCode } from "@/components/ui/typography/typography.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function TypographyComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Typography"
        description="Standardized typographic scale and text styling component. Supports HTML heading hierarchy (h1–h6), body text, leads, muted captions, code snippets, and color themes."
      />

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
            description="Core implementation of the Typography component with variant mapping and polymorphic element support."
            tags={["React", "Tailwind", "UI Component", "Typography"]}
          />
        </TabsContent>
      </Tabs>

      {/* Headings */}
      <DocsComponent
        title="Headings"
        description="Use variant h1 through h6 for semantic section headers."
        preview={
          <div className="space-y-3 w-full">
            <Typography variant="h1">Heading 1 (h1)</Typography>
            <Typography variant="h2">Heading 2 (h2)</Typography>
            <Typography variant="h3">Heading 3 (h3)</Typography>
            <Typography variant="h4">Heading 4 (h4)</Typography>
            <Typography variant="h5">Heading 5 (h5)</Typography>
            <Typography variant="h6">Heading 6 (h6)</Typography>
          </div>
        }
        code={`<div className="space-y-3 w-full">
  <Typography variant="h1">Heading 1 (h1)</Typography>
  <Typography variant="h2">Heading 2 (h2)</Typography>
  <Typography variant="h3">Heading 3 (h3)</Typography>
  <Typography variant="h4">Heading 4 (h4)</Typography>
  <Typography variant="h5">Heading 5 (h5)</Typography>
  <Typography variant="h6">Heading 6 (h6)</Typography>
</div>`}
        props={["variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'"]}
      />

      {/* Body & Text Variants */}
      <DocsComponent
        title="Text Variants"
        description="Paragraphs, lead copy, large text, small text, muted text, and inline code."
        preview={
          <div className="space-y-4 w-full">
            <Typography variant="lead">
              A prominent lead paragraph for introducing key sections or articles.
            </Typography>
            <Typography variant="p">
              Standard body text for long-form narrative content. Bloom UI provides responsive design tokens, accessible contrast, and harmonized typography.
            </Typography>
            <Typography variant="large">
              Large emphasis text for highlights.
            </Typography>
            <Typography variant="small">
              Small caption text for auxiliary metadata.
            </Typography>
            <Typography variant="muted">
              Muted text style for subtle secondary information.
            </Typography>
            <div>
              <Typography variant="p">
                Execute <Typography variant="code">pnpm test:unit</Typography> to run component test suites.
              </Typography>
            </div>
          </div>
        }
        code={`<div className="space-y-4 w-full">
  <Typography variant="lead">
    A prominent lead paragraph for introducing key sections or articles.
  </Typography>
  <Typography variant="p">
    Standard body text for long-form narrative content. Bloom UI provides responsive design tokens, accessible contrast, and harmonized typography.
  </Typography>
  <Typography variant="large">
    Large emphasis text for highlights.
  </Typography>
  <Typography variant="small">
    Small caption text for auxiliary metadata.
  </Typography>
  <Typography variant="muted">
    Muted text style for subtle secondary information.
  </Typography>
  <div>
    <Typography variant="p">
      Execute <Typography variant="code">pnpm test:unit</Typography> to run component test suites.
    </Typography>
  </div>
</div>`}
        props={["variant: 'p' | 'lead' | 'large' | 'small' | 'muted' | 'code'"]}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Semantic colors applied directly to text."
        preview={
          <div className="flex flex-wrap gap-4 items-center">
            <Typography color="default">Default</Typography>
            <Typography color="muted">Muted</Typography>
            <Typography color="primary">Primary</Typography>
            <Typography color="secondary">Secondary</Typography>
            <Typography color="accent">Accent</Typography>
            <Typography color="success">Success</Typography>
            <Typography color="warning">Warning</Typography>
            <Typography color="danger">Danger</Typography>
          </div>
        }
        code={`<div className="flex flex-wrap gap-4 items-center">
  <Typography color="default">Default</Typography>
  <Typography color="muted">Muted</Typography>
  <Typography color="primary">Primary</Typography>
  <Typography color="secondary">Secondary</Typography>
  <Typography color="accent">Accent</Typography>
  <Typography color="success">Success</Typography>
  <Typography color="warning">Warning</Typography>
  <Typography color="danger">Danger</Typography>
</div>`}
        props={["color: 'default' | 'muted' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Typography"
        description="Properties to configure the Typography component."
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
                    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'lead' | 'large' | 'small' | 'muted' | 'code'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'p'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual typographic style and default HTML tag.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'muted' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Semantic color theme of the text.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">as</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ElementType</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Override the rendered underlying HTML element tag while preserving typography styles.
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
