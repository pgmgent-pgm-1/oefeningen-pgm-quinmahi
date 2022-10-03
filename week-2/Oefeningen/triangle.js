/*
Triangle | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#triangle
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Triangle
Made by     | Quinten Mahieu
_____________________________`);
// Variables
const nWidth = 10;
let character = "*";
let seperator = " ";

// for loop
for (let i = nWidth; i > 0; i--) {
    let output = "";
    for (let j = 0; j < i; j++) {
        if (nWidth > 0) {
            output += seperator;
        }
        output += character;
    }
    console.log(output);
}