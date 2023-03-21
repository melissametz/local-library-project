const getTotalBooksCount = (books) => countItems(books);

const getTotalAccountsCount = (accounts) => countItems(accounts);

const getBooksBorrowedCount = (books) =>
  books.reduce((total, { borrows }) => {
    if (!borrows[0].returned) {
      total++;
    }
    return total;
  }, 0);

const getMostCommonGenres = (books) => {
  const genreCount = books.reduce((acc, { genre }) => {
    if (!acc[genre]) {
      acc[genre] = 0;
    }
    acc[genre]++;
    return acc;
  }, {});
  return Object.entries(genreCount)
    .map(([name, count]) => ({ name, count }))
    .sort((genreA, genreB) => genreB.count - genreA.count)
    .slice(0, 5);
};

const getMostPopularBooks = (books) => {
  return books
    .map(({ title, borrows }) => ({ name: title, count: borrows.length }))
    .sort((bookA, bookB) => bookB.count - bookA.count)
    .slice(0, 5);
};

const getMostPopularAuthors = (books, authors) => {
  const authorCount = authors.reduce((acc, author) => {
    const {
      name: { first, last },
      id,
    } = author;
    const authorName = `${first} ${last}`;
    acc[authorName] = books.reduce((total, { borrows, authorId }) => {
      if (authorId === id) {
        total += borrows.length;
      }
      return total;
    }, 0);
    return acc;
  }, {});
  return Object.entries(authorCount)
    .map(([name, count]) => ({ name, count }))
    .sort((authorA, authorB) => authorB.count - authorA.count)
    .slice(0, 5);
};

//created helper function
const countItems = (arr) => arr.length;

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
  countItems,
};
