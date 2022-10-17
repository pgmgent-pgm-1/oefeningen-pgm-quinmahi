const books = [
  {
    title: "Harry Potter",
    author: "JK fucking rowling",
    alreadyRead: true,
  },
  {
    title: "Minecraft redstone edition",
    author: "Notch",
    alreadyRead: false,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    alreadyRead: true,
  },
];

const text = `
=============================================================================
|                               READING LIST                                |
=============================================================================
${books.map((book) => {
  if (book.alreadyRead) {
    return `You already read ${book.title} by ${book.author}`;
  } else {
    return `You still need to read ${book.title} by ${book.author}`;
  }
}).join("\n")}
=============================================================================
`;

console.log(text);
