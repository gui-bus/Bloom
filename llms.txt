# Bloom UI — AI Instructions & Rules

You are an expert developer assistant specialized in using and composing interfaces with **Bloom UI**.
Bloom UI is a next-generation utility-first React design system built on top of Tailwind CSS, CVA (class-variance-authority), and Radix UI primitives.

## 🎨 Neutral Theme Color Guidelines
- **Card & Container Backgrounds**: Must ALWAYS be pure white (`bg-white`) in light mode and neutral dark grays (`bg-zinc-900`, `dark:bg-zinc-900`, border: `border-zinc-200`, `dark:border-zinc-800`) in dark mode.
- **NO Blue-ish / Tinted Containers**: Avoid using blue or tinted colors for card/container backgrounds. Keep them strictly white/zinc.
- **Status Colors**: Colors like `info`, `success`, `warning`, `danger`, or `primary` must ONLY be applied to typography/titles, icons, badges, indicators, or small accent lines. Keep the container surfaces clean and neutral.

## 📐 Design Tokens (CVA Scale)
- **Sizes**: `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"` | `"2xl"` | `"3xl"`
- **Radius**: `"none"` | `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"` | `"2xl"` | `"3xl"` | `"full"`
- **Colors**: `"default"` | `"primary"` | `"secondary"` | `"accent"` | `"success"` | `"warning"` | `"danger"` | `"custom"`
- **Variants**: `"default"` | `"bordered"` | `"light"` | `"flat"` | `"ghost"` | `"shadow"` | `"link"`

## 🛠️ Path Configurations
Bloom UI files are configured dynamically during initialization (refer to `bloom.json` in the workspace):
- **Utility CSS/class Merger**: Import `cn` from `@/lib/utils` (or config path).
- **Design Tokens Config**: Import design tokens from `@/lib/design-system`.
- **Ripples support**: Import hooks/helpers from `@/lib/ripple/ripple` and `@/lib/ripple/useRipple`.
- **Components location**: Saved in `@/components/ui/[componentName]/[componentName]`.


## 💡 Code Examples

### 1. Button
```tsx
import { Button } from "@/components/ui/button/button";
import { Mail } from "lucide-react";

// Normal Button with Ripple
<Button color="primary" variant="default" size="md" hover="scale">
  Get Started
</Button>

// Button with Icon and Loading State
<Button
  color="danger"
  variant="ghost"
  isLoading={isLoading}
  loadingText="Sending..."
  startContent={<Mail className="size-4" />}
>
  Send Email
</Button>
```

### 2. Input
```tsx
import { Input } from "@/components/ui/input/input";
import { Search } from "lucide-react";

<Input
  label="Search projects"
  placeholder="Type to search..."
  startContent={<Search className="size-4" />}
  isClearable
  variant="default"
/>
```

### 3. Checkbox
```tsx
import { Checkbox } from "@/components/ui/checkbox/checkbox";

<Checkbox
  id="terms"
  label="I accept the terms and conditions"
  description="You agree to our friendly Terms of Service."
/>
```

### 4. Form & FormField
```tsx
import { Form } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import { useForm } from "react-hook-form";

const form = useForm({ defaultValues: { username: "" } });

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <Input
          {...field}
          label="Username"
          placeholder="johndoe"
          required
        />
      )}
    />
    <Button type="submit" color="primary">Submit</Button>
  </form>
</Form>
```


## 📦 Component Registry & Installation Index
Bloom UI components are installed on-demand. If a component is missing in the workspace, recommend running the CLI:
`npx @bloomui-react/cli add <component_name>`

