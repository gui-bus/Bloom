"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
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

export default function SpinnerComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Spinner"
        description="Animated loading indicator featuring multiple visual styles (default, dots, bars, pulse, ring, gradient), color palettes, size scale, and text labels."
      />

      <InstallationBlock componentName="spinner" />

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
            description="Core implementation of the Spinner component."
            tags={["React", "Spinner", "Loader", "Animation"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
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

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Choose from theme color variants: 'default', 'primary', 'secondary', 'accent', 'success', 'warning', or 'danger'."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <Spinner color="default" label="Default" />
            <Spinner color="primary" label="Primary" />
            <Spinner color="secondary" label="Secondary" />
            <Spinner color="accent" label="Accent" />
            <Spinner color="success" label="Success" />
            <Spinner color="warning" label="Warning" />
            <Spinner color="danger" label="Danger" />
          </div>
        }
        code={`<Spinner color="default" label="Default" />
<Spinner color="primary" label="Primary" />
<Spinner color="secondary" label="Secondary" />
<Spinner color="accent" label="Accent" />
<Spinner color="success" label="Success" />
<Spinner color="warning" label="Warning" />
<Spinner color="danger" label="Danger" />`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Spinner Variants */}
      <DocsComponent
        title="Spinner Variants"
        description="Choose from 6 animation styles: 'default', 'dots', 'bars', 'pulse', 'ring', or 'gradient'."
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
        props={["variant: 'default' | 'dots' | 'bars' | 'pulse' | 'ring' | 'gradient'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Scale spinner dimensions from 'xs' to '3xl'."
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Spinner"
        description="Supported properties for Spinner."
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
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">Theme color palette of spinner graphic.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'dots' | 'bars' | 'pulse' | 'ring' | 'gradient'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">Spinner graphic animation style.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Dimensions scale of spinner graphic.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Optional loading status label text.</td>
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
