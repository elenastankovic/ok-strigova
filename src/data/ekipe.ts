// Ekipe kluba u sezoni 2026./27. Redoslijed ovdje je redoslijed na stranici.
// Poredak, rezultati i raspored dolaze iz data/snapshot.json (scraper); ovdje su
// samo opisi i veza na ekipu u snapshotu (snapshotSlug). Ekipe bez natjecanja na
// stranicama saveza (npr. juniorke) imaju samo opis.
//
// Fotografija: stavite datoteku u public/slike (npr. 'public/slike/ekipa-seniorke.jpg')
// i upišite fotografija: '/slike/ekipa-seniorke.jpg'. Trener: trener: { ime: 'Ana Horvat', telefon: '091 123 4567' }.
export type Trener = {
  ime: string;
  telefon?: string;
};

export type Ekipa = {
  slug: string;
  naziv: string;
  kategorija: string;
  snapshotSlug?: string;
  natjecanje?: string;
  organizator?: string;
  opis: string;
  prva?: boolean;
  fotografija?: string;
  trener?: Trener;
};

export const ekipe: Ekipa[] = [
  {
    slug: 'seniorke',
    naziv: 'OK Štrigova',
    kategorija: 'Seniorke, prva ekipa',
    snapshotSlug: 'ok-strigova',
    organizator: 'Odbojkaški savez Varaždinske županije',
    opis:
      'Prva ekipa kluba igra ligu od 13 klubova iz Međimurja i Varaždinske županije, 26 kola od listopada do svibnja. U sezoni 2023./24. završila je skupinu Sjever 2. lige na prvom mjestu.',
    prva: true,
    trener: { ime: 'Siniša Stanković', telefon: '091 730 1905' },
  },
  {
    slug: 'strigova-2',
    naziv: 'OK Štrigova 2',
    kategorija: 'Seniorke, druga ekipa',
    snapshotSlug: 'ok-strigova-2',
    organizator: 'Odbojkaški savez Međimurske županije',
    opis: 'Druga seniorska ekipa igra županijsku ligu, 22 kola od listopada do travnja.',
  },
  {
    slug: 'strigova-3',
    naziv: 'OK Štrigova 3',
    kategorija: 'Seniorke, treća ekipa',
    snapshotSlug: 'ok-strigova-3',
    organizator: 'Odbojkaški savez Međimurske županije',
    opis: 'Treća seniorska ekipa igra istu ligu kao i druga, pa se dvije ekipe kluba u sezoni sretnu i međusobno.',
  },
  {
    slug: 'juniorke',
    naziv: 'OK Štrigova',
    kategorija: 'Juniorke',
    natjecanje: 'Natjecanje za sezonu 2026./27. još nije objavljeno',
    organizator: 'Odbojkaški savez Međimurske županije',
    opis: 'Juniorska ekipa prijavljena je pri županijskom savezu. Čim savez objavi natjecanje, raspored će se sam pojaviti ovdje.',
  },
  {
    slug: 'u13',
    naziv: 'OK Štrigova',
    kategorija: 'Najmlađe kadetkinje U13',
    snapshotSlug: 'ok-strigova-u13',
    organizator: 'Odbojkaški savez Varaždinske županije i Međimurske županije',
    opis: 'Mala odbojka igra se na manjem terenu, na dva dobivena seta. Kola se igraju nedjeljom kao turniri, pa ekipa odigra više utakmica u jednom danu.',
  },
  {
    slug: 'u11',
    naziv: 'OK Štrigova',
    kategorija: 'Najmlađe kadetkinje U11',
    natjecanje: 'Prvenstvo Međimurja u mini odbojci',
    organizator: 'Odbojkaški savez Međimurske županije',
    opis: 'Najmlađa skupina kluba. Mini odbojka je prvi korak: manji teren, lakša lopta i puno igre. Nove djevojčice mogu se priključiti tijekom cijele sezone.',
  },
];
