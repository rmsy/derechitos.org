import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = new URL("https://derechitos.org");
const siteTitle = "Derechitos";
const siteDescription = "Conozca sus derechos constitutionales garantizados.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: siteUrl,
  openGraph: {
    title: siteTitle,
    type: "website",
    url: siteUrl,
    description: siteDescription,
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
