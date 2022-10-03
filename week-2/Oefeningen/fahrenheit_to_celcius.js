/*
Fahrenheit to celcius | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#convert-fahrenheit-to-celsius
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Fahrenheit to celcius
Made by     | Quinten Mahieu
_____________________________`);

function convertFahrenheitToCelcius(F) {
    const celcius = (F - 32) / 1.8;
    return celcius;
}

console.log(convertFahrenheitToCelcius(70))