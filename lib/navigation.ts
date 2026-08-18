export interface DocNavItem {
  href: string;
  label: string;
}

export interface SidebarSection {
  title: string;
  links: DocNavItem[];
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
  { href: "/components/list", label: "List" },
  { href: "/components/menubar", label: "Menubar" },
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
  { href: "/components/scrollArea", label: "Scroll Area" },
  { href: "/components/select", label: "Select" },
  { href: "/components/separator", label: "Separator" },
  { href: "/components/sheet", label: "Sheet" },
  { href: "/components/skeleton", label: "Skeleton" },
  { href: "/components/slider", label: "Slider" },
  { href: "/components/snippet", label: "Snippet" },
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
  { href: "/components/fileExplorer", label: "File Explorer" },
  { href: "/components/filterBuilder", label: "Filter Builder" },
  { href: "/components/ganttChart", label: "Gantt Chart" },
  { href: "/components/heatmapGrid", label: "Heatmap Grid" },
  { href: "/components/imageCropper", label: "Image Cropper" },
  { href: "/components/jsonTreeViewer", label: "JSON Tree Viewer" },
  { href: "/components/kanbanBoard", label: "Kanban Board" },
  { href: "/components/logoClouds", label: "Logo Clouds" },
  { href: "/components/mentionTextarea", label: "Mention Textarea" },
  { href: "/components/richTextEditor", label: "Rich Text Editor" },
  { href: "/components/signatureInput", label: "Signature Input" },
  { href: "/components/tableOfContents", label: "Table of Contents" },
  { href: "/components/terminal", label: "Terminal" },
  { href: "/components/testimonials", label: "Testimonials" },
  { href: "/components/tour", label: "Tour Guide" },
];

export const previewsNavigationList: DocNavItem[] = [
  { href: "/preview/auth", label: "Authentication" },
  { href: "/preview/forms", label: "Forms & CRUD" },
];

export const docNavigationList: DocNavItem[] = [
  ...overviewNavigationList,
  ...componentsNavigationList,
  ...blocksNavigationList,
  ...previewsNavigationList,
];

export const navigationSections: SidebarSection[] = [
  {
    title: "Overview",
    links: overviewNavigationList,
  },
  {
    title: "Previews",
    links: previewsNavigationList,
  },
  {
    title: "Components",
    links: componentsNavigationList,
  },
  {
    title: "Blocks",
    links: blocksNavigationList,
  },
];
