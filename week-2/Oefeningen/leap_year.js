/*
Leap Year | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#schrikkeljaar
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Leap Year
Made by     | Quinten Mahieu
_____________________________`);
// Variables
const year = 1700;
let isLeapYear = false; // Uitkomst werkt zonder dit?

// Juist dankzij
if (
  (year % 4 === 0 && year % 100 !== 0) ||
  (year % 100 === 0 && year % 400 === 0)
) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}

console.log(`Is ${year} a leap year? ${isLeapYear}`);
