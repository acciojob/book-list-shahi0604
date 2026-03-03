//your JS code here. If required.
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (!title || !author || !isbn) return;

  const row = document.createElement("tr");

  const titleCell = document.createElement("td");
  titleCell.textContent = title;

  const authorCell = document.createElement("td");
  authorCell.textContent = author;

  const isbnCell = document.createElement("td");
  isbnCell.textContent = isbn;

  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "X";
  deleteCell.appendChild(deleteBtn);

  row.appendChild(titleCell);
  row.appendChild(authorCell);
  row.appendChild(isbnCell);
  row.appendChild(deleteCell);

  bookList.appendChild(row);

  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
});

bookList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
  }
});
