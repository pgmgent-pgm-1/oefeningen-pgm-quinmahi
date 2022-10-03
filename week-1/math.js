/* Programming 1
Week 1 dag 2
Gehost door Michael Vanderpoorten
*/

// Wiskunde
let a = 20;
let b = 30;
let c = 40;
let d = 50;
let e = 24;
let i = 0;

// basis
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Specialekes
console.log(d % b); // restwaarde
i = i + 1; // Correct maar langer
console.log(i);
i += 1; // Kortere versie, werkt met alle +-*/ ect...
console.log(i);
i -= 1;
console.log(i);
i *= 2;
console.log(i);
i /= 2;
console.log(i);

let j;
console.log(j) // undefined
j = 5;
console.log(j);
j++; // +1, dit vermeerderd pas van de volgende lijn
console.log(j);
console.log(++j); // Direct vermeerderd
console.log(j++); // Vermeerderd op volgende lijn pas
console.log(j);


// if/else statements
if (j === 8) { // is is gelijkaan
    console.log("J is gelijk aan 8");
}
if (j >= 8) {
    console.log("J is groter dan of gelijk aan 8")
}
if (j <= 8) {
    console.log("J is kleiner dan of gelijk aan 8")
}

if (j > 8) {
    console.log("Groter dan 8");
} else { (j <= 8)
    console.log("Niet groter dan 8")
}

let k = 10;
console.log(k > 5);
console.log(k < 5);

let isTuesday = true;
if (isTuesday) {
    console.log("Het is dinsdag")
} else {
    console.log("Het is niet dinsdag")
}