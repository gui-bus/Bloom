"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { ColorSwatches } from "@/components/ui/colorSwatches/colorSwatches";
import { colorSwatchesCode } from "@/components/ui/colorSwatches/colorSwatches.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const defaultNamedColors = [
  { color: "#ef4444", name: "Red 500" },
  { color: "#f97316", name: "Orange 500" },
  { color: "#eab308", name: "Yellow 500" },
  { color: "#22c55e", name: "Green 500" },
  { color: "#06b6d4", name: "Cyan 500" },
  { color: "#3b82f6", name: "Blue 500" },
  { color: "#8b5cf6", name: "Purple 500" },
  { color: "#ec4899", name: "Pink 500" },
];

function DefaultDemo() {
  const [selected, setSelected] = React.useState("#3b82f6");
  return (
    <ColorSwatches
      colors={defaultNamedColors}
      value={selected}
      onChange={setSelected}
    />
  );
}

function MultiSelectDemo() {
  const [selected, setSelected] = React.useState(["#3b82f6", "#22c55e"]);
  return (
    <div className="space-y-3">
      <ColorSwatches
        colors={defaultNamedColors}
        isMulti
        multiValue={selected}
        onMultiChange={setSelected}
      />
      <div className="text-xs text-zinc-500 font-mono">
        Selected: {selected.length > 0 ? selected.join(", ") : "None"}
      </div>
    </div>
  );
}

function MaxLimitDemo() {
  const [selected, setSelected] = React.useState(["#ef4444", "#8b5cf6"]);
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          Max limit: 3 colors
        </span>
        <span className="text-xs text-zinc-400">
          ({selected.length}/3 selected)
        </span>
      </div>
      <ColorSwatches
        colors={defaultNamedColors}
        isMulti
        maxLimit={3}
        multiValue={selected}
        onMultiChange={setSelected}
      />
    </div>
  );
}

function ShapesDemo() {
  const [selected, setSelected] = React.useState("#22c55e");
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-bold text-zinc-500 mb-2">Circle (default)</p>
        <ColorSwatches
          colors={defaultNamedColors}
          value={selected}
          onChange={setSelected}
          shape="circle"
        />
      </div>
      <div>
        <p className="text-xs font-bold text-zinc-500 mb-2">Square</p>
        <ColorSwatches
          colors={defaultNamedColors}
          value={selected}
          onChange={setSelected}
          shape="square"
        />
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
        <ColorSwatches
          colors={defaultNamedColors}
          value={selected}
          onChange={setSelected}
          size="sm"
        />
      </div>
      <div>
        <p className="text-xs font-bold text-zinc-500 mb-2">Medium (default)</p>
        <ColorSwatches
          colors={defaultNamedColors}
          value={selected}
          onChange={setSelected}
          size="md"
        />
      </div>
      <div>
        <p className="text-xs font-bold text-zinc-500 mb-2">Large</p>
        <ColorSwatches
          colors={defaultNamedColors}
          value={selected}
          onChange={setSelected}
          size="lg"
        />
      </div>
    </div>
  );
}

export default function ColorSwatchesPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Color Swatches"
        description="A color palette grid for selection featuring single & multi-select modes, maximum selection limit, and hover tooltips with color names and WCAG contrast ratio scores."
      />

      <ImportSnippet
        importCode={`import { ColorSwatches } from "@/components/ui/colorSwatches/colorSwatches";`}
      />

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
            description="Color palette grid with multi-selection support, contrast ratio tooltips, and size/shape options."
            tags={["React", "Tailwind", "UI Component", "Color", "Selection"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default with Contrast Tooltip"
        description="Hover over any color swatch to view its name, HEX value, contrast ratio against background, and WCAG accessibility rating (AAA, AA, Fail)."
        preview={<DefaultDemo />}
        code={`const colors = [
  { color: "#ef4444", name: "Red 500" },
  { color: "#f97316", name: "Orange 500" },
  { color: "#3b82f6", name: "Blue 500" },
];

<ColorSwatches colors={colors} value={selected} onChange={setSelected} />`}
      />

      {/* Multi Select */}
      <DocsComponent
        title="Multi-Selection Mode"
        description="Enable 'isMulti' to allow selecting multiple colors simultaneously."
        preview={<MultiSelectDemo />}
        code={`<ColorSwatches
  colors={colors}
  isMulti
  multiValue={selectedColors}
  onMultiChange={setSelectedColors}
/>`}
        props={[
          "isMulti: boolean",
          "multiValue: string[]",
          "onMultiChange: (colors: string[]) => void",
        ]}
      />

      {/* Max Selection Limit */}
      <DocsComponent
        title="Maximum Selection Limit"
        description="Restrict the maximum number of selectable colors in multi-select mode using 'maxLimit'."
        preview={<MaxLimitDemo />}
        code={`<ColorSwatches
  colors={colors}
  isMulti
  maxLimit={3}
  multiValue={selectedColors}
  onMultiChange={setSelectedColors}
/>`}
        props={["maxLimit: number"]}
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

      {/* Accessibility & ARIA Section */}
      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Prop
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Type
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Default
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                colors
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                (string | ColorItem)[]
              </td>
              <td className="px-4 py-3 text-zinc-400">—</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Array of color hex strings or ColorItem objects (
                {`{ color, name }`}).
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                value
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                string
              </td>
              <td className="px-4 py-3 text-zinc-400">—</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Currently selected color in single-select mode.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                onChange
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                (color: string) =&gt; void
              </td>
              <td className="px-4 py-3 text-zinc-400">—</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Callback when a color is selected in single-select mode.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                isMulti
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                boolean
              </td>
              <td className="px-4 py-3 text-zinc-400">false</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Enables multi-selection mode.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                multiValue
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                string[]
              </td>
              <td className="px-4 py-3 text-zinc-400">[]</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Array of selected color strings in multi-select mode.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                onMultiChange
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                (colors: string[]) =&gt; void
              </td>
              <td className="px-4 py-3 text-zinc-400">—</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Callback when selected colors change in multi-select mode.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                maxLimit
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                number
              </td>
              <td className="px-4 py-3 text-zinc-400">—</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Maximum number of selectable colors in multi-select mode.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                showTooltip
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                boolean
              </td>
              <td className="px-4 py-3 text-zinc-400">true</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Shows hover tooltip with color name, HEX code, and contrast
                ratio score.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">size</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{`"sm" | "md" | "lg"`}</td>
              <td className="px-4 py-3 text-zinc-400">"md"</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Swatch dimensions.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                shape
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{`"circle" | "square"`}</td>
              <td className="px-4 py-3 text-zinc-400">"circle"</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Swatch shape variant.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
