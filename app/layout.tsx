import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Student Companion | Pegasus AI Labs",
  description:
    "Starter app for AI App Builder Foundations — build your first AI-powered app step by step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased text-slate-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
