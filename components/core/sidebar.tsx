"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scrollArea/scrollArea";
import { Input } from "@/components/ui/input/input";
import { SidebarHeader } from "./sidebar-header";
import { Sun, Moon, Search } from "lucide-react";

interface SidebarLink {
  href: string;
  label: string;
}

interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

export function Sidebar() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const sections: SidebarSection[] = [
    {
      title: "Overview",
      links: [
        { href: "/", label: "Introduction" },
      ],
    },
    {
      title: "Components",
      links: [
        { href: "/components/accordion", label: "Accordion" },
        { href: "/components/alert", label: "Alert" },
        { href: "/components/alertDialog", label: "Alert Dialog" },
        { href: "/components/avatar", label: "Avatar" },
        { href: "/components/avatarGroup", label: "Avatar Group" },
        { href: "/components/aspectRatio", label: "Aspect Ratio" },
        { href: "/components/badge", label: "Badge" },
        { href: "/components/breadcrumb", label: "Breadcrumb" },
        { href: "/components/button", label: "Button" },
        { href: "/components/buttonGroup", label: "Button Group" },
        { href: "/components/card", label: "Card" },
        { href: "/components/carousel", label: "Carousel" },
        { href: "/components/chart", label: "Chart" },
        { href: "/components/checkbox", label: "Checkbox" },
        { href: "/components/codeBlock", label: "Code Block" },
        { href: "/components/collapsible", label: "Collapsible" },
        { href: "/components/colorPicker", label: "Color Picker" },
        { href: "/components/combobox", label: "Combobox" },
        { href: "/components/command", label: "Command" },
        { href: "/components/contextMenu", label: "Context Menu" },
        { href: "/components/dataTable", label: "Data Table" },
        { href: "/components/datePicker", label: "Date Picker" },
        { href: "/components/dialog", label: "Dialog" },
        { href: "/components/drawer", label: "Drawer" },
        { href: "/components/dropdownMenu", label: "Dropdown Menu" },
        { href: "/components/fileUpload", label: "File Upload" },
        { href: "/components/form", label: "Form" },
        { href: "/components/formField", label: "Form Field" },
        { href: "/components/hoverCard", label: "Hover Card" },
        { href: "/components/image", label: "Image" },
        { href: "/components/input", label: "Input" },
        { href: "/components/inputOtp", label: "Input OTP" },
        { href: "/components/kbd", label: "Kbd" },
        { href: "/components/label", label: "Label" },
        { href: "/components/link", label: "Link" },
        { href: "/components/list", label: "List" },
        { href: "/components/menubar", label: "Menubar" },
        { href: "/components/navigationMenu", label: "Navigation Menu" },
        { href: "/components/numberInput", label: "Number Input" },
        { href: "/components/progress", label: "Progress" },
        { href: "/components/pagination", label: "Pagination" },
        { href: "/components/popover", label: "Popover" },
        { href: "/components/radioGroup", label: "Radio Group" },
        { href: "/components/rating", label: "Rating" },
        { href: "/components/resizable", label: "Resizable" },
        { href: "/components/scrollArea", label: "Scroll Area" },
        { href: "/components/select", label: "Select" },
        { href: "/components/separator", label: "Separator" },
        { href: "/components/sheet", label: "Sheet" },
        { href: "/components/sidebar", label: "Sidebar" },
        { href: "/components/skeleton", label: "Skeleton" },
        { href: "/components/slider", label: "Slider" },
        { href: "/components/spinner", label: "Spinner" },
        { href: "/components/statCard", label: "Stat Card" },
        { href: "/components/stepper", label: "Stepper" },
        { href: "/components/switch", label: "Switch" },
        { href: "/components/table", label: "Table" },
        { href: "/components/tabs", label: "Tabs" },
        { href: "/components/textarea", label: "Textarea" },
        { href: "/components/toast", label: "Toast" },
        { href: "/components/toggle", label: "Toggle" },
        { href: "/components/toggleGroup", label: "Toggle Group" },
        { href: "/components/tooltip", label: "Tooltip" },
        { href: "/components/typography", label: "Typography" },
      ],
    },
  ];

  const filteredSections = sections
    .map((section) => ({
      ...section,
      links: section.links.filter((link) =>
        link.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.links.length > 0);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 border-r border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-xl px-4 py-6 flex flex-col justify-between transition-all duration-300 z-50">
      <div className="flex flex-col gap-5 overflow-hidden flex-1">
        <div className="px-1">
          <SidebarHeader />
        </div>

        <div className="w-full px-1">
          <Input
            ref={inputRef}
            size="sm"
            variant="flat"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startContent={<Search className="size-3.5 text-zinc-400" />}
          />
        </div>

        <ScrollArea className="flex-1 pr-2">
          <nav className="space-y-6 pb-4">
            {filteredSections.length === 0 ? (
              <div className="px-3 py-4 text-xs text-muted-foreground text-center">
                No components found matching "{searchQuery}"
              </div>
            ) : (
              filteredSections.map((section) => (
                <div key={section.title} className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400/80 dark:text-zinc-500/80 px-3 mb-2">
                    {section.title}
                  </h4>
                  {section.links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "group flex items-center rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer relative",
                          isActive
                            ? "bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/40 dark:text-zinc-450 dark:hover:text-zinc-100 dark:hover:bg-zinc-900/40"
                        )}
                      >
                        {isActive && (
                          <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r-md bg-sky-500 dark:bg-sky-400" />
                        )}
                        <span className="pl-1">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              ))
            )}
          </nav>
        </ScrollArea>
      </div>

      <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 pt-4">
        {!mounted ? (
          <div className="h-9 w-full bg-zinc-200/40 dark:bg-zinc-900/40 rounded-xl animate-pulse" />
        ) : (
          <div className="flex items-center justify-between w-full p-1 bg-zinc-200/45 dark:bg-zinc-900/45 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl">
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer",
                !isDark
                  ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
              )}
            >
              <Sun className="h-3.5 w-3.5" />
              <span>Light</span>
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer",
                isDark
                  ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
              )}
            >
              <Moon className="h-3.5 w-3.5" />
              <span>Dark</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
