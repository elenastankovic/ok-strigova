// Rezultati, raspored i tablice. Podaci su s osvz.hr i osmz.hr, ručno prepisani.
// Datum zadnje provjere je u klub.azurirano (src/data/klub.ts).

export type Utakmica = {
  kolo: number;
  datum: string;
  domacin: string;
  gost: string;
  rezultat?: string;
  setovi?: string;
  napomena?: string;
};

export type Redak = {
  mjesto: number;
  ekipa: string;
  odigrano: number;
  pobjede: number;
  porazi: number;
  setovi: string;
  bodovi: number;
};

export const trecaLiga = {
  naziv: '3. HOL Sjever, skupina Sjever',
  puniNaziv: '3. hrvatska odbojkaška liga Sjever, skupina Sjever, seniorke',
  izvor: 'https://osvz.hr/index.php?rubrika=utakmica&natjecanje=152',
  ekipa: 'OK Štrigova',
  odigrano: <Utakmica[]>[
    { kolo: 1, datum: '3. i 4. listopada 2026.', domacin: 'OK Štrigova', gost: 'ŽOK Ivanec 2', rezultat: '3:1', setovi: '25:17, 23:25, 25:13, 25:23' },
    { kolo: 2, datum: '10. i 11. listopada 2026.', domacin: 'OK Cratis Varaždin 3', gost: 'OK Štrigova', rezultat: '3:2', setovi: '18:25, 25:18, 25:21, 20:25, 15:10' },
    { kolo: 3, datum: '17. i 18. listopada 2026.', domacin: 'OK Štrigova', gost: 'OK Plavi 2', rezultat: '3:2', setovi: '15:25, 18:25, 25:21, 25:18, 15:9' },
    { kolo: 4, datum: '24. i 25. listopada 2026.', domacin: 'OK Nedelišće Elting 2', gost: 'OK Štrigova', rezultat: '3:0', setovi: '25:14, 25:20, 25:18' },
  ],
  sljedece: <Utakmica[]>[
    { kolo: 5, datum: '7. ili 8. studenog 2026.', domacin: 'OK Štrigova', gost: 'ŽOK Ludbreg', napomena: 'termin još nije određen' },
    { kolo: 6, datum: '14. ili 15. studenog 2026.', domacin: 'OK Bedex 2', gost: 'OK Štrigova', napomena: 'termin još nije određen' },
    { kolo: 7, datum: '21. ili 22. studenog 2026.', domacin: 'OK Štrigova', gost: 'ŽOK Ivanec 3', napomena: 'termin još nije određen' },
  ],
  tablica: <Redak[]>[
    { mjesto: 1, ekipa: 'OK Nedelišće Elting 2', odigrano: 4, pobjede: 3, porazi: 1, setovi: '11:3', bodovi: 10 },
    { mjesto: 2, ekipa: 'ŽOK Kaštel 2', odigrano: 4, pobjede: 4, porazi: 0, setovi: '12:6', bodovi: 9 },
    { mjesto: 3, ekipa: 'ŽOK Ivanec 3', odigrano: 4, pobjede: 3, porazi: 1, setovi: '9:5', bodovi: 9 },
    { mjesto: 4, ekipa: 'OK Cratis Varaždin 3', odigrano: 4, pobjede: 3, porazi: 1, setovi: '11:8', bodovi: 8 },
    { mjesto: 5, ekipa: 'ŽOK Ivanec 2', odigrano: 4, pobjede: 2, porazi: 2, setovi: '9:7', bodovi: 7 },
    { mjesto: 6, ekipa: 'OK Cratis Varaždin 2', odigrano: 4, pobjede: 2, porazi: 2, setovi: '9:9', bodovi: 6 },
    { mjesto: 7, ekipa: 'OK Štrigova', odigrano: 4, pobjede: 2, porazi: 2, setovi: '8:9', bodovi: 6 },
    { mjesto: 8, ekipa: 'OK Vinica', odigrano: 4, pobjede: 2, porazi: 2, setovi: '8:9', bodovi: 5 },
    { mjesto: 9, ekipa: 'ŽOK Toplice', odigrano: 3, pobjede: 1, porazi: 2, setovi: '5:7', bodovi: 4 },
    { mjesto: 10, ekipa: 'ŽOK Ludbreg', odigrano: 2, pobjede: 1, porazi: 1, setovi: '3:4', bodovi: 3 },
    { mjesto: 11, ekipa: 'OK Plavi 2', odigrano: 4, pobjede: 0, porazi: 4, setovi: '6:12', bodovi: 2 },
    { mjesto: 12, ekipa: 'ŽOK Lepoglava', odigrano: 3, pobjede: 0, porazi: 3, setovi: '2:9', bodovi: 0 },
    { mjesto: 13, ekipa: 'OK Bedex 2', odigrano: 2, pobjede: 0, porazi: 2, setovi: '1:6', bodovi: 0 },
  ],
};

