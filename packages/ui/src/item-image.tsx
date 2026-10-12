import { Icon } from "@junhadex/core";
import { Shirt } from "lucide";

// 크기와 비율은 부모가 정한다. 이미지가 없으면 로컬 SVG 플레이스홀더를 그린다.
export function ItemImage({ src }: { src: string | null }) {
  if (src) return <img src={src} alt="" className="size-full object-cover" />;
  return (
    <div className="flex size-full items-center justify-center bg-neutral-subtle text-on-neutral-subtle">
      <Icon node={Shirt} size={32} aria-hidden />
    </div>
  );
}
