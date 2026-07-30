export const linkCode = `"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center gap-1.5 font-medium transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20 rounded-sm",
  {
    variants: {
      variant: {
        default: "text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 hover:underline",
        muted: "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline",
        underline: "text-zinc-900 dark:text-zinc-100 underline underline-offset-4 hover:text-sky-500 dark:hover:text-sky-400",
        ghost: "text-zinc-900 dark:text-zinc-100 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-lg no-underline",
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
        {isExternal && !endContent && (
          <Icon icon="hugeicons:arrow-up-right-01" className="size-3.5 shrink-0 opacity-70" />
        )}
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
`;
