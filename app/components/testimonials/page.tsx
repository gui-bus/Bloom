"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
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

      <DocsComponent
        title="Default"
        description="Clean, standard grid structure with predefined column widths. Adapts gracefully to all screen breakpoints."
        props={[
          "items: TestimonialItem[]",
          "layout: 'grid' | 'masonry' | 'carousel' | 'split' | 'marquee'",
          "cols: number",
        ]}
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
        props={[
          "layout: 'grid' | 'masonry' | 'carousel' | 'split' | 'marquee'",
          "speed: number",
          "pauseOnHover: boolean",
        ]}
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
        props={[
          "layout: 'grid' | 'masonry' | 'carousel' | 'split' | 'marquee'",
          "autoplay: boolean",
          "autoplayDelay: number",
        ]}
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
        props={[
          "layout: 'grid' | 'masonry' | 'carousel' | 'split' | 'marquee'",
        ]}
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Testimonials"
        description="Configuration options for the Testimonials component."
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
                  <td className="px-3 py-2 font-mono text-primary">items</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    TestimonialItem[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of testimonial review objects
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">layout</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'grid' | 'masonry' | 'carousel' | 'split' | 'marquee'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'grid'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Organizes reviews in grid, masonry, split, slider, or
                    marquee layouts
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">cols</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">3</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Number of columns for grid and carousel layouts
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">speed</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">40</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Marquee layout infinite movement speed index
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
                    Pauses marquee on hover
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">autoplay</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables automatic slide transitions in carousel
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    autoplayDelay
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">3000</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Delay in milliseconds between autoplay slide transitions
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
