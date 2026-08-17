"use client";

import { Icon } from "@iconify/react";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";
import { designRadius } from "@/lib/design-system";
import { useKeyboardClick } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export type SelectVariant =
  | "default"
  | "bordered"
  | "flat"
  | "underlined"
  | "filled"
  | "glassmorphism"
  | "gradient-border"
  | "glow";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  avatar?: string;
  description?: string;
  badge?: string | React.ReactNode;
  icon?: string;
  group?: string;
  [key: string]: any;
}

export interface SelectProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
    "value" | "defaultValue" | "onValueChange"
  > {
  variant?: SelectVariant;
  size?: "sm" | "md" | "lg";
  radius?: keyof typeof designRadius;
  label?: React.ReactNode;
  placeholder?: string;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  isRequired?: boolean;
  className?: string;
  options?: SelectOption[];

  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;

  isMultiSelect?: boolean;
  multiValue?: string[];
  defaultMultiValue?: string[];
  onMultiValueChange?: (value: string[]) => void;
  maxTagsVisible?: number;

  isSearchable?: boolean;
  searchPlaceholder?: string;
  showBatchActions?: boolean;
  selectAllLabel?: string;
  deselectAllLabel?: string;

  renderOption?: (option: SelectOption) => React.ReactNode;
  renderValue?: (
    optionOrOptions: SelectOption | SelectOption[],
  ) => React.ReactNode;
  children?: React.ReactNode;
}

const variantStyles: Record<SelectVariant, string> = {
  default:
    "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
  bordered:
    "bg-transparent border-2 border-zinc-200 dark:border-zinc-800 focus:border-sky-500 text-zinc-900 dark:text-zinc-100",
  flat: "bg-zinc-100 dark:bg-zinc-800/60 border-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-900 focus:border-sky-500 border text-zinc-900 dark:text-zinc-100",
  underlined:
    "bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 rounded-none px-0 focus:border-sky-500 text-zinc-900 dark:text-zinc-100",
  filled:
    "bg-zinc-100 dark:bg-zinc-800/80 border border-transparent focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
  glassmorphism:
    "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 focus:border-sky-500 shadow-lg text-zinc-900 dark:text-zinc-100",
  "gradient-border":
    "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 relative [background-clip:padding-box] border border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-sky-500 before:via-indigo-500 before:to-pink-500 focus:ring-2 focus:ring-indigo-500/30",
  glow: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus:border-sky-500 focus:shadow-[0_0_12px_rgba(14,165,233,0.35)] text-zinc-900 dark:text-zinc-100",
};

