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

export function realizarIntento(palabra: string, display: string, letra: string) {
  const palabraArr = palabra.split('');
  const displayArr = display.split('');

  let actualizado = false;

  for (let i = 0; i < palabraArr.length; i++) {
    if (palabraArr[i] === letra) {
      displayArr[i] = letra;
      actualizado = true;
    }
  }

  const nuevoDisplay = displayArr.join('');

  return { actualizado, display: nuevoDisplay };
}