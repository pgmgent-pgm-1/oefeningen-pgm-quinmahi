/*
Funtion random number with parameters | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#random-number-function-with-parameters
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Funtion random number with parameters
Made by     | Quinten Mahieu
_____________________________`);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }

console.log(getRandomNumber(80, 90));