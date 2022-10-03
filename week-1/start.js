/* Programming 1
Week 1
Gehost door Michael Vanderpoorten
*/
console.log("Hallo wereld, lees mijn bericht menselijke slaaf.");
console.log("Hallo 1PGMA");

/* Console log name with variable
Spelen met een mogelijke contact mogelijkheid indien er problemen zijn.
*/
const firstName = "Quinten";
const lastName = "Mahieu";
const eMail = "contact@quintenmahieu.com";
console.log("Programma geschreven door",firstName,lastName);
console.log("Indien u problemen ondervindt neem contact op met",eMail);



/*
Soorten strings
*/

const name = "Quinten Mahieu"; // string
const isStudent = true; // boolean (true or false) 
const porto = 0; // number
const pi = 3.14; // float (comma getal)
const car = null; // null

// strings advanced
console.log(firstName + lastName); // Aan elkaar zonder spatie tussen
console.log(firstName,lastName); // Met spatie
console.log(firstName + " " + lastName); // Met spatie

const sentence = 'De beer zei "hallo"'; // Voor "" in een string te gebruiken

const work = "security";
console.log("Ik ben " + firstName + " en mijn studentenjob is " + work);
console.log(`Ik ben ${firstName} en mijn studentenjob is ${work}`);

/*
Multi lines
*/
console.log("Hallo, \nbedankt voor uw verwelkoming");
console.log(`Hallo,
bedankt voor uw verwelkoming`);

/*
Numbers
*/
const width = 100 * 50; // maal
console.log(width); // maal
const lenght = 100 / 50; // gedeeld door
console.log(lenght); // gedeedld door
const a = 5;
const b = 15;
const c = 25;
const sum = a + b + c;
console.log(sum);
const min = c - b - a;
console.log(min); 