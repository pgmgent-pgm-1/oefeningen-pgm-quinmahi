// variables
const string = "Count how many times the character 'o' is in this string!";

// functions
function countSpecifiedCharacter(str, chr) {
    let c = 0; // Counter variable
    for (let i = 0; i < str.length; i++) {
        if (str[i] === chr) {
            c += 1;
        }

// If statement determining the outcome
    }
    if (c === 0) {
        return `Your character "${chr}" was not found`;
    } else if (c === 1) {
        return `Your character "${chr}" was found once`;
    } else {
        return `Your character "${chr}" was found ${c} times`;
    }
}

// console
console.log(countSpecifiedCharacter(string, "w"));