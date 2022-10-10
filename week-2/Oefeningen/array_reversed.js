/*
Array reversed | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#omgekeerde-volgorde
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Array reversed
Made by     | Quinten Mahieu
_____________________________`);
// Variables
const arr = [
  "betalen.",
  7000,
  "€",
  "kaas",
  "voor",
  "zou",
  "Ik",
  "lekker!",
  "is",
  "Kaas",
];
const arrIndex = arr.length;
let line = "";
const seperator = " ";

// Loop
for (let i = arrIndex - 1; i >= 0; i--) {
  // i = (hoogste - 1)index van arr, vanaf dat i kleinder dan of gelijk aan 0 is stop het, zo niet dan gaat er 1 af van de index
  if (i >= 0) {
    line += arr[i] + seperator; // Hier kom bij uw let "line" telkens het geindexeerde data type van "arr" + een seperator bij
  }
}
// Console
console.log(line);
