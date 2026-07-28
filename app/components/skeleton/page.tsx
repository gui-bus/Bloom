import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Skeleton } from "@/components/ui/skeleton/skeleton";
import { skeletonCode } from "@/components/ui/skeleton/skeleton.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SkeletonPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Skeleton"
        description="Placeholder loading indicator with a pulse animation. Useful for mimicking content layout while data is being fetched."
      />

      <Tabs defaultValue="skeleton">
        <TabsList background={false}>
          <TabsTrigger
            value="skeleton"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            skeleton.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="skeleton">
          <CodeBlock
            code={skeletonCode}
            componentName="skeleton.tsx"
            description="Skeleton loader component supporting circle, rectangle, and text variants with design tokens and accessibility."
            tags={["React", "Tailwind", "UI Component", "Loading"]}
          />
        </TabsContent>
      </Tabs>

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Choose between 'rectangle', 'circle', or 'text' variants."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <Skeleton variant="circle" className="size-12" />
            <Skeleton variant="rectangle" className="h-12 w-32" />
            <div className="w-48 space-y-2">
              <Skeleton variant="text" className="w-full" />
              <Skeleton variant="text" className="w-3/4" />
            </div>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-6">
  <Skeleton variant="circle" className="size-12" />
  <Skeleton variant="rectangle" className="h-12 w-32" />
  <div className="w-48 space-y-2">
    <Skeleton variant="text" className="w-full" />
    <Skeleton variant="text" className="w-3/4" />
  </div>
</div>`}
        props={["variant: 'circle' | 'rectangle' | 'text'"]}
      />

      {/* Profile Card Pattern */}
      <DocsComponent
        title="Complex Layout Pattern"
        description="Combine multiple Skeleton elements to compose card placeholders."
        preview={
          <div className="p-4 border border-border rounded-2xl max-w-sm space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton variant="circle" className="size-10" />
              <div className="space-y-1.5 flex-1">
                <Skeleton variant="text" className="h-3 w-1/2" />
                <Skeleton variant="text" className="h-2.5 w-1/3" />
              </div>
            </div>
            <Skeleton variant="rectangle" className="h-32 w-full" />
            <div className="space-y-2">
              <Skeleton variant="text" className="w-full" />
              <Skeleton variant="text" className="w-4/5" />
            </div>
          </div>
        }
        code={`<div className="p-4 border border-border rounded-2xl max-w-sm space-y-4">
  <div className="flex items-center gap-3">
    <Skeleton variant="circle" className="size-10" />
    <div className="space-y-1.5 flex-1">
      <Skeleton variant="text" className="h-3 w-1/2" />
      <Skeleton variant="text" className="h-2.5 w-1/3" />
    </div>
  </div>
  <Skeleton variant="rectangle" className="h-32 w-full" />
  <div className="space-y-2">
    <Skeleton variant="text" className="w-full" />
    <Skeleton variant="text" className="w-4/5" />
  </div>
</div>`}
      />

      {/* Loaded State Toggle */}
      <DocsComponent
        title="Loaded State Toggle"
        description="When 'isLoaded' becomes true, the Skeleton renders its children directly."
        preview={
          <div className="space-y-4 max-w-sm">
            <Skeleton isLoaded={true}>
              <div className="p-3 bg-primary/10 text-primary font-medium rounded-xl text-sm">
                Content loaded successfully!
              </div>
            </Skeleton>
          </div>
        }
        code={`<Skeleton isLoaded={isDataReady}>
  <div className="p-3 bg-primary/10 text-primary font-medium rounded-xl text-sm">
    Content loaded successfully!
  </div>
</Skeleton>`}
        props={["isLoaded: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Skeleton"
        description="Properties for configuring the Skeleton loader component."
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
                    'circle' | 'rectangle' | 'text'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'rectangle'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Shape style of the skeleton placeholder.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Corner rounding scale (not applicable to 'circle').
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isLoaded</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    When true, replaces the skeleton placeholder with children nodes.
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
