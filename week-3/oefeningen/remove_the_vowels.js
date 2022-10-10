// variables
const string = "Please do remove my vowels!";

// functions
function removeTheVowels(str) {
  str = str.replace(/a|e|u|i|o|A|E|U|I|O/g, ""); // replacing everything in / / and separated by | by nothing. use g as a global replacement in order to also take away the capitalized version of it
  return str;
}

// console
console.log(`
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
String === ${string}
String - vowels = ${removeTheVowels(string)}
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);
