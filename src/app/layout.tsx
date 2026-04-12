import type { Metadata } from "next";
import { Work_Sans, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Client Onboarding Dashboard",
  description: "Project proposal and onboarding experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="noise grid-texture min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
