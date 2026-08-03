"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover/popover";
import { popoverCode } from "@/components/ui/popover/popover.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function PopoverComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Popover"
        description="Displays rich content in a portal layer triggered by a button click, with custom backdrop overlays (blur, dark, light) similar to Dialog and Drawer."
      />

      <ImportSnippet
        importCode={`import { Popover } from "@/components/ui/popover/popover";`}
      />

      <InstallationBlock componentName="popover" />

      <Tabs defaultValue="popover">
        <TabsList background={false}>
          <TabsTrigger
            value="popover"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            popover.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="popover">
          <CodeBlock
            code={popoverCode}
            componentName="popover.tsx"
            description="Core implementation of the Popover component."
            tags={["React", "Radix UI", "Popover", "Overlay"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Standard popover triggered by button click."
        preview={
          <Popover>
            <PopoverTrigger asChild>
              <Button color="primary">Open Dimensions</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Dimensions</PopoverTitle>
                <PopoverDescription>
                  Set the width and height for the canvas layout.
                </PopoverDescription>
              </PopoverHeader>
              <div className="grid gap-3 pt-2">
                <div className="grid grid-cols-3 items-center gap-2">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-2">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        }
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button color="primary">Open Dimensions</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Dimensions</PopoverTitle>
      <PopoverDescription>Set width and height.</PopoverDescription>
    </PopoverHeader>
    <Input defaultValue="100%" />
  </PopoverContent>
</Popover>`}
      />

      <DocsComponent
        title="Backdrop Overlays (Blur, Dark, Light)"
        description="Dim or blur the page background behind the popover using the 'backdrop' prop, exactly like Dialog and Drawer."
        preview={
          <div className="flex flex-wrap gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="bordered">Backdrop Blur</Button>
              </PopoverTrigger>
              <PopoverContent backdrop="blur">
                <PopoverHeader>
                  <PopoverTitle>Blur Backdrop</PopoverTitle>
                  <PopoverDescription>
                    Page content behind the popover is frosted with backdrop
                    blur.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="bordered">Backdrop Dark</Button>
              </PopoverTrigger>
              <PopoverContent backdrop="dark">
                <PopoverHeader>
                  <PopoverTitle>Dark Backdrop</PopoverTitle>
                  <PopoverDescription>
                    Page content behind the popover is dimmed dark.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="bordered">Backdrop Light</Button>
              </PopoverTrigger>
              <PopoverContent backdrop="light">
                <PopoverHeader>
                  <PopoverTitle>Light Backdrop</PopoverTitle>
                  <PopoverDescription>
                    Page content behind the popover has a light subtle tint
                    overlay.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </div>
        }
        code={`<PopoverContent backdrop="blur">...</PopoverContent>
<PopoverContent backdrop="dark">...</PopoverContent>
<PopoverContent backdrop="light">...</PopoverContent>`}
        props={["backdrop: 'none' | 'dark' | 'light' | 'blur'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — PopoverContent"
        description="Supported properties for PopoverContent."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">backdrop</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'none' | 'dark' | 'light' | 'blur'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'none'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Backdrop overlay style (same as Dialog and Drawer).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">align</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'start' | 'center' | 'end'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'center'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Popover alignment relative to trigger button.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    sideOffset
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">8</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Distance in pixels from trigger element.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    showCloseButton
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays top-right close icon button.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
