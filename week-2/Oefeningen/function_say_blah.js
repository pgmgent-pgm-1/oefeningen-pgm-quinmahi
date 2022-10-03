// Gedeeld in discord: https://discord.com/channels/1020078355019743233/1020078355695018091/1026174730681733160
/*
Say Blah funtion | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#say-blah-function
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Say Blah funtion
Made by     | Quinten Mahieu
_____________________________`);
// Funtion
function sayBlah(personeOne, personTwo, personThree, lineOne, lineTwo, lineThree, lineFour, lineFive) {
    const person1 = personeOne;
    const person2 = personTwo;
    const person3 = personThree;
    const line1 = lineOne;
    const line2 = lineTwo;
    const line3 = lineThree;
    const line4 = lineFour;
    const line5 = lineFive;

    return `
    ${person1}: ${line1}
    ${person2}: ${line2}
    ${person1}: ${line3}
    ${person2}: ${line4}
    ${person3}: ${line5}
    `;
}

// Console
const output = sayBlah("Zack",
"Leonard",
"Penny",
"Check it out",
"all about planets this month.",
"That’s an atom.",
"Agree to disagree. That’s what I love about science, there’s no one right answer.",
"So, you and Zack again, huh?",
"Yeah, yeah, me and Zack again.");

console.log(output);