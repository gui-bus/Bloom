"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import * as React from "react";
import * as z from "zod";
import { DocsComponent } from "@/components/core/docsComponent";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alertDialog/alertDialog";
import { Badge } from "@/components/ui/badge/badge";
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
import { ColorPicker } from "@/components/ui/colorPicker/colorPicker";
import { Combobox } from "@/components/ui/combobox/combobox";
import { DatePicker } from "@/components/ui/datePicker/datePicker";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/dialog";
import { FileInput } from "@/components/ui/fileInput/fileInput";
import { FileUpload } from "@/components/ui/fileUpload/fileUpload";
import { Controller, Form, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radioGroup/radioGroup";
import { Rating } from "@/components/ui/rating/rating";
import { Select } from "@/components/ui/select/select";
import { SignatureInput } from "@/components/ui/signatureInput/signatureInput";
import { Slider } from "@/components/ui/slider/slider";
import { Switch } from "@/components/ui/switch/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/table";
import { TagInput } from "@/components/ui/tagInput/tagInput";
import { Textarea } from "@/components/ui/textarea/textarea";
import { TimePicker } from "@/components/ui/timePicker/timePicker";
import { toast } from "@/components/ui/toast/toast";

// --- CODE STRING CONSTANTS ---

const profileSettingsCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Form, useForm } from "@/components/ui/form/form";
import { Input } from "@/components/ui/input/input";
import { PasswordInput } from "@/components/ui/passwordInput/passwordInput";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters").or(z.literal("")),
  receiveUpdates: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

export function ProfileSettingsForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@company.com",
      password: "",
      receiveUpdates: true,
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Profile saved successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Profile Settings</CardTitle>
        <CardDescription>
          Update your public profile details and password settings.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-4 p-6 sm:p-8 pt-2 pb-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="John"
              {...form.register("firstName")}
              isInvalid={!!form.formState.errors.firstName}
              errorMessage={form.formState.errors.firstName?.message}
            />
            <Input
              label="Last Name"
              placeholder="Doe"
              {...form.register("lastName")}
              isInvalid={!!form.formState.errors.lastName}
              errorMessage={form.formState.errors.lastName?.message}
            />
          </div>
          <Input
            type="email"
            label="Email Address"
            placeholder="john.doe@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <PasswordInput
            label="New Password"
            placeholder="••••••••"
            showStrengthMeter={false}
            showRequirements="never"
            {...form.register("password")}
            isInvalid={!!form.formState.errors.password}
            errorMessage={form.formState.errors.password?.message}
          />
          <Checkbox
            label="Receive product updates and marketing emails"
            color="primary"
            checked={form.watch("receiveUpdates")}
            onCheckedChange={(checked) => form.setValue("receiveUpdates", !!checked)}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button color="primary" type="submit">
            Save Changes
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const supportTicketCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { Select } from "@/components/ui/select/select";
import { Textarea } from "@/components/ui/textarea/textarea";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  category: z.string({ required_error: "Please select a category" }).min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const categoryOptions = [
  { value: "billing", label: "Billing & Invoices" },
  { value: "technical", label: "Technical Issue" },
  { value: "account", label: "Account Settings" },
  { value: "other", label: "General Feedback" },
];

export function SupportTicketForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Support ticket submitted successfully!");
    form.reset();
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">New Ticket</CardTitle>
        <CardDescription>
          Submit a technical issue or billing support request.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-4 p-6 sm:p-8 pt-2 pb-6">
          <Input
            label="Your Name"
            placeholder="Jane Doe"
            {...form.register("name")}
            isInvalid={!!form.formState.errors.name}
            errorMessage={form.formState.errors.name?.message}
          />
          <Input
            type="email"
            label="Email Address"
            placeholder="jane@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <Controller
            control={form.control}
            name="category"
            render={({ field, fieldState }) => (
              <FormField
                label="Topic Category"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <Select
                  options={categoryOptions}
                  placeholder="Choose a category"
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormField>
            )}
          />
          <Textarea
            label="Describe Your Issue"
            placeholder="Please detail your problem..."
            rows={4}
            {...form.register("message")}
            isInvalid={!!form.formState.errors.message}
            errorMessage={form.formState.errors.message?.message}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Clear
          </Button>
          <Button color="primary" type="submit">
            Submit Ticket
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const systemPreferencesCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Switch } from "@/components/ui/switch/switch";
import { Slider } from "@/components/ui/slider/slider";
import { Rating } from "@/components/ui/rating/rating";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  pushAlerts: z.boolean(),
  autoUpdates: z.boolean(),
  themeContrast: z.array(z.number()),
  feedbackRating: z.number().min(1, "Please rate your experience"),
});

type FormValues = z.infer<typeof schema>;

