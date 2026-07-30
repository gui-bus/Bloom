"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar/avatar";
import { AvatarGroup } from "@/components/ui/avatarGroup/avatarGroup";
import { avatarGroupCode } from "@/components/ui/avatarGroup/avatarGroup.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function AvatarGroupPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Avatar Group"
        description="Stack multiple avatars together with smooth cubic-bezier hover expansion, orientation support (horizontal or vertical), count truncation, and clean dark/light neutral theme styling."
      />

      <InstallationBlock componentName="avatarGroup" />

      <Tabs defaultValue="avatarGroup">
        <TabsList background={false}>
          <TabsTrigger
            value="avatarGroup"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            avatarGroup.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="avatarGroup">
          <CodeBlock
            code={avatarGroupCode}
            componentName="avatarGroup.tsx"
            description="AvatarGroup component for displaying overlapping avatar stacks with butter-smooth hover expansion transitions and orientation control."
            tags={["React", "Tailwind", "UI Component", "Layout", "AvatarGroup"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="A standard avatar group component stacking multiple user avatars with smooth hover expansion transitions."
        preview={
          <div className="w-full">
            <AvatarGroup>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Emily Davis" />
                <AvatarFallback>ED</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Alex Rivera" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
        }
        code={`<AvatarGroup>
  <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
    <AvatarFallback>SJ</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Emily Davis" />
    <AvatarFallback>ED</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Alex Rivera" />
    <AvatarFallback>AR</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>MK</AvatarFallback>
  </Avatar>
</AvatarGroup>`}
      />

      {/* Orientation */}
      <DocsComponent
        title="Orientation (Horizontal & Vertical)"
        description="Control the stack direction using 'orientation' ('horizontal' or 'vertical'). Vertical stacks expand vertically and translate avatars smoothly to the right on hover."
        preview={
          <div className="w-full flex flex-wrap items-start gap-12">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-3">orientation="horizontal"</span>
              <AvatarGroup orientation="horizontal" color="primary">
                <Avatar><AvatarFallback>H1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>H2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>H3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-3">orientation="vertical"</span>
              <AvatarGroup orientation="vertical" color="secondary">
                <Avatar><AvatarFallback>V1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>V2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>V3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>
          </div>
        }
        code={`{/* Horizontal Stack */}
<AvatarGroup orientation="horizontal">
  <Avatar><AvatarFallback>H1</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>H2</AvatarFallback></Avatar>
</AvatarGroup>

{/* Vertical Stack */}
<AvatarGroup orientation="vertical">
  <Avatar><AvatarFallback>V1</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>V2</AvatarFallback></Avatar>
</AvatarGroup>`}
        props={["orientation: 'horizontal' | 'vertical'"]}
      />

      {/* Pressable Avatars in Stack */}
      <DocsComponent
        title="Pressable Avatar Stack (isPressable)"
        description="Combine AvatarGroup with 'isPressable' to allow users to click individual avatars in an overlapping stack."
        preview={
          <div className="w-full">
            <AvatarGroup>
              <Avatar isPressable onClick={() => alert("Clicked Sarah")}>
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <Avatar isPressable onClick={() => alert("Clicked Emily")}>
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Emily Davis" />
                <AvatarFallback>ED</AvatarFallback>
              </Avatar>
              <Avatar isPressable onClick={() => alert("Clicked Alex")}>
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Alex Rivera" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
        }
        code={`<AvatarGroup>
  <Avatar isPressable onClick={() => alert("Clicked Sarah")}>
    <AvatarImage src="..." alt="Sarah Jenkins" />
    <AvatarFallback>SJ</AvatarFallback>
  </Avatar>
  <Avatar isPressable onClick={() => alert("Clicked Emily")}>
    <AvatarImage src="..." alt="Emily Davis" />
    <AvatarFallback>ED</AvatarFallback>
  </Avatar>
</AvatarGroup>`}
      />

      {/* Max Limit & Overflow */}
      <DocsComponent
        title="Max Limit & Overflow Badge"
        description="Use the 'max' prop to cap visible avatars and automatically display a '+N' excess count badge formatted with clean dark/light neutral colors."
        preview={
          <div className="w-full">
            <AvatarGroup max={3}>
              <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>E</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>F</AvatarFallback></Avatar>
            </AvatarGroup>
          </div>
        }
        code={`<AvatarGroup max={3}>
  <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>E</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>F</AvatarFallback></Avatar>
</AvatarGroup>`}
        props={["max: number"]}
      />

      {/* Grid Layout */}
      <DocsComponent
        title="Grid Layout (isGrid)"
        description="Display avatars in a spaced, non-overlapping grid layout instead of a stack using 'isGrid'."
        preview={
          <div className="w-full">
            <AvatarGroup isGrid>
              <Avatar><AvatarFallback>G1</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>G2</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>G3</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>G4</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>G5</AvatarFallback></Avatar>
            </AvatarGroup>
          </div>
        }
        code={`<AvatarGroup isGrid>
  <Avatar><AvatarFallback>G1</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>G2</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>G3</AvatarFallback></Avatar>
</AvatarGroup>`}
        props={["isGrid: boolean"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Pass 'size' to the AvatarGroup container to scale all child avatars uniformly."
        preview={
          <div className="w-full space-y-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">size="sm"</span>
              <AvatarGroup size="sm">
                <Avatar><AvatarFallback>S1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>S2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>S3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">size="md"</span>
              <AvatarGroup size="md">
                <Avatar><AvatarFallback>M1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>M2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>M3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">size="lg"</span>
              <AvatarGroup size="lg">
                <Avatar><AvatarFallback>L1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>L2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>L3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>
          </div>
        }
        code={`<AvatarGroup size="lg">
  <Avatar><AvatarFallback>L1</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>L2</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>L3</AvatarFallback></Avatar>
</AvatarGroup>`}
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      {/* Color Themes */}
      <DocsComponent
        title="Color Themes"
        description="Propagate color ring themes to all child avatars via the 'color' prop. Stacked vertically for clear visual comparison."
        preview={
          <div className="w-full flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-1.5">color="default"</span>
              <AvatarGroup color="default">
                <Avatar><AvatarFallback>DF1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>DF2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>DF3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-1.5">color="primary"</span>
              <AvatarGroup color="primary">
                <Avatar><AvatarFallback>PR1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>PR2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>PR3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-1.5">color="secondary"</span>
              <AvatarGroup color="secondary">
                <Avatar><AvatarFallback>SC1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>SC2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>SC3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-1.5">color="accent"</span>
              <AvatarGroup color="accent">
                <Avatar><AvatarFallback>AC1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>AC2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>AC3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-1.5">color="success"</span>
              <AvatarGroup color="success">
                <Avatar><AvatarFallback>SU1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>SU2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>SU3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-1.5">color="warning"</span>
              <AvatarGroup color="warning">
                <Avatar><AvatarFallback>WR1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>WR2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>WR3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-1.5">color="danger"</span>
              <AvatarGroup color="danger">
                <Avatar><AvatarFallback>DG1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>DG2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>DG3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>
          </div>
        }
        code={`<div className="space-y-4">
  <AvatarGroup color="default">...</AvatarGroup>
  <AvatarGroup color="primary">...</AvatarGroup>
  <AvatarGroup color="secondary">...</AvatarGroup>
  <AvatarGroup color="accent">...</AvatarGroup>
  <AvatarGroup color="success">...</AvatarGroup>
  <AvatarGroup color="warning">...</AvatarGroup>
  <AvatarGroup color="danger">...</AvatarGroup>
</div>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props AvatarGroup Table */}
      <DocsComponent
        title="Props — AvatarGroup"
        description="Properties for configuring the AvatarGroup component."
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
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'horizontal' | 'vertical'</td>
                  <td className="px-3 py-2 text-muted-foreground">'horizontal'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Stack direction scale for grouping avatars.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">max</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Maximum number of avatars to display before rendering excess (+N) badge.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">total</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Explicit total user count for calculating overflow badge numbers.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isGrid</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders avatars in a spaced grid layout instead of an overlapping stack.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isDisabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables interaction and applies grayscale filter to all avatars.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Uniform size scale propagated to all child avatars.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Color theme applied to outer borders of all avatars in the stack.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'full'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Border radius scale applied to all avatars in the group.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isBordered</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables outer ring borders around each avatar in the stack.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">renderCount</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">(count: number) =&gt; ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom render function for the excess count badge (+N).
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
