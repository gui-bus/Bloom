export const buttonCSSCode = `
.ripple {
  position: absolute;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.35);
  transform: scale(0);
  animation: ripple 600ms ease-out;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
`;
