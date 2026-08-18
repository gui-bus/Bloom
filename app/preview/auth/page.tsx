"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import * as React from "react";
import { DocsComponent } from "@/components/core/docsComponent";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Input } from "@/components/ui/input/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/inputOtp/inputOtp";
import { Label } from "@/components/ui/label/label";
import { Link } from "@/components/ui/link/link";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { Separator } from "@/components/ui/separator/separator";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
} from "@/components/ui/stepper/stepper";
import { Toast, toast } from "@/components/ui/toast/toast";

const classicCardCode = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { Link } from "@/components/ui/link/link";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { Separator } from "@/components/ui/separator/separator";
import { toast } from "@/components/ui/toast/toast";

export function ClassicCardLogin() {
  return (
    <div className="flex justify-center p-8 sm:p-12 bg-zinc-50 dark:bg-zinc-900/10 rounded-[2rem]">
      <Card variant="shadow" className="w-full max-w-md">
        <CardHeader className="space-y-1.5 p-8 pb-4">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Enter your credentials below to access your account dashboard.
          </CardDescription>
        </CardHeader>
        <CardBody className="space-y-5 p-8 pt-2 pb-6">
          <Input type="email" label="Email Address" placeholder="name@company.com" isRequired />
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <Label>Password</Label>
              <Link href="#" size="sm" variant="default">Forgot password?</Link>
            </div>
            <PasswordInput placeholder="••••••••" showStrengthMeter={false} showRequirements="never" isRequired />
          </div>
          <Checkbox label="Remember me on this device" color="primary" />
        </CardBody>
        <CardFooter className="flex flex-col gap-4 p-8 pt-0">
          <Button
            className="w-full h-11 font-semibold"
            color="primary"
            onClick={() => toast.success("Successfully logged in!")}
          >
            Sign In
          </Button>
          <Separator label="Or continue with" />
          <Button
            className="w-full h-11"
            variant="bordered"
            startContent={<Icon icon="logos:google-icon" className="size-4" />}
            onClick={() => toast.info("Redirecting to Google...")}
          >
            Continue with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}`;

const splitScreenCode = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardHeader,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Input } from "@/components/ui/input/input";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { toast } from "@/components/ui/toast/toast";

export function SplitScreenLogin() {
  return (
    <div className="p-4 sm:p-8 bg-zinc-50 dark:bg-zinc-900/10 rounded-[2rem]">
      <div className="grid md:grid-cols-2 max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl min-h-[500px]">
        <div className="relative hidden md:flex flex-col justify-between p-12 text-white bg-zinc-950">
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 via-sky-700 to-indigo-700 opacity-95" />
          <div className="relative z-10 flex items-center gap-2.5 font-bold text-lg">
            <Icon icon="hugeicons:sparkles" className="size-6 text-sky-300" />
            <span>Bloom UI</span>
          </div>
          <div className="relative z-10 space-y-6">
            <blockquote className="text-xl font-medium leading-relaxed italic text-zinc-100">
              &ldquo;This design system saved us hundreds of UI styling hours.&rdquo;
            </blockquote>
            <div>
              <span className="block font-bold text-base">Guilherme Bus</span>
              <span className="block text-xs text-sky-200">Lead Frontend Engineer</span>
            </div>
          </div>
        </div>
        <Card variant="ghost" className="rounded-none p-0">
          <CardHeader className="p-8 sm:p-12 pb-0 space-y-2">
            <h4 className="text-2xl font-bold tracking-tight">Get Started</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Create your free account and explore the platform today.
            </p>
          </CardHeader>
          <CardBody className="p-8 sm:p-12 space-y-5">
            <Input type="text" label="Full Name" placeholder="John Doe" isRequired />
            <Input type="email" label="Email Address" placeholder="john@company.com" isRequired />
            <PasswordInput label="Password" placeholder="Create a strong password" showStrengthMeter showRequirements="on-focus" isRequired />
            <Checkbox label="I agree to the Terms of Service and Privacy Policy" color="primary" />
            <Button
              className="w-full h-11 font-semibold mt-2"
              color="primary"
              onClick={() => toast.success("Account created successfully!")}
            >
              Create Account
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}`;

const minimalistCode = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardHeader,
} from "@/components/ui/card/card";
import { Input } from "@/components/ui/input/input";
import { Link } from "@/components/ui/link/link";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { toast } from "@/components/ui/toast/toast";

