export const filterBuilderCode = `"use client";

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
  field: string;
  operator: "equals" | "contains" | "greater_than" | "less_than";
  value: string | number;
}

export interface FilterGroup {
  conjunction: "AND" | "OR";
  rules: FilterRule[];
}

interface FilterBuilderProps {
  fields: FilterField[];
  value: FilterGroup;
  onChange: (filter: FilterGroup) => void;
  className?: string;
}

const operatorOptions = [
  { value: "equals", label: "Equals" },
  { value: "contains", label: "Contains" },
  { value: "greater_than", label: "Greater than" },
  { value: "less_than", label: "Less than" },
];

export function FilterBuilder({ fields, value, onChange, className }: FilterBuilderProps) {
  const updateRule = (index: number, patch: Partial<FilterRule>) => {
    const newRules = [...value.rules];
    newRules[index] = { ...newRules[index], ...patch };
    onChange({ ...value, rules: newRules });
  };

  const addRule = () => {
    const firstField = fields[0]?.id ?? "";
    onChange({ ...value, rules: [...value.rules, { field: firstField, operator: "equals", value: "" }] });
  };

  const removeRule = (index: number) => {
    onChange({ ...value, rules: value.rules.filter((_, i) => i !== index) });
  };

  const toggleConjunction = () => {
    onChange({ ...value, conjunction: value.conjunction === "AND" ? "OR" : "AND" });
  };

  return (
    <div className={cn("rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4", className)}>
      <div className="space-y-3">
        {value.rules.map((rule, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className="flex justify-center">
                <button type="button" onClick={toggleConjunction} className="px-3 py-1 rounded-full text-xs font-bold border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">{value.conjunction}</button>
              </div>
            )}
            <div className="flex items-center gap-2 flex-wrap">
              <select value={rule.field} onChange={(e) => updateRule(index, { field: e.target.value })} className="h-9 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm outline-none min-w-[120px]">
                {fields.map((f) => <option key={f.id} value={f.id}>{f.label}</option>)}
              </select>
              <select value={rule.operator} onChange={(e) => updateRule(index, { operator: e.target.value as FilterRule["operator"] })} className="h-9 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm outline-none min-w-[120px]">
                {operatorOptions.map((op) => <option key={op.value} value={op.value}>{op.label}</option>)}
              </select>
              <input type="text" value={String(rule.value)} onChange={(e) => updateRule(index, { value: e.target.value })} placeholder="Value..." className="h-9 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm outline-none flex-1 min-w-[120px]" />
              <button type="button" onClick={() => removeRule(index)} className="size-9 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-rose-500 transition-colors flex items-center justify-center">
                <Icon icon="hugeicons:delete-02" className="size-4" />
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
      <button type="button" onClick={addRule} className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-sky-500 bg-sky-500/5 hover:bg-sky-500/10 transition-colors">
        <Icon icon="hugeicons:add-circle" className="size-4" />Add Rule
      </button>
    </div>
  );
}`;
