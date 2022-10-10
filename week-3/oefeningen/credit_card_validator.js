let creditCard1 = "5158 0152 2332 8656A"; // true (real (fake name generator))
let creditCard2 = "4716 4806 8541 1242"; // true (real (fake name generator))
let creditCard3 = "4485 1430 7447 8458"; // true (real (fake name generator))
let creditCard4 = "6345 7734 7565 6451"; // false (fake)
let creditCard5 = "2345 6575 7687 4565"; // false (fake)

function verifyCreditCard(creditCard) {
  let n = creditCard.replace(/ /g, "");
  n = creditCard.toString();
  if (isNaN(n)) {
    return false;
  }

  if (n.length !== 16) {

  }
  return n;
}

console.log(verifyCreditCard(creditCard2));