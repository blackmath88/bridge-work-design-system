/* ============================================================
   bridge-work pictogram REGISTRY · canon v1.3
   Every mark as data. `draw(h, A)` receives the helper set and the
   active accent hex, returns parts[]. One registry → library page,
   <Pictogram/> component, and the validator all read this.

   Adding a mark: give it id, cat, hint (must pass the name-it test),
   and a draw() using only the helpers. Run `npm run icons:check`.
   ============================================================ */

export const CATEGORIES = [
  'UI · Web app', 'AI', 'M365 · Collaboration',
  'Governance · Security', 'People', 'Data · Topics', 'Onboarding',
];

/* h = { PL,PC,PR,PP,D,SQ,ARC,LF,HALF } ; A = accent hex */
export const PICTOGRAMS = [
  // ---- UI · Web app ----
  { id:'home', cat:'UI · Web app', hint:'House: roof strokes, body, solid door.',
    draw:(h,A)=>[h.PL(16,56,60,16),h.PL(60,16,104,56),h.PR(28,56,64,48),h.D(52,76,20,null,A)] },
  { id:'search', cat:'UI · Web app', hint:'Magnifier; the find is solid.',
    draw:(h,A)=>[h.PC(20,20,52),h.PL(66,66,100,100),h.D(38,38,18,null,A)] },
  { id:'settings', cat:'UI · Web app', hint:'Ring, spokes, solid core.',
    draw:(h,A)=>[h.PC(34,34,52),h.PL(60,10,60,26),h.PL(60,94,60,110),h.PL(10,60,26,60),h.PL(94,60,110,60),h.D(50,50,20,null,A)] },
  { id:'menu', cat:'UI · Web app', hint:'Three lines; the current one signalled.',
    draw:(h,A)=>[h.D(14,50,20,null,A),h.PL(20,32,100,32),h.PL(44,60,100,60),h.PL(20,88,100,88)] },
  { id:'close', cat:'UI · Web app', hint:'Pure UI glyph — stroke-only.',
    draw:(h)=>[h.PL(30,30,90,90),h.PL(90,30,30,90)] },
  { id:'plus', cat:'UI · Web app', hint:'Pure UI glyph — stroke-only.',
    draw:(h)=>[h.PL(60,22,60,98),h.PL(22,60,98,60)] },
  { id:'check', cat:'UI · Web app', hint:'Confirmation; the vertex is the signal.',
    draw:(h,A)=>[h.PL(22,62,48,88),h.PL(48,88,100,36),h.D(39,77,20,null,A)] },
  { id:'arrow', cat:'UI · Web app', hint:'House arrow: stroke → destination disc. No triangle heads.',
    draw:(h,A)=>[h.PL(14,60,72,60),h.D(74,46,28,null,A)] },
  { id:'download', cat:'UI · Web app', hint:'Path down onto the ground.',
    draw:(h,A)=>[h.PL(60,14,60,58),h.D(46,56,28,null,A),h.PL(22,102,98,102)] },
  { id:'edit', cat:'UI · Web app', hint:'45° pen, solid nib.',
    draw:(h,A)=>[h.PL(30,92,76,46),h.SQ(70,24,24,null,A,45)] },
  { id:'link', cat:'UI · Web app', hint:'Two rings, one join.',
    draw:(h,A)=>[h.PC(12,40,44),h.PC(64,40,44),h.LF(50,52,20,null,A)] },
  { id:'external', cat:'UI · Web app', hint:'Out of the box, to the destination.',
    draw:(h,A)=>[h.PR(18,44,52,56),h.PL(54,64,90,28),h.D(88,12,20,null,A)] },

  // ---- AI ----
  { id:'prompt', cat:'AI', hint:'Speech bubble: signal + line.',
    draw:(h,A)=>[h.PR(16,22,80,48),h.PL(36,70,36,92),h.PL(36,92,56,72),h.D(32,38,16,null,A),h.PL(58,46,82,46)] },
  { id:'network', cat:'AI', hint:'Four nodes, solid core, 45° links.',
    draw:(h,A)=>[h.PC(14,14,32),h.PC(74,14,32),h.PC(14,74,32),h.PC(74,74,32),h.PL(48,48,36,36),h.PL(72,48,84,36),h.PL(48,72,36,84),h.PL(72,72,84,84),h.D(46,46,28,null,A)] },
  { id:'spark', cat:'AI', hint:'Generation: rays from a solid core.',
    draw:(h,A)=>[h.PL(60,12,60,32),h.PL(60,88,60,108),h.PL(12,60,32,60),h.PL(88,60,108,60),h.PL(26,26,40,40),h.PL(94,26,80,40),h.PL(26,94,40,80),h.PL(94,94,80,80),h.D(48,48,24,null,A)] },
  { id:'pipeline', cat:'AI', hint:'Stage → stage → stage; the middle is live.',
    draw:(h,A)=>[h.PC(6,46,28),h.PL(36,60,46,60),h.D(48,46,28,null,A),h.PL(78,60,88,60),h.PC(86,46,28)] },
  { id:'transform', cat:'AI', hint:'Input, turned by the arc, becomes output.',
    draw:(h,A)=>[h.PR(12,38,34,34),h.ARC(50,48,26,null,A),h.PC(78,68,32)] },

  // ---- M365 · Collaboration ----
  { id:'chat', cat:'M365 · Collaboration', hint:'Two bubbles; the reply is live.',
    draw:(h,A)=>[h.PR(16,18,56,38),h.PR(48,46,56,38),h.D(66,58,16,null,A)] },
  { id:'calendar', cat:'M365 · Collaboration', hint:'Binding, header, the day that matters.',
    draw:(h,A)=>[h.PR(18,26,84,74),h.PL(38,14,38,34),h.PL(82,14,82,34),h.PL(18,50,102,50),h.SQ(68,64,18,null,A)] },
  { id:'mail', cat:'M365 · Collaboration', hint:'Envelope; the message at the fold.',
    draw:(h,A)=>[h.PR(16,28,88,64),h.PL(16,30,60,72),h.PL(104,30,60,72),h.D(52,76,16,null,A)] },
  { id:'document', cat:'M365 · Collaboration', hint:'Sheet, lines, title block.',
    draw:(h,A)=>[h.PR(28,12,64,96),h.SQ(74,18,14,null,A),h.PL(40,40,78,40),h.PL(40,58,78,58),h.PL(40,76,62,76)] },
  { id:'folder', cat:'M365 · Collaboration', hint:'Tab + body; contents signalled.',
    draw:(h,A)=>[h.PL(16,40,16,28),h.PL(16,28,44,28),h.PL(44,28,52,40),h.PR(16,40,88,52),h.D(52,58,18,null,A)] },
  { id:'board', cat:'M365 · Collaboration', hint:'Training board, one tile activated.',
    draw:(h,A)=>[h.PR(20,16,80,54),h.PL(46,70,32,96),h.PL(74,70,88,96),h.SQ(32,28,16,null,A),h.PR(56,28,16,16)] },
  { id:'workshop', cat:'M365 · Collaboration', hint:'Three at the table; the engaged one solid.',
    draw:(h,A)=>[h.PL(14,84,106,84),h.PC(18,36,20),h.D(48,32,24,null,A),h.PC(82,36,20),h.PL(28,60,28,82),h.PL(60,60,60,82),h.PL(92,60,92,82)] },

  // ---- Governance · Security ----
  { id:'shield', cat:'Governance · Security', hint:'Angular shield; protection signalled.',
    draw:(h,A)=>[h.PL(28,18,92,18),h.PL(28,18,28,58),h.PL(92,18,92,58),h.PL(28,58,60,90),h.PL(92,58,60,90),h.D(48,32,24,null,A)] },
  { id:'lock', cat:'Governance · Security', hint:'Square shackle — our lock has no curve.',
    draw:(h,A)=>[h.PR(26,54,68,50),h.PL(38,54,38,30),h.PL(82,54,82,30),h.PL(38,30,82,30),h.D(50,68,20,null,A)] },
  { id:'key', cat:'Governance · Security', hint:'Bow, shaft, teeth; the secret solid.',
    draw:(h,A)=>[h.PC(10,30,46),h.PL(54,53,104,53),h.PL(82,53,82,70),h.PL(100,53,100,70),h.D(25,45,16,null,A)] },
  { id:'audit', cat:'Governance · Security', hint:'The document under the lens.',
    draw:(h,A)=>[h.PR(20,12,52,72),h.PC(44,40,46),h.PL(88,86,104,102),h.D(58,54,18,null,A)] },
  { id:'policy', cat:'Governance · Security', hint:'The rulebook; the seal solid.',
    draw:(h,A)=>[h.PR(28,14,64,92),h.PL(46,14,46,106),h.SQ(58,28,14,null,A),h.PL(58,56,80,56),h.PL(58,72,80,72)] },
  { id:'checklist', cat:'Governance · Security', hint:'Checks, lines, the open item.',
    draw:(h,A)=>[h.PR(20,10,80,100),h.PP('32,34 40,42 54,24'),h.PL(62,34,88,34),h.PP('32,62 40,70 54,52'),h.PL(62,62,88,62),h.D(33,82,14,null,A),h.PL(62,90,88,90)] },
  { id:'alert', cat:'Governance · Security', hint:'Exclamation: the stroke, and the solid point.',
    draw:(h,A)=>[h.PL(60,14,60,60),h.D(46,74,28,null,A)] },
  { id:'trail', cat:'Governance · Security', hint:'Audit trail: stepwise, source to signal.',
    draw:(h,A)=>[h.PC(8,82,26),h.PP('36,95 58,95 58,58 84,58'),h.D(86,40,28,null,A)] },

  // ---- People ----
  { id:'person', cat:'People', hint:'The anatomy: solid head, 0/45/90 body.',
    draw:(h,A)=>[h.D(48,4,24,null,A),h.PL(60,30,60,68),h.PL(60,42,38,64),h.PL(60,42,82,64),h.PL(60,68,42,96),h.PL(60,68,78,96)] },
  { id:'profile', cat:'People', hint:'The bust: solid head, angular shoulders.',
    draw:(h,A)=>[h.D(46,12,28,null,A),h.PL(24,98,46,76),h.PL(96,98,74,76),h.PL(46,76,74,76)] },
  { id:'team', cat:'People', hint:'Three heads; the centre engaged.',
    draw:(h,A)=>[h.PC(8,34,26),h.D(44,26,32,null,A),h.PC(86,34,26),h.PL(10,76,36,76),h.PL(46,82,74,82),h.PL(84,76,110,76)] },
  { id:'talk', cat:'People', hint:'Two parties; the exchange is the solid leaf.',
    draw:(h,A)=>[h.PC(14,16,26),h.PC(68,16,26),h.LF(43,10,22,null,A),h.PL(12,60,42,60),h.PL(70,60,100,60)] },

  // ---- Data · Topics ----
  { id:'workflow', cat:'Data · Topics', hint:'Mapped boxes; the active node solid.',
    draw:(h,A)=>[h.SQ(14,14,30,null,A),h.PR(74,14,30,30),h.PR(44,72,30,30),h.PL(46,29,74,29),h.PL(59,46,59,72)] },
  { id:'chart', cat:'Data · Topics', hint:'Growth at 45°; the peak is the point.',
    draw:(h,A)=>[h.PL(16,14,16,100),h.PL(16,100,104,100),h.PP('28,84 52,60 68,76 92,52'),h.D(88,36,24,null,A)] },
  { id:'globe', cat:'Data · Topics', hint:'The connected world; centre live.',
    draw:(h,A)=>[h.PC(18,18,84),h.PL(60,18,60,102),h.PL(18,60,102,60),h.D(51,51,18,null,A)] },
  { id:'lab', cat:'Data · Topics', hint:'The flask; the reaction solid.',
    draw:(h,A)=>[h.PL(50,8,50,36),h.PL(70,8,70,36),h.PL(44,8,76,8),h.PC(34,36,52),h.D(48,52,24,null,A)] },
  { id:'translate', cat:'Data · Topics', hint:'Document → arc → practice.',
    draw:(h,A)=>[h.PR(14,10,40,52),h.PL(24,26,44,26),h.PL(24,40,44,40),h.ARC(54,58,26,null,A),h.PC(82,84,30)] },
  { id:'architecture', cat:'Data · Topics', hint:'Blocks placed; the next piece arriving.',
    draw:(h,A)=>[h.PR(18,70,30,30),h.PR(56,70,30,30),h.PR(37,32,30,30),h.ARC(84,6,24,null,A)] },

  // ---- Onboarding (M365) ----
  { id:'signin', cat:'Onboarding', hint:'Door + arrow in, to the solid destination.',
    draw:(h,A)=>[h.PR(54,16,46,88),h.PL(16,60,68,60),h.D(56,46,28,null,A),h.PL(40,44,56,60),h.PL(40,76,56,60)] },
  { id:'mfa', cat:'Onboarding', hint:'Device + the verifying check.',
    draw:(h,A)=>[h.PR(36,10,48,100),h.PL(50,20,70,20),h.PP('45,64 55,74 75,50'),h.D(48,86,12,null,A)] },
  { id:'welcome', cat:'Onboarding', hint:'Open door, threshold lit.',
    draw:(h,A)=>[h.PR(34,16,52,88),h.HALF(46,40,28,null,A),h.PL(20,104,100,104)] },
  { id:'step', cat:'Onboarding', hint:'A journey node (current).',
    draw:(h,A)=>[h.PC(24,24,72),h.D(46,46,28,null,A)] },
  { id:'done', cat:'Onboarding', hint:'Completed step — check at the vertex.',
    draw:(h,A)=>[h.PC(18,18,84),h.PP('38,62 54,78 84,40'),h.D(47,60,16,null,A)] },
];

export const byCategory = () =>
  CATEGORIES.map(cat => ({ cat, items: PICTOGRAMS.filter(p => p.cat === cat) }))
            .filter(g => g.items.length);
