import type { Metadata } from "next";
import { Fira_Code, Montserrat } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/atom-one-dark.css";
import { ThemeProvider } from "@/components/core/theme-provider";
import { Sidebar } from "@/components/core/sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const firacode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bloom UI — Premium React Component Library",
    template: "%s — Bloom UI",
  },
  description:
    "An accessible, customizable, and high-performance React component library built on Radix UI, Tailwind CSS v4, and Framer Motion.",
  keywords: [
    "Bloom UI",
    "React",
    "Tailwind CSS v4",
    "Radix UI",
    "Framer Motion",
    "Design System",
    "UI Components",
    "Accessibility",
    "WAI-ARIA",
    "Next.js",
  ],
  authors: [{ name: "Guilherme Bus" }],
  creator: "Guilherme Bus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bloomui.dev",
    title: "Bloom UI — Premium React Component Library",
    description:
      "An accessible, customizable, and high-performance React component library built on Radix UI, Tailwind CSS v4, and Framer Motion.",
    siteName: "Bloom UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom UI — Premium React Component Library",
    description:
      "An accessible, customizable, and high-performance React component library built on Radix UI, Tailwind CSS v4, and Framer Motion.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${firacode.variable} antialiased font-sans bg-background dark:bg-neutral-950/80 text-foreground transition-colors duration-200 w-full max-w-[110rem] mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex ">
            <Sidebar />
            <main className="flex-1 ml-0 md:ml-64 p-4 sm:p-6 md:p-8 pt-20 md:pt-8 transition-all duration-300 max-w-full min-w-0">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
