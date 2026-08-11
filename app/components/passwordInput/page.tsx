"use client";

import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { passwordInputCode } from "@/components/ui/passwordInput/passwordInput.code";
import { Separator } from "@/components/ui/separator/separator";

export default function PasswordInputComponentPage() {
  const [isValid, setIsValid] = React.useState(false);
  const [customValue, setCustomValue] = React.useState("");

  const customRules = React.useMemo(
    () => [
      {
        id: "no-spaces",
        label: "Must not contain spaces",
        validate: (val: string) => !/\s/.test(val),
      },
      {
        id: "starts-letter",
        label: "Must start with a letter",
        validate: (val: string) => /^[A-Za-z]/.test(val),
      },
    ],
    [],
  );

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Password Input"
        description="A specialized password input field equipped with configurable validation rules, real-time feedback tick/cross indicators, and a visual password strength meter."
      />

      <ImportSnippet
        importCode={`import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";`}
      />

      <InstallationBlock componentName="passwordInput" />

      <CodeBlock
        code={passwordInputCode}
        componentName="passwordInput.tsx"
        description="Core implementation of the PasswordInput component."
        tags={["React", "PasswordInput", "Validation", "StrengthMeter", "Form"]}
      />

      <DocsComponent
        title="Default"
        description="A basic password input with default requirements (8 characters min, uppercase, lowercase, number, symbol)."
        preview={
          <div className="max-w-md w-full">
            <PasswordInput
              label="Default Password"
              placeholder="Enter your password"
              onValidityChange={setIsValid}
            />
            <p className="text-xs text-muted-foreground mt-2 font-mono">
              Form valid: {isValid ? "Yes" : "No"}
            </p>
          </div>
        }
        code={`<PasswordInput
  label="Default Password"
  placeholder="Enter your password"
  onValidityChange={(isValid) => console.log(isValid)}
/>`}
      />

      <DocsComponent
        title="Custom Validation Rules"
        description="Define custom password criteria by passing an array of rules with validation functions."
        preview={
          <div className="max-w-md w-full">
            <PasswordInput
              label="Custom Criteria Password"
              placeholder="No spaces & starts with a letter"
              value={customValue}
              onChange={(e) => setCustomValue(e.target.value)}
              customRules={customRules}
              minLength={6}
              requireSymbol={false}
            />
          </div>
        }
        code={`const customRules = [
  {
    id: "no-spaces",
    label: "Must not contain spaces",
    validate: (val) => !/\\s/.test(val),
  },
  {
    id: "starts-letter",
    label: "Must start with a letter",
    validate: (val) => /^[A-Za-z]/.test(val),
  },
];

<PasswordInput
  label="Custom Criteria Password"
  placeholder="No spaces & starts with a letter"
  customRules={customRules}
  minLength={6}
  requireSymbol={false}
/>`}
      />

      <DocsComponent
        title="Show Requirements Mode"
        description="Control when the password requirement panel is visible: 'always', 'on-focus' (default), or 'never'."
        preview={
          <div className="flex flex-col gap-6 max-w-md w-full">
            <PasswordInput
              label="Always Display (showRequirements='always')"
              placeholder="Requirements always visible"
              showRequirements="always"
            />
            <PasswordInput
              label="Never Display (showRequirements='never')"
              placeholder="Requirements hidden"
              showRequirements="never"
            />
          </div>
        }
        code={`<PasswordInput
  label="Always Display"
  showRequirements="always"
/>

<PasswordInput
  label="Never Display"
  showRequirements="never"
/>`}
      />

      <DocsComponent
        title="Hide Strength Meter"
        description="Disable the password strength progress bar indicator."
        preview={
          <div className="max-w-md w-full">
            <PasswordInput
              label="No Strength Meter"
              placeholder="Enter password"
              showStrengthMeter={false}
            />
          </div>
        }
        code={`<PasswordInput
  label="No Strength Meter"
  showStrengthMeter={false}
/>`}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — PasswordInput"
        description="Supported properties for the PasswordInput component."
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
                    minLength
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">8</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Minimum length requirement. Set to 0 to disable.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    requireUppercase
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Requires at least one uppercase letter.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    requireLowercase
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Requires at least one lowercase letter.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    requireNumber
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Requires at least one number digit.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    requireSymbol
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Requires at least one special character/symbol.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    customRules
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    PasswordRule[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of custom validation rules.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showRequirements
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "always" | "on-focus" | "never"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    "on-focus"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visibility of the requirements validation card helper.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showStrengthMeter
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Toggles visibility of the password strength progress bar.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    onValidityChange
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    (isValid: boolean) =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback function triggered when the overall password
                    validation status changes.
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
