import type { Category } from "@repo/contracts";
import { categoryLabels } from "./category";

export function CategorySummary({
  counts,
}: {
  counts: Record<Category, number>;
}) {
  return (
    <ul className="grid grid-cols-3 gap-2">
      {(Object.keys(categoryLabels) as Category[]).map((c) => (
        <li
          key={c}
          className="flex flex-col gap-1 rounded-surface border border-border bg-surface-raised p-3"
        >
          <span className="text-xs text-on-surface-muted">
            {categoryLabels[c]}
          </span>
          <span className="text-lg font-bold">{counts[c]}</span>
        </li>
      ))}
    </ul>
  );
}
