export const aspectRatioCode = `"use client";

import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

export interface AspectRatioProps
  extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
  ratio?: number;
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ ratio = 16 / 9, ...props }, ref) => (
  <AspectRatioPrimitive.Root ref={ref} ratio={ratio} {...props} />
));

AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;

export { AspectRatio };
`;
