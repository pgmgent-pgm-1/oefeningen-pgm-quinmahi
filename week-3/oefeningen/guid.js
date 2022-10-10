// Console log | before assigment
const professor = "Michael Vanderpoorten";
const student = "Quinten Mahieu";
const assignment =
  "Globally unique identifier | https://www.pgm.gent/pgm-1/exercises/week_3.html#globally-unique-identifier-guid";

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
  n = parseFloat(n);
  let output = "";
  const takeFromHere =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ0123456789@#&é”’\"'\\(§è!çà)°-_¨^*$€%ù£`<>?,;./:+="; // Characters the password generator will chose from go here
  for (let i = 0; i < n; i++) {
    // For loop to select the amount of characters === n
    let index = Math.floor(Math.random() * (takeFromHere.length - 1)); // Random number selector === the amount of characters from takeFromHere
    output += takeFromHere.charAt(index); // Adds the chosen character from the Math.random to the output string
  }
  return output;
}

// Console log
console.log(`
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
Random password generator
------------------------------------------------------------------------------------
Password 1 | ${generateGUID(5)}
Password 2 | ${generateGUID(10)}
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);
