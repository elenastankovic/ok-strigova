# OK Štrigova, web stranica

Stranica Odbojkaškog kluba Štrigova. Astro, statički build, objava na Cloudflare Pages.

## Pokretanje

```bash
npm install
npm run dev
```

Otvorite http://localhost:4321. Svaka promjena u `src/` odmah se vidi u pregledniku.

## Gdje se što mijenja

| datoteka | sadržaj |
| --- | --- |
| `src/data/klub.ts` | naziv, adresa, telefon, kontakt osoba, dvorana, sezona, datum zadnje provjere |
| `src/data/ekipe.ts` | popis ekipa, njihova natjecanja i kratki opisi |
| `src/data/natjecanja.ts` | tablice, rezultati, sljedeće utakmice i povijest kluba |
| `src/pages/*.astro` | stranice: naslovna, O klubu, Ekipe, Natjecanja, Kontakt |
| `src/components/` | zaglavlje, podnožje, teren, popis utakmica, tablica |
| `src/styles/global.css` | boje, tipografija i zajednički stilovi |
| `public/logo.png` | grb kluba |

Rezultati i tablice ne osvježavaju se sami. Nakon svakog kola prepišite ih s osvz.hr (3. HOL Sjever)
i osmz.hr (4. HOL Međimurje, mala i mini odbojka) u `src/data/natjecanja.ts` i promijenite
`azurirano` u `src/data/klub.ts`.

## Objava

Stranica je uživo na https://elenastankovic.github.io/<ime-repozitorija>, dakle
https://elenastankovic.github.io/ok-strigova nakon preimenovanja repozitorija u `ok-strigova`.

Objavu radi GitHub Actions (`.github/workflows/deploy.yml`): svaki push na granu `main` pokrene build i
objavi `dist/` na GitHub Pages, obično za jednu do dvije minute. Tijek rada:

```bash
git add -A
git commit -m "što se promijenilo"
git push
```

Napredak se vidi pod karticom Actions u repozitoriju. Ako objava padne na koraku "Postavi GitHub Pages",
vlasnik repozitorija mora jednom u Settings → Pages postaviti Source na **GitHub Actions**.

Stranica živi na podputanji s imenom repozitorija (`base` u `astro.config.mjs` čita se iz
`GITHUB_REPOSITORY` na GitHub Actionsu), pa sve unutarnje poveznice idu kroz funkciju `p()` iz
`src/lib/putanja.ts`. Preimenovanje repozitorija zato ne traži nikakvu promjenu koda. Uz vlastitu
domenu promijenite `site` i postavite `base` na `/`.
