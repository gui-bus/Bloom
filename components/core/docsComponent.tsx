"use client";

import { Monitor, Smartphone, Tablet } from "lucide-react";
import * as React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./codeBlock";

type Device = "mobile" | "tablet" | "desktop";

const devices: Record<
  Device,
  {
    label: string;
    width: string;
    icon: React.ElementType;
  }
> = {
  mobile: {
    label: "Mobile",
    width: "375px",
    icon: Smartphone,
  },
  tablet: {
    label: "Tablet",
    width: "768px",
    icon: Tablet,
  },
  desktop: {
    label: "Desktop",
    width: "100%",
    icon: Monitor,
  },
};

export const DevicePreviewContext = React.createContext<Device | null>(null);

function ResponsivePreview({ children }: { children: React.ReactNode }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState<number | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const activeDevice = React.useMemo<Device>(() => {
    if (width === null) return "desktop";
    if (width === 375) return "mobile";
    if (width === 768) return "tablet";
    if (width < 640) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  }, [width]);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const handle = e.currentTarget as HTMLDivElement;
    handle.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const parentRect = containerRef.current.parentElement?.getBoundingClientRect();

    if (!parentRect) return;

    let newWidth = e.clientX - rect.left;

    const minWidth = 375; // Mobile minimum width
    const maxWidth = parentRect.width - 32; // Limit to parent container width with padding safety

    if (newWidth < minWidth) newWidth = minWidth;
    if (newWidth > maxWidth) newWidth = maxWidth;

    setWidth(newWidth);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);

    const handle = e.currentTarget as HTMLDivElement;
    try {
      handle.releasePointerCapture(e.pointerId);
    } catch (err) {
      // Ignore
    }
  };

  const handlePresetClick = (deviceType: Device) => {
    if (deviceType === "mobile") {
      setWidth(375);
    } else if (deviceType === "tablet") {
      setWidth(768);
    } else {
      setWidth(null);
    }
  };

  return (
    <DevicePreviewContext.Provider value={activeDevice}>
      <div className="w-full space-y-4">
        <div className="flex h-9 items-center justify-end">
          <div className="flex items-center gap-1">
            {(Object.keys(devices) as Device[]).map((key) => {
              const item = devices[key];
              const IconComponent = item.icon;
              const active = activeDevice === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handlePresetClick(key)}
                  aria-label={`Preview on ${item.label}`}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition-colors outline-none",
                    active
                      ? "bg-zinc-100 dark:bg-zinc-800 text-foreground"
                      : "text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-900",
                  )}
                >
                  <IconComponent className="size-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex min-h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl bg-zinc-50/50 dark:bg-zinc-950/20 border border-zinc-200/50 dark:border-zinc-800/40 p-4 md:p-6">
          <div
            ref={containerRef}
            className={cn(
              "relative flex min-h-[400px] shrink-0 justify-center items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-xs",
              isDragging ? "transition-[height]" : "transition-[width,height] duration-300 ease-in-out",
            )}
            style={{
              width: width === null ? "100%" : `${width}px`,
              maxWidth: "100%",
            }}
          >
            <div className="w-full flex justify-center items-center overflow-auto p-4 sm:p-6 pr-8 sm:pr-8">
              {children}
            </div>

            {/* Drag handle */}
            <div
              className={cn(
                "absolute right-0 top-0 bottom-0 w-2.5 cursor-ew-resize flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 border-l border-zinc-200/60 dark:border-zinc-700/60 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors select-none",
                isDragging && "bg-sky-600 dark:bg-sky-500 text-white border-transparent dark:border-transparent hover:bg-sky-600 dark:hover:bg-sky-500",
              )}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            >
              <div className="flex flex-col gap-0.5">
                <div className={cn("w-0.5 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500", isDragging && "bg-white")} />
                <div className={cn("w-0.5 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500", isDragging && "bg-white")} />
                <div className={cn("w-0.5 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500", isDragging && "bg-white")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DevicePreviewContext.Provider>
  );
}

interface DocsComponentProps {
  title: string;
  description?: string;
  preview: React.ReactNode;
  code?: string | React.ReactNode;
  props?: string[];
  showResponsivePreview?: boolean;
}

export function DocsComponent({
  title,
  description,
  preview,
  code,
  props,
  showResponsivePreview = false,
}: DocsComponentProps) {
  const sectionId = React.useMemo(() => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }, [title]);

  function renderWithInlineCode(text: string) {
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    const regex = /'([^']+)'/g;
    let match = regex.exec(text);

    while (match !== null) {
      if (match.index > lastIndex) {
        elements.push(
          <span key={lastIndex}>{text.slice(lastIndex, match.index)}</span>,
        );
      }

      elements.push(
        <code
          key={match.index}
          className="mx-1 rounded-full border border-border px-2 py-1 font-sans font-semibold text-xs text-primary shadow-[inset_0_-1px_0_rgba(0,0,0,0.05)]"
        >
          {match[1]}
        </code>,
      );

      lastIndex = match.index + match[0].length;
      match = regex.exec(text);
    }

    if (lastIndex < text.length) {
      elements.push(<span key={lastIndex}>{text.slice(lastIndex)}</span>);
    }

    return elements;
  }

  const resolvedCode = React.useMemo(() => {
    if (!code) return null;

    if (React.isValidElement(code)) {
      return code;
    }

    if (typeof code === "string") {
      return <CodeBlock code={code} componentName="Usage" />;
    }

    return null;
  }, [code]);

  return (
    <section
      id={sectionId}
      className="space-y-4 rounded-3xl p-10 bg-white dark:bg-neutral-950/80 scroll-mt-24 transition-colors duration-200"
    >
      <div className="space-y-1">
        <h3 className="font-semibold text-xl text-foreground">{title}</h3>

        {description && (
          <p className="font-light text-sm text-muted-foreground leading-relaxed">
            {renderWithInlineCode(description)}
          </p>
        )}

        {props && props.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 pt-1">
            {props.map((prop) => (
              <span
                key={prop}
                className="text-xs font-mono p-3 rounded text-zinc-600 dark:text-zinc-400"
              >
                {renderWithInlineCode(prop)}
              </span>
            ))}
          </div>
        )}
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList
          background={false}
          className="w-full justify-start rounded-none p-0 h-10 gap-6"
        >
          <TabsTrigger
            value="preview"
            variant="underline"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-1 py-2 text-sm font-medium"
          >
            Preview
          </TabsTrigger>

          {resolvedCode && (
            <TabsTrigger
              value="code"
              variant="underline"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-1 py-2 text-sm font-medium"
            >
              Code
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="preview" className="mt-4">
          {showResponsivePreview ? (
            <ResponsivePreview>{preview}</ResponsivePreview>
          ) : (
            preview
          )}
        </TabsContent>

        {resolvedCode && (
          <TabsContent value="code" className="p-0 mt-4">
            {resolvedCode}
          </TabsContent>
        )}
      </Tabs>
    </section>
  );
}
