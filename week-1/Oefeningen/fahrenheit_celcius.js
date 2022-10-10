/*
Oefening gemaakt door Quinten Mahieu
Link naar oefening | https://www.pgm.gent/pgm-1/exercises/week_1.html#fahrenheit-en-celsius
*/

// Variables
const c = 25;
const f = 95;

// Math
// C > F
const cToF = c * (9 / 5) + 32;
// F>C
const fToC = (f - 32) * (5 / 9);

// Console
console.log(`============================================================
Base values:
${c}C
${f}F
____________________________________________________________
Celcius > Fahrenheit
${c}C = ${cToF}F
____________________________________________________________
Fahrenheit to Celcius
${f}F = ${fToC}C
============================================================`);
