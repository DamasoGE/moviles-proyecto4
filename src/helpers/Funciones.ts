export const PALABRAS = require("../data/palabras.json");

export function getCategorias() {
  return Object.keys(PALABRAS);
}

export function generarPalabraAleatoria() {
  let indiceCategoria = Math.floor(Math.random() * getCategorias().length);
  let categoriaAleatoria = getCategorias()[indiceCategoria];

  let palabra = PALABRAS[categoriaAleatoria];
  let palabraAleatoria = palabra[Math.floor(Math.random() * categoriaAleatoria.length)];
  
  return { categoriaAleatoria, palabraAleatoria };
}

export function generarDisplayInicial(palabra: any) {
  let letra;
  let palabraFormada = "";

  for (let i = 0; i < palabra.length; i++) {
    letra = palabra[i];
    letra = "-";
    palabraFormada += letra;
  }

  return palabraFormada;
}

export function realizarIntento(palabra: any, display: any, letra: any) {
  display = generarDisplayInicial(palabra);
  let actualizado = false;

  for (let i = 0; i < display.length; i++) {
    if (display[i] === palabra[i]) {
      display[i] = letra;
      actualizado = true;
    } else {
      if (palabra[i] === letra) {
        palabra[i] = letra;
        actualizado = true;
      } else {
        palabra[i] = "-";
        actualizado = false;
      }
    }
  }

  return { actualizado, display };
}