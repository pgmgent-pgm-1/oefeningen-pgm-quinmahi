function guessPin(n) {
  let code = 4356;
  for (let i = 0; i < Infinity; i++) {
      if (n === code) {
        return "Congrats, you guessed it!";
      } else {
        return ("Care to guess again?");
    }
  }
}

console.log(guessPin(4356));
