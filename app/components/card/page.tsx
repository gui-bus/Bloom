import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Card",
  description: "Flexible card container with headers, body, footer, interactive states, and semantic color variants.",
};

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
} from "@/components/ui/card/card";
import { cardCode } from "@/components/ui/card/card.code";
import { Button } from "@/components/ui/button/button";
import { Badge } from "@/components/ui/badge/badge";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function CardComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Card"
        description="A content container component supporting headers, bodies, footers, interactive states (hoverable, pressable), custom radii, variants, and semantic color themes."
      />

      <Tabs defaultValue="card">
        <TabsList background={false}>
          <TabsTrigger
            value="card"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            card.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="card">
          <CodeBlock
            code={cardCode}
            componentName="card.tsx"
            description="Core implementation of the Card component with modular subcomponents and full style variance support."
            tags={["React", "Tailwind", "UI Component", "Layout"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Example */}
      <DocsComponent
        title="Basic Usage"
        description="Standard card layout with CardHeader, CardTitle, CardDescription, CardBody, and CardFooter."
        preview={
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-muted-foreground">
                Your subscription is set to renew automatically on August 15, 2026.
              </p>
            </CardBody>
            <CardFooter className="flex justify-between">
              <Button variant="flat" color="default">Dismiss</Button>
              <Button color="primary">View all</Button>
            </CardFooter>
          </Card>
        }
        code={`<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardBody>
    <p className="text-sm text-muted-foreground">
      Your subscription is set to renew automatically on August 15, 2026.
    </p>
  </CardBody>
  <CardFooter className="flex justify-between">
    <Button variant="flat" color="default">Dismiss</Button>
    <Button color="primary">View all</Button>
  </CardFooter>
</Card>`}
      />

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Cards support default, bordered, flat, ghost, and shadow visual styles."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default</CardTitle>
                <CardDescription>Standard background with border and subtle shadow.</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Bordered</CardTitle>
                <CardDescription>Transparent background with standard border.</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="flat">
              <CardHeader>
                <CardTitle>Flat</CardTitle>
                <CardDescription>Muted background without border.</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="ghost">
              <CardHeader>
                <CardTitle>Ghost</CardTitle>
                <CardDescription>Completely transparent until hovered or focused.</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="shadow">
              <CardHeader>
                <CardTitle>Shadow</CardTitle>
                <CardDescription>Elevated card with deep shadow projection.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        }
        code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
  <Card variant="default">
    <CardHeader>
      <CardTitle>Default</CardTitle>
      <CardDescription>Standard background with border and subtle shadow.</CardDescription>
    </CardHeader>
  </Card>

  <Card variant="bordered">
    <CardHeader>
      <CardTitle>Bordered</CardTitle>
      <CardDescription>Transparent background with standard border.</CardDescription>
    </CardHeader>
  </Card>

  <Card variant="flat">
    <CardHeader>
      <CardTitle>Flat</CardTitle>
      <CardDescription>Muted background without border.</CardDescription>
    </CardHeader>
  </Card>

  <Card variant="ghost">
    <CardHeader>
      <CardTitle>Ghost</CardTitle>
      <CardDescription>Completely transparent until hovered or focused.</CardDescription>
    </CardHeader>
  </Card>

  <Card variant="shadow">
    <CardHeader>
      <CardTitle>Shadow</CardTitle>
      <CardDescription>Elevated card with deep shadow projection.</CardDescription>
    </CardHeader>
  </Card>
</div>`}
        props={["variant: 'default' | 'bordered' | 'flat' | 'ghost' | 'shadow'"]}
      />

      {/* Colors */}
      <DocsComponent
        title="Color Themes"
        description="Apply semantic color palettes to cards."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Card color="primary" variant="flat">
              <CardHeader>
                <CardTitle>Primary Flat</CardTitle>
                <CardDescription className="text-primary/80">Soft tinted primary card</CardDescription>
              </CardHeader>
            </Card>

            <Card color="success" variant="bordered">
              <CardHeader>
                <CardTitle>Success Bordered</CardTitle>
                <CardDescription className="text-success/80">Outline success card</CardDescription>
              </CardHeader>
            </Card>

            <Card color="danger" variant="shadow">
              <CardHeader>
                <CardTitle>Danger Shadow</CardTitle>
                <CardDescription className="text-danger-foreground/80">Solid danger card</CardDescription>
              </CardHeader>
            </Card>
          </div>
        }
        code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
  <Card color="primary" variant="flat">
    <CardHeader>
      <CardTitle>Primary Flat</CardTitle>
      <CardDescription className="text-primary/80">Soft tinted primary card</CardDescription>
    </CardHeader>
  </Card>

  <Card color="success" variant="bordered">
    <CardHeader>
      <CardTitle>Success Bordered</CardTitle>
      <CardDescription className="text-success/80">Outline success card</CardDescription>
    </CardHeader>
  </Card>

  <Card color="danger" variant="shadow">
    <CardHeader>
      <CardTitle>Danger Shadow</CardTitle>
      <CardDescription className="text-danger-foreground/80">Solid danger card</CardDescription>
    </CardHeader>
  </Card>
</div>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Interactive */}
      <DocsComponent
        title="Interactive Cards"
        description="Use isHoverable and isPressable to create interactive cards with hover translation and click animations."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Card isHoverable className="w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Hoverable Card</CardTitle>
                  <Badge color="primary">Hover Me</Badge>
                </div>
                <CardDescription>Translates slightly upward on hover.</CardDescription>
              </CardHeader>
            </Card>

            <Card isPressable isHoverable className="w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Pressable Card</CardTitle>
                  <Badge color="success">Click Me</Badge>
                </div>
                <CardDescription>Scales down on press/click feedback.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        }
        code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
  <Card isHoverable className="w-full">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle>Hoverable Card</CardTitle>
        <Badge color="primary">Hover Me</Badge>
      </div>
      <CardDescription>Translates slightly upward on hover.</CardDescription>
    </CardHeader>
  </Card>

  <Card isPressable isHoverable className="w-full">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle>Pressable Card</CardTitle>
        <Badge color="success">Click Me</Badge>
      </div>
      <CardDescription>Scales down on press/click feedback.</CardDescription>
    </CardHeader>
  </Card>
</div>`}
        props={["isHoverable: boolean", "isPressable: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Card"
        description="Properties to configure the Card component."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'flat' | 'ghost' | 'shadow'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual variant style of the card.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Semantic color theme of the card.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'xl'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Border radius scale.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isHoverable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables subtle hover translation and shadow enhancement.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isPressable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables active press animations and interactive button role accessibility.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isDisabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables interaction and applies muted opacity styling.
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
