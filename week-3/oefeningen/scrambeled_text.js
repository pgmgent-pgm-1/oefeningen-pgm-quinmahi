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
const string = "scramble eggs sausage";

// Functions
function scrambeledText(str) {
    str = str.split(" "); // Converting the string into an array, that way if there are multiple words they can all be scrambled separately
    for (let word of str) {
        str =+ " " + word;
        return(word);
    }
}

// Console log
console.log(`
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
Text scrambler
------------------------------------------------------------------------------------
Scramble the word ${string} | \t${scrambeledText(string)}
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);