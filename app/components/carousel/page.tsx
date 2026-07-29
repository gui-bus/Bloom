import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Carousel",
  description: "A touch-enabled, responsive slider component for cycling through images, cards, or custom content.",
};
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel/carousel";
import { carouselCode } from "@/components/ui/carousel/carousel.code";
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

export default function CarouselPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Carousel"
        description="A touch-enabled, responsive slider component for cycling through images, cards, or custom content with support for autoplay, vertical orientation, and pagination dots."
      />

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
            description="Carousel slider component supporting touch gestures, autoplay, dots pagination, and vertical layouts."
            tags={["React", "Embla Carousel", "Tailwind", "UI Component", "Slider"]}
          />
        </TabsContent>
      </Tabs>

      {/* Image Carousel with Dots */}
      <DocsComponent
        title="Image Slider with Navigation & Dots"
        description="Standard image slider with previous/next controls and animated pagination indicators."
        preview={
          <div className="w-full max-w-lg px-8">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="overflow-hidden rounded-2xl border border-border aspect-video bg-muted">
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="size-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <CarouselDots />
            </Carousel>
          </div>
        }
        code={`<Carousel className="w-full max-w-lg">
  <CarouselContent>
    {images.map((src, index) => (
      <CarouselItem key={index}>
        <div className="overflow-hidden rounded-2xl border border-border aspect-video">
          <img src={src} alt={\`Slide \${index + 1}\`} className="size-full object-cover" />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselDots />
</Carousel>`}
      />

      {/* Autoplay Carousel */}
      <DocsComponent
        title="Autoplay Carousel"
        description="Set 'autoplay' to true to automatically transition slides every interval. Pauses on hover."
        preview={
          <div className="w-full max-w-lg px-8">
            <Carousel autoplay autoplayDelay={2500} className="w-full">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="overflow-hidden rounded-2xl border border-border aspect-video bg-muted">
                      <img
                        src={src}
                        alt={`Autoplay Slide ${index + 1}`}
                        className="size-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <CarouselDots />
            </Carousel>
          </div>
        }
        code={`<Carousel autoplay autoplayDelay={2500} className="w-full max-w-lg">
  <CarouselContent>
    {images.map((src, index) => (
      <CarouselItem key={index}>
        <div className="overflow-hidden rounded-2xl border border-border aspect-video">
          <img src={src} alt={\`Slide \${index + 1}\`} className="size-full object-cover" />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselDots />
</Carousel>`}
        props={["autoplay: boolean", "autoplayDelay: number (ms)"]}
      />

      {/* Vertical Carousel */}
      <DocsComponent
        title="Vertical Carousel"
        description="Set 'orientation' to 'vertical' to scroll slides along the vertical axis."
        preview={
          <div className="w-full max-w-sm flex justify-center py-6">
            <Carousel orientation="vertical" className="w-full h-56">
              <CarouselContent className="h-56">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-2 h-full">
                    <div className="p-4 rounded-xl border border-border bg-card text-card-foreground shadow-sm flex flex-col items-center justify-center h-48">
                      <span className="text-2xl font-bold text-primary">Vertical Slide {index + 1}</span>
                      <span className="text-xs text-muted-foreground mt-1">Scroll up / down</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        }
        code={`<Carousel orientation="vertical" className="w-full h-56">
  <CarouselContent className="h-56">
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="pt-2 h-full">
        <div className="p-4 rounded-xl border border-border h-48">
          <span>Vertical Slide {index + 1}</span>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        props={["orientation: 'horizontal' | 'vertical'"]}
      />

      {/* Multi-item Card Carousel */}
      <DocsComponent
        title="Multi-Item Card Carousel"
        description="Display multiple cards per slide using basis utility classes on CarouselItem."
        preview={
          <div className="w-full max-w-xl px-8">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-2 basis-1/2 md:basis-1/3">
                    <div className="p-4 rounded-xl border border-border bg-card text-card-foreground shadow-sm flex flex-col items-center justify-center h-32">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                      <span className="text-xs text-muted-foreground mt-1">Card Item</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        }
        code={`<Carousel className="w-full">
  <CarouselContent className="-ml-2">
    {Array.from({ length: 6 }).map((_, index) => (
      <CarouselItem key={index} className="pl-2 basis-1/2 md:basis-1/3">
        <div className="p-4 rounded-xl border border-border h-32">
          <span>{index + 1}</span>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Carousel"
        description="Properties for configuring the Carousel component."
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
                    Axis orientation for slide motion and navigation controls.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">autoplay</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables automatic slide transitions (pauses on hover).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">autoplayDelay</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">3000</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Interval in milliseconds between automatic slide transitions.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">opts</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">EmblaOptionsType</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Configuration options passed directly to Embla Carousel instance.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">setApi</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(api: CarouselApi) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback function to receive the Embla Carousel API instance.
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
