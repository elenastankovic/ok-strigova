// @ts-check
import { defineConfig } from 'astro/config';

// Objava na GitHub Pages. Na GitHub Actionsu se vlasnik i ime repozitorija čitaju iz
// GITHUB_REPOSITORY, pa preimenovanje repozitorija (npr. u ok-strigova) samo od sebe
// mijenja adresu stranice: https://<vlasnik>.github.io/<repozitorij>
// Uz vlastitu domenu postavite site na domenu i base na '/'.
const [vlasnik, repozitorij] = (process.env.GITHUB_REPOSITORY ?? 'elenastankovic/ok-strigova').split('/');

export default defineConfig({
  site: `https://${vlasnik}.github.io`,
  base: `/${repozitorij}`,
  build: {
    format: 'file',
  },
});
