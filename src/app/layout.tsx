import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Shantanu Krishnatray",
  description: "Autonomous Systems Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col selection:bg-orange-500/20 selection:text-orange-200">
        
        {/* Minimalist Nav */}
        <nav className="fixed top-0 w-full z-50 bg-[#030303]/60 backdrop-blur-xl border-b border-white/[0.03]">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-sm flex items-center gap-3 text-zinc-300 hover:text-white transition-colors">
              <span className="w-1.5 h-1.5 bg-orange-500/80 rounded-full shadow-[0_0_10px_rgba(255,128,0,0.5)]"></span>
              Shantanu Krishnatray
            </Link>
            <div className="hidden md:flex gap-8 text-[12px] font-medium text-zinc-500 tracking-wide uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
              <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              <Link href="/achievements" className="hover:text-white transition-colors">Achievements</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
