export function TopBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface pt-[env(safe-area-inset-top)]">
      <div className="flex h-14 items-center justify-between px-4">
        {/* 앱 이름은 가칭이다. */}
        <span className="text-lg font-bold">stylist</span>
        {/* 모드 토글 자리. 구현 전까지 44x44 영역만 확보한다. */}
        <div className="size-11" />
      </div>
    </header>
  );
}
