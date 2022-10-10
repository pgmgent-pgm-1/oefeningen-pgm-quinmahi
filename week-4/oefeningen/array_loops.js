const arr = ["Eden Hazard", "Kevin De Bruyne", "Romelu Lukaku", "Thibault Courtois", "Dries Mertens"];
console.log(arr);
let tempStr = "";
for (player of arr) {
    let index = arr.indexOf(player) + 1;
    tempStr += `Player ${index}: ${player} \n`;
}
console.log(tempStr);
tempStr = "";
