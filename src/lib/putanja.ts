// Stranica na GitHub Pagesu živi na podputanji (base iz astro.config.mjs), pa sve
// unutarnje poveznice i datoteke iz public/ idu kroz ovu funkciju. Putanje stranica
// dobivaju kosu crtu na kraju (GitHub Pages ih tako poslužuje bez preusmjeravanja),
// datoteke s nastavkom (.ics, .png) ostaju kakve jesu.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function p(put: string): string {
  const [path = '', hash] = put.split('#');
  let joined = `${base}${path.startsWith('/') ? '' : '/'}${path}`;
  const last = joined.split('/').pop() ?? '';
  if (!last.includes('.') && !joined.endsWith('/')) joined += '/';
  return hash ? `${joined}#${hash}` : joined;
}

export function bezKoseCrte(put: string): string {
  return put.length > 1 ? put.replace(/\/$/, '') : put;
}
