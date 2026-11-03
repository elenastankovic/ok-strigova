// Osnovni podaci o klubu. Ovdje se mijenjaju adresa, kontakt i sezona.
export const klub = {
  naziv: 'Odbojkaški klub Štrigova',
  kratko: 'OK Štrigova',
  osnovan: '2009.',
  godinaOsnutka: 2009,
  mjesto: 'Štrigova',
  zupanija: 'Međimurska županija',
  adresa: 'Štrigova 35a',
  postanskiBroj: '40312 Štrigova',
  oib: '56614963593',
  telefon: '091 730 1905',
  telefonHref: 'tel:+385917301905',
  kontaktOsoba: 'Siniša Stanković',
  kontaktOsobe: [
    { uloga: 'Tajnik', ime: 'Siniša Stanković', telefon: '091 730 1905', telefonHref: 'tel:+385917301905' },
    { uloga: 'Trenerica', ime: 'Elena Stanković', telefon: '091 930 0666', telefonHref: 'tel:+385919300666' },
  ],
  /**
   * Termini treninga po ekipama (dvorana OŠ Štrigova). dani: 1 = ponedjeljak … 7 = nedjelja.
   * ton je boja ekipe iz global.css (ton-1 plava, ton-2 roza, ton-3 zelena, ton-5 breskva).
   */
  treninzi: [
    { ekipa: 'Seniorke', dani: [2, 3, 5], od: '20:00', do: '21:30', ton: 'ton-1' },
    { ekipa: 'Kadetkinje', dani: [2, 5], od: '20:00', do: '21:30', ton: 'ton-2' },
    { ekipa: 'Mlađe kadetkinje', dani: [2, 5], od: '18:30', do: '20:00', ton: 'ton-3' },
    { ekipa: 'Mini odbojka', dani: [2, 5], od: '18:30', do: '19:30', ton: 'ton-5' },
  ],
  /** Kontakt za upise na naslovnici. */
  upisi: { ime: 'Elena Stanković', uloga: 'trenerica', telefon: '091 930 0666', telefonHref: 'tel:+385919300666' },
  dvorana: {
    naziv: 'Dvorana OŠ Štrigova',
    adresa: 'Štrigova 126a, 40312 Štrigova',
    karta: 'https://www.openstreetmap.org/search?query=%C5%A0trigova%20126a',
  },
  mreze: {
    instagram: { naziv: 'Instagram', korisnik: '@ok.strigova', url: 'https://www.instagram.com/ok.strigova/' },
    facebook: { naziv: 'Facebook', korisnik: 'ok.strigova', url: 'https://www.facebook.com/ok.strigova' },
  },
  sezona: '2026./27.',
  azurirano: '2. studenog 2026.',
  savezi: {
    osmz: {
      naziv: 'Odbojkaški savez Međimurske županije',
      url: 'https://www.osmz.hr/',
      klub: 'https://www.osmz.hr/index.php?rubrika=klub&obrazac=1&id=6',
    },
    osvz: {
      naziv: 'Odbojkaški savez Varaždinske županije',
      url: 'https://osvz.hr/',
    },
    hos: {
      naziv: 'Hrvatski odbojkaški savez',
      url: 'https://hos-cvf.hr/',
    },
  },
};
