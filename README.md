# AQTech — Company Portfolio Website

A premium, bilingual (English / Arabic with full RTL support) marketing
site for **AQTech**, built with Next.js 16, TypeScript, Tailwind CSS v4,
Framer Motion, and a lightweight Three.js hero background.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Structure

- `src/app` – App Router entry (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/components` – Navbar, Hero, About, Services, Process, Portfolio,
  Contact, Footer, and the `three/` folder holding the animated hero
  background (particle field + wireframe icosahedron).
- `src/context/LanguageContext.tsx` – EN/AR language state, persisted to
  `localStorage`, flips `dir` to `rtl` automatically.
- `src/data` – all editable content:
  - `company.ts` – name, contact details, stats, values, process steps.
  - `services.ts` – the 6 service cards.
  - `projects.ts` – portfolio/case-study items.
  - `translations.ts` – every UI string in English and Arabic.

## ⚠️ Placeholder content to replace before launch

This is a fully working, production-quality template, but the content
below is **sample data** and should be swapped for AQTech's real
information:

- **Contact details** in `src/data/company.ts` — email, phone, address,
  and social links are placeholders.
- **Stats** in `src/data/company.ts` (`stats` array) — projects
  delivered, clients, years of experience, etc. are illustrative;
  replace with AQTech's real numbers.
- **Portfolio projects** in `src/data/projects.ts` — these are sample
  case studies (Nova Commerce, FinTrack, MedConnect, etc.). Replace
  with AQTech's actual client work, and add real screenshots under
  `public/projects/` (the cards currently render a gradient + initials
  placeholder instead of an image).
- **Contact form** in `src/components/Contact.tsx` — currently only
  simulates a submission. Wire it to a real endpoint (an API route, or
  a service like Resend/Formspree) before launch.
- **Metadata / domain** in `src/app/layout.tsx` — `siteUrl` is a
  placeholder; update it to AQTech's real domain once live.

## Design system

Colors, fonts, and reusable utility classes (`.glass`, `.gradient-text`,
`.gradient-bg`, `.card-hover`, `.section-eyebrow`, `.grid-pattern`) live
in `src/app/globals.css`. Headings use Manrope (Cairo in Arabic), body
text uses Inter.
# Aq-tech
