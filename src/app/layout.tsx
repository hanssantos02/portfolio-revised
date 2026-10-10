import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const studioFont = localFont({
  src: "../fonts/bricolage-grotesque-latin-variable.woff2",
  variable: "--font-studio",
  weight: "200 800",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Client Services Portfolio",
  description: "Client services portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={studioFont.variable}>
      <body>{children}</body>
    </html>
  );
}
