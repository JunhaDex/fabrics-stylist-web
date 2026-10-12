import type { Metadata, Viewport } from "next";
import { getMode, ModeScript } from "@repo/ui/mode";
import "./globals.css";

export const metadata: Metadata = {
  title: "shell",
};

// safe-area env()가 0이 아닌 값을 갖도록 화면 전체로 확장한다.
export const viewport: Viewport = {
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ModeScript가 첫 페인트 전에 data-mode를 바꿀 수 있어 html 속성 불일치를 허용한다.
    <html lang="ko" data-mode={await getMode()} suppressHydrationWarning>
      <head>
        <ModeScript />
      </head>
      <body className="bg-surface text-on-surface">{children}</body>
    </html>
  );
}
