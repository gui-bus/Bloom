"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
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
        description="Stack multiple avatars together with smooth cubic-bezier hover expansion, orientation support (horizontal or vertical), overlap density control, count truncation, and clean dark/light neutral theme styling."
      />

      <ImportSnippet importCode={`import { AvatarGroup } from "@/components/ui/avatarGroup/avatarGroup";`} />

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
    <AvatarFallback>MK</AvatarFallback>
  </Avatar>
</AvatarGroup>`}
      />

      {/* Overlap Density */}
      <DocsComponent
        title="Overlap Density (overlap)"
        description="Adjust spacing overlap tightness using the 'overlap' prop ('sm', 'md', 'lg')."
        preview={
          <div className="w-full space-y-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">overlap="sm"</span>
              <AvatarGroup overlap="sm">
                <Avatar><AvatarFallback>S1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>S2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>S3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">overlap="md" (Default)</span>
              <AvatarGroup overlap="md">
                <Avatar><AvatarFallback>M1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>M2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>M3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">overlap="lg"</span>
              <AvatarGroup overlap="lg">
                <Avatar><AvatarFallback>L1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>L2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>L3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>
          </div>
        }
        code={`<AvatarGroup overlap="sm">...</AvatarGroup>
<AvatarGroup overlap="md">...</AvatarGroup>
<AvatarGroup overlap="lg">...</AvatarGroup>`}
        props={["overlap: 'sm' | 'md' | 'lg'"]}
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
</AvatarGroup>`}
        props={["max: number"]}
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
                  <td className="px-3 py-2 font-mono text-primary">overlap</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'sm' | 'md' | 'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Overlap spacing tightness density between avatars.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">orientation</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'horizontal' | 'vertical'</td>
                  <td className="px-3 py-2 text-muted-foreground">'horizontal'</td>
                  <td className="px-3 py-2 text-muted-foreground">Stack direction scale for grouping avatars.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">max</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Maximum number of avatars to display before rendering excess (+N) badge.</td>
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
