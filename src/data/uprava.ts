// Hijerarhija uprave kluba. Slike su zasad template siluete iz public/slike. Za fotografiju stavite datoteku u public/slike
// (npr. '/slike/ana-horvat.jpg') i upišite je u polje slika.
export type Osoba = {
  uloga: string;
  ime: string;
  slika: string;
  opis?: string;
};

export type Tijelo = {
  naziv: string;
  opis: string;
  clanovi: Osoba[];
};

export const skupstina = {
  naziv: 'Skupština kluba',
  opis: 'Najviše tijelo kluba. Čine je svi članovi s pravom glasa, bira predsjednika i odbore te usvaja godišnji plan i financijski izvještaj.',
};

export const predsjednik: Osoba = {
  uloga: 'Predsjednik kluba',
  ime: 'Lea Heric',
  slika: '/slike/osoba-narancasta.svg',
  opis: 'Zastupa klub, vodi upravni odbor i odgovara skupštini.',
};

export const upravniOdbor: Tijelo = {
  naziv: 'Upravni odbor',
  opis: 'Vodi klub između dviju skupština: proračun, prijave ekipa, dvorana i oprema.',
  clanovi: [
    { uloga: 'Dopredsjednik', ime: 'Nikola Risek', slika: '/slike/osoba-modra.svg' },
    { uloga: 'Tajnik', ime: 'Siniša Stanković', slika: '/slike/osoba-modra.svg' },
  ],
};

export const nadzorniOdbor: Tijelo = {
  naziv: 'Nadzorni odbor',
  opis: 'Nadzire financijsko poslovanje i rad upravnog odbora, izvještava skupštinu.',
  clanovi: [
    { uloga: 'Član nadzornog odbora', ime: 'Goran Vuk', slika: '/slike/osoba-modra.svg' },
    { uloga: 'Član nadzornog odbora', ime: 'Tilen Semenič', slika: '/slike/osoba-modra.svg' },
  ],
};

export const strucniStozer: Tijelo = {
  naziv: 'Stručni stožer',
  opis: 'Treneri odgovaraju upravnom odboru za rad s ekipama, od mini odbojke do prve ekipe.',
  clanovi: [
    { uloga: 'Trener prve ekipe', ime: 'Siniša Stanković', slika: '/slike/osoba-nebo.svg', opis: '3. HOL Sjever' },
    { uloga: 'Trenerica kadetkinja', ime: 'Elena Stanković', slika: '/slike/osoba-nebo.svg', opis: '4. HOL Međimurje' },
    { uloga: 'Trenerica mlađih kadetkinja', ime: 'Ana Semenič', slika: '/slike/osoba-nebo.svg', opis: '4. HOL Međimurje' },
    { uloga: 'Trenerica U13', ime: 'Emili Puklavec', slika: '/slike/osoba-nebo.svg', opis: 'mala odbojka' },
    { uloga: 'Trenerica mini odbojke', ime: 'Ana Šinko', slika: '/slike/osoba-nebo.svg', opis: 'U11' },
  ],
};

// Kontakt osobe kluba upisane u registrima saveza.
export const kontaktOsobe = ['Siniša Stanković', 'Goran Vuk', 'Matija Horvat'];
