"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export interface DocNavItem {
  href: string;
  label: string;
}

export const overviewNavigationList: DocNavItem[] = [
  { href: "/", label: "Introduction" },
  { href: "/installation", label: "Installation" },
];

export const componentsNavigationList: DocNavItem[] = [
  { href: "/components/accordion", label: "Accordion" },
  { href: "/components/alert", label: "Alert" },
  { href: "/components/alertDialog", label: "Alert Dialog" },
  { href: "/components/aspectRatio", label: "Aspect Ratio" },
  { href: "/components/avatar", label: "Avatar" },
  { href: "/components/avatarGroup", label: "Avatar Group" },
  { href: "/components/badge", label: "Badge" },
  { href: "/components/banner", label: "Banner" },
  { href: "/components/breadcrumb", label: "Breadcrumb" },
  { href: "/components/button", label: "Button" },
  { href: "/components/buttonGroup", label: "Button Group" },
  { href: "/components/card", label: "Card" },
  { href: "/components/carousel", label: "Carousel" },
  { href: "/components/chart", label: "Chart" },
  { href: "/components/checkbox", label: "Checkbox" },
  { href: "/components/circularProgress", label: "Circular Progress" },
  { href: "/components/codeBlock", label: "Code Block" },
  { href: "/components/collapsible", label: "Collapsible" },
  { href: "/components/colorPicker", label: "Color Picker" },
  { href: "/components/colorSwatches", label: "Color Swatches" },
  { href: "/components/combobox", label: "Combobox" },
  { href: "/components/command", label: "Command" },
  { href: "/components/contextMenu", label: "Context Menu" },
  { href: "/components/dataTable", label: "Data Table" },
  { href: "/components/datePicker", label: "Date Picker" },
  { href: "/components/dialog", label: "Dialog" },
  { href: "/components/drawer", label: "Drawer" },
  { href: "/components/dropdownMenu", label: "Dropdown Menu" },
  { href: "/components/fileExplorer", label: "File Explorer" },
  { href: "/components/fileUpload", label: "File Upload" },
  { href: "/components/fileInput", label: "File Input" },
  { href: "/components/form", label: "Form" },
  { href: "/components/formField", label: "Form Field" },
  { href: "/components/gauge", label: "Gauge" },
  { href: "/components/hoverCard", label: "Hover Card" },
  { href: "/components/image", label: "Image" },
  { href: "/components/input", label: "Input" },
  { href: "/components/inputOtp", label: "Input OTP" },
  { href: "/components/kbd", label: "Kbd" },
  { href: "/components/label", label: "Label" },
  { href: "/components/link", label: "Link" },
  { href: "/components/multiSelect", label: "Multi Select" },
  { href: "/components/numberInput", label: "Number Input" },
  { href: "/components/pagination", label: "Pagination" },
  { href: "/components/passwordInput", label: "Password Input" },
  { href: "/components/popover", label: "Popover" },
  { href: "/components/progress", label: "Progress" },
  { href: "/components/radioGroup", label: "Radio Group" },
  { href: "/components/rating", label: "Rating" },
  { href: "/components/resizable", label: "Resizable" },
  { href: "/components/scrollArea", label: "Scroll Area" },
  { href: "/components/select", label: "Select" },
  { href: "/components/separator", label: "Separator" },
  { href: "/components/sheet", label: "Sheet" },
  { href: "/components/skeleton", label: "Skeleton" },
  { href: "/components/slider", label: "Slider" },
  { href: "/components/snippet", label: "Snippet" },
  { href: "/components/spinner", label: "Spinner" },
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
  { href: "/components/transferList", label: "Transfer List" },
  { href: "/components/treeView", label: "Tree View" },
  { href: "/components/typography", label: "Typography" },
  { href: "/components/virtualizedList", label: "Virtualized List" },
];

export const blocksNavigationList: DocNavItem[] = [
  { href: "/components/audioRecorder", label: "Audio Recorder" },
  { href: "/components/bentoGrid", label: "Bento Grid" },
  { href: "/components/confetti", label: "Confetti" },
  { href: "/components/diffViewer", label: "Diff Viewer" },
  { href: "/components/eventCalendar", label: "Event Calendar" },
  { href: "/components/filterBuilder", label: "Filter Builder" },
  { href: "/components/ganttChart", label: "Gantt Chart" },
  { href: "/components/heatmapGrid", label: "Heatmap Grid" },
  { href: "/components/imageCropper", label: "Image Cropper" },
  { href: "/components/jsonTreeViewer", label: "JSON Tree Viewer" },
  { href: "/components/kanbanBoard", label: "Kanban Board" },
  { href: "/components/list", label: "List" },
  { href: "/components/logoClouds", label: "Logo Clouds" },
  { href: "/components/mentionTextarea", label: "Mention Textarea" },
  { href: "/components/menubar", label: "Menubar" },
  { href: "/components/navigationMenu", label: "Navigation Menu" },
  { href: "/components/richTextEditor", label: "Rich Text Editor" },
  { href: "/components/signatureInput", label: "Signature Input" },
  { href: "/components/statCard", label: "Stat Card" },
  { href: "/components/tableOfContents", label: "Table of Contents" },
  { href: "/components/terminal", label: "Terminal" },
  { href: "/components/testimonials", label: "Testimonials" },
  { href: "/components/tour", label: "Tour Guide" },
];

export const docNavigationList = [
  ...overviewNavigationList,
  ...componentsNavigationList,
  ...blocksNavigationList,
];

export interface DocsPaginationProps {
  category?: "components" | "blocks" | "overview";
}

export function DocsPagination({ category }: DocsPaginationProps) {
  const pathname = usePathname();

  const targetList = React.useMemo(() => {
    if (category === "blocks") return blocksNavigationList;
    if (category === "components") return componentsNavigationList;
    if (category === "overview") return overviewNavigationList;

    if (blocksNavigationList.some((item) => item.href === pathname)) {
      return blocksNavigationList;
    }
    if (componentsNavigationList.some((item) => item.href === pathname)) {
      return componentsNavigationList;
    }
    return docNavigationList;
  }, [category, pathname]);

  const currentIndex = targetList.findIndex((item) => item.href === pathname);

  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? targetList[currentIndex - 1] : null;
  const next =
    currentIndex < targetList.length - 1 ? targetList[currentIndex + 1] : null;

  return (
    <div className="pt-8 mt-12 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4 w-full">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col items-start gap-1 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all duration-200 shadow-xs max-w-[48%] w-full"
        >
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
            <Icon
              icon="hugeicons:arrow-left-01"
              className="size-3.5 group-hover:-translate-x-1 transition-transform"
            />
            Previous
          </span>
          <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 transition-colors">
            {prev.label}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end text-right gap-1 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all duration-200 shadow-xs max-w-[48%] w-full ml-auto"
        >
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
            Next
            <Icon
              icon="hugeicons:arrow-right-01"
              className="size-3.5 group-hover:translate-x-1 transition-transform"
            />
          </span>
          <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 transition-colors">
            {next.label}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
