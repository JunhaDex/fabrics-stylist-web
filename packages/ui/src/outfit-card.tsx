import { Badge } from "@junhadex/core";
import type { Outfit } from "@repo/contracts";
import { ItemCard } from "./item-card";

export function OutfitCard({ outfit }: { outfit: Outfit }) {
  return (
    <div className="flex flex-col gap-4 rounded-surface border border-border bg-surface-raised p-4">
      <ul className="flex flex-wrap gap-2">
        {outfit.tags.map((tag) => (
          <li key={tag}>
            <Badge tone="brand" appearance="subtle">
              #{tag}
            </Badge>
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-2 gap-3">
        {outfit.items.map((item) => (
          <li key={item.id}>
            <ItemCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
