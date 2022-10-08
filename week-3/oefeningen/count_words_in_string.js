// Console log | before assigment
const professor = "Michael Vanderpoorten";
const student = "Quinten Mahieu";
const assignment = "Count words in string | https://www.pgm.gent/pgm-1/exercises/week_3.html#count-words-in-a-string";

console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | ${assignment} 
Made by     | ${student}
Professor   | ${professor} 
_____________________________`);
// Variables
const str = "I am, so, so, so f@*!ing hungry!!!!!";

// Functions
function removePunctuation(myString) { // Removing punctuation, first named calculateAmountOfWords -> name changed to log the the sentence and amount of words separately
    myString = myString.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g,""); // Removing all punctuation
    return myString;
}

function calculateAmountOfWords(myString) { // Removing punctuation, first named calculateAmountOfWords -> name changed to log the the sentence and amount of words separately
    removePunctuation(myString);
    myString = myString.split(" "); // Converting the sentence into an array, where each word will be at a separate index number separately
    return(myString.length); // Returning the lenght in numbers
}

// Console log
console.log(`
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
Original sentence | \t\t\t\t${str}
Sentence without punctuation | \t\t\t${removePunctuation(str)}
Total amount of words in the sentence | \t${calculateAmountOfWords(str)}
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);