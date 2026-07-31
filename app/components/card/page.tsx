"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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
    <div className="space-y-8">
      <DocsTitle
        title="Card"
        description="A content container component supporting headers, bodies, footers, interactive states (hoverable, pressable), custom radii, variants, and clean neutral theme backgrounds."
      />

      <ImportSnippet importCode={`import { Card } from "@/components/ui/card/card";`} />

      <InstallationBlock componentName="card" />

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
            tags={["React", "Tailwind", "UI Component", "Layout", "Card"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard card layout composed of CardHeader, CardTitle, CardDescription, CardBody, and CardFooter."
        preview={
          <div className="w-full">
            <Card className="w-full sm:w-96">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardBody>
                <p>
                  Your subscription is set to renew automatically on August 15, 2026.
                </p>
              </CardBody>
              <CardFooter className="flex justify-between gap-3">
                <Button variant="flat" color="default">Dismiss</Button>
                <Button color="primary">View all</Button>
              </CardFooter>
            </Card>
          </div>
        }
        code={`<Card className="w-full sm:w-96">
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardBody>
    <p>
      Your subscription is set to renew automatically on August 15, 2026.
    </p>
  </CardBody>
  <CardFooter className="flex justify-between gap-3">
    <Button variant="flat" color="default">Dismiss</Button>
    <Button color="primary">View all</Button>
  </CardFooter>
</Card>`}
      />

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Cards support default, bordered, flat, ghost, shadow, glassmorphism, and gradient visual variants."
        preview={
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <CardDescription>Completely transparent content container.</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="shadow">
              <CardHeader>
                <CardTitle>Shadow</CardTitle>
                <CardDescription>Elevated card with deep shadow projection.</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="glassmorphism">
              <CardHeader>
                <CardTitle>Glassmorphism</CardTitle>
                <CardDescription>Frosted glass backdrop-blur effect.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        }
        code={`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
  <Card variant="default">...</Card>
  <Card variant="bordered">...</Card>
  <Card variant="flat">...</Card>
  <Card variant="ghost">...</Card>
  <Card variant="shadow">...</Card>
  <Card variant="glassmorphism">...</Card>
</div>`}
        props={["variant: 'default' | 'bordered' | 'flat' | 'ghost' | 'shadow' | 'glassmorphism' | 'gradient'"]}
      />

      {/* Color Themes */}
      <DocsComponent
        title="Color Themes"
        description="Apply subtle status accent indicators to cards while preserving a clean, neutral white/zinc dark theme card background."
        preview={
          <div className="w-full flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="primary"</span>
              <Card color="primary" className="w-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon icon="hugeicons:information-circle" className="size-5 text-sky-500" />
                      <CardTitle>System Information</CardTitle>
                    </div>
                    <Badge color="primary">Primary</Badge>
                  </div>
                  <CardDescription>Clean neutral card container with a subtle primary border indicator.</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="success"</span>
              <Card color="success" className="w-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon icon="hugeicons:checkmark-circle-02" className="size-5 text-emerald-500" />
                      <CardTitle>Deployment Successful</CardTitle>
                    </div>
                    <Badge color="success">Success</Badge>
                  </div>
                  <CardDescription>All 12 microservices deployed without errors.</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="warning"</span>
              <Card color="warning" className="w-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon icon="hugeicons:alert-02" className="size-5 text-amber-500" />
                      <CardTitle>Storage Warning</CardTitle>
                    </div>
                    <Badge color="warning">Warning</Badge>
                  </div>
                  <CardDescription>Your database storage is at 84% capacity.</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="danger"</span>
              <Card color="danger" className="w-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon icon="hugeicons:cancel-circle" className="size-5 text-rose-500" />
                      <CardTitle>Connection Error</CardTitle>
                    </div>
                    <Badge color="danger">Danger</Badge>
                  </div>
                  <CardDescription>Failed to reach primary API cluster endpoint.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        }
        code={`<div className="space-y-4 w-full">
  <Card color="primary">
    <CardHeader>
      <CardTitle>System Information</CardTitle>
      <CardDescription>Neutral background with primary accent indicator</CardDescription>
    </CardHeader>
  </Card>

  <Card color="success">
    <CardHeader>
      <CardTitle>Deployment Successful</CardTitle>
    </CardHeader>
  </Card>

  <Card color="danger">
    <CardHeader>
      <CardTitle>Connection Error</CardTitle>
    </CardHeader>
  </Card>
</div>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Interactive */}
      <DocsComponent
        title="Interactive Cards"
        description="Use 'isHoverable' and 'isPressable' to create interactive cards with hover translation and active press micro-animations."
        preview={
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card isHoverable className="w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Hoverable Card</CardTitle>
                  <Badge color="primary">Hover Me</Badge>
                </div>
                <CardDescription>Translates slightly upward on hover with shadow depth.</CardDescription>
              </CardHeader>
            </Card>

            <Card isPressable isHoverable className="w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Pressable Card</CardTitle>
                  <Badge color="success">Click Me</Badge>
                </div>
                <CardDescription>Scales down on click/press feedback.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        }
        code={`<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
  <Card isHoverable>
    <CardHeader>
      <CardTitle>Hoverable Card</CardTitle>
    </CardHeader>
  </Card>

  <Card isPressable isHoverable>
    <CardHeader>
      <CardTitle>Pressable Card</CardTitle>
    </CardHeader>
  </Card>
</div>`}
        props={["isHoverable: boolean", "isPressable: boolean"]}
      />

      {/* Loading State */}
      <DocsComponent
        title="Loading State (isLoading)"
        description="Pass 'isLoading' to render a clean backdrop overlay and animated spinner during data fetching."
        preview={
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card isLoading className="w-full">
              <CardHeader>
                <CardTitle>Fetching Analytics</CardTitle>
                <CardDescription>Loading real-time user metrics...</CardDescription>
              </CardHeader>
              <CardBody>
                <p>Card content is temporarily blurred and non-interactive while loading.</p>
              </CardBody>
            </Card>

            <Card color="primary" isLoading className="w-full">
              <CardHeader>
                <CardTitle>Processing Payment</CardTitle>
                <CardDescription>Communicating with payment gateway...</CardDescription>
              </CardHeader>
              <CardBody>
                <p>Please wait while we confirm your transaction.</p>
              </CardBody>
            </Card>
          </div>
        }
        code={`<Card isLoading>
  <CardHeader>
    <CardTitle>Fetching Analytics</CardTitle>
  </CardHeader>
</Card>`}
        props={["isLoading: boolean"]}
      />

      {/* Orientation */}
      <DocsComponent
        title="Horizontal Orientation"
        description="Pass 'orientation=&quot;horizontal&quot;' to switch from vertical column stacking to responsive side-by-side flex layout."
        preview={
          <div className="w-full">
            <Card orientation="horizontal" className="w-full">
              <CardHeader className="sm:w-1/3">
                <CardTitle>Horizontal Card</CardTitle>
                <CardDescription>Header section aligned on the left side on desktop screens.</CardDescription>
              </CardHeader>
              <CardBody className="sm:w-2/3 pt-6 sm:pt-0">
                <p>
                  Horizontal card layout is ideal for media items, search results, compact dashboard summaries, and product listings.
                </p>
              </CardBody>
            </Card>
          </div>
        }
        code={`<Card orientation="horizontal" className="w-full">
  <CardHeader className="sm:w-1/3">
    <CardTitle>Horizontal Card</CardTitle>
    <CardDescription>Header section aligned on left side.</CardDescription>
  </CardHeader>
  <CardBody className="sm:w-2/3 pt-6 sm:pt-0">
    <p>Horizontal layout content section.</p>
  </CardBody>
</Card>`}
        props={["orientation: 'vertical' | 'horizontal'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Card Table */}
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
                    'default' | 'bordered' | 'flat' | 'ghost' | 'shadow' | 'glassmorphism' | 'gradient'
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
                    Semantic color theme of the card accent indicator.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">orientation</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'vertical' | 'horizontal'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'vertical'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Layout direction helper for stacking or row layout.
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
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isLoading</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays an overlay spinner state during data loading.
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
    
      <DocsPagination />
    </div>
  );
}
