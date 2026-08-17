import { Check, ChevronDown, ChevronRight, Copy } from "lucide-react";
import { useState } from "react";

export interface JsonTreeViewerProps {
  data: any;
  name?: string;
  defaultExpanded?: boolean;
  isLast?: boolean;
}

const JsonNode = React.memo<{
  keyName?: string;
  value: any;
  defaultExpanded?: boolean;
  isLast?: boolean;
}>(({ keyName, value, defaultExpanded = false, isLast = true }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const isObject = value !== null && typeof value === "object";
  const isArray = Array.isArray(value);

  const toggle = () => setExpanded(!expanded);

  const renderValue = (val: any) => {
    if (val === null) return <span className="text-zinc-500">null</span>;
    if (typeof val === "boolean")
      return (
        <span className="text-blue-500 dark:text-blue-400">
          {val ? "true" : "false"}
        </span>
      );
    if (typeof val === "number")
      return (
        <span className="text-orange-500 dark:text-orange-400">{val}</span>
      );
    if (typeof val === "string")
      return (
        <span className="text-green-600 dark:text-green-400">"{val}"</span>
      );
    return <span>{String(val)}</span>;
  };

  if (!isObject) {
    return (
      <div className="pl-4 font-mono text-sm leading-6">
        {keyName && (
          <span className="text-purple-600 dark:text-purple-400">
            "{keyName}"
          </span>
        )}
        {keyName && (
          <span className="text-zinc-800 dark:text-zinc-200">: </span>
        )}
        {renderValue(value)}
        {!isLast && <span className="text-zinc-800 dark:text-zinc-200">,</span>}
      </div>
    );
  }

  const keys = Object.keys(value);
  const isEmpty = keys.length === 0;
  const openBracket = isArray ? "[" : '{"';
  const closeBracket = isArray ? "]" : '}"';

  if (isEmpty) {
    return (
      <div className="pl-4 font-mono text-sm leading-6">
        {keyName && (
          <span className="text-purple-600 dark:text-purple-400">
            "{keyName}"
          </span>
        )}
        {keyName && (
          <span className="text-zinc-800 dark:text-zinc-200">: </span>
        )}
        <span className="text-zinc-800 dark:text-zinc-200">
          {openBracket}
          {closeBracket}
        </span>
        {!isLast && <span className="text-zinc-800 dark:text-zinc-200">,</span>}
      </div>
    );
  }

  return (
    <div className="font-mono text-sm leading-6">
      <div
        className="flex items-center cursor-pointer select-none pl-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md py-0.5"
        onClick={toggle}
      >
        <span className="mr-1 text-zinc-500 flex items-center justify-center w-4 h-4">
          {expanded ? (
            <ChevronDown className="w-3 h-3" />
          ) : (
            <ChevronRight className="w-3 h-3" />
          )}
        </span>
        {keyName && (
          <>
            <span className="text-purple-600 dark:text-purple-400">
              "{keyName}"
            </span>
            <span className="text-zinc-800 dark:text-zinc-200 mr-1">: </span>
          </>
        )}
        <span className="text-zinc-800 dark:text-zinc-200">
          {openBracket}
          {!expanded && <span className="text-zinc-500 mx-1">...</span>}
          {!expanded && closeBracket}
          {!expanded && !isLast && (
            <span className="text-zinc-800 dark:text-zinc-200">,</span>
          )}
        </span>
      </div>
      {expanded && (
        <div className="pl-4 border-l border-zinc-200 dark:border-zinc-700 ml-6">
          {keys.map((key, index) => (
            <JsonNode
              key={key}
              keyName={isArray ? undefined : key}
              value={value[key as keyof typeof value]}
              defaultExpanded={defaultExpanded}
              isLast={index === keys.length - 1}
            />
          ))}
        </div>
      )}
      {expanded && (
        <div className="pl-4">
          <span className="text-zinc-800 dark:text-zinc-200">
            {closeBracket}
          </span>
          {!isLast && (
            <span className="text-zinc-800 dark:text-zinc-200">,</span>
          )}
        </div>
      )}
    </div>
  );
});
JsonNode.displayName = "JsonNode";

export function JsonTreeViewer({
  data,
  name,
  defaultExpanded = true,
}: JsonTreeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-x-auto">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
        aria-label="Copy JSON"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
      <div className="-ml-4 mt-2">
        <JsonNode
          keyName={name}
          value={data}
          defaultExpanded={defaultExpanded}
          isLast={true}
        />
      </div>
    </div>
  );
}
