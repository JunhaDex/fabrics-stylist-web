import type { Item } from "@repo/contracts";
import { categoryLabels } from "./category";
import { ItemImage } from "./item-image";

export function ItemCard({ item }: { item: Item }) {
  return (
    <article className="flex flex-col gap-2">
      <div className="aspect-square overflow-hidden rounded-surface">
        <ItemImage src={item.imageUrl} />
      </div>
      <div>
        <p className="truncate text-sm font-medium">{item.name}</p>
        <p className="text-xs text-on-surface-muted">
          {categoryLabels[item.category]}
        </p>
      </div>
    </article>
  );
}
