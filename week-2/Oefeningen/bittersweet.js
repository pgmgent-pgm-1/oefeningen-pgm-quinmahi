/*
Bittersweet | Week 2 | https://www.pgm.gent/pgm-1/exercises/week_2.html#bittersweet
Hosted by | Michael Vanderpoorten
Made by | Quinten Mahieu
*/
console.log(`
░▄▀▀░▄▀▄░█▄░█░▄▀▀░▄▀▄░█▒░▒██▀
░▀▄▄░▀▄▀░█▒▀█▒▄██░▀▄▀▒█▄▄░█▄▄
_____________________________
Assignment  | Bittersweet
Made by     | Quinten Mahieu
_____________________________`);

// Loop / Console log
for (let x = 1; x <= 24; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("bittersweet")
    } else if (x % 5 === 0) {
        console.log("sweet")
    } else if (x % 3 === 0) {
        console.log("bitter")
    } else {
        console.log(x)
    }
}