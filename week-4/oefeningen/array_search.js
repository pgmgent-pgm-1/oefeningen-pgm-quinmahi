const arr = ["ant", "bison", "camel", "duck", "bison"];

/* Search for index of */
let foundIndex = arr.indexOf("bison");
console.log(foundIndex);

/* Search from defined index for */
foundIndex = arr.indexOf("bison", 2);
console.log(foundIndex);

/* Search for index of */
foundIndex = arr.indexOf("capibara");
console.log(foundIndex);

/* Search for last index of */
foundIndex = arr.lastIndexOf("bison");
console.log(foundIndex);

/* Search for last index from a defined inxed of */
foundIndex = arr.lastIndexOf("bison", 5);
console.log(foundIndex);

const arr2 = [5, 12, 8, 130, 44];

// Find largest number
foundIndex = arr2.findIndex((number) => {
  return number > 13;
});
console.log(foundIndex);

// find first element larger then 10
foundIndex = arr2.findIndex((number) => number > 10); // Same as line 26
console.log(foundIndex);

const arr3 = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const filterWords = arr3.filter((word) => word.length > 6);
console.log(filterWords);
