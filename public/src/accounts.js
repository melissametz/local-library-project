function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountB.name.last < accountA.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  const acctId = account.id;
  return books.reduce((total, { borrows }) => {
    if (borrows.some((record) => record.id === acctId)) total++;
    return total;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrowed = [];
  books.forEach((book) => {
    if (book.borrows.find((item) => item.id === account.id && !item.returned)) {
      borrowed.push(book);
    }
  });

  borrowed.forEach((book) => {
    let eachAuthor = authors.find((person) => person.id === book.authorId);
    book["author"] = eachAuthor;
  });
  return borrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
