// variables
let string = "Scramble";
let string2 = "Niet";
let string3 = "Normaal";

// functions
function scrambledText(str) {
  let arr = str.split("");
  let output = "";
  for (let i = 1; i <= str.length; i++) {
    let index = Math.round(Math.random() * arr.length);
    output += arr[index];
    arr.splice(index, 1);
  }
  return output;
}

// console
console.log(`
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
Text scrambler
------------------------------------------------------------------------------------
String 1 "${string}" > "${scrambledText(string)}"
String 1 "${string2}" > "${scrambledText(string2)}"
String 1 "${string3}" > "${scrambledText(string3)}"
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);
