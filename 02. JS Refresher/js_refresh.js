const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
const books = getBooks();
console.log("Books", books);

//NOT IDEAL
const book2 = getBook(2);
console.log(book2);
console.log("book title", book2.title);
console.log("book2 author", book2.author);

// Object DESTRUCTURING
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book2;
console.log("title", title);
console.log("author", author);
console.log("pages", pages);

//

//
// Array Destructuring
console.log("genres array", genres);
const [primaryGenre, secondaryGenre] = genres;
console.log("Primary Genre", primaryGenre);
console.log("Secondary Genre", secondaryGenre);

//

//
// Rest Operator
const [primGen, secGen, ...otherGens] = genres;
console.log("primGen", primGen);
console.log("secGen", secGen);
console.log("restGens", otherGens);

//

//
// Spread Operator - Arrays
const newGenres = [...genres, "epic fantasy"];
console.log("new Genres", newGenres);

//

//
// Spread Operator - Objects
const updatedBook = { ...book2, moviePublicationDate: "2001-01-01" };
console.log("updatedBook", updatedBook);

//  we can also OVERWRITE properties
const updatedBook2 = {
  ...book2,
  moviePublicationDate: "2022-02-20",
  pages: 1190,
};

console.log("updated book 2", updatedBook2);

//

//
// Arrow Functions
(str) => str.split("-")[1];
const getYear = (str) => str.split("-")[0];
console.log("year from arrow function", getYear("1992-01-01"));

//

//
// Short Circuiting
// && operator will automatically return the 1st operator when the 1st opperator is false
console.log(
  "first operator is true so we get the 2nd operator ----- ",
  true && "some string"
);

console.log(
  "first operator is false so we automatically get the first operator ---- ",
  false && "another string"
);

//  || (or) will work exactly is the OPPOSITE way
//  when the 1st operator is false, we get the 2nd operator
console.log(true || "some string");
console.log(false || "another string");

//

//
// Optional Chaining
//  this will throw an error since mylibrary does not exist in the object
// console.log(book2.reviews.mylibrary.reviewsCount);

//  that's why we are using the ? (optional chaining) operator togehter with the ?? to return default 0
console.log(book2.reviews.myLibrary?.reviewsCount ?? "0");

//

//
//Sort Method
const myArr = [
  1, 2, 3, 4, 56, 4, 123, 123, 321, 3211, 312321, 1, 1, 3, 2, 2, 1, 13, 4,
];
let sortedArray = myArr.sort((a, b) => a - b);
console.log("ASCENDING sortedArray", sortedArray);
sortedArray = myArr.sort((a, b) => b - a);
console.log("DESCENDING sortedArray", sortedArray);

//

//
//IMMUTABLE ARRAYS
// Add Elements wihthout changing the original Array
const newBook = {
  id: 6,
  title: "Harry Potter and Chamber of Secrets",
  author: "J.K. Rowling",
};

const booksAFterAdd = [...books, newBook];
console.log("Books after Add", booksAFterAdd);

// Delete Elements wihthout changing the original Array
const booksAfterDelete = booksAFterAdd.filter((item) => item.id !== 5);
console.log("books array after deletion", booksAfterDelete);

// Update the book object whthout changing the original Array
const booksAfterUpdate = booksAfterDelete.map((item) => {
  return item.id === 6
    ? { ...item, publicationDate: "THIS IS THE UPDATE" }
    : item;
});
console.log("books after update", booksAfterUpdate);

//

//
//  ASYNC JS
//
// FETCH API
const fetchData = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log("data", data));

//
//
//

// Async / Await
async function getResults() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log("new data from the Async/ Await function", data);
}

getResults();
