import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore: allow importing global CSS without type declarations
import "./globals.css";

import App from "@/app/Application";
import { DataProvider } from "@/components/MainAppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CODE-GALAXY PORTFOLIO",
  description: "Gagan Yadav Portfolio",
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
        <div className="flex grid-rows-1 w-full h-svh bg-[#0f1014]">
          <DataProvider>
          <App >
            {children}
          </App>
          </DataProvider>
        </div>
      </body>
    </html>
  );
}
