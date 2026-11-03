// Uprava kluba: predsjednica, dopredsjednik i tajnik, svatko s fotografijom i kratkim tekstom.
//
// Fotografija: stavite datoteku u public/slike (npr. 'public/slike/lea-heric.jpg') i upišite
// fotografija: '/slike/lea-heric.jpg'. Dok je nema, prikazuje se silueta iz polja slika.
// Tekst: kratko o ciljevima i viđenju kluba; odlomke odvojite praznim retkom (\n\n).
export type Osoba = {
  uloga: string;
  ime: string;
  slika: string;
  fotografija?: string;
  tekst?: string;
};

export const predsjednik: Osoba = {
  uloga: 'Predsjednica kluba',
  ime: 'Lea Heric',
  slika: '/slike/osoba-narancasta.svg',
};

export const uprava: Osoba[] = [
  predsjednik,
  { uloga: 'Dopredsjednik', ime: 'Nikola Risek', slika: '/slike/osoba-modra.svg' },
  { uloga: 'Tajnik', ime: 'Siniša Stanković', slika: '/slike/osoba-nebo.svg' },
];
