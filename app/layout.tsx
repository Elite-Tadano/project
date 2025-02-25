import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Add display swap for better performance
  preload: true, // Ensure font preloading
  fallback: ["system-ui", "arial"], // Add fallback fonts
});

export const metadata: Metadata = {
  title: "Brew Haven - Artisanal Coffee Shop",
  description:
    "Experience the perfect brew at Brew Haven. Artisanal coffee crafted with passion, served in a cozy atmosphere.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} bg-slate>
        {children}
      </body>
    </html>
  );
}
