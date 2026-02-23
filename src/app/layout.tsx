import type { Metadata } from "next";
import "./globals.css";
import ScamBanner from "@/components/layout/ScamBanner";

export const metadata: Metadata = {
  title: "RATELS Store",
  description: "RATELS Store — Verified Devices. No Scams. Direct Deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScamBanner />
        {children}
      </body>
    </html>
  );
}