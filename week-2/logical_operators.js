/*
Logical Operators | Week 2
Hosted by | Michael Vanderpoorten
Recreated by yours truly | Quinten Mahieu
*/
console.log(true); // true
console.log(true && true); // true
console.log(true && true && true); // true
console.log(false && true); // false
console.log(false && true && true); // false
console.log("Hallo" && true); // true
console.log(undefined && true); // undefined (in dit geval false)

let name;
if (name) {
    console.log(`name is ${name}`)
} else {
    console.log("Nog geen naam gekozen")
}

name = "Quinten";
if (name) {
    console.log(`name is ${name}`)
} else {
    console.log("Nog geen naam gekozen")
}


let color = "red";
if (color === "red" && name === "Quinten") {
    console.log("Correct");
} else {
    console.log("Niet correct");
}

// || = or = of
console.log(true || false); // true
console.log(false || true); // true
console.log(true || false || false); // true
console.log(true || true); // true
console.log(false || false); // false
console.log("Hallo" || false); // true

// turnary operator (korte if statement)
console.log(color === "red" ? "Correct" : "Niet correct"); // Statement ? True : False // Uitkomst: Correct