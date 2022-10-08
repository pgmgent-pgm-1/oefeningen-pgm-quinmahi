// Console log | before assigment
const professor = "Michael Vanderpoorten";
const student = "Quinten Mahieu";
const assignment = "Globally unique identifier | https://www.pgm.gent/pgm-1/exercises/week_3.html#globally-unique-identifier-guid";

console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | ${assignment} 
Made by     | ${student}
Professor   | ${professor} 
_____________________________`);
// Functions
function generateGUID(n) {
    let output = "";
    const takeFromHere = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ0123456789@#&é”’\"\'\\(§è!çà)°-_¨^*$€%ù£`<>?,;./:+="; // Characters the password generator will chose from here
    for (let i = 0; i <= (n - 1); i++) { // For loop to select the amount of characters === n
        let char = (Math.floor(Math.random() * (takeFromHere.length))); // Random number selector === the amount of characters from takeFromHere
        output += takeFromHere.charAt(char); // Adds the chosen character from the Math.random to the output string
    }
    return output;
}

// Console log
console.log(`
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
Random password generator
------------------------------------------------------------------------------------
Password 1 | ${generateGUID(70)}
Password 2 | ${generateGUID(50)}
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);