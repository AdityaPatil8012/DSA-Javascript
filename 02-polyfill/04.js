// filter out books published before the year 2000 and return their title;

const books = [
  {title: "Book 1", year: 1998},
  {title: "Book 2", year: 2003},
  {title: "Book 3", year: 1995},
  {title: "Book 4", year: 2001},
];


const booksAfter2000 = books
  .filter(book => book.year > 2000)   // Filter books
  .map(book => book.title);           // Get their titles


  booksAfter2000