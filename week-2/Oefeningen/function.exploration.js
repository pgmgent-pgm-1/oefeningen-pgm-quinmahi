/*
Funtion exploration | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#function-exploration
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Funtion exploration
Made by     | Quinten Mahieu
_____________________________`);
const age = 22;

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return "Did your parents allow you?";
  }
}
console.log(checkAge(age));

function checkAgeTernaryOperator(age) {
  return age >= 18 ? true : "Did yout parents allow you?";
}

console.log(checkAgeTernaryOperator(age));

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(3, 5));

function pow(x, n) {
  return Math.pow(x, n);
}

console.log(pow(4, 3));
