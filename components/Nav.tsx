"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
            <rect x="1" y="1" width="26" height="26" rx="7" fill="#0a0a0a" stroke="#00e676" strokeWidth="1.3" strokeOpacity="0.85"/>
            <path d="M19 10C17.7 8.4 15.9 7.4 14 7.4C10.4 7.4 7.5 10.3 7.5 14C7.5 17.7 10.4 20.6 14 20.6C15.9 20.6 17.7 19.6 19 18" stroke="#00e676" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="19.5" cy="14" r="1.4" fill="#00e676"/>
          </svg>
          <span className="font-syne font-bold text-[15px] tracking-tight text-accent">
            Claudia
          </span>
          <span className="text-[10px] font-syne font-medium text-faint uppercase tracking-widest leading-none mt-0.5">
            by Claude
          </span>
        </div>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#features" className="text-[13px] font-syne font-medium text-muted hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-[13px] font-syne font-medium text-muted hover:text-white transition-colors">
            How it works
          </a>
          <a href="#waitlist" className="text-[13px] font-syne font-medium text-muted hover:text-white transition-colors">
            Early access
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://github.com/mahtamun-hoque-fahim/claudia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-ink font-syne font-bold text-[12.5px] hover:bg-[#33eb91] transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v9M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          Install Free
        </a>
      </div>
    </nav>
  );
}
