"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import Image from "next/image";
import * as React from "react";
import * as z from "zod";
import {
  DevicePreviewContext,
  DocsComponent,
} from "@/components/core/docsComponent";
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
import { Controller, Form, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
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
import { cn } from "@/lib/utils";

// --- CODE STRING CONSTANTS ---

const classicCardCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Form, useForm } from "@/components/ui/form/form";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { Link } from "@/components/ui/link/link";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { Separator } from "@/components/ui/separator/separator";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().default(false),
});

type FormValues = z.infer<typeof schema>;

export function ClassicCardLogin() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Successfully logged in!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1.5 p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
        <CardDescription>
          Enter your credentials below to access your account dashboard.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-5 p-8 pt-2 pb-6">
          <Input
            type="email"
            label="Email Address"
            placeholder="name@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <Label>Password</Label>
              <Link href="#" size="sm" variant="default">Forgot password?</Link>
            </div>
            <PasswordInput
              placeholder="••••••••"
              showStrengthMeter={false}
              showRequirements="never"
              {...form.register("password")}
              isInvalid={!!form.formState.errors.password}
              errorMessage={form.formState.errors.password?.message}
            />
          </div>
          <Checkbox
            label="Remember me on this device"
            color="primary"
            checked={form.watch("rememberMe")}
            onCheckedChange={(checked) => form.setValue("rememberMe", !!checked)}
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-4 p-8 pt-0">
          <Button className="w-full h-11 font-semibold" color="primary" type="submit">
            Sign In
          </Button>
          <Separator label="Or continue with" />
          <Button
            className="w-full h-11"
            variant="bordered"
            type="button"
            startContent={<Icon icon="logos:google-icon" className="size-4" />}
            onClick={() => toast.info("Redirecting to Google...")}
          >
            Continue with Google
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const splitScreenCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms to continue" }),
  }),
});

type FormValues = z.infer<typeof schema>;

export function SplitScreenSignup() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      agreeTerms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Account created successfully!");
  };

  return (
    <Card variant="ghost" className="rounded-none">
      <CardHeader className="p-12 pb-0 space-y-2">
        <h4 className="text-2xl font-bold tracking-tight">Get Started</h4>
        <p className="text-sm text-zinc-500">
          Create your free account and explore the platform today.
        </p>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="p-12 space-y-5">
          <Input
            type="text"
            label="Full Name"
            placeholder="John Doe"
            {...form.register("fullName")}
            isInvalid={!!form.formState.errors.fullName}
            errorMessage={form.formState.errors.fullName?.message}
          />
          <Input
            type="email"
            label="Email Address"
            placeholder="john@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <PasswordInput
            label="Password"
            placeholder="Create a strong password"
            showStrengthMeter
            showRequirements="on-focus"
            {...form.register("password")}
            isInvalid={!!form.formState.errors.password}
            errorMessage={form.formState.errors.password?.message}
          />
          <Controller
            control={form.control}
            name="agreeTerms"
            render={({ field, fieldState }) => (
              <FormField isInvalid={!!fieldState.error} errorMessage={fieldState.error?.message}>
                <Checkbox
                  label="I agree to the Terms of Service and Privacy Policy"
                  color="primary"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormField>
            )}
          />
          <Button className="w-full h-11 text-sm font-semibold mt-2" color="primary" type="submit">
            Create Account
          </Button>
        </CardBody>
      </Form>
    </Card>
  );
}`;

const minimalistCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardHeader,
} from "@/components/ui/card/card";
import { Form, useForm } from "@/components/ui/form/form";
import { Input } from "@/components/ui/input/input";
import { Link } from "@/components/ui/link/link";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type FormValues = z.infer<typeof schema>;

export function MinimalistConfirm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Access authorized successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-sm">
      <CardHeader className="p-8 pb-0 flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-zinc-100 text-zinc-850">
          <Icon icon="hugeicons:lock-key-01" className="size-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xl font-bold tracking-tight">Confirm Credentials</h4>
          <p className="text-xs text-zinc-500">
            Please verify your credentials to confirm authorization.
          </p>
        </div>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="p-8 space-y-4">
          <Input
            type="email"
            placeholder="Access Email"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <PasswordInput
            placeholder="Confirm Password"
            showStrengthMeter={false}
            showRequirements="never"
            {...form.register("password")}
            isInvalid={!!form.formState.errors.password}
            errorMessage={form.formState.errors.password?.message}
          />
          <Button className="w-full h-11 text-sm font-semibold" color="primary" variant="flat" type="submit">
            Authorize Access
          </Button>
          <div className="text-center pt-1">
            <Link href="#" variant="muted" size="sm">Cancel and Return</Link>
          </div>
        </CardBody>
      </Form>
    </Card>
  );
}`;

const imageOverlayCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Form, useForm } from "@/components/ui/form/form";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { Link } from "@/components/ui/link/link";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { Separator } from "@/components/ui/separator/separator";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  keepSignedIn: z.boolean().default(false),
});

type FormValues = z.infer<typeof schema>;

export function ImageSplitLogin() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      keepSignedIn: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Successfully logged in!");
  };

  return (
    <Card variant="ghost" className="rounded-none justify-center">
      <CardHeader className="p-12 pb-0 space-y-1">
        <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your workspace.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="p-12 space-y-5">
          <Input
            type="email"
            label="Email Address"
            placeholder="you@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <Label>Password</Label>
              <Link href="#" size="sm">Forgot password?</Link>
            </div>
            <PasswordInput
              placeholder="••••••••"
              showStrengthMeter={false}
              showRequirements="never"
              {...form.register("password")}
              isInvalid={!!form.formState.errors.password}
              errorMessage={form.formState.errors.password?.message}
            />
          </div>
          <Checkbox
            label="Keep me signed in for 30 days"
            color="primary"
            checked={form.watch("keepSignedIn")}
            onCheckedChange={(checked) => form.setValue("keepSignedIn", !!checked)}
          />
          <Button className="w-full h-11 font-semibold" color="primary" type="submit">
            Sign In
          </Button>
          <Separator label="or" />
          <div className="flex gap-3">
            <Button
              className="flex-1 h-11"
              variant="bordered"
              type="button"
              startContent={<Icon icon="logos:google-icon" className="size-4" />}
              onClick={() => toast.info("Connecting to Google...")}
            >
              Google
            </Button>
            <Button
              className="flex-1 h-11"
              variant="bordered"
              type="button"
              startContent={<Icon icon="logos:github-icon" className="size-4" />}
              onClick={() => toast.info("Connecting to GitHub...")}
            >
              GitHub
            </Button>
          </div>
        </CardBody>
      </Form>
    </Card>
  );
}`;

const otpVerificationCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card/card";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/inputOtp/inputOtp";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  code: z.string().length(6, "Verification code must be exactly 6 digits"),
});

type FormValues = z.infer<typeof schema>;

export function OTPVerification() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("OTP verified successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-sm">
      <CardHeader className="p-8 pb-0 flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-50">
          <Icon icon="hugeicons:mail-send-01" className="size-8 text-sky-500" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight">Check your email</h3>
          <p className="text-sm text-zinc-500">
            We sent a 6-digit verification code to your registered email.
          </p>
        </div>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="p-8 flex flex-col items-center gap-6">
          <Controller
            control={form.control}
            name="code"
            render={({ field, fieldState }) => (
              <FormField isInvalid={!!fieldState.error} errorMessage={fieldState.error?.message}>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    allowedType="numeric"
                    value={field.value}
                    onChange={field.onChange}
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
              </FormField>
            )}
          />
          <Button className="w-full h-11 font-semibold" color="primary" type="submit">
            Verify Code
          </Button>
        </CardBody>
      </Form>
    </Card>
  );
}`;

const socialLoginCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card/card";
import { Form, useForm } from "@/components/ui/form/form";
import { Input } from "@/components/ui/input/input";
import { Separator } from "@/components/ui/separator/separator";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof schema>;

export function SocialLoginWithEmail() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Verification link sent to your email!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-sm">
      <CardHeader className="p-8 pb-0 flex flex-col items-center text-center space-y-3">
        <h3 className="text-xl font-bold tracking-tight">Continue to Bloom</h3>
        <p className="text-sm text-zinc-500">Choose your preferred login method</p>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="p-8 space-y-6">
          <div className="space-y-3">
            <Button
              className="w-full h-12 text-sm font-medium"
              variant="bordered"
              type="button"
              startContent={<Icon icon="logos:google-icon" className="size-5" />}
              onClick={() => toast.info("Connecting to Google...")}
            >
              Continue with Google
            </Button>
            <Button
              className="w-full h-12 text-sm font-medium"
              variant="bordered"
              type="button"
              startContent={<Icon icon="logos:github-icon" className="size-5" />}
              onClick={() => toast.info("Connecting to GitHub...")}
            >
              Continue with GitHub
            </Button>
          </div>
          <Separator label="or" />
          <Input
            type="email"
            placeholder="name@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <Button className="w-full h-12 text-sm font-medium" color="primary" type="submit">
            Continue with Email
          </Button>
        </CardBody>
      </Form>
    </Card>
  );
}`;

const passwordResetCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Form, useForm } from "@/components/ui/form/form";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof schema>;

export function PasswordReset() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Password updated successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1.5 p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
        <CardDescription>
          Choose a strong password to protect and secure your account.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-5 p-8 pt-2 pb-6">
          <PasswordInput
            label="New Password"
            placeholder="Enter new password"
            showStrengthMeter
            showRequirements="always"
            {...form.register("password")}
            isInvalid={!!form.formState.errors.password}
            errorMessage={form.formState.errors.password?.message}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm new password"
            showStrengthMeter={false}
            showRequirements="never"
            {...form.register("confirmPassword")}
            isInvalid={!!form.formState.errors.confirmPassword}
            errorMessage={form.formState.errors.confirmPassword?.message}
          />
        </CardBody>
        <CardFooter className="flex flex-col p-8 pt-0">
          <Button className="w-full h-11 font-semibold" color="primary" type="submit">
            Update Password
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const signUpWithStrengthCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "Accepting terms is required" }),
  }),
});

type FormValues = z.infer<typeof schema>;

export function SignUpWithStrength() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      agreeTerms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Sign up successful!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1.5 p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
        <CardDescription>
          Join us to get started with your new workspace.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-5 p-8 pt-2 pb-6">
          <Input
            type="text"
            label="Full Name"
            placeholder="John Doe"
            {...form.register("fullName")}
            isInvalid={!!form.formState.errors.fullName}
            errorMessage={form.formState.errors.fullName?.message}
          />
          <Input
            type="email"
            label="Email Address"
            placeholder="name@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <PasswordInput
            label="Password"
            placeholder="Create password"
            showStrengthMeter
            showRequirements="on-focus"
            {...form.register("password")}
            isInvalid={!!form.formState.errors.password}
            errorMessage={form.formState.errors.password?.message}
          />
          <Controller
            control={form.control}
            name="agreeTerms"
            render={({ field, fieldState }) => (
              <FormField isInvalid={!!fieldState.error} errorMessage={fieldState.error?.message}>
                <Checkbox
                  label="I agree to the Terms & Conditions"
                  color="primary"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="flex flex-col p-8 pt-0">
          <Button className="w-full h-11 font-semibold" color="primary" type="submit">
            Sign Up
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const multiStepSignupCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { Stepper, StepperItem, StepperIndicator, StepperTitle, StepperDescription, StepperSeparator } from "@/components/ui/stepper/stepper";
import { toast } from "@/components/ui/toast/toast";

const stepSchemas = [
  z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  }),
  z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    companyName: z.string().optional(),
  }),
  z.object({
    newsletter: z.boolean().default(false),
  }),
];

export function MultiStepSignup() {
  const [activeStep, setActiveStep] = React.useState(0);
  
  const form = useForm({
    resolver: zodResolver(stepSchemas[activeStep]),
    mode: "onChange",
  });

  const handleNext = async () => {
    const isValid = await form.trigger();
    if (isValid) {
      setActiveStep((s) => Math.min(2, s + 1));
    }
  };

  const onSubmit = (data: any) => {
    toast.success("Registration complete! Welcome aboard.");
  };

  return (
    <Card variant="bordered" className="w-full max-w-xl">
      <CardHeader className="p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Register Account</CardTitle>
        <CardDescription>Setup your credentials and profile details.</CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
        <CardBody className="p-8 space-y-6">
          {/* Stepper details */}
          <div className="min-h-[200px]">
            {activeStep === 0 && (
              <div className="space-y-4">
                <Input label="Email" placeholder="you@company.com" {...form.register("email")} />
                <PasswordInput label="Password" placeholder="••••••••" {...form.register("password")} />
              </div>
            )}
            {/* Step 2 and 3 code... */}
          </div>
        </CardBody>
      </Form>
    </Card>
  );
}`;

