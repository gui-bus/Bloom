export const kbdCode = `import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const kbdVariants = cva(
  "inline-flex items-center justify-center font-mono font-medium select-none rounded-lg border transition-colors shadow-xs",
  {
    variants: {
      variant: {
        flat: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200/80 dark:border-zinc-700/80",
        bordered: "bg-transparent text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-700",
        solid: "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 border-transparent",
      },
      size: {
        sm: "h-5 min-w-[20px] px-1.5 text-[10px]",
        md: "h-6 min-w-[24px] px-2 text-xs",
        lg: "h-7 min-w-[28px] px-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "flat",
      size: "md",
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(kbdVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </kbd>
    );
  }
);
Kbd.displayName = "Kbd";

export { Kbd, kbdVariants };
`;
