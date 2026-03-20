import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { waitlist } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const db = getDb();
    const clean = email.trim().toLowerCase();

    const existing = await db
      .select({ id: waitlist.id })
      .from(waitlist)
      .where(eq(waitlist.email, clean))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json({ message: "already_subscribed" }, { status: 200 });
    }

    await db.insert(waitlist).values({ email: clean });
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
