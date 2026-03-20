export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                <rect x="1" y="1" width="26" height="26" rx="7" fill="#0a0a0a" stroke="#00e676" strokeWidth="1.3" strokeOpacity="0.85"/>
                <path d="M19 10C17.7 8.4 15.9 7.4 14 7.4C10.4 7.4 7.5 10.3 7.5 14C7.5 17.7 10.4 20.6 14 20.6C15.9 20.6 17.7 19.6 19 18" stroke="#00e676" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="19.5" cy="14" r="1.4" fill="#00e676"/>
              </svg>
              <span className="font-syne font-black text-[14px] text-accent tracking-tight">Claudia</span>
              <span className="text-[9px] font-mono text-faint uppercase tracking-widest mt-0.5">by Claude</span>
            </div>
            <p className="text-[12px] font-lora text-muted max-w-xs leading-relaxed">
              A Chrome extension for exporting Claude.ai conversations
              as beautifully typeset PDFs.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 text-right">
            <div className="flex items-center gap-4 sm:justify-end">
              <a
                href="https://github.com/mahtamun-hoque-fahim/claudia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[12.5px] font-syne font-semibold text-muted hover:text-accent transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://mahtamundesigns.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12.5px] font-syne font-semibold text-muted hover:text-accent transition-colors"
              >
                Portfolio
              </a>
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12.5px] font-syne font-semibold text-muted hover:text-accent transition-colors"
              >
                Claude.ai
              </a>
            </div>

            {/* Credit */}
            <p className="text-[11.5px] font-lora text-muted sm:text-right">
              Made with care by{" "}
              <a
                href="https://mahtamundesigns.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:underline"
              >
                Mahtamun Hoque Fahim
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-mono text-faint">
            © {year} Claudia. MIT License. Free & open source.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-faint">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Built on Next.js 14 · Supabase · Vercel
          </div>
        </div>
      </div>
    </footer>
  );
}
