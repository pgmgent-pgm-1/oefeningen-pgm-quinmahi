// Console log | before assigment
const professor = "Michael Vanderpoorten";
const student = "Quinten Mahieu";
const assignment = "Longest word | https://www.pgm.gent/pgm-1/exercises/week_3.html#longest-word";

console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | ${assignment} 
Made by     | ${student}
Professor   | ${professor} 
_____________________________`);

const string = "Full Stack JavaScript Development"; 

function searchLongestWord(str) {
    str = str.split(" ");
    str.every(Math.max(.length))
}

console.log(searchLongestWord(string));