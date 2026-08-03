"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { Button } from "@/components/ui/button/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible/collapsible";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full max-w-sm space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4 py-2 border border-border rounded-xl bg-card">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            isIconOnly
            ariaLabel="Toggle collapsible content"
          >
            <Icon
              icon="hugeicons:arrow-down-01"
              className={`size-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="px-4 py-2 font-mono text-sm border border-border rounded-xl bg-muted/40">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="px-4 py-2 font-mono text-sm border border-border rounded-xl bg-muted/40">
          @radix-ui/react-collapsible
        </div>
        <div className="px-4 py-2 font-mono text-sm border border-border rounded-xl bg-muted/40">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
