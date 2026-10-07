let books = [];


// -----------------------------
// ADD BOOK
// -----------------------------

document
    .getElementById("bookForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let bookName =
            document.getElementById("bookName").value;

        let authorName =
            document.getElementById("authorName").value;

        let bookId =
            document.getElementById("bookId").value;


        let book = {
            id: bookId,
            name: bookName,
            author: authorName
        };


        books.push(book);

        displayBooks();

        document.getElementById("bookForm").reset();
    });


// -----------------------------
// DISPLAY BOOKS
// -----------------------------

function displayBooks(list = books) {

    let bookList =
        document.getElementById("bookList");

    let emptyMessage =
        document.getElementById("emptyMessage");


    bookList.innerHTML = "";


    if (list.length === 0) {

        emptyMessage.style.display = "block";

        return;
    }


    emptyMessage.style.display = "none";


    list.forEach(function(book, index) {

        let row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${book.id}</td>

            <td>${book.name}</td>

            <td>${book.author}</td>

            <td>

                <button
                    onclick="deleteBook(${index})">
                    Delete
                </button>

            </td>

        `;


        bookList.appendChild(row);

    });
}


// -----------------------------
// DELETE BOOK
// -----------------------------

function deleteBook(index) {

    books.splice(index, 1);

    displayBooks();
}


// -----------------------------
// SEARCH BOOK
// -----------------------------

document
    .getElementById("searchBook")
    .addEventListener("input", function() {

        let searchText =
            this.value.toLowerCase();


        let filteredBooks =
            books.filter(function(book) {

                return book.name
                    .toLowerCase()
                    .includes(searchText);

            });


        displayBooks(filteredBooks);

    });


// -----------------------------
// INITIAL DISPLAY
// -----------------------------

displayBooks();
