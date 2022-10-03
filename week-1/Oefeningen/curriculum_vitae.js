/*
Oefening gemaakt door Quinten Mahieu
Link naar oefening | https://www.pgm.gent/pgm-1/exercises/week_1.html#curriculum-vitae
*/

// Variables
const familyName = "Mahieu";
const firstName = "Quinten";
const gender = "Male";
const age = 22;
const married = false;
const avatar = "\u{1F90C}";
const quote = "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. \n-Martin Fowler";
const dutch = "**********";
const english = "********";
const french = "***";

// Console log
console.log(`Curriculum Vitae van ${firstName} ${familyName}
============================================================

Identiteit:
Geslacht: ${gender}
Leeftijd: ${age}
Getrouwd: ${married}

____________________________________________________________

Misc:
Avatar: ${avatar}
Lijfspreuk:
${quote}

____________________________________________________________

Talenkennis:
Nederlands: ${dutch}
Engels: ${english}
Frans: ${french}

============================================================`);
