/**
 * Jugando con string
 */

let nombre = "Mad";
let apellido = "Max";

let presentacion = "";

/**
 * Pregunta 1: ¿Qué valor tengo que asignar a 'nombreCompleto' para que me muestre pantalla:
 *   * "Me llamo Mad Max?"
 *
 *
 *
 */
presentacion = "Me llamo " + nombre + " " + apellido;

console.log("Pregunta 1:", presentacion);

/**
 * Pregunta 2: Cambia el valor de las variables adecuadamente para que, en vez de "Me llamo Mad Max", escribe "Me llamo {tu nombre} {tu apellido}"
 */
nombre = "Eduard";
apellido = "Garcia";
presentacion = "Me llamo " + nombre + " " + apellido;

console.log("Pregunta 2:", presentacion);
