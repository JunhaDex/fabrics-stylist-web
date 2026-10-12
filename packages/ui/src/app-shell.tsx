import { BottomTabBar } from "./bottom-tab-bar";
import { SideNav } from "./side-nav";
import { TopBar } from "./top-bar";

// 모든 zone의 루트 레이아웃이 children을 이 셸로 감싼다. 모바일은 하단 탭, md 이상은 사이드 내비.
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar />
      <div className="flex flex-1">
        <SideNav />
        <div className="min-w-0 flex-1 pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] md:pl-0">{children}</div>
      </div>
      <BottomTabBar />
    </div>
  );
}
