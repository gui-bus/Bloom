"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

export interface MentionItem {
  id: string;
  display: string;
  avatar?: string;
  subtitle?: string;
  [key: string]: any;
}

export interface MentionTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  trigger?: string;
  items: MentionItem[];
  onMention?: (item: MentionItem) => void;
  listClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  label?: React.ReactNode;
  isRequired?: boolean;
}

export const MentionTextarea = React.forwardRef<
  HTMLTextAreaElement,
  MentionTextareaProps
>(
  (
    {
      trigger = "@",
      items,
      onMention,
      listClassName,
      itemClassName,
      activeItemClassName,
      value,
      onChange,
      className,
      id,
      label,
      isRequired = false,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const [internalValue, setInternalValue] = useState((value as string) || "");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [coords, setCoords] = useState({ top: 0, left: 0 });

    const internalRef = useRef<HTMLTextAreaElement>(null);
    const mirrorRef = useRef<HTMLDivElement>(null);

    const textareaRef =
      (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;

    const filteredItems = items.filter((item) =>
      item.display.toLowerCase().includes(query.toLowerCase()),
    );

    const updateCaretPosition = useCallback(() => {
      if (!textareaRef.current || !mirrorRef.current) return;
      const textarea = textareaRef.current;
      const mirror = mirrorRef.current;
      const cursorPosition = textarea.selectionStart;
      const textBeforeCursor = textarea.value.substring(0, cursorPosition);
      mirror.textContent = textBeforeCursor;
      const span = document.createElement("span");
      span.textContent = ".";
      mirror.appendChild(span);
      setCoords({
        top: span.offsetTop + 24,
        left: span.offsetLeft,
      });
      mirror.removeChild(span);
    }, [textareaRef]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = e.target.value;
      setInternalValue(val);
      onChange?.(e);

      const cursorPosition = e.target.selectionStart;
      const textBeforeCursor = val.substring(0, cursorPosition);
      const words = textBeforeCursor.split(/\s/);
      const currentWord = words[words.length - 1];

      if (currentWord.startsWith(trigger)) {
        setQuery(currentWord.slice(trigger.length));
        setShowSuggestions(true);
        setActiveIndex(0);
        updateCaretPosition();
      } else {
        setShowSuggestions(false);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (!showSuggestions || filteredItems.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(
          (prev) => (prev - 1 + filteredItems.length) % filteredItems.length,
        );
      } else if (e.key === "Enter" || e.key === "Tab") {
        e.preventDefault();
        insertMention(filteredItems[activeIndex]);
      } else if (e.key === "Escape") {
        setShowSuggestions(false);
      }
    };

    const insertMention = (item: MentionItem) => {
      if (!textareaRef.current) return;
      const textarea = textareaRef.current;
      const cursorPosition = textarea.selectionStart;
      const textBeforeCursor = internalValue.substring(0, cursorPosition);
      const textAfterCursor = internalValue.substring(cursorPosition);

      const words = textBeforeCursor.split(/\s/);
      words.pop();
      const newTextBefore = words.length > 0 ? `${words.join(" ")} ` : "";

      const newValue = `${newTextBefore}${trigger}${item.display} ${textAfterCursor}`;
      setInternalValue(newValue);

      const syntheticEvent = {
        target: { value: newValue },
      } as React.ChangeEvent<HTMLTextAreaElement>;
      onChange?.(syntheticEvent);

      setShowSuggestions(false);
      onMention?.(item);

      setTimeout(() => {
        textarea.focus();
        const newPosition =
          newTextBefore.length + trigger.length + item.display.length + 1;
        textarea.setSelectionRange(newPosition, newPosition);
      }, 0);
    };

    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value as string);
      }
    }, [value]);

    useEffect(() => {
      if (!textareaRef.current || !mirrorRef.current) return;
      const textarea = textareaRef.current;
      const mirror = mirrorRef.current;
      const computed = window.getComputedStyle(textarea);

      mirror.style.fontFamily = computed.fontFamily;
      mirror.style.fontSize = computed.fontSize;
      mirror.style.fontWeight = computed.fontWeight;
      mirror.style.fontStyle = computed.fontStyle;
      mirror.style.letterSpacing = computed.letterSpacing;
      mirror.style.lineHeight = computed.lineHeight;
      mirror.style.padding = computed.padding;
      mirror.style.border = computed.border;
      mirror.style.boxSizing = computed.boxSizing;
      mirror.style.whiteSpace = "pre-wrap";
      mirror.style.wordWrap = "break-word";
      mirror.style.position = "absolute";
      mirror.style.top = "0";
      mirror.style.left = "0";
      mirror.style.visibility = "hidden";
      mirror.style.pointerEvents = "none";
      mirror.style.width = computed.width;
    }, [textareaRef]);

    const labelEl = label && (
      <label
        htmlFor={textareaId}
        className="text-xs font-bold text-zinc-900 dark:text-zinc-100 select-none block mb-1.5"
      >
        {label}
        {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
      </label>
    );

    return (
      <div className="w-full flex flex-col">
        {labelEl}
        <div className="relative w-full">
          <textarea
            ref={textareaRef}
            id={textareaId}
            value={internalValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={`w-full min-h-[100px] p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 ${className || ""}`}
            {...props}
          />
          <div ref={mirrorRef} aria-hidden="true" />
          {showSuggestions && filteredItems.length > 0 && (
            <ul
              style={{
                top: `${coords.top}px`,
                left: `${coords.left}px`,
              }}
              className={`absolute z-50 mt-1 max-h-60 w-64 overflow-auto rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1 shadow-lg ${listClassName || ""}`}
            >
              {filteredItems.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => insertMention(item)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-md px-3 py-2 text-sm flex items-center gap-2.5 transition-colors ${
                    index === activeIndex
                      ? activeItemClassName ||
                        "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                      : itemClassName ||
                        "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.display}
                      className="size-6 rounded-full shrink-0 object-cover"
                    />
                  ) : (
                    <div className="size-6 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-bold text-[10px] flex items-center justify-center shrink-0 select-none">
                      {item.display.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium truncate">{item.display}</span>
                    {item.subtitle && (
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  },
);
MentionTextarea.displayName = "MentionTextarea";
