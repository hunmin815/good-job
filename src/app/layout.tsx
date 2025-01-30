import { Viewport } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
