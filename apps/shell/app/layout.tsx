import type { Metadata, Viewport } from "next";
import { AppShell } from "@repo/ui/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "shell",
};

// safe-area env()가 0이 아닌 값을 갖도록 화면 전체로 확장한다.
export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-mode="light">
      <body className="bg-surface text-on-surface">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