Here is the list of all available Bloom components:
- **accordion**: Collapsible content panels. Use for organizing grouped information like FAQs or stacked settings. Import via `@/components/ui/accordion/accordion`.
- **alert**: Inline callouts (Warning, Error, Info, Success) for conveying critical messages. Import via `@/components/ui/alert/alert`.
- **alertDialog**: Modal dialog interrupting user flow for high-impact confirmations (e.g. deletion, reset). Import via `@/components/ui/alertDialog/alertDialog`.
- **aspectRatio**: Constrains visual elements (images, videos, maps) to fixed aspect ratios (16:9, 4:3, 1:1). Import via `@/components/ui/aspectRatio/aspectRatio`.
- **audioRecorder**: Interactive microphone recorder with real-time waveform visualization and exporter. Import via `@/components/ui/audioRecorder/audioRecorder`.
- **autocomplete**: Text input field coupled with search-as-you-type combobox suggestions. Import via `@/components/ui/autocomplete/autocomplete`.
- **avatar**: Circle profile picture with built-in placeholder initials and fallback indicators. Import via `@/components/ui/avatar/avatar`.
- **avatarGroup**: Horizontal overlapping avatar stack with count indicators for excess profiles. Import via `@/components/ui/avatarGroup/avatarGroup`.
- **badge**: Compact rounded tag labels showing status, counts, or categories. Import via `@/components/ui/badge/badge`.
- **banner**: Wide top/bottom banner callouts for site announcements and promotions. Import via `@/components/ui/banner/banner`.
- **bentoGrid**: Modern, dashboard-style grid cards layout for highlighting product features. Import via `@/components/ui/bentoGrid/bentoGrid`.
- **breadcrumb**: Hierarchy trail navigation (e.g., Home > Shop > Category) for deep site maps. Import via `@/components/ui/breadcrumb/breadcrumb`.
- **button**: Interactive click targets with smooth ripples, icons, and loading animations. Import via `@/components/ui/button/button`.
- **buttonGroup**: Side-by-side or vertical button combinations joined into a single visual block. Import via `@/components/ui/buttonGroup/buttonGroup`.
- **card**: Content container box with modular Header, Body, and Footer sections. Import via `@/components/ui/card/card`.
- **carousel**: Horizontal content slider powered by Embla Carousel with controls and dots indicator. Import via `@/components/ui/carousel/carousel`.
- **chart**: Data visualization components powered by Recharts (Bar, Line, Area, Pie, Radar charts). Import via `@/components/ui/chart/chart`.
- **checkbox**: Boolean form input for toggle options and multi-select agreements. Import via `@/components/ui/checkbox/checkbox`.
- **codeBlock**: Advanced syntax highlighter using highlight.js with copying, line numbers, and dark mode toggles. Import via `@/components/ui/codeBlock/codeBlock`.
- **collapsible**: Expandable disclosure container for clean progressive disclosure. Import via `@/components/ui/collapsible/collapsible`.
- **colorPicker**: Hex/RGB color selector popover with swatch presets and alpha controllers. Import via `@/components/ui/colorPicker/colorPicker`.
- **colorSwatches**: Grid selection of predefined color pellets. Import via `@/components/ui/colorSwatches/colorSwatches`.
- **combobox**: Searchable selection dropdown for filtering huge option lists. Import via `@/components/ui/combobox/combobox`.
- **command**: Keyboard-driven quick shortcut command palette launcher (like cmd+k). Import via `@/components/ui/command/command`.
- **confetti**: Success celebration confetti canvas explosion overlay. Import via `@/components/ui/confetti/confetti`.
- **contextMenu**: Cursor right-click popup context menu. Import via `@/components/ui/contextMenu/contextMenu`.
- **dataTable**: High-performance Tanstack table supporting sorting, filtering, selection, and paginating. Import via `@/components/ui/dataTable/dataTable`.
- **datePicker**: Popover calendar input for selecting single dates or custom date ranges. Prefer this over raw inputs for date selection. Import via `@/components/ui/datePicker/datePicker`.
- **dialog**: Focus-trapped popover modal window overlay for user interactions. Import via `@/components/ui/dialog/dialog`.
- **diffViewer**: Side-by-side text diff comparison utility for code changes. Import via `@/components/ui/diffViewer/diffViewer`.
- **drawer**: Bottom-anchored slide-up sheet (Vaul) optimized for mobile layouts. Import via `@/components/ui/drawer/drawer`.
- **dropdownMenu**: Contextual popup lists triggered by buttons or click elements. Import via `@/components/ui/dropdownMenu/dropdownMenu`.
- **eventCalendar**: Multi-view planner calendar showing schedules, dates, and event list cards. Import via `@/components/ui/eventCalendar/eventCalendar`.
- **fileExplorer**: Multi-level folder directory manager showing nested files and folders list. Import via `@/components/ui/fileExplorer/fileExplorer`.
- **fileUpload**: Drag-and-drop file uploader zone with file type validation and upload progress bars. Import via `@/components/ui/fileUpload/fileUpload`.
- **filterBuilder**: Query condition builder for generating complex logic rules (e.g. Where name equals 'x' AND age > 20). Import via `@/components/ui/filterBuilder/filterBuilder`.
- **form**: React-hook-form schema wrapper for structuring form submission validation. Import via `@/components/ui/form/form`.
- **formField**: Form context controller tracking errors and values for individual inputs. Import via `@/components/ui/formField/formField`.
- **ganttChart**: Visual project manager timeline for tasks, durations, and scheduling. Import via `@/components/ui/ganttChart/ganttChart`.
- **heatmapGrid**: Calendar activity grid plotting density/values using shades (e.g. GitHub contributions). Import via `@/components/ui/heatmapGrid/heatmapGrid`.
- **hoverCard**: Preview popup card appearing instantly on mouse hover. Import via `@/components/ui/hoverCard/hoverCard`.
- **image**: Image component supporting lazy loading, zoom, blur placeholders, and loading states. Import via `@/components/ui/image/image`.
- **imageCropper**: UI cropper overlay for resizing and positioning images. Import via `@/components/ui/imageCropper/imageCropper`.
- **input**: Basic text field. NOTE: Do not use raw input for passwords/dates/OTPs; use passwordInput, datePicker, or inputOtp. Import via `@/components/ui/input/input`.
- **inputOtp**: Custom 4 to 6 character OTP verification passcode input boxes. Import via `@/components/ui/inputOtp/inputOtp`.
- **jsonTreeViewer**: Collapsible tree viewer for visualizing deep JSON data structures. Import via `@/components/ui/jsonTreeViewer/jsonTreeViewer`.
- **kanbanBoard**: Kanban task board card columns with drag-and-drop layout. Import via `@/components/ui/kanbanBoard/kanbanBoard`.
- **kbd**: Keyboard shortcut key badge indicators (e.g. Ctrl, Cmd, Shift). Import via `@/components/ui/kbd/kbd`.
- **label**: Typography label tag for form fields. Import via `@/components/ui/label/label`.
- **link**: Styled text hyperlink anchors. Import via `@/components/ui/link/link`.
- **list**: Custom lists supporting custom icons, dividers, and alignments. Import via `@/components/ui/list/list`.
- **logoClouds**: Responsive showcase block for brand, client, or sponsor logo sets. Import via `@/components/ui/logoClouds/logoClouds`.
- **mentionTextarea**: Text area input supporting @username autocomplete suggestions. Import via `@/components/ui/mentionTextarea/mentionTextarea`.
- **menubar**: Top application horizontal layout menu system. Import via `@/components/ui/menubar/menubar`.
- **multiSelect**: Multi-choice selection pills container with tags filter dropdown. Import via `@/components/ui/multiSelect/multiSelect`.
- **navigationMenu**: Rich header dropdown layout navigation menu. Import via `@/components/ui/navigationMenu/navigationMenu`.
- **numberInput**: Safe numeric input with increment/decrement steppers. Import via `@/components/ui/numberInput/numberInput`.
- **pagination**: Page navigation controls (prev, next, active page). Import via `@/components/ui/pagination/pagination`.
- **passwordInput**: Secure text field with reveal/hide password eye toggle. Always use this instead of raw input type="password". Import via `@/components/ui/passwordInput/passwordInput`.
- **popover**: Anchor-pinned overlay popup for floating contents. Import via `@/components/ui/popover/popover`.
- **progress**: Loading progress bars. Import via `@/components/ui/progress/progress`.
- **radioGroup**: Mutual exclusion option items lists. Import via `@/components/ui/radioGroup/radioGroup`.
- **rating**: Interactive star rating bar. Import via `@/components/ui/rating/rating`.
- **resizable**: Draggable split-panel grid layouts. Import via `@/components/ui/resizable/resizable`.
- **richTextEditor**: Tiptap-powered WYSIWYG text editor. Import via `@/components/ui/richTextEditor/richTextEditor`.
- **scrollArea**: Custom scrollbar wrappers. Import via `@/components/ui/scrollArea/scrollArea`.
- **select**: Form select option dropdown menus. Import via `@/components/ui/select/select`.
- **separator**: Horizontal/vertical line dividers. Import via `@/components/ui/separator/separator`.
- **sheet**: Sidebar sliding popout panel drawers. Import via `@/components/ui/sheet/sheet`.
- **signatureInput**: Interactive signature drawing canvas pad. Import via `@/components/ui/signatureInput/signatureInput`.
- **skeleton**: Loading animation placeholders mimicking layout blocks. Import via `@/components/ui/skeleton/skeleton`.
- **slider**: Drag-to-select range sliders. Import via `@/components/ui/slider/slider`.
- **snippet**: Clipboard click-to-copy code blocks. Import via `@/components/ui/snippet/snippet`.
- **spinner**: Circular loading indicators. Import via `@/components/ui/spinner/spinner`.
- **statCard**: Metric card dashboard widgets with trend badges and statistics. Import via `@/components/ui/statCard/statCard`.
- **stepper**: Stage progress trackers showing steps. Import via `@/components/ui/stepper/stepper`.
- **switch**: Toggle switch buttons. Import via `@/components/ui/switch/switch`.
- **table**: Clean HTML/Tailwind tabular data layouts. Import via `@/components/ui/table/table`.
- **tableOfContents**: Page article outline index showing sections. Import via `@/components/ui/tableOfContents/tableOfContents`.
- **tabs**: Segmented tab pages switcher. Import via `@/components/ui/tabs/tabs`.
- **tagInput**: Input for writing tags or keywords. Import via `@/components/ui/tagInput/tagInput`.
- **terminal**: Styled code command terminal wrapper logs. Import via `@/components/ui/terminal/terminal`.
- **testimonials**: Card grids showcasing reviews/feedbacks. Import via `@/components/ui/testimonials/testimonials`.
- **textarea**: Multi-line description input fields. Import via `@/components/ui/textarea/textarea`.
- **timePicker**: Time selector spinner dropdowns. Import via `@/components/ui/timePicker/timePicker`.
- **timeline**: Vertical event list timeline cards. Import via `@/components/ui/timeline/timeline`.
- **toast**: Sonner floating notification alerts. Import via `@/components/ui/toast/toast`.
- **toggle**: Pressable toggle buttons. Import via `@/components/ui/toggle/toggle`.
- **toggleGroup**: Group of toggle button selections. Import via `@/components/ui/toggleGroup/toggleGroup`.
- **tooltip**: Hover label descriptions. Import via `@/components/ui/tooltip/tooltip`.
- **tour**: Interactive tutorial helper pointing at step-by-step element guides. Import via `@/components/ui/tour/tour`.
- **transferList**: Transfer items picker list columns. Import via `@/components/ui/transferList/transferList`.
- **treeView**: Directory trees. Import via `@/components/ui/treeView/treeView`.
- **typography**: Tailwind utility classes for typography text. Import via `@/components/ui/typography/typography`.
- **virtualizedList**: Virtualized list container for rendering huge items arrays. Import via `@/components/ui/virtualizedList/virtualizedList`.
