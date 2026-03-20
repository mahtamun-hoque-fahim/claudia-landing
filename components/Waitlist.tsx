"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (!res.ok) { setStatus("error"); return; }
      if (data.message === "already_subscribed") { setStatus("duplicate"); return; }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const messages: Record<Status, { text: string; color: string } | null> = {
    idle: null,
    loading: null,
    success: { text: "You're on the list. We'll notify you when Claudia hits the Chrome Store.", color: "#00e676" },
    duplicate: { text: "You're already signed up — we'll be in touch.", color: "#facc15" },
    error: { text: "Something went wrong. Please try again.", color: "#f87171" },
  };

  const msg = messages[status];

  return (
    <section id="waitlist" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 mesh-bg grid-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/8 text-[11px] font-mono text-accent mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
          Chrome Web Store coming soon
        </div>

        {/* Headline */}
        <h2 className="font-syne font-black text-[44px] leading-[1.05] tracking-[-0.03em] text-white mb-4">
          Get early access<br />
          <span className="text-shimmer">before launch.</span>
        </h2>

        <p className="font-lora text-[16px] text-muted leading-relaxed mb-10 max-w-md mx-auto">
          Claudia is available now on GitHub. Join the list to get notified
          when it launches on the Chrome Web Store — and receive feature
          updates directly.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="flex-1 relative">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading" || status === "success"}
              className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-white placeholder-faint font-lora text-[14px] focus:outline-none focus:border-accent/50 focus:bg-raised transition-all disabled:opacity-50"
            />
            {/* Email icon */}
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-faint">
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-6 py-3.5 rounded-xl bg-accent text-ink font-syne font-bold text-[13.5px] glow-ring hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25"/>
                  <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                Joining…
              </>
            ) : status === "success" ? (
              <>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                You&apos;re in!
              </>
            ) : (
              "Notify me"
            )}
          </button>
        </form>

        {/* Status message */}
        {msg && (
          <p
            className="mt-4 text-[13px] font-lora animate-fade-in"
            style={{ color: msg.color }}
          >
            {msg.text}
          </p>
        )}

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-5 text-[12px] font-mono text-muted">
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
            </svg>
            Open source
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M5 4V3a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            No data collected
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            Zero cost, forever
          </div>
        </div>
      </div>
    </section>
  );
}
