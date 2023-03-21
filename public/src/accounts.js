const findAccountById = (accounts, id) =>
  accounts.find((account) => account.id === id);

const sortAccountsByLastName = (accounts) =>
  accounts.sort((accountA, accountB) =>
    accountB.name.last < accountA.name.last ? 1 : -1
  );

const getTotalNumberOfBorrows = (account, books) => {
  const acctId = account.id;
  return books.reduce((total, { borrows }) => {
    if (borrows.some(({ id }) => id === acctId)) {
      total++;
    }
    return total;
  }, 0);
};

const getBooksPossessedByAccount = (account, books, authors) => {
  let borrowed = [];
  books.forEach((book) => {
    const { borrows } = book;
    if (
      borrows.some((borrow) => borrow.id === account.id && !borrow.returned)
    ) {
      borrowed.push(book);
    }
  });

  borrowed.forEach((book) => {
    const { authorId } = book;
    let eachAuthor = authors.find((author) => author.id === authorId);
    book["author"] = eachAuthor;
  });
  return borrowed;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};