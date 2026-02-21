import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Developer Portfolio",
  description: "High-end Scrollytelling Personal Portfolio",
};

import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { SurpriseMe } from "@/components/SurpriseMe";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased text-white bg-[#121212] overflow-x-hidden`}>
        <SmoothScrollProvider>
          <CustomCursor />
          <SurpriseMe />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
