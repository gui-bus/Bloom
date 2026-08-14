"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Timeline, TimelineItem } from "@/components/ui/timeline/timeline";
import { timelineCode } from "@/components/ui/timeline/timeline.code";

export default function TimelinePage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Timeline"
        description="A chronological sequence of events supporting customizable variants, status colors, sizes, line shapes, and card containers."
      />

      <ImportSnippet
        importCode={`import { Timeline, TimelineItem } from "@/components/ui/timeline/timeline";`}
      />

      <InstallationBlock componentName="timeline" />

      <CodeBlock
        code={timelineCode}
        componentName="timeline.tsx"
        description="Timeline component with rich customization properties."
        tags={["React", "Tailwind", "UI Component", "Timeline"]}
      />

      <DocsComponent
        title="Default"
        description="A standard sequence of chronological timeline events."
        preview={
          <div className="w-full max-w-lg">
            <Timeline>
              <TimelineItem
                title="Design System Created"
                description="Initial tokens structure has been established."
                time="2 days ago"
              />
              <TimelineItem
                title="Components Developed"
                description="Core interactive UI components implemented."
                time="1 day ago"
              />
              <TimelineItem
                title="Released v1.0.0"
                description="Production package published."
                time="Just now"
              />
            </Timeline>
          </div>
        }
        code={`<Timeline>
  <TimelineItem
    title="Design System Created"
    description="Initial tokens structure has been established."
    time="2 days ago"
  />
  <TimelineItem
    title="Components Developed"
    description="Core interactive UI components implemented."
    time="1 day ago"
  />
  <TimelineItem
    title="Released v1.0.0"
    description="Production package published."
    time="Just now"
  />
</Timeline>`}
      />

      <DocsComponent
        props={["variant: 'default' | 'bordered' | 'flat' | 'contained'"]}
        title="Variants"
        description="Choose from default solid dots, bordered outlines, flat soft highlights, or contained item card blocks."
        preview={
          <div className="w-full max-w-lg space-y-8">
            <div>
              <span className="text-xs font-semibold text-zinc-400 block mb-4">
                variant="default"
              </span>
              <Timeline variant="default">
                <TimelineItem
                  title="Initial Review"
                  description="Documents and plans signed off."
                />
                <TimelineItem
                  title="Development Started"
                  description="Repository branch established."
                />
              </Timeline>
            </div>
            <div>
              <span className="text-xs font-semibold text-zinc-400 block mb-4">
                variant="bordered"
              </span>
              <Timeline variant="bordered">
                <TimelineItem
                  title="Initial Review"
                  description="Documents and plans signed off."
                />
                <TimelineItem
                  title="Development Started"
                  description="Repository branch established."
                />
              </Timeline>
            </div>
            <div>
              <span className="text-xs font-semibold text-zinc-400 block mb-4">
                variant="flat"
              </span>
              <Timeline variant="flat">
                <TimelineItem
                  title="Review Pending"
                  description="Awaiting design team approval."
                />
                <TimelineItem
                  title="Deploy Complete"
                  description="Codebase verified in sandbox."
                />
              </Timeline>
            </div>
            <div>
              <span className="text-xs font-semibold text-zinc-400 block mb-4">
                variant="contained"
              </span>
              <Timeline variant="contained">
                <TimelineItem
                  title="Sprint Planning"
                  description="Scoped target release objectives."
                  time="Monday"
                />
                <TimelineItem
                  title="Code Frozen"
                  description="Refactoring branch integrated."
                  time="Wednesday"
                />
              </Timeline>
            </div>
          </div>
        }
        code={`<Timeline variant="default">
  <TimelineItem title="Initial Review" />
</Timeline>

<Timeline variant="bordered">
  <TimelineItem title="Initial Review" />
</Timeline>

<Timeline variant="flat">
  <TimelineItem title="Review Pending" />
</Timeline>

<Timeline variant="contained">
  <TimelineItem title="Sprint Planning" time="Monday" />
</Timeline>`}
      />

      <DocsComponent
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
        title="Colors"
        description="Timeline indicator dots, lines, and contained cards adapt to standard color themes."
        preview={
          <div className="w-full max-w-lg">
            <Timeline>
              <TimelineItem
                color="default"
                title="Default Accent"
                description="Standard theme line and dot accents."
              />
              <TimelineItem
                color="primary"
                title="Primary Accent"
                description="Theme brand accent color."
              />
              <TimelineItem
                color="secondary"
                title="Secondary Accent"
                description="Theme branding secondary color."
              />
              <TimelineItem
                color="accent"
                title="Accent Accent"
                description="Theme accent/highlight brand color."
              />
              <TimelineItem
                color="success"
                title="Success Accent"
                description="Milestone completed successfully."
              />
              <TimelineItem
                color="warning"
                title="Warning Accent"
                description="Pending actions needed."
              />
              <TimelineItem
                color="danger"
                title="Danger Accent"
                description="Critical anomalies logged."
              />
            </Timeline>
          </div>
        }
        code={`<Timeline>
  <TimelineItem color="default" title="Default Accent" />
  <TimelineItem color="primary" title="Primary Accent" />
  <TimelineItem color="secondary" title="Secondary Accent" />
  <TimelineItem color="accent" title="Accent Accent" />
  <TimelineItem color="success" title="Success Accent" />
  <TimelineItem color="warning" title="Warning Accent" />
  <TimelineItem color="danger" title="Danger Accent" />
</Timeline>`}
      />

      <DocsComponent
        props={["size: 'sm' | 'md' | 'lg'"]}
        title="Sizes"
        description="Choose from small, medium, or large timeline scales controlling dot sizing and typography."
        preview={
          <div className="w-full max-w-lg space-y-8">
            <Timeline size="sm">
              <TimelineItem
                title="Small scale timeline item"
                description="Useful for compact sidebars."
              />
            </Timeline>
            <Timeline size="md">
              <TimelineItem
                title="Medium scale timeline item"
                description="Standard layout size."
              />
            </Timeline>
            <Timeline size="lg">
              <TimelineItem
                title="Large scale timeline item"
                description="Great for prominent history feeds."
              />
            </Timeline>
          </div>
        }
        code={`<Timeline size="sm">
  <TimelineItem title="Small scale timeline item" />
</Timeline>
<Timeline size="md">
  <TimelineItem title="Medium scale timeline item" />
</Timeline>
<Timeline size="lg">
  <TimelineItem title="Large scale timeline item" />
</Timeline>`}
      />

      <DocsComponent
        props={["radius: 'none' | 'md' | 'full'"]}
        title="Radius"
        description="Modify rounding settings of indicator nodes, inner checkmarks, and contained cards."
        preview={
          <div className="w-full max-w-lg space-y-8">
            <Timeline radius="none">
              <TimelineItem
                title="Squared Box"
                description="Radius none applied to card corners and indicators."
              />
            </Timeline>
            <Timeline radius="md">
              <TimelineItem
                title="Medium Rounded Box"
                description="Modern rounded corners applied."
              />
            </Timeline>
            <Timeline radius="3xl">
              <TimelineItem
                title="Super Rounded Box"
                description="Extra round borders layout."
              />
            </Timeline>
          </div>
        }
        code={`<Timeline radius="none">
  <TimelineItem title="Squared Box" />
</Timeline>
<Timeline radius="md">
  <TimelineItem title="Medium Rounded Box" />
</Timeline>
<Timeline radius="3xl">
  <TimelineItem title="Super Rounded Box" />
</Timeline>`}
      />

      <DocsComponent
        props={["mode: 'alternate' | 'left'"]}
        title="Alternating Layout"
        description="Stagger milestones alternatively from left to right for symmetric chronological streams."
        preview={
          <div className="w-full max-w-2xl">
            <Timeline mode="alternate">
              <TimelineItem
                title="Event One"
                description="Staggered on the left side."
                time="09:00 AM"
              />
              <TimelineItem
                title="Event Two"
                description="Staggered on the right side."
                time="10:30 AM"
              />
              <TimelineItem
                title="Event Three"
                description="Back to the left side again."
                time="11:45 AM"
              />
            </Timeline>
          </div>
        }
        code={`<Timeline mode="alternate">
  <TimelineItem title="Event One" time="09:00 AM" />
  <TimelineItem title="Event Two" time="10:30 AM" />
  <TimelineItem title="Event Three" time="11:45 AM" />
</Timeline>`}
      />

      <DocsComponent
        props={["icon: ReactNode"]}
        title="Custom Node Icons"
        description="Provide custom SVG icons or emojis to replace standard round dot indicators."
        preview={
          <div className="w-full max-w-lg">
            <Timeline>
              <TimelineItem
                title="Bug Reported"
                description="Database locking anomaly flagged."
                icon={
                  <Icon icon="lucide:bug" className="size-4 text-rose-500" />
                }
                status="danger"
              />
              <TimelineItem
                title="Security Patched"
                description="Firewall firewall rule set updated."
                icon={
                  <Icon
                    icon="lucide:shield-check"
                    className="size-4 text-emerald-500"
                  />
                }
                status="success"
              />
            </Timeline>
          </div>
        }
        code={`<Timeline>
  <TimelineItem
    title="Bug Reported"
    icon={<Icon icon="lucide:bug" className="size-4 text-rose-500" />}
    status="danger"
  />
  <TimelineItem
    title="Security Patched"
    icon={<Icon icon="lucide:shield-check" className="size-4 text-emerald-500" />}
    status="success"
  />
</Timeline>`}
      />

      <DocsComponent
        props={["details: ReactNode"]}
        title="Expandable Details"
        description="Allow users to reveal detailed sub-sections by collapsing/expanding content in-place."
        preview={
          <div className="w-full max-w-lg">
            <Timeline>
              <TimelineItem
                title="Server Deployment"
                description="Web application uploaded to cloud infrastructure."
                details={
                  <pre className="font-mono text-[10px] whitespace-pre-wrap">
                    {
                      "$ pm2 deploy ecosystem.config.js production\n--> Deploying successfully to server-1.bloom.io\n--> Server started on port 3000\n--> Health check OK (200)"
                    }
                  </pre>
                }
              />
            </Timeline>
          </div>
        }
        code={`<Timeline>
  <TimelineItem
    title="Server Deployment"
    details={
      <pre className="font-mono text-[10px]">
        {"$ pm2 deploy..."}
      </pre>
    }
  />
</Timeline>`}
      />

      <DocsComponent
        title="Props — Timeline"
        description="Properties to configure the Timeline container component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-250 dark:border-zinc-800">
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-800 dark:text-zinc-300">
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    mode
                  </td>
                  <td className="px-3 py-2 text-xs">'left' | 'alternate'</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">'left'</td>
                  <td className="px-3 py-2">Layout alignment of milestones.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    variant
                  </td>
                  <td className="px-3 py-2 text-xs">
                    'default' | 'bordered' | 'flat' | 'contained'
                  </td>
                  <td className="px-3 py-2 text-xs text-zinc-400">'default'</td>
                  <td className="px-3 py-2">
                    The default visual layout variant for all items.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    color
                  </td>
                  <td className="px-3 py-2 text-xs">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' |
                    'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-xs text-zinc-400">'primary'</td>
                  <td className="px-3 py-2">
                    Theme color accent for the timeline.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    size
                  </td>
                  <td className="px-3 py-2 text-xs">'sm' | 'md' | 'lg'</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">'md'</td>
                  <td className="px-3 py-2">Sizing of line, text, and dots.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    radius
                  </td>
                  <td className="px-3 py-2 text-xs">
                    'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |
                    'full'
                  </td>
                  <td className="px-3 py-2 text-xs text-zinc-400">'full'</td>
                  <td className="px-3 py-2">
                    Rounding borders of cards and nodes.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — TimelineItem"
        description="Properties to configure individual TimelineItem components."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-250 dark:border-zinc-800">
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-800 dark:text-zinc-300">
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    title
                  </td>
                  <td className="px-3 py-2 text-xs">ReactNode</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">required</td>
                  <td className="px-3 py-2">
                    The main title header of the milestone.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    description
                  </td>
                  <td className="px-3 py-2 text-xs">ReactNode</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">undefined</td>
                  <td className="px-3 py-2">
                    Chronological milestone text description.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    time
                  </td>
                  <td className="px-3 py-2 text-xs">string</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">undefined</td>
                  <td className="px-3 py-2">
                    Timestamp displayed next to the item.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    icon
                  </td>
                  <td className="px-3 py-2 text-xs">ReactNode</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">undefined</td>
                  <td className="px-3 py-2">
                    Custom icon graphic replacing standard circle node.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    details
                  </td>
                  <td className="px-3 py-2 text-xs">ReactNode</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">undefined</td>
                  <td className="px-3 py-2">
                    Collapsible details block content.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    status
                  </td>
                  <td className="px-3 py-2 text-xs">string</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">'default'</td>
                  <td className="px-3 py-2">
                    Milestone-level status color override.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsPagination />
    </div>
  );
}
