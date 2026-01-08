import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "./components/ParticleBackground";
import { Analytics } from "@vercel/analytics/next"; // 👈 ADD THIS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CPISolution — Research Hub",
  description: "Research on AI, genetics, stem cells, and cell reprogramming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParticleBackground
          particleCount={120}
          starCount={14}
          starBrightness={1.2}
        />
        <div className="relative z-10">{children}</div>

        <Analytics /> {/* 👈 ADD THIS */}
      </body>
    </html>
  );
}