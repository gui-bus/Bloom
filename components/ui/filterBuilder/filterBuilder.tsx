"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

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
    } catch (e) {
      // ignore
    }
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
      } catch (e) {
        // ignore
      }
    }
    onSavePreset?.(newPreset);
    setPresetName("");
  };

  const loadPreset = (preset: FilterBuilderPreset) => {
    onChange(preset.filter);
  };

  const selectClasses =
    "h-9 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors";

  const inputClasses =
    "h-9 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors";

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
          "space-y-3 p-3 rounded-2xl border transition-colors",
          depth === 0
            ? "border-transparent"
            : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30 ml-2 sm:ml-4",
        )}
      >
        {currentGroup.rules.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className="flex justify-center my-1">
                <button
                  type="button"
                  onClick={toggleConjunction}
                  className="px-3 py-1 rounded-full text-xs font-bold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-xs"
                >
                  {currentGroup.conjunction}
                </button>
              </div>
            )}

            {isGroupNode(item) ? (
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold text-zinc-400">
                    Nested Group ({item.conjunction})
                  </span>
                  <button
                    type="button"
                    onClick={() => removeRuleOrGroup(index)}
                    className="text-xs text-rose-500 hover:underline"
                  >
                    Remove Sub-clause
                  </button>
                </div>
                {renderGroup(
                  item,
                  (subUpdated) => updateRuleOrGroup(index, subUpdated),
                  depth + 1,
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2 flex-wrap">
                <select
                  value={item.field}
                  onChange={(e) =>
                    updateRuleOrGroup(index, { ...item, field: e.target.value })
                  }
                  className={cn(selectClasses, "min-w-[120px]")}
                >
                  {fields.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.label}
                    </option>
                  ))}
                </select>

                <select
                  value={item.operator}
                  onChange={(e) =>
                    updateRuleOrGroup(index, {
                      ...item,
                      operator: e.target.value as FilterRule["operator"],
                    })
                  }
                  className={cn(selectClasses, "min-w-[120px]")}
                >
                  {operatorOptions.map((op) => (
                    <option key={op.value} value={op.value}>
                      {op.label}
                    </option>
                  ))}
                </select>

                {fields.find((f) => f.id === item.field)?.type === "select" ? (
                  <select
                    value={String(item.value)}
                    onChange={(e) =>
                      updateRuleOrGroup(index, {
                        ...item,
                        value: e.target.value,
                      })
                    }
                    className={cn(selectClasses, "flex-1 min-w-[120px]")}
                  >
                    <option value="">Select...</option>
                    {fields
                      .find((f) => f.id === item.field)
                      ?.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                  </select>
                ) : (
                  <input
                    type={
                      fields.find((f) => f.id === item.field)?.type === "number"
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
                    placeholder="Value..."
                    className={cn(inputClasses, "flex-1 min-w-[120px]")}
                  />
                )}

                <button
                  type="button"
                  onClick={() => removeRuleOrGroup(index)}
                  className="flex items-center justify-center size-9 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-rose-500 hover:border-rose-300 dark:hover:border-rose-700 transition-colors"
                >
                  <Icon icon="hugeicons:delete-02" className="size-4" />
                </button>
              </div>
            )}
          </React.Fragment>
        ))}

        <div className="flex items-center gap-2 pt-2">
          <button
            type="button"
            onClick={addRule}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-sky-600 bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-100 transition-colors"
          >
            <Icon icon="hugeicons:add-circle" className="size-3.5" />
            Add Rule
          </button>
          <button
            type="button"
            onClick={addSubGroup}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 transition-colors"
          >
            <Icon icon="hugeicons:structure-01" className="size-3.5" />
            Add Sub-group
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 space-y-4",
        className,
      )}
    >
      {renderGroup(value, onChange)}

      {/* Footer Preset Save & Export Utilities */}
      <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Preset query name..."
            value={presetName}
            onChange={(e) => setPresetName(e.target.value)}
            className="h-8 px-2.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 outline-none flex-1 max-w-xs"
          />
          <button
            type="button"
            onClick={saveCurrentPreset}
            disabled={!presetName.trim()}
            className="h-8 px-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 disabled:opacity-40 transition-opacity"
          >
            Save Preset
          </button>
        </div>

        {enableExport && (
          <button
            type="button"
            onClick={() => setShowExportModal(true)}
            className="h-8 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors flex items-center gap-1.5"
          >
            <Icon icon="hugeicons:code" className="size-3.5" />
            Export Query
          </button>
        )}
      </div>

      {savedPresets.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap pt-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            Presets:
          </span>
          {savedPresets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => loadPreset(preset)}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:text-sky-600 transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>
      )}

      {/* Export Query Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Export Formatted Query
              </h3>
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400"
              >
                <Icon icon="hugeicons:cancel-01" className="size-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
              {(["sql", "mongodb", "graphql"] as const).map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => setActiveFormat(fmt)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-colors",
                    activeFormat === fmt
                      ? "bg-sky-600 text-white"
                      : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800",
                  )}
                >
                  {fmt}
                </button>
              ))}
            </div>

            <div className="p-3 bg-zinc-950 rounded-xl text-zinc-200 text-xs font-mono overflow-x-auto max-h-60 border border-zinc-800">
              <pre>{exportQuery(value, activeFormat)}</pre>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
