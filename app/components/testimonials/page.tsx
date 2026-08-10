"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
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
      name: "Jordan K.",
      role: "Growth Lead",
      company: "ApexFlow",
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    },
  },
  {
    id: 6,
    quote:
      "I highly recommend Bloom UI to anyone building modern web applications. The documentation is incredibly helpful.",
    rating: 5,
    author: {
      name: "Li Wei",
      role: "Fullstack Engineer",
      company: "ByteDance",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    },
  },
];

export default function TestimonialsPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Testimonials"
        description="A versatile component for showcasing customer reviews, ratings, and social proof with support for multiple layouts (grid, masonry, carousel, split) and design token integration."
      />

      <ImportSnippet
        importCode={`import { Testimonials } from "@/components/ui/testimonials/testimonials";`}
      />

      <InstallationBlock componentName="testimonials" />

      <Tabs defaultValue="code">
        <TabsList background={false}>
          <TabsTrigger
            value="code"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            testimonials.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="code">
          <CodeBlock
            code={testimonialsCode}
            componentName="testimonials.tsx"
            description="Testimonials component supporting multiple layout orientations, embla-carousel sliding, masonry blocks, and ratings stars."
            tags={[
              "React",
              "Embla Carousel",
              "Tailwind",
              "Testimonials",
              "Social Proof",
            ]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Grid Layout"
        description="A standard responsive grid layout ideal for standard pages with consistent testimonial card heights."
        preview={
          <div className="w-full">
            <Testimonials
              items={sampleTestimonials.slice(0, 3)}
              layout="grid"
              cols={3}
            />
          </div>
        }
        code={`<Testimonials items={testimonials} layout="grid" cols={3} />`}
      />

      <DocsComponent
        title="Masonry / Columns Layout"
        description="A CSS columns-based masonry layout designed to handle varying lengths of quotes without leaving uneven whitespace."
        preview={
          <div className="w-full">
            <Testimonials
              items={sampleTestimonials}
              layout="masonry"
              cols={3}
            />
          </div>
        }
        code={`<Testimonials items={testimonials} layout="masonry" cols={3} />`}
      />

      <DocsComponent
        title="Carousel Slider"
        description="A swipe-enabled sliding carousel powered by Embla, perfect for compact spaces or showcasing many testimonials without page bloat."
        preview={
          <div className="w-full">
            <Testimonials
              items={sampleTestimonials}
              layout="carousel"
              cols={3}
              autoplay
              autoplayDelay={5000}
            />
          </div>
        }
        code={`<Testimonials
  items={testimonials}
  layout="carousel"
  cols={3}
  autoplay
  autoplayDelay={5000}
/>`}
      />

      <DocsComponent
        title="Split: Featured Aside"
        description="A layout focusing emphasis on a major client story with a larger card, alongside a secondary grid of supporting reviews."
        preview={
          <div className="w-full">
            <Testimonials
              items={sampleTestimonials}
              layout="split"
              splitVariant="featured-aside"
            />
          </div>
        }
        code={`<Testimonials items={testimonials} layout="split" splitVariant="featured-aside" />`}
      />

      <DocsComponent
        title="Split: Quote & Author"
        description="An editorial-style layout showing a large, single high-impact quote on one side, and corresponding author details on the other."
        preview={
          <div className="w-full">
            <Testimonials
              items={sampleTestimonials}
              layout="split"
              splitVariant="quote-author"
            />
          </div>
        }
        code={`<Testimonials items={testimonials} layout="split" splitVariant="quote-author" />`}
      />

      <AccessibilityCard
        features={[
          "Accessible star rating descriptions through semantic aria-labels.",
          "Keyboard navigation support for sliding carousel buttons.",
          "Aria-regions defined for carousel slides for screen reader readability.",
        ]}
      />

      <DocsPagination
        prevPage={{ name: "Tabs", href: "/components/tabs" }}
        nextPage={{ name: "Textarea", href: "/components/textarea" }}
      />
    </div>
  );
}
