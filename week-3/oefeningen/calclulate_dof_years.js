// Console log | before assigment
const professor = "Michael Vanderpoorten";
const student = "Quinten Mahieu";
const assignment = "Calculate dog years | https://www.pgm.gent/pgm-1/exercises/week_3.html#calculate-dog-years";

console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | ${assignment} 
Made by     | ${student}
Professor   | ${professor} 
_____________________________`);

// Variables
const humanYear = 5.5;

function calculateDogYears(humanYear, conversionRate = 7) {
    return(humanYear * conversionRate)
}

console.log(calculateDogYears(humanYear));