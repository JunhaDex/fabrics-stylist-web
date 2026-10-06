import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "styling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-mode="light">
      <body className="bg-surface text-on-surface">{children}</body>
    </html>
  );
}
