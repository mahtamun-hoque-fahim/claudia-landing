import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { stats } from "@/lib/schema";
import { eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    const db = getDb();
    const rows = await db
      .select({ value: stats.value })
      .from(stats)
      .where(eq(stats.key, "downloads"))
      .limit(1);
    return NextResponse.json({ count: rows[0]?.value ?? 0 });
  } catch (err) {
    console.error("Downloads GET error:", err);
    return NextResponse.json({ count: 0 });
  }
}

export async function POST() {
  try {
    const db = getDb();
    const rows = await db
      .update(stats)
      .set({
        value: sql`${stats.value} + 1`,
        updatedAt: sql`now()`,
      })
      .where(eq(stats.key, "downloads"))
      .returning({ value: stats.value });
    return NextResponse.json({ count: rows[0]?.value ?? 0 });
  } catch (err) {
    console.error("Downloads POST error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
