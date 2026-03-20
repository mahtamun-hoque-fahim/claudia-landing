const steps = [
  {
    num: "01",
    title: "Install Claudia",
    body: "Download from GitHub and load the extension unpacked in Chrome, Edge, or Brave. Takes about 30 seconds.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v14M8 12l4 4 4-4" stroke="#00e676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 19h16" stroke="#00e676" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Open any conversation",
    body: "Navigate to a Claude.ai chat. Click the Claudia icon in your toolbar — it scans the page and finds all messages automatically.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="14" rx="3" stroke="#00e676" strokeWidth="1.8"/>
        <path d="M8 7h8M8 11h5" stroke="#00e676" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 21l5-4 5 4" stroke="#00e676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Export as PDF",
    body: "Choose to export all messages or select specific ones. Pick your theme, toggle LaTeX and code highlighting, then hit Export.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#00e676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M9 13h6M9 17h4" stroke="#00e676" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-[11px] font-mono text-muted mb-5">
          <span className="text-accent">✦</span> Three steps
        </div>
        <h2 className="font-syne font-black text-[42px] leading-tight tracking-tight text-white">
          From chat to PDF in seconds.
        </h2>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-6 relative">
        {/* Connector lines (desktop only) */}
        <div className="hidden md:block absolute top-11 left-[calc(33.33%+24px)] right-[calc(33.33%+24px)] h-px bg-gradient-to-r from-border via-accent/20 to-border" />

        {steps.map((step, i) => (
          <div key={step.num} className="relative">
            <div className="rounded-2xl border border-border bg-surface hover:border-accent/30 transition-colors duration-300 p-7 h-full">
              {/* Step number + icon */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl border border-border bg-raised flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="font-mono text-[26px] font-black text-border leading-none">
                  {step.num}
                </span>
              </div>

              <h3 className="font-syne font-bold text-[17px] text-white mb-2.5 tracking-tight">
                {step.title}
              </h3>
              <p className="font-lora text-[14px] text-muted leading-relaxed">
                {step.body}
              </p>

              {/* Step dot indicator */}
              <div className="flex items-center gap-1.5 mt-6">
                {steps.map((_, j) => (
                  <div
                    key={j}
                    className={`h-1 rounded-full transition-all ${j === i ? "w-6 bg-accent" : "w-2 bg-border"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/mahtamun-hoque-fahim/claudia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-accent text-ink font-syne font-bold text-[14px] glow-ring hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v14M8 12l4 4 4-4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 19h16" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Get Claudia — It&apos;s Free
        </a>
      </div>
    </section>
  );
}
