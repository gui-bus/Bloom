"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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
    <div className="space-y-8">
      <DocsTitle
        title="Color Picker"
        description="A visual color selection component featuring a native color input preview, HEX/RGB/HSL format switcher with copy button, and an interactive canvas-based color wheel."
      />

      <ImportSnippet importCode={`import { ColorPicker } from "@/components/ui/colorPicker/colorPicker";`} />

      <InstallationBlock componentName="colorPicker" />

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
            description="Color picker component with canvas color wheel, HEX/RGB/HSL format switching, and copy button."
            tags={["React", "Canvas", "Tailwind", "UI Component", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard color picker with swatch preview, HEX/RGB/HSL format switcher, and a copy button to copy the color code in the selected format."
        preview={
          <div className="w-full">
            <ColorPicker label="Accent Color" defaultValue="#8b5cf6" />
          </div>
        }
        code={`<ColorPicker label="Accent Color" defaultValue="#8b5cf6" />`}
      />

      {/* Color Wheel */}
      <DocsComponent
        title="Color Wheel"
        description="Enable the interactive canvas-based color wheel for precise hue and saturation selection by setting 'showWheel' to true."
        preview={
          <div className="w-full">
            <ColorPicker label="Pick from Wheel" defaultValue="#3b82f6" showWheel />
          </div>
        }
        code={`<ColorPicker label="Pick from Wheel" defaultValue="#3b82f6" showWheel />`}
        props={["showWheel: boolean"]}
      />

      {/* Format Switcher */}
      <DocsComponent
        title="Format Switcher (HEX / RGB / HSL)"
        description="Click the format label button to cycle through HEX, RGB, and HSL representations. The copy button copies the value in the active format. Set 'defaultFormat' to start in a specific mode."
        preview={
          <div className="w-full flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block mb-2">defaultFormat="hex"</span>
              <ColorPicker defaultValue="#ef4444" defaultFormat="hex" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block mb-2">defaultFormat="rgb"</span>
              <ColorPicker defaultValue="#10b981" defaultFormat="rgb" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block mb-2">defaultFormat="hsl"</span>
              <ColorPicker defaultValue="#6366f1" defaultFormat="hsl" />
            </div>
          </div>
        }
        code={`<ColorPicker defaultValue="#ef4444" defaultFormat="hex" />
<ColorPicker defaultValue="#10b981" defaultFormat="rgb" />
<ColorPicker defaultValue="#6366f1" defaultFormat="hsl" />`}
        props={["defaultFormat: 'hex' | 'rgb' | 'hsl'", "showFormatSwitcher: boolean"]}
      />

      {/* Full Featured */}
      <DocsComponent
        title="Full Featured (Wheel + Format Switcher)"
        description="Complete color picker experience combining the interactive color wheel with format switching and copy functionality."
        preview={
          <div className="w-full">
            <ColorPicker
              label="Brand Color"
              defaultValue="#ec4899"
              showWheel
              showFormatSwitcher
              defaultFormat="rgb"
            />
          </div>
        }
        code={`<ColorPicker
  label="Brand Color"
  defaultValue="#ec4899"
  showWheel
  showFormatSwitcher
  defaultFormat="rgb"
/>`}
      />

      {/* Disabled */}
      <DocsComponent
        title="Disabled State"
        description="Disables all interaction including the color input, format switcher, copy button, and wheel."
        preview={
          <div className="w-full">
            <ColorPicker label="Locked Color" defaultValue="#6b7280" disabled />
          </div>
        }
        code={`<ColorPicker label="Locked Color" defaultValue="#6b7280" disabled />`}
        props={["disabled: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
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
                  <td className="px-3 py-2 font-mono text-primary">value</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Controlled HEX color value string.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">defaultValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'#3b82f6'</td>
                  <td className="px-3 py-2 text-muted-foreground">Initial color value for uncontrolled mode.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onValueChange</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(color: string) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback fired when the selected color changes.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showWheel</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders the interactive canvas-based color wheel.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showFormatSwitcher</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">Shows the HEX/RGB/HSL format toggle button.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">defaultFormat</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'hex' | 'rgb' | 'hsl'</td>
                  <td className="px-3 py-2 text-muted-foreground">'hex'</td>
                  <td className="px-3 py-2 text-muted-foreground">Starting color format for the text display.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Label text rendered above the color picker.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">disabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Disables all user interaction with the picker.</td>
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