export function SystemPreferencesForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      pushAlerts: true,
      autoUpdates: false,
      themeContrast: [50],
      feedbackRating: 4,
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Preferences updated successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Preferences</CardTitle>
        <CardDescription>
          Configure notifications, contrast scales, and system feedback.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-6 p-6 sm:p-8 pt-2 pb-6">
          <div className="space-y-4">
            <Controller
              control={form.control}
              name="pushAlerts"
              render={({ field }) => (
                <Switch
                  label="Push Notifications"
                  description="Receive instant desktop alerts"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <Controller
              control={form.control}
              name="autoUpdates"
              render={({ field }) => (
                <Switch
                  label="Automatic Updates"
                  description="Keep the system features up-to-date"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
          </div>

          <Controller
            control={form.control}
            name="themeContrast"
            render={({ field }) => (
              <FormField label={\`Theme Contrast (\${field.value[0]}%)\`}>
                <Slider
                  min={10}
                  max={100}
                  step={5}
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormField>
            )}
          />

          <Controller
            control={form.control}
            name="feedbackRating"
            render={({ field, fieldState }) => (
              <FormField
                label="System Feedback Rating"
                description="Rate your current system navigation experience"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
              >
                <div className="pt-1">
                  <Rating
                    value={field.value}
                    onValueChange={field.onChange}
                    max={5}
                  />
                </div>
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Restore Defaults
          </Button>
          <Button color="primary" type="submit">
            Save Settings
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const projectTaskCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { Combobox } from "@/components/ui/combobox/combobox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radioGroup/radioGroup";
import { TagInput } from "@/components/ui/tagInput/tagInput";
import { Label } from "@/components/ui/label/label";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  title: z.string().min(3, "Task title must be at least 3 characters"),
  projectType: z.string().min(1, "Please select a project type"),
  priority: z.enum(["low", "medium", high"]),
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
});

type FormValues = z.infer<typeof schema>;

const projectOptions = [
  { value: "marketing", label: "Marketing Campaign" },
  { value: "engineering", label: "Engineering Sprint" },
  { value: "design", label: "UX Redesign" },
  { value: "finance", label: "Q3 Audit" },
];

export function ProjectTaskForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      projectType: "",
      priority: "medium",
      tags: ["Sprint"],
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Project task created successfully!");
    form.reset();
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">New Project Task</CardTitle>
        <CardDescription>
          Organize priority tasks and assign tags for index searches.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-4 p-6 sm:p-8 pt-2 pb-6">
          <Input
            label="Task Title"
            placeholder="Optimize checkout conversions"
            {...form.register("title")}
            isInvalid={!!form.formState.errors.title}
            errorMessage={form.formState.errors.title?.message}
          />

          <Controller
            control={form.control}
            name="projectType"
            render={({ field, fieldState }) => (
              <FormField
                label="Assign to Project"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <Combobox
                  options={projectOptions}
                  placeholder="Select a project"
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormField>
            )}
          />

          <Controller
            control={form.control}
            name="priority"
            render={({ field }) => (
              <RadioGroup
                label="Priority Level"
                value={field.value}
                onValueChange={field.onChange}
                className="space-y-1"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="low" id="pri-low" />
                  <Label htmlFor="pri-low" className="cursor-pointer">Low Priority</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="medium" id="pri-medium" />
                  <Label htmlFor="pri-medium" className="cursor-pointer">Medium Priority</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="high" id="pri-high" />
                  <Label htmlFor="pri-high" className="cursor-pointer">High Priority</Label>
                </div>
              </RadioGroup>
            )}
          />

          <Controller
            control={form.control}
            name="tags"
            render={({ field, fieldState }) => (
              <FormField
                label="Task Tags"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
              >
                <TagInput
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Add search tags..."
                />
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button color="primary" type="submit">
            Create Task
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const jobApplicationCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { FileInput } from "@/components/ui/fileInput/fileInput";
import { FileUpload } from "@/components/ui/fileUpload/fileUpload";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  resume: z.any().refine((val) => val && val.length > 0, "Resume file is required"),
  portfolioFiles: z.any().optional(),
});

type FormValues = z.infer<typeof schema>;

export function JobApplicationForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      resume: undefined,
      portfolioFiles: undefined,
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Job application submitted successfully!");
    form.reset();
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Job Application</CardTitle>
        <CardDescription>
          Submit your personal details, resume file, and portfolio attachments.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-5 p-6 sm:p-8 pt-2 pb-6">
          <Input
            label="Candidate Full Name"
            placeholder="Jane Doe"
            {...form.register("fullName")}
            isInvalid={!!form.formState.errors.fullName}
            errorMessage={form.formState.errors.fullName?.message}
          />

          <Controller
            control={form.control}
            name="resume"
            render={({ field, fieldState }) => (
              <FormField
                label="Resume Attachment (PDF)"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <FileInput
                  placeholder="Select resume file"
                  onFilesSelected={(files) => field.onChange(files)}
                />
              </FormField>
            )}
          />

          <Controller
            control={form.control}
            name="portfolioFiles"
            render={({ field }) => (
              <FormField
                label="Portfolio / Supporting Media"
                description="Upload images or screenshots of your work"
              >
                <FileUpload
                  maxSizeMB={8}
                  simulateProgress
                  onFilesSelected={(files) => field.onChange(files)}
                />
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button color="primary" type="submit">
            Apply Now
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const appointmentSchedulerCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { DatePicker } from "@/components/ui/datePicker/datePicker";
import { TimePicker } from "@/components/ui/timePicker/timePicker";
import { ColorPicker } from "@/components/ui/colorPicker/colorPicker";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  date: z.date({ required_error: "Please select an appointment date" }),
  time: z.string().min(1, "Please select an appointment hour"),
  labelColor: z.string(),
});

type FormValues = z.infer<typeof schema>;

export function AppointmentSchedulerForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: undefined,
      time: "09:00 AM",
      labelColor: "#0ea5e9",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Appointment scheduled successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Schedule Event</CardTitle>
        <CardDescription>
          Pick a date, choose a meeting start time, and color-code the event.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-4 p-6 sm:p-8 pt-2 pb-6">
          <Controller
            control={form.control}
            name="date"
            render={({ field, fieldState }) => (
              <FormField
                label="Appointment Date"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormField>
            )}
          />

          <Controller
            control={form.control}
            name="time"
            render={({ field, fieldState }) => (
              <FormField
                label="Preferred Hour"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <TimePicker
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormField>
            )}
          />

          <Controller
            control={form.control}
            name="labelColor"
            render={({ field }) => (
              <FormField label="Calendar Label Tag Color">
                <div className="flex gap-4 items-center">
                  <ColorPicker
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                  <span className="text-sm font-mono text-zinc-500">{field.value}</span>
                </div>
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button color="primary" type="submit">
            Schedule Event
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const termsSignatureCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { SignatureInput } from "@/components/ui/signatureInput/signatureInput";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  agreeTerms: z.boolean().refine((val) => val === true, "You must accept the terms of service"),
  agreePrivacy: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
  signature: z.string().min(1, "Digital signature is required to confirm identity"),
});

type FormValues = z.infer<typeof schema>;

export function TermsSignatureForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      agreeTerms: false,
      agreePrivacy: false,
      signature: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Document signed and verified successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Verification Pad</CardTitle>
        <CardDescription>
          Confirm your legal options and draw your signature below.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-5 p-6 sm:p-8 pt-2 pb-6">
          <div className="space-y-3">
            <Controller
              control={form.control}
              name="agreeTerms"
              render={({ field, fieldState }) => (
                <FormField
                  isInvalid={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                >
                  <Checkbox
                    label="I accept the standard terms of service"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormField>
              )}
            />

            <Controller
              control={form.control}
              name="agreePrivacy"
              render={({ field, fieldState }) => (
                <FormField
                  isInvalid={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                >
                  <Checkbox
                    label="I accept the local data privacy policies"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormField>
              )}
            />
          </div>

          <Controller
            control={form.control}
            name="signature"
            render={({ field, fieldState }) => (
              <FormField
                label="Confirm Identity Signature"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <SignatureInput
                  placeholder="Draw signature here..."
                  onChange={field.onChange}
                />
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset Pad
          </Button>
          <Button color="primary" type="submit">
            Confirm Signature
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const customerBillingCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button/button";
import {
  Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card/card";
import { Form, useForm } from "@/components/ui/form/form";
import { Input } from "@/components/ui/input/input";
import { toast } from "@/components/ui/toast/toast";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  cardNumber: z.string().min(19, "Card number must be 16 digits (with spaces)"),
  expiryDate: z.string().min(5, "Expiration must be MM/YY"),
  cvv: z.string().min(3, "CVV must be 3 or 4 digits"),
});

type FormValues = z.infer<typeof schema>;

export function CustomerBillingForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Billing details updated successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Billing Details</CardTitle>
        <CardDescription>
          Fill in credit card details using automatic input masks.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-4 p-6 sm:p-8 pt-2 pb-6">
          <Input
            label="Cardholder Full Name"
            placeholder="Jane Doe"
            {...form.register("fullName")}
            isInvalid={!!form.formState.errors.fullName}
            errorMessage={form.formState.errors.fullName?.message}
          />

          <Input
            label="Card Number"
            placeholder="0000 0000 0000 0000"
            mask="CreditCard"
            {...form.register("cardNumber")}
            isInvalid={!!form.formState.errors.cardNumber}
            errorMessage={form.formState.errors.cardNumber?.message}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Expiry Date"
              placeholder="MM/YY"
              mask="Custom"
              customMaskPattern="00/00"
              {...form.register("expiryDate")}
              isInvalid={!!form.formState.errors.expiryDate}
              errorMessage={form.formState.errors.expiryDate?.message}
            />
            <Input
              label="CVV"
              placeholder="000"
              mask="Custom"
              customMaskPattern="000"
              {...form.register("cvv")}
              isInvalid={!!form.formState.errors.cvv}
              errorMessage={form.formState.errors.cvv?.message}
            />
          </div>
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button color="primary" type="submit">
            Update Billing
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}`;

const crudManagerCode = `import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import { Label } from "@/components/ui/label/label";
import { Input } from "@/components/ui/input/input";
import { Switch } from "@/components/ui/switch/switch";
import { Form, Controller, useForm } from "@/components/ui/form/form";
import { toast } from "@/components/ui/toast/toast";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter,
} from "@/components/ui/dialog/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alertDialog/alertDialog";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table/table";

interface CrudMember {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

const initialMembers: CrudMember[] = [
  { id: "1", name: "Guilherme Bus", email: "gui@bloom.dev", role: "Lead Engineer", status: "Active" },
  { id: "2", name: "Sarah Mendes", email: "sarah@company.com", role: "Product Manager", status: "Active" },
  { id: "3", name: "Lucas Rocha", email: "lucas@company.com", role: "UX Designer", status: "Inactive" },
];

const memberSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(2, "Role description must be at least 2 characters"),
  status: z.boolean(),
});

type MemberFormValues = z.infer<typeof memberSchema>;

export function MemberCrudManager() {
  const [members, setMembers] = React.useState<CrudMember[]>(initialMembers);
  const [selectedMember, setSelectedMember] = React.useState<CrudMember | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);

  const form = useForm<MemberFormValues>({
    resolver: zodResolver(memberSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      status: true,
    },
  });

  const openCreateDialog = () => {
    setSelectedMember(null);
    form.reset({
      name: "",
      email: "",
      role: "",
      status: true,
    });
    setIsDialogOpen(true);
  };

  const openEditDialog = (member: CrudMember) => {
    setSelectedMember(member);
    form.reset({
      name: member.name,
      email: member.email,
      role: member.role,
      status: member.status === "Active",
    });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (member: CrudMember) => {
    setSelectedMember(member);
    setIsDeleteOpen(true);
  };

  const handleSave = (data: MemberFormValues) => {
    const statusVal = data.status ? "Active" : "Inactive";
    if (selectedMember) {
      setMembers(
        members.map((m) =>
          m.id === selectedMember.id
            ? { ...m, name: data.name, email: data.email, role: data.role, status: statusVal }
            : m
        )
      );
      toast.success("Member updated successfully!");
    } else {
      const newMember: CrudMember = {
        id: Math.random().toString(36).substr(2, 9),
        name: data.name,
        email: data.email,
        role: data.role,
        status: statusVal,
      };
      setMembers([...members, newMember]);
      toast.success("Member added successfully!");
    }
    setIsDialogOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (selectedMember) {
      setMembers(members.filter((m) => m.id !== selectedMember.id));
      toast.success("Member deleted successfully!");
      setIsDeleteOpen(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* ... Table and CRUD structures ... */}
    </div>
  );
}`;

// --- RUNTIME LIVE PREVIEWS ---

const categoryOptions = [
  { value: "billing", label: "Billing & Invoices" },
  { value: "technical", label: "Technical Issue" },
  { value: "account", label: "Account Settings" },
  { value: "other", label: "General Feedback" },
];

const projectOptions = [
  { value: "marketing", label: "Marketing Campaign" },
  { value: "engineering", label: "Engineering Sprint" },
  { value: "design", label: "UX Redesign" },
  { value: "finance", label: "Q3 Audit" },
];

interface CrudMember {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

const initialMembers: CrudMember[] = [
  {
    id: "1",
    name: "Guilherme Bus",
    email: "gui@bloom.dev",
    role: "Lead Engineer",
    status: "Active",
  },
  {
    id: "2",
    name: "Sarah Mendes",
    email: "sarah@company.com",
    role: "Product Manager",
    status: "Active",
  },
  {
    id: "3",
    name: "Lucas Rocha",
    email: "lucas@company.com",
    role: "UX Designer",
    status: "Inactive",
  },
];

const profileSettingsSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .or(z.literal("")),
  receiveUpdates: z.boolean(),
});

type ProfileSettingsFormValues = z.infer<typeof profileSettingsSchema>;

function ProfileSettingsPreview() {
  const form = useForm<ProfileSettingsFormValues>({
    resolver: zodResolver(profileSettingsSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@company.com",
      password: "",
      receiveUpdates: true,
    },
  });

  const onSubmit = (_data: ProfileSettingsFormValues) => {
    toast.success("Profile saved successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Profile Settings</CardTitle>
        <CardDescription>
          Update your public profile details and password settings.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-4 p-6 sm:p-8 pt-2 pb-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="John"
              {...form.register("firstName")}
              isInvalid={!!form.formState.errors.firstName}
              errorMessage={form.formState.errors.firstName?.message}
            />
            <Input
              label="Last Name"
              placeholder="Doe"
              {...form.register("lastName")}
              isInvalid={!!form.formState.errors.lastName}
              errorMessage={form.formState.errors.lastName?.message}
            />
          </div>
          <Input
            type="email"
            label="Email Address"
            placeholder="john.doe@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <PasswordInput
            label="New Password"
            placeholder="••••••••"
            showStrengthMeter={false}
            showRequirements="never"
            {...form.register("password")}
            isInvalid={!!form.formState.errors.password}
            errorMessage={form.formState.errors.password?.message}
          />
          <Checkbox
            label="Receive product updates and marketing emails"
            color="primary"
            checked={form.watch("receiveUpdates")}
            onCheckedChange={(checked) =>
              form.setValue("receiveUpdates", !!checked)
            }
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button color="primary" type="submit">
            Save Changes
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const supportTicketSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type SupportTicketFormValues = z.infer<typeof supportTicketSchema>;

function SupportTicketPreview() {
  const form = useForm<SupportTicketFormValues>({
    resolver: zodResolver(supportTicketSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      message: "",
    },
  });

  const onSubmit = (_data: SupportTicketFormValues) => {
    toast.success("Support ticket submitted successfully!");
    form.reset();
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">New Ticket</CardTitle>
        <CardDescription>
          Submit a technical issue or billing support request.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-4 p-6 sm:p-8 pt-2 pb-6">
          <Input
            label="Your Name"
            placeholder="Jane Doe"
            {...form.register("name")}
            isInvalid={!!form.formState.errors.name}
            errorMessage={form.formState.errors.name?.message}
          />
          <Input
            type="email"
            label="Email Address"
            placeholder="jane@company.com"
            {...form.register("email")}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <Controller
            control={form.control}
            name="category"
            render={({ field, fieldState }) => (
              <FormField
                label="Topic Category"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <Select
                  options={categoryOptions}
                  placeholder="Choose a category"
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormField>
            )}
          />
          <Textarea
            label="Describe Your Issue"
            placeholder="Please detail your problem..."
            rows={4}
            {...form.register("message")}
            isInvalid={!!form.formState.errors.message}
            errorMessage={form.formState.errors.message?.message}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Clear
          </Button>
          <Button color="primary" type="submit">
            Submit Ticket
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const systemPreferencesSchema = z.object({
  pushAlerts: z.boolean(),
  autoUpdates: z.boolean(),
  themeContrast: z.array(z.number()),
  feedbackRating: z.number().min(1, "Please rate your experience"),
});

type SystemPreferencesFormValues = z.infer<typeof systemPreferencesSchema>;

function SystemPreferencesPreview() {
  const form = useForm<SystemPreferencesFormValues>({
    resolver: zodResolver(systemPreferencesSchema),
    defaultValues: {
      pushAlerts: true,
      autoUpdates: false,
      themeContrast: [50],
      feedbackRating: 4,
    },
  });

  const onSubmit = (_data: SystemPreferencesFormValues) => {
    toast.success("Preferences updated successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Preferences</CardTitle>
        <CardDescription>
          Configure notifications, contrast scales, and system feedback.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-6 p-6 sm:p-8 pt-2 pb-6">
          <div className="space-y-4">
            <Controller
              control={form.control}
              name="pushAlerts"
              render={({ field }) => (
                <Switch
                  label="Push Notifications"
                  description="Receive instant desktop alerts"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <Controller
              control={form.control}
              name="autoUpdates"
              render={({ field }) => (
                <Switch
                  label="Automatic Updates"
                  description="Keep the system features up-to-date"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
          </div>

          <Controller
            control={form.control}
            name="themeContrast"
            render={({ field }) => (
              <FormField label={`Theme Contrast (${field.value[0]}%)`}>
                <Slider
                  min={10}
                  max={100}
                  step={5}
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormField>
            )}
          />

          <Controller
            control={form.control}
            name="feedbackRating"
            render={({ field, fieldState }) => (
              <FormField
                label="System Feedback Rating"
                description="Rate your current system navigation experience"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
              >
                <Rating
                  value={field.value}
                  onValueChange={field.onChange}
                  max={5}
                />
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Restore Defaults
          </Button>
          <Button color="primary" type="submit">
            Save Settings
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const projectTaskSchema = z.object({
  title: z.string().min(3, "Task title must be at least 3 characters"),
  projectType: z.string().min(1, "Please select a project type"),
  priority: z.enum(["low", "medium", "high"]),
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
});

type ProjectTaskFormValues = z.infer<typeof projectTaskSchema>;

function ProjectTaskPreview() {
  const form = useForm<ProjectTaskFormValues>({
    resolver: zodResolver(projectTaskSchema),
    defaultValues: {
      title: "",
      projectType: "",
      priority: "medium",
      tags: ["Sprint"],
    },
  });

  const onSubmit = (_data: ProjectTaskFormValues) => {
    toast.success("Project task created successfully!");
    form.reset();
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">New Project Task</CardTitle>
        <CardDescription>
          Organize priority tasks and assign tags for index searches.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-4 p-6 sm:p-8 pt-2 pb-6">
          <Input
            label="Task Title"
            placeholder="Optimize checkout conversions"
            {...form.register("title")}
            isInvalid={!!form.formState.errors.title}
            errorMessage={form.formState.errors.title?.message}
          />

          <Controller
            control={form.control}
            name="projectType"
            render={({ field, fieldState }) => (
              <FormField
                label="Assign to Project"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <Combobox
                  options={projectOptions}
                  placeholder="Select a project"
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormField>
            )}
          />

          <Controller
            control={form.control}
            name="priority"
            render={({ field }) => (
              <RadioGroup
                label="Priority Level"
                value={field.value}
                onValueChange={field.onChange}
                className="space-y-1"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="low" id="pri-low" />
                  <Label htmlFor="pri-low" className="cursor-pointer">
                    Low Priority
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="medium" id="pri-medium" />
                  <Label htmlFor="pri-medium" className="cursor-pointer">
                    Medium Priority
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="high" id="pri-high" />
                  <Label htmlFor="pri-high" className="cursor-pointer">
                    High Priority
                  </Label>
                </div>
              </RadioGroup>
            )}
          />

          <Controller
            control={form.control}
            name="tags"
            render={({ field, fieldState }) => (
              <FormField
                label="Task Tags"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
              >
                <TagInput
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Add search tags..."
                />
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button color="primary" type="submit">
            Create Task
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const jobApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  resume: z
    .any()
    .refine((val) => val && val.length > 0, "Resume file is required"),
  portfolioFiles: z.any().optional(),
});

type JobApplicationFormValues = z.infer<typeof jobApplicationSchema>;

function JobApplicationPreview() {
  const form = useForm<JobApplicationFormValues>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      fullName: "",
      resume: undefined,
      portfolioFiles: undefined,
    },
  });

  const onSubmit = (_data: JobApplicationFormValues) => {
    toast.success("Job application submitted successfully!");
    form.reset();
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Job Application</CardTitle>
        <CardDescription>
          Submit your personal details, resume file, and portfolio attachments.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-5 p-6 sm:p-8 pt-2 pb-6">
          <Input
            label="Candidate Full Name"
            placeholder="Jane Doe"
            {...form.register("fullName")}
            isInvalid={!!form.formState.errors.fullName}
            errorMessage={form.formState.errors.fullName?.message}
          />

          <Controller
            control={form.control}
            name="resume"
            render={({ field, fieldState }) => (
              <FormField
                label="Resume Attachment (PDF)"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <FileInput
                  placeholder="Select resume file"
                  onFilesSelected={(files) => field.onChange(files)}
                />
              </FormField>
            )}
          />

          <Controller
            control={form.control}
            name="portfolioFiles"
            render={({ field }) => (
              <FormField
                label="Portfolio / Supporting Media"
                description="Upload images or screenshots of your work"
              >
                <FileUpload
                  maxSizeMB={8}
                  simulateProgress
                  onFilesSelected={(files) => field.onChange(files)}
                />
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button color="primary" type="submit">
            Apply Now
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const appointmentSchedulerSchema = z.object({
  date: z.date({ required_error: "Please select an appointment date" }),
  time: z.string().min(1, "Please select an appointment hour"),
  labelColor: z.string(),
});

type AppointmentSchedulerFormValues = z.infer<
  typeof appointmentSchedulerSchema
>;

function AppointmentSchedulerPreview() {
  const form = useForm<AppointmentSchedulerFormValues>({
    resolver: zodResolver(appointmentSchedulerSchema),
    defaultValues: {
      date: undefined,
      time: "09:00 AM",
      labelColor: "#0ea5e9",
    },
  });

  const onSubmit = (_data: AppointmentSchedulerFormValues) => {
    toast.success("Appointment scheduled successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Schedule Event</CardTitle>
        <CardDescription>
          Pick a date, choose a meeting start time, and color-code the event.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-4 p-6 sm:p-8 pt-2 pb-6">
          <Controller
            control={form.control}
            name="date"
            render={({ field, fieldState }) => (
              <FormField
                label="Appointment Date"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <DatePicker value={field.value} onChange={field.onChange} />
              </FormField>
            )}
          />

          <Controller
            control={form.control}
            name="time"
            render={({ field, fieldState }) => (
              <FormField
                label="Preferred Hour"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <TimePicker value={field.value} onChange={field.onChange} />
              </FormField>
            )}
          />

          <Controller
            control={form.control}
            name="labelColor"
            render={({ field }) => (
              <FormField
                label={
                  <span className="flex items-center gap-2">
                    Calendar Label Tag Color
                    <span className="font-mono text-xs text-zinc-500 font-normal">
                      {field.value}
                    </span>
                  </span>
                }
              >
                <ColorPicker
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button color="primary" type="submit">
            Schedule Event
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const termsSignatureSchema = z.object({
  agreeTerms: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms of service"),
  agreePrivacy: z
    .boolean()
    .refine((val) => val === true, "You must accept the privacy policy"),
  signature: z
    .string()
    .min(1, "Digital signature is required to confirm identity"),
});

type TermsSignatureFormValues = z.infer<typeof termsSignatureSchema>;

function TermsSignaturePreview() {
  const form = useForm<TermsSignatureFormValues>({
    resolver: zodResolver(termsSignatureSchema),
    defaultValues: {
      agreeTerms: false,
      agreePrivacy: false,
      signature: "",
    },
  });

  const onSubmit = (_data: TermsSignatureFormValues) => {
    toast.success("Document signed and verified successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Verification Pad</CardTitle>
        <CardDescription>
          Confirm your legal options and draw your signature below.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-5 p-6 sm:p-8 pt-2 pb-6">
          <div className="space-y-3">
            <Controller
              control={form.control}
              name="agreeTerms"
              render={({ field, fieldState }) => (
                <FormField
                  isInvalid={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                >
                  <Checkbox
                    label="I accept the standard terms of service"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormField>
              )}
            />

            <Controller
              control={form.control}
              name="agreePrivacy"
              render={({ field, fieldState }) => (
                <FormField
                  isInvalid={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                >
                  <Checkbox
                    label="I accept the local data privacy policies"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormField>
              )}
            />
          </div>

          <Controller
            control={form.control}
            name="signature"
            render={({ field, fieldState }) => (
              <FormField
                label="Confirm Identity Signature"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                isRequired
              >
                <SignatureInput
                  placeholder="Draw signature here..."
                  onChange={field.onChange}
                />
              </FormField>
            )}
          />
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset Pad
          </Button>
          <Button color="primary" type="submit">
            Confirm Signature
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const customerBillingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  cardNumber: z.string().min(19, "Card number must be 16 digits (with spaces)"),
  expiryDate: z.string().min(5, "Expiry MM/YY is required"),
  cvv: z.string().min(3, "CVV must be 3 or 4 digits"),
});

type CustomerBillingFormValues = z.infer<typeof customerBillingSchema>;

function CustomerBillingPreview() {
  const form = useForm<CustomerBillingFormValues>({
    resolver: zodResolver(customerBillingSchema),
    defaultValues: {
      fullName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = (_data: CustomerBillingFormValues) => {
    toast.success("Billing details updated successfully!");
  };

  return (
    <Card variant="bordered" className="w-full max-w-md">
      <CardHeader className="space-y-1 p-6 sm:p-8 pb-4">
        <CardTitle className="text-xl font-bold">Billing Details</CardTitle>
        <CardDescription>
          Fill in credit card details using automatic input masks.
        </CardDescription>
      </CardHeader>
      <Form form={form} onSubmit={onSubmit}>
        <CardBody className="space-y-4 p-6 sm:p-8 pt-2 pb-6">
          <Input
            label="Cardholder Full Name"
            placeholder="Jane Doe"
            {...form.register("fullName")}
            isInvalid={!!form.formState.errors.fullName}
            errorMessage={form.formState.errors.fullName?.message}
          />

          <Input
            label="Card Number"
            placeholder="0000 0000 0000 0000"
            mask="CreditCard"
            {...form.register("cardNumber")}
            isInvalid={!!form.formState.errors.cardNumber}
            errorMessage={form.formState.errors.cardNumber?.message}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Expiry Date"
              placeholder="MM/YY"
              mask="Custom"
              customMaskPattern="00/00"
              {...form.register("expiryDate")}
              isInvalid={!!form.formState.errors.expiryDate}
              errorMessage={form.formState.errors.expiryDate?.message}
            />
            <Input
              label="CVV"
              placeholder="000"
              mask="Custom"
              customMaskPattern="000"
              {...form.register("cvv")}
              isInvalid={!!form.formState.errors.cvv}
              errorMessage={form.formState.errors.cvv?.message}
            />
          </div>
        </CardBody>
        <CardFooter className="p-6 sm:p-8 pt-0 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button color="primary" type="submit">
            Update Billing
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}

const memberSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(2, "Role description must be at least 2 characters"),
  status: z.boolean(),
});

type MemberFormValues = z.infer<typeof memberSchema>;

function CrudManagerPreview() {
  const [members, setMembers] = React.useState<CrudMember[]>(initialMembers);
  const [selectedMember, setSelectedMember] = React.useState<CrudMember | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);

  const form = useForm<MemberFormValues>({
    resolver: zodResolver(memberSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      status: true,
    },
  });

  const openCreateDialog = () => {
    setSelectedMember(null);
    form.reset({
      name: "",
      email: "",
      role: "",
      status: true,
    });
    setIsDialogOpen(true);
  };

  const openEditDialog = (member: CrudMember) => {
    setSelectedMember(member);
    form.reset({
      name: member.name,
      email: member.email,
      role: member.role,
      status: member.status === "Active",
    });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (member: CrudMember) => {
    setSelectedMember(member);
    setIsDeleteOpen(true);
  };

  const handleSave = (data: MemberFormValues) => {
    const statusVal = data.status ? "Active" : "Inactive";
    if (selectedMember) {
      setMembers(
        members.map((m) =>
          m.id === selectedMember.id
            ? {
                ...m,
                name: data.name,
                email: data.email,
                role: data.role,
                status: statusVal,
              }
            : m,
        ),
      );
      toast.success("Member updated successfully!");
    } else {
      const newMember: CrudMember = {
        id: Math.random().toString(36).substr(2, 9),
        name: data.name,
        email: data.email,
        role: data.role,
        status: statusVal,
      };
      setMembers([...members, newMember]);
      toast.success("Member added successfully!");
    }
    setIsDialogOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (selectedMember) {
      setMembers(members.filter((m) => m.id !== selectedMember.id));
      toast.success("Member deleted successfully!");
      setIsDeleteOpen(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-150">
            Organization Members
          </h4>
          <p className="text-xs text-zinc-500">
            Manage and update active member profiles.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              color="primary"
              onClick={openCreateDialog}
              startContent={
                <Icon icon="hugeicons:add-circle" className="size-4" />
              }
            >
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {selectedMember ? "Edit Member Profile" : "Add New Member"}
              </DialogTitle>
            </DialogHeader>
            <Form form={form} onSubmit={handleSave} className="space-y-4">
              <Input
                label="Full Name"
                placeholder="John Doe"
                {...form.register("name")}
                isInvalid={!!form.formState.errors.name}
                errorMessage={form.formState.errors.name?.message}
              />
              <Input
                type="email"
                label="Email Address"
                placeholder="john@company.com"
                {...form.register("email")}
                isInvalid={!!form.formState.errors.email}
                errorMessage={form.formState.errors.email?.message}
              />
              <Input
                label="Role"
                placeholder="Frontend Developer"
                {...form.register("role")}
                isInvalid={!!form.formState.errors.role}
                errorMessage={form.formState.errors.role?.message}
              />
              <div className="flex items-center justify-between pt-1">
                <div className="space-y-0.5">
                  <Label>Status</Label>
                  <p className="text-xs text-zinc-500">
                    Enable or disable system access
                  </p>
                </div>
                <Controller
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </div>
              <DialogFooter className="pt-4 gap-2 flex justify-end">
                <DialogClose asChild>
                  <Button variant="ghost" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <Button color="primary" type="submit">
                  {selectedMember ? "Save Profile" : "Add Member"}
                </Button>
              </DialogFooter>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8 text-zinc-400">
                No members found in the organization.
              </TableCell>
            </TableRow>
          ) : (
            members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-xs text-zinc-600 dark:text-zinc-300">
                      {member.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")
                        .toUpperCase()
                        .substring(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {member.name}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {member.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>
                  <Badge
                    color={member.status === "Active" ? "success" : "default"}
                    variant="flat"
                    size="sm"
                  >
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-1">
                    <Button
                      variant="ghost"
                      size="md"
                      radius="sm"
                      isIconOnly
                      ariaLabel="Edit member"
                      onClick={() => openEditDialog(member)}
                      className="shadow-none"
                    >
                      <Icon icon="hugeicons:edit-04" className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      color="danger"
                      size="md"
                      radius="sm"
                      isIconOnly
                      ariaLabel="Delete member"
                      onClick={() => openDeleteDialog(member)}
                      className="shadow-none"
                    >
                      <Icon icon="hugeicons:delete-02" className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Member</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove {selectedMember?.name} from the
              organization? This action is permanent.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2 flex justify-end">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm}>
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default function FormsPreviewPage() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="space-y-3 px-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Forms & CRUD Templates
        </h1>
        <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Explore comprehensive form and CRUD layouts built using Bloom&apos;s
          component system and validated with Zod.
        </p>
      </div>

      <DocsComponent
        title="Profile Settings"
        description="A standard settings block with validation support, password inputs, and checkbox confirmations."
        preview={<ProfileSettingsPreview />}
        code={profileSettingsCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Support Ticket"
        description="A classic help desk form using input fields, select dropdowns, and message textareas."
        preview={<SupportTicketPreview />}
        code={supportTicketCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="System Preferences"
        description="A preferences form configuring toggle switches, theme contrast sliders, and interactive rating stars."
        preview={<SystemPreferencesPreview />}
        code={systemPreferencesCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Project Task Creator"
        description="Create priority project tasks with autocompletes, radio groups, and keyword tags input."
        preview={<ProjectTaskPreview />}
        code={projectTaskCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Job Application"
        description="Job seeker form with custom file input selectors and advanced drag & drop uploads."
        preview={<JobApplicationPreview />}
        code={jobApplicationCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Appointment Scheduler"
        description="Event planner displaying overlay date pickers, hour selectors, and customized color tags."
        preview={<AppointmentSchedulerPreview />}
        code={appointmentSchedulerCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Verification & Terms Pad"
        description="Confirm terms & privacy options and draw a customized signature on the digital canvas."
        preview={<TermsSignaturePreview />}
        code={termsSignatureCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Customer Billing"
        description="Update credit card details using credit-card and custom input masks."
        preview={<CustomerBillingPreview />}
        code={customerBillingCode}
        showResponsivePreview={true}
      />

      <DocsComponent
        title="Member CRUD Manager"
        description="A live, operational in-memory CRUD grid showcasing dialog forms creation, details editing, delete confirmations, and notifications."
        preview={<CrudManagerPreview />}
        code={crudManagerCode}
        showResponsivePreview={true}
      />
    </div>
  );
}
