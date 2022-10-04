// Console log | before assigment
const professor = "Michael Vanderpoorten";
const student = "Quinten Mahieu";
const assignment = "Reverse number | https://www.pgm.gent/pgm-1/exercises/week_3.html#reverse-number";

console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | ${assignment} 
Made by     | ${student}
Professor   | ${professor} 
_____________________________`);

// Function // Made by searching on the internet and reverse engeneering code until I understood

function reverse(numberToReverse) {
    numberToReverse += ""; // Convert numberToReverse to a string
    numberToReverse = numberToReverse.split(""); // Transform the sting into an array
    numberToReverse = numberToReverse.reverse(); // Reverse the index order of the array
    numberToReverse = numberToReverse.join(""); // Reconvert the array back to a string
    if (numberToReverse ) {
        numberToReverse = parseFloat(numberToReverse); // Reconvert the string back to a number
    } else {

    }
    return numberToReverse;
}

console.log(reverse(12345));