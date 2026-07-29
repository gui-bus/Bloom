import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Input OTP",
  description: "Accessible one-time password component with copy-paste and keyboard navigation.",
};

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
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Input OTP"
        description="A specialized input component for entering 2FA/one-time verification codes with individual slot digits and paste support."
      />

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
            tags={["React", "Input OTP", "Tailwind", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="6-digit verification code input."
        preview={
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-foreground/90">Verification Code</span>
            <InputOTP maxLength={6}>
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — InputOTP"
        description="Properties to configure the InputOTP component."
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
                  <td className="px-3 py-2 font-mono text-primary">maxLength</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Total length limit of the OTP passcode.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">index</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Zero-based slot index passed to InputOTPSlot.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
