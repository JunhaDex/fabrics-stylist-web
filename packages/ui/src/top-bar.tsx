import { ModeToggle } from "./mode-toggle";

export function TopBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface pt-[env(safe-area-inset-top)]">
      <div className="flex h-14 items-center justify-between pr-[max(1rem,env(safe-area-inset-right))] pl-[max(1rem,env(safe-area-inset-left))]">
        {/* 앱 이름은 가칭이다. */}
        <span className="text-lg font-bold">stylist</span>
        <ModeToggle />
      </div>
    </header>
  );
}
