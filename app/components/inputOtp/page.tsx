"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/inputOtp/inputOtp";
import { inputOtpCode } from "@/components/ui/inputOtp/inputOtp.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function InputOtpComponentPage() {
  const [val1, setVal1] = React.useState("");
  const [val2, setVal2] = React.useState("");
  const [val3, setVal3] = React.useState("");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Input OTP"
        description="Accessible one-time password input component supporting input mode validation (numeric only, letters only, alphanumeric), custom lengths, separators, and sizes."
      />

      <InstallationBlock componentName="inputOtp" />

      <Tabs defaultValue="inputOtp">
        <TabsList background={false}>
          <TabsTrigger
            value="inputOtp"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            inputOtp.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inputOtp">
          <CodeBlock
            code={inputOtpCode}
            componentName="inputOtp.tsx"
            description="Core implementation of the InputOTP component."
            tags={["React", "Input OTP", "Tailwind", "Form"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard 6-digit numeric verification code input."
        preview={
          <div className="space-y-2">
            <InputOTP maxLength={6} value={val1} onChange={setVal1} allowedType="numeric">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <div className="text-xs text-muted-foreground font-mono">Entered Value: {val1 || "—"}</div>
          </div>
        }
        code={`<InputOTP maxLength={6} allowedType="numeric">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
      />

      {/* Allowed Input Types */}
      <DocsComponent
        title="Allowed Types (Numeric, Letters, Alphanumeric)"
        description="Restrict user entry to specific character sets using the 'allowedType' prop: 'numeric', 'alphabetic', or 'alphanumeric'."
        preview={
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold text-foreground block mb-2">1. Numbers Only (allowedType="numeric")</span>
              <InputOTP maxLength={4} allowedType="numeric">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div>
              <span className="text-xs font-semibold text-foreground block mb-2">2. Letters Only (allowedType="alphabetic")</span>
              <InputOTP maxLength={4} allowedType="alphabetic">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div>
              <span className="text-xs font-semibold text-foreground block mb-2">3. Alphanumeric Mixed (allowedType="alphanumeric")</span>
              <InputOTP maxLength={6} allowedType="alphanumeric" value={val2} onChange={setVal2}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        }
        code={`<InputOTP maxLength={4} allowedType="numeric">...</InputOTP>
<InputOTP maxLength={4} allowedType="alphabetic">...</InputOTP>
<InputOTP maxLength={6} allowedType="alphanumeric">...</InputOTP>`}
        props={["allowedType: 'numeric' | 'alphabetic' | 'alphanumeric'"]}
      />

      {/* Group Separator */}
      <DocsComponent
        title="Digit Lengths & Group Separators"
        description="Split OTP digits into formatted groups using <InputOTPSeparator />."
        preview={
          <InputOTP maxLength={6} value={val3} onChange={setVal3}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        }
        code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
      />

      {/* Sizes */}
      <DocsComponent
        title="Slot Sizes"
        description="Control slot square dimensions using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs text-muted-foreground block mb-1">Small (sm):</span>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} size="sm" />
                  <InputOTPSlot index={1} size="sm" />
                  <InputOTPSlot index={2} size="sm" />
                  <InputOTPSlot index={3} size="sm" />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block mb-1">Medium (md):</span>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} size="md" />
                  <InputOTPSlot index={1} size="md" />
                  <InputOTPSlot index={2} size="md" />
                  <InputOTPSlot index={3} size="md" />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block mb-1">Large (lg):</span>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} size="lg" />
                  <InputOTPSlot index={1} size="lg" />
                  <InputOTPSlot index={2} size="lg" />
                  <InputOTPSlot index={3} size="lg" />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        }
        code={`<InputOTPSlot index={0} size="sm" />
<InputOTPSlot index={0} size="md" />
<InputOTPSlot index={0} size="lg" />`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — InputOTP"
        description="Supported properties for the InputOTP component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Default</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">allowedType</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'numeric' | 'alphabetic' | 'alphanumeric'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'numeric'</td>
                  <td className="px-3 py-2 text-muted-foreground">Restricts allowed input characters (numbers, letters, or mixed).</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">maxLength</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">6</td>
                  <td className="px-3 py-2 text-muted-foreground">Total number of OTP input digit slots.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">size (on Slot)</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Dimensional size variant for slot boxes.</td>
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
