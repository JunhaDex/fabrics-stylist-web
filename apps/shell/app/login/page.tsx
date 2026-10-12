import { SocialButtons } from "./social-buttons";

// AppShell 밖의 화면이므로 safe area를 직접 처리한다.
export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-sm flex-col items-center justify-center gap-10 pt-[max(1.5rem,env(safe-area-inset-top))] pr-[max(1.5rem,env(safe-area-inset-right))] pb-[max(1.5rem,env(safe-area-inset-bottom))] pl-[max(1.5rem,env(safe-area-inset-left))]">
      {/* 앱 이름은 가칭이다. */}
      <h1 className="text-3xl font-bold">stylist</h1>
      <SocialButtons />
    </main>
  );
}
