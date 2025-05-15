import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wisedom.ai",
  description: "Transform Your Network into a Strategic Advantage",
  openGraph: {
    title: "Wisedom.ai",
    description: "Transform Your Network into a Strategic Advantage",
    url: "https://wisedom.ai",
    siteName: "Wisedom.ai",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Wisedom.ai – Transform Your Network",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisedom.ai",
    description: "Transform Your Network into a Strategic Advantage",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
