const findAuthorById = (authors, id) =>
  authors.find((author) => author.id === id);

const findBookById = (books, id) => books.find((book) => book.id === id);

const partitionBooksByBorrowedStatus = (books) => {
  const borrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  const returned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );
  return [[...borrowed], [...returned]];
};

const getBorrowersForBook = (book, accounts) => {
  const borrowers = [];
  book.borrows.forEach((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id);
    const status = { ...account, returned: borrow.returned };
    borrowers.push(status);
  });
  return borrowers.slice(0, 10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
