/**
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

for (let i = 0; i <= 100; i++) {
  let primo = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      primo = false;
      break;
    }
  }
  if (primo) {
    console.log(i);
  }
}