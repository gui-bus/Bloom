"use client";

import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Spinner } from "@/components/ui/spinner/spinner";
import { spinnerCode } from "@/components/ui/spinner/spinner.code";

export default function SpinnerComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Spinner"
        description="Animated loading indicator featuring multiple visual styles, color palettes, size scale, and text labels."
      />

      <ImportSnippet
        importCode={`import { Spinner } from "@/components/ui/spinner/spinner";`}
      />

      <InstallationBlock componentName="spinner" />

      <CodeBlock
        code={spinnerCode}
        componentName="spinner.tsx"
        description="Core implementation of the Spinner component."
        tags={["React", "Spinner", "Loader", "Animation"]}
      />

      <DocsComponent
        title="Default"
        description="Standard loading spinner with optional text label."
        preview={
          <div className="flex items-center gap-6">
            <Spinner color="primary" label="Loading data..." />
          </div>
        }
        code={`<Spinner color="primary" label="Loading data..." />`}
      />

      <DocsComponent
        title="Variants"
        description="Choose from different animation layouts and graphic styles."
        preview={
          <div className="flex flex-wrap items-center gap-8">
            <Spinner variant="default" label="Default" />
            <Spinner variant="dots" label="Dots" />
            <Spinner variant="bars" label="Bars" />
            <Spinner variant="pulse" label="Pulse" />
            <Spinner variant="ring" label="Ring" />
            <Spinner variant="gradient" label="Gradient" />
          </div>
        }
        code={`<Spinner variant="default" label="Default" />
<Spinner variant="dots" label="Dots" />
<Spinner variant="bars" label="Bars" />
<Spinner variant="pulse" label="Pulse" />
<Spinner variant="ring" label="Ring" />
<Spinner variant="gradient" label="Gradient" />`}
        props={[
          "variant: 'default' | 'dots' | 'bars' | 'pulse' | 'ring' | 'gradient'",
        ]}
      />

      <DocsComponent
        title="Colors"
        description="Apply theme-specific alert colors across the different animation variants."
        preview={
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-wrap items-center gap-6">
              <span className="w-16 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Default
              </span>
              <div className="flex flex-wrap gap-4">
                <Spinner variant="default" color="default" />
                <Spinner variant="default" color="primary" />
                <Spinner variant="default" color="secondary" />
                <Spinner variant="default" color="accent" />
                <Spinner variant="default" color="success" />
                <Spinner variant="default" color="warning" />
                <Spinner variant="default" color="danger" />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <span className="w-16 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Dots
              </span>
              <div className="flex flex-wrap gap-4">
                <Spinner variant="dots" color="default" />
                <Spinner variant="dots" color="primary" />
                <Spinner variant="dots" color="secondary" />
                <Spinner variant="dots" color="accent" />
                <Spinner variant="dots" color="success" />
                <Spinner variant="dots" color="warning" />
                <Spinner variant="dots" color="danger" />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <span className="w-16 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Bars
              </span>
              <div className="flex flex-wrap gap-4">
                <Spinner variant="bars" color="default" />
                <Spinner variant="bars" color="primary" />
                <Spinner variant="bars" color="secondary" />
                <Spinner variant="bars" color="accent" />
                <Spinner variant="bars" color="success" />
                <Spinner variant="bars" color="warning" />
                <Spinner variant="bars" color="danger" />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <span className="w-16 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Pulse
              </span>
              <div className="flex flex-wrap gap-4">
                <Spinner variant="pulse" color="default" />
                <Spinner variant="pulse" color="primary" />
                <Spinner variant="pulse" color="secondary" />
                <Spinner variant="pulse" color="accent" />
                <Spinner variant="pulse" color="success" />
                <Spinner variant="pulse" color="warning" />
                <Spinner variant="pulse" color="danger" />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <span className="w-16 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Ring
              </span>
              <div className="flex flex-wrap gap-4">
                <Spinner variant="ring" color="default" />
                <Spinner variant="ring" color="primary" />
                <Spinner variant="ring" color="secondary" />
                <Spinner variant="ring" color="accent" />
                <Spinner variant="ring" color="success" />
                <Spinner variant="ring" color="warning" />
                <Spinner variant="ring" color="danger" />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <span className="w-16 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Gradient
              </span>
              <div className="flex flex-wrap gap-4">
                <Spinner variant="gradient" color="default" />
                <Spinner variant="gradient" color="primary" />
                <Spinner variant="gradient" color="secondary" />
                <Spinner variant="gradient" color="accent" />
                <Spinner variant="gradient" color="success" />
                <Spinner variant="gradient" color="warning" />
                <Spinner variant="gradient" color="danger" />
              </div>
            </div>
          </div>
        }
        code={`<Spinner variant="default" color="primary" />
<Spinner variant="dots" color="success" />
<Spinner variant="bars" color="warning" />
<Spinner variant="pulse" color="danger" />
<Spinner variant="ring" color="secondary" />
<Spinner variant="gradient" color="accent" />`}
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
      />

      <DocsComponent
        title="Sizes"
        description="Scale the loader size dimensions to fit different layout containers."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <Spinner size="sm" color="primary" />
            <Spinner size="md" color="primary" />
            <Spinner size="lg" color="primary" />
            <Spinner size="xl" color="primary" />
          </div>
        }
        code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`}
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      <DocsComponent
        title="Props — Spinner"
        description="Supported properties for Spinner."
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
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' |
                    'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Theme color palette of spinner graphic.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'dots' | 'bars' | 'pulse' | 'ring' | 'gradient'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Spinner graphic animation style.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Dimensions scale of spinner graphic.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Optional loading status label text.
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
