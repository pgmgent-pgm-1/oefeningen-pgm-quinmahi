const colors = ["Red", "Green", "White", "Black"];
console.log(colors);
let arrLength = colors.push("Yellow", "Blue");
console.log(arrLength);
let removedElement = colors.pop();
console.log(removedElement);
const removedElements = colors.splice(3, 0, "Orange")
console.log(removedElements);
console.log(colors);
removedElement = colors.shift();
console.log(removedElement);
console.log(colors);
arrLength = colors.unshift("Fushia", "Purple");
console.log(arrLength);
console.log(colors);
const copy = ["Red", "Green", "White", "Black"];
console.log(copy);