/*
Oefening gemaakt door Quinten Mahieu
Link naar oefening | https://www.pgm.gent/pgm-1/exercises/week_1.html#gender
*/

// Variables
const gender = "Jouw geslacht is";
let genderCode;
/*
0 = Niet gekend
1 = Man
2 = Vrouw
3 = X
9 = Niet toepasbaar
*/
genderCode = Math.floor(Math.random() * (9 - 1));

// Switch case

switch (genderCode) {
  case 0:
    console.log(
      `============================================================\n${gender} niet gekend. \nKleur is Oranje.\n============================================================`
    );
    break;
  case 1:
    console.log(
      `============================================================\n${gender} man. \nKleur is blauw.\n============================================================`
    );
    break;
  case 2:
    console.log(
      `============================================================\n${gender} vrouw. \nKleur is Rood.\n============================================================`
    );
    break;
  case 3:
    console.log(
      `============================================================\n${gender} X. \nKleur is Groen.\n============================================================`
    );
    break;
  case 9:
    console.log(
      `============================================================\n${gender} niet toepasbaar. \nKleur is Geel.\n============================================================`
    );
    break;
  default:
    console.log(
      `============================================================\nHet nummer dat u koos komt niet overeen met een gender.\n============================================================`
    );
}

console.log("Gekozen nummer " + genderCode); //"" in plaats van ``gebruikt om mezelf er aan te herinneren dat dit ook een optie is
