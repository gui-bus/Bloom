"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer/drawer";
import { Button } from "@/components/ui/button/button";
import { drawerCode } from "@/components/ui/drawer/drawer.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function DrawerComponentPage() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Drawer"
        description="A sliding panel primitive supporting positions (bottom, top, left, right), size scales (sm, md, lg, xl, full), customizable backdrop overlays (blur, dark, light), keyboard accessibility, and zero page layout shift."
      />

      <ImportSnippet importCode={`import { Drawer } from "@/components/ui/drawer/drawer";`} />

      <InstallationBlock componentName="drawer" />

      <Tabs defaultValue="drawer">
        <TabsList background={false}>
          <TabsTrigger
            value="drawer"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            drawer.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="drawer">
          <CodeBlock
            code={drawerCode}
            componentName="drawer.tsx"
            description="Core implementation of the Drawer component."
            tags={["React", "Radix UI", "Tailwind", "Overlays", "Drawer"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard bottom drawer sheet with drag handle, backdrop blur overlay, and action controls."
        preview={
          <div className="w-full">
            <Drawer>
              <DrawerTrigger asChild>
                <Button>Open Goal Drawer</Button>
              </DrawerTrigger>
              <DrawerContent position="bottom" size="md">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily calorie activity goal.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="bordered"
                        size="sm"
                        isIconOnly
                        onClick={() => onClick(-10)}
                        disabled={goal <= 200}
                        ariaLabel="Decrease goal"
                      >
                        <Icon icon="hugeicons:minus-01" className="size-4" />
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-6xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
                          {goal}
                        </div>
                        <div className="text-[10px] uppercase font-semibold text-zinc-400 dark:text-zinc-500">
                          Calories/day
                        </div>
                      </div>
                      <Button
                        variant="bordered"
                        size="sm"
                        isIconOnly
                        onClick={() => onClick(10)}
                        disabled={goal >= 400}
                        ariaLabel="Increase goal"
                      >
                        <Icon icon="hugeicons:plus-01" className="size-4" />
                      </Button>
                    </div>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button color="primary">Submit Goal</Button>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Button variant="flat">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        }
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Goal Drawer</Button>
  </DrawerTrigger>
  <DrawerContent position="bottom" size="md">
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily calorie activity goal.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose asChild><Button color="primary">Submit Goal</Button></DrawerClose>
        <DrawerClose asChild><Button variant="flat">Cancel</Button></DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
      />

      {/* Positions */}
      <DocsComponent
        title="Drawer Positions"
        description="Slide in from any screen edge using the 'position' prop: 'right', 'left', 'top', or 'bottom'."
        preview={
          <div className="flex flex-wrap gap-3 w-full">
            <Drawer>
              <DrawerTrigger asChild><Button variant="bordered">Right Sidebar</Button></DrawerTrigger>
              <DrawerContent position="right" size="md">
                <DrawerHeader>
                  <DrawerTitle>Right Sidebar Drawer</DrawerTitle>
                  <DrawerDescription>Slides in smoothly from the right edge.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild><Button size="sm">Close</Button></DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild><Button variant="bordered">Left Sidebar</Button></DrawerTrigger>
              <DrawerContent position="left" size="md">
                <DrawerHeader>
                  <DrawerTitle>Left Sidebar Drawer</DrawerTitle>
                  <DrawerDescription>Slides in smoothly from the left edge.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild><Button size="sm">Close</Button></DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild><Button variant="bordered">Top Sheet</Button></DrawerTrigger>
              <DrawerContent position="top" size="md">
                <DrawerHeader>
                  <DrawerTitle>Top Drawer Sheet</DrawerTitle>
                  <DrawerDescription>Slides down smoothly from the top edge.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild><Button size="sm">Close</Button></DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild><Button variant="bordered">Bottom Sheet</Button></DrawerTrigger>
              <DrawerContent position="bottom" size="md">
                <DrawerHeader>
                  <DrawerTitle>Bottom Drawer Sheet</DrawerTitle>
                  <DrawerDescription>Slides up smoothly from the bottom edge.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild><Button size="sm">Close</Button></DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        }
        code={`<DrawerContent position="right">...</DrawerContent>
<DrawerContent position="left">...</DrawerContent>
<DrawerContent position="top">...</DrawerContent>
<DrawerContent position="bottom">...</DrawerContent>`}
        props={["position: 'bottom' | 'top' | 'left' | 'right'"]}
      />

      {/* Overlay Styles */}
      <DocsComponent
        title="Overlay Styles"
        description="Choose backdrop overlay styles using the 'overlay' prop: 'blur', 'dark', 'light', 'transparent', or 'none'."
        preview={
          <div className="flex flex-wrap gap-3 w-full">
            <Drawer>
              <DrawerTrigger asChild><Button variant="flat" size="sm">Blur Backdrop</Button></DrawerTrigger>
              <DrawerContent position="right" overlay="blur">
                <DrawerHeader>
                  <DrawerTitle>Blur Backdrop Style</DrawerTitle>
                  <DrawerDescription>Standard backdrop-blur-md with dark tinting.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter><DrawerClose asChild><Button size="sm">Close</Button></DrawerClose></DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild><Button variant="flat" size="sm">Dark Backdrop (80%)</Button></DrawerTrigger>
              <DrawerContent position="right" overlay="dark">
                <DrawerHeader>
                  <DrawerTitle>Dark Overlay Style</DrawerTitle>
                  <DrawerDescription>High contrast 80% opacity dark backdrop.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter><DrawerClose asChild><Button size="sm">Close</Button></DrawerClose></DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild><Button variant="flat" size="sm">Light Backdrop</Button></DrawerTrigger>
              <DrawerContent position="right" overlay="light">
                <DrawerHeader>
                  <DrawerTitle>Light Overlay Style</DrawerTitle>
                  <DrawerDescription>Soft light backdrop tint.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter><DrawerClose asChild><Button size="sm">Close</Button></DrawerClose></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        }
        code={`<DrawerContent overlay="blur">...</DrawerContent>
<DrawerContent overlay="dark">...</DrawerContent>
<DrawerContent overlay="light">...</DrawerContent>`}
        props={["overlay: 'blur' | 'dark' | 'light' | 'transparent' | 'none'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Drawer Sizes (Shadcn Scale)"
        description="Scale drawer width or height using the 'size' prop: 'sm', 'md', 'lg', 'xl', or 'full'."
        preview={
          <div className="flex flex-wrap gap-3 w-full">
            <Drawer>
              <DrawerTrigger asChild><Button size="sm" variant="bordered">Small (sm)</Button></DrawerTrigger>
              <DrawerContent position="right" size="sm">
                <DrawerHeader>
                  <DrawerTitle>Small Drawer</DrawerTitle>
                  <DrawerDescription>Compact 320px sidebar drawer.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter><DrawerClose asChild><Button size="sm">Close</Button></DrawerClose></DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild><Button size="sm" variant="bordered">Medium (md)</Button></DrawerTrigger>
              <DrawerContent position="right" size="md">
                <DrawerHeader>
                  <DrawerTitle>Medium Drawer</DrawerTitle>
                  <DrawerDescription>Standard 384px sidebar drawer.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter><DrawerClose asChild><Button size="sm">Close</Button></DrawerClose></DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild><Button size="sm" variant="bordered">Large (lg)</Button></DrawerTrigger>
              <DrawerContent position="right" size="lg">
                <DrawerHeader>
                  <DrawerTitle>Large Drawer</DrawerTitle>
                  <DrawerDescription>Expanded 500px sidebar drawer.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter><DrawerClose asChild><Button size="sm">Close</Button></DrawerClose></DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild><Button size="sm" variant="bordered">Extra Large (xl)</Button></DrawerTrigger>
              <DrawerContent position="right" size="xl">
                <DrawerHeader>
                  <DrawerTitle>Extra Large Drawer</DrawerTitle>
                  <DrawerDescription>Wide 640px sidebar drawer.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter><DrawerClose asChild><Button size="sm">Close</Button></DrawerClose></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        }
        code={`<DrawerContent position="right" size="sm">...</DrawerContent>
<DrawerContent position="right" size="md">...</DrawerContent>
<DrawerContent position="right" size="lg">...</DrawerContent>
<DrawerContent position="right" size="xl">...</DrawerContent>`}
        props={["size: 'sm' | 'md' | 'lg' | 'xl' | 'full'"]}
      />

      {/* Swipe-to-Close Touch Sheet (Vaul-style) */}
      <DocsComponent
        title="Swipe-to-Close Drag Handle (Vaul-style Bottom Sheet)"
        description="Features touch gesture listeners (onTouchStart, onTouchMove, onTouchEnd) allowing mobile users to drag down the handle or sheet content (>100px threshold) to dismiss the drawer smoothly."
        preview={
          <div className="w-full">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="bordered" startContent={<Icon icon="hugeicons:drag-drop-vertical" className="size-4" />}>
                  Open Swipeable Bottom Sheet
                </Button>
              </DrawerTrigger>
              <DrawerContent position="bottom" size="md" swipeToClose>
                <div className="mx-auto w-full max-w-sm text-center space-y-3">
                  <DrawerHeader>
                    <DrawerTitle>Swipe Down to Close</DrawerTitle>
                    <DrawerDescription>
                      Drag down the top handle or touch area on mobile devices to dismiss this bottom sheet.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-300">
                    Touch & Drag Threshold: &gt; 100px
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button color="primary">Got it</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        }
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Swipeable Bottom Sheet</Button>
  </DrawerTrigger>
  <DrawerContent position="bottom" size="md" swipeToClose>
    <DrawerHeader>
      <DrawerTitle>Swipe Down to Close</DrawerTitle>
      <DrawerDescription>Drag down the top handle to dismiss on touch devices.</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`}
        props={["swipeToClose: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — DrawerContent"
        description="Properties to configure the DrawerContent sheet primitive."
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
                  <td className="px-3 py-2 font-mono text-primary">swipeToClose</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">Enables touch drag gestures (Vaul-style) to swipe down/away to close.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">position</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'bottom' | 'top' | 'left' | 'right'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'right'</td>
                  <td className="px-3 py-2 text-muted-foreground">Screen edge position where drawer slides from.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg' | 'xl' | 'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Drawer height or width dimensional scale.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">overlay</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'blur' | 'dark' | 'light' | 'transparent' | 'none'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'blur'</td>
                  <td className="px-3 py-2 text-muted-foreground">Backdrop overlay style variant.</td>
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
