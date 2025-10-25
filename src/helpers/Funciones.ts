export const PALABRAS = require("../data/palabras.json");

export function getCategorias() {
  return Object.keys(PALABRAS);
}

export function generarPalabraAleatoria(): { categoria: string; palabra: string } {
  let indiceCategoria = Math.floor(Math.random() * getCategorias().length);
  let categoria = getCategorias()[indiceCategoria];

  let palabrasCategoria = PALABRAS[categoria];
  let palabra = palabrasCategoria[Math.floor(Math.random() * categoria.length)].toLocaleUpperCase();
  
  return { categoria, palabra };
}

export function generarDisplayInicial(palabra: string) {
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

  return { actualizado, displayIntento: nuevoDisplay };
}