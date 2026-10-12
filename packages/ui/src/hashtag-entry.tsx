import { Icon } from "@junhadex/core";
import { Hash } from "lucide";

// 입력은 styling zone이 맡는다. 홈에서는 입력창 모양의 진입 링크만 둔다.
export function HashtagEntry() {
  return (
    <a
      href="/styling"
      className="flex min-h-11 items-center gap-2 rounded-control border border-border bg-field px-3 text-sm text-on-surface-muted"
    >
      <Icon node={Hash} size={18} aria-hidden />
      오늘의 TPO를 해시태그로 입력하세요
    </a>
  );
}
