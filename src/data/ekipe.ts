// Ekipe kluba u sezoni 2026./27. Redoslijed ovdje je redoslijed na stranici.
// Poredak, rezultati i raspored dolaze iz data/snapshot.json (scraper); ovdje su
// samo opisi i veza na ekipu u snapshotu (snapshotSlug). Ekipe bez natjecanja na
// stranicama saveza imaju samo opis i natjecanje upisano ručno.
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
    kategorija: 'Seniorke',
    snapshotSlug: 'ok-strigova-2',
    organizator: 'Odbojkaški savez Međimurske županije',
    opis: 'Kadetkinje igraju županijsku ligu 4. HOL Međimurje, 22 kola od listopada do travnja.',
    trener: { ime: 'Elena Stanković', telefon: '091 930 0666' },
  },
  {
    slug: 'strigova-3',
    naziv: 'OK Štrigova 3',
    kategorija: 'Seniorke',
    snapshotSlug: 'ok-strigova-3',
    organizator: 'Odbojkaški savez Međimurske županije',
    opis: 'Mlađe kadetkinje igraju istu ligu kao i kadetkinje, pa se dvije ekipe kluba u sezoni sretnu i međusobno.',
    trener: { ime: 'Ana Semenič', telefon: '095 889 4445' },
  },
  {
    slug: 'u13',
    naziv: 'OK Štrigova',
    kategorija: 'Najmlađe kadetkinje U13',
    snapshotSlug: 'ok-strigova-u13',
    organizator: 'Odbojkaški savez Varaždinske županije i Međimurske županije',
    opis: 'Mala odbojka igra se na manjem terenu, na dva dobivena seta. Kola se igraju nedjeljom kao turniri, pa ekipa odigra više utakmica u jednom danu.',
    trener: { ime: 'Emili Puklavec', telefon: '095 314 0933' },
  },
  {
    slug: 'u11',
    naziv: 'OK Štrigova',
    kategorija: 'Mini odbojka U11',
    natjecanje: 'Prvenstvo Međimurja u mini odbojci',
    organizator: 'Odbojkaški savez Međimurske županije',
    opis: 'Najmlađa skupina kluba. Mini odbojka je prvi korak: manji teren, lakša lopta i puno igre. Nove djevojčice mogu se priključiti tijekom cijele sezone.',
    trener: { ime: 'Ana Šinko', telefon: '098 135 4350' },
  },
];
