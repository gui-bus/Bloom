"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { ColorSwatches } from "@/components/ui/colorSwatches/colorSwatches";
import { colorSwatchesCode } from "@/components/ui/colorSwatches/colorSwatches.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const defaultColors = [
  "#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4",
  "#3b82f6", "#8b5cf6", "#ec4899", "#f43f5e", "#14b8a6",
];

function DefaultDemo() {
  const [selected, setSelected] = React.useState("#3b82f6");
  return <ColorSwatches colors={defaultColors} value={selected} onChange={setSelected} />;
}

function ShapesDemo() {
  const [selected, setSelected] = React.useState("#22c55e");
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-bold text-zinc-500 mb-2">Circle (default)</p>
        <ColorSwatches colors={defaultColors} value={selected} onChange={setSelected} shape="circle" />
      </div>
      <div>
        <p className="text-xs font-bold text-zinc-500 mb-2">Square</p>
        <ColorSwatches colors={defaultColors} value={selected} onChange={setSelected} shape="square" />
      </div>
    </div>
  );
}

function SizesDemo() {
  const [selected, setSelected] = React.useState("#8b5cf6");
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-bold text-zinc-500 mb-2">Small</p>
        <ColorSwatches colors={defaultColors} value={selected} onChange={setSelected} size="sm" />
      </div>
      <div>
        <p className="text-xs font-bold text-zinc-500 mb-2">Medium (default)</p>
        <ColorSwatches colors={defaultColors} value={selected} onChange={setSelected} size="md" />
      </div>
      <div>
        <p className="text-xs font-bold text-zinc-500 mb-2">Large</p>
        <ColorSwatches colors={defaultColors} value={selected} onChange={setSelected} size="lg" />
      </div>
    </div>
  );
}

export default function ColorSwatchesPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Color Swatches"
        description="A color palette grid for quick selection with circle or square shapes, multiple sizes, and visual selection feedback."
      />

      <ImportSnippet importCode={`import { ColorSwatches } from "@/components/ui/colorSwatches/colorSwatches";`} />

      <InstallationBlock componentName="colorSwatches" />

      <Tabs defaultValue="colorSwatches">
        <TabsList background={false}>
          <TabsTrigger
            value="colorSwatches"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            colorSwatches.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colorSwatches">
          <CodeBlock
            code={colorSwatchesCode}
            componentName="colorSwatches.tsx"
            description="Color palette grid with selection feedback, shape variants, and size options."
            tags={["React", "Tailwind", "UI Component", "Color", "Selection"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="A color palette grid with selectable color circles."
        preview={<DefaultDemo />}
        code={`const [selected, setSelected] = React.useState("#3b82f6");

<ColorSwatches
  colors={["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"]}
  value={selected}
  onChange={setSelected}
/>`}
      />

      {/* Shapes */}
      <DocsComponent
        title="Shapes"
        description="Switch between circle and square shapes for the color swatches."
        preview={<ShapesDemo />}
        code={`<ColorSwatches colors={colors} value={selected} onChange={setSelected} shape="circle" />
<ColorSwatches colors={colors} value={selected} onChange={setSelected} shape="square" />`}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Three size variants control the swatch dimensions."
        preview={<SizesDemo />}
        code={`<ColorSwatches colors={colors} value={selected} onChange={setSelected} size="sm" />
<ColorSwatches colors={colors} value={selected} onChange={setSelected} size="md" />
<ColorSwatches colors={colors} value={selected} onChange={setSelected} size="lg" />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Prop</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Type</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Default</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">colors</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string[]</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Array of CSS color values to display.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">value</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Currently selected color.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">onChange</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">(color: string) =&gt; void</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Callback when a color is selected.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">size</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{`"sm" | "md" | "lg"`}</td><td className="px-4 py-3 text-zinc-400">"md"</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Swatch dimensions.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">shape</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{`"circle" | "square"`}</td><td className="px-4 py-3 text-zinc-400">"circle"</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Swatch shape variant.</td></tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
