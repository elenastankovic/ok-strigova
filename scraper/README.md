# Scraper

Dohvaća raspored, rezultate i poredak svih ekipa OK Štrigova sa stranica županijskih saveza
(osvz.hr i osmz.hr), koje nemaju API, pa se podaci čitaju iz HTML-a. Rezultat je
`data/snapshot.json`, jedini ulaz u web stranicu.

```bash
npm run scrape                 # puni prolaz, oko 35 zahtjeva s razmakom od 0,8 s
npm run scrape -- --cache      # sprema sirovi HTML u scraper/.cache (razvoj)
npm run scrape -- --no-details # preskače stranice pojedinih utakmica
npm test                       # testovi parsera nad scraper/fixtures
```

- `src/parse/` čita tri vrste stranica: izbornik natjecanja, natjecanje (poredak i kola),
  ekipu i utakmicu (vrijeme, dvorana, suci).
- `src/dedupe.ts` uklanja natjecanja koja oba saveza objavljuju s istim utakmicama.
- `src/teams.ts` povezuje ekipe kluba s natjecanjima i daje im jedinstvene slugove.

Ako se HTML saveza promijeni, prvo padnu testovi: spremite nove stranice u `fixtures/` i
prilagodite parsere.
