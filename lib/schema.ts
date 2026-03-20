import { pgTable, uuid, text, bigint, timestamp } from "drizzle-orm/pg-core";

// ── Waitlist ──
export const waitlist = pgTable("claudia_waitlist", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ── Stats (download counter) ──
export const stats = pgTable("claudia_stats", {
  id: uuid("id").defaultRandom().primaryKey(),
  key: text("key").notNull().unique(),
  value: bigint("value", { mode: "number" }).notNull().default(0),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
