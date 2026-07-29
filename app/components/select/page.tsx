import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Select",
  description: "Displays a list of options for the user to pick from—triggered by a button.",
};

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select/select";
import { selectCode } from "@/components/ui/select/select.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SelectComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Select"
        description="A custom dropdown select control powered by Radix UI Select primitive. Supports option grouping, custom triggers, size scales, and full keyboard navigation."
      />

      <Tabs defaultValue="select">
        <TabsList background={false}>
          <TabsTrigger
            value="select"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            select.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="select">
          <CodeBlock
            code={selectCode}
            componentName="select.tsx"
            description="Core implementation of the Select component."
            tags={["React", "Radix UI", "Tailwind", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard dropdown select."
        preview={
          <div className="w-full max-w-xs">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Frameworks</SelectLabel>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vite">Vite</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        }
        code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Frameworks</SelectLabel>
      <SelectItem value="next">Next.js</SelectItem>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vite">Vite</SelectItem>
      <SelectItem value="astro">Astro</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Select"
        description="Properties to configure the Select trigger component."
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
                  <td className="px-3 py-2 text-muted-foreground">Height and padding scale for SelectTrigger.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isInvalid</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Applies error state border and text styling.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
