"use client";

import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { Confetti } from "@/components/ui/confetti/confetti";
import { confettiCode } from "@/components/ui/confetti/confetti.code";
import { Separator } from "@/components/ui/separator/separator";

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

      <CodeBlock
        code={confettiCode}
        componentName="confetti.tsx"
        description="Core wrapper component around canvas-confetti providing standard preset physics bursts and custom configuration parameters."
        tags={["React", "Tailwind", "Animation", "Confetti", "Effects"]}
      />

      <DocsComponent
        title="Default"
        description="Trigger a single burst from the center of the screen."
        props={[
          "fire: boolean | number",
          "variant: 'cannon' | 'fireworks' | 'shower' | 'school-pride'",
        ]}
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
        props={["variant: 'cannon' | 'fireworks' | 'shower' | 'school-pride'"]}
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
        props={["colors: string[]"]}
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
  colors={["#a855f7", "#eab308", "#10b981"]} 
/>`}
      />

      <DocsComponent
        title="Density & Spread"
        description="Configure the particleCount and spread to control the size and direction of the explosion."
        props={["particleCount: number", "spread: number"]}
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
  particleCount={400} 
  spread={180}        
/>`}
      />

      <DocsComponent
        title="Wind & Gravity"
        description="Fiddle with gravity (weight) and drift (wind speed) to float particles sideways."
        props={["gravity: number", "drift: number", "startVelocity: number"]}
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
  gravity={0.3}       
  drift={1.5}         
  startVelocity={20}  
/>`}
      />

      <DocsComponent
        title="Particle Scale"
        description="Use the scalar prop to adjust the size of the individual confetti particles."
        props={["scalar: number"]}
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
  scalar={2.5}       
  particleCount={40}  
/>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Confetti"
        description="Detailed specification of the Confetti component properties."
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
                  <td className="px-3 py-2 font-mono text-primary">fire</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean | number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Triggers a new animation burst when the value changes or is
                    set to true.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "cannon" | "fireworks" | "shower" | "school-pride"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"cannon"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The layout movement preset of the confetti particles.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    particleCount
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">100 / 50</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Total number of confetti particles per burst.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">spread</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">70</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Angle range spread of the burst particles in degrees.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">colors</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom color hex string array for particles.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">angle</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">90</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Angle direction from which particles rise (e.g. 90 is
                    straight up).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    startVelocity
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">45</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Initial speed of launched particles (higher values shoot
                    faster/higher).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">decay</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">0.9</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Friction factor determining how fast particles slow down.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">gravity</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Gravity factor pulling particles downwards. Decreasing
                    floats particles longer.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">drift</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">0</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sideways drift force simulating wind direction effects.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">ticks</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">200</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Lifetime limit of animation frames before particles
                    disappear.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">scalar</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Scaling size multiplier of the confetti particles.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">zIndex</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">100</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    CSS z-index of the confetti rendering canvas layer.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">options</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    confetti.Options
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Standard options passed directly to the canvas-confetti
                    library.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    onComplete
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    () =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback fired when a particle burst completes.
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
