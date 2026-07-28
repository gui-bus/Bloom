import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { ScrollArea } from "@/components/ui/scrollArea/scrollArea";
import { scrollAreaCode } from "@/components/ui/scrollArea/scrollArea.code";
import { Separator } from "@/components/ui/separator/separator";
import { Badge } from "@/components/ui/badge/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const tags = Array.from({ length: 30 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function ScrollAreaPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Scroll Area"
        description="Augments native scroll functionality with custom cross-browser styled scrollbars built on Radix primitives."
      />

      <Tabs defaultValue="scrollArea">
        <TabsList background={false}>
          <TabsTrigger
            value="scrollArea"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            scrollArea.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="scrollArea">
          <CodeBlock
            code={scrollAreaCode}
            componentName="scrollArea.tsx"
            description="Custom scrollbar area component supporting vertical, horizontal, and combined scroll orientations."
            tags={["React", "Radix UI", "Tailwind", "UI Component", "Scroll"]}
          />
        </TabsContent>
      </Tabs>

      {/* Vertical Scroll */}
      <DocsComponent
        title="Vertical Scroll"
        description="Constrains vertical height and provides smooth custom scrollbar for long list content."
        preview={
          <ScrollArea className="h-72 w-64 rounded-xl border border-border p-4">
            <h4 className="mb-4 text-sm font-semibold leading-none">Tags & Versions</h4>
            <div className="space-y-2">
              {tags.map((tag) => (
                <div key={tag} className="text-sm border-b border-border/40 pb-2 last:border-0">
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
        }
        code={`<ScrollArea className="h-72 w-64 rounded-xl border border-border p-4">
  <h4 className="mb-4 text-sm font-semibold leading-none">Tags & Versions</h4>
  <div className="space-y-2">
    {tags.map((tag) => (
      <div key={tag} className="text-sm border-b border-border/40 pb-2">
        {tag}
      </div>
    ))}
  </div>
</ScrollArea>`}
      />

      {/* Horizontal Scroll */}
      <DocsComponent
        title="Horizontal Scroll"
        description="Set 'orientation' to 'horizontal' to manage wide content rows gracefully."
        preview={
          <ScrollArea orientation="horizontal" className="w-96 whitespace-nowrap rounded-xl border border-border p-4">
            <div className="flex w-max space-x-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center size-24 shrink-0 rounded-xl bg-muted/60 text-sm font-medium"
                >
                  Item {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        }
        code={`<ScrollArea orientation="horizontal" className="w-96 whitespace-nowrap rounded-xl border border-border p-4">
  <div className="flex w-max space-x-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="flex flex-col items-center justify-center size-24 shrink-0 rounded-xl bg-muted/60 text-sm font-medium"
      >
        Item {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>`}
        props={["orientation: 'vertical' | 'horizontal' | 'both'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — ScrollArea"
        description="Properties for configuring the ScrollArea component."
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
                    'vertical' | 'horizontal' | 'both'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'vertical'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Scrollbar axis direction rendered in the container viewport.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">className</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Tailwind CSS classes controlling explicit width, height, and border styles.
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
