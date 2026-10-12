"use client";

import { Button, Icon } from "@junhadex/core";
import { Moon, Sun } from "lucide";
import { MODE_COOKIE } from "./mode-cookie";

// 쿠키를 쓰고 <html data-mode>를 바로 바꾼다. 다른 zone은 이 쿠키로 SSR한다.
function toggle() {
  const root = document.documentElement;
  const mode = root.dataset.mode === "dark" ? "light" : "dark";
  root.dataset.mode = mode;
  document.cookie = `${MODE_COOKIE}=${mode}; path=/; max-age=31536000; samesite=lax`;
}

// 아이콘은 CSS로 전환해 서버·클라이언트 렌더 결과를 같게 둔다.
export function ModeToggle() {
  return (
    <Button
      variant="ghost"
      aria-label="화면 모드 전환"
      onClick={toggle}
      className="size-11 px-0"
    >
      <Icon node={Moon} size={20} className="dark:hidden" aria-hidden />
      <Icon node={Sun} size={20} className="hidden dark:block" aria-hidden />
    </Button>
  );
}
