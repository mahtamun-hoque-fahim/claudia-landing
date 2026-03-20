export const runtime = "edge";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-ink mesh-bg grid-bg flex items-center justify-center px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="relative flex flex-col items-center gap-8">
        <div className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="1" y="1" width="26" height="26" rx="7" fill="#0a0a0a" stroke="#00e676" strokeWidth="1.3" strokeOpacity="0.85"/>
            <path d="M19 10C17.7 8.4 15.9 7.4 14 7.4C10.4 7.4 7.5 10.3 7.5 14C7.5 17.7 10.4 20.6 14 20.6C15.9 20.6 17.7 19.6 19 18" stroke="#00e676" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="19.5" cy="14" r="1.4" fill="#00e676"/>
          </svg>
          <div>
            <div className="font-syne font-black text-[16px] text-accent tracking-tight leading-none">Claudia</div>
            <div className="font-syne text-[9px] text-faint uppercase tracking-widest mt-0.5">Admin access</div>
          </div>
        </div>
        <SignIn
          appearance={{
            variables: {
              colorPrimary: "#00e676",
              colorBackground: "#111111",
              colorInputBackground: "#181818",
              colorInputText: "#e0e0d8",
              colorText: "#e0e0d8",
              colorTextSecondary: "#666666",
              colorNeutral: "#333333",
              borderRadius: "10px",
            },
            elements: {
              card: "border border-border shadow-2xl",
              formButtonPrimary: "bg-accent hover:bg-[#33eb91] text-black font-bold transition-colors",
              footerActionLink: "text-accent hover:text-[#33eb91]",
            },
          }}
        />
      </div>
    </div>
  );
}
