"use client";

import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/inputOtp/inputOtp";
import { inputOtpCode } from "@/components/ui/inputOtp/inputOtp.code";
import { Separator } from "@/components/ui/separator/separator";

export default function InputOtpComponentPage() {
  const [val1, setVal1] = React.useState("");
  const [val2, setVal2] = React.useState("");
  const [val3, setVal3] = React.useState("");
  const [val4, setVal4] = React.useState("");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Input OTP"
        description="One-time password input component built on input-otp with instant auto-paste clipboards, flexible group separators (3 - 3, 2 - 2 - 2), character type filters, and custom slot sizes."
      />

      <ImportSnippet
        importCode={`import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/inputOtp/inputOtp";`}
      />

      <InstallationBlock componentName="inputOtp" />

      <CodeBlock
        code={inputOtpCode}
        componentName="inputOtp.tsx"
        description="Core implementation of the InputOTP component."
        tags={["React", "Input OTP", "Auto-Paste", "Separators"]}
      />

      <DocsComponent
        title="Group Separators (3 - 3)"
        description="Split 6-digit OTP codes into two groups of 3 using <InputOTPSeparator />."
        preview={
          <div className="space-y-3">
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
            <p className="text-xs text-muted-foreground font-mono">
              Copy a 6-digit code (e.g.,{" "}
              <span className="text-sky-500 font-bold">123456</span>) to test
              instant auto-paste.
            </p>
          </div>
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

      <DocsComponent
        title="Custom Multi-Group Separators (2 - 2 - 2)"
        description="Divide codes into any custom layout such as three groups of two digits with multiple separators."
        preview={
          <div className="space-y-3">
            <InputOTP maxLength={6} value={val4} onChange={setVal4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        }
        code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
      />

      <DocsComponent
        title="Allowed Types (Numeric, Letters, Alphanumeric)"
        description="Restrict user entry to specific character sets using the 'allowedType' prop: 'numeric', 'alphabetic', or 'alphanumeric'."
        preview={
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold text-foreground block mb-2">
                1. Numbers Only (allowedType="numeric")
              </span>
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
              <span className="text-xs font-semibold text-foreground block mb-2">
                2. Letters Only (allowedType="alphabetic")
              </span>
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
              <span className="text-xs font-semibold text-foreground block mb-2">
                3. Alphanumeric Mixed (allowedType="alphanumeric")
              </span>
              <InputOTP
                maxLength={6}
                allowedType="alphanumeric"
                value={val2}
                onChange={setVal2}
              >
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

      <DocsComponent
        title="Slot Sizes"
        description="Control slot square dimensions using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs text-muted-foreground block mb-1">
                Small (sm):
              </span>
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
              <span className="text-xs text-muted-foreground block mb-1">
                Medium (md):
              </span>
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
              <span className="text-xs text-muted-foreground block mb-1">
                Large (lg):
              </span>
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

      <DocsComponent
        title="Masked Password Dot Mode"
        description="Hide sensitive verification PIN codes with masked dot indicators using 'maskCode={true}' on slots."
        preview={
          <div className="space-y-3">
            <InputOTP maxLength={6} value={val1} onChange={setVal1}>
              <InputOTPGroup>
                <InputOTPSlot index={0} maskCode />
                <InputOTPSlot index={1} maskCode />
                <InputOTPSlot index={2} maskCode />
                <InputOTPSlot index={3} maskCode />
                <InputOTPSlot index={4} maskCode />
                <InputOTPSlot index={5} maskCode />
              </InputOTPGroup>
            </InputOTP>
          </div>
        }
        code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} maskCode />
    <InputOTPSlot index={1} maskCode />
    <InputOTPSlot index={2} maskCode />
    <InputOTPSlot index={3} maskCode />
    <InputOTPSlot index={4} maskCode />
    <InputOTPSlot index={5} maskCode />
  </InputOTPGroup>
</InputOTP>`}
        props={["maskCode: boolean"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — InputOTP"
        description="Supported properties for the InputOTP component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    maskCode (on Slot)
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Masks digits into password dots for PIN security.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    allowedType
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'numeric' | 'alphabetic' | 'alphanumeric'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'numeric'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Restricts allowed input characters (numbers, letters, or
                    mixed).
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    maxLength
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">6</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Total number of OTP input digit slots.
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
