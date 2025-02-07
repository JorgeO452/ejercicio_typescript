/**
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function areaPoligono(poligono: string, base: number, altura: number): number {
  switch (poligono) {
    case "triangulo":
      return (base * altura) / 2;
    case "cuadrado":
      return base * base;
    case "rectangulo":
      return base * altura;
    default:
      return 0;
  }
}

console.log(areaPoligono("triangulo", 10, 5));