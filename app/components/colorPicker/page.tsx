import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Color Picker",
  description: "Visual color selection component supporting HEX inputs and color swatches.",
};

import { ColorPicker } from "@/components/ui/colorPicker/colorPicker";
import { colorPickerCode } from "@/components/ui/colorPicker/colorPicker.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ColorPickerComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Color Picker"
        description="A visual color picker component featuring a color input preview swatch, HEX string text field, and quick-select color palette presets."
      />

      <Tabs defaultValue="colorPicker">
        <TabsList background={false}>
          <TabsTrigger
            value="colorPicker"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            colorPicker.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colorPicker">
          <CodeBlock
            code={colorPickerCode}
            componentName="colorPicker.tsx"
            description="Core implementation of the ColorPicker component."
            tags={["React", "Tailwind", "Forms", "UI Component"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Color picker with preset palette."
        preview={
          <div className="w-full max-w-xs">
            <ColorPicker label="Accent Color" defaultValue="#8b5cf6" />
          </div>
        }
        code={`<ColorPicker label="Accent Color" defaultValue="#8b5cf6" />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — ColorPicker"
        description="Properties to configure the ColorPicker component."
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
                  <td className="px-3 py-2 font-mono text-primary">presets</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string[]</td>
                  <td className="px-3 py-2 text-muted-foreground">12 default colors</td>
                  <td className="px-3 py-2 text-muted-foreground">Array of preset HEX color strings for quick selection.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">value</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'#3b82f6'</td>
                  <td className="px-3 py-2 text-muted-foreground">Controlled HEX color value string.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
