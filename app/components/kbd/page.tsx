import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Kbd",
  description: "A tactile keyboard key indicator component used to display keyboard shortcuts and hotkeys.",
};
import { Kbd } from "@/components/ui/kbd/kbd";
import { kbdCode } from "@/components/ui/kbd/kbd.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function KbdPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Kbd"
        description="A tactile keyboard key indicator component used to display keyboard shortcuts and hotkeys."
      />

      <Tabs defaultValue="kbd">
        <TabsList background={false}>
          <TabsTrigger
            value="kbd"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            kbd.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="kbd">
          <CodeBlock
            code={kbdCode}
            componentName="kbd.tsx"
            description="Kbd key indicator component with size variants."
            tags={["React", "Tailwind", "UI Component", "Keyboard", "Shortcut"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Display single or combined keyboard keys."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </div>
            <div className="flex items-center gap-1">
              <Kbd>Ctrl</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>P</Kbd>
            </div>
            <div className="flex items-center gap-1">
              <Kbd>Alt</Kbd>
              <Kbd>F4</Kbd>
            </div>
          </div>
        }
        code={`<div className="flex items-center gap-1">
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</div>
<div className="flex items-center gap-1">
  <Kbd>Ctrl</Kbd>
  <Kbd>Shift</Kbd>
  <Kbd>P</Kbd>
</div>`}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Kbd supports 'sm', 'md' (default), and 'lg' size variants."
        preview={
          <div className="flex items-center gap-4">
            <Kbd size="sm">Small (⌘K)</Kbd>
            <Kbd size="md">Medium (⌘K)</Kbd>
            <Kbd size="lg">Large (⌘K)</Kbd>
          </div>
        }
        code={`<Kbd size="sm">Small (⌘K)</Kbd>
<Kbd size="md">Medium (⌘K)</Kbd>
<Kbd size="lg">Large (⌘K)</Kbd>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Kbd"
        description="Properties for configuring the Kbd component."
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
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'sm' | 'md' | 'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Size variant controlling height, padding, and font size.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">className</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Additional CSS classes to override default key styles.
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
