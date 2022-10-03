/*
Sum of arrays | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#som-van-arrays
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Sum of arrays
Made by     | Quinten Mahieu
_____________________________`);
// Variables
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // Array data type === meerdere variabelen in 1 data type bijhouden, dit kunnen verschillende variabelen zijn, strings, booleans, numbers. Maar dit word niet aangeraden
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
// console.log(arr_1.lenght); | Dit geeft weer hoeveel items er in de array zitten
// console.log(brands[0]); | Dit geeft het eerste item in de array weer (indexerings nummmers begint met 0!)
// console.log(arr_1[arr_1.length - 1]); | Dit geeft het allerlaaste item in de array weer, ongeacht hoeveel geindexeerder items er zijn. indien er een "let lastIndex = arr_1.lenght - 1;" bestaat kan er ook lastIndex staan"

// For loop
/*
let sumArr_1 = 0;
for (let i = 0; i < arr_1.length; i++) {
    sumArr_1 += arr_1[i];
}

let sumArr_2 = 0;
for (let j = 0; j < arr_2.length; j++) {
    sumArr_2 += arr_2[j];
} */


let sumArr_1 = 0;
for (let i of arr_1) { // Variable i van Variable arr_1
    sumArr_1 += i // Variable sumArr1 
}

let sumArr_2 = 0;
for (let j of arr_2) {
    sumArr_2 += j
}


// Math
x = sumArr_1 + sumArr_2

// Console
console.log(`${sumArr_1} + ${sumArr_2} = ${x}`)