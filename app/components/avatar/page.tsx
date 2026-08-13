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
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import { avatarCode } from "@/components/ui/avatar/avatar.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog/dialog";
import { ImageCropper, ImageCropperRef } from "@/components/ui/imageCropper/imageCropper";
import { Toast, toast } from "@/components/ui/toast/toast";
import { Button } from "@/components/ui/button/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdownMenu/dropdownMenu";
import { FileUpload } from "@/components/ui/fileUpload/fileUpload";

export default function AvatarPage() {
  const [isCropOpen, setIsCropOpen] = React.useState(false);
  const [cropResult, setCropResult] = React.useState<string | null>(null);
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = React.useState<string | null>(null);
  const cropperRef = React.useRef<ImageCropperRef>(null);

  const handlePhotoUploadSelected = (files: File[]) => {
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setUploadedPhotoUrl(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveCrop = () => {
    if (cropperRef.current) {
      const cropped = cropperRef.current.crop();
      if (cropped) {
        setCropResult(cropped);
        setUploadedPhotoUrl(null);
      }
    }
    setIsCropOpen(false);
    toast.success("Profile photo updated successfully!", {
      description: "Your new avatar image has been cropped and synchronized.",
    });
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Avatar"
        description="Avatars represent a user or entity using an image, initials fallback, editable photo uploads, or status indicator. Built on top of Radix UI primitive with support for interactive press states and standardized neutral dark/light themes."
      />

      <ImportSnippet
        importCode={`import { Avatar } from "@/components/ui/avatar/avatar";`}
      />

      <InstallationBlock componentName="avatar" />

      <CodeBlock
        code={avatarCode}
        componentName="avatar.tsx"
        description="Avatar component featuring image fallbacks, pressable interactions, editable overlays, status dots, and clean dark/light neutral colors."
        tags={["React", "Tailwind", "Radix UI", "UI Component", "Avatar"]}
      />

      <DocsComponent
        title="Default"
        description="A standard avatar component displaying a user image with an automated initials fallback when the image is absent or loading."
        preview={
          <div className="w-full flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                alt="Sarah Jenkins"
              />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="invalid-url.jpg" alt="Broken link" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-4">
  <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
    <AvatarFallback>SJ</AvatarFallback>
  </Avatar>

  <Avatar>
    <AvatarImage src="invalid-url.jpg" alt="Broken link" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>

  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
</div>`}
      />

      <DocsComponent
        title="Sizes"
        description="Scales seamlessly from 'xs' (24px) to '3xl' (80px) across predefined design scale tokens."
        preview={
          <div className="w-full flex flex-wrap items-center gap-4">
            <Avatar size="xs">
              <AvatarFallback>XS</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar size="md">
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <Avatar size="xl">
              <AvatarFallback>XL</AvatarFallback>
            </Avatar>
            <Avatar size="2xl">
              <AvatarFallback>2X</AvatarFallback>
            </Avatar>
            <Avatar size="3xl">
              <AvatarFallback>3X</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-4">
  <Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>
  <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
  <Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>
  <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
  <Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
  <Avatar size="2xl"><AvatarFallback>2X</AvatarFallback></Avatar>
  <Avatar size="3xl"><AvatarFallback>3X</AvatarFallback></Avatar>
</div>`}
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      <DocsComponent
        title="Editable Photo Upload Overlay"
        description="Render a hover photo upload icon overlay using 'isEditable' and trigger 'onUpload' callback. Click the editable avatar to open the cropper modal flow."
        preview={
          <div className="w-full flex flex-wrap items-center gap-5">
            <Avatar
              size="xl"
              isEditable
              onUpload={() => setIsCropOpen(true)}
            >
              <AvatarImage
                src={cropResult ?? "/utils/image-cropper.webp"}
                alt="Sarah Jenkins"
              />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <Avatar
              size="xl"
              isEditable
              isBordered
              color="primary"
              onUpload={() => setIsCropOpen(true)}
            >
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>

            <Dialog open={isCropOpen} onOpenChange={(open) => {
              setIsCropOpen(open);
              if (!open) setUploadedPhotoUrl(null);
            }}>
              <DialogContent size="lg">
                <DialogHeader>
                  <DialogTitle>Edit Profile Photo</DialogTitle>
                  <DialogDescription>
                    Adjust scale, rotate, and crop your profile avatar.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  {!uploadedPhotoUrl ? (
                    <FileUpload
                      label="Select Profile Photo"
                      accept="image/*"
                      showPreviews={false}
                      simulateProgress={false}
                      onFilesSelected={handlePhotoUploadSelected}
                    />
                  ) : (
                    <ImageCropper
                      ref={cropperRef}
                      src={uploadedPhotoUrl}
                      circular
                      showCropButton={false}
                    />
                  )}
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="flat">Cancel</Button>
                  </DialogClose>
                  <Button color="primary" onClick={handleSaveCrop} disabled={!uploadedPhotoUrl}>
                    Apply Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        }
        code={`const [isCropOpen, setIsCropOpen] = useState(false);
const [cropResult, setCropResult] = useState(null);
const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState(null);
const cropperRef = useRef(null);

const handlePhotoUploadSelected = (files) => {
  if (files && files[0]) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) setUploadedPhotoUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  }
};

const handleSaveCrop = () => {
  if (cropperRef.current) {
    const cropped = cropperRef.current.crop();
    if (cropped) {
      setCropResult(cropped);
      setUploadedPhotoUrl(null);
    }
  }
  setIsCropOpen(false);
  toast.success("Profile photo updated successfully!");
};

return (
  <div className="flex items-center gap-5">
    <Avatar size="xl" isEditable onUpload={() => setIsCropOpen(true)}>
      <AvatarImage src={cropResult ?? "/utils/image-cropper.webp"} alt="Sarah Jenkins" />
      <AvatarFallback>SJ</AvatarFallback>
    </Avatar>

    <Dialog open={isCropOpen} onOpenChange={(open) => {
      setIsCropOpen(open);
      if (!open) setUploadedPhotoUrl(null);
    }}>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Edit Profile Photo</DialogTitle>
          <DialogDescription>Adjust scale, rotate, and crop your profile avatar.</DialogDescription>
        </DialogHeader>
        
        {!uploadedPhotoUrl ? (
          <FileUpload
            label="Select Profile Photo"
            accept="image/*"
            showPreviews={false}
            simulateProgress={false}
            onFilesSelected={handlePhotoUploadSelected}
          />
        ) : (
          <ImageCropper
            ref={cropperRef}
            src={uploadedPhotoUrl}
            circular
            showCropButton={false}
          />
        )}
        
        <DialogFooter>
          <DialogClose asChild><Button variant="flat">Cancel</Button></DialogClose>
          <Button color="primary" onClick={handleSaveCrop} disabled={!uploadedPhotoUrl}>Apply Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
);`}
        props={["isEditable: boolean", "onUpload: () => void"]}
      />

      <DocsComponent
        title="Pressable Avatars"
        description="Enable interactive press behavior using 'isPressable' for profile triggers, user menus, or clickable list avatars."
        preview={
          <div className="w-full flex flex-wrap items-center gap-5">
            <Avatar isPressable onClick={() => toast.info("Clicked Jenkins Profile")}>
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                alt="Sarah Jenkins"
              />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <Avatar
              isPressable
              isBordered
              color="primary"
              onClick={() => toast.info("Clicked Alex Profile")}
            >
              <AvatarImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
                alt="Alex Rivera"
              />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <Avatar
              isPressable
              color="success"
              onClick={() => toast.info("Clicked Guest Profile")}
            >
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-5">
  <Avatar isPressable onClick={() => toast.info("Clicked Profile")}>
    <AvatarImage src="..." alt="Sarah Jenkins" />
    <AvatarFallback>SJ</AvatarFallback>
  </Avatar>

  <Avatar isPressable isBordered color="primary" onClick={() => toast.info("Clicked Profile")}>
    <AvatarImage src="..." alt="Alex Rivera" />
    <AvatarFallback>AR</AvatarFallback>
  </Avatar>

  <Avatar isPressable color="success" onClick={() => toast.info("Clicked Profile")}>
    <AvatarFallback>MK</AvatarFallback>
  </Avatar>
</div>`}
        props={["isPressable: boolean"]}
      />

      <DocsComponent
        title="Colors & Bordered Rings"
        description="Pair 'isBordered' with any design system color to highlight user status, active stories, or primary roles. Fallbacks automatically adapt soft accent colors."
        preview={
          <div className="w-full flex flex-wrap items-center gap-4">
            <Avatar isBordered color="default">
              <AvatarFallback>DF</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="primary">
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="secondary">
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="accent">
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="success">
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="warning">
              <AvatarFallback>WR</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="danger">
              <AvatarFallback>DG</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-4">
  <Avatar isBordered color="default"><AvatarFallback>DF</AvatarFallback></Avatar>
  <Avatar isBordered color="primary"><AvatarFallback>PR</AvatarFallback></Avatar>
  <Avatar isBordered color="secondary"><AvatarFallback>SC</AvatarFallback></Avatar>
  <Avatar isBordered color="accent"><AvatarFallback>AC</AvatarFallback></Avatar>
  <Avatar isBordered color="success"><AvatarFallback>SU</AvatarFallback></Avatar>
  <Avatar isBordered color="warning"><AvatarFallback>WR</AvatarFallback></Avatar>
  <Avatar isBordered color="danger"><AvatarFallback>DG</AvatarFallback></Avatar>
</div>`}
        props={[
          "isBordered: boolean",
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
      />

      <DocsComponent
        title="Status Indicators"
        description="Adds a status dot indicator (online, away, offline, dnd) positioned at any corner."
        preview={
          <div className="w-full flex flex-wrap items-center gap-6">
            <Avatar status="success" statusPosition="bottom-right">
              <AvatarFallback>ON</AvatarFallback>
            </Avatar>
            <Avatar status="warning" statusPosition="top-right">
              <AvatarFallback>AW</AvatarFallback>
            </Avatar>
            <Avatar status="danger" statusPosition="bottom-left">
              <AvatarFallback>OFF</AvatarFallback>
            </Avatar>
            <Avatar status="secondary" statusPosition="top-left">
              <AvatarFallback>DND</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-6">
  <Avatar status="success" statusPosition="bottom-right"><AvatarFallback>ON</AvatarFallback></Avatar>
  <Avatar status="warning" statusPosition="top-right"><AvatarFallback>AW</AvatarFallback></Avatar>
  <Avatar status="danger" statusPosition="bottom-left"><AvatarFallback>OFF</AvatarFallback></Avatar>
  <Avatar status="secondary" statusPosition="top-left"><AvatarFallback>DND</AvatarFallback></Avatar>
</div>`}
        props={[
          "status: AvatarColor",
          "statusPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",
        ]}
      />

      <DocsComponent
        title="User Info Layout"
        description="Display custom headers, name, email, or role labels (title and description metadata) aligned alongside the Avatar component using title and description props."
        preview={
          <div className="w-full flex flex-wrap gap-8 items-center">
            <Avatar
              title="Sarah Jenkins"
              description="sarah.j@example.com"
            >
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                alt="Sarah Jenkins"
              />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>

            <Avatar
              color="success"
              isBordered
              title="Alex Rivera"
              description={<span className="text-emerald-600 dark:text-emerald-400 font-medium">System Admin</span>}
            >
              <AvatarImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
                alt="Alex Rivera"
              />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<Avatar
  title="Sarah Jenkins"
  description="sarah.j@example.com"
>
  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
  <AvatarFallback>SJ</AvatarFallback>
</Avatar>

<Avatar
  color="success"
  isBordered
  title="Alex Rivera"
  description={<span className="text-emerald-600 dark:text-emerald-400 font-medium">System Admin</span>}
>
  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Alex Rivera" />
  <AvatarFallback>AR</AvatarFallback>
</Avatar>`}
      />

      <DocsComponent
        title="Avatar with Dropdown Menu"
        description="Nest an interactive pressable Avatar within a DropdownMenu trigger to represent typical account or authentication menu systems."
        preview={
          <div className="w-full flex items-center justify-start py-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar isPressable>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                    alt="Sarah Jenkins"
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 leading-none">Sarah Jenkins</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-none">sarah.j@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => toast.info("Navigating to Profile")}>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => toast.info("Navigating to Settings")}>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={() => toast.info("Navigating to Billing")}>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-rose-600 dark:text-rose-400 font-semibold" onClick={() => toast.success("Successfully logged out")}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        }
        code={`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdownMenu/dropdownMenu";

return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Avatar isPressable>
        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
        <AvatarFallback>SJ</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="start">
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 leading-none">Sarah Jenkins</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-none">sarah.j@example.com</p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => console.log("Profile")}>Profile</DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log("Settings")}>Settings</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-rose-600" onClick={() => console.log("Log out")}>Log out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);`}
      />

      <Toast />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Avatar"
        description="Properties for configuring the Avatar root component."
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
                    isEditable
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders a photo camera icon overlay on hover for image
                    updates.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onUpload</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    () =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback triggered when clicking the upload overlay icon.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets the dimension scale of the avatar.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' |
                    'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Theme color for the outer ring when isBordered is true, and
                    for the fallback background.
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
