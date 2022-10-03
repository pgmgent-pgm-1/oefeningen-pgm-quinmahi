const arr1 = [true, true, false, false];

for (let checker of arr1) { 
    console.log(checker);
}

const car1 = {
    brand: "Ford",
    model: "Focus",
    color: "gray",
    hp: 120,
}

for (const property in car1) {
    console.log(`${property} is ${car1[property]}`)
}