export const cetvrtaLiga = {
  naziv: '4. HOL Međimurje',
  puniNaziv: '4. hrvatska odbojkaška liga Međimurje, seniorke',
  izvor: 'https://www.osmz.hr/index.php?rubrika=utakmica&natjecanje=22',
  ekipe: ['OK Štrigova 2', 'OK Štrigova 3'],
  stanje: [
    { ekipa: 'OK Štrigova 2', mjesto: 1, odigrano: 4, pobjede: 3, porazi: 1, setovi: '11:4', bodovi: 10 },
    { ekipa: 'OK Štrigova 3', mjesto: 9, odigrano: 4, pobjede: 1, porazi: 3, setovi: '3:10', bodovi: 3 },
  ],
  brojEkipa: 11,
  odigrano: <Utakmica[]>[
    { kolo: 1, datum: '3. i 4. listopada 2026.', domacin: 'OK Štrigova 2', gost: 'OK Plavi 4', rezultat: '3:0', setovi: '25:23, 25:19, 25:19' },
    { kolo: 1, datum: '3. i 4. listopada 2026.', domacin: 'OK Štrigova 3', gost: 'OK Plavi 3', rezultat: '0:3', setovi: '10:25, 8:25, 10:25' },
    { kolo: 2, datum: '10. i 11. listopada 2026.', domacin: 'OK Čakovec', gost: 'OK Štrigova 2', rezultat: '1:3', setovi: '25:21, 17:25, 18:25, 17:25' },
    { kolo: 2, datum: '10. i 11. listopada 2026.', domacin: 'OK Čakovec 2', gost: 'OK Štrigova 3', rezultat: '1:3', setovi: '9:25, 16:25, 25:19, 13:25' },
    { kolo: 3, datum: '17. i 18. listopada 2026.', domacin: 'OK Štrigova 2', gost: 'ŽOK Kaštel 5', rezultat: '2:3', setovi: '25:19, 20:25, 25:18, 22:25, 12:15' },
    { kolo: 3, datum: '17. i 18. listopada 2026.', domacin: 'OK Štrigova 3', gost: 'ŽOK Kaštel 4', rezultat: '0:3', setovi: '15:25, 17:25, 10:25' },
    { kolo: 4, datum: '24. i 25. listopada 2026.', domacin: 'OK Štrigova 3', gost: 'OK Štrigova 2', rezultat: '0:3', setovi: '21:25, 15:25, 7:25' },
  ],
  sljedece: <Utakmica[]>[
    { kolo: 5, datum: '7. ili 8. studenog 2026.', domacin: 'OK Štrigova 2', gost: 'ŽOK Kaštel 3', napomena: 'termin još nije određen' },
    { kolo: 5, datum: '7. ili 8. studenog 2026.', domacin: 'OK Nedelišće Elting 3', gost: 'OK Štrigova 3', napomena: 'termin još nije određen' },
  ],
};

export const malaOdbojka = {
  naziv: 'Prvenstvo Međimurja u maloj odbojci, U13',
  izvor: 'https://www.osmz.hr/index.php?rubrika=utakmica&natjecanje=23',
  stanje: { mjesto: 5, brojEkipa: 6, odigrano: 2, pobjede: 1, porazi: 1 },
  odigrano: <Utakmica[]>[
    { kolo: 2, datum: 'listopad 2026.', domacin: 'OK Štrigova', gost: 'OK Nedelišće Elting', rezultat: '2:1', setovi: '26:28, 25:23, 15:8' },
    { kolo: 3, datum: 'listopad 2026.', domacin: 'OK Štrigova', gost: 'ŽOK Kaštel', rezultat: '0:2', setovi: '15:25, 11:25' },
  ],
  sljedece: <Utakmica[]>[
    { kolo: 4, datum: 'nedjelja, 15. studenog 2026. u 9:50', domacin: 'OK Čakovec', gost: 'OK Štrigova' },
    { kolo: 4, datum: 'nedjelja, 15. studenog 2026. u 10:40', domacin: 'OK Plavi', gost: 'OK Štrigova' },
    { kolo: 4, datum: 'nedjelja, 15. studenog 2026. u 12:20', domacin: 'OK Štrigova', gost: 'OK Totovec' },
  ],
};

// Prva sljedeća utakmica prve ekipe, za naslovnicu.
export const sljedecaUtakmica = trecaLiga.sljedece[0];

// Kratka povijest kluba za stranicu O klubu.
export const povijest = [
  { godina: '2016.', tekst: 'Klub je osnovan 14. siječnja i upisan u registar udruga 25. siječnja. Prve treninge drži u dvorani Osnovne škole Štrigova.' },
  { godina: '2019.', tekst: 'Seniorke igraju 2. ligu Sjever i nakon 9. kola drže treće mjesto u skupini, iza Gorice i Bjelovara.' },
  { godina: '2020.', tekst: 'U Drugoj ligi od 13 klubova seniorke završavaju prvi dio sezone na šestom mjestu.' },
  { godina: '2024.', tekst: 'Najbolja sezona dosad: seniorke završavaju skupinu Sjever 2. lige na prvom mjestu, s 8 pobjeda u 10 utakmica i omjerom setova 27:8.' },
  { godina: '2025.', tekst: 'Seniorke igraju 3. HOL Sjever, skupinu Sjever, i sezonu 2024./25. završavaju na 8. mjestu od 10 ekipa.' },
  { godina: '2026.', tekst: 'Klub ulazi u drugo desetljeće sa šest ekipa: prva igra 3. HOL Sjever, druga i treća 4. HOL Međimurje, juniorke čekaju objavu natjecanja, a najmlađe igraju prvenstva Međimurja u maloj i mini odbojci.' },
];
