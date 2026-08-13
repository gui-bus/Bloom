"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as React from "react";
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

  React.useImperativeHandle(ref, () => contentRef.current as HTMLDivElement);

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
        "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
        className,
      )}
      {...props}
    >
      {shouldRenderChildren ? children : null}
    </CollapsiblePrimitive.CollapsibleContent>
  );
});
CollapsibleContent.displayName =
  CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
