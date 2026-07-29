"use client";

import * as React from "react";
import { Toaster as SonnerToaster, toast } from "sonner";

export interface ToastProps {
  theme?: "light" | "dark" | "system";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
}

export function Toast({ theme = "system", position = "bottom-right" }: ToastProps) {
  return (
    <SonnerToaster
      theme={theme}
      position={position}
      toastOptions={{
        className:
          "rounded-2xl border border-border bg-background text-foreground shadow-lg font-sans text-xs",
      }}
    />
  );
}

export { toast };
