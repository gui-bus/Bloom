"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import { CodeBlock } from "@/components/ui/codeBlock/codeBlock";
import { Input } from "@/components/ui/input/input";
import { Select } from "@/components/ui/select/select";
import { cn } from "@/lib/utils";

export interface FilterField {
  id: string;
  label: string;
  type: "text" | "number" | "select";
  options?: { label: string; value: string }[];
}

export interface FilterRule {
  id?: string;
  field: string;
  operator: "equals" | "contains" | "greater_than" | "less_than";
  value: string | number;
}

export interface FilterGroupNode {
  id?: string;
  conjunction: "AND" | "OR";
  rules: (FilterRule | FilterGroupNode)[];
}

export type FilterGroup = FilterGroupNode;

export interface FilterBuilderPreset {
  id: string;
  name: string;
  filter: FilterGroup;
}

interface FilterBuilderProps {
  fields: FilterField[];
  value: FilterGroup;
  onChange: (filter: FilterGroup) => void;
  storageKey?: string;
  onSavePreset?: (preset: FilterBuilderPreset) => void;
  enableExport?: boolean;
  className?: string;
}

const operatorOptions = [
  { value: "equals", label: "Equals" },
  { value: "contains", label: "Contains" },
  { value: "greater_than", label: "Greater than" },
  { value: "less_than", label: "Less than" },
];

export function isGroupNode(
  item: FilterRule | FilterGroupNode,
): item is FilterGroupNode {
  return "conjunction" in item && Array.isArray(item.rules);
}

export function exportQuery(
  group: FilterGroup,
  format: "sql" | "mongodb" | "graphql",
): string {
  if (format === "sql") {
    const clause = group.rules
      .map((r) => {
        if (isGroupNode(r)) return `(${exportQuery(r, "sql")})`;
        const val = typeof r.value === "string" ? `'${r.value}'` : r.value;
        if (r.operator === "equals") return `${r.field} = ${val}`;
        if (r.operator === "contains") return `${r.field} LIKE '%${r.value}%'`;
        if (r.operator === "greater_than") return `${r.field} > ${val}`;
        if (r.operator === "less_than") return `${r.field} < ${val}`;
        return "";
      })
      .join(` ${group.conjunction} `);
    return clause;
  }

  if (format === "mongodb") {
    const rulesObj = group.rules.map((r) => {
      if (isGroupNode(r)) return JSON.parse(exportQuery(r, "mongodb"));
      if (r.operator === "equals") return { [r.field]: r.value };
      if (r.operator === "contains")
        return { [r.field]: { $regex: r.value, $options: "i" } };
      if (r.operator === "greater_than") return { [r.field]: { $gt: r.value } };
      if (r.operator === "less_than") return { [r.field]: { $lt: r.value } };
      return {};
    });
    const key = group.conjunction === "AND" ? "$and" : "$or";
    return JSON.stringify({ [key]: rulesObj }, null, 2);
  }

  if (format === "graphql") {
    const rulesObj = group.rules.map((r) => {
      if (isGroupNode(r)) return JSON.parse(exportQuery(r, "graphql"));
      return { field: r.field, operator: r.operator, value: r.value };
    });
    return JSON.stringify(
      { logical: group.conjunction, conditions: rulesObj },
      null,
      2,
    );
  }

  return "";
}