// --- RUNTIME LIVE PREVIEWS ---

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

const classicCardSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean(),
});

type ClassicCardFormValues = z.infer<typeof classicCardSchema>;

function ClassicCardPreview() {
  const form = useForm<ClassicCardFormValues>({
    resolver: zodResolver(classicCardSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (_data: ClassicCardFormValues) => {
    toast.success("Successfully logged in!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1.5 p-6 sm:p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
        <CardDescription>
          Enter your credentials below to access your account dashboard.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-5 p-6 sm:p-8 pt-2 pb-6">
          <Input
            type="email"
            label="Email Address"
            placeholder="name@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
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
              {...form.register("password")}
              isInvalid={!!form.formState.errors.password}
              errorMessage={form.formState.errors.password?.message}
            />
          </div>
          <Checkbox
            label="Remember me on this device"
            color="primary"
            checked={form.watch("rememberMe")}
            onCheckedChange={(checked) =>
              form.setValue("rememberMe", !!checked)
            }
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-4 p-6 sm:p-8 pt-0">
          <Button
            className="w-full h-11 text-sm font-semibold"
            color="primary"
            type="submit"
          >
            Sign In
          </Button>
          <Separator label="Or continue with" />
          <Button
            className="w-full h-11 text-sm font-medium"
            variant="bordered"
            type="button"
            startContent={<Icon icon="logos:google-icon" className="size-4" />}
            onClick={() => toast.info("Redirecting to Google...")}
          >
            Continue with Google
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const splitScreenSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms to continue",
  }),
});

type SplitScreenFormValues = z.infer<typeof splitScreenSchema>;

function SplitScreenPreview() {
  const simulatedDevice = React.useContext(DevicePreviewContext);
  const isMobileOrTablet =
    simulatedDevice === "mobile" || simulatedDevice === "tablet";

  const form = useForm<SplitScreenFormValues>({
    resolver: zodResolver(splitScreenSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      agreeTerms: false,
    },
  });

  const onSubmit = (_data: SplitScreenFormValues) => {
    toast.success("Account created successfully!");
  };

  return (
    <div
      className={cn(
        "grid w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 min-h-[500px]",
        isMobileOrTablet ? "grid-cols-1" : "grid md:grid-cols-2",
      )}
    >
      <div
        className={cn(
          "relative flex-col justify-between p-12 text-white bg-zinc-950",
          isMobileOrTablet ? "hidden" : "hidden md:flex",
        )}
      >
        <div className="relative z-10 flex items-center gap-2.5 font-bold text-lg tracking-tight">
          <Icon icon="lucide:command" className="size-6 text-zinc-400" />
          <span>Bloom UI</span>
        </div>
        <div className="relative z-10 space-y-6">
          <blockquote className="text-xl font-medium leading-relaxed italic text-zinc-100">
            &ldquo;This design system saved us hundreds of UI styling hours,
            letting our engineers focus on shipping functionality.&rdquo;
          </blockquote>
          <div>
            <span className="block font-bold text-base">Guilherme Bus</span>
            <span className="block text-xs text-zinc-400">
              Lead Frontend Engineer
            </span>
          </div>
        </div>
      </div>
      <Card variant="ghost" className="rounded-none">
        <CardHeader className="p-6 sm:p-8 md:p-12 pb-0 space-y-2">
          <h4 className="text-2xl font-bold tracking-tight">Get Started</h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Create your free account and explore the platform today.
          </p>
        </CardHeader>
        <Form form={form} onSubmit={onSubmit}>
          <CardBody className="p-6 sm:p-8 md:p-12 space-y-5">
            <Input
              type="text"
              label="Full Name"
              placeholder="John Doe"
              {...form.register("fullName")}
              isInvalid={!!form.formState.errors.fullName}
              errorMessage={form.formState.errors.fullName?.message}
            />
            <Input
              type="email"
              label="Email Address"
              placeholder="john@company.com"
              {...form.register("email")}
              isInvalid={!!form.formState.errors.email}
              errorMessage={form.formState.errors.email?.message}
            />
            <PasswordInput
              label="Password"
              placeholder="Create a strong password"
              showStrengthMeter
              showRequirements="on-focus"
              {...form.register("password")}
              isInvalid={!!form.formState.errors.password}
              errorMessage={form.formState.errors.password?.message}
            />
            <Controller
              control={form.control}
              name="agreeTerms"
              render={({ field, fieldState }) => (
                <FormField
                  isInvalid={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                >
                  <Checkbox
                    label="I agree to the Terms of Service and Privacy Policy"
                    color="primary"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormField>
              )}
            />
            <Button
              className="w-full h-11 text-sm font-semibold mt-2"
              color="primary"
              type="submit"
            >
              Create Account
            </Button>
          </CardBody>
        </Form>
      </Card>
    </div>
  );
}

const minimalistSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type MinimalistFormValues = z.infer<typeof minimalistSchema>;

function MinimalistPreview() {
  const form = useForm<MinimalistFormValues>({
    resolver: zodResolver(minimalistSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    toast.success("Access authorized successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-sm">
      <CardHeader className="p-6 sm:p-8 pb-0 flex flex-col items-center text-center space-y-4">
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
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="p-6 sm:p-8 space-y-4">
          <Input
            type="email"
            placeholder="Access Email"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <PasswordInput
            placeholder="Confirm Password"
            showStrengthMeter={false}
            showRequirements="never"
            {...form.register("password")}
            isInvalid={!!form.formState.errors.password}
            errorMessage={form.formState.errors.password?.message}
          />
          <Button
            className="w-full h-11 text-sm font-semibold"
            color="primary"
            variant="flat"
            type="submit"
          >
            Authorize Access
          </Button>
          <div className="text-center pt-1">
            <Link href="#" variant="muted" size="sm">
              Cancel and Return
            </Link>
          </div>
        </CardBody>
      </Form>
    </Card>
  );
}

const imageOverlaySchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  keepSignedIn: z.boolean(),
});

type ImageOverlayFormValues = z.infer<typeof imageOverlaySchema>;

function ImageOverlayPreview() {
  const simulatedDevice = React.useContext(DevicePreviewContext);
  const isMobileOrTablet =
    simulatedDevice === "mobile" || simulatedDevice === "tablet";

  const form = useForm<ImageOverlayFormValues>({
    resolver: zodResolver(imageOverlaySchema),
    defaultValues: {
      email: "",
      password: "",
      keepSignedIn: false,
    },
  });

  const onSubmit = (_data: ImageOverlayFormValues) => {
    toast.success("Successfully logged in!");
  };

  return (
    <div
      className={cn(
        "grid rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 min-h-[580px] w-full max-w-4xl mx-auto",
        isMobileOrTablet ? "grid-cols-1" : "grid md:grid-cols-2",
      )}
    >
      <div
        className={cn(
          "relative",
          isMobileOrTablet ? "hidden" : "hidden md:block",
        )}
      >
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
        <CardHeader className="p-6 sm:p-8 md:p-12 pb-0 space-y-1">
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>
            Enter your credentials to access your workspace.
          </CardDescription>
        </CardHeader>
        <Form form={form} onSubmit={onSubmit}>
          <CardBody className="p-6 sm:p-8 md:p-12 space-y-5">
            <Input
              type="email"
              label="Email Address"
              placeholder="you@company.com"
              {...form.register("email")}
              isInvalid={!!form.formState.errors.email}
              errorMessage={form.formState.errors.email?.message}
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
                {...form.register("password")}
                isInvalid={!!form.formState.errors.password}
                errorMessage={form.formState.errors.password?.message}
              />
            </div>
            <Checkbox
              label="Keep me signed in for 30 days"
              color="primary"
              checked={form.watch("keepSignedIn")}
              onCheckedChange={(checked) =>
                form.setValue("keepSignedIn", !!checked)
              }
            />
            <Button
              className="w-full h-11 font-semibold"
              color="primary"
              type="submit"
            >
              Sign In
            </Button>
            <Separator label="or" />
            <div className="flex gap-3">
              <Button
                className="flex-1 h-11"
                variant="bordered"
                type="button"
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
                type="button"
                startContent={
                  <Icon icon="logos:github-icon" className="size-4" />
                }
                onClick={() => toast.info("Connecting to GitHub...")}
              >
                GitHub
              </Button>
            </div>
          </CardBody>
        </Form>
        <CardFooter className="p-6 sm:p-8 md:p-12 pt-0 justify-center">
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

const otpVerificationSchema = z.object({
  code: z.string().length(6, "Verification code must be exactly 6 digits"),
});

type OTPVerificationFormValues = z.infer<typeof otpVerificationSchema>;

function OTPVerificationPreview() {
  const form = useForm<OTPVerificationFormValues>({
    resolver: zodResolver(otpVerificationSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = () => {
    toast.success("OTP verified successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-sm">
      <CardHeader className="p-6 sm:p-8 pb-0 flex flex-col items-center text-center space-y-4">
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
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="p-6 sm:p-8 flex flex-col items-center gap-6">
          <Controller
            control={form.control}
            name="code"
            render={({ field, fieldState }) => (
              <FormField
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
              >
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    allowedType="numeric"
                    value={field.value}
                    onChange={field.onChange}
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
              </FormField>
            )}
          />
          <Button
            className="w-full h-11 font-semibold"
            color="primary"
            type="submit"
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
      </Form>
    </Card>
  );
}

const socialLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type SocialLoginFormValues = z.infer<typeof socialLoginSchema>;

function SocialLoginPreview() {
  const form = useForm<SocialLoginFormValues>({
    resolver: zodResolver(socialLoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = () => {
    toast.success("Verification link sent to your email!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-sm">
      <CardHeader className="p-6 sm:p-8 pb-0 flex flex-col items-center text-center space-y-3">
        <div className="relative w-16 h-16 mx-auto rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
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
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="p-6 sm:p-8 space-y-8">
          <div className="space-y-3">
            <Button
              className="w-full h-12 text-sm font-medium"
              variant="bordered"
              type="button"
              startContent={
                <Icon icon="logos:google-icon" className="size-5" />
              }
              onClick={() => toast.info("Connecting to Google...")}
            >
              Continue with Google
            </Button>
            <Button
              className="w-full h-12 text-sm font-medium"
              variant="bordered"
              type="button"
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
              type="button"
              startContent={
                <Icon icon="logos:microsoft-icon" className="size-5" />
              }
              onClick={() => toast.info("Connecting to Microsoft...")}
            >
              Continue with Microsoft
            </Button>
          </div>
          <Separator label="or" />
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="name@company.com"
              {...form.register("email")}
              isInvalid={!!form.formState.errors.email}
              errorMessage={form.formState.errors.email?.message}
            />
            <Button
              className="w-full h-12 text-sm font-medium"
              color="primary"
              type="submit"
            >
              Continue with Email
            </Button>
          </div>
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
      </Form>
    </Card>
  );
}

const passwordResetSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordResetFormValues = z.infer<typeof passwordResetSchema>;

function PasswordResetPreview() {
  const form = useForm<PasswordResetFormValues>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = () => {
    toast.success("Password updated successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1.5 p-6 sm:p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
        <CardDescription>
          Choose a strong password to protect and secure your account.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-5 p-6 sm:p-8 pt-2 pb-6">
          <PasswordInput
            label="New Password"
            placeholder="Enter new password"
            showStrengthMeter
            showRequirements="always"
            {...form.register("password")}
            isInvalid={!!form.formState.errors.password}
            errorMessage={form.formState.errors.password?.message}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm new password"
            showStrengthMeter={false}
            showRequirements="never"
            {...form.register("confirmPassword")}
            isInvalid={!!form.formState.errors.confirmPassword}
            errorMessage={form.formState.errors.confirmPassword?.message}
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-4 p-6 sm:p-8 pt-0">
          <Button
            className="w-full h-11 font-semibold"
            color="primary"
            type="submit"
          >
            Update Password
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const signUpWithStrengthSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "Accepting terms is required",
  }),
});

type SignUpWithStrengthFormValues = z.infer<typeof signUpWithStrengthSchema>;

function SignUpWithStrengthPreview() {
  const form = useForm<SignUpWithStrengthFormValues>({
    resolver: zodResolver(signUpWithStrengthSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      agreeTerms: false,
    },
  });

  const onSubmit = (_data: SignUpWithStrengthFormValues) => {
    toast.success("Sign up successful!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1.5 p-6 sm:p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
        <CardDescription>
          Join us to get started with your new workspace.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-5 p-6 sm:p-8 pt-2 pb-6">
          <Input
            type="text"
            label="Full Name"
            placeholder="John Doe"
            {...form.register("fullName")}
            isInvalid={!!form.formState.errors.fullName}
            errorMessage={form.formState.errors.fullName?.message}
          />
          <Input
            type="email"
            label="Email Address"
            placeholder="name@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <PasswordInput
            label="Password"
            placeholder="Create password"
            showStrengthMeter
            showRequirements="on-focus"
            {...form.register("password")}
            isInvalid={!!form.formState.errors.password}
            errorMessage={form.formState.errors.password?.message}
          />
          <Controller
            control={form.control}
            name="agreeTerms"
            render={({ field, fieldState }) => (
              <FormField
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
              >
                <Checkbox
                  label="I agree to the Terms & Conditions"
                  color="primary"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-4 p-6 sm:p-8 pt-0">
          <Button
            className="w-full h-11 font-semibold"
            color="primary"
            type="submit"
          >
            Sign Up
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const multiStepSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().optional(),
  newsletter: z.boolean(),
});

type MultiStepFormValues = z.infer<typeof multiStepSchema>;

function MultiStepSignupPreview() {
  const simulatedDevice = React.useContext(DevicePreviewContext);
  const isMobile = simulatedDevice === "mobile";
  const isTablet = simulatedDevice === "tablet";
  const isMobileOrTablet = isMobile || isTablet;

  const [activeStep, setActiveStep] = React.useState(0);

  const form = useForm<MultiStepFormValues>({
    resolver: zodResolver(multiStepSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      companyName: "",
      newsletter: false,
    },
    mode: "onChange",
  });

  const handleNext = async () => {
    let fieldsToValidate: (
      | "email"
      | "password"
      | "fullName"
      | "companyName"
      | "newsletter"
    )[] = [];
    if (activeStep === 0) {
      fieldsToValidate = ["email", "password"];
    } else if (activeStep === 1) {
      fieldsToValidate = ["fullName"];
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setActiveStep((s) => Math.min(2, s + 1));
    }
  };

  const onSubmit = (_data: MultiStepFormValues) => {
    toast.success("Registration complete! Welcome aboard.");
  };

  return (
    <Card variant="bordered" className="w-full max-w-xl">
      <CardHeader className="space-y-1.5 p-6 sm:p-8 pb-4">
        <CardTitle className="text-2xl font-bold">Register Account</CardTitle>
        <CardDescription>
          Complete the steps below to setup your new account.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="p-6 sm:p-8 pt-2 pb-6 space-y-8">
          <Stepper activeStep={activeStep} size="sm">
            <StepperItem step={0}>
              <StepperIndicator step={0} />
              <div>
                <StepperTitle
                  className={cn(isMobile ? "hidden" : "hidden sm:block")}
                >
                  Account
                </StepperTitle>
                <StepperDescription
                  className={cn(
                    isMobileOrTablet ? "hidden" : "hidden md:block",
                  )}
                >
                  Credentials
                </StepperDescription>
              </div>
            </StepperItem>
            <StepperSeparator step={0} />
            <StepperItem step={1}>
              <StepperIndicator step={1} />
              <div>
                <StepperTitle
                  className={cn(isMobile ? "hidden" : "hidden sm:block")}
                >
                  Profile
                </StepperTitle>
                <StepperDescription
                  className={cn(
                    isMobileOrTablet ? "hidden" : "hidden md:block",
                  )}
                >
                  Personal info
                </StepperDescription>
              </div>
            </StepperItem>
            <StepperSeparator step={1} />
            <StepperItem step={2}>
              <StepperIndicator step={2} />
              <div>
                <StepperTitle
                  className={cn(isMobile ? "hidden" : "hidden sm:block")}
                >
                  Finish
                </StepperTitle>
                <StepperDescription
                  className={cn(
                    isMobileOrTablet ? "hidden" : "hidden md:block",
                  )}
                >
                  Confirmation
                </StepperDescription>
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
                  {...form.register("email")}
                  isInvalid={!!form.formState.errors.email}
                  errorMessage={form.formState.errors.email?.message as string}
                />
                <PasswordInput
                  label="Password"
                  placeholder="Create password"
                  showStrengthMeter
                  showRequirements="on-focus"
                  {...form.register("password")}
                  isInvalid={!!form.formState.errors.password}
                  errorMessage={
                    form.formState.errors.password?.message as string
                  }
                />
              </div>
            )}

            {activeStep === 1 && (
              <div className="space-y-4">
                <Input
                  type="text"
                  label="Full Name"
                  placeholder="John Doe"
                  {...form.register("fullName")}
                  isInvalid={!!form.formState.errors.fullName}
                  errorMessage={
                    form.formState.errors.fullName?.message as string
                  }
                />
                <Input
                  type="text"
                  label="Company Name"
                  placeholder="Acme Inc."
                  {...form.register("companyName")}
                />
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
                <Controller
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <Checkbox
                      label="Subscribe to newsletter updates"
                      color="primary"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </div>
            )}
          </div>
        </CardBody>
        <CardFooter className="flex justify-between p-6 sm:p-8 pt-0">
          <Button
            variant="flat"
            type="button"
            isDisabled={activeStep === 0}
            onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
          >
            Back
          </Button>
          {activeStep < 2 ? (
            <Button color="primary" type="button" onClick={handleNext}>
              Continue
            </Button>
          ) : (
            <Button color="primary" type="submit">
              Complete Signup
            </Button>
          )}
        </CardFooter>
      </Form>
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
          using Bloom&apos;s component system and validated with Zod.
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
