export const PALABRAS = require("../data/palabras.json");

export function getCategorias() {
  return Object.keys(PALABRAS);
}

export function generarPalabraAleatoria() {
  let indiceCategoria = Math.floor(Math.random() * getCategorias().length);
  let categoriaAleatoria = getCategorias()[indiceCategoria];

  return { categoriaAleatoria }
}

