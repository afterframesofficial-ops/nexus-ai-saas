import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nexus AI | Production-ready AI infrastructure",
  description: "Build AI workflows without engineering bottlenecks. Scalable, secure, and lightning fast.",
  openGraph: {
    title: "Nexus AI | Production-ready AI infrastructure",
    description: "Build AI workflows without engineering bottlenecks.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-zinc-50 selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  );
}
