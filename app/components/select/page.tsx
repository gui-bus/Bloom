"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
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
    <div className="space-y-8">
      <DocsTitle
        title="Select"
        description="Displays a custom select menu with options, group labels, item indicators, and sizes built on Radix UI Select."
      />

      <InstallationBlock componentName="select" />

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
            tags={["React", "Radix UI", "Select", "Form"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard dropdown select list."
        preview={
          <div className="max-w-xs w-full">
            <Select defaultValue="light">
              <SelectTrigger>
                <SelectValue placeholder="Select theme..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light Theme</SelectItem>
                <SelectItem value="dark">Dark Theme</SelectItem>
                <SelectItem value="system">System Default</SelectItem>
              </SelectContent>
            </Select>
          </div>
        }
        code={`<Select defaultValue="light">
  <SelectTrigger><SelectValue placeholder="Select theme..." /></SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light Theme</SelectItem>
    <SelectItem value="dark">Dark Theme</SelectItem>
  </SelectContent>
</Select>`}
      />

      {/* Grouped Options */}
      <DocsComponent
        title="Grouped Options"
        description="Group options with category labels using SelectGroup and SelectLabel."
        preview={
          <div className="max-w-xs w-full">
            <Select defaultValue="next">
              <SelectTrigger>
                <SelectValue placeholder="Select framework..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Frontend Frameworks</SelectLabel>
                  <SelectItem value="react">React.js</SelectItem>
                  <SelectItem value="next">Next.js 16</SelectItem>
                  <SelectItem value="vue">Vue 3</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Backend Engines</SelectLabel>
                  <SelectItem value="node">Node.js</SelectItem>
                  <SelectItem value="python">Python FastAPI</SelectItem>
                  <SelectItem value="go">Go Gin</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        }
        code={`<Select>
  <SelectTrigger><SelectValue placeholder="Framework" /></SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Frontend</SelectLabel>
      <SelectItem value="next">Next.js</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Scale trigger size using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-col gap-4 max-w-xs w-full">
            <Select defaultValue="sm">
              <SelectTrigger size="sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sm">Small (32px)</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="md">
              <SelectTrigger size="md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="md">Medium (40px)</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="lg">
              <SelectTrigger size="lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lg">Large (48px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        }
        code={`<SelectTrigger size="sm">...</SelectTrigger>
<SelectTrigger size="lg">...</SelectTrigger>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — SelectTrigger"
        description="Supported properties for SelectTrigger."
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
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Select trigger button height scale.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    keyof typeof designRadius
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">Border radius style variant.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isInvalid</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Applies error validation state outline.</td>
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
