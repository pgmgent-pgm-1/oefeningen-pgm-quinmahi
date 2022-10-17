const generate = [];

function generateListOfNumbers(n) {
  for (let i = 0; i < n; i++) {
    generate.push(Math.round(Math.random() * 1000));
  };
  return generate;
};

console.log(generateListOfNumbers(10));
console.log(generateListOfNumbers(25));
console.log(generateListOfNumbers(65));