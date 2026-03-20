"use client";

import { useEffect, useRef, useState } from "react";

interface HeroProps {
  downloadCount: number;
}

export default function Hero({ downloadCount }: HeroProps) {
  const [count, setCount] = useState(downloadCount);
  const hasIncremented = useRef(false);

  // Increment download count when the page loads (on the first visit only per session)
  useEffect(() => {
    if (hasIncremented.current) return;
    hasIncremented.current = true;
    fetch("/api/downloads", { method: "POST" })
      .then((r) => r.json())
      .then((d) => { if (d.count) setCount(d.count); })
      .catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen flex items-center mesh-bg grid-bg pt-14">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/4 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="anim-hidden animate-fade-up delay-100 inline-flex w-fit items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface text-[11.5px] font-mono text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-accent inline-block" />
              Chrome Extension · Free & Open Source
            </div>

            {/* Headline */}
            <h1 className="anim-hidden animate-fade-up delay-200 font-syne font-black text-[52px] leading-[1.05] tracking-[-0.03em] text-white">
              Export Claude<br />
              chats as{" "}
              <span className="text-shimmer">beautiful</span>
              <br />PDFs.
            </h1>

            {/* Sub */}
            <p className="anim-hidden animate-fade-up delay-300 font-lora text-[17px] leading-relaxed text-muted max-w-sm">
              Claudia turns your Claude.ai conversations into perfectly
              typeset documents — with LaTeX, syntax-highlighted code,
              dark & light themes, and selective message export.
            </p>

            {/* CTA row */}
            <div className="anim-hidden animate-fade-up delay-400 flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/mahtamun-hoque-fahim/claudia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  fetch("/api/downloads", { method: "POST" })
                    .then((r) => r.json())
                    .then((d) => { if (d.count) setCount(d.count); })
                    .catch(() => {});
                }}
                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-ink font-syne font-bold text-[14px] glow-ring transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v9M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                Download Extension
                <span className="ml-0.5 px-2 py-0.5 rounded-full bg-black/15 text-[11px] font-mono">
                  Free
                </span>
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border text-white/70 hover:text-white hover:border-border-2 font-syne font-semibold text-[14px] transition-all"
              >
                See how it works
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Download count */}
            <div className="anim-hidden animate-fade-up delay-500 flex items-center gap-2 text-[12.5px] font-mono text-muted">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v9M5 7l3 3 3-3" stroke="#00e676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="#00e676" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-accent font-semibold">{count.toLocaleString()}</span>
              &nbsp;downloads so far
            </div>
          </div>

          {/* Right: Extension popup mockup + PDF preview */}
          <div className="anim-hidden animate-fade-up delay-300 relative flex items-center justify-center">
            <div className="relative animate-float">
              {/* Shadow glow */}
              <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-3xl scale-90 translate-y-4" />

              {/* Extension popup mockup */}
              <div className="relative w-[320px] rounded-2xl border border-border overflow-hidden shadow-2xl bg-[#0a0a0a]">
                {/* Titlebar */}
                <div className="bg-[#111] border-b border-[#1e1e1e] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="dot dot-red" />
                    <div className="dot dot-yellow" />
                    <div className="dot dot-green" />
                  </div>
                  <div className="flex-1 text-center text-[11px] font-mono text-[#444]">
                    Claudia
                  </div>
                </div>

                {/* Popup body */}
                <div className="p-0">
                  {/* Popup header */}
                  <div className="flex items-center justify-between px-4 pt-3.5 pb-3 border-b border-[#1e1e1e]">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                        <rect x="1" y="1" width="26" height="26" rx="7" fill="#0a0a0a" stroke="#00e676" strokeWidth="1.3"/>
                        <path d="M19 10C17.7 8.4 15.9 7.4 14 7.4C10.4 7.4 7.5 10.3 7.5 14C7.5 17.7 10.4 20.6 14 20.6C15.9 20.6 17.7 19.6 19 18" stroke="#00e676" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="19.5" cy="14" r="1.4" fill="#00e676"/>
                      </svg>
                      <div>
                        <div className="font-syne font-black text-[13px] text-accent leading-none">Claudia</div>
                        <div className="font-syne text-[8px] text-[#444] uppercase tracking-wider mt-0.5">by Claude</div>
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-md bg-[#181818] flex items-center justify-center">
                      <div className="w-3 h-3 text-[#555]">
                        <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#0d0d0d] border-b border-[#1a1a1a]">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-mono text-[#555]">12 messages found</span>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-1.5 px-4 pt-3 pb-0">
                    {["All Messages", "Select Messages"].map((t, i) => (
                      <div key={t} className={`flex-1 py-1.5 text-center rounded-lg text-[10.5px] font-syne font-semibold border ${i === 0 ? "bg-accent/10 text-accent border-accent/40" : "bg-[#181818] text-[#555] border-[#222]"}`}>
                        {t}
                      </div>
                    ))}
                  </div>

                  {/* Options */}
                  <div className="px-4 py-3 space-y-1.5">
                    {[
                      { label: "PDF Theme", right: <div className="flex gap-1"><span className="px-2 py-0.5 rounded text-[9px] font-syne font-bold bg-accent text-black">Dark</span><span className="px-2 py-0.5 rounded text-[9px] font-syne text-[#555] bg-[#181818]">Light</span></div> },
                      { label: "Render LaTeX", right: <ToggleOn /> },
                      { label: "Syntax highlighting", right: <ToggleOn /> },
                    ].map(({ label, right }) => (
                      <div key={label} className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-[#141414]">
                        <span className="text-[10.5px] font-syne text-[#888]">{label}</span>
                        {right}
                      </div>
                    ))}
                  </div>

                  {/* Export button */}
                  <div className="px-4 pb-4">
                    <div className="w-full py-2.5 rounded-lg bg-accent flex items-center justify-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1v9M5 7l3 3 3-3" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="#000" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                      <span className="text-[11px] font-syne font-black text-black">Export as PDF</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pb-3 text-center text-[9px] font-syne text-[#444]">
                    Made by{" "}
                    <span className="text-accent font-semibold">Mahtamun Hoque Fahim</span>
                  </div>
                </div>
              </div>

              {/* Floating PDF badge */}
              <div className="absolute -bottom-4 -right-6 bg-[#111] border border-[#222] rounded-xl px-4 py-2.5 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-9 rounded bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                    <span className="text-[8px] font-mono text-accent font-bold">PDF</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-syne font-bold text-white">chat-export.pdf</div>
                    <div className="text-[9px] font-mono text-[#444]">Ready to save</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ToggleOn() {
  return (
    <div className="w-7 h-4 rounded-full bg-accent relative">
      <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-black" />
    </div>
  );
}
