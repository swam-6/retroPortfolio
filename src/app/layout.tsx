import type { Metadata } from "next";
import { Inter, Press_Start_2P, VT323 } from "next/font/google";
import RetroCursor from "@/components/RetroCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Retro Pixel Portfolio",
  description: "A premium retro pixel-style developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pressStart.variable} ${vt323.variable} antialiased min-h-screen flex items-center justify-center p-4 md:p-8`}
      >
        {children}
        <RetroCursor />
      </body>
    </html>
  );
}
