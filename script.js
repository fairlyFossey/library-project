
// create empty array
const library = [];

// create a constructor function for book objects
function Book(title, author, pageCount, hasFinished) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasFinished = hasFinished;
    this.id = crypto.randomUUID();
}

// create function that creates a new book object from arguments and appends it to the array
function addBookToLibrary(title, author, pageCount, hasFinished) {
    let newBook = new Book(title, author, pageCount, hasFinished);
    library.push(newBook);
}

addBookToLibrary("The Lord of the Rings", "J.R. Tolkien", 840, false);
addBookToLibrary("On the Origin of Species", "Charles Darwin", 524, true);
// console.table(library);

// create function that loops through array, displaying all books on the page 
function displayBooks(source) {

    // create a selector that targets where the books will display
    const bookCollection = document.querySelector(".book-collection-cntr");

    // create a loop that goes through each object in array
    for (const book of source) {
        // create the divs to be displayed 
        const card = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");

        // add classes to the divs plus info from the book object
        card.classList.toggle("book-card");
        title.classList.toggle("book-title");
        title.textContent = book.title;
        author.classList.toggle("book-author");
        author.textContent = book.author;

        // append element to parent node on page
        bookCollection.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
    }
}

displayBooks(library);

// add a button that allows users to add books to the library by filling out a form

// add a button to each book that can remove it from the library

// add a button to each book that can toggle its read/unread status
