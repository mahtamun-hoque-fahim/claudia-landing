# Claudia — Landing Page

> Marketing, waitlist & admin page for the **Claudia** Chrome Extension.  
> Built with **Next.js 14 · Tailwind CSS · Neon · Drizzle ORM · Clerk · Vercel**.

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 App Router |
| Styling | Tailwind CSS |
| Database | Neon (serverless PostgreSQL) |
| ORM | Drizzle ORM |
| Auth | Clerk |
| Hosting | Vercel |

---

## Features

- **Hero** — animated headline, popup mockup, live download counter
- **Stats bar** — real-time download count from Neon
- **Features grid** — 4 cards with inline micro-visuals
- **PDF preview** — dark/light output mockup
- **How it works** — 3-step walkthrough
- **Email waitlist** — Neon-backed, duplicate-safe
- **Admin dashboard** (`/admin`) — Clerk-protected, shows all signups + download count

---

## Local Setup

```bash
# 1. Clone
git clone https://github.com/mahtamun-hoque-fahim/claudia-landing.git
cd claudia-landing

# 2. Install
npm install

# 3. Set env vars
cp .env.example .env.local
# Fill in DATABASE_URL, NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY

# 4. Push schema to Neon
npm run db:push

# 5. Seed the downloads counter (run once in Neon SQL editor)
# INSERT INTO claudia_stats (key, value) VALUES ('downloads', 0) ON CONFLICT DO NOTHING;

# 6. Start dev server
npm run dev
```

---

## Neon Setup

1. Create a project at [neon.tech](https://neon.tech)
2. Copy the **Connection string** into `DATABASE_URL` in `.env.local`
3. Run `npm run db:push` to create tables
4. Seed: run the INSERT above in the Neon SQL editor

---

## Clerk Setup

1. Create an app at [clerk.com](https://clerk.com)
2. Copy **Publishable Key** and **Secret Key** into `.env.local`
3. In Clerk dashboard → **Redirect URLs**, add:
   - Sign-in fallback: `/admin`
   - Sign-up fallback: `/admin`

---

## Deploy to Vercel

```bash
vercel --prod
```

Add these env vars in Vercel dashboard:
- `DATABASE_URL`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL` = `/sign-in`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` = `/admin`

---

## Made by

[Mahtamun Hoque Fahim](https://mahtamundesigns.vercel.app) — Designer & Full-Stack Developer from Bangladesh.

MIT License
