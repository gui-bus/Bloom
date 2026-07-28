import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Spinner } from "@/components/ui/spinner/spinner";
import { spinnerCode } from "@/components/ui/spinner/spinner.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SpinnerPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Spinner / Loader"
        description="Circular and animated loading indicators with multiple visual variants used to provide immediate feedback during asynchronous actions."
      />

      <Tabs defaultValue="spinner">
        <TabsList background={false}>
          <TabsTrigger
            value="spinner"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            spinner.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="spinner">
          <CodeBlock
            code={spinnerCode}
            componentName="spinner.tsx"
            description="Spinner component supporting multiple variants, sizes, colors, text labels, and full accessibility."
            tags={["React", "Tailwind", "UI Component", "Loading"]}
          />
        </TabsContent>
      </Tabs>

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Choose from 6 animation styles: 'default', 'dots', 'bars', 'pulse', 'ring', or 'gradient'."
        preview={
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="default" size="lg" />
              <span className="text-xs text-muted-foreground">Default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="dots" size="lg" />
              <span className="text-xs text-muted-foreground">Dots</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="bars" size="lg" />
              <span className="text-xs text-muted-foreground">Bars</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="pulse" size="lg" />
              <span className="text-xs text-muted-foreground">Pulse</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="ring" size="lg" />
              <span className="text-xs text-muted-foreground">Ring</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="gradient" size="lg" />
              <span className="text-xs text-muted-foreground">Gradient</span>
            </div>
          </div>
        }
        code={`<div className="flex gap-6 items-center">
  <Spinner variant="default" />
  <Spinner variant="dots" />
  <Spinner variant="bars" />
  <Spinner variant="pulse" />
  <Spinner variant="ring" />
  <Spinner variant="gradient" />
</div>`}
        props={["variant: 'default' | 'dots' | 'bars' | 'pulse' | 'ring' | 'gradient'"]}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Customize the spinner color theme using the 'color' prop across any variant."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <Spinner color="default" />
            <Spinner color="primary" />
            <Spinner color="secondary" />
            <Spinner color="accent" />
            <Spinner color="success" />
            <Spinner color="warning" />
            <Spinner color="danger" />
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-6">
  <Spinner color="default" />
  <Spinner color="primary" />
  <Spinner color="secondary" />
  <Spinner color="accent" />
  <Spinner color="success" />
  <Spinner color="warning" />
  <Spinner color="danger" />
</div>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Scale the spinner across different size steps using the 'size' prop."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
            <Spinner size="2xl" />
            <Spinner size="3xl" />
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-6">
  <Spinner size="xs" />
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
  <Spinner size="xl" />
  <Spinner size="2xl" />
  <Spinner size="3xl" />
</div>`}
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      {/* With Label */}
      <DocsComponent
        title="With Label"
        description="Pass a string to the 'label' prop to render a visible text description alongside the spinner."
        preview={
          <div className="flex flex-col gap-4">
            <Spinner color="primary" label="Loading data..." />
            <Spinner variant="dots" color="success" label="Saving changes..." />
            <Spinner variant="pulse" color="warning" label="Connecting to server..." />
          </div>
        }
        code={`<div className="flex flex-col gap-4">
  <Spinner color="primary" label="Loading data..." />
  <Spinner variant="dots" color="success" label="Saving changes..." />
  <Spinner variant="pulse" color="warning" label="Connecting to server..." />
</div>`}
        props={["label: string"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Spinner"
        description="Properties for configuring the Spinner loader component."
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
                    'default' | 'dots' | 'bars' | 'pulse' | 'ring' | 'gradient'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Animation visual style pattern.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Color theme scheme of the loader animation.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual scale dimension of the loader.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Optional text displayed beside the loader (also used for accessible aria-label).
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
