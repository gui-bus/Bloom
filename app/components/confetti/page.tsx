"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { Confetti } from "@/components/ui/confetti/confetti";
import { confettiCode } from "@/components/ui/confetti/confetti.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ConfettiPage() {
  const [fireCount, setFireCount] = React.useState(0);
  const [colorsFireCount, setColorsFireCount] = React.useState(0);
  const [densityFireCount, setDensityFireCount] = React.useState(0);
  const [physicsFireCount, setPhysicsFireCount] = React.useState(0);
  const [scaleFireCount, setScaleFireCount] = React.useState(0);
  const [preset, setPreset] = React.useState<
    "cannon" | "fireworks" | "shower" | "school-pride"
  >("cannon");

  const fireConfetti = (type: typeof preset) => {
    setPreset(type);
    setFireCount((prev) => prev + 1);
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Confetti"
        description="A physics-based particle burst animation component built on top of canvas-confetti, supporting multiple presets and colors."
      />

      <ImportSnippet
        importCode={`import { Confetti } from "@/components/ui/confetti/confetti";`}
      />

      <InstallationBlock componentName="confetti" />

      <Tabs defaultValue="confetti">
        <TabsList background={false}>
          <TabsTrigger
            value="confetti"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            confetti.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="confetti">
          <CodeBlock
            code={confettiCode}
            componentName="confetti.tsx"
            description="Core wrapper component around canvas-confetti providing standard preset physics bursts and custom configuration parameters."
            tags={["React", "Tailwind", "Animation", "Confetti", "Effects"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Trigger a single burst from the center of the screen."
        preview={
          <div className="w-full flex justify-center py-6">
            <Button onClick={() => fireConfetti("cannon")}>
              Fire Cannon Confetti!
            </Button>
            {fireCount > 0 && preset === "cannon" && (
              <Confetti fire={fireCount} variant="cannon" />
            )}
          </div>
        }
        code={`const [fireCount, setFireCount] = React.useState(0);

<Button onClick={() => setFireCount(prev => prev + 1)}>
  Fire Cannon Confetti!
</Button>

<Confetti fire={fireCount} variant="cannon" />`}
      />

      <DocsComponent
        title="Presets"
        description="Try out the different preset physics patterns: fireworks, falling shower, or themed school pride colors."
        preview={
          <div className="w-full flex flex-wrap justify-center gap-3 py-6">
            <Button variant="flat" onClick={() => fireConfetti("fireworks")}>
              Fireworks Preset
            </Button>
            <Button variant="flat" onClick={() => fireConfetti("shower")}>
              Shower Preset
            </Button>
            <Button variant="flat" onClick={() => fireConfetti("school-pride")}>
              School Pride Colors
            </Button>
            {fireCount > 0 && preset !== "cannon" && (
              <Confetti key={fireCount} fire={fireCount} variant={preset} />
            )}
          </div>
        }
        code={`<Confetti fire={fireCount} variant="fireworks" />
<Confetti fire={fireCount} variant="shower" />
<Confetti fire={fireCount} variant="school-pride" />`}
      />

      <DocsComponent
        title="Custom Colors"
        description="Pass a list of hex codes to the colors prop to change the palette of the particles."
        preview={
          <div className="w-full flex justify-center py-6">
            <Button
              variant="bordered"
              onClick={() => setColorsFireCount((prev) => prev + 1)}
            >
              Launch Theme Confetti
            </Button>
            {colorsFireCount > 0 && (
              <Confetti
                fire={colorsFireCount}
                colors={["#a855f7", "#eab308", "#10b981"]}
              />
            )}
          </div>
        }
        code={`<Confetti
  fire={fireCount}
  colors={["#a855f7", "#eab308", "#10b981"]} // Purple, Gold, Emerald
/>`}
      />

      <DocsComponent
        title="Density & Spread"
        description="Configure the particleCount and spread to control the size and direction of the explosion."
        preview={
          <div className="w-full flex justify-center py-6">
            <Button
              variant="bordered"
              onClick={() => setDensityFireCount((prev) => prev + 1)}
            >
              Launch Heavy Wide Cannon
            </Button>
            {densityFireCount > 0 && (
              <Confetti
                fire={densityFireCount}
                particleCount={400}
                spread={180}
              />
            )}
          </div>
        }
        code={`<Confetti
  fire={fireCount}
  particleCount={400} // High density burst
  spread={180}        // Extends all the way horizontally
/>`}
      />

      <DocsComponent
        title="Wind & Gravity"
        description="Fiddle with gravity (weight) and drift (wind speed) to float particles sideways."
        preview={
          <div className="w-full flex justify-center py-6">
            <Button
              variant="bordered"
              onClick={() => setPhysicsFireCount((prev) => prev + 1)}
            >
              Launch Floating Sideways Confetti
            </Button>
            {physicsFireCount > 0 && (
              <Confetti
                fire={physicsFireCount}
                gravity={0.3}
                drift={1.5}
                startVelocity={20}
              />
            )}
          </div>
        }
        code={`<Confetti
  fire={fireCount}
  gravity={0.3}       // Very light gravity (floats longer)
  drift={1.5}         // Strong sideways drift to the right
  startVelocity={20}  // Slower starting speed
/>`}
      />

      <DocsComponent
        title="Particle Scale"
        description="Use the scalar prop to adjust the size of the individual confetti particles."
        preview={
          <div className="w-full flex justify-center py-6">
            <Button
              variant="bordered"
              onClick={() => setScaleFireCount((prev) => prev + 1)}
            >
              Launch Oversized Confetti
            </Button>
            {scaleFireCount > 0 && (
              <Confetti fire={scaleFireCount} scalar={2.5} particleCount={40} />
            )}
          </div>
        }
        code={`<Confetti
  fire={fireCount}
  scalar={2.5}       // Over-sized elements
  particleCount={40}  // Fewer elements to prevent cluttering
/>`}
      />

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Prop
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Type
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Default
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  fire
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  boolean | number
                </td>
                <td className="px-4 py-3 font-mono">true</td>
                <td className="px-4 py-3">
                  Triggers a new animation burst when the value changes or is
                  set to true.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  variant
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  "cannon" | "fireworks" | "shower" | "school-pride"
                </td>
                <td className="px-4 py-3 font-mono">"cannon"</td>
                <td className="px-4 py-3">
                  The layout movement preset of the confetti particles.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  particleCount
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">100 / 50</td>
                <td className="px-4 py-3">
                  Total number of confetti particles per burst.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  spread
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">70</td>
                <td className="px-4 py-3">
                  Angle range spread of the burst particles in degrees.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  colors
                </td>
                <td className="px-4 py-3 font-mono text-primary">string[]</td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Custom color hex string array for particles.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  angle
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">90</td>
                <td className="px-4 py-3">
                  Angle direction from which particles rise (e.g. 90 is straight
                  up).
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  startVelocity
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">45</td>
                <td className="px-4 py-3">
                  Initial speed of launched particles (higher values shoot
                  faster/higher).
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  decay
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">0.9</td>
                <td className="px-4 py-3">
                  Friction factor determining how fast particles slow down.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  gravity
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">1</td>
                <td className="px-4 py-3">
                  Gravity factor pulling particles downwards. Decreasing floats
                  particles longer.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  drift
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">0</td>
                <td className="px-4 py-3">
                  Sideways drift force simulating wind direction effects.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  ticks
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">200</td>
                <td className="px-4 py-3">
                  Lifetime limit of animation frames before particles disappear.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  scalar
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">1</td>
                <td className="px-4 py-3">
                  Scaling size multiplier of the confetti particles.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  zIndex
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">100</td>
                <td className="px-4 py-3">
                  CSS z-index of the confetti rendering canvas layer.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  options
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  confetti.Options
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Standard options passed directly to the canvas-confetti
                  library.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onComplete
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  () =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Callback fired when a particle burst completes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination
        prev={{ title: "Timeline", href: "/components/timeline" }}
        next={{ title: "Tour Guide", href: "/components/tour" }}
      />
    </div>
  );
}
