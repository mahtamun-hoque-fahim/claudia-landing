export default function DemoPreview() {
  return (
    <section className="py-24 border-y border-border bg-surface/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-raised text-[11px] font-mono text-muted mb-5">
              <span className="text-accent">✦</span> Output preview
            </div>
            <h2 className="font-syne font-black text-[38px] leading-tight tracking-tight text-white mb-5">
              The output looks<br />
              exactly like this.
            </h2>
            <p className="font-lora text-[15.5px] text-muted leading-relaxed mb-8">
              Claudia preserves Claude&apos;s formatting — headings, bullet lists,
              inline code, tables — and renders it through a refined typographic
              system using Lora for prose, Syne for headings, and JetBrains Mono
              for code.
            </p>

            <div className="space-y-3">
              {[
                "Lora serif for readable body prose",
                "Syne display font for section headings",
                "JetBrains Mono for all code blocks",
                "KaTeX-rendered math equations",
                "Proper table & blockquote styling",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[13.5px] font-lora text-white/80">
                  <div className="w-4 h-4 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3l2 2 4-4" stroke="#00e676" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* PDF mockup — side by side dark + light */}
          <div className="relative flex gap-4 justify-center">
            {/* Dark PDF */}
            <div className="w-52 flex-shrink-0 rounded-xl overflow-hidden border border-[#2a2a2a] shadow-2xl bg-[#0a0a0a]">
              <PDFPage dark />
            </div>
            {/* Light PDF, slightly offset */}
            <div className="w-52 flex-shrink-0 rounded-xl overflow-hidden border border-[#ccc]/20 shadow-2xl bg-[#f8f8f5] mt-8">
              <PDFPage dark={false} />
            </div>

            {/* Label badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#111] border border-[#222] rounded-lg px-4 py-2 flex items-center gap-3 shadow-xl whitespace-nowrap">
              <span className="text-[10px] font-mono text-[#444]">Dark mode</span>
              <div className="w-px h-3 bg-[#2a2a2a]" />
              <span className="text-[10px] font-mono text-[#444]">Light mode</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PDFPage({ dark }: { dark: boolean }) {
  const bg = dark ? "#0a0a0a" : "#f8f8f5";
  const surface = dark ? "#111111" : "#ffffff";
  const border = dark ? "#1e1e1e" : "#e5e5e0";
  const text = dark ? "#e0e0d8" : "#1a1a1a";
  const text2 = dark ? "#555" : "#999";
  const accent = dark ? "#00e676" : "#00a854";
  const humanBorder = dark ? "#6da5e8" : "#2563eb";
  const codeBg = dark ? "#0d0d0d" : "#f0f0ec";

  return (
    <div style={{ background: bg, fontFamily: "serif" }}>
      {/* Header */}
      <div style={{ background: surface, borderBottom: `1px solid ${border}`, padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 14, height: 14, borderRadius: 4, border: `1px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: accent, fontSize: 7 }}>C</span>
          </div>
          <span style={{ color: accent, fontSize: 9, fontFamily: "sans-serif", fontWeight: 800 }}>Claudia</span>
        </div>
        <span style={{ color: text2, fontSize: 7, fontFamily: "monospace" }}>3 msgs</span>
      </div>

      {/* Messages */}
      <div style={{ padding: "10px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
        {/* Human message */}
        <div style={{ background: surface, border: `1px solid ${border}`, borderLeft: `2px solid ${humanBorder}`, borderRadius: 6, padding: "7px 9px" }}>
          <div style={{ color: humanBorder, fontSize: 7, fontFamily: "monospace", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>You</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {[1, 0.85, 0.7].map((w, i) => (
              <div key={i} style={{ height: 3, borderRadius: 2, background: dark ? "#1e1e1e" : "#ddd", width: `${w * 100}%` }} />
            ))}
          </div>
        </div>

        {/* Claude message */}
        <div style={{ background: bg, border: `1px solid ${border}`, borderLeft: `2px solid ${accent}`, borderRadius: 6, padding: "7px 9px" }}>
          <div style={{ color: accent, fontSize: 7, fontFamily: "monospace", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Claude</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <div style={{ height: 4, borderRadius: 2, background: dark ? "#1e1e1e" : "#ddd", width: "70%" }} />
            {[1, 0.9, 0.8, 1, 0.75].map((w, i) => (
              <div key={i} style={{ height: 2.5, borderRadius: 1.5, background: dark ? "#1a1a1a" : "#e5e5e0", width: `${w * 100}%` }} />
            ))}
            {/* Code block mini */}
            <div style={{ background: codeBg, border: `1px solid ${border}`, borderRadius: 4, padding: "4px 6px", marginTop: 3 }}>
              <div style={{ height: 2.5, borderRadius: 1.5, background: dark ? "#2a2a2a" : "#ccc", width: "80%" }} />
              <div style={{ height: 2.5, borderRadius: 1.5, background: dark ? "#222" : "#d5d5d0", width: "60%", marginTop: 2 }} />
            </div>
          </div>
        </div>

        {/* Human again */}
        <div style={{ background: surface, border: `1px solid ${border}`, borderLeft: `2px solid ${humanBorder}`, borderRadius: 6, padding: "7px 9px" }}>
          <div style={{ color: humanBorder, fontSize: 7, fontFamily: "monospace", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>You</div>
          {[0.9, 0.6].map((w, i) => (
            <div key={i} style={{ height: 2.5, borderRadius: 1.5, background: dark ? "#1e1e1e" : "#ddd", width: `${w * 100}%`, marginBottom: 2 }} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: `1px solid ${border}`, padding: "6px 10px", textAlign: "center" }}>
        <span style={{ color: text2, fontSize: 6.5, fontFamily: "monospace" }}>
          by{" "}
          <span style={{ color: accent }}>Mahtamun Hoque Fahim</span>
        </span>
      </div>
    </div>
  );
}
