/* Canon enforcement. Run: npm run icons:check
   Fails the build if any mark breaks the v1.3 construction rules. */
import * as H from '../src/data/pictogram-engine.mjs';
import { PICTOGRAMS, CATEGORIES } from '../src/data/pictograms.mjs';

const ACC = Object.values(H.ACCENTS);
let errors = 0;
const fail = (id, msg) => { console.error(`  ✗ ${id}: ${msg}`); errors++; };

for (const p of PICTOGRAMS) {
  if (!p.id || !p.cat || !p.hint) { fail(p.id||'?', 'missing id/cat/hint'); continue; }
  if (!CATEGORIES.includes(p.cat)) fail(p.id, `unknown category "${p.cat}"`);
  if (!p.hint || p.hint.length < 8) fail(p.id, 'hint too short to pass the name-it test');

  let svg;
  try { svg = H.wrap(p.draw(H, H.ACCENTS.amber)); }
  catch (e) { fail(p.id, 'draw() threw: ' + e.message); continue; }

  // RULE: structure must be teal — no ink/grey/white strokes
  const strokes = [...svg.matchAll(/stroke="([^"]+)"/g)].map(m=>m[1]);
  for (const s of strokes) if (s !== H.TEAL) fail(p.id, `non-teal stroke "${s}" (geometry is always teal)`);

  // RULE: curves never stroked — no stroked <circle>/<path> is fine for ring/rect,
  // but a stroked <path> with Q/A curve commands is forbidden.
  for (const m of svg.matchAll(/<path[^>]*stroke=/g)) fail(p.id, 'stroked path — curves must be filled, never stroked');

  // RULE: at most one accent COLOUR among fills (one-accent rule)
  const fills = [...svg.matchAll(/fill="([^"]+)"/g)].map(m=>m[1]).filter(f=>f!=='none');
  const accentFills = [...new Set(fills.filter(f=>ACC.includes(f)))];
  if (accentFills.length > 1) fail(p.id, `multiple accent colours ${accentFills.join(',')} (one accent per mark)`);
  if (fills.some(f=>f===H.ACCENTS.amber && false)) {}
  // RULE: rose is never a pictogram accent
  if (fills.includes('#d4416b')) fail(p.id, 'rose fill — rose is semantic, never a pictogram accent');
}

const ids = PICTOGRAMS.map(p=>p.id);
const dupes = ids.filter((id,i)=>ids.indexOf(id)!==i);
if (dupes.length) fail('—', 'duplicate ids: ' + [...new Set(dupes)].join(', '));

if (errors) { console.error(`\n✗ ${errors} canon violation(s) across ${PICTOGRAMS.length} pictograms.\n`); process.exit(1); }
console.log(`\n✓ all ${PICTOGRAMS.length} pictograms pass canon v1.3.\n`);
