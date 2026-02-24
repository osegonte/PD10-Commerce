import type { Metadata } from "next";
import "./globals.css";
import ScamBanner from "@/components/layout/ScamBanner";

export const metadata: Metadata = {
  title: {
    default: "RATELS Store — Verified Devices. No Scams. Direct Deals.",
    template: "%s | RATELS Store",
  },
  description:
    "Buy verified phones, laptops, and tech accessories in Nigeria at honest prices. No middlemen, no scams — direct from RATELS.",
  keywords: ["buy phones Nigeria", "verified iPhones Nigeria", "cheap laptops Nigeria", "RATELS store", "student essentials Nigeria"],
  metadataBase: new URL("https://ratels.store"),
  openGraph: {
    siteName: "RATELS Store",
    type: "website",
    locale: "en_NG",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
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