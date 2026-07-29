import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Separator",
  description: "Visually or semantically separates content in horizontal or vertical orientation.",
};
import { Separator } from "@/components/ui/separator/separator";
import { separatorCode } from "@/components/ui/separator/separator.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SeparatorPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Separator"
        description="Visually or semantically separates content in a layout. Supports horizontal and vertical orientation, color themes, gradients, and custom center labels."
      />

      <Tabs defaultValue="separator">
        <TabsList background={false}>
          <TabsTrigger
            value="separator"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            separator.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="separator">
          <CodeBlock
            code={separatorCode}
            componentName="separator.tsx"
            description="Separator component built on Radix UI primitive with support for orientation, gradients, labels, and color tokens."
            tags={["React", "Tailwind", "Radix UI", "UI Component"]}
          />
        </TabsContent>
      </Tabs>

      {/* Orientation */}
      <DocsComponent
        title="Orientation"
        description="Supports both horizontal (default) and vertical dividers."
        preview={
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">Horizontal</p>
              <Separator />
            </div>
            <div className="flex items-center gap-4 h-8 text-sm">
              <span>Blog</span>
              <Separator orientation="vertical" />
              <span>Docs</span>
              <Separator orientation="vertical" />
              <span>Source</span>
            </div>
          </div>
        }
        code={`<div className="space-y-6">
  <div className="space-y-2">
    <p className="text-sm font-medium">Horizontal</p>
    <Separator />
  </div>
  <div className="flex items-center gap-4 h-8 text-sm">
    <span>Blog</span>
    <Separator orientation="vertical" />
    <span>Docs</span>
    <Separator orientation="vertical" />
    <span>Source</span>
  </div>
</div>`}
        props={["orientation: 'horizontal' | 'vertical'"]}
      />

      {/* With Label */}
      <DocsComponent
        title="With Label"
        description="Pass a text or custom node to the 'label' prop to render a centered divider label."
        preview={
          <div className="space-y-6 max-w-md">
            <Separator label="Or continue with" />
            <Separator label="Section Divider" gradient />
          </div>
        }
        code={`<div className="space-y-6 max-w-md">
  <Separator label="Or continue with" />
  <Separator label="Section Divider" gradient />
</div>`}
        props={["label: ReactNode"]}
      />

      {/* Gradients */}
      <DocsComponent
        title="Gradient"
        description="Renders a smooth fade-in/out gradient divider line when 'gradient' is true."
        preview={
          <div className="space-y-6 max-w-md">
            <Separator gradient />
            <Separator gradient color="primary" />
            <Separator gradient color="secondary" />
          </div>
        }
        code={`<div className="space-y-6 max-w-md">
  <Separator gradient />
  <Separator gradient color="primary" />
  <Separator gradient color="secondary" />
</div>`}
        props={["gradient: boolean"]}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Applies color themes from the design system tokens."
        preview={
          <div className="space-y-4 max-w-md">
            <Separator color="default" />
            <Separator color="primary" />
            <Separator color="secondary" />
            <Separator color="accent" />
            <Separator color="success" />
            <Separator color="warning" />
            <Separator color="danger" />
          </div>
        }
        code={`<div className="space-y-4 max-w-md">
  <Separator color="default" />
  <Separator color="primary" />
  <Separator color="secondary" />
  <Separator color="accent" />
  <Separator color="success" />
  <Separator color="warning" />
  <Separator color="danger" />
</div>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Separator"
        description="Properties for configuring the Separator component."
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
                  <td className="px-3 py-2 font-mono text-primary">orientation</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'horizontal' | 'vertical'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'horizontal'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets the orientation of the separator line.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets the color palette of the line.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">gradient</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Fades the line ends using a CSS linear gradient.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders a centered text or node label (horizontal orientation only).
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">decorative</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    When true, hides the separator from screen readers.
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
