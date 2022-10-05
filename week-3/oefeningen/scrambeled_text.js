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


// Functions
function scrambeledText(str) {
    let output = "";
    for (let i = 0; i <= (str - 1); i++) { // For loop to select the amount of characters === n
        let char = (Math.floor(Math.random() * 74)); // Random number selector === the amount of characters from takeFromHere
        output += takeFromHere.charAt(char); // Adds the chosen character from the Math.random to the output string
    }
}

// Console log
console.log(`
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
${scrambeledText("This word")}
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);