const sizeMap = {
  sm: "min-h-8 px-2.5 text-xs py-1 gap-1.5",
  md: "min-h-10 px-3 text-sm py-1.5 gap-2",
  lg: "min-h-12 px-4 text-base py-2 gap-2.5",
};

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      variant = "default",
      size = "md",
      radius = "lg",
      label,
      placeholder = "Select an option...",
      description,
      errorMessage,
      isInvalid = false,
      isRequired = false,
      className,
      options = [],
      value,
      defaultValue,
      onValueChange,
      isMultiSelect = false,
      multiValue,
      defaultMultiValue = [],
      onMultiValueChange,
      maxTagsVisible = 2,
      isSearchable = false,
      searchPlaceholder = "Search...",
      showBatchActions = false,
      selectAllLabel = "Select All",
      deselectAllLabel = "Deselect All",
      renderOption,
      renderValue,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [singleVal, setSingleVal] = React.useState<string>(
      defaultValue || "",
    );

    const [selectedMulti, setSelectedMulti] =
      React.useState<string[]>(defaultMultiValue);
    const [isOpen, setIsOpen] = React.useState(false);
    const keyboardProps = useKeyboardClick<HTMLDivElement>(!disabled);
    const [searchQuery, setSearchQuery] = React.useState("");

    const currentSingle = value !== undefined ? value : singleVal;
    const currentMulti = multiValue !== undefined ? multiValue : selectedMulti;

    const handleSingleSelect = (val: string) => {
      if (value === undefined) setSingleVal(val);
      onValueChange?.(val);
    };

    const handleMultiToggle = (val: string) => {
      let next: string[];
      if (currentMulti.includes(val)) {
        next = currentMulti.filter((v) => v !== val);
      } else {
        next = [...currentMulti, val];
      }
      if (multiValue === undefined) setSelectedMulti(next);
      onMultiValueChange?.(next);
    };

    const handleSelectAll = () => {
      const allValues = filteredOptions
        .filter((o) => !o.disabled)
        .map((o) => o.value);
      const combined = Array.from(new Set([...currentMulti, ...allValues]));
      if (multiValue === undefined) setSelectedMulti(combined);
      onMultiValueChange?.(combined);
    };

    const handleDeselectAll = () => {
      if (multiValue === undefined) setSelectedMulti([]);
      onMultiValueChange?.([]);
    };

    const handleRemoveTag = (e: React.MouseEvent, val: string) => {
      e.stopPropagation();
      const next = currentMulti.filter((v) => v !== val);
      if (multiValue === undefined) setSelectedMulti(next);
      onMultiValueChange?.(next);
    };

    const filteredOptions = React.useMemo(() => {
      if (!searchQuery.trim()) return options;
      const q = searchQuery.toLowerCase();
      return options.filter(
        (o) =>
          o.label.toLowerCase().includes(q) ||
          o.description?.toLowerCase().includes(q),
      );
    }, [options, searchQuery]);

    const groupedOptions = React.useMemo(() => {
      const groups: Record<string, SelectOption[]> = {};
      const ungrouped: SelectOption[] = [];

      filteredOptions.forEach((opt) => {
        if (opt.group) {
          if (!groups[opt.group]) groups[opt.group] = [];
          groups[opt.group].push(opt);
        } else {
          ungrouped.push(opt);
        }
      });

      return { groups, ungrouped };
    }, [filteredOptions]);

    const renderMultiTriggerContent = () => {
      if (currentMulti.length === 0) {
        return (
          <span className="text-zinc-400 dark:text-zinc-500">
            {placeholder}
          </span>
        );
      }

      const selectedOptions = options.filter((o) =>
        currentMulti.includes(o.value),
      );
      if (renderValue) {
        return renderValue(selectedOptions);
      }

      const visible = selectedOptions.slice(0, maxTagsVisible);
      const hiddenCount = selectedOptions.length - maxTagsVisible;

      return (
        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
          {visible.map((opt) => (
            <span
              key={opt.value}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shrink-0"
            >
              {opt.avatar && (
                <img
                  src={opt.avatar}
                  alt=""
                  className="size-3.5 rounded-full object-cover shrink-0"
                />
              )}
              <span className="truncate max-w-[100px]">{opt.label}</span>
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => handleRemoveTag(e, opt.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleRemoveTag(e as any, opt.value);
                  }
                }}
                className="hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded p-0.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
              >
                <Icon icon="hugeicons:cancel-01" className="size-3" />
              </span>
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-semibold border border-sky-200 dark:border-sky-800/60">
              +{hiddenCount}
            </span>
          )}
        </div>
      );
    };

    if (children && !isMultiSelect && options.length === 0) {
      return (
        <div ref={ref} className="w-full flex flex-col gap-1.5">
          {label && (
            <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              {label}
              {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
            </label>
          )}
          <SelectPrimitive.Root
            value={currentSingle}
            defaultValue={defaultValue}
            onValueChange={handleSingleSelect}
            open={isOpen}
            onOpenChange={setIsOpen}
            disabled={disabled}
            {...props}
          >
            {children}
          </SelectPrimitive.Root>
          {isInvalid && errorMessage ? (
            <p className="text-xs text-rose-500 font-medium">{errorMessage}</p>
          ) : description ? (
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              {description}
            </p>
          ) : null}
        </div>
      );
    }

    const selectedSingleOpt = options.find((o) => o.value === currentSingle);
    const renderSingleTriggerContent = () => {
      if (!selectedSingleOpt) {
        return (
          <span className="text-zinc-400 dark:text-zinc-500">
            {placeholder}
          </span>
        );
      }
      if (renderValue) {
        return renderValue(selectedSingleOpt);
      }
      return (
        <div className="flex items-center gap-2 truncate">
          {selectedSingleOpt.avatar && (
            <img
              src={selectedSingleOpt.avatar}
              alt=""
              className="size-5 rounded-full object-cover shrink-0"
            />
          )}
          {selectedSingleOpt.icon && (
            <Icon
              icon={selectedSingleOpt.icon}
              className="size-4 text-zinc-500 shrink-0"
            />
          )}
          <span className="truncate">{selectedSingleOpt.label}</span>
          {selectedSingleOpt.badge && (
            <span className="ml-auto px-1.5 py-0.5 rounded text-[10px] font-semibold bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
              {selectedSingleOpt.badge}
            </span>
          )}
        </div>
      );
    };

    return (
      <div ref={ref} className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            {label}
            {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
          </label>
        )}

        <div className="relative w-full">
          <div
            onClick={() => !disabled && setIsOpen((prev) => !prev)}
            className={cn(
              "flex w-full items-center justify-between transition-colors outline-none cursor-pointer select-none",
              variantStyles[variant],
              sizeMap[size],
              variant !== "underlined" && designRadius[radius],
              isInvalid &&
                "border-rose-500 focus:ring-rose-500/20 text-rose-500",
              disabled && "cursor-not-allowed opacity-50 pointer-events-none",
              className,
            )}
            role="button"
            tabIndex={disabled ? -1 : 0}
            {...keyboardProps}
          >
            <div className="flex-1 min-w-0 text-left">
              {isMultiSelect
                ? renderMultiTriggerContent()
                : renderSingleTriggerContent()}
            </div>
            <Icon
              icon="hugeicons:arrow-down-01"
              className={cn(
                "size-4 opacity-50 shrink-0 transition-transform duration-200 ml-2",
                isOpen && "rotate-180",
              )}
            />
          </div>

          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />

              <div
                className={cn(
                  "absolute left-0 right-0 top-full mt-1.5 z-50 max-h-80 overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl p-1.5 animate-in fade-in-0 zoom-in-95",
                )}
              >
                {(isSearchable || options.length > 6) && (
                  <div className="p-1 mb-1 border-b border-zinc-100 dark:border-zinc-800/80 sticky top-0 bg-white/95 dark:bg-zinc-900/95 z-10">
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/70 border border-transparent focus-within:border-sky-500">
                      <Icon
                        icon="hugeicons:search-01"
                        className="size-4 text-zinc-400 shrink-0"
                      />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={searchPlaceholder}
                        className="w-full bg-transparent text-xs outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                        onClick={(e) => e.stopPropagation()}
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                        >
                          <Icon
                            icon="hugeicons:cancel-01"
                            className="size-3.5"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {isMultiSelect && showBatchActions && (
                  <div className="flex items-center justify-between px-2 py-1.5 mb-1 border-b border-zinc-100 dark:border-zinc-800/80 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={handleSelectAll}
                      className="text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
                    >
                      {selectAllLabel}
                    </button>
                    <button
                      type="button"
                      onClick={handleDeselectAll}
                      className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                    >
                      {deselectAllLabel}
                    </button>
                  </div>
                )}

                {filteredOptions.length === 0 ? (
                  <div className="py-6 text-center text-xs text-zinc-400 dark:text-zinc-500">
                    No options found.
                  </div>
                ) : (
                  <div className="space-y-1">
                    {Object.entries(groupedOptions.groups).map(
                      ([groupName, groupOpts]) => (
                        <div key={groupName} className="space-y-0.5">
                          <div className="px-2.5 py-1 text-[10px] font-bold tracking-wider text-zinc-400 uppercase sticky top-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md z-10 border-b border-zinc-100 dark:border-zinc-800/50">
                            {groupName}
                          </div>
                          {groupOpts.map((opt) =>
                            renderOptionItem(
                              opt,
                              isMultiSelect,
                              currentSingle,
                              currentMulti,
                              handleSingleSelect,
                              handleMultiToggle,
                              setIsOpen,
                              renderOption,
                            ),
                          )}
                        </div>
                      ),
                    )}

                    {groupedOptions.ungrouped.map((opt) =>
                      renderOptionItem(
                        opt,
                        isMultiSelect,
                        currentSingle,
                        currentMulti,
                        handleSingleSelect,
                        handleMultiToggle,
                        setIsOpen,
                        renderOption,
                      ),
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {isInvalid && errorMessage ? (
          <p className="text-xs text-rose-500 font-medium">{errorMessage}</p>
        ) : description ? (
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            {description}
          </p>
        ) : null}
      </div>
    );
  },
);
Select.displayName = "Select";

function renderOptionItem(
  opt: SelectOption,
  isMultiSelect: boolean,
  currentSingle: string,
  currentMulti: string[],
  handleSingleSelect: (val: string) => void,
  handleMultiToggle: (val: string) => void,
  setIsOpen: (open: boolean) => void,
  renderOption?: (opt: SelectOption) => React.ReactNode,
) {
  const isSelected = isMultiSelect
    ? currentMulti.includes(opt.value)
    : currentSingle === opt.value;

  return (
    <div
      key={opt.value}
      onClick={() => {
        if (opt.disabled) return;
        if (isMultiSelect) {
          handleMultiToggle(opt.value);
        } else {
          handleSingleSelect(opt.value);
          setIsOpen(false);
        }
      }}
      className={cn(
        "relative flex items-center justify-between w-full px-2.5 py-2 rounded-xl text-xs cursor-pointer transition-colors select-none",
        isSelected
          ? "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 font-semibold"
          : "hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100",
        opt.disabled && "opacity-40 cursor-not-allowed pointer-events-none",
      )}
    >
      {renderOption ? (
        renderOption(opt)
      ) : (
        <div className="flex items-center gap-2.5 min-w-0 flex-1 pr-2">
          {opt.avatar && (
            <img
              src={opt.avatar}
              alt=""
              className="size-6 rounded-full object-cover shrink-0"
            />
          )}
          {opt.icon && (
            <Icon icon={opt.icon} className="size-4 text-zinc-400 shrink-0" />
          )}
          <div className="flex flex-col min-w-0">
            <span className="truncate">{opt.label}</span>
            {opt.description && (
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate font-normal">
                {opt.description}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 shrink-0">
        {opt.badge && (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {opt.badge}
          </span>
        )}
        {isSelected && (
          <Icon icon="hugeicons:tick-02" className="size-4 text-sky-500" />
        )}
      </div>
    </div>
  );
}

const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "md" | "lg";
    radius?: keyof typeof designRadius;
    isInvalid?: boolean;
  }
>(
  (
    { className, children, size = "md", radius = "lg", isInvalid, ...props },
    ref,
  ) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs focus:outline-none focus:ring-2 focus:ring-sky-500/20 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer transition-colors",
        sizeMap[size],
        designRadius[radius],
        isInvalid && "border-rose-500 focus:ring-rose-500/20 text-rose-500",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <Icon
          icon="hugeicons:arrow-down-01"
          className="size-4 opacity-50 shrink-0"
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  ),
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1.5",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "py-1.5 pl-8 pr-2 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider",
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-xl py-2 pl-8 pr-3 text-sm outline-none focus:bg-zinc-100 dark:focus:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2.5 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Icon icon="hugeicons:tick-02" className="size-4 text-sky-500" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-zinc-200 dark:bg-zinc-800", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
