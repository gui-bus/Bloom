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
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Avatar Group"
        description="Stack multiple avatars together with smooth hover expansion, count truncation, and automatic property inheritance."
      />

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
            description="AvatarGroup component for displaying overlapping avatar stacks with excess count indicators."
            tags={["React", "Tailwind", "UI Component", "Layout"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Stack */}
      <DocsComponent
        title="Basic Stack"
        description="Groups multiple avatars with default overlapping and ring borders."
        preview={
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="User 1" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="User 2" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="User 3" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        }
        code={`<AvatarGroup>
  <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="User 1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="User 2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="User 3" />
    <AvatarFallback>U3</AvatarFallback>
  </Avatar>
</AvatarGroup>`}
      />

      {/* Max Count Overflow */}
      <DocsComponent
        title="Max Limit & Overflow"
        description="Use the 'max' prop to truncate the number of visible avatars and automatically render a '+N' excess badge."
        preview={
          <AvatarGroup max={3}>
            <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>E</AvatarFallback></Avatar>
          </AvatarGroup>
        }
        code={`<AvatarGroup max={3}>
  <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>E</AvatarFallback></Avatar>
</AvatarGroup>`}
        props={["max: number"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Pass 'size' to the AvatarGroup container to scale all child avatars uniformly."
        preview={
          <div className="space-y-4">
            <AvatarGroup size="sm">
              <Avatar><AvatarFallback>S1</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>S2</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>S3</AvatarFallback></Avatar>
            </AvatarGroup>
            <AvatarGroup size="md">
              <Avatar><AvatarFallback>M1</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>M2</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>M3</AvatarFallback></Avatar>
            </AvatarGroup>
            <AvatarGroup size="lg">
              <Avatar><AvatarFallback>L1</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>L2</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>L3</AvatarFallback></Avatar>
            </AvatarGroup>
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
        title="Color Borders"
        description="Propagate color ring themes to all child avatars via the 'color' prop."
        preview={
          <div className="space-y-4">
            <AvatarGroup color="primary">
              <Avatar><AvatarFallback>P1</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>P2</AvatarFallback></Avatar>
            </AvatarGroup>
            <AvatarGroup color="success">
              <Avatar><AvatarFallback>S1</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>S2</AvatarFallback></Avatar>
            </AvatarGroup>
            <AvatarGroup color="danger">
              <Avatar><AvatarFallback>D1</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>D2</AvatarFallback></Avatar>
            </AvatarGroup>
          </div>
        }
        code={`<AvatarGroup color="primary">
  <Avatar><AvatarFallback>P1</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>P2</AvatarFallback></Avatar>
</AvatarGroup>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

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
                  <td className="px-3 py-2 font-mono text-primary">max</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Maximum number of avatars to display before showing excess count (+N).
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
                    Color theme applied to outer borders of all avatars.
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
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isBordered</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables outer ring borders around each avatar in the stack.
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
