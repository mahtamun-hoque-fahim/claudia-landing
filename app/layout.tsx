import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claudia — Export Claude Chats as Beautiful PDFs",
  description:
    "A Chrome extension that exports your Claude.ai conversations as beautifully formatted PDFs. Supports markdown, LaTeX, syntax highlighting, dark/light themes, and selective message export.",
  keywords: ["Claude AI", "Claude export", "PDF export", "Chrome extension", "Claudia"],
  authors: [{ name: "Mahtamun Hoque Fahim", url: "https://mahtamundesigns.vercel.app" }],
  openGraph: {
    title: "Claudia — Export Claude Chats as Beautiful PDFs",
    description: "Chrome extension for exporting Claude.ai conversations as beautifully formatted PDFs.",
    type: "website",
    url: "https://claudia-landing.vercel.app",
    siteName: "Claudia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudia — Export Claude Chats as Beautiful PDFs",
    description: "Chrome extension for exporting Claude.ai conversations as beautifully formatted PDFs.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
