import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable/resizable";
import { resizableCode } from "@/components/ui/resizable/resizable.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ResizablePage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Resizable"
        description="Accessible resizable panel groups that allow users to drag dividers and customize layout proportions dynamically."
      />

      <Tabs defaultValue="resizable">
        <TabsList background={false}>
          <TabsTrigger
            value="resizable"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            resizable.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="resizable">
          <CodeBlock
            code={resizableCode}
            componentName="resizable.tsx"
            description="Resizable panel layouts powered by react-resizable-panels."
            tags={["React", "Tailwind", "UI Component", "Layout", "Resizable"]}
          />
        </TabsContent>
      </Tabs>

      {/* Horizontal Layout */}
      <DocsComponent
        title="Horizontal Layout"
        description="Side-by-side resizable panels with a visible handle."
        preview={
          <div className="w-full max-w-lg h-52 rounded-2xl border border-border overflow-hidden">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={30} minSize={20}>
                <div className="flex h-full items-center justify-center p-6 bg-muted/30">
                  <span className="font-semibold text-sm">Sidebar (30%)</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={70}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold text-sm">Main Content (70%)</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        }
        code={`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={30} minSize={20}>
    <div>Sidebar</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>
    <div>Main Content</div>
  </ResizablePanel>
</ResizablePanelGroup>`}
        props={["direction: 'horizontal' | 'vertical'", "withHandle: boolean"]}
      />

      {/* Nested Vertical Layout */}
      <DocsComponent
        title="Nested Vertical Layout"
        description="Combine horizontal and vertical panel groups to compose complex IDE or dashboard workspaces."
        preview={
          <div className="w-full max-w-lg h-72 rounded-2xl border border-border overflow-hidden">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={35}>
                <div className="flex h-full items-center justify-center p-4 bg-muted/20 text-xs font-semibold">
                  File Explorer
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={65}>
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={60}>
                    <div className="flex h-full items-center justify-center p-4 text-xs font-semibold">
                      Code Editor
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={40}>
                    <div className="flex h-full items-center justify-center p-4 bg-muted/40 text-xs font-semibold">
                      Terminal Output
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        }
        code={`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={35}>
    <div>File Explorer</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={65}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={60}>
        <div>Code Editor</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>
        <div>Terminal Output</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — ResizablePanelGroup"
        description="Properties for configuring the ResizablePanelGroup container."
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
                  <td className="px-3 py-2 font-mono text-primary">direction</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'horizontal' | 'vertical'</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Axis layout direction for child panels and dividers.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">withHandle</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders an explicit drag icon handle inside ResizableHandle.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">defaultSize</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Initial size percentage allocated to ResizablePanel.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">minSize</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">0</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Minimum size percentage constraint for a panel.
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
