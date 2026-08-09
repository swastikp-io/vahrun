import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "vahrun",
  description:
    "Vahrun is a music producer and creative developer based in Lucknow.",
  keywords: [
    "vahrun",
    "music producer",
    "creative developer",
    "lucknow",
    "soundscapes",
    "audio engineering",
    "design engineering",
  ],
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/icon.png`, type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: `${basePath}/apple-icon.png`, sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full bg-white text-black font-sans selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
