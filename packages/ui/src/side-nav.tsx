"use client";

import { Icon } from "@junhadex/core";
import { usePathname } from "next/navigation";
import { isActive, tabs } from "./nav";

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="주요 메뉴"
      className="sticky top-[calc(3.5rem_+_env(safe-area-inset-top))] hidden h-[calc(100dvh_-_3.5rem_-_env(safe-area-inset-top))] w-56 shrink-0 flex-col gap-1 border-r border-border p-3 md:flex"
    >
      {tabs.map(({ href, label, icon }) => {
        const active = isActive(pathname, href);
        return (
          <a
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-11 items-center gap-3 rounded-control px-3 text-sm font-medium ${active ? "bg-brand-subtle text-on-brand-subtle" : "text-on-surface-muted hover:bg-surface-raised"}`}
          >
            <Icon node={icon} size={20} />
            {label}
          </a>
        );
      })}
    </nav>
  );
}
