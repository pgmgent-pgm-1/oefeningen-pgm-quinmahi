/*
Change to PGM | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#verander-in-pgm
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Change to PGM
Made by     | Quinten Mahieu
_____________________________`);
let input = "javascript";
let output = "";

// For
for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
        output += input[i];
    } else {
        output += "PGM";
    }
}
console.log(output);
