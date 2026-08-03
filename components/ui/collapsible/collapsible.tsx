"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

export interface CollapsibleContentProps
  extends React.ComponentPropsWithoutRef<
    typeof CollapsiblePrimitive.CollapsibleContent
  > {
  lazy?: boolean;
}

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  CollapsibleContentProps
>(({ className, children, lazy = false, ...props }, ref) => {
  const [hasBeenOpened, setHasBeenOpened] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => contentRef.current!);

  React.useEffect(() => {
    if (!lazy) return;
    const el = contentRef.current;
    if (!el) return;

    const checkState = () => {
      const state = el.getAttribute("data-state");
      if (state === "open") {
        setHasBeenOpened(true);
      }
    };

    checkState();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-state"
        ) {
          checkState();
        }
      });
    });

    observer.observe(el, { attributes: true });
    return () => observer.disconnect();
  }, [lazy]);

  const shouldRenderChildren = !lazy || hasBeenOpened;

  return (
    <CollapsiblePrimitive.CollapsibleContent
      ref={contentRef}
      className={cn(
        "grid transition-all duration-300 ease-in-out",
        "data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]",
        className,
      )}
      {...props}
    >
      <div className="overflow-hidden min-h-0">
        {shouldRenderChildren ? children : null}
      </div>
    </CollapsiblePrimitive.CollapsibleContent>
  );
});
CollapsibleContent.displayName =
  CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
