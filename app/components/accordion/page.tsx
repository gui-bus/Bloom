import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion/accordion";
import { accordionCode } from "@/components/ui/accordion/accordion.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function AccordionPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Accordion"
        description="A vertically stacked set of interactive headings that expand or collapse associated content sections."
      />

      <Tabs defaultValue="accordion">
        <TabsList background={false}>
          <TabsTrigger
            value="accordion"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            accordion.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="accordion">
          <CodeBlock
            code={accordionCode}
            componentName="accordion.tsx"
            description="Accordion component powered by Radix Primitives supporting single or multiple collapsible items."
            tags={["React", "Radix UI", "Tailwind", "UI Component", "Accordion"]}
          />
        </TabsContent>
      </Tabs>

      {/* Single Collapsible */}
      <DocsComponent
        title="Single Collapsible"
        description="Allows expanding only one item at a time. Setting 'collapsible' enables collapsing the active item back."
        preview={
          <div className="w-full max-w-lg">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to WAI-ARIA standards, automatically handling keyboard navigation and ARIA attributes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled with Tailwind CSS?</AccordionTrigger>
                <AccordionContent>
                  Yes. It uses Tailwind CSS design tokens and smooth height transitions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I install it via CLI?</AccordionTrigger>
                <AccordionContent>
                  Yes! Use the Bloom UI CLI to add it directly to your project codebase.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        }
        code={`<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to WAI-ARIA standards.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled with Tailwind CSS?</AccordionTrigger>
    <AccordionContent>
      Yes. It uses Tailwind CSS design tokens.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        props={["type: 'single' | 'multiple'", "collapsible: boolean"]}
      />

      {/* Multiple Open */}
      <DocsComponent
        title="Multiple Items Open"
        description="Set 'type' to 'multiple' to allow expanding several accordion panels simultaneously."
        preview={
          <div className="w-full max-w-lg">
            <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Bloom UI?</AccordionTrigger>
                <AccordionContent>
                  Bloom UI is a modern, ultra-accessible React component library built with Radix and Tailwind CSS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
                <AccordionContent>
                  Yes, full dark mode support is built-in out of the box using semantic color tokens.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        }
        code={`<Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Bloom UI?</AccordionTrigger>
    <AccordionContent>
      Bloom UI is an ultra-accessible component library.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
    <AccordionContent>
      Yes, full dark mode support is built-in.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Accordion"
        description="Properties for configuring the Accordion component."
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
                  <td className="px-3 py-2 font-mono text-primary">type</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'single' | 'multiple'</td>
                  <td className="px-3 py-2 text-muted-foreground">'single'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Determines whether single or multiple items can be opened simultaneously.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">collapsible</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    When type is 'single', allows closing an item by clicking its trigger again.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">defaultValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"string | string[]"}</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The value of the item(s) to expand by default when uncontrolled.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">disabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables interaction with all accordion items.
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
