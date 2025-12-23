export const buttonCSSCode = `@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.ripple {
  position: absolute;
  border-radius: 9999px;
  transform: scale(0);
  animation: ripple 600ms ease-out;
  background-color: currentColor;
  opacity: 0.25;
  pointer-events: none;
}

@keyframes growY {
  0%,
  100% {
    transform: scaleY(0.4);
  }
  50% {
    transform: scaleY(1);
  }
}
.animate-growY {
  animation: growY 1s ease-in-out infinite;
}

@keyframes spin-reverse {
  100% {
    transform: rotate(-360deg);
  }
}
.animate-spin-reverse {
  animation: spin-reverse 1s linear infinite;
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(10px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(10px) rotate(-360deg);
  }
}
.animate-orbit {
  animation: orbit 1s linear infinite;
  transform-origin: center center;
}`;
