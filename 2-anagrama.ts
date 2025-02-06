/**
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function esAnagrama(palabra1: string, palabra2: string): boolean {
  if (palabra1.length !== palabra2.length) {
    return false;
  }
  const letras1 = palabra1.split("").sort().join("");
  const letras2 = palabra2.split("").sort().join("");
  return letras1 === letras2;
}

console.log(esAnagrama("roma", "amor"));
