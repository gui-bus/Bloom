"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import {
  type TestimonialItem,
  Testimonials,
} from "@/components/ui/testimonials/testimonials";
import { testimonialsCode } from "@/components/ui/testimonials/testimonials.code";

const sampleTestimonials: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Bloom UI saved our design system overhaul team weeks of development time. The responsiveness and standard Tailwind structure are unmatched.",
    rating: 5,
    author: {
      name: "Alex Rivera",
      role: "Lead Engineer",
      company: "Synthetix",
      avatarUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    },
    featured: true,
  },
  {
    id: 2,
    quote:
      "The micro-animations and accessibility features out of the box are top-notch. Truly production-ready components that feel premium.",
    rating: 5,
    author: {
      name: "Sarah Chen",
      role: "Product Designer",
      company: "Helix",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    },
  },
  {
    id: 3,
    quote:
      "Exceptionally clean TypeScript code structure and effortless customization. It adapts to any design language seamlessly.",
    rating: 5,
    author: {
      name: "Marcus Vance",
      role: "CTO",
      company: "TechCorp",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
  },
  {
    id: 4,
    quote:
      "From initial setup to deployment, Bloom UI has been a developer's dream. The component API is highly intuitive.",
    rating: 4,
    author: {
      name: "Elena Rostova",
      role: "Frontend Architect",
      company: "Stark Ltd",
      avatarUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    },
  },
  {
    id: 5,
    quote:
      "Our conversion rate improved by 14% after we redesigned our landing pages with Bloom. It's clean, modern, and very fast.",
    rating: 5,
    author: {
      name: "Devon Webb",
      role: "Growth Manager",
      company: "Orbit",
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    },
  },
];

export default function TestimonialsComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Testimonials"
        description="Display user reviews, quotes, and customer feedback. Includes standard Grid, Masonry, Split, Carousel Slider, and infinite Marquee layouts."
      />

      <ImportSnippet
        importCode={`import { Testimonials } from "@/components/ui/testimonials/testimonials";`}
      />

      <InstallationBlock componentName="testimonials" />

      <Tabs defaultValue="testimonials">
        <TabsList background={false}>
          <TabsTrigger
            value="testimonials"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            testimonials.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="testimonials">
          <CodeBlock
            code={testimonialsCode}
            componentName="testimonials.tsx"
            description="Multi-layout testimonials showcase component rendering rating stars, client avatars, and infinite scrolling marquees."
            tags={[
              "React",
              "Tailwind",
              "UI Component",
              "Testimonials",
              "Marquee",
              "Slider",
            ]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Clean, standard grid structure with predefined column widths. Adapts gracefully to all screen breakpoints."
        preview={
          <div className="w-full p-6 bg-zinc-50 dark:bg-zinc-950/20 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80">
            <Testimonials
              items={sampleTestimonials.slice(0, 3)}
              layout="grid"
              cols={3}
            />
          </div>
        }
        code={`<Testimonials
  items={sampleTestimonials}
  layout="grid"
  cols={3}
/>`}
      />

      <DocsComponent
        title="Infinite Marquee Scroll"
        description="An infinite scrolling marquee of customer reviews powered by react-fast-marquee. Perfect for landing pages."
        preview={
          <div className="w-full p-6 bg-zinc-50 dark:bg-zinc-950/20 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80">
            <Testimonials
              items={sampleTestimonials}
              layout="marquee"
              speed={40}
              pauseOnHover={true}
            />
          </div>
        }
        code={`<Testimonials
  items={sampleTestimonials}
  layout="marquee"
  speed={40}
  pauseOnHover={true}
/>`}
      />

      <DocsComponent
        title="Carousel Slider"
        description="Depict reviews inside a draggable slideshow with arrow navigation and pagination dot overlays."
        preview={
          <div className="w-full p-6 bg-zinc-50 dark:bg-zinc-950/20 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80">
            <Testimonials
              items={sampleTestimonials}
              layout="carousel"
              cols={3}
              autoplay={true}
              autoplayDelay={3000}
            />
          </div>
        }
        code={`<Testimonials
  items={sampleTestimonials}
  layout="carousel"
  cols={3}
  autoplay={true}
/>`}
      />

      <DocsComponent
        title="Split Featured Layout"
        description="Highlight a main featured testimonial on the left side while displaying supporting secondary reviews on the right."
        preview={
          <div className="w-full p-6 bg-zinc-50 dark:bg-zinc-950/20 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80">
            <Testimonials items={sampleTestimonials} layout="split" />
          </div>
        }
        code={`<Testimonials
  items={sampleTestimonials}
  layout="split"
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
                  layout
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  "grid" | "masonry" | "carousel" | "split" | "marquee"
                </td>
                <td className="px-4 py-3 font-mono">"grid"</td>
                <td className="px-4 py-3">
                  Organizes reviews in grid, masonry, split, slider, or marquee
                  layouts.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  speed
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">40</td>
                <td className="px-4 py-3">
                  Marquee layout infinite movement speed index.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination />
    </div>
  );
}
