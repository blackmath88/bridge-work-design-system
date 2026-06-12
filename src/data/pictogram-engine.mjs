/* ============================================================
   bridge-work pictogram engine · canon v1.3
   The shape factory. Structure = teal strokes (0/45/90 only).
   Curves enter ONLY as filled forms. One solid accent.
   This module is the single source — pages, components, and the
   validator all import from here.
   ============================================================ */

export const TEAL = '#1a7a6d';
export const ACCENTS = { amber:'#c48a2a', cyan:'#2a8fa0', violet:'#8a5ac4' }; // rose is never a pictogram accent

/* structure (stroked, teal) — straight lines only */
export const PL = (x1,y1,x2,y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${TEAL}" stroke-width="7" stroke-linecap="round"/>`;
export const PC = (x,y,d) => `<circle cx="${x+d/2}" cy="${y+d/2}" r="${d*.46}" fill="none" stroke="${TEAL}" stroke-width="7"/>`;
export const PR = (x,y,w,h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="none" stroke="${TEAL}" stroke-width="7"/>`;
export const PP = (pts) => `<polyline points="${pts}" fill="none" stroke="${TEAL}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;

/* accent (filled) — curves live here only */
export const D = (x,y,d,c,A='#c48a2a') => `<circle cx="${x+d/2}" cy="${y+d/2}" r="${d/2}" fill="${c||A}"/>`;
export const SQ = (x,y,s,c,A='#c48a2a',rot) => `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${Math.max(2,s*.14)}" fill="${c||A}"${rot?` transform="rotate(${rot} ${x+s/2} ${y+s/2})"`:''}/>`;
export const ARC = (x,y,s,c,A='#c48a2a') => `<path d="M${x} ${y+s} Q${x} ${y} ${x+s} ${y} L${x+s} ${y+s} Z" fill="${c||A}"/>`;
export const LF = (x,y,s,c,A='#c48a2a') => `<path d="M${x} ${y} Q${x+s} ${y} ${x+s} ${y+s} Q${x} ${y+s} ${x} ${y} Z" fill="${c||A}"/>`;
export const HALF = (x,y,s,c,A='#c48a2a') => `<path d="M${x} ${y+s/2} A${s/2} ${s/2} 0 0 1 ${x+s} ${y+s/2} Z" fill="${c||A}"/>`;

/* wrap a parts[] into a complete SVG string */
export const wrap = (parts, { size=120, label } = {}) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="${size}" height="${size}" fill="none"${label?` role="img" aria-label="${label}"`:' aria-hidden="true"'}>${parts.join('')}</svg>`;
