const n2 = 4; // 4 * 3 * 2 * 1 = 24
let result = n2;

for (let i = n2 - 1; i > 0; i--) {
  result = result * i;
}
console.log(result);
