"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { Button } from "@/components/ui/button/button";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface AudioRecorderProps {
  className?: string;
  onStop?: (blob: Blob, url: string) => void;
  variant?: "default" | "bordered" | "flat";
  radius?: keyof typeof designRadius;
  visualizerColor?: string;
  maxDuration?: number;
  isDisabled?: boolean;
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({
  className,
  onStop,
  variant = "default",
  radius = "lg",
  visualizerColor = "#0ea5e9",
  maxDuration,
  isDisabled = false,
}) => {
  const [isRecording, setIsRecording] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [duration, setDuration] = React.useState(0);

  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
  const audioChunksRef = React.useRef<Blob[]>([]);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = React.useRef<number | null>(null);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  const sourceRef = React.useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = React.useRef<MediaStream | null>(null);

  const startVisualizer = (stream: MediaStream) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 64;

    const AudioContextClass =
      window.AudioContext || (window as any).webkitAudioContext;
    const audioContext = new AudioContextClass();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(stream);

    source.connect(analyser);
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    sourceRef.current = source;

    const draw = () => {
      if (!canvasRef.current) return;
      animationFrameRef.current = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 1.5;
      let barHeight = 0;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * canvas.height * 0.8;

        ctx.fillStyle = visualizerColor;

        const y = (canvas.height - barHeight) / 2;

        ctx.beginPath();
        if (typeof ctx.roundRect === "function") {
          ctx.roundRect(x, y, barWidth - 2, barHeight, 2);
        } else {
          ctx.rect(x, y, barWidth - 2, barHeight);
        }
        ctx.fill();

        x += barWidth;
      }
    };

    draw();
  };

  const stopVisualizer = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const startRecording = async () => {
    if (isDisabled) return;
    try {
      audioChunksRef.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        onStop?.(audioBlob, url);
        stopVisualizer();
      };

      mediaRecorder.start();
      setIsRecording(true);
      setIsPaused(false);
      setDuration(0);
      setAudioUrl(null);
      startVisualizer(stream);

      timerRef.current = setInterval(() => {
        setDuration((prev) => {
          if (maxDuration && prev >= maxDuration) {
            stopRecording();
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err) {
      console.error("Microphone permission denied or unsupported device:", err);
    }
  };

  const pauseRecording = () => {
    if (!mediaRecorderRef.current || !isRecording) return;
    if (isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);

      if (streamRef.current) startVisualizer(streamRef.current);
    } else {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      stopVisualizer();
    }
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();

    streamRef.current?.getTracks().forEach((track) => {
      track.stop();
    });

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRecording(false);
    setIsPaused(false);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      stopVisualizer();
    };
  }, []);

  return (
    <div
      className={cn(
        "w-full flex flex-col p-4 border",
        designRadius[radius],
        variant === "default" &&
          "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-xs",
        variant === "bordered" &&
          "bg-transparent border-2 border-zinc-200 dark:border-zinc-800",
        variant === "flat" &&
          "bg-zinc-100 dark:bg-zinc-800/60 border-transparent",
        isDisabled && "opacity-50 pointer-events-none cursor-not-allowed",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center py-4">
        <div className="w-full flex flex-col items-center justify-center h-20 mb-4 relative">
          {isRecording ? (
            <div className="w-full flex flex-col items-center justify-center">
              <span className="text-2xl font-mono font-semibold text-zinc-900 dark:text-zinc-100 mb-1 flex items-center gap-2">
                <span
                  className={cn(
                    "size-2.5 rounded-full bg-danger",
                    !isPaused && "animate-pulse",
                  )}
                />
                {formatTime(duration)}
              </span>
              <canvas ref={canvasRef} className="w-full h-12 block mt-1" />
            </div>
          ) : audioUrl ? (
            <div className="w-full flex flex-col items-center justify-center">
              <audio
                src={audioUrl}
                controls
                className="h-10 w-full max-w-xs focus:outline-none"
              >
                <track kind="captions" />
              </audio>
            </div>
          ) : (
            <div className="flex flex-col items-center text-zinc-400 dark:text-zinc-500">
              <Icon icon="lucide:mic" className="size-8 mb-1" />
              <span className="text-xs">
                Click record to start voice capture
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-4">
          {isRecording ? (
            <>
              <Button
                size="md"
                variant="flat"
                onClick={pauseRecording}
                className="rounded-full h-10 w-10 p-0"
                aria-label={isPaused ? "Resume recording" : "Pause recording"}
              >
                <Icon
                  icon={isPaused ? "lucide:play" : "lucide:pause"}
                  className="size-5"
                />
              </Button>
              <Button
                size="md"
                variant="default"
                color="danger"
                onClick={stopRecording}
                className="rounded-full h-12 w-12 p-0 shadow-lg shadow-danger/25"
                aria-label="Stop recording"
              >
                <Icon icon="lucide:square" className="size-5" />
              </Button>
            </>
          ) : (
            <Button
              size="md"
              variant="default"
              color="primary"
              onClick={startRecording}
              className="rounded-full h-14 w-14 p-0 shadow-lg shadow-primary/25"
              aria-label="Start recording"
            >
              <Icon icon="lucide:mic" className="size-6 text-white" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

AudioRecorder.displayName = "AudioRecorder";
