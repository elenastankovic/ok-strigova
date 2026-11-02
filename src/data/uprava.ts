// Hijerarhija uprave kluba. Imena su zasad predložak ("Ime Prezime"), a slike su
// template siluete iz public/slike. Za pravu osobu upišite ime i stavite fotografiju
// u public/slike (npr. '/slike/ana-horvat.jpg') u polje slika.
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
  ime: 'Ime Prezime',
  slika: '/slike/osoba-narancasta.svg',
  opis: 'Zastupa klub, vodi upravni odbor i odgovara skupštini.',
};

export const upravniOdbor: Tijelo = {
  naziv: 'Upravni odbor',
  opis: 'Vodi klub između dviju skupština: proračun, prijave ekipa, dvorana i oprema.',
  clanovi: [
    { uloga: 'Dopredsjednik', ime: 'Ime Prezime', slika: '/slike/osoba-modra.svg' },
    { uloga: 'Tajnik', ime: 'Ime Prezime', slika: '/slike/osoba-modra.svg' },
    { uloga: 'Blagajnik', ime: 'Ime Prezime', slika: '/slike/osoba-modra.svg' },
  ],
};

export const nadzorniOdbor: Tijelo = {
  naziv: 'Nadzorni odbor',
  opis: 'Nadzire financijsko poslovanje i rad upravnog odbora, izvještava skupštinu.',
  clanovi: [
    { uloga: 'Predsjednik nadzornog odbora', ime: 'Ime Prezime', slika: '/slike/osoba-modra.svg' },
    { uloga: 'Član nadzornog odbora', ime: 'Ime Prezime', slika: '/slike/osoba-modra.svg' },
  ],
};

export const strucniStozer: Tijelo = {
  naziv: 'Stručni stožer',
  opis: 'Treneri odgovaraju upravnom odboru za rad s ekipama, od mini odbojke do prve ekipe.',
  clanovi: [
    { uloga: 'Trener prve ekipe', ime: 'Ime Prezime', slika: '/slike/osoba-nebo.svg', opis: '3. HOL Sjever' },
    { uloga: 'Trener druge i treće ekipe', ime: 'Ime Prezime', slika: '/slike/osoba-nebo.svg', opis: '4. HOL Međimurje' },
    { uloga: 'Trener mlađih uzrasta', ime: 'Ime Prezime', slika: '/slike/osoba-nebo.svg', opis: 'juniorke, U13 i U11' },
  ],
};

// Potvrđeno u registrima saveza; uloge u upravi još nisu objavljene.
export const kontaktOsobe = ['Siniša Stanković', 'Goran Vuk', 'Matija Horvat'];
