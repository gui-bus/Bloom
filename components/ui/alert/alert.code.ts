export const alertCode = `"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-2xl border p-4 text-sm flex gap-3 items-start font-medium leading-relaxed",
  {
    variants: {
      variant: {
        info: "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 [&>svg]:text-sky-500",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 [&>svg]:text-emerald-500",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 [&>svg]:text-amber-500",
        danger: "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300 [&>svg]:text-rose-500",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const iconMap = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: AlertCircle,
};

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof alertVariants> {
  title?: React.ReactNode;
  icon?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", title, icon, children, ...props }, ref) => {
    const IconComponent = iconMap[variant || "info"];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {icon !== undefined ? icon : <IconComponent className="size-5 shrink-0 mt-0.5" />}
        <div className="flex flex-col gap-1 flex-1">
          {title && <h5 className="font-bold text-sm leading-none">{title}</h5>}
          {children && <div className="text-xs opacity-90">{children}</div>}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

export { Alert, alertVariants };`;
