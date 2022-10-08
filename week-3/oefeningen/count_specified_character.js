// variables
const string = "Count how many times the character 'o' is in this string!";

// functions
function countSpecifiedCharacter(str, chr) {
    let c = 1; // Counter variable
    for (let i = 0; i < str.length; i++) {
        if (str[i] === chr) {
            c += 1;
        }
    }
    return c;
}

// console
console.log(countSpecifiedCharacter(string, "c"));