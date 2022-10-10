/*
Rectangle | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#rectangle
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Rectangle
Made by     | Quinten Mahieu
_____________________________`);
// Variables
const nCols = 10;
const nRows = 10;
let character = "*";
let seperator = " ";

// for loop
for (let i = 0; i < nRows; i++) {
  let line = "";
  for (let j = 0; j < nCols; j++) {
    if (j > 0) {
      line += seperator;
    }
    line += character;
  }
  console.log(line);
}