export function FilterBuilder({
  fields,
  value,
  onChange,
  storageKey,
  onSavePreset,
  enableExport = true,
  className,
}: FilterBuilderProps) {
  const [presetName, setPresetName] = React.useState("");
  const [savedPresets, setSavedPresets] = React.useState<FilterBuilderPreset[]>(
    [],
  );
  const [activeFormat, setActiveFormat] = React.useState<
    "sql" | "mongodb" | "graphql"
  >("sql");
  const [showExportModal, setShowExportModal] = React.useState(false);

  React.useEffect(() => {
    if (!storageKey) return;
    try {
      const stored = localStorage.getItem(`zoe_filter_${storageKey}`);
      if (stored) {
        setSavedPresets(JSON.parse(stored));
      }
    } catch (_e) {}
  }, [storageKey]);

  const saveCurrentPreset = () => {
    if (!presetName.trim()) return;
    const newPreset: FilterBuilderPreset = {
      id: String(Date.now()),
      name: presetName.trim(),
      filter: value,
    };
    const updated = [...savedPresets, newPreset];
    setSavedPresets(updated);
    if (storageKey) {
      try {
        localStorage.setItem(
          `zoe_filter_${storageKey}`,
          JSON.stringify(updated),
        );
      } catch (_e) {}
    }
    onSavePreset?.(newPreset);
    setPresetName("");
  };

  const loadPreset = (preset: FilterBuilderPreset) => {
    onChange(preset.filter);
  };

  const deletePreset = (presetId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = savedPresets.filter((p) => p.id !== presetId);
    setSavedPresets(updated);
    if (storageKey) {
      try {
        localStorage.setItem(
          `zoe_filter_${storageKey}`,
          JSON.stringify(updated),
        );
      } catch (_e) {}
    }
  };

  const renderGroup = (
    currentGroup: FilterGroupNode,
    onGroupChange: (updated: FilterGroupNode) => void,
    depth = 0,
  ) => {
    const updateRuleOrGroup = (
      index: number,
      updatedItem: FilterRule | FilterGroupNode,
    ) => {
      const newRules = [...currentGroup.rules];
      newRules[index] = updatedItem;
      onGroupChange({ ...currentGroup, rules: newRules });
    };

    const removeRuleOrGroup = (index: number) => {
      onGroupChange({
        ...currentGroup,
        rules: currentGroup.rules.filter((_, i) => i !== index),
      });
    };

    const addRule = () => {
      const firstField = fields[0]?.id ?? "";
      onGroupChange({
        ...currentGroup,
        rules: [
          ...currentGroup.rules,
          { field: firstField, operator: "equals", value: "" },
        ],
      });
    };

    const addSubGroup = () => {
      const firstField = fields[0]?.id ?? "";
      const subGroup: FilterGroupNode = {
        conjunction: "AND",
        rules: [{ field: firstField, operator: "equals", value: "" }],
      };
      onGroupChange({
        ...currentGroup,
        rules: [...currentGroup.rules, subGroup],
      });
    };

    const toggleConjunction = () => {
      onGroupChange({
        ...currentGroup,
        conjunction: currentGroup.conjunction === "AND" ? "OR" : "AND",
      });
    };

    return (
      <div
        className={cn(
          "space-y-4 p-4 rounded-2xl border transition-colors duration-200",
          depth === 0
            ? "border-transparent p-0"
            : "border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 ml-2 sm:ml-6",
        )}
      >
        {currentGroup.rules.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className="flex items-center gap-4 py-1">
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800/60" />
                <Button
                  variant="bordered"
                  size="sm"
                  onClick={toggleConjunction}
                  className="h-7 px-3 text-xs font-bold rounded-full border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-2xs cursor-pointer active:scale-95"
                >
                  {currentGroup.conjunction}
                </Button>
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800/60" />
              </div>
            )}

            {isGroupNode(item) ? (
              <div className="relative border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-2 bg-white/50 dark:bg-zinc-950/20 shadow-2xs">
                <div className="flex items-center justify-between px-3 py-1 mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500">
                    Nested Group ({item.conjunction})
                  </span>
                  <Button
                    variant="flat"
                    size="sm"
                    color="danger"
                    onClick={() => removeRuleOrGroup(index)}
                    className="h-6 px-2 text-xs rounded-lg font-semibold"
                  >
                    Remove Group
                  </Button>
                </div>
                {renderGroup(
                  item,
                  (subUpdated) => updateRuleOrGroup(index, subUpdated),
                  depth + 1,
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3 flex-wrap bg-white dark:bg-zinc-900/40 p-2 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl shadow-3xs">
                <div className="w-full sm:w-[160px]">
                  <Select
                    value={item.field}
                    onValueChange={(val) =>
                      updateRuleOrGroup(index, { ...item, field: val })
                    }
                    options={fields.map((f) => ({
                      value: f.id,
                      label: f.label,
                    }))}
                    placeholder="Field"
                    className="w-full"
                    size="sm"
                  />
                </div>

                <div className="w-full sm:w-[130px]">
                  <Select
                    value={item.operator}
                    onValueChange={(val) =>
                      updateRuleOrGroup(index, {
                        ...item,
                        operator: val as FilterRule["operator"],
                      })
                    }
                    options={operatorOptions}
                    placeholder="Operator"
                    className="w-full"
                    size="sm"
                  />
                </div>

                <div className="flex-1 min-w-[150px]">
                  {fields.find((f) => f.id === item.field)?.type ===
                  "select" ? (
                    <Select
                      value={String(item.value)}
                      onValueChange={(val) =>
                        updateRuleOrGroup(index, {
                          ...item,
                          value: val,
                        })
                      }
                      options={
                        fields
                          .find((f) => f.id === item.field)
                          ?.options?.map((opt) => ({
                            value: opt.value,
                            label: opt.label,
                          })) || []
                      }
                      placeholder="Select value..."
                      className="w-full"
                      size="sm"
                    />
                  ) : (
                    <Input
                      type={
                        fields.find((f) => f.id === item.field)?.type ===
                        "number"
                          ? "number"
                          : "text"
                      }
                      value={String(item.value)}
                      onChange={(e) =>
                        updateRuleOrGroup(index, {
                          ...item,
                          value:
                            fields.find((f) => f.id === item.field)?.type ===
                            "number"
                              ? Number(e.target.value)
                              : e.target.value,
                        })
                      }
                      placeholder="Enter value..."
                      className="w-full"
                      size="sm"
                    />
                  )}
                </div>

                <Button
                  variant="bordered"
                  size="sm"
                  isIconOnly
                  onClick={() => removeRuleOrGroup(index)}
                  className="h-8 w-8 rounded-xl border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-rose-500 hover:border-rose-300 dark:hover:border-rose-800 transition-colors shadow-2xs"
                  ariaLabel="Delete rule"
                >
                  <Icon icon="hugeicons:delete-02" className="size-4" />
                </Button>
              </div>
            )}
          </React.Fragment>
        ))}

        <div className="flex items-center gap-2 pt-2">
          <Button
            variant="flat"
            size="sm"
            onClick={addRule}
            startContent={
              <Icon
                icon="hugeicons:add-circle"
                className="size-3.5 text-sky-500"
              />
            }
            className="h-8 text-xs font-semibold rounded-xl text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/20 hover:bg-sky-100 dark:hover:bg-sky-950/40"
          >
            Add Rule
          </Button>
          <Button
            variant="flat"
            size="sm"
            onClick={addSubGroup}
            startContent={
              <Icon
                icon="hugeicons:structure-01"
                className="size-3.5 text-indigo-500"
              />
            }
            className="h-8 text-xs font-semibold rounded-xl text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20 hover:bg-indigo-100 dark:hover:bg-indigo-950/40"
          >
            Add Sub-group
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 p-6 space-y-6 shadow-xs",
        className,
      )}
    >
      {renderGroup(value, onChange)}

      <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 min-w-[240px]">
          <Input
            size="sm"
            variant="flat"
            placeholder="Preset query name..."
            value={presetName}
            onChange={(e) => setPresetName(e.target.value)}
            className="max-w-xs w-full"
          />
          <Button
            size="sm"
            variant="flat"
            color="default"
            onClick={saveCurrentPreset}
            disabled={!presetName.trim()}
            className="h-8 font-semibold rounded-xl shrink-0"
          >
            Save Preset
          </Button>
        </div>

        {enableExport && (
          <Button
            variant="default"
            color="primary"
            size="sm"
            onClick={() => setShowExportModal(true)}
            startContent={<Icon icon="hugeicons:code" className="size-3.5" />}
            className="h-8 rounded-xl font-semibold"
          >
            Export Query
          </Button>
        )}
      </div>

      {savedPresets.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-zinc-100 dark:border-zinc-900/60">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Presets:
          </span>
          {savedPresets.map((preset) => (
            <Badge
              key={preset.id}
              variant="flat"
              color="default"
              isRemovable
              onRemove={() => {
                const event = { stopPropagation: () => {} } as any;
                deletePreset(preset.id, event);
              }}
              onClick={() => loadPreset(preset)}
              className="cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              {preset.name}
            </Badge>
          ))}
        </div>
      )}

      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="w-full max-w-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
                Export Formatted Query
              </h3>
              <Button
                variant="flat"
                size="sm"
                isIconOnly
                onClick={() => setShowExportModal(false)}
                className="h-7 w-7 rounded-lg text-zinc-400"
                ariaLabel="Close modal"
              >
                <Icon icon="hugeicons:cancel-01" className="size-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-2">
              {(["sql", "mongodb", "graphql"] as const).map((fmt) => (
                <Button
                  key={fmt}
                  variant={activeFormat === fmt ? "default" : "flat"}
                  size="sm"
                  onClick={() => setActiveFormat(fmt)}
                  className="h-7 px-3 text-xs font-bold uppercase rounded-lg"
                >
                  {fmt}
                </Button>
              ))}
            </div>

            <CodeBlock
              variant="mac"
              code={exportQuery(value, activeFormat)}
              language={activeFormat === "sql" ? "sql" : "json"}
              maxHeight={200}
              showCopy
            />

            <div className="flex justify-end pt-2">
              <Button
                size="sm"
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 rounded-xl font-semibold"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
