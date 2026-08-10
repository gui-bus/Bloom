"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { LogoClouds } from "@/components/ui/logoClouds/logoClouds";
import { logoCloudsCode } from "@/components/ui/logoClouds/logoClouds.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function LogoCloudsComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Logo Clouds"
        description="A beautiful and highly customizable logo showcase component. Supports static/hoverable grids, infinite sliding marquees, and dynamic crossfade swap animations using Framer Motion."
      />

      <ImportSnippet
        importCode={`import { LogoClouds } from "@/components/ui/logoClouds/logoClouds";`}
      />

      <InstallationBlock componentName="logoClouds" />

      <Tabs defaultValue="logoClouds">
        <TabsList background={false}>
          <TabsTrigger
            value="logoClouds"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            logoClouds.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="logoClouds">
          <CodeBlock
            code={logoCloudsCode}
            componentName="logoClouds.tsx"
            description="Core implementation of the LogoClouds component supporting multiple layouts, customized SVG partners, and animation effects."
            tags={[
              "React",
              "Tailwind",
              "UI Component",
              "Framer Motion",
              "Marquee",
              "Logo Clouds",
            ]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Grid Layout"
        description="A clean, responsive grid layout for displaying client or partner logos. Each card features subtle shadows, borders, and hover scale transitions."
        preview={
          <div className="w-full rounded-3xl border border-zinc-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6">
            <LogoClouds
              variant="grid"
              title="TRUSTED BY THE BEST"
              subtitle="Powering businesses of all sizes"
              cols={4}
            />
          </div>
        }
        code={`<LogoClouds
  variant="grid"
  title="TRUSTED BY THE BEST"
  subtitle="Powering businesses of all sizes"
  cols={4}
/>`}
      />

      <DocsComponent
        title="Marquee Layout"
        description="An infinite, smooth-scrolling horizontal marquee. Includes customizable speed, direction, hover behavior, and edge gradient masking for a premium, transparent fade effect."
        preview={
          <div className="w-full rounded-3xl border border-zinc-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 overflow-hidden">
            <LogoClouds
              variant="marquee"
              title="INTEGRATION PARTNERS"
              subtitle="Seamlessly connect with your tool stack"
              speed={45}
              direction="left"
              pauseOnHover={true}
              gradient={true}
            />
          </div>
        }
        code={`<LogoClouds
  variant="marquee"
  title="INTEGRATION PARTNERS"
  subtitle="Seamlessly connect with your tool stack"
  speed={45}
  direction="left"
  pauseOnHover={true}
  gradient={true}
/>`}
      />

      <DocsComponent
        title="Swap Layout"
        description="A dynamic showcase where logos periodically swap with a smooth crossfade and slide transition using Framer Motion. Ideal for showing a large partner list in a compact space."
        preview={
          <div className="w-full rounded-3xl border border-zinc-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6">
            <LogoClouds
              variant="swap"
              title="OUR DISTRIBUTED NETWORK"
              subtitle="Growing together with innovative teams"
              swapCount={4}
              interval={2500}
            />
          </div>
        }
        code={`<LogoClouds
  variant="swap"
  title="OUR DISTRIBUTED NETWORK"
  subtitle="Growing together with innovative teams"
  swapCount={4}
  interval={2500}
/>`}
      />

      <DocsComponent
        title="Props"
        description="Available parameters to configure the LogoClouds component."
        preview={null}
        code={
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border font-medium text-foreground">
                  <th className="px-3 py-2">Prop</th>
                  <th className="px-3 py-2">Type</th>
                  <th className="px-3 py-2">Default</th>
                  <th className="px-3 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "grid" | "marquee" | "swap"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"grid"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Determines the display layout style of the logo cloud.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">logos</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    Logo[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    DEFAULT_LOGOS
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    A list of logo objects containing ID, name, and SVG
                    ReactNode.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">title</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode | string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Optional uppercase small tracking text displayed at the top.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">subtitle</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode | string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Optional larger subtitle displayed below the title.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">speed</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">40</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Speed of translation in pixels per second. (Marquee variant
                    only).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    direction
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "left" | "right"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"left"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sliding direction of the marquee flow.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    pauseOnHover
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Pauses the marquee animation when the cursor hovers over it.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">gradient</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables a beautiful CSS mask-image linear gradient to fade
                    out left/right edges of marquee.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">cols</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    2 | 3 | 4 | 5 | 6
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">4</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Number of grid columns on desktop sizes. (Grid variant
                    only).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    swapCount
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">4</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Number of visible slots that swap logos. (Swap variant
                    only).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">interval</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">3000</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Frequency (in ms) at which one of the logos swaps out. (Swap
                    variant only).
                  </td>
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
