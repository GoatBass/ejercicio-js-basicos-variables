/**
 * Que sucede aquí?
 */

let variable1 = 1;
let variable2 = 2;
let variable3 = 3;
let variable4 = 4;
variable2 = 2;
variable3 = 4;
variable4 = 1;
variable1 = -7;

/**
 * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
 */

console.log(
  "En el primer putno, la variable4 tiene un valor de: " +
    variable4 +
    " porque después de ser creada (4), has sido sobreescrita (1)"
);

variable2 = variable1;
variable4 = variable2 * 2;

/**
 * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
 */
console.log(
  "En el último putno, la variable4 tiene un valor de -14 = " + variable4
);
