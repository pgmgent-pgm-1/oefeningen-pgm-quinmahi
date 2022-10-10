/*
Oefening gemaakt door Quinten Mahieu
Link naar oefening | https://www.pgm.gent/pgm-1/exercises/week_1.html#bmi-and-absi-calculator
*/

// Variables
const weight = 94;
const lenght = 1.86;
const waist = 0.8;

// Math
// BMI
const bmi = weight / (lenght * lenght);
// ABSI
const absi = waist / (Math.pow(bmi, 2 / 3) * Math.sqrt(lenght));

// Console
console.log(`============================================================
BMI & ABSI Calculator
____________________________________________________________
BMI: ${bmi}
ABSI: ${absi}
============================================================`);
