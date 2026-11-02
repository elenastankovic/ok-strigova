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
| `data/snapshot.json` | rasporedi, rezultati i tablice svih ekipa; generira ga scraper, ne uređuje se ručno |
| `scraper/` | scraper stranica saveza (osvz.hr, osmz.hr), testovi i spremljeni HTML za testove |
| `src/data/klub.ts` | naziv, adresa, telefon, kontakt osoba, dvorana, sezona |
| `src/data/ekipe.ts` | popis ekipa, opisi i veza na ekipu u snapshotu |
| `src/data/uprava.ts` | hijerarhija uprave |
| `src/data/povijest.ts` | povijest kluba za stranicu O klubu |
| `src/pages/` | naslovna, Utakmice, Ekipe (+ stranica ekipe), Natjecanja (+ stranica natjecanja), O klubu, Uprava, Kontakt, iCal kalendari |
| `src/lib/data.ts` | sloj nad snapshotom: nadolazeće utakmice, rezultati, poredak, grupiranje po tjednima i kolima |
| `src/components/` | zaglavlje, podnožje, teren, utakmica, popis utakmica, tablica, sažetak ekipe |
| `src/styles/global.css` | boje, tipografija i zajednički stilovi |
| `public/logo.png` | grb kluba |

## Podaci o utakmicama

Stranice saveza nemaju API, pa `npm run scrape` čita HTML i zapisuje `data/snapshot.json`:
naslovnica saveza (izbornik natjecanja), svako natjecanje u kojem igra ekipa kluba (poredak i sva kola),
stranice ekipa kluba (dvorana, kontakt) i stranice utakmica kluba (vrijeme, dvorana, suci). Jedan puni
prolaz je oko 35 zahtjeva s razmakom od 0,8 s. Natjecanje koje oba saveza objavljuju s istim utakmicama
(npr. U13) prikazuje se samo jednom.

Workflow `Osvježi podatke` (`.github/workflows/scrape.yml`) radi to 4 puta dnevno, zapisuje promjene
u `data/` i, ako ih ima, objavljuje stranicu. Može se pokrenuti i ručno pod karticom Actions.

```bash
npm run scrape                 # puni prolaz
npm run scrape -- --cache      # sprema sirovi HTML u scraper/.cache (razvoj)
npm test                       # testovi parsera nad scraper/fixtures
```

Ako se HTML saveza promijeni, prvo padnu testovi: nove verzije stranica spremite u `scraper/fixtures/`
i prilagodite parsere u `scraper/src/parse/`.

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
