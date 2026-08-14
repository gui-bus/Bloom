"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { Button } from "@/components/ui/button/button";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface SignatureInputProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  lineWidth?: number;
  backgroundColor?: string;
  variant?: "default" | "bordered" | "flat";
  radius?: keyof typeof designRadius;
  onChange?: (signature: string | null) => void;
  onClear?: () => void;
  placeholder?: string;
  isDisabled?: boolean;
  label?: React.ReactNode;
  isRequired?: boolean;
}

interface Point {
  x: number;
  y: number;
}

export const SignatureInput = React.forwardRef<
  HTMLCanvasElement,
  SignatureInputProps
>(
  (
    {
      className,
      width = "100%",
      height = 200,
      strokeColor = "currentColor",
      lineWidth = 2.5,
      backgroundColor = "transparent",
      variant = "default",
      radius = "md",
      onChange,
      onClear,
      placeholder = "Sign here...",
      isDisabled = false,
      label,
      isRequired = false,
    },
    ref,
  ) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = React.useState(false);
    const [history, setHistory] = React.useState<string[]>([]);
    const [isEmpty, setIsEmpty] = React.useState(true);

    const getCoordinates = (
      e:
        | React.MouseEvent<HTMLCanvasElement>
        | React.TouchEvent<HTMLCanvasElement>,
    ): Point | null => {
      const canvas = canvasRef.current;
      if (!canvas) return null;

      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
      };
    };

    const startDrawing = (
      e:
        | React.MouseEvent<HTMLCanvasElement>
        | React.TouchEvent<HTMLCanvasElement>,
    ) => {
      if (isDisabled) return;
      e.preventDefault();

      const coords = getCoordinates(e);
      if (!coords) return;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      saveState();

      ctx.beginPath();
      ctx.moveTo(coords.x, coords.y);
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (strokeColor === "currentColor") {
        const style = window.getComputedStyle(canvas);
        ctx.strokeStyle = style.color;
      } else {
        ctx.strokeStyle = strokeColor;
      }

      setIsDrawing(true);
      setIsEmpty(false);
    };

    const draw = (
      e:
        | React.MouseEvent<HTMLCanvasElement>
        | React.TouchEvent<HTMLCanvasElement>,
    ) => {
      if (!isDrawing || isDisabled) return;
      e.preventDefault();

      const coords = getCoordinates(e);
      if (!coords) return;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx) return;

      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();
    };

    const stopDrawing = () => {
      if (!isDrawing) return;
      setIsDrawing(false);
      triggerChange();
    };

    const saveState = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      setHistory((prev) => [...prev, canvas.toDataURL()]);
    };

    const triggerChange = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      if (isEmpty) {
        onChange?.(null);
      } else {
        onChange?.(canvas.toDataURL());
      }
    };

    const clear = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHistory([]);
      setIsEmpty(true);
      onChange?.(null);
      onClear?.();
    };

    const undo = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || history.length === 0) return;

      const newHistory = [...history];
      const prevState = newHistory.pop();
      setHistory(newHistory);

      if (prevState) {
        const img = new Image();
        img.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
          triggerChange();
        };
        img.src = prevState;
      } else {
        clear();
      }
    };

    React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      const ctx = canvas.getContext("2d");
      if (ctx && backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }, [backgroundColor]);

    return (
      <div className={cn("flex flex-col gap-1.5 w-full", className)}>
        {label && (
          <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
            {label}
            {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
          </label>
        )}
        <div
          className={cn(
            "relative border overflow-hidden flex flex-col group text-zinc-900 dark:text-zinc-100",
            designRadius[radius],
            variant === "default" &&
              "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-xs",
            variant === "bordered" &&
              "bg-transparent border-2 border-zinc-200 dark:border-zinc-800",
            variant === "flat" &&
              "bg-zinc-100 dark:bg-zinc-800/60 border-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800",
            isDisabled && "opacity-50 pointer-events-none cursor-not-allowed",
          )}
        >
          {isEmpty && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-zinc-400 dark:text-zinc-500 font-normal text-sm">
              {placeholder}
            </div>
          )}

          <canvas
            ref={(node) => {
              if (typeof ref === "function") ref(node);
              else if (ref) (ref as any).current = node;
              (canvasRef as any).current = node;
            }}
            style={{ width, height }}
            className="block cursor-crosshair touch-none"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />

          <div className="absolute bottom-2 right-2 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <Button
              size="sm"
              variant="flat"
              isDisabled={history.length === 0 || isDisabled}
              onClick={undo}
              className="h-7 w-7 p-0"
              aria-label="Undo last stroke"
            >
              <Icon icon="lucide:undo-2" className="size-4" />
            </Button>
            <Button
              size="sm"
              variant="flat"
              isDisabled={isEmpty || isDisabled}
              onClick={clear}
              className="h-7 w-7 p-0 text-danger hover:bg-danger/10"
              aria-label="Clear signature"
            >
              <Icon icon="lucide:trash-2" className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

SignatureInput.displayName = "SignatureInput";