export function MinimalistLogin() {
  return (
    <div className="flex justify-center p-8 sm:p-12 bg-zinc-50 dark:bg-zinc-900/10 rounded-[2rem]">
      <Card variant="shadow" className="w-full max-w-sm">
        <CardHeader className="p-8 pb-0 space-y-4 items-center text-center flex flex-col">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
            <Icon icon="hugeicons:lock-key-01" className="size-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xl font-bold tracking-tight">Confirm Credentials</h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Please verify your credentials to confirm authorization.
            </p>
          </div>
        </CardHeader>
        <CardBody className="p-8 space-y-4">
          <Input type="email" placeholder="Access Email" isRequired />
          <PasswordInput placeholder="Confirm Password" showStrengthMeter={false} showRequirements="never" isRequired />
          <Button
            className="w-full h-11 font-semibold"
            color="primary"
            variant="flat"
            onClick={() => toast.success("Access authorized successfully!")}
          >
            Authorize Access
          </Button>
          <div className="text-center pt-1">
            <Link href="#" variant="muted" size="sm">Cancel and Return</Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}`;

const imageOverlayCode = `import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { Link } from "@/components/ui/link/link";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { Separator } from "@/components/ui/separator/separator";
import { toast } from "@/components/ui/toast/toast";

export function ImageSplitLogin() {
  return (
    <div className="grid md:grid-cols-2 rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl min-h-[580px]">
      <div className="relative hidden md:block">
        <Image
          src="/utils/placeholder.svg"
          alt="Login visual"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-zinc-900/60" />
        <div className="absolute bottom-8 left-8 right-8 space-y-2">
          <p className="text-white font-bold text-xl leading-snug">
            Built for teams who ship fast.
          </p>
          <p className="text-zinc-300 text-sm">
            Bloom UI gives you the components to build great products — without starting from scratch.
          </p>
        </div>
      </div>
      <Card variant="ghost" className="rounded-none justify-center">
        <CardHeader className="p-8 sm:p-12 pb-0 space-y-1">
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>
            Enter your credentials to access your workspace.
          </CardDescription>
        </CardHeader>
        <CardBody className="p-8 sm:p-12 space-y-5">
          <Input type="email" label="Email Address" placeholder="you@company.com" isRequired />
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <Label>Password</Label>
              <Link href="#" size="sm">Forgot password?</Link>
            </div>
            <PasswordInput placeholder="••••••••" showStrengthMeter={false} showRequirements="never" isRequired />
          </div>
          <Checkbox label="Keep me signed in for 30 days" color="primary" />
          <Button
            className="w-full h-11 font-semibold"
            color="primary"
            onClick={() => toast.success("Successfully logged in!")}
          >
            Sign In
          </Button>
          <Separator label="or" />
          <div className="flex gap-3">
            <Button
              className="flex-1 h-11"
              variant="bordered"
              startContent={<Icon icon="logos:google-icon" className="size-4" />}
              onClick={() => toast.info("Connecting to Google...")}
            >
              Google
            </Button>
            <Button
              className="flex-1 h-11"
              variant="bordered"
              startContent={<Icon icon="logos:github-icon" className="size-4" />}
              onClick={() => toast.info("Connecting to GitHub...")}
            >
              GitHub
            </Button>
          </div>
        </CardBody>
        <CardFooter className="p-8 sm:p-12 pt-0 justify-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link href="#" size="sm" variant="default">Create one free</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}`;

const otpVerificationCode = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardHeader,
} from "@/components/ui/card/card";
import {
  InputOTP, InputOTPGroup, InputOTPSlot,
} from "@/components/ui/inputOtp/inputOtp";
import { Link } from "@/components/ui/link/link";
import { toast } from "@/components/ui/toast/toast";

export function OTPVerification() {
  return (
    <div className="flex justify-center p-8 sm:p-12 bg-zinc-50 dark:bg-zinc-900/10 rounded-[2rem]">
      <Card variant="shadow" className="w-full max-w-sm">
        <CardHeader className="p-8 pb-0 flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-500/10">
            <Icon icon="hugeicons:mail-send-01" className="size-8 text-sky-500" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight">Check your email</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              We sent a 6-digit verification code to{" "}
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">gui@bloom.dev</span>
            </p>
          </div>
        </CardHeader>
        <CardBody className="p-8 flex flex-col items-center gap-6">
          <InputOTP maxLength={6} allowedType="numeric">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button
            className="w-full h-11 font-semibold"
            color="primary"
            onClick={() => toast.success("OTP verified successfully!")}
          >
            Verify Code
          </Button>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Didn&apos;t receive it?{" "}
            <Link href="#" size="sm" onClick={() => toast.info("New verification code sent!")}>Resend code</Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}`;

const socialLoginCode = `import Image from "next/image";
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar/avatar";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardHeader,
} from "@/components/ui/card/card";
import { Separator } from "@/components/ui/separator/separator";
import { toast } from "@/components/ui/toast/toast";

const recentAccounts = [
  { name: "Guilherme Bus", email: "gui@bloom.dev", src: "/utils/placeholder.svg" },
  { name: "Sarah Mendes", email: "sarah@company.com", src: "/utils/placeholder.svg" },
];

export function SocialLogin() {
  return (
    <div className="flex justify-center p-8 sm:p-12 bg-zinc-50 dark:bg-zinc-900/10 rounded-[2rem]">
      <Card variant="shadow" className="w-full max-w-sm">
        <CardHeader className="p-8 pb-0 flex flex-col items-center text-center space-y-3">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/utils/placeholder.svg"
              alt="App Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight">Continue to Bloom</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Choose your preferred login method
            </p>
          </div>
        </CardHeader>
        <CardBody className="p-8 space-y-8">
          <div className="space-y-3">
            <Button
              className="w-full h-12 text-sm font-medium"
              variant="bordered"
              startContent={<Icon icon="logos:google-icon" className="size-5" />}
              onClick={() => toast.info("Connecting to Google...")}
            >
              Continue with Google
            </Button>
            <Button
              className="w-full h-12 text-sm font-medium"
              variant="bordered"
              startContent={<Icon icon="logos:github-icon" className="size-5 dark:invert" />}
              onClick={() => toast.info("Connecting to GitHub...")}
            >
              Continue with GitHub
            </Button>
            <Button
              className="w-full h-12 text-sm font-medium"
              variant="bordered"
              startContent={<Icon icon="logos:microsoft-icon" className="size-5" />}
              onClick={() => toast.info("Connecting to Microsoft...")}
            >
              Continue with Microsoft
            </Button>
          </div>
          <Separator label="or" />
          <Button
            className="w-full h-12 text-sm font-medium"
            variant="flat"
            startContent={<Icon icon="hugeicons:mail-01" className="size-4" />}
            onClick={() => toast.success("Verification link sent to your email!")}
          >
            Continue with Email
          </Button>
          <div className="space-y-3">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider text-center">
              Recent accounts
            </p>
            {recentAccounts.map((user) => (
              <Card
                key={user.email}
                isPressable
                isHoverable
                variant="bordered"
                className="w-full"
                onClick={() => toast.success("Switched to " + user.name + "'s account")}
              >
                <CardBody className="flex flex-row items-center gap-3 p-3">
                  <Avatar size="sm">
                    <AvatarImage src={user.src} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{user.name}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{user.email}</p>
                  </div>
                  <Icon icon="hugeicons:arrow-right-01" className="size-4 text-zinc-400" />
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}`;

const passwordResetCode = `import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { toast } from "@/components/ui/toast/toast";

export function PasswordReset() {
  return (
    <div className="flex justify-center p-8 sm:p-12 bg-zinc-50 dark:bg-zinc-900/10 rounded-[2rem]">
      <Card variant="shadow" className="w-full max-w-md">
        <CardHeader className="space-y-1.5 p-8 pb-4">
          <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
          <CardDescription>
            Choose a strong password to protect and secure your account.
          </CardDescription>
        </CardHeader>
        <CardBody className="space-y-5 p-8 pt-2 pb-6">
          <PasswordInput
            label="New Password"
            placeholder="Enter new password"
            showStrengthMeter
            showRequirements="always"
            isRequired
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm new password"
            showStrengthMeter={false}
            showRequirements="never"
            isRequired
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-4 p-8 pt-0">
          <Button
            className="w-full h-11 font-semibold"
            color="primary"
            onClick={() => toast.success("Password updated successfully!")}
          >
            Update Password
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}`;

const signUpWithStrengthCode = `import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Input } from "@/components/ui/input/input";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { toast } from "@/components/ui/toast/toast";

export function SignUpWithStrength() {
  return (
    <div className="flex justify-center p-8 sm:p-12 bg-zinc-50 dark:bg-zinc-900/10 rounded-[2rem]">
      <Card variant="shadow" className="w-full max-w-md">
        <CardHeader className="space-y-1.5 p-8 pb-4">
          <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
          <CardDescription>
            Join us to get started with your new workspace.
          </CardDescription>
        </CardHeader>
        <CardBody className="space-y-5 p-8 pt-2 pb-6">
          <Input type="text" label="Full Name" placeholder="John Doe" isRequired />
          <Input type="email" label="Email Address" placeholder="name@company.com" isRequired />
          <PasswordInput
            label="Password"
            placeholder="Create password"
            showStrengthMeter
            showRequirements="on-focus"
            isRequired
          />
          <Checkbox label="I agree to the Terms & Conditions" color="primary" />
        </CardBody>
        <CardFooter className="flex flex-col gap-4 p-8 pt-0">
          <Button
            className="w-full h-11 font-semibold"
            color="primary"
            onClick={() => toast.success("Sign up successful!")}
          >
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}`;

const multiStepSignupCode = `import * as React from "react";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Input } from "@/components/ui/input/input";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
} from "@/components/ui/stepper/stepper";
import { toast } from "@/components/ui/toast/toast";

export function MultiStepSignup() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="flex justify-center p-8 sm:p-12 bg-zinc-50 dark:bg-zinc-900/10 rounded-[2rem]">
      <Card variant="shadow" className="w-full max-w-xl">
        <CardHeader className="space-y-1.5 p-8 pb-4">
          <CardTitle className="text-2xl font-bold">Register Account</CardTitle>
          <CardDescription>
            Complete the steps below to setup your new account.
          </CardDescription>
        </CardHeader>
        <CardBody className="p-8 pt-2 pb-6 space-y-8">
          <Stepper activeStep={activeStep} size="sm">
            <StepperItem step={0}>
              <StepperIndicator step={0} />
              <div>
                <StepperTitle>Account</StepperTitle>
                <StepperDescription>Credentials</StepperDescription>
              </div>
            </StepperItem>
            <StepperSeparator step={0} />
            <StepperItem step={1}>
              <StepperIndicator step={1} />
              <div>
                <StepperTitle>Profile</StepperTitle>
                <StepperDescription>Personal info</StepperDescription>
              </div>
            </StepperItem>
            <StepperSeparator step={1} />
            <StepperItem step={2}>
              <StepperIndicator step={2} />
              <div>
                <StepperTitle>Finish</StepperTitle>
                <StepperDescription>Confirmation</StepperDescription>
              </div>
            </StepperItem>
          </Stepper>

          <div className="min-h-[220px] flex flex-col justify-center">
            {activeStep === 0 && (
              <div className="space-y-4">
                <Input type="email" label="Email Address" placeholder="name@company.com" isRequired />
                <PasswordInput label="Password" placeholder="Create password" showStrengthMeter showRequirements="on-focus" isRequired />
              </div>
            )}

            {activeStep === 1 && (
              <div className="space-y-4">
                <Input type="text" label="Full Name" placeholder="John Doe" isRequired />
                <Input type="text" label="Company Name" placeholder="Acme Inc." />
              </div>
            )}

            {activeStep === 2 && (
              <div className="text-center space-y-4 py-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <span className="text-xl">✓</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-lg">All Set!</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    By submitting, you agree to our terms and conditions.
                  </p>
                </div>
                <Checkbox label="Subscribe to newsletter updates" color="primary" />
              </div>
            )}
          </div>
        </CardBody>
        <CardFooter className="flex justify-between p-8 pt-0">
          <Button
            variant="flat"
            isDisabled={activeStep === 0}
            onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
          >
            Back
          </Button>
          {activeStep < 2 ? (
            <Button color="primary" onClick={() => setActiveStep((s) => Math.min(2, s + 1))}>
              Continue
            </Button>
          ) : (
            <Button
              color="primary"
              onClick={() => toast.success("Registration complete! Welcome aboard.")}
            >
              Complete Signup
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}`;

const recentAccounts = [
  {
    name: "Guilherme Bus",
    email: "gui@bloom.dev",
    src: "/utils/placeholder.svg",
  },
  {
    name: "Sarah Mendes",
    email: "sarah@company.com",
    src: "/utils/placeholder.svg",
  },
];

function ClassicCardPreview() {
  return (
    <Card variant="shadow" className="w-full max-w-md">
      <CardHeader className="space-y-1.5 p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
        <CardDescription>
          Enter your credentials below to access your account dashboard.
        </CardDescription>
      </CardHeader>
      <CardBody className="space-y-5 p-8 pt-2 pb-6">
        <Input
          type="email"
          label="Email Address"
          placeholder="name@company.com"
          isRequired
        />
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <Label>Password</Label>
            <Link href="#" size="sm" variant="default">
              Forgot password?
            </Link>
          </div>
          <PasswordInput
            placeholder="••••••••"
            showStrengthMeter={false}
            showRequirements="never"
            isRequired
          />
        </div>
        <Checkbox label="Remember me on this device" color="primary" />
      </CardBody>
      <CardFooter className="flex flex-col gap-4 p-8 pt-0">
        <Button
          className="w-full h-11 text-sm font-semibold"
          color="primary"
          onClick={() => toast.success("Successfully logged in!")}
        >
          Sign In
        </Button>
        <Separator label="Or continue with" />
        <Button
          className="w-full h-11 text-sm font-medium"
          variant="bordered"
          startContent={<Icon icon="logos:google-icon" className="size-4" />}
          onClick={() => toast.info("Redirecting to Google...")}
        >
          Continue with Google
        </Button>
      </CardFooter>
    </Card>
  );
}

function SplitScreenPreview() {
  return (
    <div className="grid md:grid-cols-2 w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl min-h-[500px]">
      <div className="relative hidden md:flex flex-col justify-between p-12 text-white bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 via-sky-700 to-indigo-700 opacity-95" />
        <div className="relative z-10 flex items-center gap-2.5 font-bold text-lg tracking-tight">
          <Icon icon="hugeicons:sparkles" className="size-6 text-sky-300" />
          <span>Bloom UI</span>
        </div>
        <div className="relative z-10 space-y-6">
          <blockquote className="text-xl font-medium leading-relaxed italic text-zinc-100">
            &ldquo;This design system saved us hundreds of UI styling hours,
            letting our engineers focus on shipping functionality.&rdquo;
          </blockquote>
          <div>
            <span className="block font-bold text-base">Guilherme Bus</span>
            <span className="block text-xs text-sky-200">
              Lead Frontend Engineer
            </span>
          </div>
        </div>
      </div>
      <Card variant="ghost" className="rounded-none">
        <CardHeader className="p-8 sm:p-12 pb-0 space-y-2">
          <h4 className="text-2xl font-bold tracking-tight">Get Started</h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Create your free account and explore the platform today.
          </p>
        </CardHeader>
        <CardBody className="p-8 sm:p-12 space-y-5">
          <Input
            type="text"
            label="Full Name"
            placeholder="John Doe"
            isRequired
          />
          <Input
            type="email"
            label="Email Address"
            placeholder="john@company.com"
            isRequired
          />
          <PasswordInput
            label="Password"
            placeholder="Create a strong password"
            showStrengthMeter
            showRequirements="on-focus"
            isRequired
          />
          <Checkbox
            label="I agree to the Terms of Service and Privacy Policy"
            color="primary"
          />
          <Button
            className="w-full h-11 text-sm font-semibold mt-2"
            color="primary"
            onClick={() => toast.success("Account created successfully!")}
          >
            Create Account
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

function MinimalistPreview() {
  return (
    <Card variant="shadow" className="w-full max-w-sm">
      <CardHeader className="p-8 pb-0 flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
          <Icon icon="hugeicons:lock-key-01" className="size-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xl font-bold tracking-tight">
            Confirm Credentials
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Please verify your credentials to confirm authorization.
          </p>
        </div>
      </CardHeader>
      <CardBody className="p-8 space-y-4">
        <Input type="email" placeholder="Access Email" isRequired />
        <PasswordInput
          placeholder="Confirm Password"
          showStrengthMeter={false}
          showRequirements="never"
          isRequired
        />
        <Button
          className="w-full h-11 text-sm font-semibold"
          color="primary"
          variant="flat"
          onClick={() => toast.success("Access authorized successfully!")}
        >
          Authorize Access
        </Button>
        <div className="text-center pt-1">
          <Link href="#" variant="muted" size="sm">
            Cancel and Return
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

function ImageOverlayPreview() {
  return (
    <div className="grid md:grid-cols-2 rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl min-h-[580px] w-full max-w-4xl mx-auto">
      <div className="relative hidden md:block">
        <Image
          src="/utils/placeholder.svg"
          alt="Login visual"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-zinc-900/60" />
        <div className="absolute bottom-8 left-8 right-8 space-y-2">
          <p className="text-white font-bold text-xl leading-snug">
            Built for teams who ship fast.
          </p>
          <p className="text-zinc-300 text-sm">
            Bloom UI gives you the components to build great products — without
            starting from scratch.
          </p>
        </div>
      </div>
      <Card variant="ghost" className="rounded-none justify-center">
        <CardHeader className="p-8 sm:p-12 pb-0 space-y-1">
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>
            Enter your credentials to access your workspace.
          </CardDescription>
        </CardHeader>
        <CardBody className="p-8 sm:p-12 space-y-5">
          <Input
            type="email"
            label="Email Address"
            placeholder="you@company.com"
            isRequired
          />
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <Label>Password</Label>
              <Link href="#" size="sm">
                Forgot password?
              </Link>
            </div>
            <PasswordInput
              placeholder="••••••••"
              showStrengthMeter={false}
              showRequirements="never"
              isRequired
            />
          </div>
          <Checkbox label="Keep me signed in for 30 days" color="primary" />
          <Button
            className="w-full h-11 font-semibold"
            color="primary"
            onClick={() => toast.success("Successfully logged in!")}
          >
            Sign In
          </Button>
          <Separator label="or" />
          <div className="flex gap-3">
            <Button
              className="flex-1 h-11"
              variant="bordered"
              startContent={
                <Icon icon="logos:google-icon" className="size-4" />
              }
              onClick={() => toast.info("Connecting to Google...")}
            >
              Google
            </Button>
            <Button
              className="flex-1 h-11"
              variant="bordered"
              startContent={
                <Icon icon="logos:github-icon" className="size-4" />
              }
              onClick={() => toast.info("Connecting to GitHub...")}
            >
              GitHub
            </Button>
          </div>
        </CardBody>
        <CardFooter className="p-8 sm:p-12 pt-0 justify-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link href="#" size="sm" variant="default">
              Create one free
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

function OTPVerificationPreview() {
  return (
    <Card variant="shadow" className="w-full max-w-sm">
      <CardHeader className="p-8 pb-0 flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-500/10">
          <Icon icon="hugeicons:mail-send-01" className="size-8 text-sky-500" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight">Check your email</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            We sent a 6-digit verification code to{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              gui@bloom.dev
            </span>
          </p>
        </div>
      </CardHeader>
      <CardBody className="p-8 flex flex-col items-center gap-6">
        <InputOTP maxLength={6} allowedType="numeric">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button
          className="w-full h-11 font-semibold"
          color="primary"
          onClick={() => toast.success("OTP verified successfully!")}
        >
          Verify Code
        </Button>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Didn&apos;t receive it?{" "}
          <Link
            href="#"
            size="sm"
            onClick={() => toast.info("New verification code sent!")}
          >
            Resend code
          </Link>
        </p>
      </CardBody>
    </Card>
  );
}

function SocialLoginPreview() {
  return (
    <Card variant="shadow" className="w-full max-w-sm">
      <CardHeader className="p-8 pb-0 flex flex-col items-center text-center space-y-3">
        <div className="relative w-16 h-16 mx-auto rounded-2xl overflow-hidden shadow-md border border-zinc-200 dark:border-zinc-800">
          <Image
            src="/utils/placeholder.svg"
            alt="App Logo"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight">
            Continue to Bloom
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Choose your preferred login method
          </p>
        </div>
      </CardHeader>
      <CardBody className="p-8 space-y-8">
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-sm font-medium"
            variant="bordered"
            startContent={<Icon icon="logos:google-icon" className="size-5" />}
            onClick={() => toast.info("Connecting to Google...")}
          >
            Continue with Google
          </Button>
          <Button
            className="w-full h-12 text-sm font-medium"
            variant="bordered"
            startContent={
              <Icon icon="logos:github-icon" className="size-5 dark:invert" />
            }
            onClick={() => toast.info("Connecting to GitHub...")}
          >
            Continue with GitHub
          </Button>
          <Button
            className="w-full h-12 text-sm font-medium"
            variant="bordered"
            startContent={
              <Icon icon="logos:microsoft-icon" className="size-5" />
            }
            onClick={() => toast.info("Connecting to Microsoft...")}
          >
            Continue with Microsoft
          </Button>
        </div>
        <Separator label="or" />
        <Button
          className="w-full h-12 text-sm font-medium"
          variant="flat"
          startContent={<Icon icon="hugeicons:mail-01" className="size-4" />}
          onClick={() => toast.success("Verification link sent to your email!")}
        >
          Continue with Email
        </Button>
        <div className="space-y-3">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider text-center">
            Recent accounts
          </p>
          {recentAccounts.map((user) => (
            <Card
              key={user.email}
              isPressable
              isHoverable
              variant="bordered"
              className="w-full"
              onClick={() =>
                toast.success(`Switched to ${user.name}'s account`)
              }
            >
              <CardBody className="flex flex-row items-center gap-3 p-3">
                <Avatar size="sm">
                  <AvatarImage src={user.src} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {user.name}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {user.email}
                  </p>
                </div>
                <Icon
                  icon="hugeicons:arrow-right-01"
                  className="size-4 text-zinc-400"
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

function PasswordResetPreview() {
  return (
    <Card variant="shadow" className="w-full max-w-md">
      <CardHeader className="space-y-1.5 p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
        <CardDescription>
          Choose a strong password to protect and secure your account.
        </CardDescription>
      </CardHeader>
      <CardBody className="space-y-5 p-8 pt-2 pb-6">
        <PasswordInput
          label="New Password"
          placeholder="Enter new password"
          showStrengthMeter
          showRequirements="always"
          isRequired
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm new password"
          showStrengthMeter={false}
          showRequirements="never"
          isRequired
        />
      </CardBody>
      <CardFooter className="flex flex-col gap-4 p-8 pt-0">
        <Button
          className="w-full h-11 font-semibold"
          color="primary"
          onClick={() => toast.success("Password updated successfully!")}
        >
          Update Password
        </Button>
      </CardFooter>
    </Card>
  );
}

function SignUpWithStrengthPreview() {
  return (
    <Card variant="shadow" className="w-full max-w-md">
      <CardHeader className="space-y-1.5 p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
        <CardDescription>
          Join us to get started with your new workspace.
        </CardDescription>
      </CardHeader>
      <CardBody className="space-y-5 p-8 pt-2 pb-6">
        <Input
          type="text"
          label="Full Name"
          placeholder="John Doe"
          isRequired
        />
        <Input
          type="email"
          label="Email Address"
          placeholder="name@company.com"
          isRequired
        />
        <PasswordInput
          label="Password"
          placeholder="Create password"
          showStrengthMeter
          showRequirements="on-focus"
          isRequired
        />
        <Checkbox label="I agree to the Terms & Conditions" color="primary" />
      </CardBody>
      <CardFooter className="flex flex-col gap-4 p-8 pt-0">
        <Button
          className="w-full h-11 font-semibold"
          color="primary"
          onClick={() => toast.success("Sign up successful!")}
        >
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
}

function MultiStepSignupPreview() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Card variant="shadow" className="w-full max-w-xl">
      <CardHeader className="space-y-1.5 p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Register Account</CardTitle>
        <CardDescription>
          Complete the steps below to setup your new account.
        </CardDescription>
      </CardHeader>
      <CardBody className="p-8 pt-2 pb-6 space-y-8">
        <Stepper activeStep={activeStep} size="sm">
          <StepperItem step={0}>
            <StepperIndicator step={0} />
            <div>
              <StepperTitle>Account</StepperTitle>
              <StepperDescription>Credentials</StepperDescription>
            </div>
          </StepperItem>
          <StepperSeparator step={0} />
          <StepperItem step={1}>
            <StepperIndicator step={1} />
            <div>
              <StepperTitle>Profile</StepperTitle>
              <StepperDescription>Personal info</StepperDescription>
            </div>
          </StepperItem>
          <StepperSeparator step={1} />
          <StepperItem step={2}>
            <StepperIndicator step={2} />
            <div>
              <StepperTitle>Finish</StepperTitle>
              <StepperDescription>Confirmation</StepperDescription>
            </div>
          </StepperItem>
        </Stepper>

        <div className="min-h-[220px] flex flex-col justify-center">
          {activeStep === 0 && (
            <div className="space-y-4">
              <Input
                type="email"
                label="Email Address"
                placeholder="name@company.com"
                isRequired
              />
              <PasswordInput
                label="Password"
                placeholder="Create password"
                showStrengthMeter
                showRequirements="on-focus"
                isRequired
              />
            </div>
          )}

          {activeStep === 1 && (
            <div className="space-y-4">
              <Input
                type="text"
                label="Full Name"
                placeholder="John Doe"
                isRequired
              />
              <Input type="text" label="Company Name" placeholder="Acme Inc." />
            </div>
          )}

          {activeStep === 2 && (
            <div className="text-center space-y-4 py-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <span className="text-xl">✓</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-lg">All Set!</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  By submitting, you agree to our terms and conditions.
                </p>
              </div>
              <Checkbox
                label="Subscribe to newsletter updates"
                color="primary"
              />
            </div>
          )}
        </div>
      </CardBody>
      <CardFooter className="flex justify-between p-8 pt-0">
        <Button
          variant="flat"
          isDisabled={activeStep === 0}
          onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
        >
          Back
        </Button>
        {activeStep < 2 ? (
          <Button
            color="primary"
            onClick={() => setActiveStep((s) => Math.min(2, s + 1))}
          >
            Continue
          </Button>
        ) : (
          <Button
            color="primary"
            onClick={() =>
              toast.success("Registration complete! Welcome aboard.")
            }
          >
            Complete Signup
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function AuthPreviewPage() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <Toast />
      <div className="space-y-3 px-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Authentication Layouts
        </h1>
        <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Explore clean, conversion-focused login and sign-up templates built
          using Bloom&apos;s component system.
        </p>
      </div>

      <DocsComponent
        title="Classic Card"
        description="A standard, centered card interface suitable for SaaS logins, dashboards, and settings views."
        preview={<ClassicCardPreview />}
        code={classicCardCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Split Screen Banner"
        description="A modern login layout featuring a split graphic/testimonial panel and full sign-up form."
        preview={<SplitScreenPreview />}
        code={splitScreenCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Modern Minimalist"
        description="A distraction-free verification panel with a clean icon header and subtle card shadow."
        preview={<MinimalistPreview />}
        code={minimalistCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Image Split Panel"
        description="A two-column layout with a full-height image on the left and a solid Card login form on the right — clean and conversion-focused."
        preview={<ImageOverlayPreview />}
        code={imageOverlayCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="OTP / Two-Factor Verification"
        description="A clean two-step verification screen using the InputOTP component for email or SMS code confirmation."
        preview={<OTPVerificationPreview />}
        code={otpVerificationCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Social Login with Recent Accounts"
        description="A provider-first login screen with OAuth buttons, email fallback, and pressable Card entries for recent accounts."
        preview={<SocialLoginPreview />}
        code={socialLoginCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Password Reset"
        description="A password update card featuring real-time requirements check and strength meter verification."
        preview={<PasswordResetPreview />}
        code={passwordResetCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Sign Up with Strength Meter"
        description="A comprehensive registration form showing password strength meter on focus."
        preview={<SignUpWithStrengthPreview />}
        code={signUpWithStrengthCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Multi-Step Registration"
        description="A registration wizard utilizing a Stepper progress flow to divide credentials and profile steps."
        preview={<MultiStepSignupPreview />}
        code={multiStepSignupCode}
        showResponsivePreview={true}
      />
    </div>
  );
}
