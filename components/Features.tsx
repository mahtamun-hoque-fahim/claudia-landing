const features = [
  {
    id: "pdf-export",
    tag: "Core feature",
    title: "PDF Export with Live Preview",
    description:
      "Export your entire conversation or cherry-pick specific messages. Every export opens a live-rendered page — hit Save as PDF and you're done.",
    visual: <PDFPreviewVisual />,
  },
  {
    id: "theme",
    tag: "Dark & Light",
    title: "Two Stunning Themes",
    description:
      "Switch between a deep dark mode and a clean light mode for your exported PDF. Both themes ship with careful typographic rhythm and generous spacing.",
    visual: <ThemeVisual />,
  },
  {
    id: "latex",
    tag: "Math & Science",
    title: "Full LaTeX Rendering",
    description:
      "Inline $f(x) = x^2$ and display-mode equations rendered pixel-perfect via KaTeX. Copy your Claude math conversations without losing a single symbol.",
    visual: <LatexVisual />,
  },
  {
    id: "code",
    tag: "200+ languages",
    title: "Syntax Highlighting",
    description:
      "Code blocks get full Prism.js highlighting — Python, TypeScript, SQL, Rust, and 200+ more. Language labels auto-detected from Claude's output.",
    visual: <CodeVisual />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-[11px] font-mono text-muted mb-5">
          <span className="text-accent">✦</span> What Claudia does
        </div>
        <h2 className="font-syne font-black text-[42px] leading-tight tracking-tight text-white max-w-lg">
          Every feature you&apos;d actually need.
        </h2>
      </div>

      {/* 2×2 grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {features.map((f) => (
          <div
            key={f.id}
            className="group relative rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/30 transition-all duration-300"
          >
            {/* Visual area */}
            <div className="h-52 bg-[#0d0d0d] border-b border-border flex items-center justify-center overflow-hidden">
              {f.visual}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="inline-block px-2.5 py-1 rounded-md bg-accent/10 text-accent text-[10.5px] font-mono font-medium mb-3">
                {f.tag}
              </div>
              <h3 className="font-syne font-bold text-[18px] text-white mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="font-lora text-[14.5px] text-muted leading-relaxed">
                {f.description}
              </p>
            </div>

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Micro-visuals ──

function PDFPreviewVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-3 px-6">
      {/* Message list panel */}
      <div className="w-36 space-y-2">
        {[
          { role: "You", color: "#6da5e8", checked: true },
          { role: "Claude", color: "#00e676", checked: true },
          { role: "You", color: "#6da5e8", checked: false },
          { role: "Claude", color: "#00e676", checked: true },
        ].map((m, i) => (
          <div key={i} className={`flex items-center gap-2 p-1.5 rounded border ${m.checked ? "border-[#00e676]/30 bg-[#00e676]/5" : "border-[#222] bg-[#111]"}`}>
            <div className={`w-3 h-3 rounded-sm border flex items-center justify-center flex-shrink-0 ${m.checked ? "bg-[#00e676] border-[#00e676]" : "border-[#333]"}`}>
              {m.checked && <svg width="7" height="5" viewBox="0 0 7 5" fill="none"><path d="M1 2.5l1.5 1.5 3.5-3" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </div>
            <span style={{ color: m.color }} className="text-[9px] font-mono font-bold">{m.role}</span>
          </div>
        ))}
      </div>
      {/* Arrow */}
      <div className="text-accent font-mono text-lg">→</div>
      {/* PDF mockup */}
      <div className="w-28 h-36 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden">
        <div className="h-5 bg-[#141414] border-b border-[#1e1e1e] flex items-center px-2 gap-1">
          <span className="text-[7px] font-mono text-[#555]">chat-export.pdf</span>
        </div>
        <div className="p-2 space-y-1.5">
          {[1,0.7,1,0.5,0.8,1,0.6].map((w, i) => (
            <div key={i} className="h-1 rounded-full bg-[#222]" style={{ width: `${w * 100}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ThemeVisual() {
  return (
    <div className="flex gap-4 px-8 items-center justify-center w-full h-full">
      {/* Dark */}
      <div className="flex-1 max-w-[120px] rounded-xl overflow-hidden border border-[#2a2a2a] shadow-xl">
        <div className="h-4 bg-[#141414] flex items-center px-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
          <div className="w-6 h-1 rounded bg-[#252525]" />
        </div>
        <div className="bg-[#0a0a0a] p-2.5 space-y-1.5">
          <div className="h-1 rounded bg-[#00e676]/30 w-12" />
          {[1, 0.8, 0.65, 1, 0.75].map((w, i) => (
            <div key={i} className="h-1 rounded bg-[#1e1e1e]" style={{ width: `${w*100}%` }} />
          ))}
        </div>
        <div className="bg-[#111] px-2 py-1 text-center">
          <span className="text-[8px] font-mono text-[#00e676]">Dark</span>
        </div>
      </div>

      {/* vs badge */}
      <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#2a2a2a] bg-[#0d0d0d] flex items-center justify-center">
        <span className="text-[8px] font-mono text-[#444]">vs</span>
      </div>

      {/* Light */}
      <div className="flex-1 max-w-[120px] rounded-xl overflow-hidden border border-[#ccc]/20 shadow-xl">
        <div className="h-4 bg-[#eee] flex items-center px-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
          <div className="w-6 h-1 rounded bg-[#ddd]" />
        </div>
        <div className="bg-[#f8f8f5] p-2.5 space-y-1.5">
          <div className="h-1 rounded w-12" style={{ background: "#00a854", opacity: 0.5 }} />
          {[1, 0.8, 0.65, 1, 0.75].map((w, i) => (
            <div key={i} className="h-1 rounded bg-[#ddd]" style={{ width: `${w*100}%` }} />
          ))}
        </div>
        <div className="bg-[#eeeeeb] px-2 py-1 text-center">
          <span className="text-[8px] font-mono" style={{ color: "#00a854" }}>Light</span>
        </div>
      </div>
    </div>
  );
}

function LatexVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-8 w-full h-full">
      {/* Raw LaTeX */}
      <div className="w-full rounded-lg bg-[#111] border border-[#1e1e1e] px-4 py-2.5 font-mono text-[11px] text-[#666]">
        {`$$\\int_0^\\infty e^{-x^2}\\,dx = \\frac{\\sqrt{\\pi}}{2}$$`}
      </div>
      {/* Arrow */}
      <div className="flex items-center gap-2 text-[10px] font-mono text-[#444]">
        <div className="h-px w-8 bg-[#2a2a2a]" />
        <span className="text-accent">KaTeX</span>
        <div className="h-px w-8 bg-[#2a2a2a]" />
      </div>
      {/* Rendered */}
      <div className="w-full rounded-lg bg-[#0d1a12] border border-[#00e676]/20 px-4 py-3 text-center">
        <span className="text-[#00e676] text-[13px] font-lora italic">
          ∫₀^∞ e^(−x²) dx = √π / 2
        </span>
      </div>
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="w-full h-full px-5 py-4 font-mono text-[11px] leading-relaxed">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-0.5 rounded text-[8px] bg-[#1e1e1e] text-[#888] uppercase tracking-wider">python</span>
      </div>
      <pre className="text-left">
        <span className="text-[#c792ea]">def </span>
        <span className="text-[#82aaff]">fibonacci</span>
        <span className="text-[#89ddff]">(</span>
        <span className="text-[#f07178]">n</span>
        <span className="text-[#89ddff]">{"):"}</span>
        {"\n"}
        <span className="text-white">  </span>
        <span className="text-[#c792ea]">if</span>
        <span className="text-white"> n </span>
        <span className="text-[#89ddff]">{"<="}</span>
        <span className="text-[#f78c6c]"> 1</span>
        <span className="text-white">{":"}</span>
        {"\n"}
        <span className="text-white">    </span>
        <span className="text-[#c792ea]">return</span>
        <span className="text-[#f78c6c]"> n</span>
        {"\n"}
        <span className="text-white">  </span>
        <span className="text-[#c792ea]">return</span>
        <span className="text-white"> fibonacci(n</span>
        <span className="text-[#89ddff]">-</span>
        <span className="text-[#f78c6c]">1</span>
        <span className="text-white">)</span>
        {"\n"}
        <span className="text-white">       </span>
        <span className="text-[#89ddff]">+</span>
        <span className="text-white"> fibonacci(n</span>
        <span className="text-[#89ddff]">-</span>
        <span className="text-[#f78c6c]">2</span>
        <span className="text-white">)</span>
      </pre>
    </div>
  );
}
