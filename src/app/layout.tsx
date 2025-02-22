import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Firebase from "@/components/firebase";
import { appDescription, appName, appUrl } from "@/lib/common";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
  metadataBase: appUrl,
  appleWebApp: {
    capable: true,
    title: appName,
  },
  openGraph: {
    title: appName,
    type: "website",
    url: appUrl,
    description: appDescription,
    locale: "es_US",
    // TODO: Add image
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Firebase>
      <html lang="es">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </Firebase>
  );
}
