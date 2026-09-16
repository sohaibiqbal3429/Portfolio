import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Sohaib Iqbal | Full Stack Developer",
  description: "Full Stack Developer with ~2 years of experience building scalable web and mobile applications. Proficient in React, Next.js, Node.js, TypeScript, and AWS.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS", "Portfolio"],
  authors: [{ name: "Muhammad Sohaib Iqbal" }],
  openGraph: {
    title: "Muhammad Sohaib Iqbal | Full Stack Developer",
    description: "Full Stack Developer with ~2 years of experience building scalable web and mobile applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
