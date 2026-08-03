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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  CarouselThumbs,
} from "@/components/ui/carousel/carousel";
import { carouselCode } from "@/components/ui/carousel/carousel.code";
import { Badge } from "@/components/ui/badge/badge";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar/avatar";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const images = [
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800",
];

const features = [
  {
    title: "Analytics Dashboard",
    description: "Real-time metrics and visitor insights",
    icon: "hugeicons:analytics-01",
    badge: "Popular",
  },
  {
    title: "Authentication",
    description: "OAuth2 and multi-factor security",
    icon: "hugeicons:security-check",
    badge: "Secure",
  },
  {
    title: "Database Sync",
    description: "Automated distributed state syncing",
    icon: "hugeicons:database-01",
    badge: "Fast",
  },
  {
    title: "Cloud Storage",
    description: "Encrypted asset storage & CDN delivery",
    icon: "hugeicons:cloud-upload",
    badge: "Scalable",
  },
];

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Lead Engineer",
    comment:
      "Bloom UI saved our design system overhaul team weeks of development time.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    comment:
      "The micro-animations and accessibility features out of the box are top-notch.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    name: "Marcus Vance",
    role: "CTO at TechCorp",
    comment:
      "Exceptionally clean TypeScript code structure and effortless customization.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
];

export default function CarouselPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Carousel"
        description="A touch-enabled, responsive slider component for cycling through images, cards, or custom content with support for autoplay, vertical orientation, and pagination dots with navigation controls."
      />

      <ImportSnippet
        importCode={`import { Carousel } from "@/components/ui/carousel/carousel";`}
      />

      <InstallationBlock componentName="carousel" />

      <Tabs defaultValue="carousel">
        <TabsList background={false}>
          <TabsTrigger
            value="carousel"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            carousel.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="carousel">
          <CodeBlock
            code={carouselCode}
            componentName="carousel.tsx"
            description="Carousel slider component supporting touch gestures, autoplay, dots pagination, and clean navigation controls."
            tags={[
              "React",
              "Embla Carousel",
              "Tailwind",
              "UI Component",
              "Slider",
            ]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard image slider with navigation buttons placed alongside pagination dots underneath."
        preview={
          <div className="w-full">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 aspect-video bg-zinc-100 dark:bg-zinc-900">
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="size-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center justify-center gap-3 mt-4">
                <CarouselPrevious />
                <CarouselDots />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        }
        code={`<Carousel className="w-full">
  <CarouselContent>
    {images.map((src, index) => (
      <CarouselItem key={index}>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 aspect-video">
          <img src={src} alt={\`Slide \${index + 1}\`} className="size-full object-cover" />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <div className="flex items-center justify-center gap-3 mt-4">
    <CarouselPrevious />
    <CarouselDots />
    <CarouselNext />
  </div>
</Carousel>`}
      />

      {/* Header Controls */}
      <DocsComponent
        title="Header Controls"
        description="Place navigation buttons inside a section header alongside the title while keeping dots underneath."
        preview={
          <div className="w-full">
            <Carousel className="w-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
                    Featured Collections
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Handpicked items for your workflow
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </div>

              <CarouselContent className="-ml-3">
                {features.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-3 basis-full sm:basis-1/2 md:basis-1/3"
                  >
                    <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm flex flex-col justify-between h-40">
                      <div className="flex items-start justify-between">
                        <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                          <Icon icon={item.icon} className="size-5" />
                        </div>
                        <Badge color="primary">{item.badge}</Badge>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">{item.title}</h5>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots className="mt-4" />
            </Carousel>
          </div>
        }
        code={`<Carousel className="w-full">
  <div className="flex items-center justify-between mb-4">
    <h4 className="font-semibold text-lg">Featured Collections</h4>
    <div className="flex items-center gap-2">
      <CarouselPrevious />
      <CarouselNext />
    </div>
  </div>

  <CarouselContent className="-ml-3">
    {features.map((item, index) => (
      <CarouselItem key={index} className="pl-3 basis-full sm:basis-1/2 md:basis-1/3">
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 h-40">
          <h5>{item.title}</h5>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselDots className="mt-4" />
</Carousel>`}
      />

      {/* Testimonial Quote Carousel */}
      <DocsComponent
        title="Testimonial Quote Carousel"
        description="Display customer testimonials and reviews with bottom navigation buttons and dots."
        preview={
          <div className="w-full">
            <Carousel className="w-full">
              <CarouselContent className="-ml-3">
                {testimonials.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-3 basis-full sm:basis-1/2"
                  >
                    <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm flex flex-col justify-between space-y-4">
                      <p className="text-sm italic text-zinc-600 dark:text-zinc-300">
                        "{item.comment}"
                      </p>
                      <div className="flex items-center gap-3 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                        <Avatar size="sm">
                          <AvatarImage src={item.avatar} alt={item.name} />
                          <AvatarFallback>{item.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center justify-center gap-3 mt-4">
                <CarouselPrevious />
                <CarouselDots />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        }
        code={`<Carousel className="w-full">
  <CarouselContent className="-ml-3">
    {testimonials.map((item, index) => (
      <CarouselItem key={index} className="pl-3 basis-full sm:basis-1/2">
        <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <p>"{item.comment}"</p>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <div className="flex items-center justify-center gap-3 mt-4">
    <CarouselPrevious />
    <CarouselDots />
    <CarouselNext />
  </div>
</Carousel>`}
      />

      {/* Autoplay Carousel */}
      <DocsComponent
        title="Autoplay Carousel"
        description="Set 'autoplay' to true to automatically transition slides at specified intervals."
        preview={
          <div className="w-full">
            <Carousel autoplay autoplayDelay={2500} className="w-full">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 aspect-video bg-zinc-100 dark:bg-zinc-900">
                      <img
                        src={src}
                        alt={`Autoplay Slide ${index + 1}`}
                        className="size-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center justify-center gap-3 mt-4">
                <CarouselPrevious />
                <CarouselDots />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        }
        code={`<Carousel autoplay autoplayDelay={2500} className="w-full">
  <CarouselContent>
    {images.map((src, index) => (
      <CarouselItem key={index}>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 aspect-video">
          <img src={src} alt="Slide" className="size-full object-cover" />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <div className="flex items-center justify-center gap-3 mt-4">
    <CarouselPrevious />
    <CarouselDots />
    <CarouselNext />
  </div>
</Carousel>`}
        props={["autoplay: boolean", "autoplayDelay: number (ms)"]}
      />

      {/* Vertical Carousel */}
      <DocsComponent
        title="Vertical Carousel"
        description="Set 'orientation' to 'vertical' to scroll slides along the vertical axis."
        preview={
          <div className="w-full flex justify-center py-4">
            <Carousel orientation="vertical" className="w-full max-w-sm h-56">
              <CarouselContent className="h-56">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-2 h-full">
                    <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm flex flex-col items-center justify-center h-48">
                      <span className="text-xl font-bold text-sky-600 dark:text-sky-400">
                        Vertical Slide {index + 1}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        Scroll up / down
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center justify-center gap-3 mt-4">
                <CarouselPrevious />
                <CarouselDots />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        }
        code={`<Carousel orientation="vertical" className="w-full max-w-sm h-56">
  <CarouselContent className="h-56">
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="pt-2 h-full">
        <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 h-48">
          <span>Vertical Slide {index + 1}</span>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <div className="flex items-center justify-center gap-3 mt-4">
    <CarouselPrevious />
    <CarouselDots />
    <CarouselNext />
  </div>
</Carousel>`}
        props={["orientation: 'horizontal' | 'vertical'"]}
      />

      {/* Thumbnail Navigation */}
      <DocsComponent
        title="Thumbnail Navigation"
        description="Render a dedicated image thumbnail navigation bar using CarouselThumbs underneath the main slider."
        preview={
          <div className="w-full">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 aspect-video bg-zinc-100 dark:bg-zinc-900">
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="size-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselThumbs images={images} className="mt-3" />
            </Carousel>
          </div>
        }
        code={`<Carousel className="w-full">
  <CarouselContent>
    {images.map((src, index) => (
      <CarouselItem key={index}>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 aspect-video">
          <img src={src} alt="Slide" className="size-full object-cover" />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselThumbs images={images} className="mt-3" />
</Carousel>`}
      />

      {/* Touch Gestures & Physics */}
      <DocsComponent
        title="Free Drag & Swipe Sensitivity"
        description="Use 'dragFree' for continuous physics momentum scrolling and 'swipeThreshold' to customize gesture sensitivity on touch devices."
        preview={
          <div className="w-full">
            <Carousel dragFree swipeThreshold={5} className="w-full">
              <CarouselContent className="-ml-3">
                {features.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-3 basis-2/3 sm:basis-1/3"
                  >
                    <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm flex flex-col justify-between h-36">
                      <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 w-fit">
                        <Icon icon={item.icon} className="size-5" />
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">{item.title}</h5>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots className="mt-4" />
            </Carousel>
          </div>
        }
        code={`<Carousel dragFree swipeThreshold={5} className="w-full">
  <CarouselContent className="-ml-3">
    {features.map((item, index) => (
      <CarouselItem key={index} className="pl-3 basis-2/3 sm:basis-1/3">
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h5>{item.title}</h5>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselDots className="mt-4" />
</Carousel>`}
        props={["dragFree: boolean", "swipeThreshold: number"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Carousel Table */}
      <DocsComponent
        title="Props — Carousel"
        description="Properties for configuring the Carousel component."
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
                  <td className="px-3 py-2 font-mono text-primary">
                    orientation
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'horizontal' | 'vertical'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    'horizontal'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Axis orientation for slide motion and navigation controls.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">autoplay</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables automatic slide transitions.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    autoplayDelay
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">3000</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Interval in milliseconds between automatic slide
                    transitions.
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
                    Pauses autoplay progression when mouse hovers over the
                    slider container.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">dragFree</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables free momentum drag physics without snap-to-grid
                    constraints.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    swipeThreshold
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">10</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Pixel distance threshold to trigger swipe navigation on
                    touch devices.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">opts</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    EmblaOptionsType
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Configuration options passed directly to Embla Carousel
                    instance.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">setApi</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"(api: CarouselApi) => void"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback function to receive the Embla Carousel API
                    instance.
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
