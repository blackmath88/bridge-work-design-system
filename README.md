# bridge-work.ai — Design System

Living documentation, pictogram registry, and canon for the bridge-work.ai visual system. Built with [Astro](https://astro.build) — ships near-zero framework JS, which is "professional means less" made measurable.

**Status:** canon v1.3 · Basel typography · pictogram language

## What's here

| Path | What |
|------|------|
| `src/data/pictogram-engine.mjs` | The shape factory (helpers: PL, PC, PR, D, SQ, ARC, LF, HALF). |
| `src/data/pictograms.mjs` | **The registry** — every pictogram as data. Single source of truth. |
| `src/components/Pictogram.astro` | `<Pictogram id="lock" accent="amber" size={48} />` — build-time inline SVG. |
| `src/styles/tokens.css` | **Canonical tokens.** Everything reconciles toward these. |
| `src/content/concepts/` | The canon as markdown (principle, registers, pictograms, typography). |
| `src/content/intel/` | The webcraft process playbook. |
| `public/prototype/index.html` | The reference landing-page build. |
| `public/handover/m365.html` | Portable pictogram handover for the M365 onboarding tool. |
| `scripts/validate-pictograms.mjs` | Canon enforcement — fails the build on a violation. |

## Develop

```bash
npm install
npm run dev          # local docs site
npm run icons:check  # validate every pictogram against canon v1.3
npm run build        # static output → dist/
```

## Adding a pictogram

1. Add an entry to `src/data/pictograms.mjs` — `id`, `cat`, `hint` (must pass the name-it test), and `draw(h, A)` using only the helpers.
2. `npm run icons:check` — the validator enforces: teal-only strokes, no stroked curves, one accent, no rose.
3. It now appears in the library page and is usable as `<Pictogram id="…" />` everywhere.

## The rules (canon v1.3)

Structure teal · strokes 0/45/90 only · uniform weight, round caps · **curves never stroked** (only filled disc/arc/leaf) · one solid accent (amber default · cyan connect · violet govern · never rose) · UI glyphs may be stroke-only · arrows end in a destination disc, no triangle heads · every mark passes the name-it test.

## Deploy

Cloudflare Pages — build `npm run build`, output `dist`, `NODE_VERSION=22`, framework preset Astro.

## Roadmap

- [ ] Self-host Switzer + Fragment Mono (remove CDN links)
- [ ] Reconcile live React tokens toward `tokens.css`
- [ ] Port pictograms into the site's Focus/Formats sections
- [ ] Build out the public site as Astro (this repo or a sibling), React reserved for app islands (Bridgeboard et al.)
