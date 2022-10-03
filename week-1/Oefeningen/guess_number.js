/*
Oefening gemaakt door Quinten Mahieu
Link naar oefening | https://www.pgm.gent/pgm-1/exercises/week_1.html#guess-the-number
*/

// Variables
const number = Math.floor(Math.random() * (16 - 1));
const guess = 5; // Voeg hier uw gok in en speel, geen prijs te winnen!

// if/else statements + Console
if (guess === number) {
    console.log(`============================================================\nProficiat het getal is ${guess}\nU wint niets!\n============================================================`);
} else { (guess <= number)
    console.log(`============================================================\nJammer, uw gok was ${guess}.\nHet juiste getal was ${number}\n============================================================`);
}