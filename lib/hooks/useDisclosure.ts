"use client";

import { useState, useCallback } from "react";

/**
 * useDisclosure — Simplified open/close state control hook.
 * Ideal for Modals, Drawers, Sheets, Accordions, Popovers.
 */
export function useDisclosure(defaultIsOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const onOpenChange = useCallback((open: boolean) => setIsOpen(open), []);

  return { isOpen, onOpen, onClose, toggle, onOpenChange };
}
