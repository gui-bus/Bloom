"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center gap-1.5 font-medium transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
  {
    variants: {
      variant: {
        default: "text-primary hover:text-primary/80 hover:underline",
        muted: "text-muted-foreground hover:text-foreground hover:underline",
        underline: "text-foreground underline underline-offset-4 hover:text-primary",
        ghost: "text-foreground hover:text-primary hover:bg-accent/50 px-2 py-1 rounded-md no-underline",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  isExternal?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const UiLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      size,
      href,
      isExternal = false,
      startContent,
      endContent,
      children,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const isAnchor = isExternal || href.startsWith("http://") || href.startsWith("https://");
    const linkTarget = isExternal ? "_blank" : target;
    const linkRel = isExternal ? "noopener noreferrer" : rel;

    const content = (
      <>
        {startContent}
        <span>{children}</span>
        {endContent}
        {isExternal && !endContent && <ExternalLink className="size-3.5 shrink-0 opacity-70" />}
      </>
    );

    if (isAnchor) {
      return (
        <a
          ref={ref}
          href={href}
          target={linkTarget}
          rel={linkRel}
          className={cn(linkVariants({ variant, size }), className)}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant, size }), className)}
        {...props}
      >
        {content}
      </Link>
    );
  }
);
UiLink.displayName = "Link";

export { UiLink as Link, linkVariants };
