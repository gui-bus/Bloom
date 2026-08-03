"use client";

import { Button } from "@/components/ui/button/button";
import { Toast, toast } from "@/components/ui/toast/toast";

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Toast />
      <Button onClick={() => toast.success("Event has been created.")}>
        Success Toast
      </Button>
      <Button
        variant="bordered"
        onClick={() => toast.error("Something went wrong.")}
      >
        Error Toast
      </Button>
    </div>
  );
}
