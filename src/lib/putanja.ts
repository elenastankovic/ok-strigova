// Stranica na GitHub Pagesu živi na podputanji (base iz astro.config.mjs),
// pa sve unutarnje poveznice i datoteke iz public/ idu kroz ovu funkciju.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function p(put: string): string {
  return `${base}${put.startsWith('/') ? '' : '/'}${put}`;
}

export function bezKoseCrte(put: string): string {
  return put.length > 1 ? put.replace(/\/$/, '') : put;
}
