const arr = [
  "Eden Hazard",
  "Kevin De Bruyne",
  "Romelu Lukaku",
  "Thibault Courtois",
  "Dries Mertens",
];
console.log(arr);

/* For loop */
let tempStr = "";
for (let i = 0; i < arr.length; i++) {
  const index = arr.indexOf(arr[i]) + 1;
  tempStr += `Player ${index}: ${arr[i]} \n`;
}
console.log(tempStr);
tempStr = "";

/* For each loop */
arr.forEach((player) => {
  const index = arr.indexOf(player) + 1;
  tempStr += `Player ${index}: ${player} \n`;
});
console.log(tempStr);
tempStr = "";

/* For of loop */
let p = 1;
for (player of arr) {
  tempStr += `Player ${p}: ${player} \n`;
  p++;
}
console.log(tempStr);
tempStr = "";

/* For in loop */
p = 1;
for (player in arr) {
  tempStr += `Player ${p}: ${arr[player]} \n`;
  p++;
}
console.log(tempStr);