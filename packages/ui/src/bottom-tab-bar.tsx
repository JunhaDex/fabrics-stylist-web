"use client";

import { Icon } from "@junhadex/core";
import { usePathname } from "next/navigation";
import { isActive, tabs } from "./nav";

export function BottomTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="주요 메뉴"
      className="sticky bottom-0 z-10 flex border-t border-border bg-surface pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      {tabs.map(({ href, label, icon }) => {
        const active = isActive(pathname, href);
        return (
          <a
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-xs ${active ? "text-brand" : "text-on-surface-muted"}`}
          >
            <Icon node={icon} size={24} />
            {label}
          </a>
        );
      })}
    </nav>
  );
}
