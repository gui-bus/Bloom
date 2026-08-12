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
- **accordion**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add accordion`. Import via `@/components/ui/accordion/accordion`.
- **alert**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add alert`. Import via `@/components/ui/alert/alert`.
- **alertDialog**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add alertDialog`. Import via `@/components/ui/alertDialog/alertDialog`.
- **aspectRatio**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add aspectRatio`. Import via `@/components/ui/aspectRatio/aspectRatio`.
- **audioRecorder**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add audioRecorder`. Import via `@/components/ui/audioRecorder/audioRecorder`.
- **autocomplete**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add autocomplete`. Import via `@/components/ui/autocomplete/autocomplete`.
- **avatar**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add avatar`. Import via `@/components/ui/avatar/avatar`.
- **avatarGroup**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add avatarGroup`. Import via `@/components/ui/avatarGroup/avatarGroup`.
- **badge**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add badge`. Import via `@/components/ui/badge/badge`.
- **banner**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add banner`. Import via `@/components/ui/banner/banner`.
- **bentoGrid**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add bentoGrid`. Import via `@/components/ui/bentoGrid/bentoGrid`.
- **breadcrumb**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add breadcrumb`. Import via `@/components/ui/breadcrumb/breadcrumb`.
- **button**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add button`. Import via `@/components/ui/button/button`.
- **buttonGroup**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add buttonGroup`. Import via `@/components/ui/buttonGroup/buttonGroup`.
- **card**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add card`. Import via `@/components/ui/card/card`.
- **carousel**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add carousel`. Import via `@/components/ui/carousel/carousel`.
- **chart**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add chart`. Import via `@/components/ui/chart/chart`.
- **checkbox**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add checkbox`. Import via `@/components/ui/checkbox/checkbox`.
- **codeBlock**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add codeBlock`. Import via `@/components/ui/codeBlock/codeBlock`.
- **collapsible**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add collapsible`. Import via `@/components/ui/collapsible/collapsible`.
- **colorPicker**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add colorPicker`. Import via `@/components/ui/colorPicker/colorPicker`.
- **colorSwatches**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add colorSwatches`. Import via `@/components/ui/colorSwatches/colorSwatches`.
- **combobox**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add combobox`. Import via `@/components/ui/combobox/combobox`.
- **command**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add command`. Import via `@/components/ui/command/command`.
- **confetti**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add confetti`. Import via `@/components/ui/confetti/confetti`.
- **contextMenu**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add contextMenu`. Import via `@/components/ui/contextMenu/contextMenu`.
- **dataTable**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add dataTable`. Import via `@/components/ui/dataTable/dataTable`.
- **datePicker**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add datePicker`. Import via `@/components/ui/datePicker/datePicker`.
- **dialog**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add dialog`. Import via `@/components/ui/dialog/dialog`.
- **diffViewer**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add diffViewer`. Import via `@/components/ui/diffViewer/diffViewer`.
- **drawer**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add drawer`. Import via `@/components/ui/drawer/drawer`.
- **dropdownMenu**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add dropdownMenu`. Import via `@/components/ui/dropdownMenu/dropdownMenu`.
- **eventCalendar**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add eventCalendar`. Import via `@/components/ui/eventCalendar/eventCalendar`.
- **fileExplorer**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add fileExplorer`. Import via `@/components/ui/fileExplorer/fileExplorer`.
- **fileUpload**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add fileUpload`. Import via `@/components/ui/fileUpload/fileUpload`.
- **filterBuilder**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add filterBuilder`. Import via `@/components/ui/filterBuilder/filterBuilder`.
- **form**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add form`. Import via `@/components/ui/form/form`.
- **formField**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add formField`. Import via `@/components/ui/formField/formField`.
- **ganttChart**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add ganttChart`. Import via `@/components/ui/ganttChart/ganttChart`.
- **heatmapGrid**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add heatmapGrid`. Import via `@/components/ui/heatmapGrid/heatmapGrid`.
- **hoverCard**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add hoverCard`. Import via `@/components/ui/hoverCard/hoverCard`.
- **image**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add image`. Import via `@/components/ui/image/image`.
- **imageCropper**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add imageCropper`. Import via `@/components/ui/imageCropper/imageCropper`.
- **input**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add input`. Import via `@/components/ui/input/input`.
- **inputOtp**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add inputOtp`. Import via `@/components/ui/inputOtp/inputOtp`.
- **jsonTreeViewer**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add jsonTreeViewer`. Import via `@/components/ui/jsonTreeViewer/jsonTreeViewer`.
- **kanbanBoard**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add kanbanBoard`. Import via `@/components/ui/kanbanBoard/kanbanBoard`.
- **kbd**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add kbd`. Import via `@/components/ui/kbd/kbd`.
- **label**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add label`. Import via `@/components/ui/label/label`.
- **link**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add link`. Import via `@/components/ui/link/link`.
- **list**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add list`. Import via `@/components/ui/list/list`.
- **logoClouds**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add logoClouds`. Import via `@/components/ui/logoClouds/logoClouds`.
- **mentionTextarea**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add mentionTextarea`. Import via `@/components/ui/mentionTextarea/mentionTextarea`.
- **menubar**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add menubar`. Import via `@/components/ui/menubar/menubar`.
- **multiSelect**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add multiSelect`. Import via `@/components/ui/multiSelect/multiSelect`.
- **navigationMenu**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add navigationMenu`. Import via `@/components/ui/navigationMenu/navigationMenu`.
- **numberInput**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add numberInput`. Import via `@/components/ui/numberInput/numberInput`.
- **pagination**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add pagination`. Import via `@/components/ui/pagination/pagination`.
- **passwordInput**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add passwordInput`. Import via `@/components/ui/passwordInput/passwordInput`.
- **popover**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add popover`. Import via `@/components/ui/popover/popover`.
- **progress**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add progress`. Import via `@/components/ui/progress/progress`.
- **radioGroup**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add radioGroup`. Import via `@/components/ui/radioGroup/radioGroup`.
- **rating**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add rating`. Import via `@/components/ui/rating/rating`.
- **resizable**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add resizable`. Import via `@/components/ui/resizable/resizable`.
- **richTextEditor**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add richTextEditor`. Import via `@/components/ui/richTextEditor/richTextEditor`.
- **scrollArea**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add scrollArea`. Import via `@/components/ui/scrollArea/scrollArea`.
- **select**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add select`. Import via `@/components/ui/select/select`.
- **separator**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add separator`. Import via `@/components/ui/separator/separator`.
- **sheet**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add sheet`. Import via `@/components/ui/sheet/sheet`.
- **signatureInput**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add signatureInput`. Import via `@/components/ui/signatureInput/signatureInput`.
- **skeleton**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add skeleton`. Import via `@/components/ui/skeleton/skeleton`.
- **slider**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add slider`. Import via `@/components/ui/slider/slider`.
- **snippet**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add snippet`. Import via `@/components/ui/snippet/snippet`.
- **spinner**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add spinner`. Import via `@/components/ui/spinner/spinner`.
- **statCard**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add statCard`. Import via `@/components/ui/statCard/statCard`.
- **stepper**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add stepper`. Import via `@/components/ui/stepper/stepper`.
- **switch**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add switch`. Import via `@/components/ui/switch/switch`.
- **table**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add table`. Import via `@/components/ui/table/table`.
- **tableOfContents**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add tableOfContents`. Import via `@/components/ui/tableOfContents/tableOfContents`.
- **tabs**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add tabs`. Import via `@/components/ui/tabs/tabs`.
- **tagInput**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add tagInput`. Import via `@/components/ui/tagInput/tagInput`.
- **terminal**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add terminal`. Import via `@/components/ui/terminal/terminal`.
- **testimonials**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add testimonials`. Import via `@/components/ui/testimonials/testimonials`.
- **textarea**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add textarea`. Import via `@/components/ui/textarea/textarea`.
- **timePicker**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add timePicker`. Import via `@/components/ui/timePicker/timePicker`.
- **timeline**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add timeline`. Import via `@/components/ui/timeline/timeline`.
- **toast**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add toast`. Import via `@/components/ui/toast/toast`.
- **toggle**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add toggle`. Import via `@/components/ui/toggle/toggle`.
- **toggleGroup**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add toggleGroup`. Import via `@/components/ui/toggleGroup/toggleGroup`.
- **tooltip**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add tooltip`. Import via `@/components/ui/tooltip/tooltip`.
- **tour**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add tour`. Import via `@/components/ui/tour/tour`.
- **transferList**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add transferList`. Import via `@/components/ui/transferList/transferList`.
- **treeView**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add treeView`. Import via `@/components/ui/treeView/treeView`.
- **typography**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add typography`. Import via `@/components/ui/typography/typography`.
- **virtualizedList**: Available. If not installed locally, advise the user to run `npx @bloomui-react/cli add virtualizedList`. Import via `@/components/ui/virtualizedList/virtualizedList`.
