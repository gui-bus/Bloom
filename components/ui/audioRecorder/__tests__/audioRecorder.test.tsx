import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AudioRecorder } from "../audioRecorder";

describe("AudioRecorder Component", () => {
  let mockStream: any;
  let mockMediaRecorder: any;

  beforeEach(() => {
    mockStream = {
      getTracks: vi.fn().mockReturnValue([{ stop: vi.fn() }]),
    };

    mockMediaRecorder = {
      start: vi.fn(),
      stop: vi.fn(),
      pause: vi.fn(),
      resume: vi.fn(),
      ondataavailable: null,
      onstop: null,
    };

    vi.stubGlobal("navigator", {
      mediaDevices: {
        getUserMedia: vi.fn().mockResolvedValue(mockStream),
      },
    });

    class MockMediaRecorderClass {
      start = mockMediaRecorder.start;
      stop = mockMediaRecorder.stop;
      pause = mockMediaRecorder.pause;
      resume = mockMediaRecorder.resume;
      get ondataavailable() {
        return mockMediaRecorder.ondataavailable;
      }
      set ondataavailable(val) {
        mockMediaRecorder.ondataavailable = val;
      }
      get onstop() {
        return mockMediaRecorder.onstop;
      }
      set onstop(val) {
        mockMediaRecorder.onstop = val;
      }
    }

    vi.stubGlobal("MediaRecorder", MockMediaRecorderClass);

    class MockAudioContext {
      createAnalyser() {
        return {
          fftSize: 0,
          frequencyBinCount: 10,
          getByteFrequencyData: vi.fn(),
        };
      }
      createMediaStreamSource() {
        return {
          connect: vi.fn(),
        };
      }
      close() {
        return Promise.resolve();
      }
    }

    vi.stubGlobal("AudioContext", MockAudioContext);

    vi.stubGlobal("URL", {
      createObjectURL: vi.fn().mockReturnValue("mock-url"),
    });

    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      clearRect: vi.fn(),
      fillRect: vi.fn(),
      beginPath: vi.fn(),
      rect: vi.fn(),
      fill: vi.fn(),
    }) as any;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("renders state initially", () => {
    render(<AudioRecorder />);
    expect(
      screen.getByText("Click record to start voice capture"),
    ).toBeInTheDocument();
  });

  it("starts and stops recording", async () => {
    const onStopMock = vi.fn();
    render(<AudioRecorder onStop={onStopMock} />);

    const startBtn = screen.getByRole("button", { name: /start recording/i });
    await act(async () => {
      fireEvent.click(startBtn);
    });

    expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalled();
    expect(
      screen.getByRole("button", { name: /stop recording/i }),
    ).toBeInTheDocument();

    const stopBtn = screen.getByRole("button", { name: /stop recording/i });
    await act(async () => {
      mockMediaRecorder.ondataavailable?.({ data: { size: 100 } });
      mockMediaRecorder.onstop?.();
      fireEvent.click(stopBtn);
    });

    expect(mockMediaRecorder.stop).toHaveBeenCalled();
  });
});
