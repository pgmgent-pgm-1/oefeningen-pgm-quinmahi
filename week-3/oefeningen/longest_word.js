// Variables
const string = "Full Stack JavaScript Development"; 

// Functions
function searchLongestWord(str) {
    let arr = str.split(" ");
    let max = ""
    for (let i = 0; i < arr.length; i++) {
        if (max.length < arr[i].length) {
            max = arr[i];
        }
    }
    return max;
}

// Console.log
console.log(`
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
String | ${string}
Longest word === ${searchLongestWord(string)}
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);