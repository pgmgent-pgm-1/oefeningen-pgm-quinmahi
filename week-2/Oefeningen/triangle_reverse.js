/*
Reverse Triangle | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#triangle-reverse
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Reverse Triangle
Made by     | Quinten Mahieu
_____________________________`);
// Variables
const nWidth = 10;
let character = "*";
let seperator = " ";

// for loop
for (i = 0; i < nWidth; i++) {
    let output = "";
    for (j = 0; j < i; j++) {
        if (nWidth > 0) {
            output += seperator;
        }
        output += character;
    }
    console.log(output);
}