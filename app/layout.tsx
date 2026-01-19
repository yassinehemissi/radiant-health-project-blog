import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "../contexts/theme-context";
import MainLayout from "../components/layouts/main-layout";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radiant — Applied AI Systems & Healthcare Research",
  description:
    "Radiant is a technical blog documenting the design of deployable, modular, and multimodal AI systems, with a focus on healthcare, accessibility, and grounded machine learning.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
