# Claudia — Landing Page

> Marketing, waitlist & admin page for the **Claudia** Chrome Extension.  
> **Next.js 14 · Tailwind CSS · Neon · Drizzle ORM · Clerk · Cloudflare Pages**

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 App Router |
| Styling | Tailwind CSS |
| Database | Neon (serverless PostgreSQL) |
| ORM | Drizzle ORM |
| Auth | Clerk |
| Hosting | Cloudflare Pages |
| Runtime | Edge (all routes) |

---

## Local Setup

```bash
git clone https://github.com/mahtamun-hoque-fahim/claudia-landing.git
cd claudia-landing
npm install
cp .env.example .env.local   # fill in your keys
npm run db:push               # push schema to Neon
npm run dev
```

---

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) → **Create a project** → **Connect to Git**
2. Select `mahtamun-hoque-fahim/claudia-landing`
3. Set build settings:
   - **Framework preset**: Next.js
   - **Build command**: `npx @cloudflare/next-on-pages@1`
   - **Output directory**: `.vercel/output/static`
4. Add environment variables (see below)
5. Click **Save and Deploy**

### Option B — Wrangler CLI
```bash
npm run pages:build
npx wrangler pages deploy .vercel/output/static --project-name claudia-landing
```

### Environment variables to add in Cloudflare dashboard
```
DATABASE_URL                        = postgresql://...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY   = pk_test_...
CLERK_SECRET_KEY                    = sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL       = /sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL       = /sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = /admin
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = /admin
```

---

## Neon Setup

Run this once in the [Neon SQL Editor](https://console.neon.tech):

```sql
CREATE TABLE IF NOT EXISTS claudia_waitlist (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email      text NOT NULL UNIQUE,
  created_at timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS claudia_stats (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  key        text NOT NULL UNIQUE,
  value      bigint NOT NULL DEFAULT 0,
  updated_at timestamp DEFAULT now() NOT NULL
);

INSERT INTO claudia_stats (key, value) VALUES ('downloads', 0) ON CONFLICT DO NOTHING;
```

---

## Made by

[Mahtamun Hoque Fahim](https://mahtamundesigns.vercel.app) — Designer & Full-Stack Developer from Bangladesh.

MIT License
