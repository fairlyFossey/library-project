const library = [];
const bookCollection = document.querySelector(".book-collection-cntr");

// book constructor
function Book(title, author, pageCount, hasFinished) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasFinished = hasFinished;
    this.id = crypto.randomUUID();
}

// store books in arr
function addBookToLibrary(title, author, pageCount, hasFinished) {
    let newBook = new Book(title, author, pageCount, hasFinished);
    library.push(newBook);
}


// display books on page
function displayBookCollection(arr) {
    for (const obj of arr) {
        displayBook(obj)
    }
}

function displayBook(obj) {
    // create divs
    const card = document.createElement("div");
    card.classList.toggle("book-card");

    const title = document.createElement("div");
    title.classList.toggle("book-title");
    title.textContent = book.title;

    const author = document.createElement("div");
    author.classList.toggle("book-author");
    author.textContent = book.author;

    // add to dom
    bookCollection.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
}


// button press opens modal-dialog form 

    // form submission creates new book and displays it

// function to remove book from collection

// function to toggle the read status of books

addBookToLibrary("The Lord of the Rings", "J.R. Tolkien", 840, false);
addBookToLibrary("On the Origin of Species", "Charles Darwin", 524, true);

displayBookCollection(library);
