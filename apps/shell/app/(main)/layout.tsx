import { AppShell } from "@repo/ui/app-shell";

// 로그인처럼 내비게이션이 없는 화면과 분리하기 위해 AppShell을 route group에 둔다.
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell>{children}</AppShell>;
}
