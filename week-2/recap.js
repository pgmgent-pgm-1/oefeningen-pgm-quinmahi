/*
Recap | Week 1
Hosted by | Michael Vanderpoorten
Recreated by yours truly | Quinten Mahieu
*/
const firstName = "Quinten"; // string
const lastName = "Mahieu";

const ageIs = 22; // number
const isAdult = true; // boolean

if (true) {
    console.log("Persoon is meerderjarig");
} else {
    console.log("Persoon is een baby");
}

if (firstName === "Quinten") {
    console.log("Persoon is inderdaad Quinten");
} else {
    console.log("Persoon is een imposter")
}

switch(firstName) {
    case "Quinten":
        console.log("Persoon is inderdaad Quinten");
        break;
    case "Michael":
        console.log("Persoon is een imposter");
        break;
}

// math
const j = 2;
// 2 tot de macht 3 (maalmaal = tot de macht)
console.log(Math.pow(j, 3)); // 8
console.log(j ** 3); // 8
console.log(10 / 0); // Infinity