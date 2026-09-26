# Mandimbisoa Randy — Portfolio

Personal site for Mandimbisoa Randy, full-stack and Dev/Sec Ops developer based in
Antananarivo, Madagascar. Bilingual (French / English), light and dark themes,
built with Next.js App Router and Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Layout

```
app/          routes, global stylesheet, contact API
components/   one folder per page section, each with an index barrel
  contact/      contact section + form
  decor/        vine and blossom motifs
  experience/   education and roles timeline
  hero/         hero section
  layout/       nav, footer, section shell
  projects/     project notebook carousel + placeholder artwork
  providers/    locale and theme context
  skills/       toolkit section
  ui/           icons and scroll-reveal primitive
lib/          typed FR/EN content dictionary
public/       static assets
```

Copy lives in one place: `lib/content.ts` holds the `fr` and `en` dictionaries
behind a single type, so a missing translation is a compile error rather than a
blank string on the page.

## Theming

`data-theme` on `<html>` drives the palette, and a small inline script in
`app/layout.tsx` applies the stored value before first paint to avoid a flash.
The hero band scopes its own `--hero-*` tokens so it can invert independently of
the rest of the page.

The palette is drawn from the official Gorilla Tag fur colour codes: brand green
`#93c852`, ink `#1b1b1b`, paper `#ffffff` / `#f7f7f7`. Type is Poppins, loaded
through `next/font`.

## Contact form

`app/api/contact/route.ts` delivers through Gmail SMTP when `GMAIL_USER` and
`GMAIL_APP_PW` are set, falls back to the Resend API when `RESEND_API_KEY` is
present, and degrades to a `mailto:` link if neither is configured. The endpoint
also strips header-injection characters and drops submissions that fill the
honeypot field.

Use a Google **App Password**, not your account password: enable 2-Step
Verification, then create one at <https://myaccount.google.com/apppasswords>.

## Reaching the dev server from another device

`next dev` already binds `0.0.0.0`, so the server is reachable on the machine's
LAN address out of the box. What blocks it is Next's cross-origin guard on
development assets: a request that arrives as `Sec-Fetch-Site: cross-site` with
`Sec-Fetch-Mode: no-cors` is answered with **403** unless its `Referer` host is
allowlisted, which leaves the page unstyled and unhydrated on a phone or laptop.

`allowedDevOrigins` in `next.config.ts` covers the RFC1918 ranges plus `*.local`.
Note that each `*` matches exactly one dot-separated label, with no partial-label
matching, so `192.168.*` does **not** cover `192.168.1.55` — it needs
`192.168.*.*`. Origins outside those ranges stay blocked.
