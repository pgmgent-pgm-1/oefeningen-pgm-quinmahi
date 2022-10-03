/*
Funtion random number | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#random-number-function
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Funtion random number
Made by     | Quinten Mahieu
_____________________________`);

function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
}

console.log(getRandomNumber(25));