/*
Switch | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#switch
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Swicth
Made by     | Quinten Mahieu
_____________________________`);
// Variables
const nCols = 5;
const nRows = 12;
let character = "*";
let separator = " ";

// for loop
for (let i = 0; i < nRows; i++) {
  let line = "";
  for (let j = 0; j < nCols; j++) {
    if (j > 0) {
      line += separator;
    }
    if (
      i !== 0 &&
      i !== nRows / 2 &&
      i < nRows / 2 &&
      j !== 0 &&
      j !== nCols - 1
    ) {
      line += separator;
    } else {
      line += character;
    }
  }
  console.log(line);
}
