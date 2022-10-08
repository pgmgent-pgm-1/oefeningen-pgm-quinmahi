// Console log | before assigment
const professor = "Michael Vanderpoorten";
const student = "Quinten Mahieu";
const assignment = "Scrambeled text | https://www.pgm.gent/pgm-1/exercises/week_3.html#scrambled-text";

console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | ${assignment} 
Made by     | ${student}
Professor   | ${professor} 
_____________________________`);
// Variables
let string = "scramble";

// Functions
function scrambledText(str) { 
    let output = ""; 
    for (let i = 0; i <= (str.length - 1); i++) { 
        let char = (Math.floor(Math.random() * (str.length))); 
        output += str.charAt(char); 
    }
    return output;
}

// Console log
console.log(`
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
Text scrambler
------------------------------------------------------------------------------------
Scramble the string | ${string}
Scrambeled version | ${scrambledText(string)}
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);