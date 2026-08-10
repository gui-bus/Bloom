"use client";

import { Menu, Moon, Search, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import * as React from "react";
import { Input } from "@/components/ui/input/input";
import { ScrollArea } from "@/components/ui/scrollArea/scrollArea";
import { cn } from "@/lib/utils";
import { SidebarHeader } from "./sidebar-header";

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
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, []);

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
        { href: "/installation", label: "Installation" },
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
        { href: "/components/audioRecorder", label: "Audio Recorder" },
        { href: "/components/badge", label: "Badge" },
        { href: "/components/banner", label: "Banner" },
        { href: "/components/breadcrumb", label: "Breadcrumb" },
        { href: "/components/button", label: "Button" },
        { href: "/components/buttonGroup", label: "Button Group" },
        { href: "/components/card", label: "Card" },
        { href: "/components/carousel", label: "Carousel" },
        { href: "/components/chart", label: "Chart" },
        { href: "/components/checkbox", label: "Checkbox" },
        { href: "/components/codeBlock", label: "Code Block" },
        { href: "/components/collapsible", label: "Collapsible" },
        { href: "/components/confetti", label: "Confetti" },
        { href: "/components/colorPicker", label: "Color Picker" },
        { href: "/components/colorSwatches", label: "Color Swatches" },
        { href: "/components/combobox", label: "Combobox" },
        { href: "/components/command", label: "Command" },
        { href: "/components/contextMenu", label: "Context Menu" },
        { href: "/components/dataTable", label: "Data Table" },
        { href: "/components/datePicker", label: "Date Picker" },
        { href: "/components/dialog", label: "Dialog" },
        { href: "/components/diffViewer", label: "Diff Viewer" },
        { href: "/components/drawer", label: "Drawer" },
        { href: "/components/dropdownMenu", label: "Dropdown Menu" },
        { href: "/components/eventCalendar", label: "Event Calendar" },
        { href: "/components/fileExplorer", label: "File Explorer" },
        { href: "/components/fileUpload", label: "File Upload" },
        { href: "/components/filterBuilder", label: "Filter Builder" },
        { href: "/components/form", label: "Form" },
        { href: "/components/formField", label: "Form Field" },
        { href: "/components/ganttChart", label: "Gantt Chart" },
        { href: "/components/heatmapGrid", label: "Heatmap Grid" },
        { href: "/components/hoverCard", label: "Hover Card" },
        { href: "/components/image", label: "Image" },
        { href: "/components/imageCropper", label: "Image Cropper" },
        { href: "/components/input", label: "Input" },
        { href: "/components/inputOtp", label: "Input OTP" },
        { href: "/components/jsonTreeViewer", label: "JSON Tree Viewer" },
        { href: "/components/kanbanBoard", label: "Kanban Board" },
        { href: "/components/kbd", label: "Kbd" },
        { href: "/components/label", label: "Label" },
        { href: "/components/link", label: "Link" },
        { href: "/components/list", label: "List" },
        { href: "/components/menubar", label: "Menubar" },
        { href: "/components/mentionTextarea", label: "Mention Textarea" },
        { href: "/components/multiSelect", label: "Multi Select" },
        { href: "/components/navigationMenu", label: "Navigation Menu" },
        { href: "/components/numberInput", label: "Number Input" },
        { href: "/components/progress", label: "Progress" },
        { href: "/components/pagination", label: "Pagination" },
        { href: "/components/passwordInput", label: "Password Input" },
        { href: "/components/popover", label: "Popover" },
        { href: "/components/radioGroup", label: "Radio Group" },
        { href: "/components/rating", label: "Rating" },
        { href: "/components/resizable", label: "Resizable" },
        { href: "/components/richTextEditor", label: "Rich Text Editor" },
        { href: "/components/scrollArea", label: "Scroll Area" },
        { href: "/components/select", label: "Select" },
        { href: "/components/separator", label: "Separator" },
        { href: "/components/sheet", label: "Sheet" },
        { href: "/components/signatureInput", label: "Signature Input" },
        { href: "/components/skeleton", label: "Skeleton" },
        { href: "/components/slider", label: "Slider" },
        { href: "/components/spinner", label: "Spinner" },
        { href: "/components/statCard", label: "Stat Card" },
        { href: "/components/stepper", label: "Stepper" },
        { href: "/components/switch", label: "Switch" },
        { href: "/components/table", label: "Table" },
        { href: "/components/tabs", label: "Tabs" },
        { href: "/components/tagInput", label: "Tag Input" },
        { href: "/components/textarea", label: "Textarea" },
        { href: "/components/timeline", label: "Timeline" },
        { href: "/components/timePicker", label: "Time Picker" },
        { href: "/components/toast", label: "Toast" },
        { href: "/components/toggle", label: "Toggle" },
        { href: "/components/toggleGroup", label: "Toggle Group" },
        { href: "/components/tooltip", label: "Tooltip" },
        { href: "/components/tour", label: "Tour Guide" },
        { href: "/components/transferList", label: "Transfer List" },
        { href: "/components/treeView", label: "Tree View" },
        { href: "/components/typography", label: "Typography" },
        { href: "/components/virtualizedList", label: "Virtualized List" },
      ],
    },
  ];

  const filteredSections = sections
    .map((section) => ({
      ...section,
      links: section.links.filter((link) =>
        link.label.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((section) => section.links.length > 0);

  const isDark = mounted && resolvedTheme === "dark";

  const activeLinkRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, []);

  const renderNavContent = () => (
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
          isClearable={true}
          onClear={() => setSearchQuery("")}
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
                      ref={isActive ? activeLinkRef : undefined}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "group flex items-center rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer relative",
                        isActive
                          ? "bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400"
                          : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/40 dark:text-zinc-450 dark:hover:text-zinc-100 dark:hover:bg-zinc-900/40",
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
  );

  const renderFooterTheme = () => (
    <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 pt-4">
      {!mounted ? (
        <div className="h-9 w-full bg-zinc-200/40 dark:bg-zinc-900/40 rounded-xl animate-pulse" />
      ) : (
        <div className="flex items-center justify-between w-full p-1 bg-zinc-200/45 dark:bg-zinc-900/45 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl">
          <button
            type="button"
            onClick={() => setTheme("light")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer",
              !isDark
                ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-white"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300",
            )}
          >
            <Sun className="h-3.5 w-3.5" />
            <span>Light</span>
          </button>
          <button
            type="button"
            onClick={() => setTheme("dark")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer",
              isDark
                ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-white"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300",
            )}
          >
            <Moon className="h-3.5 w-3.5" />
            <span>Dark</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 px-4 flex items-center justify-between z-40">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 -ml-2 rounded-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          aria-label="Open Navigation Menu"
        >
          <Menu className="size-6" />
        </button>

        <Link href="/" className="relative h-9 w-28 block">
          <Image
            src={isDark ? "/logo/logo_white.svg" : "/logo/logo_black.svg"}
            alt="Bloom Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <div className="w-8" />
      </header>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300"
        />
      )}

      <aside
        className={cn(
          "md:hidden fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-white dark:bg-zinc-950 border-r border-zinc-200/50 dark:border-zinc-800/50 p-4 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out shadow-2xl",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200/50 dark:border-zinc-800/50">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Navigation
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Close Navigation Menu"
          >
            <X className="size-5" />
          </button>
        </div>
        {renderNavContent()}
        {renderFooterTheme()}
      </aside>

      <aside className="hidden md:flex fixed h-screen w-64 border-r border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-neutral-950/80 px-4 py-6 flex-col justify-between transition-all duration-300 z-40">
        {renderNavContent()}
        {renderFooterTheme()}
      </aside>
    </>
  );
}
