"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress/progress";
import { Button } from "@/components/ui/button/button";

export function AnimatedProgressDemo() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-4 max-w-md">
      <Progress
        value={progress}
        label="Simulating download..."
        showValueLabel
        color="primary"
      />
      <Button
        size="sm"
        variant="bordered"
        onClick={() => setProgress(0)}
      >
        Reset Progress
      </Button>
    </div>
  );
}
