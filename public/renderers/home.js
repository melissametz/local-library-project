const renderTotalBooks = () => {
  const count = getTotalBooksCount(books);
  if (typeof count !== "number") return;

  const span = document.querySelector("#total-book-count");
  span.innerHTML = count;
};

const renderBooksBorrowed = () => {
  const count = getBooksBorrowedCount(books);
  if (typeof count !== "number") return;

  const span = document.querySelector("#total-borrow-count");
  span.innerHTML = count;
};

const renderTotalAccounts = () => {
  const count = getTotalAccountsCount(accounts);
  if (typeof count !== "number") return;

  const span = document.querySelector("#total-accounts-count");
  span.innerHTML = count;
};

const renderGetMostCommonGenres = () => {
  const result = getMostCommonGenres(books);
  if (typeof result !== "object") return;

  const lis = result
    .map((genre) => {
      return `<li class="list-group-item">${genre.name} <span class="font-weight-bold">(${genre.count})</span></li>`;
    })
    .join("");

  const ul = document.querySelector("#most-common-genres");
  ul.innerHTML = lis;
};

const renderGetMostPopularBooks = () => {
  const result = getMostPopularBooks(books);
  if (typeof result !== "object") return;

  const lis = result
    .map((book) => {
      return `<li class="list-group-item">${book.name} <span class="font-weight-bold">(${book.count} borrows)</span></li>`;
    })
    .join("");

  const ul = document.querySelector("#most-popular-books");
  ul.innerHTML = lis;
};

const renderGetMostPopularAuthors = () => {
  const result = getMostPopularAuthors(books, authors);
  if (typeof result !== "object") return;

  const lis = result
    .map((author) => {
      return `<li class="list-group-item">${author.name} <span class="font-weight-bold">(${author.count} borrows)</span></li>`;
    })
    .join("");

  const ul = document.querySelector("#most-popular-authors");
  ul.innerHTML = lis;
};

const render = () => {
  renderTotalBooks();
  renderBooksBorrowed();
  renderTotalAccounts();
  renderGetMostCommonGenres();
  renderGetMostPopularBooks();
  renderGetMostPopularAuthors();
};

document.addEventListener("DOMContentLoaded", render);
