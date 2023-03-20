function renderTotalBooks() {
  const count = getTotalBooksCount(books);
  if (typeof count !== "number") return;

  const span = document.querySelector("#total-book-count");
  span.innerHTML = count;
}

function renderBooksBorrowed() {
  const count = getBooksBorrowedCount(books);
  if (typeof count !== "number") return;

  const span = document.querySelector("#total-borrow-count");
  span.innerHTML = count;
}

function renderTotalAccounts() {
  const count = getTotalAccountsCount(accounts);
  if (typeof count !== "number") return;

  const span = document.querySelector("#total-accounts-count");
  span.innerHTML = count;
}

function renderGetMostCommonGenres() {
  const result = getMostCommonGenres(books);
  if (typeof result !== "object") return;

  const lis = result
    .map((genre) => {
      return `<li class="list-group-item">${genre.name} <span class="text-primary">(${genre.count})</span></li>`;
    })
    .join("");

  const ul = document.querySelector("#most-common-genres");
  ul.innerHTML = lis;
}

function renderGetMostPopularBooks() {
  const result = getMostPopularBooks(books);
  if (typeof result !== "object") return;

  const lis = result
    .map((book) => {
      return `<li class="list-group-item">${book.name} <span class="text-primary">(${book.count} borrows)</span></li>`;
    })
    .join("");

  const ul = document.querySelector("#most-popular-books");
  ul.innerHTML = lis;
}

function renderGetMostPopularAuthors() {
  const result = getMostPopularAuthors(books, authors);
  if (typeof result !== "object") return;

  const lis = result
    .map((author) => {
      return `<li class="list-group-item">${author.name} <span class="text-primary">(${author.count} borrows)</span></li>`;
    })
    .join("");

  const ul = document.querySelector("#most-popular-authors");
  ul.innerHTML = lis;
}

function render() {
  renderTotalBooks();
  renderBooksBorrowed();
  renderTotalAccounts();
  renderGetMostCommonGenres();
  renderGetMostPopularBooks();
  renderGetMostPopularAuthors();
}

document.addEventListener("DOMContentLoaded", render);
