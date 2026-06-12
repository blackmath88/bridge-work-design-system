---
title: The pictogram language
order: 20
summary: Otl Aicher's discipline married to the bridge-work grammar.
---

When a graphic **names** something, it appears as a pictogram. When it decorates, it is ornament — and **ornament never labels**.

**Construction rules:**

1. Strokes at **0° / 45° / 90° only**.
2. Uniform bold weight (7 on a 120 grid), round caps.
3. **Teal structure** — geometry is always coloured.
4. **Curvature is never stroked** — curves enter only as filled forms (disc, quarter-arc, leaf). *Aicher curved his strokes; we never do.* This is the bridge-work signature.
5. **One solid accent** marks the activated element. Amber default; cyan = connect, violet = govern, rose never.
6. **The name-it test:** a viewer can say what it depicts.
7. Pure UI glyphs (close, plus) may be stroke-only.
8. Arrows have **no triangle heads** — a stroke ending in a solid destination disc.

The registry lives in `src/data/pictograms.mjs`; the validator (`npm run icons:check`) enforces these rules at build.
