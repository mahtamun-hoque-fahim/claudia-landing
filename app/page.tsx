import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import DemoPreview from "@/components/DemoPreview";
import HowItWorks from "@/components/HowItWorks";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import { getDb } from "@/lib/db";
import { stats } from "@/lib/schema";
import { eq } from "drizzle-orm";

async function getDownloadCount(): Promise<number> {
  try {
    const db = getDb();
    const rows = await db
      .select({ value: stats.value })
      .from(stats)
      .where(eq(stats.key, "downloads"))
      .limit(1);
    return rows[0]?.value ?? 0;
  } catch {
    return 0;
  }
}

export default async function Home() {
  const downloadCount = await getDownloadCount();

  return (
    <main className="relative min-h-screen bg-ink overflow-x-hidden">
      <Nav />
      <Hero downloadCount={downloadCount} />
      <Stats downloadCount={downloadCount} />
      <Features />
      <DemoPreview />
      <HowItWorks />
      <Waitlist />
      <Footer />
    </main>
  );
}
