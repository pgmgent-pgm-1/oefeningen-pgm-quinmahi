const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Gem Squash Tokoloshe",
    author: "Zadok Rachel",
    libraryID: 3245,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
];

// Sort + output
library.sort((a, b) => {
  if (a.author < b.author) return -1;
  return 1;
});
console.log("---Alfabetische---");
console.log(library);

library.sort((a, b) => {
  if (a.author > b.author) return -1;
  return 1;
});
console.log("---Alfabetische omgekeerd---");
console.log(library);

library.sort((a, b) => a.libraryID - b.libraryID);
console.log("---Op libaryID---");
console.log(library);

library.sort((a, b) => b.libraryID - a.libraryID);
console.log("---Op libaryID omgekeerd---");
console.log(library);