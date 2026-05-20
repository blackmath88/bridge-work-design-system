# bridge-work.ai — Handoff Guide

## What's in this package

| File | Purpose |
|------|---------|
| `design-system.json` | Complete specification — philosophy, palette, typography, layout, animation, copy, tool theming rules |
| `tokens.css` | CSS custom properties ready to import. Change `--accent` to theme any tool. |
| `compositions.json` | All tile grid data — hero, capability strips, card grids, strip divider sequence |
| `primitives.json` | SVG path templates for every geometric shape + signal mark |
| `HANDOFF.md` | This file |

## How to build an HTML prototype

### 1. Start with tokens.css
```html
<link href="tokens.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=Inter:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
```

### 2. Set the accent color for the tool
```css
:root { --accent: #c48a2a; } /* amber for Insight tool */
```

### 3. Build the breathing grid
Read `compositions.json` → `hero_grid.tiles`. For each tile:
- Place in an SVG viewBox using `col * (tileSize + gap)` positioning
- Use the `primitives.json` templates to render the shape
- Animate opacity with: `baseOp + (peakOp - baseOp) * max(0, sin(time * speed + phase))^2`
- If `dim_left` is true, multiply opacity range by `0.15 + (col / (cols-1)) * 0.85`

### 4. Build capability bands
Each band has 3 tiles from `compositions.json` → `capability_strips`.
- Idle: geometry at 20% opacity, number nearly invisible
- Hover: geometry brightens, number turns teal, title slides right
- Active (clicked): middle tile turns `--accent` color, number turns `--accent`
- Expand reveals 3 value props

### 5. Tool theming
To create a different tool page:
1. Change `--accent` in CSS
2. Signal mark arc uses `--accent`
3. Wordmark `.ai` uses `--accent`
4. All active/interactive states use `--accent`
5. Everything else stays identical

### Key rules
- Background is ALWAYS `--black` (#050505)
- Accent color NEVER appears in background grids
- Cream tiles in grids: max 2, at lower opacity
- Rose/accent only appears through interaction or in the signal mark
- Typography carries the experience — generous spacing, restrained weight
- Animation is calm, architectural — no bounce, no playfulness
- Easing: always `cubic-bezier(0.22, 1, 0.36, 1)`

## Page structure
```
[NAV — fixed, transparent → glass on scroll]
[HERO — 100vh, breathing grid bg, headline + opener]
[STRIP DIVIDER]
[CAPABILITIES — 3 expandable bands with geometry]
[STRIP DIVIDER]
[CONTACT — mark + Ready? + email + LinkedIn]
[FOOTER — tiny, nearly invisible]
```
