export const runtime = "edge";

import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getDb } from "@/lib/db";
import { waitlist, stats } from "@/lib/schema";
import { desc } from "drizzle-orm";

export default async function AdminPage() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const db = getDb();

  const [signups, statRows] = await Promise.all([
    db.select().from(waitlist).orderBy(desc(waitlist.createdAt)),
    db.select().from(stats),
  ]);

  const downloadCount = statRows.find((r) => r.key === "downloads")?.value ?? 0;

  return (
    <div className="min-h-screen bg-ink mesh-bg">
      <nav className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
              <rect x="1" y="1" width="26" height="26" rx="7" fill="#0a0a0a" stroke="#00e676" strokeWidth="1.3"/>
              <path d="M19 10C17.7 8.4 15.9 7.4 14 7.4C10.4 7.4 7.5 10.3 7.5 14C7.5 17.7 10.4 20.6 14 20.6C15.9 20.6 17.7 19.6 19 18" stroke="#00e676" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="19.5" cy="14" r="1.4" fill="#00e676"/>
            </svg>
            <span className="font-syne font-bold text-accent text-sm">Claudia</span>
            <span className="text-[10px] font-mono text-faint px-2 py-0.5 rounded-full border border-border">admin</span>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          <StatCard label="Total signups" value={signups.length} />
          <StatCard label="Downloads" value={downloadCount} />
          <StatCard
            label="Latest signup"
            value={
              signups[0]
                ? new Date(signups[0].createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                : "—"
            }
            small
          />
        </div>

        <div className="rounded-2xl border border-border bg-surface overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-syne font-bold text-white text-[15px]">Waitlist signups</h2>
            <span className="text-[11px] font-mono text-muted">{signups.length} total</span>
          </div>

          {signups.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="font-lora text-muted text-sm">No signups yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-3 text-left text-[10.5px] font-mono text-muted uppercase tracking-wider">#</th>
                    <th className="px-6 py-3 text-left text-[10.5px] font-mono text-muted uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-[10.5px] font-mono text-muted uppercase tracking-wider">Signed up</th>
                  </tr>
                </thead>
                <tbody>
                  {signups.map((row, i) => (
                    <tr key={row.id} className="border-b border-border/50 hover:bg-raised/50 transition-colors">
                      <td className="px-6 py-3.5 text-[12px] font-mono text-faint">{i + 1}</td>
                      <td className="px-6 py-3.5 text-[13px] font-mono text-white">{row.email}</td>
                      <td className="px-6 py-3.5 text-[12px] font-mono text-muted">
                        {new Date(row.createdAt).toLocaleDateString("en-US", {
                          year: "numeric", month: "short", day: "numeric",
                          hour: "2-digit", minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, small = false }: { label: string; value: string | number; small?: boolean }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="text-[10.5px] font-mono text-muted uppercase tracking-wider mb-2">{label}</div>
      <div className={`font-syne font-black text-accent leading-none ${small ? "text-2xl" : "text-3xl"}`}>
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
    </div>
  );
}
