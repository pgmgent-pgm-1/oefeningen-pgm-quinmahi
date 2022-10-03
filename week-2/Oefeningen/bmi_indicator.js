/*
BMI Indicator | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#bmi-indicatie
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(
    `░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
    ░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
    _____________________________
    Assignment  | BMI Indicator
    Made by     | Quinten Mahieu
    _____________________________`)
// Variables
const lenght = 1.76;
const weight = 85;

// Math
const bmi = Math.floor((weight / (lenght * lenght)));

// Console

if (bmi <= 18.5) {
    console.log(`Jouw bmi is ${bmi}. Je hebt ondergewicht.`);
} else if (bmi > 18.5 && bmi < 25) {
    console.log(`Jouw bmi is ${bmi}. Je bent het aanbevolen gewicht.`);
} else if (bmi >= 25 && bmi <= 30) {
    console.log(`Jouw bmi is ${bmi}. Je hebt overwicht.`);
} else {
    bmi > 30;
    console.log(`Jouw bmi is ${bmi}. Je bent obesitas.`);
}