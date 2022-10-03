/*
Even numbers | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#even-getallen
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Even numbers
Made by     | Quinten Mahieu
_____________________________`);
// variables
let n1 = 20;
let line = "";
const separator = " ";

// for loop
/* Onder elkaar
for (let i = 1; i < n1; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

for (let i = 1; i < n1; i++) { // Naast elkaar
    if (i % 2 === 0) {
        line += i;
    } else {
        line += separator;
    }
}
console.log(line);