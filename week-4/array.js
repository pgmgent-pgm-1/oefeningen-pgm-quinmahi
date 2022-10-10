const cocktails = [
  {
    name: "Moscow Mule",
    ingredients: ["wodka", "suiker", "limoensap", "ginger bier"],
  },
  {
    name: "Pornstar Martini",
    ingredients: ["wodka", "passievrucht", "martinini"],
  },
  {
    name: "Cubra Libre",
    ingredients: ["rum", "cola", "limoen"],
  },
];

for (let cocktail of cocktails) {
  console.log(cocktail.name);
}

// filter (evenveel, minder of zelf geen items)
const filtered = cocktails.filter((cocktail) => {
  return cocktail.ingredients.includes("wodka");
});
console.log(filtered);

// find (max 1 item)
const hasWodka = cocktails.find((cocktail) => {
  return cocktail.ingredients.includes("wodka");
});
console.log(hasWodka);

// map (altijd evenveel items)
const mapped = cocktails.map((cocktail) => {
  return `Ya yeet we has ${cocktail.name}`;
});

console.log(mapped);
