/*
Sum numbers array | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#optellen-nummers-matrix
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Sum numbers arrays
Made by     | Quinten Mahieu
_____________________________`);
// Variables
const arr_1 = [5, 10, 15, 20, 25];
const indexArr_1 = arr_1.length;
const arr_2 = [5, 10, 15, 20, 25];
let sum = [];

// For loop // CURSED
for (let i = 0; i < indexArr_1; i++) {
    sum[i] = (arr_1[i] + arr_2[i]);
}
console.log(sum);