import type { Metadata } from "next";
import { Geist, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "EXIONLabs — Automating Pharmacy. Protecting Patients.",
  description:
    "EXIONLabs builds intelligent robotics and AI systems for pharmacy automation — 99.9%+ counting accuracy, zero miscounts, full compliance automation.",
  keywords: "pharmacy automation, pill counting, AI robotics, EXION, medication safety",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} ${notoSansKR.variable} antialiased`}>{children}</body>
    </html>
  );
}
