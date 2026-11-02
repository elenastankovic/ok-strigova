// Ekipe kluba u sezoni 2026./27. Redoslijed ovdje je redoslijed na stranici.
export type Ekipa = {
  slug: string;
  naziv: string;
  kategorija: string;
  natjecanje: string;
  organizator: string;
  tablica?: string;
  stanje?: string;
  opis: string;
  prva?: boolean;
};

export const ekipe: Ekipa[] = [
  {
    slug: 'seniorke',
    naziv: 'OK Štrigova',
    kategorija: 'Seniorke, prva ekipa',
    natjecanje: '3. hrvatska odbojkaška liga Sjever, skupina Sjever',
    organizator: 'Odbojkaški savez Varaždinske županije',
    tablica: 'https://osvz.hr/index.php?rubrika=utakmica&natjecanje=152',
    stanje: '7. mjesto od 13 nakon 4 kola, 2 pobjede i 2 poraza',
    opis:
      'Prva ekipa kluba igra ligu od 13 klubova iz Međimurja i Varaždinske županije, 26 kola od listopada do svibnja. U sezoni 2023./24. završila je skupinu Sjever 2. lige na prvom mjestu.',
    prva: true,
  },
  {
    slug: 'strigova-2',
    naziv: 'OK Štrigova 2',
    kategorija: 'Seniorke, druga ekipa',
    natjecanje: '4. hrvatska odbojkaška liga Međimurje',
    organizator: 'Odbojkaški savez Međimurske županije',
    tablica: 'https://www.osmz.hr/index.php?rubrika=utakmica&natjecanje=22',
    stanje: '1. mjesto od 11 nakon 4 kola, 3 pobjede i 1 poraz',
    opis:
      'Druga seniorska ekipa igra županijsku ligu i nakon četiri kola drži prvo mjesto. Liga traje od listopada do travnja, 22 kola.',
  },
  {
    slug: 'strigova-3',
    naziv: 'OK Štrigova 3',
    kategorija: 'Seniorke, treća ekipa',
    natjecanje: '4. hrvatska odbojkaška liga Međimurje',
    organizator: 'Odbojkaški savez Međimurske županije',
    tablica: 'https://www.osmz.hr/index.php?rubrika=utakmica&natjecanje=22',
    stanje: '9. mjesto od 11 nakon 4 kola, 1 pobjeda i 3 poraza',
    opis:
      'Treća seniorska ekipa igra istu ligu kao i druga, pa se dvije ekipe kluba u sezoni sretnu i međusobno. U 4. kolu druga ekipa dobila je treću 3:0.',
  },
  {
    slug: 'juniorke',
    naziv: 'OK Štrigova',
    kategorija: 'Juniorke',
    natjecanje: 'Natjecanje za sezonu 2026./27. još nije objavljeno',
    organizator: 'Odbojkaški savez Međimurske županije',
    opis:
      'Juniorska ekipa prijavljena je pri županijskom savezu. Čim savez objavi natjecanje, raspored će biti ovdje.',
  },
  {
    slug: 'u13',
    naziv: 'OK Štrigova',
    kategorija: 'Najmlađe kadetkinje U13',
    natjecanje: 'Prvenstvo Međimurja u maloj odbojci',
    organizator: 'Odbojkaški savez Međimurske županije',
    tablica: 'https://www.osmz.hr/index.php?rubrika=utakmica&natjecanje=23',
    stanje: '5. mjesto od 6 nakon 2 utakmice, 1 pobjeda i 1 poraz',
    opis:
      'Mala odbojka igra se na manjem terenu, na dva dobivena seta. Kola se igraju nedjeljom kao turniri, pa ekipa odigra više utakmica u jednom danu.',
  },
  {
    slug: 'u11',
    naziv: 'OK Štrigova',
    kategorija: 'Najmlađe kadetkinje U11',
    natjecanje: 'Prvenstvo Međimurja u mini odbojci',
    organizator: 'Odbojkaški savez Međimurske županije',
    tablica: 'https://www.osmz.hr/index.php?rubrika=utakmica&natjecanje=24',
    opis:
      'Najmlađa skupina kluba. Mini odbojka je prvi korak: manji teren, lakša lopta i puno igre. Nove djevojčice mogu se priključiti tijekom cijele sezone.',
  },
];
